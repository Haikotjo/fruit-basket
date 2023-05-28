import React, { useState } from 'react';
import './form.css';

function Form({ onSubmit }) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [postcode, setPostcode] = useState('');
    const [deliveryFrequency, setDeliveryFrequency] = useState('');
    const [deliveryTime, setDeliveryTime] = useState('');
    const [comments, setComments] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({ firstName, lastName, age, postcode, deliveryFrequency, deliveryTime, comments, termsAccepted });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Voornaam' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            <input type='text' placeholder='Achternaam' value={lastName} onChange={(e) => setLastName(e.target.value)} />
            <input type='number' placeholder='Leeftijd' value={age} onChange={(e) => setAge(e.target.value)} />
            <input type='text' placeholder='Postcode' value={postcode} onChange={(e) => setPostcode(e.target.value)} />
            <select value={deliveryFrequency} onChange={(e) => setDeliveryFrequency(e.target.value)}>
                <option value=''>Bezorgfrequentie</option>
                <option value='iedere week'>Iedere week</option>
                <option value='om de week'>Om de week</option>
                <option value='iedere maand'>Iedere maand</option>
            </select>
            <div>
                <label>
                    <input type='radio' value='overdag' checked={deliveryTime === 'overdag'} onChange={(e) => setDeliveryTime(e.target.value)} />
                    Overdag
                </label>
                <label>
                    <input type='radio' value='s avonds' checked={deliveryTime === 's avonds'} onChange={(e) => setDeliveryTime(e.target.value)} />
                    's Avonds
                </label>
            </div>
            <textarea placeholder='Opmerking' value={comments} onChange={(e) => setComments(e.target.value)} />
            <label>
                <input type='checkbox' checked={termsAccepted} onChange={(e) => setTermsAccepted(e.target.checked)} />
                Akkoord met de voorwaarden
            </label>
            <button type='submit'>Verzend</button>
        </form>
    );
}

export default Form;
