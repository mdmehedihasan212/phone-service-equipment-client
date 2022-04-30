import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import AddNewItem from './Pages/Home/AddNewItem/AddNewItem';
import Home from './Pages/Home/Home/Home';
import ManageInventory from './Pages/Home/ManageInventory/ManageInventory';
import InventoryUpdate from './Pages/InventoryUpdate/InventoryUpdate';
import LogIn from './Pages/Register/LogIn/LogIn';
import SignUp from './Pages/Register/SignUp/SignUp';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/inventoryUpdate' element={
          <RequireAuth>
            <InventoryUpdate></InventoryUpdate>
          </RequireAuth>
        }></Route>
        <Route path='/inventoryUpdate/:id' element={
          <RequireAuth>
            <InventoryUpdate></InventoryUpdate>
          </RequireAuth>
        }></Route>
        <Route path='/manageInventory' element={
          <RequireAuth>
            <ManageInventory></ManageInventory>
          </RequireAuth>
        }></Route>
        <Route path='/addNewItem' element={
          <RequireAuth>
            <AddNewItem></AddNewItem>
          </RequireAuth>
        }></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/login' element={<LogIn></LogIn>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
