import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import JobsPage from './pages/JobsPage';
import JobPage from "./pages/JobPage";
import ProtectedRoutes from './utils/ProtectedRoute';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<WelcomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route element={<ProtectedRoutes />}>
            <Route path='/jobs' element={<JobsPage />} />
            <Route path='/jobs/:id' element={<JobPage />} />
          </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
