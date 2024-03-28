import { useState } from 'react';

export default function Form() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/data', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                console.log('Data posted successfully!');
                // You can handle success here, such as redirecting or updating state.
            } else {
                console.error('Failed to post data to the server.');
                // Handle error, maybe show a message to the user.
            }
        } catch (error) {
            console.error('Error posting data:', error);
        }
    };

    return (
        <form onSubmit={submit}>
            <input
                name="email"
                type="email"
                onChange={(event) => setEmail(event.target.value)}
                value={email}
            />
            <input
                name="password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            />
            <button type="submit">Submit</button>
        </form>
    );
}
