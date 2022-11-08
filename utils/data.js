const usernames = [
    'Aaran',
    'AJ',
    'Ally',
    'Han',
    'Henry',
    'Honey',
    'Igor',
    'Kadyn',
    'Kailin',
    'Kale',
    'Kane',
    'Kelso',
    'Kevin',
    'Luca',
    'Macy',
  
  ]

  
const users = [];
const getNamePart = () => usernames[Math.floor(Math.random() * usernames.length)];
const getRandomName = () => `${getNamePart()} ${getNamePart()}`;

module.exports = getRandomName;
