import Header from "./Header";
import Button from "./Button";
import Centrelink from "./Centrelink";
import Footer from "./Footer";
import Logo from "./Logo";
import "./App.css";
import GoogleHomepage from "./GoogleHomepage"

function App() {
  return (
    <div className="App">
      <Header />
      <Logo />
      <GoogleHomepage />
      <Button />
      <Centrelink />
      <div className="footer">
        <div className="footer1">
          <Footer text={"Nigeria"} />
        </div>
        <div className="rule"></div>
        <div className="footerlinks">
          <div className="footer2">
            <Footer text={"About"} />
            <Footer text={"Advertising"} />
            <Footer text={"Business"} />
            <Footer text={"How search works"} />
          </div>
          <div className="footer3">
            <Footer text={"Carbon neutral since 2007"} />
          </div>
          <div style={{display:"flex"}} className="footer4">
            <Footer text={"Privacy"} />
            <Footer text={"Terms"} />
            <Footer text={"Settings"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
