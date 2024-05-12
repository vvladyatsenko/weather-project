import { Home } from './pages/Home/components/Home';
import { MonthStat } from './pages/MonthStat/components/MonthStat';
import { Route, Routes } from 'react-router-dom';
import { Header } from './shared/Header/Header';

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/month-stat" element={<MonthStat />} />
      </Routes>
    </div>
  );
}

export default App;
