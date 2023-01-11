import './App.css';
import {Routes, Route} from "react-router-dom";
import Phones from "./pages/Phones";
import DisplayPhone from './pages/DisplayPhone';

function App() {
  return (
    <div className="App">
<Routes>
<Route path='/' element={<Phones/>}/>
<Route path='/:phoneId' element={<DisplayPhone/>}/>
</Routes>
    </div>
  );
}

export default App;
