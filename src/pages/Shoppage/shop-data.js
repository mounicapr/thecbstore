
import zoro from '../../gallery/zoro.jpeg';
import flowers from '../../gallery/flowers.png';
import heist from '../../gallery/heist.jpeg';
import calfour from '../../gallery/calfour.png';
import buddha from '../../gallery/buddha.png';
import flowertwo from '../../gallery/flowertwo.png';
import hpot from '../../gallery/hpot.png';

const ShopData = [
    {
      id: 1,
      title: 'anime',
      routeName: 'anime',
      items: [{
          id: 1,
          name: 'Roronoa Zoro',
          imageUrl: zoro,
          price: 25
        }]
    },
    {
      id: 2,
      title: 'calligraphy',
      routeName: 'calligraphy',
      items: [{
          id: 10,
          name: 'Calligraphy IV',
          imageUrl: calfour,
          price: 20
        }]
    },
    {
      id: 3,
      title: 'movies',
      routeName: 'movies',
      items: [{
          id: 18,
          name: 'Money Heist',
          imageUrl: heist,
          price: 25
        },
        {
          id: 19,
          name: 'Harry Potter',
          imageUrl: hpot,
          price: 30
        }]
    },
    {
      id: 4,
      title: 'nature',
      routeName: 'nature',
      items: [{
          id: 23,
          name: 'Flowers',
          imageUrl: flowers,
          price: 12
        },
        {
          id: 24,
          name: 'Flowers II',
          imageUrl: flowertwo,
          price: 14
        }]
    },
    {
      id: 5,
      title: 'poster',
      routeName: 'poster',
      items: [{
          id: 30,
          name: 'Buddha',
          imageUrl: buddha,
          price: 45
        }]
    }
  ];
  
  export default ShopData;
