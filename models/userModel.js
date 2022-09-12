import mongoose from "mongoose";
import bcrypt from "bcrypt"

const { Schema } = mongoose

const reqString = {
    type: String,
    required: true,
    unique: true
}

const userSchema = new Schema({
    username: reqString,
    email: reqString,
    password: {
        type: String,
        required: true
    }
},
{
    timestamps: true
}
)

userSchema.pre('save', function (next) {
    const user = this;
    bcrypt.hash(user.password, 10, (error, hash) => {
        user.password = hash;
        next();
    })
})

const User = mongoose.model('User', userSchema)

export { User }