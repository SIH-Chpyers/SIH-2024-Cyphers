const express = require('express');
const multer = require('multer');
const pdfParse = require('pdf-parse');
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');

dotenv.config();

const apiKey = process.env.GOOGLE_API_KEY || 'AIzaSyAzA-aV0-7Tj2z06bs906d7InTVoCtdaUI';
const genAI = new GoogleGenerativeAI(apiKey);

const app = express();


app.use(cors());

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const storage = multer.memoryStorage();
const upload = multer({ storage });

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/upload', upload.single('pdf'), async (req, res) => {
  try {
      const data = await pdfParse(req.file.buffer);
      const pdfText = data.text;

      const { numQuestions, language } = req.body;
      if (!numQuestions || isNaN(numQuestions) || numQuestions <= 0) {
          return res.status(400).json({ error: 'Invalid number of questions' });
      }

      if (!language) {
          return res.status(400).json({ error: 'Language preference is required' });
      }

      const questions = await questionGenerator(pdfText, numQuestions, language);

      res.json({ questions });
  } catch (err) {
      console.error('Error processing PDF and generating quiz:', err.message);
      res.status(500).json({ error: 'Failed to process PDF and generate quiz' });
  }
});


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

async function questionGenerator(text, numQuestions, language) {
  const model = genAI.getGenerativeModel({ model: 'gemini-1.0-pro-latest' });

  const finalPrompt = `I will give you some text on a topic

  text: ${text}

  According to the above given text, generate ${numQuestions} multiple-choice questions. Each question should have 3 wrong answers and 1 right answer. Format the response as a JSON array where each object represents a question:

  [
      {
          "ques": "Question text",
          "o1": "Option 1",
          "o2": "Option 2",
          "o3": "Option 3",
          "o4": "Option 4",
          "correct": "o1"
      },
      ...
  ]

  Ensure each question object strictly adheres to this format and generate exactly ${numQuestions} questions. IN ${language} LANGUAGE`;

  try {
      const result = await model.generateContent(finalPrompt);
      const responseText = result.response.text();


      const jsonMatch = responseText.match(/\[.*?\]/s);
      if (!jsonMatch) {
          throw new Error('No valid JSON array found in the response');
      }

      const questions = JSON.parse(jsonMatch[0]);
      return questions;
  } catch (error) {
      console.error('Error generating questions:', error);
      return [];
  }
}
