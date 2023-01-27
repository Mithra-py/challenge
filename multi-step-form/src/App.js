import './App.css';
import { Routes, Route } from 'react-router-dom';
import SideBar from './component/SideBar';
import PersonalInfo from './pages/PersonalInfo';
import SelectPlan from './pages/SelectPlan';
import AddOns from './pages/AddOns';
import Finishing from './pages/Finishing';

function App() {
  return (
    <div className='sideBarAndPages'>
      <SideBar />
      <Routes>
        <Route path='/' element={<PersonalInfo />} />
        <Route path='SelectPlan' element={<SelectPlan/>} />
        <Route path='AddOns' element={<AddOns/>} />
        <Route path='Finishing' element={<Finishing />} />
      </Routes>
    </div>

  );
}

export default App;
