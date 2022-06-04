import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Categories from './components/Categories';
import BookContainer from './components/BookContainer';

const App = () => (
  <div className="app">
    <Navbar />
    <Routes>
      <Route path="/" element={<BookContainer />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </div>
);

export default App;
