import { Routes, Route } from 'react-router-dom'
import Header from './routes/header/header.component'
import './App.css'
import LandingPage from './routes/landing-page/landing-page.component';
import './App.css';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Header />}>
        <Route index element={<LandingPage />} />
      </Route>
    </Routes>
  );
}

export default App;
