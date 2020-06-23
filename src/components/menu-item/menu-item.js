import React from 'react';
import './menu-item.scss';

const MenuItem = ({title, imageUrl, size}) => (
    <div className={`menu-item ${size}`} >
    <div className="background" style={{backgroundImage:`url(${imageUrl})`}}/>
    <div className="content">
        <h2 className="title">{title.toUpperCase()}</h2>
        <p className="subtitle">SHOP NOW</p>
    </div>
    </div>
);

export default MenuItem;