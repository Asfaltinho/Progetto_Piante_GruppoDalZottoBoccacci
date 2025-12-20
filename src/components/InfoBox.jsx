export default function InfoBox({ plant }) {
  if (!plant) {
    return (
      <br/>
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
            <strong>Nome comune famiglia:</strong> {plant.family_common_name || "N/D"}
        </li>
        <li>
            <strong>Genere:</strong> {plant.genus || "N/D"}
        </li>
        <li>
            <strong>Anno:</strong> {plant.year || "N/D"}
        </li>
      </ul>
    </div>
  );
}
