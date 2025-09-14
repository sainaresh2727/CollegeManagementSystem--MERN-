import React from 'react'
import { useContext } from 'react'
import { My_Context } from '../ContextFile/Context'
import { Images } from '../../assets/asset'

function Students() {
  let {StudentsRecords,StudentFullDetails,SingleStudent,UpdateFind,UStuName,setUStuName,UStuAge,setUStuAge,UStuBranch,setUStuBranch,UStuYear,setUStuYear,UStuGender,setUStuGender,UStuDob,setUStuDob,UStuBldGrp,setUStuBldGrp,UStuMother,setUStuMother,UStuFather,setUStuFather,UStuAddress,setUStuAddress,UStuTotalFees,setUStuTotalFees,UStuRemainingfess,setUStuRemainingfess,UStuTotalArrears,setUStuTotalArrears,UpdateStudent,DeleteStudent}=useContext(My_Context)
  
  return (
   <>
<section className='container-fluid' id='StudentMap'>
<video src={Images.StudentDetailsVideo} autoPlay muted loop></video>
<div className='Shadow'></div>
<div className="container mt-5" id='StudentMapmCon'>
<div className='table-responsive' style={{overflowY:"auto", height:"80vh"}}>
<table className='table text-center mt-5' id='TableMapStu'>
<thead>
<tr>
<th style={{whiteSpace:"nowrap"}}>STUDENT NAME</th>
<th style={{whiteSpace:"nowrap"}}>STUDENT AGE</th>
<th style={{whiteSpace:"nowrap"}}>STUDENT BRANCH</th>
<th style={{whiteSpace:"nowrap"}}>STUDENT YEAR</th>
<th style={{whiteSpace:"nowrap"}}>VIEW FULL DETAILS</th>
</tr>
</thead>
<tbody>
{
StudentsRecords.map((x,y)=>{
return(
<>
<tr key={y}>
<td style={{whiteSpace:"nowrap"}}>{x.StudentName}</td>
<td style={{whiteSpace:"nowrap"}}>{x.StudentAge}</td>
<td style={{whiteSpace:"nowrap"}}>{x.StudentBranch}</td>
<td style={{whiteSpace:"nowrap"}}>{x.StudentCurrentYear}</td>
<td><button className='btn btn-primary' type='button' onClick={()=>StudentFullDetails(x._id)} data-bs-toggle='modal' data-bs-target='#StudentModel'>VIEW FULL DETAILS</button></td>
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


{/* MODEL FOR STUDENT FULL DETAILS */}
<div className="modal fade" id="StudentModel">
<div className="modal-dialog modal-xl">
<div className="modal-content">
<div className="modal-header">
<button type="button" class="btn-close" data-bs-dismiss="modal"></button>
</div>
<div className="modal-body">
<section className='container-fluid' id='StudentDetailsConf'>
<div className='text-center'>
<h3 style={{fontStyle:"italic",color:"#5c4ce6"}}>FULL DETAILS HERE</h3>
<div className='HrLine'></div>
</div>
<div className="container mt-4">
<div className="row">
<div className="col-lg-7 mx-auto">
<table className='table' id='StudentDetailsTable'>
<tbody id='StudentsFullDetails'>
<tr>
<td className='StudentsFullDetailsKey'>STUDENT NAME :</td>
<td>{SingleStudent.StudentName}</td>
</tr>
<tr>
<td className='StudentsFullDetailsKey'>STUDENT AGE :</td>
<td>{SingleStudent.StudentAge}</td>
</tr>

<tr>
<td className='StudentsFullDetailsKey'>STUDENT BRANCH :</td>
<td>{SingleStudent.StudentBranch}</td>
</tr>


<tr>
<td className='StudentsFullDetailsKey'>STUDENT CURRENT YEAR :</td>
<td>{SingleStudent.StudentCurrentYear}</td>
</tr>

<tr>
<td className='StudentsFullDetailsKey'>STUDENT GENDER :</td>
<td>{SingleStudent.StudentGender}</td>
</tr>

<tr>
<td className='StudentsFullDetailsKey'>STUDENT DOB :</td>
<td>{SingleStudent.StudentDob}</td>
</tr>

<tr>
<td className='StudentsFullDetailsKey'>STUDENT BLOOD-GROUP :</td>
<td>{SingleStudent.StudentBldGrp}</td>
</tr>

<tr>
<td className='StudentsFullDetailsKey'>STUDENT MOTHER'S NAME :</td>
<td>{SingleStudent.StudentMothersName}</td>
</tr>

<tr>
<td className='StudentsFullDetailsKey'>STUDENT FATHER'S NAME :</td>
<td>{SingleStudent.StudentFathersName}</td>
</tr>

<tr>
<td className='StudentsFullDetailsKey'>STUDENT ADDRESS :</td>
<td>{SingleStudent.StudentAddress}</td>
</tr>

<tr>
<td className='StudentsFullDetailsKey'>STUDENT TOTAL-FEES :</td>
<td>{SingleStudent.StudentTotalFess}</td>
</tr>

<tr>
<td className='StudentsFullDetailsKey'>STUDENT REMAING-FEES :</td>
<td>{SingleStudent.StudentRemainingFees}</td>
</tr>

<tr>
<td className='StudentsFullDetailsKey'>STUDENT TOTAL-ARREARS :</td>
<td>{SingleStudent.TotalArrears}</td>
</tr>


</tbody>
</table>
</div>
</div>
</div>  
</section>    
</div>
<div class="modal-footer">
<button type="button" class="btn btn-primary" onClick={()=>UpdateFind(SingleStudent._id)} data-bs-toggle='modal' data-bs-target='#UpdateStudent'>UPDATE</button>
<button type="button" class="btn btn-danger" onClick={()=>DeleteStudent(SingleStudent._id)}>DELETE</button>

<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">CLOSE</button>

</div>
</div>
</div>
</div>
 

 {/* MODAL FOR UPDATE */}

<div class="modal fade" id="UpdateStudent" >
<div class="modal-dialog modal-xl">
<div class="modal-content">
<div class="modal-header">
<button type="button" class="btn-close" data-bs-dismiss="modal" ></button>
</div>
<div class="modal-body">
<section className='container-fluid'>
<div className="container">
<div className="row">
<div className="col-lg-6 mx-auto">
<div className="card" id='StudentUpdateCard'>
<div className='text-center mt-3'>
<h4>UPDATE HERE</h4>
</div>
<div className="card-body">

<form action="" id='UpdateStudentForm' onSubmit={(e)=>UpdateStudent(e)}>

<div>
<label htmlFor="">ENTER THE STUDENT NAME</label>
<input type="text" placeholder='Student Name' className='form-control mt-2' onChange={(e)=>setUStuName(e.target.value)} value={UStuName} />
</div>

<div>
<label htmlFor="">ENTER THE STUDENT AGE</label>
<input type="number" placeholder='Student Age' className='form-control mt-2' onChange={(e)=>setUStuAge(e.target.value)} value={UStuAge} />
</div>  

<div>
<label htmlFor="">ENTER THE STUDENT BLOOD GROUP</label>
<input type="text" placeholder='Blood Group' className='form-control mt-2' onChange={(e)=>setUStuBldGrp(e.target.value)} value={UStuBldGrp} />
</div>

<div>
<label htmlFor="">SELECT THE STUDENT BRANCH</label>
<select className='form-control mt-2' onChange={(e)=>setUStuBranch(e.target.value)} value={UStuBranch}>
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
<select className='form-control mt-2' onChange={(e)=>setUStuGender(e.target.value)} value={UStuGender}>
<option hidden>SELECT GENDER</option>
<option value="MALE">MALE</option>
<option value="FEMALE">FEMALE</option>
</select>
</div>  

<div>
<label htmlFor="">SELECT STUDENT'S CURRENT YEAR</label>
<select className='form-control mt-2' onChange={(e)=>setUStuYear(e.target.value)} value={UStuYear}>
<option hidden>SELECT YEAR</option>
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
<option value="4">4</option>
</select>
</div>  

<div>
<label htmlFor="">ENTER STUDENT'S DOB:</label>
<input type="date" className='form-control mt-2' onChange={(e)=>setUStuDob(e.target.value)} value={UStuDob} />
</div>

<div>
<label htmlFor="">ENTER STUDENT'S ADDRESS:</label>
<textarea className='form-control mt-2' rows={3} placeholder='Address' onChange={(e)=>setUStuAddress(e.target.value)} value={UStuAddress}></textarea>
</div>

<div className='d-flex justify-content-between'>
<div>
<label htmlFor="">ENTER MOTHER'S NAME:</label>
<input type="text" className='form-control mt-2' placeholder='Mothers Name' onChange={(e)=>setUStuMother(e.target.value)} value={UStuMother}/>
</div>
<div>
<label htmlFor="">ENTER FATHER'S NAME:</label>
<input type="text" className='form-control mt-2' placeholder='Fathers Name' onChange={(e)=>setUStuFather(e.target.value)} value={UStuFather} />
</div>
</div>

<div className='d-flex justify-content-between'>
<div>
<label htmlFor="">ENTER TOTAL FEES:</label>
<input type="number" className='form-control mt-2' placeholder='Total Fees' onChange={(e)=>setUStuTotalFees(e.target.value)} value={UStuTotalFees}/>
</div>
<div>
<label htmlFor="">ENTER REMAINING FEES:</label>
<input type="number" className='form-control mt-2' placeholder='Remaining Fees' onChange={(e)=>setUStuRemainingfess(e.target.value)} value={UStuRemainingfess}/>
</div>
</div>

<div>
<label htmlFor="">ENTER TOTAL ARREARS:</label>
<input type="text" className='form-control mt-2' placeholder='Total Arrears' onChange={(e)=>setUStuTotalArrears(e.target.value)} value={UStuTotalArrears}/>
</div>

<div className='text-center'>
<input type="submit"  className='btn btn-primary' value={"SAVE CHANGES"}/>
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

export default Students