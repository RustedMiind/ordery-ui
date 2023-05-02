// import component moduls
import Appref from "../components/Appref/Appref";
import Footer from "../components/Footer/Footer";
import LogIn from "../components/Log-In/LogIn";
import Sliders from "../components/Sliders/Sliders";

// import styleSheet
import "./style-home.scss";

function Home() {
  return (
    <div className="home">
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
    </div>
  );
}

export default Home;
