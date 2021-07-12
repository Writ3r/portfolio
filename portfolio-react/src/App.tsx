import './assets/css/style.css';
import Navbar from './components/NavBar';
import Entry from './components/Entry';
import MainContents from './components/MainContents';
import Footer from './components/Footer';

function App() {
  return (
    <div>
        <Navbar />
        <Entry />
        <MainContents />
        <Footer />
    </div>
  );
}

export default App;
