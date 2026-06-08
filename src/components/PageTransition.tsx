import { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const ROUTE_LABELS: Record<string, string> = {
  '/': 'HOME_MATRIX',
  '/services': 'SERVICES_CORE',
  '/works': 'WORKS_DATABASE',
  '/about': 'ABOUT_PROTOCOL',
  '/contacts': 'CONTACT_NODE',
};

const BOOT_LINES = [
  '> STEMI_CUSTOM_OS v2.0.77 ...',
  '> Инициализация ядра системы...',
  '> Загрузка модулей безопасности... [OK]',
  '> Подключение к сети MESH... [OK]',
  '> Монтирование файловой системы... [OK]',
  '> Запуск рендерера интерфейса...',
];

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [transitioning, setTransitioning] = useState(false);
  const [lines, setLines] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);
  const [routeLabel, setRouteLabel] = useState('');
  const prevLocation = useRef(location.pathname);
  const isFirst = useRef(true);

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      prevLocation.current = location.pathname;
      return;
    }
    if (prevLocation.current === location.pathname) return;
    prevLocation.current = location.pathname;

    const label = ROUTE_LABELS[location.pathname] || 'MODULE_LOAD';
    setRouteLabel(label);
    setLines([]);
    setProgress(0);
    setTransitioning(true);

    const bootLines = [
      ...BOOT_LINES.slice(0, 4),
      `> Навигация к: [${label}]`,
      `> Загрузка ресурсов страницы...`,
    ];

    let lineIdx = 0;
    const lineInterval = setInterval(() => {
      if (lineIdx < bootLines.length) {
        setLines(prev => [...prev, bootLines[lineIdx]]);
        lineIdx++;
      } else {
        clearInterval(lineInterval);
      }
    }, 80);

    let prog = 0;
    const progInterval = setInterval(() => {
      prog += Math.random() * 12 + 3;
      if (prog >= 100) {
        prog = 100;
        setProgress(100);
        clearInterval(progInterval);
        setTimeout(() => {
          setTransitioning(false);
          setLines([]);
          setProgress(0);
        }, 200);
      } else {
        setProgress(Math.floor(prog));
      }
    }, 40);

    return () => {
      clearInterval(lineInterval);
      clearInterval(progInterval);
    };
  }, [location.pathname]);

  return (
    <>
      {transitioning && (
        <div className="page-transition-overlay">
          {/* Corner decorations */}
          <div className="corner-tl" style={{ position: 'absolute', top: 20, left: 20 }} />
          <div className="corner-tr" style={{ position: 'absolute', top: 20, right: 20 }} />
          <div className="corner-bl" style={{ position: 'absolute', bottom: 20, left: 20 }} />
          <div className="corner-br" style={{ position: 'absolute', bottom: 20, right: 20 }} />

          {/* Logo */}
          <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
            <div style={{
              fontFamily: 'Orbitron, sans-serif',
              fontSize: '1.5rem',
              fontWeight: 900,
              letterSpacing: '4px',
              color: '#FFD700',
              textShadow: '0 0 20px #FFD700, 0 0 40px #FFD700',
            }}>
              STEMI<span style={{ color: '#00FFFF' }}>CUSTOM</span>
            </div>
            <div style={{
              fontFamily: 'Share Tech Mono, monospace',
              fontSize: '10px',
              letterSpacing: '6px',
              color: '#FF00FF',
              textShadow: '0 0 8px #FF00FF',
              marginTop: '4px',
            }}>
              INDUSTRIAL FORGE SYSTEM
            </div>
          </div>

          {/* Terminal */}
          <div className="terminal-lines">
            {lines.map((line, i) => (
              <div
                key={i}
                className="terminal-line"
                style={{ animationDelay: `${i * 0.05}s`, color: i === lines.length - 1 ? '#FFD700' : '#00FFFF' }}
              >
                {line}
              </div>
            ))}
            <div className="terminal-line" style={{ animationDelay: `${lines.length * 0.05}s` }}>
              <span className="terminal-cursor" />
            </div>
          </div>

          {/* Progress */}
          <div className="progress-bar-container" style={{ marginTop: '2rem' }}>
            <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
          </div>
          <div style={{
            fontFamily: 'Share Tech Mono, monospace',
            fontSize: '11px',
            color: 'rgba(0,255,255,0.6)',
            marginTop: '8px',
            letterSpacing: '2px',
          }}>
            ЗАГРУЗКА: {progress}%
          </div>

          <div style={{
            position: 'absolute',
            bottom: 40,
            fontFamily: 'Share Tech Mono, monospace',
            fontSize: '10px',
            color: 'rgba(255,0,255,0.4)',
            letterSpacing: '3px',
          }}>
            SYS:{routeLabel} :: RENDER_ENGINE_ACTIVE
          </div>
        </div>
      )}
      <div key={location.pathname} className="page-enter">
        {children}
      </div>
    </>
  );
}
