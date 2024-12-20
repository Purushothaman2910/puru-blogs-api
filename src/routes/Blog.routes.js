import {Router} from 'express';
import {UpdatePost,CreatePost,DeletePost} from '../controllers/Blog.controller.js'
import {upload} from '../utils/index.js'

const BlogROuter = Router();

BlogROuter.post('/post-blog',upload.single('featuredImage'),CreatePost);
BlogROuter.put('/update-post',UpdatePost);
BlogROuter.delete('/delete-post',DeletePost);


export default BlogROuter ;