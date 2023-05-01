import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Home';
import Admindash from './components/AdminDash/Admindash';
import Managerdash from './components/ManagerDash/Managerdash';
import Studentdash from './components/StudentDash/Studentdash';
import Teacherdash from './components/TeacherDash/Teacherdash';
import Login from './views/user/Login';
import Register from './views/user/Register';
import Landing from './components/Landing';
import Layout from './components/Layout';
import Profile from './views/user/Profile';
import Kanban from './views/task/Kanban';
import Calendar from './views/Calendar';
import Forgotpass from './views/user/Forgotpass';
import Resetpass from './views/user/Resetpass';
import Files from './views/file/Files';
import Error from './views/user/Error';
import UserTable from './views/user/UserTable';
import ProjectList from './views/project/ProjectList';
import AddProject from './views/project/AddProject';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
   <Routes>
   
   <Route  path="/" element={<Landing/>}/>
     <Route  path="/login" element={<Login/>}/>
     <Route  path="/register" element={<Register/>}/>
     <Route  path="/error" element={<Error/>}/>
     
     {/* <Route  path="/profile" element={<Profile/>}/>  */}
      <Route  path="/forgotpass" element={<Forgotpass/>}/>
      <Route  path="/resetpass/:id/:token" element={<Resetpass/>}/>
     {/* <Route  path="/users/:id/emailverify/:token" element={<EmailVerify/>}/>  */}

     
     
     <Route  path="/admindash" element={<Admindash/>}>
     <Route  path="/admindash" element={<UserTable/>}/>
     <Route  path="/admindash/profile" element={<Profile/>}/>
     <Route  path="/admindash/usertable" element={<UserTable/>}/> 
     </Route>
     <Route  path="/managerdash" element={<Managerdash/>}>
     <Route  path="/managerdash/files" element={<Files/>}/>
     </Route>


     <Route  path="/teacherdash" element={<Teacherdash/>}>
     <Route  path="/teacherdash/kanban" element={<Kanban/>}/> 
     <Route  path="/teacherdash/calendar" element={<Calendar/>}/> 
     <Route  path="/teacherdash/project" element={<ProjectList/>}/> 
     <Route  path="/teacherdash/addproject" element={<AddProject/>}/> 
     </Route>
     <Route  path="/studentdash" element={<Studentdash/>}>

     {/* <Route  path="/studentdash/topicard" element={<TopicCard/>}/>*/}
     <Route  path="/studentdash/kanban" element={<Kanban/>}/> 
     <Route  path="/studentdash/calendar" element={<Calendar/>}/> 
     
       </Route>
 
   </Routes>
   </BrowserRouter>
   </div>
  );
}

export default App;
