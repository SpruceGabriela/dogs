import React from 'react';

import './Input.scss';

const Input = (props) => {
    return (
        <div className="input__wrapper">
            <label className="input__label">
                {props.label}
            </label>
            <input
                className="input"
                type={props.type}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
            />
            <p className="input__error">Erro</p>
        </div>
    )
}

export default Input;