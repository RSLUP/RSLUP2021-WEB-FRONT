import React from 'react'

export default function UserCard(props) {

    return (
        <div className="card">
            <div className="card-body">     
                <h5 className="card-title">{props.user.name}</h5>
                <p className="card-text">{props.user.email}</p>
                <a href="#" className="btn btn-success disabled">Active</a>
            </div>
        </div>
    )
}
