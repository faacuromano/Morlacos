import React, {useState} from 'react';
import uuid from 'react-uuid';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavbarJs from './Components/NavBar/NavBar';
import CarouselJs from './Components/Carousel/CarouselJs';
import ContainerArtWorks from './Components/ArWorks/ContainerArtWorks';
import Contact from './Components/Contact/Contact';

const DUMMY_ARTS = [
  {
    id: Math.floor(Math.random() * 99),
    title: "Las dos torres",
    img:"https://picsum.photos/1586/627"
  },
  {
    id: Math.floor(Math.random() * 99),
    title: "Las dos torres",
    img:"https://assets.objkt.media/file/assets-003/KT1U6EHmNxJTkvaWJ4ThczG4FSDaHC21ssvi/1280629/thumb288"
  },
  {
    id: Math.floor(Math.random() * 99),
    title: "Las dos torres",
    img:"https://assets.objkt.media/file/assets-003/QmXwSjEVfS1YzurQ651nYujxoyqUMtMZbNUFdgCMk27JvZ/artifact"
  },
  {
    id: Math.floor(Math.random() * 99),
    title: "GREEN HUSTLE",
    img:"https://assets.objkt.media/file/assets-003/QmPAcC9986Qv9JaLN43Bq1kxtRQoA16hTnrvKrXYggi4yw/artifact"
  },
  {
    id: Math.floor(Math.random() * 99),
    title: "PURPLE DRINKS ",
    img:"https://assets.objkt.media/file/assets-003/QmYbJwBQwYKMTcdg4LtmxyoLC5qFauomaAtBvgz9oZ54Pp/artifact"
  },
  {
    id: Math.floor(Math.random() * 99),
    title: "Las dos torres",
    img:"https://ipfs.io/ipfs/QmZveTYLo9H1Y829gK4AAQQddoqaYEw1uFucCBFx8M4TB8"
  },
  {
    id: Math.floor(Math.random() * 99),
    title: "Las dos torres",
    img:"https://ipfs.io/ipfs/QmZveTYLo9H1Y829gK4AAQQddoqaYEw1uFucCBFx8M4TB8"
  },
  {
    id: Math.floor(Math.random() * 99),
    title: "Las dos torres",
    img:"https://ipfs.io/ipfs/QmZveTYLo9H1Y829gK4AAQQddoqaYEw1uFucCBFx8M4TB8"
  },
  {
    id: Math.floor(Math.random() * 99),
    title: "Las dos torres",
    img:"https://ipfs.io/ipfs/QmZveTYLo9H1Y829gK4AAQQddoqaYEw1uFucCBFx8M4TB8"
  },
  {
    id: Math.floor(Math.random() * 99),
    title: "Las dos torres",
    img:"https://ipfs.io/ipfs/QmZveTYLo9H1Y829gK4AAQQddoqaYEw1uFucCBFx8M4TB8"
  },
];

const App = () => {
  const [artworks, setArtWorks] = useState(DUMMY_ARTS);
  return (
    <div className='root'>
      
      <NavbarJs/>
      <CarouselJs/>
      <ContainerArtWorks artworks={artworks}/>
      <Contact/>
      

    </div>
  );
}

export default App;
