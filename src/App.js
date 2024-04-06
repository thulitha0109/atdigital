import {BrowserRouter} from 'react-router-dom'
import { Navbar, Footer } from './components';
import { HeroSection, MidSection } from './sections';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-white">
        <div>
          <Navbar />
          <HeroSection />
          <MidSection />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
