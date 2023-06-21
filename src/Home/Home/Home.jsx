import About from "./About/About";
import Clients from "./Clients/Clients";
import Feature from "./Feature/Feature";
import Header from "./Header/Header";
import OurTeam from "./OurTeam/OurTeam";
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
           <OurTeam></OurTeam>
           <Clients></Clients>
        </div>
    );
};

export default Home;