import About from "./About/About";
import Feature from "./Feature/Feature";
import Header from "./Header/Header";
import Services from "./Services/Services";
import Sponser from "./Sponser/Sponser";


const Home = () => {
    return (
        <div>
           <Header></Header>
           <Sponser></Sponser>
           <About></About>
           <Services></Services>
           <Feature></Feature>
        </div>
    );
};

export default Home;