const { connect, connection } = require("mongoose");

connect("mongodb://localhost/userPosts", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
