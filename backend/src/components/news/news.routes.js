import { Router } from "express";
import { getNews, createNews, updateNews, deleteNews, getNewsImg } from "./news.controller.js";
import { uploadNews } from "../../multer/uploader.js";

const router = Router();

router.get('/news', getNews); 

//router.post('/news', uploadNews.single('file'), createNews);
router.post('/news', createNews);

router.patch('/news/:id', uploadNews.single('file'), updateNews);

router.delete('/news/:id', deleteNews);

router.get('/news/img/:id', getNewsImg);

export default router;