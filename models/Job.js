const User = require("./User")
const mongoose = require("mongoose")

const JobSchema = new mongoose.Schema({
    company:{
        type: "string",
        required: [true, "please provide company name"],
        maxlength: 50,
    },
    position:{
        type: "string",
        required: [true, "please provide position"],
        maxlength: 50,
    },
    status: {
        type: "string",
        enum: ["interview", "declined", "pending"],
        default: "pending",
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: User,
        required: [true, "please provide user"],
    }
})

module.exports = mongoose.model("job", JobSchema)