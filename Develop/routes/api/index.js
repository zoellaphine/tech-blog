const router = require("express").Router();
const userRoutes = '' // user routes
const postRoutes = '' // post routes
const commentRoutes = '' // comment routes

router.use("/users", userRoutes);
router.use("/posts", postRoutes);
router.use("/comments", commentRoutes);


module.exports = router;