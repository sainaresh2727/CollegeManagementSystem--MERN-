let Mongoose=require('mongoose')
let TeacherSchema=new Mongoose.Schema({
    TeachersName:{
        type:String,
        required:true
    },
    TeachersDept:{
        type:String,
        required:true
    },
    TeachersAge:{
        type:Number,
        required:true
    },
    TeachersQualification:{
        type:String,
        required:true
    },
    TeacherAddress:{
        type:String,
        required:true
    },
    TeachersDob:{
        type:String,
        required:true
    },
    TeacherGender:{
        type:String,
        required:true
    },
    TeacherBloodGrp:{
        type:String,
        required:true
    },
    TeacherSalary:{
        type:String,
        required:true
    }
})

let TeacherModel= Mongoose.model("TeacherModel",TeacherSchema)

module.exports=TeacherModel