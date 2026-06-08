import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

const STATS = [
  { value: 500, suffix: '+', label: 'Реализованных проектов' },
  { value: 7, suffix: ' лет', label: 'На рынке' },
  { value: 14, suffix: ' дней', label: 'Средний срок изготовления' },
  { value: 100, suffix: '%', label: 'Гарантия качества' },
];

const SERVICES_PREVIEW = [
  {
    icon: '⚙️',
    title: 'Металлическая мебель',
    desc: 'Лофт, индастриал, стимпанк — для кафе, офисов, домов',
    color: '#00FFFF',
    price: 'от 8 000 ₽',
  },
  {
    icon: '🚪',
    title: 'Амбарные и бункерные двери',
    desc: 'Распашные, откатные — из металла и дерева, любой стиль',
    color: '#FFD700',
    price: 'от 35 000 ₽',
  },
  {
    icon: '🔩',
    title: 'Ограждения и перегородки',
    desc: 'Сетка ПВЛ, перфолист, стекло — для парковок и трасс',
    color: '#FF00FF',
    price: 'от 5 000 ₽/МП',
  },
  {
    icon: '🎨',
    title: 'Художественные работы',
    desc: 'Реализация дизайнерских проектов любой сложности',
    color: '#00FFFF',
    price: 'от 8 000 ₽',
  },
];

function useCountUp(target: number, duration: number = 1500, start: boolean = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function StatCard({ value, suffix, label, delay }: { value: number; suffix: string; label: string; delay: number }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const count = useCountUp(value, 1500, visible);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={{
      textAlign: 'center',
      padding: '32px 16px',
      animation: visible ? `countUp 0.6s ease ${delay}ms both` : 'none',
    }}>
      <div style={{
        fontFamily: 'Orbitron, sans-serif',
        fontSize: '48px',
        fontWeight: 900,
        color: '#FFD700',
        textShadow: '0 0 20px #FFD700, 0 0 40px rgba(255,215,0,0.3)',
        lineHeight: 1,
      }}>
        {count}{suffix}
      </div>
      <div style={{
        fontFamily: 'Rajdhani, sans-serif',
        color: 'rgba(224,224,224,0.6)',
        fontSize: '14px',
        letterSpacing: '2px',
        marginTop: '8px',
        textTransform: 'uppercase',
      }}>
        {label}
      </div>
    </div>
  );
}

const HERO_IMG = 'https://images.pexels.com/photos/13296053/pexels-photo-13296053.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400';

