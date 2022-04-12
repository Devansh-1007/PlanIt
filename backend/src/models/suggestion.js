const mongoose =require('mongoose');
const suggestionSchema = new mongoose.Schema({
    suggestion: {
        type:String,
        required:true
    }
})
const Suggestion = new mongoose.model("Suggestion",suggestionSchema);
module.exports= Suggestion;