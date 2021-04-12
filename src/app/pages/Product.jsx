import Header from "../components/Header/Header";
import {Container} from "react-bootstrap";
import Footer from "../components/Footer/Footer";
import Title from "../components/PageTitle/Title";
import ProductInfo from "../components/ProductInfo/ProductInfo";


const ProductPage = () => {
  return (
    <Container>
      <Header />
      <ProductInfo/>
      <Footer/>
    </Container>
  );
}

export default ProductPage;
