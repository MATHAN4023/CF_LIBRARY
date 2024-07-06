import './App.css'
import MiniDrawer from './Component/Side-Bar/Minivariantdrawer'
import CF_Autocomplete from './Component/InputFields/CF_Autocomplete'
import { Routes, Route } from 'react-router-dom';
import PermanentDrawerLeft from './Component/Side-Bar/PermanentDrawerLeft';
import CardDesign1 from './Component/Card/CardDesign1'
import Minivariantdrawer from './Component/AppBar/Minivariantdrawer';
import EmployeeLogin from './Modules/EmployeeDashboard';
import EmployeeForm from './Modules/EmployeeForm';

function App() {

  return (
    <>
    {/* <CardDesign1/> */}
      <Minivariantdrawer />
      <Routes>
        {/* Drawer */}
        <Route path="/" element={"Running Properly"} />
        <Route path="mini-drawer" element={<MiniDrawer />} />
        <Route path="/permanentLeftDrawer" element={<PermanentDrawerLeft />} />
        {/* <Route path="/Minivariantdrawer" element={<Minivariantdrawer />} /> */}

        {/* Input */}
        <Route path="/autocomplete" element={<CF_Autocomplete />} />

        {/* Cards */}
        <Route path="/card-design" element={<CardDesign1 />} />

        {/* Modules */}
        <Route path="/Hr-Module" element={<EmployeeLogin />} />
        <Route path="/Onboarding" element={<EmployeeForm />} />

      </Routes>
    </>
  )
}

export default App
