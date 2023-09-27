import  { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ViewUser = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        image: '',
        role: '',
        belt: false,
        degree: false,
    });

    useEffect(() => {
        axios.get(`http://localhost:8000/users/${id}`)
            .then((res) => {
                setUser(res.data);
            })
            .catch((err) => {
                console.error("Error fetching user data", err);
            });
    }, [id]);

    return (
        <div className="form_container">
            <h1>User Name</h1>

            <form>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    name="name"
                    value={user.name}
                    readOnly
                />

                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    name="email"
                    value={user.email}
                    readOnly
                />

                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    name="password"
                    value={user.password}
                    readOnly
                />

                <label htmlFor="image">Image:</label>
                <input
                    type="text"
                    name="image"
                    value={user.image}
                    readOnly
                />

                <label htmlFor="role">Role:</label>
                <input
                    type="text"
                    name="role"
                    value={user.role}
                    readOnly
                />

                <label htmlFor="belt">Belt:</label>
                <input
                    type="checkbox"
                    name="belt"
                    checked={user.belt}
                    readOnly
                />

                <label htmlFor="degree">Degree:</label>
                <input
                    type="checkbox"
                    name="degree"
                    checked={user.degree}
                    readOnly
                />

                <button onClick={() => navigate(`/users/edit/${user._id}`)}>
                    Edit
                </button>
            </form>
        </div>
    );
};

export default ViewUser;
