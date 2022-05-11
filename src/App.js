import Home from './components/Home'
import GradeSummary from './components/GradeSummary'
import DeStress from './components/DeStress'
import SideNavigation from './components/SideNavigation'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
    <Router>
        <div>
            <SideNavigation />

            <Routes>
                <Route exact path='/' element={<Home />}/>
                <Route exact path='/mygrades' element={<GradeSummary />}/>
                <Route exact path='/motivation' element={<DeStress />}/>
            </Routes>

        </div>
    </Router>

    </>
  );
}

export default App;
