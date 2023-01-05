import React,  {useState, useEffect} from 'react';

function FollowBtn({userdata, user, rerender, setRerender}) {

    

    function followClick(){
        const newFollow = {
            follower_id: user.id,
            followed_user_id: userdata.id
        }
        fetch('/follows', {
            method: "POST",
            headers: {
                "content-Type": "application/json",
            },
            body: JSON.stringify(newFollow),
        })
        .then((r) => r.json())
        setRerender(!rerender)
        alert(`You just followed ${userdata.username}` )
    }

    function unfollowClick() {
        fetch(`/follows/${user.id}/${userdata.id}`, {
            method: "DELETE",
        })
        alert("You removed a follower")
        setRerender(!rerender)
    }
    

    

   return(
    <div>
        <button className = "button" onClick= {followClick}>follow</button>
        <button className = "button" onClick= {unfollowClick}>unfollow</button>
    </div>
   )

}
export default FollowBtn