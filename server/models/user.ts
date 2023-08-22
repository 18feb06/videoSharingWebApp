import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    img: {
        type: String,
        default: 'defaultAvatar.png'
    },
    imgName: {
        type: String,
        defaukt: 'defaultAvatar.png'
    },
    subscribers: {
        type: Number,
        default: 0
    },
    subscribedUsers: {
        type: [String]
    }
}, {timestamps: true});

export default mongoose.model('User', userSchema)