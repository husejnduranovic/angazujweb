import logo from './logo.svg';
import './App.css';
import { TUser } from './models/user/User';
import WelcomePage from './pages/WelcomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <div className="App">
      {/* <WelcomePage /> */}
      {/* <LoginPage /> */}
      <RegisterPage />
    </div>
  );
}

export default App;
