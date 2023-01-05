import React,  {useState, useEffect} from 'react';
import RenderUsers from './RenderUsers';
function UsersPage({user, users, loggedin, rerender, setRerender}) {

    function CreateUsers(){
       return (users.map( userdata => <RenderUsers userdata={userdata} user={user} rerender={rerender} setRerender={setRerender} loggedin={loggedin}/>))
    }
    
    return(
        <div>
            <h1>Users:</h1>
           {CreateUsers()}
        </div>
    )
}
export default UsersPage