import { useState } from 'react'; // mitte midagi ees, lihtsalt sõna   tähendab node_modules'st
import Map from '../components/Map'; // ./ või on ../   see tähendab meie tehtud faili
import Button from '@mui/material/Button';

function Shops() {
  const [coordinaates, setCoordinates] = useState({lngLat: [59.4378, 24.7574], zoom: 11});

  return (<div className="shops">
    <Button onClick={() => setCoordinates({lngLat: [58.9655, 25.4072], zoom: 7})}>Kõik poed</Button>
    <Button onClick={() => setCoordinates({lngLat: [59.4378, 24.7574], zoom: 11})}>Kõik Tallinna poed</Button>
    <Button onClick={() => setCoordinates({lngLat: [59.4231, 24.7991], zoom: 13})}>Ülemiste</Button>
    <Button onClick={() => setCoordinates({lngLat: [59.4277, 24.7193], zoom: 13})}>Kristiine</Button>
    <Button onClick={() => setCoordinates({lngLat: [58.3779, 26.7306], zoom: 13})}>Tasku</Button>
    <Map mapCoordinaates={coordinaates}  />
  </div>)
}

export default Shops;