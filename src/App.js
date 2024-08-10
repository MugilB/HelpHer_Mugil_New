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
import Mental from './components/Mental';
import Bapart from './components/Bapart';
import Room from './components/Room';
import Cyber from './components/Cyber';
import RoomsC from './components/RoomsC';
import CyberC from './components/CyberC';
import FitnessTips from './components/FitnessTips';
import Dashboard from './components/Dashboard';
import AdminDashboard from './components/AdminDashboard';
import AboutUs from './components/AboutUs';
import Delievery from './components/Delievery';
import DelieveryC from './components/DelieveryC';
import SosC from './components/SosC';
import AuthGuard from './components/AuthGuard';
import HomeNew from './components/HomeNew';
import Login from './components/Login';
import CreateAccount from './components/CreateAccount';
import Helps from './components/Helps';
import GoogleMaps from './components/GoogleMaps';
import Maps from './components/Maps';


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
    //<HomeNew/>
    //<Login/>
    //<CreateAccount/>
    // <Routes>    
    //   <Route path="/" element={<SignInSide/>}/>        
    //   <Route path="/signup" element={<SignUpSide />} />
    //   <Route path="/main" element={<Home/>} />
    //   <Route path="/service" element={<Services/>} />
    //   <Route path="/bike" element={<Map/>}/>
    //   <Route path="/MapC" element={<MapC/>}/>
    //   <Route path="/DelieveryC" element={<DelieveryC/>}/>
    //   <Route path="/BloodC" element={<BloodC/>}/>
    //   <Route path="/blood" element={<Blood/>}/>
    //   <Route path="/preg" element={<DoctorCard/>}/>
    //   <Route path="/mental" element={<Mental/>}/>
    //   <Route path="/food" element={<Delievery/>}/>
    //   <Route path="/Rooms" element={<Room/>}/>
    //   <Route path="/RoomsC" element={<RoomsC/>}/>
    //   <Route path="/about" element={<AboutUs/>}/>
    //   <Route path="/cyber" element={<Cyber/>}/>
    //   <Route path="/CyberC" element={<CyberC/>}/>
    //   <Route path="/fitness" element={<FitnessTips/>}/>
    //   <Route path="/profile" element={<SignInSide />} />      
    // </Routes>
    //<SosC/>
    //<AdminDashboard/>
    //<DoctorCard />
    //<Food/>
    // <Place/>
    // <MapC/>
    
    // <SignInSide/>
    // <Map/>
    
    <Routes>
      <Route path="/" element={<HomeNew/>}/>        
      <Route path="/dashboard" element={<Dashboard />} />      
      <Route path="/emergency" element={<SosC/>}/>
      <Route path="/login" element={<Login/>}/>        
      <Route path="/signup" element={<CreateAccount/>}/>     
      <Route path="/main" element={<Helps/>}/>     
      <Route path="/bike" element={<Map/>}/>
      <Route path="/MapC" element={<MapC/>}/>
      <Route path="/DelieveryC" element={<DelieveryC/>}/>
      <Route path="/BloodC" element={<BloodC/>}/>
      <Route path="/menstruals" element={<Blood/>}/>
      <Route path="/pregnancy" element={<DoctorCard/>}/>
      <Route path="/mental" element={<Mental/>}/>
      <Route path="/pick-drop" element={<Delievery/>}/>
      <Route path="/rooms" element={<Room/>}/>
      <Route path="/RoomsC" element={<RoomsC/>}/>      
      <Route path="/cyber-crime" element={<Cyber/>}/>
      <Route path="/CyberC" element={<CyberC/>}/>
      <Route path="/fitness" element={<FitnessTips/>}/>    
    </Routes>
    //<Maps/>
    //<GoogleMaps/>
    //<Helps/>
    
    
    
  );
}

export default App;
