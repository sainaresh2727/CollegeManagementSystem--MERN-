import React, { createContext, useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
export let My_Context=createContext()
function Context({children}) {
 
  // FOR STUDENTS DATAS
  let [StudentName,setStudentName]=useState('')
  let [StudentAge,setStudentAge]=useState('')
  let [StudentBranch,setStudentBranch]=useState('')
  let [StudentGender,setStudentGender]=useState('')
  let [StudentCurrentYear,setStudentCurrentYear]=useState('')
  let [StudentDob,setStudentDob]=useState('')
  let [StudentBldGrp,setStudentBldGrp]=useState('')
  let [StudentMothersName,setStudentMothersName]=useState('')
  let [StudentFathersName,setStudentFathersName]=useState('')
  let [StudentAddress,setStudentAddress]=useState('')
  let [StudentTotalFess,setStudentTotalFess]=useState('')
  let [StudentRemainingFees,setStudentRemainingFees]=useState('')
  let [TotalArrears,setTotalArrears]=useState('')

  // ASYNC FUNCTION FOR SENDING STUDENT DATA TO BACKEND
  async function SendingStudentRecords(e) {
  e.preventDefault();
  try {
    let StudentRecords = await axios.post("http://localhost:8000/addStudent", {
      StudentName,
      StudentAge,
      StudentBranch,
      StudentGender,
      StudentCurrentYear,
      StudentDob,
      StudentBldGrp,
      StudentMothersName,
      StudentFathersName,
      StudentAddress,
      StudentTotalFess,
      StudentRemainingFees,
      TotalArrears
    });
    alert(StudentRecords.data.message);
    setStudentName('')
    setStudentAge('')
    setStudentBldGrp('')
    setStudentBranch('')
    setStudentGender('')
    setStudentCurrentYear('')
    setStudentDob('')
    setStudentAddress('')
    setStudentMothersName('')
    setStudentFathersName('')
    setStudentTotalFess('')
    setStudentRemainingFees('')
    setTotalArrears('')
    StudentDetails()
  } 
  catch (err) {
    console.log(err);
    
  }
}

// GETTING STUDENTS DETAILS
let [StudentsRecords,setStudentsRecords]=useState([])
async function StudentDetails() {
  try{
      let StudentDetails=await axios.get('http://localhost:8000/GettingStudent')
      setStudentsRecords(StudentDetails.data.data)
  }
  catch(err){
    console.log();
    
  }
}

useEffect(()=>{
  StudentDetails()
},[])

// VIEW FULL DETAILS MODAL FOR STUDENT
let [SingleStudent,setSingleStudent]=useState({})
function StudentFullDetails(id){
 let SingleStudents=StudentsRecords.find((x,y)=>{
  return x._id===id
  })
  if(SingleStudents){
    setSingleStudent(SingleStudents)
  }
}


// FUNCTION FOR UPDATE
let [UStuName,setUStuName]=useState('')
let [UStuAge,setUStuAge]=useState('')
let [UStuBranch,setUStuBranch]=useState('')
let [UStuYear,setUStuYear]=useState('')
let [UStuGender,setUStuGender]=useState('')
let [UStuDob,setUStuDob]=useState('')
let [UStuBldGrp,setUStuBldGrp]=useState('')
let [UStuMother,setUStuMother]=useState('')
let [UStuFather,setUStuFather]=useState('')
let [UStuAddress,setUStuAddress]=useState('')
let [UStuTotalFees,setUStuTotalFees]=useState('')
let [UStuRemainingfess,setUStuRemainingfess]=useState('')
let [UStuTotalArrears,setUStuTotalArrears]=useState('')
let [Uid,setUid]=useState('')

function UpdateFind(id){
  let UpdateStudent=StudentsRecords.find((x,y)=>{
    return x._id===id
  })
  if(UpdateStudent){
    setUStuName(UpdateStudent.StudentName)
    setUStuAge(UpdateStudent.StudentAge)
    setUStuBranch(UpdateStudent.StudentBranch)
    setUStuYear(UpdateStudent.StudentCurrentYear)
    setUStuGender(UpdateStudent.StudentGender)
    setUStuDob(UpdateStudent.StudentDob)
    setUStuBldGrp(UpdateStudent.StudentBldGrp)
    setUStuMother(UpdateStudent.StudentMothersName)
    setUStuFather(UpdateStudent.StudentFathersName)
    setUStuAddress(UpdateStudent.StudentAddress)
    setUStuTotalFees(UpdateStudent.StudentTotalFess)
    setUStuRemainingfess(UpdateStudent.StudentRemainingFees)
    setUStuTotalArrears(UpdateStudent.TotalArrears)
    setUid(id)
  }
}
// ASYNC FUNCTION FOR UPDATING DATA
async function UpdateStudent(e) {
  e.preventDefault()
  try{
    let UpdateStudent= await axios.put(`http://localhost:8000/UpdateStudent/${Uid}`,{
      StudentName:UStuName,
      StudentAge:UStuAge,
      StudentBranch:UStuBranch,
      StudentGender:UStuGender,
      StudentCurrentYear:UStuYear,
      StudentDob:UStuDob,
      StudentBldGrp:UStuBldGrp,
      StudentMothersName:UStuMother,
      StudentFathersName:UStuFather,
      StudentAddress:UStuAddress,
      StudentTotalFess:UStuTotalFees,
      StudentRemainingFees:UStuRemainingfess,
      TotalArrears:UStuTotalArrears

    })
    StudentDetails()
    alert(UpdateStudent.data.message)
  }
  catch(err){
    console.log(err.name);
    
  }
}

//FUNCTION FOR DELETE
async function DeleteStudent(id) {
  try{
    let DeleteStudent= await axios.delete(`http://localhost:8000/DeleteStudent/${id}`)
    alert(DeleteStudent.data.message)
    StudentDetails()
  }
  catch(err){}
}

// FOR STUDENT SEARCH
let [StudentSearch,setStudentSearch]=useState('')

let StudentipLower=StudentSearch.toLowerCase()
let StudentRecordsLower=StudentsRecords.filter((x,y)=>{
    return x.StudentName.toLowerCase().includes(StudentipLower)
  })


  // FOR TEACHERS
  let [TeachersName,setTeachersName]=useState('')
  let [TeachersDept,setTeachersDept]=useState('')
  let [TeachersAge,setTeachersAge]=useState('')
  let [TeachersQualification,setTeachersQualification]=useState('')
  let [TeacherAddress,setTeacherAddress]=useState('')
  let [TeachersDob,setTeachersDob]=useState('')
  let [TeacherGender,setTeacherGender]=useState('')
  let [TeacherBloodGrp,setTeacherBloodGrp]=useState('')
  let [TeacherSalary,setTeacherSalary]=useState('')

  //ASYNC FUNCTION TO SENDING TEACHERS DATA
    async function TeachersData(e) {
      e.preventDefault()
      try{
        let TeachersData=await axios.post('http://localhost:8000/TeacherAdd',{TeachersName,TeachersDept,TeachersAge,TeachersQualification,TeacherAddress,TeachersDob,TeacherGender,TeacherBloodGrp,TeacherSalary,})
        alert(TeachersData.data.message)
        setTeachersName('')
        setTeachersDept('')
        setTeachersAge('')
        setTeachersQualification('')
        setTeacherAddress('')
        setTeachersDob('')
        setTeacherGender('')
        setTeacherBloodGrp('')
        setTeacherSalary('')
      }
      catch(err){

      }
    }

  // GETTING TEACHERS DATA
  let [TeacherRecords,setTeacherRecords]=useState([])
  async function TeacherDetails() {
   try{
     let TeachersDataBk= await axios.get('http://localhost:8000/GetTeacher')
     setTeacherRecords(TeachersDataBk.data.data)
   }
   catch(err){

   }
  }
  useEffect(()=>{
    TeacherDetails()
  },[])

  // FINDING TEACHERS
  let [FindTeacObj,setFindTeac]=useState({})
  function FindTeachers(id){
    let TeachersFind=TeacherRecords.find((x,y)=>{
      return x._id===id
    })
    setFindTeac(TeachersFind)
  }

  //UPDATE
  let [UptechName,setUptechName]=useState('')
  let [UptechAge,setUptechAge]=useState('')
  let [UptechDept,setUptechDept]=useState('')
  let [UptechQuali,setUptechQuali]=useState('')
  let [UptechAddress,setUptechAddress]=useState('')
  let [UptechDob,setUptechDob]=useState('')
  let [UptechGender,setUptechGender]=useState('')
  let [UptechBld,setUptechBld]=useState('')
  let [UptechSalary,setUptechSalary]=useState('')
  let [UpdateTeachersId,setUpdateTeachersId]=useState('')
  function TeacherUpdate(id){
    let UpdateTeacFind=TeacherRecords.find((x,y)=>{
      return x._id===id
    })
    if(UpdateTeacFind){
      setUptechName(UpdateTeacFind.TeachersName)
      setUptechAge(UpdateTeacFind.TeachersAge)
      setUptechDept(UpdateTeacFind.TeachersDept)
      setUptechQuali(UpdateTeacFind.TeachersQualification)
      setUptechAddress(UpdateTeacFind.TeacherAddress)
      setUptechDob(UpdateTeacFind.TeachersDob)
      setUptechGender(UpdateTeacFind.TeacherGender)
      setUptechBld(UpdateTeacFind.TeacherBloodGrp)
      setUptechSalary(UpdateTeacFind.TeacherSalary)
      setUpdateTeachersId(id)
    }
  }

  //ASYNC FUNCTION FOR SENDING UPDATED DATA
  async function UpdateTeachers(e) {
    e.preventDefault()
    try{
      let UpdatedTeachers=await axios.put(`http://localhost:8000/UpdateTeachers/${UpdateTeachersId}`,{
        TeachersName:UptechName,
        TeachersAge:UptechAge,
        TeachersDept:UptechDept,
        TeachersQualification:UptechQuali,
        TeacherAddress:UptechAddress,
        TeachersDob:UptechDob,
        TeacherGender:UptechGender,
        TeacherBloodGrp:UptechBld,
        TeacherSalary:UptechSalary
        })
        TeacherDetails()
        alert(UpdatedTeachers.data.message)
    }
    catch(err){
      
    }
  }

  // ASYN FUN TO DELETE
  async function TeachersDelete(id) {
    try{
      let DeleteTeacher=await axios.delete(`http://localhost:8000/DeleteTeachers/${id}`)
      alert(DeleteTeacher.data.message)
       TeacherDetails()
    }
    catch(err){

    }
  }
  return (
    <>
    <My_Context.Provider value={{
      
      // STUDENTS
      StudentName,setStudentName,StudentAge,setStudentAge,StudentBranch,setStudentBranch,StudentGender,setStudentGender,StudentCurrentYear,setStudentCurrentYear,StudentDob,setStudentDob,StudentBldGrp,setStudentBldGrp,StudentMothersName,setStudentMothersName,StudentFathersName,setStudentFathersName,StudentAddress,setStudentAddress,StudentTotalFess,setStudentTotalFess,StudentRemainingFees,setStudentRemainingFees,SendingStudentRecords,TotalArrears,setTotalArrears,StudentsRecords,StudentFullDetails,SingleStudent,UpdateFind,UStuName,setUStuName,UStuAge,setUStuAge,UStuBranch,setUStuBranch,UStuYear,setUStuYear,UStuGender,setUStuGender,UStuDob,setUStuDob,UStuBldGrp,setUStuBldGrp,UStuMother,setUStuMother,UStuFather,setUStuFather,UStuAddress,setUStuAddress,UStuTotalFees,setUStuTotalFees,UStuRemainingfess,setUStuRemainingfess,UStuTotalArrears,setUStuTotalArrears,UpdateStudent,DeleteStudent,StudentSearch,setStudentSearch,
      //TEACHERS
      TeachersName,setTeachersName,TeachersDept,setTeachersDept,TeachersAge,setTeachersAge,TeachersQualification,setTeachersQualification,TeacherAddress,setTeacherAddress,TeachersDob,setTeachersDob,TeacherGender,setTeacherGender,TeacherBloodGrp,setTeacherBloodGrp,TeacherSalary,setTeacherSalary,TeachersData,TeacherRecords,FindTeachers,FindTeacObj,TeacherUpdate,UptechName,setUptechName,UptechAge,setUptechAge,UptechDept,setUptechDept,UptechQuali,setUptechQuali,UptechAddress,setUptechAddress,UptechDob,setUptechDob,UptechGender,setUptechGender,UptechBld,setUptechBld,UptechSalary,setUptechSalary,UpdateTeachers,TeachersDelete
      }}>
      {children}
    </My_Context.Provider>
    </>
  )
}

export default Context