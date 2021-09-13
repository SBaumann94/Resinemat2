import React, { useState } from 'react';
import { send } from 'emailjs-com';

import { init } from 'emailjs-com';
import { useToasts } from 'react-toast-notifications';
import { Checkbox } from 'rsuite';
init("user_vWwpn7tP6mGw5lnTCrElp");

const initialState = {
    from_name: '',
    from_email: '',
    message: '',
    subject: '',
    cb_email: false,
}
function EmailForm() {
    const [toSend, setToSend] = useState(initialState);
    const { addToast } = useToasts();

    const onSubmit = (e) => {
        e.preventDefault();
        if (toSend.from_name === "") {
            addToast('Adja meg a nevét!', { appearance: 'error' });
        } 
        else if (!(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(toSend.from_email))) {
            addToast('Érvénytelen e-mail cím.', { appearance: 'error' });
        }
        else if (toSend.message === "") {
            addToast('Töltse ki az üzenet mezőt!', { appearance: 'error' });
        }
        else if (toSend.cb_email === false ){
            addToast('Az üzenetküldéshez el kell fogadni az Általános szerződési feltételeket.', { appearance: 'error' });
        }                
        else {
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
        }
    };
    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    const handleCBChange = (e) => {
        setToSend({ ...toSend, cb_email: !toSend.cb_email });
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
                <br />
                <input
                    type='text'
                    name='from_email'
                    placeholder='E-mail cím'
                    value={toSend.from_email}
                    onChange={handleChange}
                />
                <br />
                <input
                    type='text'
                    name='subject'
                    placeholder='Tárgy'
                    value={toSend.subject}
                    onChange={handleChange}
                />
                <br />
                <textarea
                    name='message'
                    placeholder='Üzenet'
                    className='email_text'
                    value={toSend.message}
                    onChange={handleChange}
                />
                <br />
                    <Checkbox
                        className='cb_email'
                        id='cb_email'
                        name='cb_email'
                        defaultChecked='false'
                        onChange={handleCBChange}
                    >Elfogadom az <a href="https://www.w3schools.com">Általános szerződési feltételeket</a></Checkbox>
                <br />
                <button className='btn bg-secondary'type='submit' >Küldés</button>
            </form>
        </div>
    );
}
export default EmailForm;