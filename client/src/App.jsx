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

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path: "/home",
      element: <><Navbar /><Score /></>
    },
    {
    path: "/",
    element: <><Navbar /><Score /></>
       
  },
    // {
    //   path: "/score",
    //   element: <><Navbar /></>
    // },


    {
      path: "/kk",
      element: <><Navbar /><KK /></>
    },
    {
      path: "/tts",
      element: <><Navbar /><Tts /></>
    },

    {
      path: "/score",
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