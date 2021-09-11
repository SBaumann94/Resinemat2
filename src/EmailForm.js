

import React, { useState, useEffect } from 'react';
import { send } from 'emailjs-com';

import { init } from 'emailjs-com';
import { useToasts } from 'react-toast-notifications';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
init("user_vWwpn7tP6mGw5lnTCrElp");

const initialState = {
    from_name: '',
    from_email: '',
    message: '',
    subject: ''
}

function EmailForm() {
    const [toSend, setToSend] = useState(initialState);

    const { addToast } = useToasts();
    const onSubmit = (e) => {
        e.preventDefault();
        send(
            'service_8lgdfio',
            'template_lq9xk9u',
            toSend,
            'user_vWwpn7tP6mGw5lnTCrElp'
        )
            .then((response) => {
                console.log('Siker!', response.status, response.text);
                addToast('E-mail elküldve', { appearance: 'success' });
            })
            .catch((err) => {
                console.log('Hiba...', err);
                addToast(err.message, { appearance: 'error' });
            })
        clearState();
    };
    
    const [captcha,setcaptcha] = useState(false);
    useEffect(() =>{
        function handleCaptchaChange(status) {
            setcaptcha(status.captcha);
    }})
    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    const clearState = () => {
        setToSend({ ...initialState });
    };
    return (
        <div className="email-form">
            <form onSubmit={onSubmit}>
                <input
                    type='text'
                    name='from_name'
                    placeholder='Név'
                    value={toSend.from_name}
                    onChange={handleChange}
                    width='30%'
                />
                <input
                    type='text'
                    name='from_email'
                    placeholder='E-mail cím'
                    value={toSend.from_email}
                    onChange={handleChange}
                />
                <input
                    type='text'
                    name='subject'
                    placeholder='Tárgy'
                    value={toSend.subject}
                    onChange={handleChange}
                />

                <input
                    type='text'
                    name='message'
                    placeholder='Üzenet'
                    value={toSend.message}
                    onChange={handleChange}
                />
                <button type='submit'>Submit</button>
                <LoadCanvasTemplate />
            </form>
        </div>
    );
}

export default EmailForm;