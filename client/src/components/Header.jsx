import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(props) {
  return (
    <header>

      <Link to='/'><h1>Progess Tracker</h1></Link>
      <div className='header-title'>
        {props.currentUser
          ?
          <>
            <p>{props.currentUser.username}</p>
            <button onClick={props.handleLogout}>logout</button>
          </>
          :
          <button onClick={props.handleLoginButton}>Login/register</button>
        }
      </div>
    </header >
  )
}