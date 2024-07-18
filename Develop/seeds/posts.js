const { Post } = require("../models");

const posts = [
];

const postSeeds = () => Post.bulkCreate(posts);

module.exports = postSeeds;