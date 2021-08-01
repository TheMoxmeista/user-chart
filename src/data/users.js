function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max+1);
  return Math.floor(Math.random() * (max - min) + min);
}

const regions = [
  'United States',
  'Europe',
  'APAC',
  'Latin America'
];

const Users = (() => {
  let data = [];
  for (let i = 0; i < 1000; i++) {
    const birthday = getRandomInt(1, 12);
    const spend = getRandomInt(0, 5000);
    const region = regions[getRandomInt(0,3)];
    const gender = getRandomInt(0, 1) === 1 ? 'Male' : 'Female';
    data.push({
      id: i,
      birthday,
      spend,
      region,
      gender
    });
  }
  return data;
})();

export default Users;
