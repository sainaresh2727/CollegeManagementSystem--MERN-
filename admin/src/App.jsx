import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Context from './Components/ContextFile/Context'
import AdminHomePage from './Pages/AdminHomePage'
import ViewStudentsPage from './Pages/ViewStudentsPage'
import ViewTeachersPage from './Pages/ViewTeachersPage'
function App() {
  return (
<>
<BrowserRouter>
<Context>
<Routes>
<Route path='/' element={<AdminHomePage/>}/>
<Route path='/ViewStudents' element={<ViewStudentsPage/>}/>
<Route path='/ViewTeachers' element={<ViewTeachersPage/>} />
</Routes>
</Context>
</BrowserRouter>
</>
  )
}

export default App