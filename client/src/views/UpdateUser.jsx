import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Form from "../components/Form";


const UpdateUser = () => {
const {id}=useParams();
const navigate=useNavigate();

const onSubmitHandler=(e,data)=>{
    e.preventDefault();
    axios.patch("http://localhost:8000/users/edit/"+id,data)
    .then(()=>{
        navigate('/users')
    })
    .catch("Error updating data ")
}

    return (
        <>
            <div className="form_update">
                <h1>Update User</h1>
                <Form onSubmitHandler={onSubmitHandler}/>
            </div>

            <div className="image_container_update">
                
            </div>
        </>
    )
}

export default UpdateUser;