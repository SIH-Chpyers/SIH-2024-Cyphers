import './App.css'
import Navbar from './components/Navbar'

import KK from './components/Kk';

import Score from './components/Score';

import Response from './components/Response';
import Navhome from './components/Navhome';
import Tts from './components/Tts';
import Quizz from './components/Quizz';

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
    {
      path: "/score",
      element: <><Navbar /></>
    },


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
      element: <><Navbar /><Score /></>
    },

    {
      path: "/quizz",
      element: <>
        <Navbar /><Quizz />
      </>
    }
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
