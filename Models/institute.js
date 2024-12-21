const mongoose = require('mongoose');
const schema = mongoose.Schema;

const instituteSchema = new schema({
    institute : { type: String, required: true, enum:["Playhouse","School","College","Competitive Exam Centre"]},
    name : { type:String, required:true},
    isDeleted : { type: Boolean, default: false},
},{timestamps: true});


instituteSchema.index({ isDelete: 1 });
	
module.exports = mongoose.model("institute", instituteSchema);