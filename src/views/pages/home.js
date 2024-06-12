
import { Container,Col,Row, Button } from "react-bootstrap";



function Home(){

    return (

        <div className=" container-fluid vh-100 d-flex justify-content-center align-items-center">
        <div className="bg-light p-5 rounded" style={{ width: '50%' }}>
        {/* Conteúdo da sua div */}
        <h3>Bem vindo ao Go Horse cadastro</h3>
        <p>Sem internet, IA só no celular e uma boa dose de café e amor</p>
        <div className="d-flex justify-content-center align-items-center m-3">
        <Button href="/register" variant="primary">Criar Conta</Button>
        <Button href="/login" variant="secondary">Login</Button>
        
        
      </div>
      </div>
      
    </div>

        



       
    )
}

export default Home;