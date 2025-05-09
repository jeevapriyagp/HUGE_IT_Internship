import { useState } from "react";
import "./ContactForm.css";

// creating a contact form component that will be used in the app
function ContactForm() 
{
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [submittedData, setSubmittedData] = useState(null);
    const [errors, setErrors] = useState({});

    // validating name
    const validateName = (name) => {
        const trimmedName = name.trim();
        const isValidName = /^[A-Za-z\s]+$/.test(trimmedName);
        if (trimmedName.length < 3) return "Name must be at least 3 characters";
        if (!isValidName) return "Name can only contain letters and spaces";
        return "";
    };

    // validating email
    const validateEmail = (email) => {
        const trimmedEmail = email.trim();
        const pattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
        if (!pattern.test(trimmedEmail)) return "Invalid email address";
        return "";
    };

    // validating message - makes sure it is not empty
    const validateMessage = (message) => {
        if (!message.trim()) return "Message can't be empty";
        return "";
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // calls functions to validate before submission
        const nameError = validateName(formData.name);
        const emailError = validateEmail(formData.email);
        const messageError = validateMessage(formData.message);

        const newErrors = {
            ...(nameError && { name: nameError }),
            ...(emailError && { email: emailError }),
            ...(messageError && { message: messageError }),
        };

        setErrors(newErrors); 

        // resets form once submitted
        if (Object.keys(newErrors).length === 0) 
        {
            setSubmittedData(formData);
            setFormData({ name: "", email: "", message: "" });
            setErrors({});
            alert("Form submitted!");
        }
    };

    // handles all changes
    return (
        <div>
        <form onSubmit={handleSubmit} noValidate>
            <div>
                <label htmlFor="name">Name:</label>
                <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
                {errors.name && <div className="error">{errors.name}</div>}
            </div>

            <div>
                <label htmlFor="email">Email:</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                {errors.email && <div className="error">{errors.email}</div>}
            </div>

            <div>
                <label htmlFor="message">Message:</label>
                <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                />
                {errors.message && <div className="error">{errors.message}</div>}
            </div>

            <button type="submit">Submit</button>
        </form>

        {/* displays all submitted data below */}
        {submittedData && (
            <div className="submitted-data">
                <h3>Submitted Data:</h3>
                <p><strong>Name:</strong> {submittedData.name}</p>
                <p><strong>Email:</strong> {submittedData.email}</p>
                <p><strong>Message:</strong> {submittedData.message}</p>
            </div>
        )}
    </div>
    );
}

export default ContactForm;
  