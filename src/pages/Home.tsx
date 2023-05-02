// import component moduls
import Appref from "../Component/Appref/Appref";
import Footer from "../Component/Footer/Footer";
import LogIn from "../Component/Log-In/LogIn";
import Sliders from "../Component/Sliders/Sliders";

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
