import React from 'react';
import {withRouter} from 'react-router-dom';
import './menu-item.scss';

const MenuItem = ({title, imageUrl, size, linkUrl, history, match}) => (
    <div className={`menu-item ${size}`} onClick = {() => history.push(`${match.url}${linkUrl}`)}>
    <div className="background" style={{backgroundImage:`url(${imageUrl})`}}/>
    <div className="content">
        <h2 className="title">{title.toUpperCase()}</h2>
        <p className="subtitle">SHOP NOW</p>
    </div>
    </div>
);

export default withRouter(MenuItem);