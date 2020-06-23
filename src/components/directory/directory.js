import React from 'react';
import './directory.scss';
import MenuItem from '../menu-item/menu-item'
import zoro from '../../gallery/zoro.jpeg';
import flowers from '../../gallery/flowers.png';
import heist from '../../gallery/heist.jpeg';
import calfour from '../../gallery/calfour.png';
import buddha from '../../gallery/buddha.png'


class Directory extends React.Component {
    constructor() {
        super();
        this.state = {
            sections: [{
                title: "anime",
                imageUrl: zoro,
                id: 1
            },
            {
                title: "calligraphy",
                imageUrl: calfour,
                id: 2
            },
            {
                title: "movies",
                imageUrl: heist,
                id: 3
            },
            {
                title: "nature",
                imageUrl: flowers,
                id: 4,
                size: "large"
            },
            {
                title: "poster",
                imageUrl: buddha,
                id: 5,
                size: "large"
            },
            ]
        }
    }
    render() {
        return (
            <div className="directory-menu">
               {this.state.sections.map(({title, imageUrl, id, size}) => (
                   <MenuItem  key={id} title={title} imageUrl={imageUrl} size={size} />
               ))} 
            </div>
        )
    }
}
export default Directory;