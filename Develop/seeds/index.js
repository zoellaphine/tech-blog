const seedUsers = require("./users");
const seedPosts = require("./posts");
const seedComments = require("./comments");

const sequelize = require("../config/connections");

const seedAll = async () => {

  await sequelize.sync({ force: true });

  await seedUsers();
  await seedPosts();
  await seedComments();

  process.exit(0);
};

seedAll();