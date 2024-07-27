import logo from './logo.svg';
import './App.css';
import { Button } from '@mui/material';
import SignInSide from './components/SignInSide';
import SignUpSide from './components/SignUpSide';
import Home from './components/Home';
import Services from './components/Services';
import { Route, Routes } from 'react-router-dom';
import Map from './components/Map';
import MyApp from './components/MyApp';
import MapContainer from './components/MapContainer';
import Demo from './components/Demo';
import Place from './components/Place';
import MapC from './components/MapC';
import Food from './components/Food';
import Blood from './components/Blood';
import BloodC from './components/BloodC';
import DoctorCard from './components/DoctorCard';


const doctor = {
  image: 'https://via.placeholder.com/64',
  name: 'Dr. Jane Smith',
  phone: '+1 (987) 654-3210',
  location: '456 Elm St, Othertown, USA',
  email: 'janesmith@example.com',
  whatsapp: '+1 (987) 654-3210',
};

function App() {
  return (
    <Routes>    
      <Route path="/" element={<SignInSide />} />
      <Route path="/signup" element={<SignUpSide />} />
      <Route path="/main" element={<Home/>} />
      <Route path="/service" element={<Services/>} />
      <Route path="/bike" element={<Map/>}/>
      <Route path="/MapC" element={<MapC/>}/>
      <Route path="/BloodC" element={<BloodC/>}/>
      <Route path="/blood" element={<Blood/>}/>
      <Route path="/preg" element={<DoctorCard/>}/>
    </Routes>
    //<DoctorCard />
    //<Food/>
    // <Place/>
    // <MapC/>

    // <SignInSide/>
    // <Map/>
    
    
      
  );
}

export default App;
