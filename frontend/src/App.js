import Home from './components/Home'
import GradeSummary from './components/GradeSummary'
import DeStress from './components/DeStress'
import SideNavigation from './components/SideNavigation'
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {

  return (
    <>
    <Router>
        <div>
            <SideNavigation />

            <Routes>
                <Route exact path='/Weighted-Average-Calculator' element={<Navigate to="/" />} />
                <Route exact path='/' element={<Home />}/>
                <Route exact path='/login' element={<Login />}/>
                <Route exact path='/register' element={<Register />}/>
                <Route exact path='/mygrades' element={<GradeSummary />}/>
                <Route exact path='/motivation' element={<DeStress />}/>
            </Routes>

        </div>
    </Router>

    </>
  );
}

export default App;
