import { Home } from './pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import { Header } from './shared/Header/Header';
import { Popup } from './shared/Popup/Popup';

function App() {
  return (
    <div className="global-container">
      {/* <Popup /> */}
      <div className="container">
        {/* <Header onCityChange={function (city: string): void {
          throw new Error('Function not implemented.');
        } } /> */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}


export default App;
