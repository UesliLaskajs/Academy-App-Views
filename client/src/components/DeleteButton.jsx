import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const DeleteButton = (prop) => {
    const { id,setUser } = prop
    
    const navigate=useNavigate();
    const eventHandler = (e) => {
        e.preventDefault();
        axios.delete("http://localhost:8000/users/delete/" + id)
            .then(() => {
                setUser((prevUsers) => prevUsers.filter((item) => item._id !== id  ));
                navigate("/users")
            })
            .catch((err) => {
                console.log("error", err)
            })
    }


    return (
        <>
            <button onClick={eventHandler}>Delete</button>
        </>

    )
}
export default DeleteButton;