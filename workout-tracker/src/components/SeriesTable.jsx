function SeriesTable({ esercizio }) {
  return (
    <li>
      <strong>{esercizio.nome}</strong> - {esercizio.note}
      <ul>
        {esercizio.serie.map((serie, i) => (
          <li key={i}>
            {serie.ripetizioni}x{serie.peso_kg}kg
          </li>
        ))}
      </ul>
    </li>
  );
}

export default SeriesTable;
