import React, { useContext } from 'react'
import { My_Context } from '../ContextFile/Context'

function Teachers() {
  let {TeacherRecords,FindTeachers,FindTeacObj,TeacherUpdate,UptechName,setUptechName,UptechAge,setUptechAge,UptechDept,setUptechDept,UptechQuali,setUptechQuali,UptechAddress,setUptechAddress,UptechDob,setUptechDob,UptechGender,setUptechGender,UptechBld,setUptechBld,UptechSalary,setUptechSalary,UpdateTeachers,TeachersDelete}=useContext(My_Context)
  return (
   <>
   <section className='container-fluid mt-5'>
   <div className="container">
   <div className='table-responsive'>
   <table className='table'>
   <thead>
   <tr>
   <th>TEACHER NAME</th>
   <th>TEACHER AGE</th>
   <th>TEACHER DEPT</th>
   <th>TEACHER QUALIFICATION</th>
   <th>VIEW FULL DETAILS</th>
   </tr>
   </thead>
   <tbody>
    {
    TeacherRecords.map((x,y)=>{
    return(
    <>
    <tr key={y}>
    <td>{x.TeachersName}</td>
    <td>{x.TeachersAge}</td>
    <td>{x.TeachersDept}</td>
    <td>{x.TeachersQualification}</td>
    <td><button className='btn btn-primary' onClick={()=>FindTeachers(x._id)} data-bs-toggle='modal' data-bs-target='#TeacherFullDetails'>VIEW FULL-DETAILS</button></td>
    </tr>
    </>
        )
      })
    }
   </tbody>
   </table>
   </div>
   </div>
   </section>

   {/* MODAL FOR FULL TEACHER DETAILS */}
<div className="modal fade" id="TeacherFullDetails">
<div className="modal-dialog modal-xl">
<div className="modal-content">
<div className="modal-header">
<button type="button" class="btn-close" data-bs-dismiss="modal"></button>
</div>
<div className="modal-body">

<section className='container-fluid'>
<div className="container">
<div className="row">
<div className="col-lg-7 mx-auto">
<table className='table'>
<tbody>

<tr>
<td>TEACHER NAME:</td>
<td>{FindTeacObj.TeachersName}</td>
</tr>

<tr>
<td>TEACHER AGE:</td>
<td>{FindTeacObj.TeachersAge}</td>
</tr>

<tr>
<td>TEACHER DEPARTMENT:</td>
<td>{FindTeacObj.TeachersDept}</td>
</tr>

<tr>
<td>TEACHER QUALIFICATION:</td>
<td>{FindTeacObj.TeachersQualification}</td>
</tr>

<tr>
<td>TEACHER ADDRESS:</td>
<td>{FindTeacObj.TeacherAddress}</td>
</tr>

<tr>
<td>TEACHER DOB:</td>
<td>{FindTeacObj.TeachersDob}</td>
</tr>

<tr>
<td>TEACHER GENDER:</td>
<td>{FindTeacObj.TeacherGender}</td>
</tr>

<tr>
<td>TEACHER BLOODGROUP:</td>
<td>{FindTeacObj.TeacherBloodGrp}</td>
</tr>

<tr>
<td>TEACHER SALARY:</td>
<td>{FindTeacObj.TeacherSalary}</td>
</tr>



</tbody>
</table>
</div>
</div>
</div>
</section>

</div>
<div className="modal-footer">
<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
<button className='btn btn-success' onClick={()=>TeacherUpdate(FindTeacObj._id)} data-bs-toggle='modal' data-bs-target='#UpdateTeacherss'>UPDATE</button>
<button className='btn btn-danger' onClick={()=>TeachersDelete(FindTeacObj._id)}>DELETE</button>
</div>
</div>
</div>
</div>


<div class="modal fade" id="UpdateTeacherss">
<div class="modal-dialog modal-xl">
<div class="modal-content">
<div class="modal-header">
<button type="button" class="btn-close" data-bs-dismiss="modal"></button>
</div>
<div class="modal-body">

<section className='container-fluid'>
<div className="container">

<div className="row">
<div className="col-lg-7 mx-auto p-2">
<div className="card" id='UpdateTeachersCardIp'>
<div className="card-body">
<h4 className='text-center' style={{fontStyle:"italic"}}>UPDATE HERE</h4>
<form id='TeacherDetailForm' onSubmit={(e)=>UpdateTeachers(e)}>

<div>
<label htmlFor="">ENTER TEACHER NAME:</label>
<input type="text" placeholder='Teacher Name' className='form-control mt-3' onChange={(e)=>setUptechName(e.target.value)} value={UptechName} />
</div>

<div>
<label htmlFor="">ENTER TEACHER AGE:</label>
<input type="number" placeholder='Teacher Age' className='form-control mt-3' onChange={(e)=>setUptechAge(e.target.value)} value={UptechAge} />
</div>

<div>
<label htmlFor="">SELECT TEACHER DEPT:</label>
<select className='form-control mt-3' onChange={(e)=>setUptechDept(e.target.value)} value={UptechDept}>
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
<select className='form-control mt-3' onChange={(e)=>setUptechQuali(e.target.value)} value={UptechQuali}>
<option hidden>SELECT DEPARTMENT</option>
<option value="ME">ME</option>
<option value="PHD">PHD</option>
</select>
</div>


<div>
<label htmlFor="">ENTER TEACHER DOB:</label>
<input type="date" placeholder='Teacher Name' className='form-control mt-3' onChange={(e)=>setUptechDob(e.target.value)} value={UptechDob} />
</div>

<div>
<label htmlFor="">ENTER TEACHER ADDRESS:</label>
<textarea className='form-control mt-3'rows={3} placeholder='Teachers Address' onChange={(e)=>setUptechAddress(e.target.value)} value={UptechAddress}></textarea>
</div>

<div>
<label htmlFor="">SELECT TEACHER GENDER:</label>
<select className='form-control mt-3' onChange={(e)=>setUptechGender(e.target.value)} value={UptechGender}>
<option hidden>SELECT GENDER</option>
<option value="MALE">MALE</option>
<option value="FEMALE">FEMALE</option>
</select>
</div>

<div>
<label htmlFor="">ENTER TEACHER BLOODGROUP:</label>
<input type="text" placeholder='Teacher BloodGroup' className='form-control mt-3' onChange={(e)=>setUptechBld(e.target.value)} value={UptechBld} />
</div>

<div>
<label htmlFor="">ENTER TEACHER SALARY:</label>
<input type="number" placeholder='Teacher Salary' className='form-control mt-3' onChange={(e)=>setUptechSalary(e.target.value)} value={UptechSalary} />
</div>

<div className='mx-auto'>
<input type="submit" className='btn btn-primary'/>
</div>

</form>

</div>
</div>
</div>
</div>

</div>
</section>

</div>
<div class="modal-footer">
<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        
</div>
</div>
</div>
</div>
</>
  )
}

export default Teachers