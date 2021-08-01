import 'styles/controls.css';

const Controls = ({ gender, minSpend, setMinSpend, setRegion, setGender }) => {
  return (
    <div className='controls'>
      <div>
        <label htmlFor='spend-range'>Minimal Spend</label>
        <div>${minSpend}</div>
        <div>
          $0
          <input
            id='spend-range'
            type='range'
            min={0}
            max={5000}
            value={minSpend}
            onChange={event => setMinSpend(event.target.value)}
          />
          $5000
        </div>
      </div>
      <div>
        <label htmlFor='region'>Select Region</label>
        <select id='region' onChange={event => setRegion(event.target.value)}>
          <option value='All'>All</option>
          <option value='United States'>United States</option>
          <option value='Europe'>Europe</option>
          <option value='APAC'>APAC</option>
          <option value='Latin America'>Latin America</option>
        </select>
      </div>
      <div>
        <div>Gender</div>
        <div className='gender-controls'>
          <input
            name='gender'
            id='male'
            type='radio'
            value='Male'
            onChange={event => setGender(event.target.value)}
            checked={gender === 'Male'}
          />
          <label className={gender === 'Male' ? 'active' : null} htmlFor='male'>Male</label>
          <input
            name='gender'
            id='female'
            type='radio'
            value='Female'
            onChange={event => setGender(event.target.value)}
            checked={gender === 'Female'}
          />
          <label className={gender === 'Female' ? 'active' : null} htmlFor='female'>Female</label>
          <input
            name='gender'
            id='all'
            type='radio'
            value='All'
            onChange={event => setGender(event.target.value)}
            checked={gender === 'All'}
          />
          <label className={gender === 'All' ? 'active' : null} htmlFor='all'>All</label>
        </div>
      </div>

    </div>
  );
};

export default Controls;
