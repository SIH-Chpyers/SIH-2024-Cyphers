import './App.css';
import Navbar from './components/Navbar';
import KK from './components/Kk';
import About from './components/About';
import Score from './components/Score';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

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
import Button from "./components/Button";
import OurJourney from "./components/OurJourney";
import Footer from './components/Footer';
import Login from './components/Login';
import Navbarx from './components/Navbarx';
import Navbary from './components/Navbary';

import Signup from "./components/Signup.jsx";

function App() {
    const router = createBrowserRouter([
        {
            path: "/home",
            element: <><Navbar /><Header /><Button /><Second /><Third /><Forth /><Fifth /><Footer /></>,
        },
        {
            path: "/",
            element: <><Navbarx /><Login/></>,
        },
        {
            path: "/Login",
            element: <><Navbarx /><Login/></>,
        },
        {
            path: "/Signup",
            element: <><Navbary /><Signup/></>,
        },
        {
            path: "/response",
            element: <><Navbar /><Response /></>,
        },
        {
            path: "/bulletin",
            element: <><Navbar /><Bulletin /></>,
        },
        {
            path: "/about",
            element: <><Navbar /><About /></>,
        },
        {
            path: "/enhance",
            element: <><Navbar /><Score /></>,
        },
        {
            path: "/score",
            element: <><Navbar /><Quizz /></>,
        },
        {
            path: "/quizz",
            element: <><Navbar /><Quizz /></>,
        },
        {
            path: "/Quizpage",
            element: <><Navbar /><Quizpage /></>,
        },
        {
            path: "/Resultpage",
            element: <><Navbar /><Resultpage /></>,
        },
        {
            path: "/OurJourney",
            element: <><Navbar /><OurJourney /></>,
        }
    ]);

    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
