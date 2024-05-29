import React, { useState } from 'react';

const MultiFieldForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const { fullName, email, phoneNumber } = formData;
        alert(`Name: ${fullName}\nEmail: ${email}\nPhone Number: ${phoneNumber}`);
        setFormData({
            fullName: '',
            email: '',
            phoneNumber: ''
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Full Name:
                <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="John Doe"
                />
            </label>
            <label>
                Email:
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                />
            </label>
            <label>
                Phone Number:
                <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="123-456-7890"
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};

export default MultiFieldForm;
