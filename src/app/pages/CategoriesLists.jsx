import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import CategoriesList from "../components/CategoriesList/CategoriesList";
import { Container } from "react-bootstrap";

const CategoriesLists = () => {
  return (
    <Container>
      <Header />
      <CategoriesList />
      <Footer />
    </Container>
  );
};

export default CategoriesLists;
