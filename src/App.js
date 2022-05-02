import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Blogs from './Pages/Blogs/Blogs';
import AddNewItem from './Pages/Home/AddNewItem/AddNewItem';
import Home from './Pages/Home/Home/Home';
import ManageInventory from './Pages/Home/ManageInventory/ManageInventory';
import MyItems from './Pages/Home/MyItems/MyItems';
import InventoryUpdate from './Pages/InventoryUpdate/InventoryUpdate';
import NotFound from './Pages/NotFound/NotFound';
import LogIn from './Pages/Register/LogIn/LogIn';
import SignUp from './Pages/Register/SignUp/SignUp';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        <Route path='/myItems' element={
          <RequireAuth>
            <MyItems></MyItems>
          </RequireAuth>
        }></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/login' element={<LogIn></LogIn>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
