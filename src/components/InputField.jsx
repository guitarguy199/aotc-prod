/* eslint-disable react/prop-types */
import React from 'react';
import './InputField.css';

const InputField = (props) => {

    const validateInput = (values) => {
        if (values.some(f => f === '') || values[0].indexOf("@") === -1) {
            return true
        } else {
            return false
        }
    }

    if (props.type === "submit") {
        return (
                <input
                    className='button-primary'
                    type='submit'
                    value={props.label}
                    disabled={validateInput(props.formValues)}
                />
        )
    } else if (props.type === 'textarea') {
        return (
            <div className='inputfield textarea'>
                <label className='inputfield-label'>
                    {props.label}
                    </label>
                    <textarea
                        onChange={(e) => props.onChangeHandler(e.target.value)}
                        placeholder={props.placeholder}
                        value={props.value}
                        required={props.isRequired}
                        className= 'inputfield-field textarea'
                        rows={12}
                        name={props.name}
                        />
            </div>
        )
    } else {
        return (
        <div className='inputfield'>
            <label className='inputfield-label'>
                {props.label}
                </label>
                <input
                    onChange={(e) => props.onChangeHandler(e.target.value)}
                    type={props.type}
                    placeholder={props.placeholder}
                    value={props.value}
                    required={props.isRequired}
                    className='inputfield-field'
                    name={props.name}
                />
        </div>
        )
    }
}

export default React.memo(InputField);