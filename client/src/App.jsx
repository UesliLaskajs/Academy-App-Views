import{BrowserRouter as Router,Routes,Route} from "react-router-dom"
import CreateUser from "./views/CreateUser"
import ViewUser from "./views/ViewUser"
import UpdateUser from "./views/UpdateUser"
import UserList from "./views/Userlist"


function App() {


  return (
    <Router>
      <Routes>
        <Route path="/users" element={<UserList/>}/>
        <Route path="/users/new" element={<CreateUser/>}/>
        <Route path="/users/:id" element={<ViewUser/>}/>
        <Route path="/users/edit/:id" element={<UpdateUser/>}/>
      </Routes>
    </Router>
    )
}

export default App
