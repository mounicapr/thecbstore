import React from 'react';
import './collectionpreview.scss';
import '../Collectionitem/collectionitem'
import CollectionItem from '../Collectionitem/collectionitem';

const CollectionPreview = ({title, items}) => (
    <div className='collection'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {items
            .filter((item, index)=> index < 1)
            .map(({id, name, price, imageUrl}) => (
            <CollectionItem key={id} name={name} price={price} imageUrl={imageUrl} />))}
        </div>
    </div>
);
export default CollectionPreview;