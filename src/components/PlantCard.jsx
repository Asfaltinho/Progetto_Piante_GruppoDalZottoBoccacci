export default function PlantCard({ name, image }) {
  return (
    <div className="plant-card">
      {image && <img src={image} alt={name} />}
      <p>{name}</p>
    </div>
  );
}