export default function Home() {
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [typedText, setTypedText] = useState('');
  const fullText = 'МЕТАЛЛ. ДЕРЕВО. БУДУЩЕЕ.';

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setTypedText(fullText.slice(0, i + 1));
      i++;
      if (i >= fullText.length) clearInterval(timer);
    }, 80);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0a', paddingTop: '64px' }}>

      {/* ===== HERO ===== */}
      <section style={{ position: 'relative', height: 'calc(100vh - 64px)', minHeight: '600px', overflow: 'hidden' }}>
        {/* BG Image */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url(${HERO_IMG})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.25) saturate(0.5)',
          opacity: heroLoaded ? 1 : 0,
          transition: 'opacity 1s ease',
        }} />
        <img src={HERO_IMG} onLoad={() => setHeroLoaded(true)} style={{ display: 'none' }} alt="" />

        {/* Gradient overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.8) 100%)',
        }} />

        {/* Grid */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(0,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />

        {/* Scan line anim */}
        <div className="scan-line-anim" />

        {/* Content */}
        <div style={{
          position: 'relative', zIndex: 2,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '0 48px',
          maxWidth: '1280px',
          margin: '0 auto',
        }}>
          {/* Tag */}
          <div className="section-tag" style={{ marginBottom: '16px' }}>
            &gt; STEMI_CUSTOM :: INDUSTRIAL_FORGE_SYSTEM v2.0
          </div>

          {/* Main title */}
          <h1 className="glitch" data-text="STEMI CUSTOM" style={{
            fontFamily: 'Orbitron, sans-serif',
            fontWeight: 900,
            fontSize: 'clamp(3rem, 8vw, 7rem)',
            lineHeight: 1,
            color: '#FFD700',
            textShadow: '0 0 40px rgba(255,215,0,0.5), 0 0 80px rgba(255,215,0,0.2)',
            margin: '0 0 16px',
            letterSpacing: '4px',
          }}>
            STEMI CUSTOM
          </h1>

          {/* Typed subtitle */}
          <div style={{
            fontFamily: 'Share Tech Mono, monospace',
            fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
            color: '#00FFFF',
            textShadow: '0 0 10px #00FFFF',
            letterSpacing: '6px',
            marginBottom: '24px',
            minHeight: '2rem',
          }}>
            {typedText}<span className="terminal-cursor" style={{ marginLeft: '4px' }} />
          </div>

          {/* Description */}
          <p style={{
            fontFamily: 'Rajdhani, sans-serif',
            fontSize: 'clamp(15px, 2vw, 18px)',
            color: 'rgba(224,224,224,0.75)',
            maxWidth: '600px',
            lineHeight: '1.7',
            marginBottom: '40px',
            letterSpacing: '0.5px',
          }}>
            Производство металлической мебели и конструкций в стиле <span style={{ color: '#FFD700' }}>лофт</span>, <span style={{ color: '#00FFFF' }}>индастриал</span> и <span style={{ color: '#FF00FF' }}>стимпанк</span>.
            Изготовим дверь, мебель или конструкцию любой сложности — от 14 дней, с доставкой по всей России.
          </p>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <Link to="/contacts" className="btn-cyber">
              Получить расчёт
            </Link>
            <Link to="/works" className="btn-cyber btn-cyber-cyan">
              Смотреть работы
            </Link>
          </div>

          {/* Corner decorations */}
          <div style={{
            position: 'absolute', bottom: '40px', right: '48px',
            fontFamily: 'Share Tech Mono, monospace',
            fontSize: '10px',
            color: 'rgba(0,255,255,0.4)',
            letterSpacing: '3px',
            textAlign: 'right',
          }}>
            <div>МО // ПОДОЛЬСК</div>
            <div style={{ color: 'rgba(255,0,255,0.4)', marginTop: '4px' }}>ПН–ПТ 10:00–19:00</div>
          </div>
        </div>

        {/* Corner frames */}
        <div style={{ position: 'absolute', inset: '20px', pointerEvents: 'none', zIndex: 3 }}>
          <div className="corner-tl" />
          <div className="corner-tr" />
          <div className="corner-bl" />
          <div className="corner-br" />
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: 'absolute', bottom: '30px', left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
          color: 'rgba(0,255,255,0.5)',
          fontFamily: 'Share Tech Mono, monospace',
          fontSize: '10px',
          letterSpacing: '3px',
          animation: 'float 2s ease-in-out infinite',
          zIndex: 5,
        }}>
          <span>SCROLL</span>
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
            <rect x="6" y="2" width="4" height="4" rx="2" fill="#00FFFF" style={{ filter: 'drop-shadow(0 0 4px #00FFFF)' }} />
            <rect x="7" y="1" width="2" height="22" fill="rgba(0,255,255,0.2)" />
            <path d="M4 18 L8 22 L12 18" stroke="#00FFFF" strokeWidth="1.5" fill="none" style={{ filter: 'drop-shadow(0 0 4px #00FFFF)' }} />
          </svg>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section style={{ background: '#000', borderTop: '1px solid rgba(0,255,255,0.1)', borderBottom: '1px solid rgba(0,255,255,0.1)' }}>
        <div style={{
          maxWidth: '1280px', margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        }}>
          {STATS.map((stat, i) => (
            <div key={i} style={{ borderRight: i < STATS.length - 1 ? '1px solid rgba(0,255,255,0.08)' : 'none' }}>
              <StatCard {...stat} delay={i * 100} />
            </div>
          ))}
        </div>
      </section>

      {/* ===== SERVICES PREVIEW ===== */}
      <section style={{ padding: '100px 24px', maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ marginBottom: '60px', textAlign: 'center' }}>
          <div className="section-tag" style={{ marginBottom: '12px' }}>// CAPABILITIES_MODULE</div>
          <h2 className="section-title" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#fff', marginBottom: '16px' }}>
            ЧТО МЫ <span className="neon-cyan">ПРОИЗВОДИМ</span>
          </h2>
          <div className="divider-cyber" style={{ maxWidth: '300px', margin: '0 auto 20px' }} />
          <p style={{
            color: 'rgba(224,224,224,0.5)',
            fontFamily: 'Rajdhani, sans-serif',
            fontSize: '16px',
            maxWidth: '600px',
            margin: '0 auto',
            letterSpacing: '0.5px',
          }}>
            Каждый проект — уникальный. Работаем по эскизу, чертежу или идее клиента.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
        }}>
          {SERVICES_PREVIEW.map((s, i) => (
            <div key={i} className="cyber-card" style={{ padding: '32px 24px' }}>
              {/* Icon + color bar */}
              <div style={{
                display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px',
              }}>
                <div style={{
                  width: '56px', height: '56px',
                  border: `1px solid ${s.color}`,
                  boxShadow: `0 0 12px ${s.color}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '24px',
                  clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
                  flexShrink: 0,
                }}>
                  {s.icon}
                </div>
                <div style={{
                  height: '2px',
                  flex: 1,
                  background: `linear-gradient(90deg, ${s.color}, transparent)`,
                  boxShadow: `0 0 6px ${s.color}`,
                }} />
              </div>
              <h3 style={{
                fontFamily: 'Orbitron, sans-serif',
                fontSize: '14px',
                fontWeight: 700,
                color: s.color,
                textShadow: `0 0 8px ${s.color}`,
                letterSpacing: '1px',
                marginBottom: '12px',
                textTransform: 'uppercase',
              }}>
                {s.title}
              </h3>
              <p style={{
                fontFamily: 'Rajdhani, sans-serif',
                color: 'rgba(224,224,224,0.6)',
                fontSize: '15px',
                lineHeight: '1.6',
                marginBottom: '16px',
              }}>
                {s.desc}
              </p>
              <div style={{
                fontFamily: 'Share Tech Mono, monospace',
                fontSize: '12px',
                color: '#FFD700',
                textShadow: '0 0 8px #FFD700',
                borderTop: '1px solid rgba(255,215,0,0.1)',
                paddingTop: '12px',
                letterSpacing: '1px',
              }}>
                {s.price}
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <Link to="/services" className="btn-cyber btn-cyber-cyan">
            Все услуги →
          </Link>
        </div>
      </section>

      {/* ===== WHY US ===== */}
      <section style={{
        background: 'linear-gradient(180deg, #0a0a0a 0%, #000 50%, #0a0a0a 100%)',
        padding: '80px 24px',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(255,0,255,0.1)',
        borderBottom: '1px solid rgba(255,0,255,0.1)',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(ellipse at 20% 50%, rgba(255,0,255,0.03) 0%, transparent 60%), radial-gradient(ellipse at 80% 50%, rgba(0,255,255,0.03) 0%, transparent 60%)',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ marginBottom: '60px', textAlign: 'center' }}>
            <div className="section-tag" style={{ marginBottom: '12px' }}>// ADVANTAGE_MATRIX</div>
            <h2 className="section-title" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#fff' }}>
              ПОЧЕМУ <span className="neon-magenta">МЫ</span>
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2px',
            background: 'rgba(0,255,255,0.05)',
          }}>
            {[
              {
                num: '01',
                title: 'Собственное производство',
                desc: 'Без посредников. Весь цикл — от проекта до установки — в наших руках.',
                color: '#00FFFF',
              },
              {
                num: '02',
                title: 'Любая сложность',
                desc: 'Работаем по эскизу клиента, реализуем самые нестандартные идеи.',
                color: '#FFD700',
              },
              {
                num: '03',
                title: 'Срок 14 дней',
                desc: 'Быстро, без потери качества. Экспресс-изготовление по запросу.',
                color: '#FF00FF',
              },
              {
                num: '04',
                title: 'Вся Россия',
                desc: 'Доставка транспортными компаниями. Монтаж выездной бригадой.',
                color: '#00FFFF',
              },
              {
                num: '05',
                title: 'Цвет по каталогу RAL',
                desc: 'Порошковое окрашивание в любой цвет. Матовый, глянцевый, текстурный.',
                color: '#FFD700',
              },
              {
                num: '06',
                title: 'Гарантия качества',
                desc: 'Каждое изделие проходит контроль. Гарантия — 12 месяцев.',
                color: '#FF00FF',
              },
            ].map((item, i) => (
              <div key={i} className="cyber-card" style={{
                padding: '36px 28px',
                background: 'rgba(10,10,10,0.95)',
              }}>
                <div style={{
                  fontFamily: 'Orbitron, sans-serif',
                  fontSize: '42px',
                  fontWeight: 900,
                  color: `${item.color}0d`,
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  lineHeight: 1,
                  userSelect: 'none',
                }}>
                  {item.num}
                </div>
                <div style={{
                  fontFamily: 'Share Tech Mono, monospace',
                  fontSize: '13px',
                  color: item.color,
                  textShadow: `0 0 8px ${item.color}`,
                  marginBottom: '12px',
                  letterSpacing: '2px',
                }}>
                  [{item.num}]
                </div>
                <h3 style={{
                  fontFamily: 'Orbitron, sans-serif',
                  fontSize: '13px',
                  fontWeight: 700,
                  color: '#fff',
                  letterSpacing: '1px',
                  marginBottom: '12px',
                  textTransform: 'uppercase',
                }}>
                  {item.title}
                </h3>
                <p style={{
                  fontFamily: 'Rajdhani, sans-serif',
                  color: 'rgba(224,224,224,0.55)',
                  fontSize: '15px',
                  lineHeight: '1.6',
                }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section style={{ padding: '80px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at center, rgba(255,215,0,0.04) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div className="section-tag" style={{ marginBottom: '16px' }}>// INITIATE_CONTACT_SEQUENCE</div>
          <h2 style={{
            fontFamily: 'Orbitron, sans-serif',
            fontWeight: 900,
            fontSize: 'clamp(1.6rem, 3.5vw, 2.8rem)',
            color: '#FFD700',
            textShadow: '0 0 30px rgba(255,215,0,0.4)',
            marginBottom: '20px',
            textTransform: 'uppercase',
            letterSpacing: '3px',
          }}>
            Готовы воплотить<br />вашу идею в металле?
          </h2>
          <p style={{
            fontFamily: 'Rajdhani, sans-serif',
            color: 'rgba(224,224,224,0.6)',
            fontSize: '17px',
            lineHeight: '1.7',
            marginBottom: '40px',
            maxWidth: '600px',
            margin: '0 auto 40px',
          }}>
            Оставьте заявку — наш специалист свяжется с вами, обсудит проект и рассчитает стоимость бесплатно.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contacts" className="btn-cyber">
              Оставить заявку
            </Link>
            <a href="tel:+79851234567" className="btn-cyber btn-cyber-cyan">
              Позвонить сейчас
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
