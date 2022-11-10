const connection = require("../config/connection");
const { Thoughts, User } = require("../models");
const getRandomName = require("./data");

console.log(getRandomName());
connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");
  await Thoughts.deleteMany({});
  await User.deleteMany({});

  const users = [];

  for (let i = 0; i < 20; i++) {
    const username = getRandomName();
    // const first = fullName.split(' ')[0];
    // const last = fullName.split(' ')[1];

    users.push({
      username: Math.floor(Math.random() * (99 - 18 + 1) + 18),
    });
  }

  await User.collection.insertMany(users);
  console.log(users);
  process.exit(0);
});
