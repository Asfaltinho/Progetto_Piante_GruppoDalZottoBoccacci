import orchid from "../assets/orchid.jpg";

export default function PlantCard() {
  return (
    <div className="plant-card">
      <img src={orchid} alt="pianta" />
      <p>Nome scientifico</p>
    </div>
  );
}
