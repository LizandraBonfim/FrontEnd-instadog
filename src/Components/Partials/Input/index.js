import React from 'react';
import Error from '../../Error';
import { ContentInput } from '../styles';


function Input({ label, type, name, value, onChange, error, onBlur }) {
    return (
        <ContentInput>

            <label htmlFor={name}>

                {label}
                <input
                    type={type}
                    value={value}
                    name={name}
                    id={name}
                    onChange={onChange}
                    onBlur={onBlur}
                />
            </label>


            <Error error={error}>{error}</Error>
        </ContentInput>
    )
}

export default Input
