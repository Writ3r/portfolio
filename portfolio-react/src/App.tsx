import './assets/css/style.css';
import TopNavigation from './components/NavBar';
import MainCarousel from './components/MainCarousel';
import MainContents from './components/MainContents';

function App() {
  return (
    <div>
        <TopNavigation />
        <MainCarousel />
        <MainContents />
    </div>
  );
}

export default App;
