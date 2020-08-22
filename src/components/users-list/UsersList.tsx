import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function UsersList() {

	const [ usersData, setUsers ] = useState([])

	useEffect(() => {
		const fetchUsers = async () => {
			const result = await axios(
				{ baseURL: `http://localhost:8000/` }
			)
			setUsers(result.data)
		}
		fetchUsers()
	}, [])

	const usersList = usersData.map(user => <li key={user}>{user}</li>)

	return (
		<div className="UsersList">
			<ul>
				{ usersList }
			</ul>
		</div>
	)
}