import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './src/components/Main';
import Footer from './src/components/Footer';
import Navbar from './src/components/Navbar';

const App = () => {
  return (
    <><div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <Navbar/>
      <Main/>
      <Footer/>
    </div>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(App())



export default App