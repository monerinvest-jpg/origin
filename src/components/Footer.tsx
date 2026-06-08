import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer style={{
      background: '#000000',
      borderTop: '1px solid rgba(0,255,255,0.1)',
      padding: '60px 24px 30px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background grid */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'linear-gradient(rgba(0,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,255,0.02) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '40px',
          marginBottom: '40px',
        }}>
          {/* Brand */}
          <div>
            <div style={{
              fontFamily: 'Orbitron, sans-serif',
              fontWeight: 900,
              fontSize: '22px',
              letterSpacing: '4px',
              marginBottom: '8px',
            }}>
              <span style={{ color: '#FFD700', textShadow: '0 0 10px #FFD700' }}>STEMI</span>
              <span style={{ color: '#00FFFF', textShadow: '0 0 10px #00FFFF' }}>CUSTOM</span>
            </div>
            <div style={{
              fontFamily: 'Share Tech Mono, monospace',
              fontSize: '10px',
              letterSpacing: '3px',
              color: '#FF00FF',
              textShadow: '0 0 6px #FF00FF',
              marginBottom: '16px',
            }}>
              METAL // WOOD // FUTURE
            </div>
            <p style={{
              fontFamily: 'Rajdhani, sans-serif',
              color: 'rgba(224,224,224,0.5)',
              fontSize: '14px',
              lineHeight: '1.7',
            }}>
              Производство металлической мебели и конструкций в стиле лофт, индастриал и стимпанк. Работаем по всей России.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div style={{
              fontFamily: 'Orbitron, sans-serif',
              fontSize: '11px',
              letterSpacing: '3px',
              color: '#00FFFF',
              textShadow: '0 0 8px #00FFFF',
              marginBottom: '20px',
              textTransform: 'uppercase',
            }}>
              // НАВИГАЦИЯ
            </div>
            {[
              { path: '/', label: 'Главная' },
              { path: '/services', label: 'Услуги' },
              { path: '/works', label: 'Наши работы' },
              { path: '/about', label: 'О компании' },
              { path: '/contacts', label: 'Контакты' },
            ].map(link => (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  display: 'block',
                  fontFamily: 'Rajdhani, sans-serif',
                  color: 'rgba(224,224,224,0.5)',
                  textDecoration: 'none',
                  padding: '6px 0',
                  fontSize: '15px',
                  letterSpacing: '1px',
                  borderBottom: '1px solid rgba(0,255,255,0.05)',
                  transition: 'color 0.3s ease',
                }}
                onMouseEnter={e => (e.target as HTMLElement).style.color = '#FFD700'}
                onMouseLeave={e => (e.target as HTMLElement).style.color = 'rgba(224,224,224,0.5)'}
              >
                <span style={{ color: '#FF00FF', marginRight: '8px', fontSize: '11px', fontFamily: 'Share Tech Mono, monospace' }}>›</span>
                {link.label}
              </Link>
            ))}
          </div>

          {/* Services */}
          <div>
            <div style={{
              fontFamily: 'Orbitron, sans-serif',
              fontSize: '11px',
              letterSpacing: '3px',
              color: '#FFD700',
              textShadow: '0 0 8px #FFD700',
              marginBottom: '20px',
              textTransform: 'uppercase',
            }}>
              // УСЛУГИ
            </div>
            {[
              'Металлическая мебель',
              'Амбарные двери',
              'Ограждения и перегородки',
              'Барбершопы под ключ',
              'Художественные изделия',
              'Металлоконструкции',
            ].map(service => (
              <div
                key={service}
                style={{
                  fontFamily: 'Rajdhani, sans-serif',
                  color: 'rgba(224,224,224,0.5)',
                  padding: '6px 0',
                  fontSize: '14px',
                  borderBottom: '1px solid rgba(255,215,0,0.05)',
                }}
              >
                <span style={{ color: '#00FFFF', marginRight: '8px', fontSize: '11px' }}>›</span>
                {service}
              </div>
            ))}
          </div>

          {/* Contacts */}
          <div>
            <div style={{
              fontFamily: 'Orbitron, sans-serif',
              fontSize: '11px',
              letterSpacing: '3px',
              color: '#FF00FF',
              textShadow: '0 0 8px #FF00FF',
              marginBottom: '20px',
              textTransform: 'uppercase',
            }}>
              // СВЯЗЬ
            </div>
            {[
              { icon: '📞', text: '+7 (985) 123-45-67', mono: true },
              { icon: '✉️', text: 'info@stemicustom.ru', mono: true },
              { icon: '📍', text: 'МО, г. Подольск, дер. Малое Брянцево', mono: false },
              { icon: '⏰', text: 'Пн–Пт: 10:00–19:00', mono: false },
            ].map((item, i) => (
              <div key={i} style={{
                display: 'flex',
                gap: '12px',
                padding: '8px 0',
                borderBottom: '1px solid rgba(255,0,255,0.05)',
                fontFamily: item.mono ? 'Share Tech Mono, monospace' : 'Rajdhani, sans-serif',
                color: 'rgba(224,224,224,0.6)',
                fontSize: item.mono ? '12px' : '14px',
                alignItems: 'flex-start',
              }}>
                <span style={{ fontSize: '14px', flexShrink: 0 }}>{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}

            {/* Social icons */}
            <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
              {[
                { label: 'VK', color: '#00FFFF' },
                { label: 'TG', color: '#00FFFF' },
                { label: 'WA', color: '#FFD700' },
                { label: 'YT', color: '#FF00FF' },
              ].map(s => (
                <a
                  key={s.label}
                  href="#"
                  style={{
                    width: '36px',
                    height: '36px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: `1px solid ${s.color}`,
                    boxShadow: `0 0 6px ${s.color}`,
                    color: s.color,
                    fontFamily: 'Share Tech Mono, monospace',
                    fontSize: '10px',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    fontWeight: 700,
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.background = s.color;
                    (e.currentTarget as HTMLElement).style.color = '#000';
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 0 16px ${s.color}`;
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.background = 'transparent';
                    (e.currentTarget as HTMLElement).style.color = s.color;
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 0 6px ${s.color}`;
                  }}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="divider-cyber" />

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          marginTop: '24px',
          fontFamily: 'Share Tech Mono, monospace',
          fontSize: '11px',
          color: 'rgba(224,224,224,0.25)',
          letterSpacing: '1px',
        }}>
          <div>© 2024 STEMI_CUSTOM :: ALL_RIGHTS_RESERVED</div>
          <div style={{ color: 'rgba(0,255,255,0.3)' }}>
            SYS_VER: 2.0.77 :: BUILD_STABLE
          </div>
        </div>
      </div>
    </footer>
  );
}
