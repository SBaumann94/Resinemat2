

import { useState } from 'react';
import { send } from 'emailjs-com';

import { init } from 'emailjs-com';
init("user_vWwpn7tP6mGw5lnTCrElp");

function EmailForm() {
    const [toSend, setToSend] = useState({
        from_name: '',
        from_email: '',
        message: '',
        subject: '',
    });

    const onSubmit = (e) => {
        e.preventDefault();
        send(
            'service_8lgdfio',
            'template_lq9xk9u',
            toSend,
            'user_vWwpn7tP6mGw5lnTCrElp'
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            })
            .catch((err) => {
                console.log('FAILED...', err);
            })
        setToSend({ ...toSend, subject: '' });
        setToSend({ ...toSend, from_name: '' });
        setToSend({ ...toSend, from_email: '' });
        setToSend({ ...toSend, message: '' });
    };

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    return (
        <div className="App">
            <form onSubmit={onSubmit}>
                <input
                    type='text'
                    name='from_name'
                    placeholder='from name'
                    value={toSend.from_name}
                    onChange={handleChange}
                />
                <input
                    type='text'
                    name='from_email'
                    placeholder='from email'
                    value={toSend.from_email}
                    onChange={handleChange}
                />
                <input
                    type='text'
                    name='subject'
                    placeholder='subject'
                    value={toSend.subject}
                    onChange={handleChange}
                />

                <input
                    type='text'
                    name='message'
                    placeholder='Your message'
                    value={toSend.message}
                    onChange={handleChange}
                />
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
}

export default EmailForm;