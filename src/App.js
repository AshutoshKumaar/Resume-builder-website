import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homescreen from './Pages/Homescreen';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Authentication from './Pages/Authentication';
import  { QueryClient,   QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



import './App.css';

function App() {
  const queryClient = new QueryClient()
  return (
    <div>
      <QueryClientProvider client={queryClient}>
      <Suspense fallback ={<div>Loadxing</div>}>
      <Router>
        <Routes>
          <Route path="/" element={<Homescreen />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/authenticate' element = {<Authentication />} />
        </Routes>
      </Router>
      </Suspense>
      <ToastContainer theme='dark' position='top-left' />
      <ReactQueryDevtools initialIsOpen= 'false' />
      </QueryClientProvider>
    </div>
  );
}

export default App;
