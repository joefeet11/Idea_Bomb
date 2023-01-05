import React, {useState, useEffect} from "react";
import {Routes, Route} from "react-router-dom";
import RenderLoginPage from "./components/LoginPage";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import './App.css';
import FollowingPage from "./components/FollowingPage";
import UsersPage from "./components/UsersPage";

function App() {
  const [user, setUser] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [users, setUsers] = useState([])
  const [loggedin, setLoggedin] = useState(false)
  const [ideas, setIdeas] = useState([])
  const [rerender, setRerender] = useState(false)
  
  
  useEffect(() => {
    fetch("/auth").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
        if(user){
          setLoggedin(true)
        }
      }
    });
  }, [rerender]);
  useEffect(() => {
    fetch('/ideas')
    .then(r => r.json())
    .then(setIdeas)
  },[rerender])

  useEffect(() => {
    fetch("/users")
    .then(r => r.json())
    .then(setUsers)
  },[rerender])
  

  
   

  

  function onLogout() {
    setLoggedin(false)
    setUser([])
  }

  function logOut() {
    fetch("/logout", {
      method: "DELETE",
    }).then(()=> onLogout())
  }



  
  return (
    <div className="App">
      <NavBar 
      loggedin={loggedin}
      user={user}
      />
      <Routes>
        <Route exact path = "/login"
        element={<RenderLoginPage 
        setUser= {setUser}
        user={user}
        setUsername={setUsername}
        username={username}
        setPassword={setPassword}
        password={password}
        setUsers={setUsers}
        users={users}
        setLoggedin={setLoggedin}
        loggedin={loggedin}
        logout={logOut}
        rerender={rerender}
        setRerender={setRerender}
        />}/>
        <Route exact path = '/'
        element= {<HomePage
          loggedin={loggedin}
          user={user} 
          ideas={ideas}
          setIdeas={setIdeas}
          rerender={rerender}
          setRerender={setRerender}
          
        />}/>

        <Route exact path = '/following' 
        element = {<FollowingPage 
          user={user}
          rerender={rerender}
          setRerender={setRerender}
          loggedin={loggedin}
         

        />}/>

        <Route exact path = '/users' 
        element = {<UsersPage 
          users={users}
          user={user}
          loggedin={loggedin}
          rerender={rerender}
          setRerender={setRerender}

        />}/>
      </Routes>
      
    </div>
  );
}

export default App;
