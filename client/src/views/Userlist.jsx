import { useState, useEffect } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import DeleteButton from "../components/DeleteButton";
import { Link } from "react-router-dom";
const UserList = () => {
    const [user, setUser] = useState([])
    let navigate = useNavigate();
    useEffect(() => {
        axios.get("http://localhost:8000/users")
            .then((res) => {
                console.log(res.data)
                setUser(res.data);
            })
    }, [])

    return (
        <>
        <Link to='/users/new'><h1>Create</h1></Link>
            <div className="parent_container">
                {
                    user.map((item, index) => (
                        <div key={index} className="items_container">
                            <div className="user_list_image">
                                <img src={item.image} alt="" />
                            </div>
                            <div className="text_butt_container">
                                <div className="hero">
                                    {item.name}
                                </div>
                                <div className="buttons_list">
                                    <button onClick={() => navigate(`/users/${item._id}`)}>View Profile</button>
                                    <div className="button_delete">
                                        <DeleteButton id={`${item._id}`} user={user} setUser={setUser}/>
                                    </div>


                                </div>
                            </div>
                        </div>
                    )
                    )
                }
            </div>
        </>
    )

}

export default UserList;