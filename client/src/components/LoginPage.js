import React, {useState} from "react";
import CreateLoginCard from "./LoginCard";
import CreateUserCard from "./NewUserCard";

import { useNavigate } from "react-router-dom";

function RenderLoginPage({logout, setUser, setUsername, username, setPassword, password, setUsers, users, setLoggedin, loggedin, user, rerender, setRerender }){
    const navigate = useNavigate()
    const [display, setDisplay] = useState("none")
    function handleDisplay(){
        switch (display){
            case "login":
                return <CreateLoginCard setUser={setUser} setUsername={setUsername} username={username} setPassword={setPassword} password={password} handleUsername={handleUsername} handlePassword={handlePassword} loggedin={loggedin} setLoggedin={setLoggedin} users={users}/>
            case "new":
                return <CreateUserCard  username={username} setUsername={setUsername} setPassword={setPassword} password={password} users={users} setUsers={setUsers} handleUsername={handleUsername} handlePassword={handlePassword} />
            case "none":
                return null
        }
    }

    function handleUsername(e){
        setUsername(e.target.value)
    }
    function handlePassword(e){
        setPassword(e.target.value)
    }

    function deleteUser() {
        fetch(`/users/${user.id}`,{
            method: "Delete",
        })
        .then((r)=> r.json())
        setRerender(!rerender)
        logout()
    }

    
    
   
    function handleLogIn () {
        setDisplay("login")
    }

    function handleNewUser () {
        setDisplay("new")
    }
    

   

    return(
    <div className='Login-page-div'>
        {loggedin ? <button className='button'onClick={logout}>Log Out</button> : <button className='button' onClick={handleLogIn}>Log In</button>}
        {loggedin ? null : <button className='button' onClick={handleNewUser}>Create Account</button>}
        {loggedin ? <button className = 'button' onClick={deleteUser}>Delete Account</button> : null}
        {loggedin ? "You are Logged In" : handleDisplay()}
        
        
    </div>
    )

}
export default RenderLoginPage