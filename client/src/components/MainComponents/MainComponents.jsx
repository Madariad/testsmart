import Navbar from "./navbarSection/navbar";
import Banner from "./bannerSection/banner";
import FeaturesSection from "./FeaturesSection/FeaturesSection";
import ExampleSection from "./ExampleSection/ExampleSection";
import AboutSection from "./AboutSection/AboutSection";
import FAQSection from "./FAQSection/FAQSection";
import ContactSection from "./ContactSection/ContactSection";
import CallToActionSection from "./CallToActionSection/CallToActionSection";
import Footer from "./FooterSection/Footer";
import EnglishTestSection from "./englishTestSection/EnglishTestSection";


import TestimonialSection from "./TestimonialSection/TestimonialSection";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Container from '@mui/material/Container'


const theme = createTheme({

});

function MainComponents() {
    return (
        <>
        <ThemeProvider theme={theme}>
            <Navbar />
            <Banner />
            <FeaturesSection />
            <TestimonialSection />
            <ExampleSection/>
            <EnglishTestSection />
            <AboutSection/>
            <FAQSection />
            <ContactSection/>
            <CallToActionSection />
            <Footer />
        </ThemeProvider>
        
        </>
    )
}
export default MainComponents