import Navbar from "./components/navbarSection/navbar";
import Banner from "./components/bannerSection/banner";
import FeaturesSection from "./components/FeaturesSection/FeaturesSection";
import ExampleSection from "./components/ExampleSection/ExampleSection";
import AboutSection from "./components/AboutSection/AboutSection";
import FAQSection from "./components/FAQSection/FAQSection";
import ContactSection from "./components/ContactSection/ContactSection";
import CallToActionSection from "./components/CallToActionSection/CallToActionSection";
import Footer from "./components/FooterSection/Footer";


import TestimonialSection from "./components/TestimonialSection/TestimonialSection";

import { ThemeProvider, createTheme } from '@mui/material/styles';
import Container from '@mui/material/Container'


const theme = createTheme({

});
function App() {
 
  return (
    <>
     <ThemeProvider theme={theme}>

        <Navbar />
        <Banner />
       <FeaturesSection />
        <TestimonialSection />
       <Container maxWidth="lg">
        <ExampleSection/>
       </Container>
        <AboutSection/>

           <FAQSection />
           <ContactSection/>
        <Container maxWidth="lg">
        </Container>
           <CallToActionSection />
           <Footer />
     </ThemeProvider>
    </>
  )
}

export default App
