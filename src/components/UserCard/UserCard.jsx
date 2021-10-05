import React from 'react'

export default function UserCard(props) {
console.log(props)
    return (
        <div className="card">
            <div className="card-body">     
                <p className="card-text"><b>Name :</b> {props.user.first_name} {props.user.last_name}</p>
                <p className="card-text"><b>Gender :</b> {props.user.gender}</p>
                <p className="card-text"><b>Email :</b> {props.user.email}</p>
                <a href="#" className="btn btn-success disabled">Active</a>
            </div>
        </div>
    )
}
