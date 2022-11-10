const usernames = [
  "Aaran",
  "AJ",
  "Ally",
  "Han",
  "Henry",
  "Honey",
  "Igor",
  "Kadyn",
  "Kailin",
  "Kale",
  "Kane",
  "Kelso",
  "Kevin",
  "Luca",
  "Macy",
];

const users = [];
const getUsername = () =>
  usernames[Math.floor(Math.random() * usernames.length)];
const getRandomusername = () => `${getUsername()} ${getUsername()}`;

module.exports = getRandomusername;
