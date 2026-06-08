import { HashRouter as BrowserRouter, Routes, Route } from 'react-router-dom';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';
import Home from './pages/Home';
import Services from './pages/Services';
import Works from './pages/Works';
import About from './pages/About';
import Contacts from './pages/Contacts';

export default function App() {
  return (
    <BrowserRouter>
      {/* Global overlays */}
      <div className="grid-bg" />
      <div className="scanlines" />
      <div className="noise-overlay" />
      <CustomCursor />

      {/* Layout */}
      <Navbar />

      <PageTransition>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/works" element={<Works />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </PageTransition>

      <Footer />
    </BrowserRouter>
  );
}

function NotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '24px',
      paddingTop: '100px',
    }}>
      <div style={{
        fontFamily: 'Orbitron, sans-serif',
        fontSize: 'clamp(80px, 15vw, 150px)',
        fontWeight: 900,
        color: '#FFD700',
        textShadow: '0 0 40px rgba(255,215,0,0.4)',
        lineHeight: 1,
        marginBottom: '16px',
      }}>
        404
      </div>
      <div style={{
        fontFamily: 'Share Tech Mono, monospace',
        fontSize: '14px',
        color: '#FF00FF',
        textShadow: '0 0 10px #FF00FF',
        letterSpacing: '4px',
        marginBottom: '32px',
      }}>
        &gt; PAGE_NOT_FOUND :: ERROR
      </div>
      <p style={{
        fontFamily: 'Rajdhani, sans-serif',
        color: 'rgba(224,224,224,0.5)',
        fontSize: '16px',
        marginBottom: '32px',
      }}>
        Страница не найдена в базе данных
      </p>
      <a href="/" className="btn-cyber">
        Вернуться на главную
      </a>
    </div>
  );
}
