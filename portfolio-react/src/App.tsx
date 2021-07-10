import './assets/css/style.css';
import TopNavigation from './components/NavBar';
import MainCarousel from './components/MainCarousel';
import MainContents from './components/MainContents';
import Footer from './components/Footer';

function App() {
  return (
    <div>
        <TopNavigation />
        <MainCarousel />
        <MainContents />
        <Footer />
    </div>
  );
}

export default App;
