import './assets/css/style.css';
import Navbar from './components/NavBar';
import Entry from './components/Entry';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div>
        <Navbar />
        <Entry />
        <Main />
        <Footer />
    </div>
  );
}

export default App;
