export default function InfoBox({ plant }) {
  if (!plant) {
    return (
      <div className="info-box">
        <p>Seleziona una pianta per vedere le informazioni</p>
      </div>
    );
  }

  return (
    <div className="info-box">
      <h3>{plant.common_name || "Nome comune non disponibile"}</h3>

      <ul>
        <li>
          <strong>Famiglia:</strong> {plant.family || "N/D"}
        </li>
        <li>
          <strong>Dove si trova:</strong>{" "}
          {plant.distribution?.native?.join(", ") || "N/D"}
        </li>
      </ul>
    </div>
  );
}
