import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Categories from './components/Categories';
import BookContainer from './components/BookContainer';

const App = () => (
  <section className="main-container">
    <Navbar />
    <Routes>
      <Route path="/" element={<BookContainer />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </section>
);

export default App;
