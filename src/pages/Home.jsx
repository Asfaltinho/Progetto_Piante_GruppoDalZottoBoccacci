import "../styles/home.css";
import bg from "../assets/bg.jpeg";
import { useState } from "react";

import SearchBar from "../components/SearchBar";
import PlantCard from "../components/PlantCard";
import InfoBox from "../components/InfoBox";
import SideLogo from "../components/SideLogo";

export default function Home() {
  const [plants, setPlants] = useState([]);

  async function fetchPlants(query, family) {
    if (!query) return;

    let url = `https://trefle.io/api/v1/plants/search?token=usr-pHbEB8YkhsmkSbvfI1YHrmXqoVJqSkYDV1gGE3O2asM&q=${query}`;

    if (family && family !== "") {
      url += `&filter[family]=${family}`;
    }

    const response = await fetch(url);
    const data = await response.json();
    setPlants(data.data);
  }

  return (
    <div className="home" style={{ backgroundImage: `url(${bg})` }}>
      <div className="overlay">
        <div className="content">
          <h1>SCEGLI LA PIANTA DI CUI SAPERE LE INFORMAZIONI</h1>

          <SearchBar onSearch={fetchPlants} />

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

        <SideLogo />
      </div>
    </div>
  );
}
