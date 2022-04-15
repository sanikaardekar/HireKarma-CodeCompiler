import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Code from './screens/Code';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route exact path="/" element={<></>}/>
        <Route exact path="/code" element={<><Code/></>}/>
      </Routes>
      </Router>  
    
    </div>
  );
}

export default App;
