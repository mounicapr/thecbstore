import React from 'react';
import './custombutton.scss';

const CustomButton = ({children, ...OtherProps}) => (

    <button className='custom-button' {...OtherProps}>{children}</button>

)

export default CustomButton;