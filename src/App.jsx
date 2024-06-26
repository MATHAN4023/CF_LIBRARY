import './App.css'
import MiniDrawer from './Component/Side-Bar/Minivariantdrawer'
import CF_Autocomplete from './Component/InputFields/CF_Autocomplete'
import { Routes, Route } from 'react-router-dom';
import PermanentDrawerLeft from './Component/Side-Bar/PermanentDrawerLeft';
import CardDesign1 from './Component/Card/CardDesign1'

function App() {

  return (
    <>
    {/* <CardDesign1/> */}
      <Routes>
        
        {/* Drawer */}
        <Route path="mini-drawer" element={<MiniDrawer />} />
        <Route path="/permanentLeftDrawer" element={<PermanentDrawerLeft />} />
        <Route path="/card-design" element={<CardDesign1 />} />

        {/* Input */}
        <Route path="/autocomplete" element={<CF_Autocomplete />} />

      </Routes>
    </>
  )
}

export default App
