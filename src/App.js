import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header/Header';
import Login from './component/Login/Login';
import Shop from './component/Shop/Shop';
import SignUp from './component/SignUp/SignUp';
import SignOut from './component/SignUp/SignUp';

function App() {
  return (
    <div>
      <Header></Header>

      <Routes>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signUp' element={<SignUp></SignUp>}></Route>
      </Routes>
    </div>
  );
}

export default App;
