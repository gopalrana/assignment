import React, { useState } from 'react';

const NameForm = () => {
    const [fullName, setFullName] = useState('');

    const handleChange = (event) => {
        setFullName(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Hello, ${fullName}!`);
        setFullName('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Enter your full name:
                <input
                    type="text"
                    value={fullName}
                    onChange={handleChange}
                    placeholder="John Doe"
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};

export default NameForm;
