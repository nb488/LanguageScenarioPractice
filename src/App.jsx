// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'


import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import About from "./pages/About";
import Vocab from "./pages/vocab";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ChatApp from "./pages/ChatApp";


function App() {

  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<ChatApp />} />
          <Route path="/about" element={<About />} />
          <Route path="/vocab" element={<Vocab />} />
        </Routes>
      <Footer />
    </BrowserRouter>

  )

}

export default App;








// o.r. api: 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