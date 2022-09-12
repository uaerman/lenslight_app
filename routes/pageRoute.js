import express from "express"
import *as pageCntroller from '../controller/pageController.js'

const router = express.Router()

router.route('/').get(pageCntroller.getIndexPage)
router.route('/about').get(pageCntroller.getAboutPage)
router.route('/blog').get(pageCntroller.getBlogPage)


export default router;