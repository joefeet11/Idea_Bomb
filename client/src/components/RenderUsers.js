import React,  {useState, useEffect} from 'react';
import FollowBtn from './FollowBtn';
function RenderUsers({userdata, loggedin, user, rerender, setRerender}){

   

    return(
        <div>
            
            <h2>{userdata.username}</h2>
            {loggedin ? <FollowBtn userdata={userdata} user={user} rerender={rerender} setRerender={setRerender}/>: null}
        </div>
    )
}
export default RenderUsers 