import React from "react";

function CreateUserCard({username, setUsername, setPassword, password, users, setUsers,handleUsername, handlePassword}){
    function handleSubmit(e){
        e.preventDefault()
        const newUser={
            
            username: username,
            password: password
        }
        fetch("/users", {
            method:"POST",
            headers:{
              "content-Type": "application/json",
            }, 
            body: JSON.stringify(newUser),
          })
          .then((r) => r.json())
          //.then(setProfiles([...profiles, newProfile]))
          
          setUsername('')
          
          setPassword('')
          
        //   window.location.href=window.location.href
        }
    return(
        <div className="New-user-card">
        <form onSubmit={handleSubmit}>
            
            <div>
                <p>Create New Account!</p>
                <label>Username:</label>
                <input type="text" name="uname" value={username} onChange={handleUsername} />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" name="pass" value={password} onChange={handlePassword} />
            </div>
            <div>
                <input className='button' type="submit" />
            </div>
        </form>
        
    </div>
    )

}
export default CreateUserCard