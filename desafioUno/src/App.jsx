import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyCard from "./components/MyCard";
import Header from "./components/Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Footer } from "./components/Footer";
import ImgHusky from "./assets/husky.jpg";
import ImgBobtail from "./assets/Bobtail.png";
import ImgSharpei from "./assets/sharPei.png";
import ImgBeagle from "./assets/Beagle.png";

function App() {
  return (
    <>
      <Header nombre="Adopta un perrito" />
      <Container fluid>
        <Row>
          <Col>
            <MyCard
              nombre="Bartolo"
              direccionImagen={ImgHusky}
              texto="Lleno de energía y listo para jugar. ¡Dale a Bartolo el hogra amoroso que se merece."
              colorFondo="success"
              tagTexto="Husky"
            />
          </Col>
          <Col>
            <MyCard
              nombre="Messi"
              direccionImagen={ImgBobtail}
              texto="Es juguetón, amigable y se lleva bien con niños y otros animales. ¡Haz de Messi parte de tu familia hoy mismo!"
              colorFondo="primary"
              tagTexto="Bobtail"
            />
          </Col>
          <Col>
            <MyCard
              nombre="Gohan"
              direccionImagen={ImgSharpei}
              texto="Un perro de tamaño mediano con un corazón gigante. ¡Hazte amigo de Gohan y experimenta un amor incondicional!"
              colorFondo="danger"
              tagTexto="Shar Pei"
            />
          </Col>
          <Col>
            <MyCard
              nombre="Princesa"
              direccionImagen={ImgBeagle}
              texto="Es una compañera leal y cariñosa que adora los mimos y los abrazos. ¡Ayuda a Princesa a encontrar su final feliz!"
              colorFondo="warning"
              tagTexto="Beagle"
            />
          </Col>
        </Row>
      </Container>
      <Footer footerTexto="Explora nuestra galería de adopción de perros para encontrar a tu compañero perfecto. Tenemos una variedad de perros con diferentes personalidades y tamaños, todos en busca de un hogar amoroso. Cada imagen captura su esencia única. Adopta un perro y bríndale una segunda oportunidad. Encuentra a tu compañero peludo para siempre." />
    </>
  );
}

export default App;
