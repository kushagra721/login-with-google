import logo from './logo.svg';
import './App.css';
import LoginPage from './components/LoginPage';
import {
  BrowserRouter as Router,
  Routes,
  Route,} from "react-router-dom";
import ApiData from './components/ApiData';

function App() {
  return (
   <>
   <Router>

    
    

  
   <Routes>
   <Route exact path="/" element={<LoginPage/>}></Route>
   <Route exact path="/userData" element={<ApiData/>}></Route>
   </Routes>

   </Router>






   </>
  );
}

export default App;
