import "./Homepage.scss";
import Navigation from "../../components/Navigation/Navigation"
import Hero from "../../components/Hero/Hero";
import Content from "../../components/Content/Content";
import Footer from "../../components/Footer/Footer";
import Reviews from "../../components/Reviews/Reviews";


export default function Homepage() {
    return (
      <>
        <Navigation />
        <Hero />
        <Content />
        <Reviews />
        <Footer />
      </>
    );
  }