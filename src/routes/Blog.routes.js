import {Router} from 'express';
import {UpdatePost,CreatePost,DeletePost,fetchAllPosts} from '../controllers/Blog.controller.js'
import {upload} from '../utils/index.js'

const BlogROuter = Router();

BlogROuter.get('/fetch-all-posts',fetchAllPosts);
BlogROuter.post('/post-blog',upload.single('featuredImage'),CreatePost);
BlogROuter.put('/update-post/:_id',upload.single('featuredImage'),UpdatePost);
BlogROuter.delete('/delete-post/:_id',DeletePost);


export default BlogROuter ;