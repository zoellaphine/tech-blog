const { Comment } = require("../models");

const comments = [
];

const commentSeeds = () => Comment.bulkCreate(comments);

module.exports = commentSeeds;