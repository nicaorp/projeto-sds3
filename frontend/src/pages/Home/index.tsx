import Footer from "components/Footer";
import NavBar from "components/NavBar";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>


            <NavBar />
            <div className="jumbotron d-flex align-items-center vh-100">
                <div className="container ">
                    <h1 className="display-4 ">DSVendas</h1>
                    <p className="lead">
                        Analise o desempenho das suas vendas por diferentes perspectivas
                    </p>
                    <hr />
                    <p>
                        Esta aplicação consiste em exibir um dashboard a partir de dados
                        fornecidos por um back end construído com Spring Boot.
                    </p>
                    <Link className="btn btn-primary btn-lg" to="/dashboard">
                        Acessar Dashboard
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    );
}


export default Home;