import 'styles/table.css';

const Table = ({data}) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Month</th>
          <th>No. Of Users</th>
          <th>Cost</th>
          <th>Cumulative Cost</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i}>
            <td>{row.month}</td>
            <td>{row.numUsers}</td>
            <td>{row.cost}</td>
            <td>{row.cumCost}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
