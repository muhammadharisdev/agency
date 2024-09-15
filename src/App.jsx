import './App.css'
import Navbar from './components/navbar'
import InquiryForm from './components/form'
import Section from './components/Section'
import About from './components/About'
import Service from './components/Service'
import Footer from './components/footer'
import  Project from './components/project'
function App() {

  return (
    <>
    <Navbar />
    <Section />
    <About />
    <Service />
    <Project/>
    <InquiryForm />
    <Footer />
    </>  )
}

export default App;
