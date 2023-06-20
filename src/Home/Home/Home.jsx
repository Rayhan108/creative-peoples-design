import About from "./About/About";
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
        </div>
    );
};

export default Home;