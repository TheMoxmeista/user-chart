import 'styles/App.css';
import { useState, useEffect } from 'react';
import users from 'data/users';
import Controls from 'components/controls';
import Chart from 'components/chart';
import Table from 'components/table';

const labels = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

function App() {
  const [ tableView, setTableView ] = useState(false);
  const [ minSpend, setMinSpend ] = useState(0);
  const [ gender, setGender ] = useState('All');
  const [ region, setRegion ] = useState('All');
  const [ monthlyDataset, setMonthlyDataset ] = useState([]);
  const [ cumulativeDataset, setCumulativeDataset ] = useState([]);
  const [ tableData, setTableData ] = useState([]);

  useEffect(() => {
    const filteredBySpend = users.filter(user => user.spend >= minSpend);
    const filteredByGender = filteredBySpend.filter(user => gender === 'All' ? true : user.gender === gender);
    const filteredByRegion = filteredByGender.filter(user => region === 'All' ? true : user.region === region);
    const monthlyData = [];
    const cumulativeData = [];
    const tableArr = [];
    let cumCount = 0;
    for (let i = 1; i < 13; i++) {
      const birthMonth = filteredByRegion.filter(user => user.birthday === i);
      const cumCost = 5 * (cumCount += birthMonth.length);
      monthlyData.push(birthMonth.length);
      cumulativeData.push(cumCost);
      tableArr.push({
        month: labels[i-1],
        numUsers: birthMonth.length,
        cost: birthMonth.length * 5,
        cumCost: cumCost
      })
    }
    setMonthlyDataset(monthlyData);
    setCumulativeDataset(cumulativeData);
    setTableData(tableArr);
  }, [minSpend, gender, region])

  return (
    <div className="App">
      <button onClick={() => setTableView(!tableView)}>{tableView ? 'Show Graph' : 'Show Table'}</button>
      <Controls
        gender={gender}
        minSpend={minSpend}
        setGender={setGender}
        setMinSpend={setMinSpend}
        setRegion={setRegion}
      />
      <div className={tableView ? 'hide' : null}>
        <Chart monthlyDataset={monthlyDataset} cumulativeDataset={cumulativeDataset} labels={labels} />
      </div>
      <div className={tableView ? null : 'hide'}>
        <Table data={tableData} />
      </div>
    </div>
  );
}

export default App;
