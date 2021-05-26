import Header from "../components/Header/Header";
import {Container} from "react-bootstrap";
import Footer from "../components/Footer/Footer";
import BookList from "../components/BooksList/BooksList";
import Title from "../components/PageTitle/Title";
import PaginationComponent from "../components/Pagination/Pagination";


const Categories = () => {
  


  return (
    <Container>
      <Header />
      <Title/>
      <BookList/>
      <PaginationComponent/>
      <Footer/>
    </Container>
  );
}

export default Categories;
