import Course from "./components/Course";
import FaqAccordion from "./components/FaqAccordion";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import RegistrationForm from "./components/RegistrationForm";
import Review from "./components/Review";
import Slider from "./components/Slider";
import TrainerProfile from "./components/TrainerProfile";


import './index.css'
import './responsive.css';

function App() {
  return (
   <>
   <Header/>
   <Slider/>
   <Navigation/>
   <Course/>
   <RegistrationForm />
   <TrainerProfile/>
   <FaqAccordion/>
   <Review/>
   <Footer/>
   </>
  );
}

export default App;
