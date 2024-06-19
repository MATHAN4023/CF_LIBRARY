import './App.css'
import MiniDrawer from './Component/Side-Bar/Minivariantdrawer'
import CF_Autocomplete from './Component/InputFields/CF_Autocomplete'
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
    <Routes>
        <Route path="mini-drawer" element={<MiniDrawer />} />
        <Route path="/autocomplete" element={<CF_Autocomplete />} />
      </Routes>
    </>
  )
}

export default App
