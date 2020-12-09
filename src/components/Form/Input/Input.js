import React from 'react';

import './Input.scss';

const Input = ({ label, type, name, value, onChange, error, onBlur }) => {
    return (
        <div className="input__wrapper">
            <label className="input__label" htmlFor={name}>
                {label}
            </label>
            <input
                className="input"
                id={name}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
            />
            {error && <p className="input__error">{ error }</p>}
        </div>
    )
}

export default Input;