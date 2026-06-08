import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NAV_LINKS = [
  { path: '/', label: 'Главная', code: '01' },
  { path: '/services', label: 'Услуги', code: '02' },
  { path: '/works', label: 'Работы', code: '03' },
  { path: '/about', label: 'О нас', code: '04' },
  { path: '/contacts', label: 'Контакты', code: '05' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav className="navbar" style={{
        boxShadow: scrolled ? '0 4px 30px rgba(0,255,255,0.08)' : 'none',
        transition: 'box-shadow 0.3s ease',
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 24px',
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          {/* Logo */}
          <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
            {/* SVG Logo Icon */}
            <div style={{ position: 'relative', width: 36, height: 36 }}>
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
                <polygon points="20,2 38,12 38,28 20,38 2,28 2,12" stroke="#00FFFF" strokeWidth="1.5" fill="none"
                  style={{ filter: 'drop-shadow(0 0 4px #00FFFF)' }} />
                <polygon points="20,8 32,15 32,25 20,32 8,25 8,15" stroke="#FFD700" strokeWidth="1" fill="none"
                  style={{ filter: 'drop-shadow(0 0 4px #FFD700)', opacity: 0.7 }} />
                <text x="20" y="24" textAnchor="middle" fill="#FFD700"
                  style={{ fontFamily: 'Orbitron', fontSize: '10px', fontWeight: 700, filter: 'drop-shadow(0 0 4px #FFD700)' }}>
                  SC
                </text>
              </svg>
            </div>
            <div>
              <div style={{
                fontFamily: 'Orbitron, sans-serif',
                fontWeight: 900,
                fontSize: '16px',
                letterSpacing: '3px',
                color: '#FFD700',
                textShadow: '0 0 10px rgba(255,215,0,0.5)',
                lineHeight: 1,
              }}>
                STEMI<span style={{ color: '#00FFFF', textShadow: '0 0 10px rgba(0,255,255,0.5)' }}>CUSTOM</span>
              </div>
              <div style={{
                fontFamily: 'Share Tech Mono, monospace',
                fontSize: '9px',
                letterSpacing: '3px',
                color: 'rgba(255,0,255,0.7)',
                textShadow: '0 0 6px #FF00FF',
              }}>
                METAL // WOOD // FUTURE
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }} className="desktop-nav">
            {NAV_LINKS.map(link => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  style={{
                    textDecoration: 'none',
                    padding: '8px 16px',
                    fontFamily: 'Rajdhani, sans-serif',
                    fontWeight: 600,
                    fontSize: '14px',
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    color: isActive ? '#FFD700' : 'rgba(224,224,224,0.7)',
                    textShadow: isActive ? '0 0 10px #FFD700' : 'none',
                    borderBottom: isActive ? '2px solid #FFD700' : '2px solid transparent',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                  }}
                  onMouseEnter={e => {
                    if (!isActive) (e.target as HTMLElement).style.color = '#00FFFF';
                  }}
                  onMouseLeave={e => {
                    if (!isActive) (e.target as HTMLElement).style.color = 'rgba(224,224,224,0.7)';
                  }}
                >
                  <span style={{
                    fontFamily: 'Share Tech Mono, monospace',
                    fontSize: '9px',
                    color: isActive ? '#FFD700' : 'rgba(0,255,255,0.4)',
                    display: 'block',
                    lineHeight: 1,
                    letterSpacing: '1px',
                  }}>
                    [{link.code}]
                  </span>
                  {link.label}
                </Link>
              );
            })}
            <Link to="/contacts" className="btn-cyber" style={{ marginLeft: '16px', padding: '8px 20px', fontSize: '11px' }}>
              Заказать
            </Link>
          </div>

          {/* Burger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="burger-btn"
            style={{
              background: 'none',
              border: 'none',
              display: 'none',
              flexDirection: 'column',
              gap: '5px',
              padding: '4px',
            }}
          >
            {[0, 1, 2].map(i => (
              <span key={i} style={{
                display: 'block',
                width: '24px',
                height: '2px',
                background: '#00FFFF',
                boxShadow: '0 0 6px #00FFFF',
                transition: 'all 0.3s ease',
                transform: mobileOpen
                  ? i === 0 ? 'rotate(45deg) translate(5px, 5px)' : i === 1 ? 'opacity: 0; scaleX(0)' : 'rotate(-45deg) translate(5px, -5px)'
                  : 'none',
                opacity: mobileOpen && i === 1 ? 0 : 1,
              }} />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
        {NAV_LINKS.map(link => {
          const isActive = location.pathname === link.path;
          return (
            <Link
              key={link.path}
              to={link.path}
              style={{
                textDecoration: 'none',
                padding: '12px 16px',
                fontFamily: 'Orbitron, sans-serif',
                fontWeight: 600,
                fontSize: '13px',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: isActive ? '#FFD700' : 'rgba(224,224,224,0.8)',
                textShadow: isActive ? '0 0 10px #FFD700' : 'none',
                borderLeft: isActive ? '3px solid #FFD700' : '3px solid transparent',
                display: 'block',
              }}
            >
              <span style={{ color: '#FF00FF', marginRight: '8px', fontFamily: 'Share Tech Mono, monospace', fontSize: '10px' }}>
                [{link.code}]
              </span>
              {link.label}
            </Link>
          );
        })}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .burger-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
