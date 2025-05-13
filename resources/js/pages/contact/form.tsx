import React, { useState } from 'react';

const ContactForm: React.FC = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send the form data to your backend
        setSubmitted(true);
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Contact Us</h2>
            {submitted ? (
                <div style={styles.success}>Thank you for reaching out! We'll get back to you soon.</div>
            ) : (
                <form onSubmit={handleSubmit} style={styles.form}>
                    <label style={styles.label}>
                        Name
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            style={styles.input}
                            placeholder="Your Name"
                        />
                    </label>
                    <label style={styles.label}>
                        Email
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            style={styles.input}
                            placeholder="you@example.com"
                        />
                    </label>
                    <label style={styles.label}>
                        Message
                        <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            required
                            style={styles.textarea}
                            placeholder="How can we help you?"
                            rows={5}
                        />
                    </label>
                    <button type="submit" style={styles.button}>
                        Send Message
                    </button>

                    <button
                        type="button"
                        style={{ ...styles.button, background: '#a0aec0', marginTop: 0 }}
                        onClick={() => window.history.back()}
                    >
                        Back
                    </button>
                </form>
            )}
        </div>
    );
};

const styles: { [key: string]: React.CSSProperties } = {
    container: {
        maxWidth: 400,
        margin: '40px auto',
        padding: 24,
        background: '#fff',
        borderRadius: 8,
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        fontFamily: 'Segoe UI, Arial, sans-serif',
    },
    heading: {
        textAlign: 'center',
        marginBottom: 24,
        color: '#1a202c',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
    },
    label: {
        display: 'flex',
        flexDirection: 'column',
        fontWeight: 500,
        color: '#2d3748',
        fontSize: 15,
    },
    input: {
        marginTop: 6,
        padding: '8px 10px',
        borderRadius: 4,
        border: '1px solid #cbd5e1',
        fontSize: 15,
    },
    textarea: {
        marginTop: 6,
        padding: '8px 10px',
        borderRadius: 4,
        border: '1px solid #cbd5e1',
        fontSize: 15,
        resize: 'vertical',
    },
    button: {
        marginTop: 8,
        padding: '10px 0',
        background: '#3182ce',
        color: '#fff',
        border: 'none',
        borderRadius: 4,
        fontWeight: 600,
        fontSize: 16,
        cursor: 'pointer',
        transition: 'background 0.2s',
    },
    success: {
        color: '#38a169',
        background: '#f0fff4',
        padding: 16,
        borderRadius: 6,
        textAlign: 'center',
        fontWeight: 500,
    },
};

export default ContactForm;
