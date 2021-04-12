import Header from "../components/Header/Header";
import {Container} from "react-bootstrap";
import Slide from "../components/Carousel/Carousel";
import Advantages from "../components/Advantages/Advantages";
import CTA from "../components/CTA/CTA";
import BookList from "../components/BooksList/BooksList";
import Footer from "../components/Footer/Footer";
import Modal from "../components/Modal/Modal";


const Home = () => {
  return (
    <Container>
      <Header />
      <Slide />
      <Advantages/>
      <CTA/>
      <BookList/>
      <Modal/>
      <Footer/>
    </Container>
  );
}

export default Home;
