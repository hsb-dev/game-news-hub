import "../styles/reset.css";
import "../styles/Common.css";
import Navbar from "../components/Navbar";
import Subnavbar from "../components/Subnavbar";
import Filter from "../components/Filter";
import NewsBoard from "./NewsBoard";

function Home() {
  return (
    <div className="app">
      <div className="header">
        <Navbar />
      </div>
      <div className="content-area">
        <Filter />
        <NewsBoard />
      </div>
    </div>
  );
}

export default Home;
