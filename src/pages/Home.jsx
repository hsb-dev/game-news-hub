import "../styles/reset.css";
import Navbar from "../components/Navbar";
import Subnavbar from "../components/Subnavbar";
import NewsBoard from "./NewsBoard";
import Footer from "../components/Footer";
import "../styles/Common.css";

function Home() {
  return (
    <div className="app">
      <div className="header">
        <Navbar />
        <Subnavbar />
      </div>
      <NewsBoard />
      <Footer />
    </div>
  );
}

export default Home;
