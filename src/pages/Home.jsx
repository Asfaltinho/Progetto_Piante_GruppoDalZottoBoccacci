import "../styles/home.css";
import bg from "../assets/bg.jpeg";

import SearchBar from "../components/SearchBar.jsx";
import PlantCard from "../components/PlantCard.jsx";
import InfoBox from "../components/InfoBox.jsx";
import SideLogo from "../components/SideLogo.jsx";

export default function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${bg})` }}>
      <div className="overlay">

        <div className="content">
          <h1>SCEGLI LA PIANTA DI CUI SAPERE LE INFORMAZIONI</h1>

          <SearchBar />

          <div className="main-box">
            <PlantCard />
            <InfoBox />
          </div>
        </div>

        <SideLogo />
      </div>
    </div>
  );
}
