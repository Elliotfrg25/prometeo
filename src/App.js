
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import ForgotPassword from './components/ForgotPassword';
import { AuthProvider } from './components/AuthContext';
import MoneyTransfer from './components/MoneyTransfer';
import TransactionHistory from './components/TransactionHistory';


function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/transfer" element={<MoneyTransfer />} />
          <Route path="/history" element={<TransactionHistory />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;


