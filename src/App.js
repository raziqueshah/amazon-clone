import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import Home from './pages/Home';
import Header from './components/Header';
// import Login from './pages/Login/Login';
// import Register from './pages/Register/Register';
import { useDispatch } from 'react-redux';
import { useEffect, lazy, Suspense } from 'react';
import { auth } from './utils/firebase';
import { setuser } from './redux/actions';
// import SingleProduct from './pages/SingleProduct/SingleProduct';
// import Checkout from './pages/Checkout/Checkout';
// import Payment from './pages/Payment/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Loading from './components/Loading/Loading';
// import Orders from './pages/Orders/Orders';


const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login/Login"));
const Register = lazy(() => import("./pages/Register/Register"));
const Checkout = lazy(() => import("./pages/Checkout/Checkout"));
const Payment = lazy(() => import("./pages/Payment/Payment"));
const Orders = lazy(() => import("./pages/Orders/Orders"));
const SingleProduct = lazy(() => import("./pages/SingleProduct/SingleProduct"));

const promise = loadStripe("pk_test_51LBhZNSFFnU8dnSRyjurfaYWtOMumqyKQk6Ag6qVtVPOXQomkAbGcCdRrD1fbTSwQJtWOiamec21Opwjm4fWeJfB00f8wVg35h");


function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch(setuser(authUser));
      } else{
        dispatch(setuser(null));
      }
    })
  },[dispatch]);

  return (
  <div className="App">
    <BrowserRouter>
    <Suspense fallback={<Loading />}>
    <Routes>
      <Route path='/' element={<><Header /><Home /></>} />
      <Route path='/product/:id' element={<><Header /><SingleProduct /></>} />
      <Route path='/checkout' element={<><Header /><Checkout /></>} />
      {/* <Route path='/payment' element={<><Header /><Payment /></>} /> */}
      <Route path='/payment' element={<><Header /><Elements stripe={promise}><Payment /></Elements></>} />
      <Route path='/orders' element={<><Header /><Orders /></>} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
    </Routes>
     </Suspense>
    </BrowserRouter>
  </div>
  );
}

export default App;
