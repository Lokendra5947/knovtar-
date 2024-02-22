const express = require("express")
const { createPost, getAllPosts, getPostById, deletePostById, updatePostById } = require("../Controller/postController")

const verifyToken = require("../Middleware/JWTVerify")
const postRoute = express.Router()

postRoute.post("/create",createPost)

postRoute.get("/",getAllPosts)
postRoute.get("/singlepost/:id",getPostById)
postRoute.put("/update/:id",verifyToken,updatePostById)
postRoute.delete("delete/:id",verifyToken,deletePostById)
module.exports = {postRoute}