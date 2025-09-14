import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { My_Context } from '../ContextFile/Context'
function StudentPageNavBar() {
  let {StudentSearch,setStudentSearch,StudentRecordsLower,StudentFullDetails}=useContext(My_Context)
  return (
   <>
   <section className='container-fluid' id='StudentNavbarCf'>
   <div className="container" id='StudentNavbarContainer'>
   
   <div id='BrandStudent'>
   <h1>SIT</h1>
   </div>

   {/* VISIBILE ONLY FOR LARGE SCREENS */}
   <div className='d-lg-flex d-none gap-3 align-items-center'>
    <Link className='StudentsNavbarLink' to={'/'}>HOME</Link>
    <Link className='StudentsNavbarLink' to={'/ViewTeachers'}>VIEW-TEACHERS</Link>
   </div>

    {/* SEARCH ICON */}
    <div id='SearchStudent'>
    <i class="fa-brands fa-searchengin" data-bs-toggle='offcanvas' data-bs-target='#SearchStudentOff'></i>
    </div>

  {/* VISIBLE ONLY FOR SMALL SCREENS TOGGLER ICON*/}
   <div className='d-flex d-lg-none' id='StudentToggler'>
   <button className='navbar-toggler' type='button' data-bs-toggle='offcanvas' data-bs-target='#StudentNavbar'>
   <span className='navbar-toggler-icon'></span>
   </button>
   </div>
   </div>
   </section>

   {/* OFFCANVAS FOR STUDENT MENUS */}
   <div class="offcanvas offcanvas-start" id="StudentNavbar">
  <div class="offcanvas-header">
  
  <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"></button>
  </div>
  <div class="offcanvas-body">
  <div className='d-flex flex-column gap-3'>
  <Link className='StudentsNavbarLink' to={'/'}>HOME</Link>
  <Link className='StudentsNavbarLink' to={'/ViewTeachers'}>VIEW TEACHERS</Link>
  </div>
  </div>
  </div>

  {/* OFFCANVAS FOR STUDENT SEARCH */}
  <div class="offcanvas offcanvas-top" id="SearchStudentOff">
  <div class="offcanvas-header">
  <input type="text" className='form-control w-100' placeholder='Search Students Here' onKeyUp={(e)=>setStudentSearch(e.target.value)}/>
  <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"></button>
  </div>
  <div class="offcanvas-body">
  <section className='container-fluid'>
  <div className="container">
  <div className='table-responsive'>
  <table className='table table-primary'>
  <thead>
  <tr>
  <th>STUDENT-NAME</th>
  <th>STUDENT-AGE</th>
  <th>STUDENT-BRANCH</th>
  <th>STUDENT-YEAR</th>
  <th>VIEW-FULLDETAILS</th>
  </tr>
  </thead>
  <tbody>
  {
    StudentSearch.length===0 
    ?
    <tr>
    <td colSpan={5} className='text-center
    '>NO STUDENTS FOUND</td>
    </tr>
    :
     StudentRecordsLower.map((x,y)=>{
    return(
    <>
    <tr key={y}>
    <td>{x.StudentName}</td>
    <td>{x.StudentAge}</td>
    <td>{x.StudentBranch}</td>
    <td>{x.StudentCurrentYear}</td>
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
  </div>
  </div>
   </>
  )
}

export default StudentPageNavBar