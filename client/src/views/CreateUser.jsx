import axios from "axios";
import { useNavigate } from "react-router-dom";
import Form from "../components/Form";
    
const CreateUser=()=>{
    const navigate=useNavigate();
    let buttonCreate="Create"

    const onSubmitHandler=(e,data)=>{
            e.preventDefault();
            axios.post("http://localhost:8000/users/new",data)
            .then(()=>{
                navigate('/users')
            })
            .catch((err)=>{
                console.log("Error posting data",err)
            })
    }
    return(
        <>
        
        <div className="createUser_conainer">
            <h1>Create New Account</h1>
            <Form onSubmitHandler={onSubmitHandler} buttonname={buttonCreate} />
        </div>  
        </>
    )
}

export default CreateUser;