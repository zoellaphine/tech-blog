const { User } = require("../models");

const users = [
];

const userSeeds = () => User.bulkCreate(users);

module.exports = userSeeds;