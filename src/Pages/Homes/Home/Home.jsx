import About from "../About/About";
import Banner from "../Banner/Banner";
import Feature from "../Features/Feature";
import Info from "../Info/Info";
import Popular from "../PopularProducts/Popular";
import Service from "../Services/Service";
import Team from "../Teams/Team";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Service></Service>
            <Info></Info>
            <Popular></Popular>
            <Team></Team>
            <Feature></Feature>
            <h2>home</h2>
        </div>
    );
};

export default Home;