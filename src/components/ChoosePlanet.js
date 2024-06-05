import '../App.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function makeRadioButton(value, label, getter, setter) {
    return (
        <label className='d-flex flex-column m-4'>
            {label}
            <input className='mt-4' type='radio' value={value} checked={value === getter} onClick={() => setter(value)} />
        </label>
    )
}

function ChoosePlanet() {
    const navigate = useNavigate()
    const [planet, setPlanet] = useState('')

    return (
    <div className="start-screen d-flex flex-column align-items-center justify-content-start mt-4">
        <p className="mb-4">
            Now, please choose the planet you would like to fight on...
        </p>
        <form className='d-flex flex-column justify-content-center align-items-center mt-4'>
            <div className='d-flex'>
                {makeRadioButton('mercury', 'Mercury', planet, setPlanet)}
                {makeRadioButton('venus', 'Venus', planet, setPlanet)}
                {makeRadioButton('mars', 'Mars', planet, setPlanet)}
                {makeRadioButton('jupiter', 'Jupiter', planet, setPlanet)}
                {makeRadioButton('saturn', 'Saturn', planet, setPlanet)}
                {makeRadioButton('neptune', 'Neptune', planet, setPlanet)}
                {makeRadioButton('pluto', 'Pluto', planet, setPlanet)}
            </div>
            <input className='mt-3 btn btn-secondary w-25' type='submit' onClick={() => navigate('/choose-fighter')} value='Continue...' />
        </form>
    </div>
    );
}

export default ChoosePlanet;
