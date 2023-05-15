import './App.css';
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Testimonial from './components/testimonial/Testimonial'
import Contact from './components/contact/Contact'




    const App = () => {
    return (
    <>
    <Header/>
    <Navbar/>
    <About/>
    <Experience/>
    <Testimonial/>
    <Contact/>
    </>
    );
    }

    
export default App;