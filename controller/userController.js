import { User } from "../models/userModel.js";
import jwt from 'jsonwebtoken'
import bcrypt from "bcrypt"


const createUser = async (req, res) => { 
    try {
        const user = await User.create(req.body)
        res.redirect('/users/dashboard')
    } catch (error) {
        res.status(500).json({
            succeded: false,
            error
        })
    }
}

const loginUser = async (req, res) => { 
    try {
        const {username, password} = req.body
        const user = await User.findOne({username})
        let same = false;
        if (user) {
            same = await bcrypt.compare(password, user.password)
        } else {
            res.status(401).json({
                succeded: false,
                error: `There is no such user '${username}'`
            })
            return;
        }
        if (same) {

            const token = createToken(user._id)
            res.cookie("jsonwebtoken", token, {
                httpOnly:true,
                maxAge: 1000* 60 * 60 * 24
            })
            res.redirect('/users/dashboard')
        } else {
            res.status(401).json({
                succeded: false,
                error: `Password are not matched`
            })
        }
    } catch (error) {
        res.status(500).json({
            succeded: false,
            error
        })
    }
}

const createToken = (userId) => {
    return jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: '1d'
    })
}

const getDashboardPage = (req, res) => {
    res.render("dashboard", {
        link: 'dashboard'
    })
}


export { createUser, loginUser, getDashboardPage }