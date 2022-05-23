import Home from './components/Home'
import GradeSummary from './components/GradeSummary'
import DeStress from './components/DeStress'
import SideNavigation from './components/SideNavigation'
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {register, reset} from './features/auth/authSlice'


function App() {

  return (
    <>
    <Router>
        <div>
            <SideNavigation />

            <Routes>
                <Route exact path='/' element={<Home />}/>
                <Route exact path='/login' element={<Login />}/>
                <Route exact path='/register' element={<Register />}/>
                <Route exact path='/mygrades' element={<GradeSummary />}/>
                <Route exact path='/motivation' element={<DeStress />}/>
            </Routes>

        </div>
    </Router>
    <ToastContainer />

    </>
  );
}

export default App;
