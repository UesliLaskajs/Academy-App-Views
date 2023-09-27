    import { useState } from "react";




    const Form = (prop) => {
        const {onSubmitHandler}=prop
        const [name, setName] = useState('')
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')
        const [image, setImage] = useState('')
        const [role, setRole] = useState('student')
        const [belt, setBelt] = useState(false)
        const [degree, setDegree] = useState(false)

        return (
            <>
            <div className="form_container">
            <form onSubmit={e => onSubmitHandler(e, { name, email, password, image, role, belt, degree })}>
                    <label htmlFor="name">Name:</label>
                    <input type="text"
                        placeholder="Enter Name"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value)
                        }} />

                    <label htmlFor="email">Email:</label>
                    <input type="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }} />

                    <label htmlFor="password">Password:</label>
                    <input type="password"
                        placeholder="Enter Passsword"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }} />

                    <label htmlFor="image">Image:</label>
                    <input type="text"
                        placeholder="Enter IMage Url"
                        value={image}
                        onChange={(e) => {
                            setImage(e.target.value)
                        }} />

                    <label htmlFor="role">Role</label>
                    <select name="role" id="">
                        <option value='student' onChange={(e) => {
                            setRole(e.target.value)
                        }}>Teacher</option>
                        <option value='teacher' onChange={(e) => {
                            setRole(e.target.value)
                        }}>Student</option>
                    </select>


                    <label htmlFor="belt">Belt :</label>
                    <input type="checkbox"
                        value={belt}
                        onChange={(e) => {
                            if(e.target.checked){
                                setBelt(true)
                            }
                        }} />

                    <label htmlFor="degree">Degree</label>
                    <input type="checkbox"
                        value={degree}
                        onChange={(e) => {
                        if(e.target.checked)
                        setDegree   (true)
                        }
                    }/>
                    <button>Submit</button>
                </form>
            </div>
               
                

            </>
        )
    }

    export default Form;