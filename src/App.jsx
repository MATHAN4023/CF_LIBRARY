import './App.css'
import MiniDrawer from './Component/Side-Bar/Minivariantdrawer'
import CF_Autocomplete from './Component/InputFields/CF_Autocomplete'
import { Routes, Route } from 'react-router-dom';
import PermanentDrawerLeft from './Component/Side-Bar/PermanentDrawerLeft';

function App() {

  return (
    <>
      <Routes>
        
        {/* Drawer */}
        <Route path="mini-drawer" element={<MiniDrawer />} />
        <Route path="/permanentLeftDrawer" element={<PermanentDrawerLeft />} />

        {/* Input */}
        <Route path="/autocomplete" element={<CF_Autocomplete />} />

      </Routes>
    </>
  )
}

export default App
