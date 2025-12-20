export default function PlantCard({ plant, onSelect }) {
  return (
    <div className="plant-card" onClick={() => onSelect(plant)}>
      {plant.image_url && (
        <img src={plant.image_url} alt={plant.scientific_name} />
      )}
      <p>{plant.scientific_name}</p>
    </div>
  );
}
