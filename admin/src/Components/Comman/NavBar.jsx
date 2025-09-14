import React from 'react'
import {Link} from 'react-router-dom'
function NavBar() {
  return (
   <>
  <section className='container-fluid p-3' id='NavbarContainerFluid'>
  <div className="container" id='NavbarContainer'>
  
  <div id='BrandName'>
  <h3>SAI INSTITUDE & TECHNOLOGY</h3>
  </div>

  {/* ONLY VISIBLE FOR LARGE SCREENS */}
  <div id='Links' className='d-none d-lg-flex'>
  <Link to={'/ViewStudents'} className='View'>VIEW STUDENTS</Link>
  <Link to={'/ViewTeachers'} className='View'>VIEW TEACHERS</Link>
  </div>
  
  {/* ONLY VISIBLE FOR SMALL SCREENS */}
  <div className='d-flex d-lg-none' id='TooglerIcon'>
  <button class="navbar-toggler" type="button" data-bs-toggle='offcanvas' data-bs-target='#NavbarOffcanvas'>
  <span class="navbar-toggler-icon"></span>
  </button>
  </div>
  
  </div>
  </section>


  {/* OFFCANVAS FOR SMALLER SCREENS NAVBAR */}
  <div class="offcanvas offcanvas-top" id="NavbarOffcanvas" >
  <div class="offcanvas-header">
  <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
  <div className='d-flex flex-column gap-4'>
  <Link to={'/ViewStudents'} className='View'>VIEW STUDENTS</Link>
  <Link to={'/ViewTeachers'} className='View'>VIEW TEACHERS</Link>
  </div>
  </div>
  </div>
   </>
  )
}

export default NavBar