import { Home } from './pages/Home/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="global-container">
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
