
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Home/Home';
// import About from './Component/About/About';
import Skills from './Component/skills/Skills';
// import {Routes,Route,BrowserRouter} from 'react-router-dom'
import Work from './Component/work/Work';
import Contact from './Component/contact/Contact';
import Footer from './Component/Footer/Footer';


function App() {
  return (
    <>
    <Navbar />
    <Home />
    <Skills 
      id='skills'
    />
    <Work 
    id='work'
    />
   <Contact
   id='contact'
    />
   <Footer />


    {/* <BrowserRouter>
    <Routes>
<Route path='/' element={  <Home />} />
<Route path='/skills' element={  <Skills />} />
<Route path='/work' element={  <Work />} />
   
   
    </Routes>
    </BrowserRouter> */}



    </>
  );
}

export default App;
