import React from 'react';
import ShopData from './shop-data'
import CollectionPreview from '../../components/Collectionpreview/collectionpreview'
class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: ShopData
        }
    }
    
    render(){
        const {collections}= this.state;
        return (<div className='shop-page'>
            {
                collections.map(({id, title, items}) => (
                    <CollectionPreview key={id} title={title} items={items} />
                ))
            }

        </div>)
    }
    
}

export default ShopPage;