
import {  Button } from "react-bootstrap";
import UploadComponent from "../components/uploadComponet";



function Home(){

    return (

        <div className=" container-fluid vh-100 d-flex justify-content-center align-items-center">
        <div className="bg-light p-5 rounded text-center" style={{ width: '50%' }}>
        {/* Conteúdo da sua div */}

        <h3>Bem vindo ao cadastro <strong>Sysorga</strong> </h3>
        <p>Sem internet, IA só no celular e uma boa dose de café e amor</p>
        <div className="d-flex justify-content-evenly align-items-center ">
        <Button href="/register" variant="primary">Criar Conta</Button>
        <Button href="/login" variant="secondary">Login</Button>

        
        
      </div>
      <UploadComponent/> 
      </div>
      
    </div>

        



       
    )
}

export default Home;