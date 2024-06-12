import NavBar from "../components/navBarComponent";
import AutoCep from "../components/autocepComponent";
import { Container } from "react-bootstrap";



function Home (){

    return (
        <div>
            <Container>
           <div >
            <h3>Bem vindo ao Go Horse cadastro</h3>
            <p>Sem internet, IA só no celular e uma boa dose de café e amor</p>
           </div>
           </Container>
        </div>
    )
}

export default Home;