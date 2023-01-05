import React from 'react'
import { Link } from 'react-router-dom'
 export default function NavBar({loggedin, user}) {
     return <nav className="nav">
         <Link to="/" className="site-title">Home</Link>
     <ul>
        <li>
            <Link to="/users">Users</Link>
        </li>
         <li>
             <Link to="/following">Following</Link>
         </li>
         <li>
             {loggedin ? `Hello, ${user.username}` : null }
         </li>
         <li>
             <Link to="/login">Login</Link>
         </li>
     </ul>
     </nav>
 }