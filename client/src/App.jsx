import './App.css'
import Navbar from './components/Navbar'

import KK from './components/Kk';

import Score from './components/Score';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Response from './components/Response';
import Navhome from './components/Navhome';
import Tts from './components/Tts';
import Quizz from './components/Quizz';
import Quizpage from './components/Quizpage';
import Resultpage from './components/Resultpage';
import Bulletin from './components/Bulletin';
import Header from './components/Header';
import Second from './components/Second';
import Third from './components/Third';
import Forth from './components/Forth';
import Fifth from './components/Fifth';

import About from './components/About';
import Footer from './components/Footer';
// import  from './components/OurJourney'



import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Button from "./components/Button";
import OurJourney from "./components/OurJourney";


function App() {
  const router = createBrowserRouter([
    {
      path: "/home",
      element: <><Navbar /><Header /><Button/><Second /><Third/><Forth/><Fifth/><Footer/></>
    },
    {
    path: "/",
    element: <><Navbar /><Header /><Button/><Second /><Third/><Forth/><Fifth/></>

  },
    // {
    //   path: "/score",
    //   element: <><Navbar /></>
    // },


    {
      path: "/response",
      element: <><Navbar /><Response /></>
    },
    {
      path: "/bulletin",
      element: <><Navbar /><Bulletin /></>
    },
    {
      path: "/tts",
      element: <><Navbar /><Tts /></>
    },
    {
      path: "/enhance",
      element: <><Navbar />< Score/></>},

    {
      path: "/about",
      element: <><Navbar /><About /></>
    },

    {
      path: "/Resultpage",
      element: <><Navbar /><Resultpage /></>
    },

    {
      path: "/quizz",
      element: <>
        <Navbar /><Quizz />
      </>
    },

    {
      path: "/Quizpage",
      element: <>
        <Navbar /><Quizpage />
      </>
    },

    {
      path: "/OurJourney",
      element: <>
        <Navbar /><OurJourney />
      </>
    },
    // {
    //   path: "/Resultpage",
    //   element: <>
    //     <Navbar /><Resultpage />
    //   </>
    // }
  ])
  return (

    <>
      <RouterProvider router={router} />
      {/* <FeatureSection /> */}
      </>

    // <div className="App">
    //   <Header />
    //   <FeatureSection />
    //   <Testimonials />
    //   <HowItWorks />
    //   <AboutUs />
    //   <Footer />
    // </div>

  )
}

export default App

// import React from 'react';
// import Navbar from './components/Navbar';

// const App = () => {
//   return (
//     <div>
//       <Navbar/>
//     </div>
//   );
// }

// export default App;