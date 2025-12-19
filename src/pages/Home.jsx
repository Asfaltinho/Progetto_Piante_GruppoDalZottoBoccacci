import "../styles/home.css";
import orchid from "../assets/orchid.jpg";
import bg from "../assets/bg.jpeg";

export default function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${bg})` }}>
      <div className="overlay">

        <div className="content">

          <h1>SCEGLI LA PIANTA DI CUI SAPERE LE INFORMAZIONI</h1>

          <div className="search-row">
            <input
              type="text"
              placeholder="Cerca pianta..."
            />
            <button>INVIO</button>

            <select>
              <option value="">filtra famiglia</option>
              <option>Rosaceae</option>
              <option>Orchidaceae</option>
              <option>Asteraceae</option>
              <option>Fabaceae</option>
              <option>Poaceae</option>
            </select>
          </div>

          <div className="main-box">

            <div className="plant-card">
              <img src={orchid} alt="orchid" />
              <p>Nome scientifico</p>
            </div>

            <div className="info-box">
              <ul>
                <li>CARATTERISTICHE GENERALI DELLA PIANTA</li>
              </ul>
            </div>

          </div>
        </div>

        <div className="side-logo">
          <div className="logo-box">
            <h2>PLANT<br />FINDER</h2>
          </div>

          <div className="languages">
            <span>DEU</span>
            <span>ITA</span>
            <span>ING</span>
            <span>JAP 🌐</span>
          </div>
        </div>

      </div>
    </div>
  );
}
