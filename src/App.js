import Header from './components/Header';
import AddSearch from './components/AddSearch';
import Note from './components/Note';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="container">
      <Header />
      <AddSearch />
      <Note />

      <Footer />
    </div>
  );
}

export default App;
