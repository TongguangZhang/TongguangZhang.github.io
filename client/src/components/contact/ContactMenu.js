import React, { useState } from "react"
import emailjs from "emailjs-com"
import DOMPurify from "dompurify"

export default function ContactMenu() {
    const initial_state = {
        name: "",
        email: "",
        message: "",
    }

    const [form_data, set_form_data] = useState(initial_state)
    const [errors, set_errors] = useState({})
    const [is_loading, set_is_loading] = useState(false)
    const [is_sent, set_is_sent] = useState(false)

    const handle_change = (e) => {
        const { name, value } = e.target
        set_form_data((prevform_data) => ({
            ...prevform_data,
            [name]: value,
        }))
    }

    const handle_submit = (e) => {
        e.preventDefault()
        const validate_errors = validate_form()
        if (Object.keys(validate_errors).length > 0) {
            set_errors(validate_errors)
            return
        }

        set_is_loading(true)

        const { name, email, message } = form_data
        const sanitized_data = {
            name: "Name: " + DOMPurify.sanitize(name),
            email: "Email: " + DOMPurify.sanitize(email),
            message: "Message: " + DOMPurify.sanitize(message),
        }

        const serviceID = process.env.REACT_APP_EMAIL_SERVICE_ID
        const templateID = process.env.REACT_APP_EMAIL_TEMPLATE_ID
        const userID = process.env.REACT_APP_EMAIL_USER_ID
        console.log(serviceID, templateID, userID)
        emailjs
            .send(serviceID, templateID, sanitized_data, userID)
            .then((response) => {
                console.log("Email is sent successfully!", response.text)
                set_form_data(initial_state)
                set_errors({})
                set_is_sent(true)
            })
            .catch((error) => {
                console.error("Email sending failed", error)
            })
            .finally(() => {
                set_is_loading(false)
            })
    }

    const validate_form = () => {
        const { name, email, message } = form_data
        const errors = {}

        if (!name.trim()) {
            errors.name = "Name is required"
        }

        if (!email.trim()) {
            errors.email = "Email is required"
        } else if (!is_valid_email(email)) {
            errors.email = "Invalid email format"
        }

        if (!message.trim()) {
            errors.message = "Message is required"
        }

        return errors
    }

    const is_valid_email = (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(value)
    }

    return (
        <div className="contact-menu">
            {!is_sent && (
                <form onSubmit={handle_submit}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Name"
                            value={form_data.name}
                            onChange={handle_change}
                            className={errors.name ? "error" : ""}
                            disabled={is_loading}
                        />
                        {errors.name && <span className="error-message">{errors.name}</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            value={form_data.email}
                            onChange={handle_change}
                            className={errors.email ? "error" : ""}
                            disabled={is_loading}
                        />
                        {errors.email && <span className="error-message">{errors.email}</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Message"
                            value={form_data.message}
                            onChange={handle_change}
                            className={errors.message ? "error" : ""}
                            disabled={is_loading}
                        ></textarea>
                        {errors.message && <span className="error-message">{errors.message}</span>}
                    </div>
                    <button type="submit" disabled={is_loading}>
                        {is_loading ? "SENDING..." : "SUBMIT"}
                    </button>
                </form>
            )}
            {is_sent && (
                <div className="success-message">
                    <p>SUCCESS!</p>
                    <p>Your message has been successfully sent!</p>
                    <p>You can safely leave this page.</p>
                </div>
            )}
        </div>
    )
}

