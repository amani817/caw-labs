import React, { useState } from 'react';
function AuthForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [users, setUsers] = useState([]);
    const handleSubmit = (e) => {
        e.preventDefault();
        setUsers([...users, username]);
        setUsername('');
        setPassword('');
    };
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
                <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <button type="submit">Submit</button>
            </form>
            <ul>
                {users.map((user, index) => (
                    <li key={index}>
                        {user} <button onClick={() => setUsers(users.filter((_, i) => i !== index))}>Delete</button>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default AuthForm;