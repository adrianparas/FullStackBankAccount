import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateAccountComponent from './components/CreateAccountComponent';
import ListAccountComponent from './components/ListAccountComponent';
import AccountPageComponent from './components/AccountPageComponent';
import DepositComponent from './components/DepositComponent';
import WithdrawComponent from './components/WithdrawComponent';
import CalculateInterestComponent from './components/CalculateInterestComponent';
import DisplatInterestComponent from './components/DisplayInterestComponent';

function App() {
  return (
    <div>
      <Router>
        <div className='container'>
          <Routes>
            <Route path='/accounts' element={<ListAccountComponent />} />
            <Route path='/add-account/:id' element={<CreateAccountComponent />} />
            <Route path='/access-account/:id' element={<AccountPageComponent />} />
            <Route path='/deposit/:id' element={<DepositComponent />} />
            <Route path='/withdraw/:id' element={<WithdrawComponent />} />
            <Route path='/interestRate/:id' element={<CalculateInterestComponent />} />
            <Route path='/display-interest/:id/:interest/:period' element={<DisplatInterestComponent />} />
          </Routes>
        </div>
        
      </Router>
    </div>
  );
}

export default App;
