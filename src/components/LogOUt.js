import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function LogOUt() {
    
  return (
    <div>
        <Link className="list-group-item list-group-item-action"  to="/logout" > LOGOUT</Link>
    </div>
  )
}

