import SeriesTable from "./SeriesTable";

function WorkoutCard({ workout }) {
  return (
    <div style={{ border: "1px solid gray", padding: "1rem", margin: "1rem" }}>
      <h2>{workout.data} ({workout.durata})</h2>
      <p>{workout.note}</p>
      <ul>
        {workout.esercizi.map((esercizio) => (
          <SeriesTable key={esercizio.id} esercizio={esercizio} />
        ))}
      </ul>
    </div>
  );
}

export default WorkoutCard;
