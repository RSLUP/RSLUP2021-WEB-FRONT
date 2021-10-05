import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div>
            <h1>Home</h1>
            <Link to="/users">
              <button type="button" className="btn btn-primary mt-2 mb-5">
                    UserList
              </button>
            </Link>
        </div>
    )
}
