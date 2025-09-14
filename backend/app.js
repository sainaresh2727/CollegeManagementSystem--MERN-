let Dotenv=require("dotenv")
Dotenv.config()

let Express=require("express")

let App=Express()
let Cors=require("cors")

//MIDDLEWARE
App.use(Express.json({limit:"50mb"}))
App.use(Cors())

//DBCONNECT
let DbConnect=require("./Db/Db")
DbConnect()

let StudentSchema=require('./Schema/Student')




// STUDENTS REORDS
// ADDING STUDENTS DATAS 
App.post("/addStudent",async (req,res) => {
    let {StudentName,StudentAge,StudentBranch,StudentGender,StudentCurrentYear,StudentDob,StudentBldGrp,StudentMothersName,StudentFathersName,StudentAddress,StudentTotalFess,StudentRemainingFees,TotalArrears}=req.body
    try{
        let AddStudent=new StudentSchema({StudentName,StudentAge,StudentBranch,StudentGender,StudentCurrentYear,StudentDob,StudentBldGrp,StudentMothersName,StudentFathersName,StudentAddress,StudentTotalFess,StudentRemainingFees,TotalArrears})
        await AddStudent.save()
        res.status(200).json({
            success:true,
            message:" STUDENT DATA SUCCESSFULLY "
        })
    }
    catch(err){
       res.status(404).send(`Errorname:${err.name} ErrorMessage:${err.message}`)
        
    }
})

//GETTING STUDENTS RECORDS

App.get('/GettingStudent',async (req,res) => {
    try{
        let StudentDetails=await StudentSchema.find()
        res.status(200).json({
            success:true,
            message:"Sending Student Data",
            data:StudentDetails
        })
    }
    catch(err){
        res.status(404).send(`ErrorMessage:${err.message} ErrorName:${err.name}`)
    }
})


//UPDATING STUDENTS DETAILS
App.put('/UpdateStudent/:id',async (req,res) => {
    let {StudentName,StudentAge,StudentBranch,StudentGender,StudentCurrentYear,StudentDob,StudentBldGrp,StudentMothersName,StudentFathersName,StudentAddress,StudentTotalFess,StudentRemainingFees,TotalArrears}=req.body
    try{
        let UpdatedStudent=await StudentSchema.findByIdAndUpdate(req.params.id,{StudentName,StudentAge,StudentBranch,StudentGender,StudentCurrentYear,StudentDob,StudentBldGrp,StudentMothersName,StudentFathersName,StudentAddress,StudentTotalFess,StudentRemainingFees,TotalArrears},{new:true})
        res.status(200).json({
            success:true,
            message:"UPDATED SUCCESSFULY",
            data:UpdatedStudent
        })
    }
    catch(err){
        res.status(404).send(`ErrorName:${err.name} ErrorMessage:${err.message}`)
    }
})

// FUNCTION FOR DELETING STUDENT DETAILS
App.delete('/DeleteStudent/:id',async (req,res) => {
    await StudentSchema.findByIdAndDelete(req.params.id)
    res.status(200).json({
        success:true,
        message:"DELETED SUCCESSFULLY"
    })
})

//FOR TEACHERS
let TeacherModel=require('./Schema/Teacher')
App.post('/TeacherAdd',async (req,res) => {
let {TeachersName,TeachersDept,TeachersAge,TeachersQualification,TeacherAddress,TeachersDob,TeacherGender,TeacherBloodGrp,TeacherSalary}=req.body

try{
    let TeachersData = new TeacherModel({TeachersName,TeachersDept,TeachersAge,TeachersQualification,TeacherAddress,TeachersDob,TeacherGender,TeacherBloodGrp,TeacherSalary})
    await TeachersData.save()
    res.status(200).json({
        success:true,
        message:"TEACHERS DATA ADDED SUCCESSFULLY",

    })
}
catch(err){
    res.status(404).send(`ErrorName:${err.name} ErrorMessage:${err.message}`)
}

})

//GETTING TEACHER DATAS
App.get('/GetTeacher',async (req,res) => {
    try{
      let TeacherData= await TeacherModel.find()
      res.status(200).json({
        success:true,
        message:"Data Sended",
        data:TeacherData
      })
    }
    catch(err){
        res.status(404).send(`ErrorMessage|:${err.message} ErrorName:${err.name}`)
    }
})
// UPDATING TEACHERS DETAILS
App.put('/UpdateTeachers/:id',async (req,res) => {
let {TeachersName,TeachersDept,TeachersAge,TeachersQualification,TeacherAddress,TeachersDob,TeacherGender,TeacherBloodGrp,TeacherSalary}=req.body
try{
    let UpdatedTeachers=await TeacherModel.findByIdAndUpdate(req.params.id,{TeachersName,TeachersDept,TeachersAge,TeachersQualification,TeacherAddress,TeachersDob,TeacherGender,TeacherBloodGrp,TeacherSalary},{new:true})
    res.status(200).json({
        success:true,
        message:"TEACHERS DATA UPDATED SUCCESSFULLY",
        data:UpdatedTeachers
    })
}
catch(err){
    res.status(404).send(`ErrorName:${err.name} ErrorMessage:${err.message}`)
}
})

//DELETE TEACHERS
App.delete('/DeleteTeachers/:id',async (req,res) => {
    try{
        await TeacherModel.findByIdAndDelete(req.params.id)
        res.status(200).json({
            success:true,
            message:"DATA DELETED SUCCESSFULLY"
        })
    }
    catch(err){

    }
})

App.listen(process.env.PORT,()=>{
    console.log("SERVER RUNNING SUCCESSFULLY");
    
})