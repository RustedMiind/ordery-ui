// import component moduls
import Appref from "../Component/Appref/Appref";
import Footer from "../Component/Footer/Footer";
import Header from "../Component/Header/Header";
import LogIn from "../Component/Log-In/LogIn";
import Sliders from "../Component/Sliders/Sliders";

// import styleSheet 
import "./style-home.scss"

function Home() {
  return <div className="home">
    <Header />
    <div className="landing">
      <LogIn />
      <>
        <Sliders />
      </>
    </div>
    <>
      <Appref />
    </>
    <Footer />
  </div>;
}

export default Home;
