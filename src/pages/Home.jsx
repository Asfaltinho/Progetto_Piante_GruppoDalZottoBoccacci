import "../styles/home.css";
import bg from "../assets/bg.jpeg";
import { useState } from "react";
import LanguageSwitcher from '../components/LanguageSwitcher.jsx'
import SearchBar from "../components/SearchBar.jsx";
import PlantCard from "../components/PlantCard.jsx";
import InfoBox from "../components/InfoBox.jsx";
import SideLogo from "../components/SideLogo.jsx";

export default function Home() {
  const [plants, setPlants] = useState([]);

  async function fetchPlants(query) {
    const response = await fetch(`http://localhost:3000/plants?q=${query}`);
    const data = await response.json();
    setPlants(data.data);
  }

  return (
    <div className="home" style={{ backgroundImage: `url(${bg})` }}>
      <div className="overlay">
        <div className="content">
          <h1>SCEGLI LA PIANTA DI CUI SAPERE LE INFORMAZIONI</h1>

          <SearchBar onSearch={fetchPlants} />

          <div className="main-box">
            <div className="results">
              {plants.map((plant) => (
                <PlantCard
                  key={plant.id}
                  name={plant.scientific_name}
                  image={plant.image_url}
                />
              ))}
            </div>

            <InfoBox />
          </div>
        </div>

        <SideLogo />
        <div className="language-switcher">
        <LanguageSwitcher/>
        </div>
        
      </div>
    </div>
  );
}
