import React, { useContext } from 'react'
import { My_Context } from '../ContextFile/Context'
import { Images } from '../../assets/asset'

function AdminHome() {
  let {StudentName,setStudentName,StudentAge,setStudentAge,StudentBranch,setStudentBranch,StudentGender,setStudentGender,StudentCurrentYear,setStudentCurrentYear,StudentDob,setStudentDob,StudentBldGrp,setStudentBldGrp,StudentMothersName,setStudentMothersName,StudentFathersName,setStudentFathersName,StudentAddress,setStudentAddress,StudentTotalFess,setStudentTotalFess,StudentRemainingFees,setStudentRemainingFees,SendingStudentRecords,TotalArrears,setTotalArrears,StudentsRecords,
  
  //TEACHERS
  TeachersName,setTeachersName,TeachersDept,setTeachersDept,TeachersAge,setTeachersAge,TeachersQualification,setTeachersQualification,TeacherAddress,setTeacherAddress,TeachersDob,setTeachersDob,TeacherGender,setTeacherGender,TeacherBloodGrp,setTeacherBloodGrp,TeacherSalary,setTeacherSalary,TeachersData
  }=useContext(My_Context)
  return (
<>

{/* FOR STUDENTS */}
<section className='container-fluid my-5'>
<div className="container">
<div className="row">

<div className='col-lg-6 col-12' id='StudentImage'>
<img src={Images.StudentImage}/>
</div>

<div className="col-lg-6 col-12 mt-5 mt-lg-0" id='StudentCol'>
<div className="card" id='StudentCard'>
<div className='text-center'>
<h4 className='mt-3'>ENTER STUDENTS DETAILS HERE</h4>
</div>
<div className="card-body">
<form action="" id='CardForm' onSubmit={(e)=>SendingStudentRecords(e)}>

<div>
<label htmlFor="">ENTER THE STUDENT NAME</label>
<input type="text" placeholder='Student Name' className='form-control mt-2' onChange={(e)=>setStudentName(e.target.value)} value={StudentName} />
</div>

<div>
<label htmlFor="">ENTER THE STUDENT AGE</label>
<input type="number" placeholder='Student Age' className='form-control mt-2' onChange={(e)=>setStudentAge(e.target.value)} value={StudentAge} />
</div>  

<div>
<label htmlFor="">ENTER THE STUDENT BLOOD GROUP</label>
<input type="text" placeholder='Blood Group' className='form-control mt-2' onChange={(e)=>setStudentBldGrp(e.target.value)} value={StudentBldGrp} />
</div>

<div>
<label htmlFor="">SELECT THE STUDENT BRANCH</label>
<select className='form-control mt-2' onChange={(e)=>setStudentBranch(e.target.value)} value={StudentBranch}>
<option hidden>SELECT BRANCH</option>
<option value="CSE">CSE</option>
<option value="ECE">ECE</option>
<option value="AI&ML">AI&ML</option>
<option value="CYBER SECURITY">CYBER SECURITY</option>
<option value="EEE">EEE</option>
<option value="MECHANICAL">MECHANICAL</option>
<option value="CIVIL">CIVIL</option>
</select>
</div>  

<div>
<label htmlFor="">SELECT THE STUDENT GENDER</label>
<select className='form-control mt-2' onChange={(e)=>setStudentGender(e.target.value)} value={StudentGender}>
<option hidden>SELECT GENDER</option>
<option value="MALE">MALE</option>
<option value="FEMALE">FEMALE</option>
</select>
</div>  

<div>
<label htmlFor="">SELECT STUDENT'S CURRENT YEAR</label>
<select className='form-control mt-2' onChange={(e)=>setStudentCurrentYear(e.target.value)} value={StudentCurrentYear}>
<option hidden>SELECT YEAR</option>
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
<option value="4">4</option>
</select>
</div>  

<div>
<label htmlFor="">ENTER STUDENT'S DOB:</label>
<input type="date" className='form-control mt-2' onChange={(e)=>setStudentDob(e.target.value)}  value={StudentDob} />
</div>

<div>
<label htmlFor="">ENTER STUDENT'S ADDRESS:</label>
<textarea className='form-control mt-2' rows={3} placeholder='Address' onChange={(e)=>setStudentAddress(e.target.value)} value={StudentAddress}></textarea>
</div>

<div className='d-flex justify-content-between'>
<div>
<label htmlFor="">ENTER MOTHER'S NAME:</label>
<input type="text" className='form-control mt-2' placeholder='Mothers Name' onChange={(e)=>setStudentMothersName(e.target.value)} value={StudentMothersName}/>
</div>
<div>
<label htmlFor="">ENTER FATHER'S NAME:</label>
<input type="text" className='form-control mt-2' placeholder='Fathers Name' onChange={(e)=>setStudentFathersName(e.target.value)} value={StudentFathersName} />
</div>
</div>

<div className='d-flex justify-content-between'>
<div>
<label htmlFor="">ENTER TOTAL FEES:</label>
<input type="number" className='form-control mt-2' placeholder='Total Fees' onChange={(e)=>setStudentTotalFess(e.target.value)} value={StudentTotalFess}/>
</div>
<div>
<label htmlFor="">ENTER REMAINING FEES:</label>
<input type="number" className='form-control mt-2' placeholder='Remaining Fees' onChange={(e)=>setStudentRemainingFees(e.target.value)} value={StudentRemainingFees}/>
</div>
</div>

<div>
<label htmlFor="">ENTER TOTAL ARREARS:</label>
<input type="text" className='form-control mt-2' placeholder='Total Arrears' onChange={(e)=>setTotalArrears(e.target.value)} value={TotalArrears}/>
</div>

<div className='text-center'>
<input type="submit"  className='btn btn-primary'/>
</div>

</form>
</div>
</div>
</div>


</div>
</div>
</section>

{/* FOR TEACHERS */}
<section className='container-fluid mt-5'>
<div className="container">
<div className="row">

<div className="col-lg-6" id='TeacherImage'>
<img src={Images.Teacher1}/>
</div>

<div className="col-lg-6 mt-5 mt-lg-0">
<div className="card" id='TeacherDetailsCard'>
<h4 className='text-center'>ENTER TEACHER'S DETAILS HERE</h4>
<div className="card-body">
<form id='TeacherDetailForm' onSubmit={(e)=>TeachersData(e)}>

<div>
<label htmlFor="">ENTER TEACHER NAME:</label>
<input type="text" placeholder='Teacher Name' className='form-control mt-3' onChange={(e)=>setTeachersName(e.target.value)} value={TeachersName} />
</div>

<div>
<label htmlFor="">ENTER TEACHER AGE:</label>
<input type="number" placeholder='Teacher Age' className='form-control mt-3' onChange={(e)=>setTeachersAge(e.target.value)} value={TeachersAge} />
</div>

<div>
<label htmlFor="">SELECT TEACHER DEPT:</label>
<select className='form-control mt-3' onChange={(e)=>setTeachersDept(e.target.value)} value={TeachersDept}>
<option hidden>SELECT DEPARTMENT</option>
<option value="CSE">CSE</option>
<option value="ECE">ECE</option>
<option value="AI&ML">AI&ML</option>
<option value="CYBER SECURITY">CYBER SECURITY</option>
<option value="EEE">EEE</option>
<option value="CIVIL">CIVIL</option>
</select>
</div>

<div>
<label htmlFor="">SELECT TEACHER QUALIFICATION:</label>
<select className='form-control mt-3' onChange={(e)=>setTeachersQualification(e.target.value)} value={TeachersQualification}>
<option hidden>SELECT DEPARTMENT</option>
<option value="ME">ME</option>
<option value="PHD">PHD</option>
</select>
</div>


<div>
<label htmlFor="">ENTER TEACHER DOB:</label>
<input type="date" placeholder='Teacher Name' className='form-control mt-3' onChange={(e)=>setTeachersDob(e.target.value)} value={TeachersDob} />
</div>

<div>
<label htmlFor="">ENTER TEACHER ADDRESS:</label>
<textarea className='form-control mt-3'rows={3} placeholder='Teachers Address' onChange={(e)=>setTeacherAddress(e.target.value)} value={TeacherAddress}></textarea>
</div>

<div>
<label htmlFor="">SELECT TEACHER GENDER:</label>
<select className='form-control mt-3' onChange={(e)=>setTeacherGender(e.target.value)} value={TeacherGender}>
<option hidden>SELECT GENDER</option>
<option value="MALE">MALE</option>
<option value="FEMALE">FEMALE</option>
</select>
</div>

<div>
<label htmlFor="">ENTER TEACHER BLOODGROUP:</label>
<input type="text" placeholder='Teacher BloodGroup' className='form-control mt-3' onChange={(e)=>setTeacherBloodGrp(e.target.value)} value={TeacherBloodGrp} />
</div>

<div>
<label htmlFor="">ENTER TEACHER SALARY:</label>
<input type="number" placeholder='Teacher Salary' className='form-control mt-3' onChange={(e)=>setTeacherSalary(e.target.value)} value={TeacherSalary} />
</div>

<div>
<input type="submit" className='btn btn-primary'/>
</div>

</form>
</div>
</div>
</div>

</div>
</div>
</section>
</>
  )
}

export default AdminHome