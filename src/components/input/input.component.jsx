import React from 'react'

import './input.styles.scss'

const Input = ({ handleChange, label, ...otherProps}) => (

    <div className='group'>
        <input 
        className='form-input' 
        onChange={handleChange} 
        {...otherProps} />
        { label ?
            (<label className='shrink form-input-label'>
                {label}
            </label>)
            : null
        }
    </div>
)
export default Input