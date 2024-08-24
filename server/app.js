const express = require('express');
const multer = require('multer');
const pdfParse = require('pdf-parse');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const PDFDocument = require('pdfkit');

const app = express();
const port = 3000;

const upload = multer({ dest: 'uploads/' });
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const genAI = new GoogleGenerativeAI("api key");

async function getGeminiResponse(prompt) {
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  return text;
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/upload', upload.single('resume'), async (req, res) => {
  const jd = req.body.jd;
  const resumePath = req.file.path;

  try {
    const dataBuffer = fs.readFileSync(resumePath);
    const pdfText = await pdfParse(dataBuffer);

    const inputPrompt = `
    You are an experienced and well-developed notes simplifier which makes notes designer and make its easy to learn. Please make the notes below more engaging for students with special needs. Format the notes in a structured manner and remove all special characters like '**' from the output text, using '--' instead.

    Notes: ${pdfText.text}
    `;

    const response = await getGeminiResponse(inputPrompt);
    const cleanResponse = response.replace(/\*\**/g, '').replace(/##/g, '--');

    const doc = new PDFDocument();
    let pdfData = [];
    doc.on('data', chunk => pdfData.push(chunk));
    doc.on('end', () => {
      const pdfBuffer = Buffer.concat(pdfData);
      res.setHeader('Content-Disposition', 'attachment; filename="response.pdf"');
      res.setHeader('Content-Type', 'application/pdf');
      res.send(pdfBuffer);
    });

    doc.text(cleanResponse);
    doc.end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  } finally {
    fs.unlinkSync(resumePath);
  }
});

app.listen(3000, () => {
  console.log(`Server is running at http://localhost:${3000}`);
});
