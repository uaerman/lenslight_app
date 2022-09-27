import express from "express"
import *as pageCntroller from '../controller/pageController.js'

const router = express.Router()

router.route('/').get(pageCntroller.getIndexPage)
router.route('/about').get(pageCntroller.getAboutPage)
router.route('/contact').get(pageCntroller.getContactPage)
router.route('/contact').post(pageCntroller.sendMail)
router.route('/register').get(pageCntroller.getRegisterPage)
router.route('/login').get(pageCntroller.getLoginPage)
router.route('/logout').get(pageCntroller.getLogout)

export default router;