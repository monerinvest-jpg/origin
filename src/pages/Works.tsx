import { useState } from 'react';
import { Link } from 'react-router-dom';

const CATEGORIES = ['ВСЕ', 'МЕБЕЛЬ', 'ДВЕРИ', 'ОГРАЖДЕНИЯ', 'БАРБЕРШОП', 'МАСТЕРСКАЯ'];

const WORKS = [
  {
    id: 1,
    cat: 'МЕБЕЛЬ',
    title: 'Мебель для фитнес-клуба',
    desc: 'Полный комплект мебели под ключ — стойки, лавки, стеллажи',
    img: 'https://m-files.cdn1.cc/lpfile/8/e/7/8e7ff29cc7fbf0a089ede2649d0e3e8b/-/resize/800/f.jpg',
    price: 'от 40 000 ₽',
    accent: '#00FFFF',
  },
  {
    id: 2,
    cat: 'МЕБЕЛЬ',
    title: 'Мебель для клуба единоборств',
    desc: 'Современные стеллажи и лавки из чёрного металла',
    img: 'https://m-files.cdn1.cc/lpfile/b/3/a/b3a6f64c13081234e61808d91cf66d59/-/resize/800/f.jpg',
    price: 'от 20 000 ₽',
    accent: '#FFD700',
  },
  {
    id: 3,
    cat: 'МЕБЕЛЬ',
    title: 'Мебель для салона красоты',
    desc: 'Нержавеющая сталь — элегантность и практичность',
    img: 'https://m-files.cdn1.cc/lpfile/4/e/4/4e46e7a53c63102cdb38121820b93888/-/resize/800/f.jpg',
    price: 'от 25 000 ₽',
    accent: '#FF00FF',
  },
  {
    id: 4,
    cat: 'МЕБЕЛЬ',
    title: 'Мебель для кальянной',
    desc: 'Стулья, столы, стеллажи, ресепшен из металла',
    img: 'https://m-files.cdn1.cc/lpfile/9/f/8/9f854029994b61a8ed5a09235a8e7174/-/resize/800/f.jpg',
    price: 'от 8 000 ₽',
    accent: '#00FFFF',
  },
  {
    id: 5,
    cat: 'ОГРАЖДЕНИЯ',
    title: 'Ограждение для картинг-трассы',
    desc: 'Изготовление по ГОСТ с любыми параметрами',
    img: 'https://m-files.cdn1.cc/lpfile/0/1/5/015b491aadc24393428629468e43a59b/-/resize/800/f.jpg',
    price: 'от 5 000 ₽/МП',
    accent: '#FFD700',
  },
  {
    id: 6,
    cat: 'ОГРАЖДЕНИЯ',
    title: 'Ограждение из сетки ПВЛ',
    desc: 'Для подземных парковок и промышленных объектов',
    img: 'https://m-files.cdn1.cc/lpfile/c/1/4/c1491c499c4de93a865c738a530653a1/-/resize/800/f.jpg',
    price: 'от 7 000 ₽/МП',
    accent: '#FF00FF',
  },
  {
    id: 7,
    cat: 'ОГРАЖДЕНИЯ',
    title: 'Художественные перегородки',
    desc: 'Любое исполнение — от классики до авангарда',
    img: 'https://m-files.cdn1.cc/lpfile/d/2/7/d27ceda1b9dbf5575b3bbbce992b6a6a/-/resize/800/f.jpg',
    price: 'от 4 000 ₽/м²',
    accent: '#00FFFF',
  },
  {
    id: 8,
    cat: 'МЕБЕЛЬ',
    title: 'Рабочее место Индастриал',
    desc: 'Металл + дерево: брутальная эстетика, максимальный функционал',
    img: 'https://m-files.cdn1.cc/lpfile/2/3/8/23855b6f69f4f9262820355816755d67/-/resize/800/f.jpg',
    price: 'от 10 000 ₽/МП',
    accent: '#FFD700',
  },
  {
    id: 9,
    cat: 'ДВЕРИ',
    title: 'Комбинированные двери',
    desc: 'Металл и дерево — распашные и амбарные двери',
    img: 'https://m-files.cdn1.cc/lpfile/a/1/4/a149bae01c7514d93a85327774c8f8b2/-/resize/800/f.jpg',
    price: 'от 35 000 ₽',
    accent: '#FF00FF',
  },
  {
    id: 10,
    cat: 'ДВЕРИ',
    title: 'Двери для бара',
    desc: 'С табличками, брендингом и декором под ключ',
    img: 'https://m-files.cdn1.cc/lpfile/0/f/8/0f8a5c8371b8ac5e550567ab532c7e1a/-/resize/800/f.jpg',
    price: 'от 42 000 ₽',
    accent: '#00FFFF',
  },
  {
    id: 11,
    cat: 'ДВЕРИ',
    title: 'Металлическая дверь Стимпанк',
    desc: 'Брутальные решения с паровой стилистикой',
    img: 'https://m-files.cdn1.cc/lpfile/2/8/9/28948d4ff3e1cf3eae8af80d7ef90ce9/-/resize/800/f.jpg',
    price: 'от 55 000 ₽',
    accent: '#FFD700',
  },
  {
    id: 12,
    cat: 'БАРБЕРШОП',
    title: 'Мебель для барбершопа',
    desc: 'Ресепшен, стеллажи, зеркала, рабочие места — под ключ',
    img: 'https://m-files.cdn1.cc/lpfile/3/c/9/3c9a307afbcd62076afb9484b0559d0c/-/resize/800/f.jpg',
    price: 'от 300 000 ₽',
    accent: '#FF00FF',
  },
  {
    id: 13,
    cat: 'МАСТЕРСКАЯ',
    title: 'Сварка конструкций',
    desc: 'Процесс соединения дуги для вешала с радиусом 2000',
    img: 'https://images.pexels.com/photos/13296053/pexels-photo-13296053.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    price: 'Производство',
    accent: '#00FFFF',
  },
  {
    id: 14,
    cat: 'МАСТЕРСКАЯ',
    title: 'Ресепшен для барбершопа',
    desc: 'Монтаж изделий в шоуруме: металл + дерево',
    img: 'https://images.pexels.com/photos/37517094/pexels-photo-37517094.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    price: 'Производство',
    accent: '#FFD700',
  },
  {
    id: 15,
    cat: 'МАСТЕРСКАЯ',
    title: 'Нанесение порошковой краски',
    desc: 'Профессиональное окрашивание по каталогу RAL',
    img: 'https://images.pexels.com/photos/37517098/pexels-photo-37517098.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    price: 'Производство',
    accent: '#FF00FF',
  },
  {
    id: 16,
    cat: 'МЕБЕЛЬ',
    title: 'Мебель из массива',
    desc: 'Дуб, ясень, карагач, клён — изготовление на заказ',
    img: 'https://m-files.cdn1.cc/lpfile/7/1/e/71eb24dbe8a23d0f0c6a190dcf0d2ae7/-/resize/800/f.jpg',
    price: 'от 12 000 ₽',
    accent: '#00FFFF',
  },
  {
    id: 17,
    cat: 'ОГРАЖДЕНИЯ',
    title: 'Перегородки из стекла',
    desc: 'Стационарные, распашные, откатные — любое стекло',
    img: 'https://m-files.cdn1.cc/lpfile/9/a/e/9ae0972f1a187afd460a3768913f2c77/-/resize/800/f.jpg',
    price: 'от 11 000 ₽/м²',
    accent: '#FFD700',
  },
  {
    id: 18,
    cat: 'МЕБЕЛЬ',
    title: 'Подстолье Индастриал',
    desc: 'Брутальные конструкции из чёрного металла',
    img: 'https://m-files.cdn1.cc/lpfile/2/0/b/20b0239d5b3091105da2f99e43ff36dd/-/resize/800/f.jpg',
    price: 'от 15 000 ₽',
    accent: '#FF00FF',
  },
];

export default function Works() {
  const [active, setActive] = useState('ВСЕ');
  const [hovered, setHovered] = useState<number | null>(null);

  const filtered = active === 'ВСЕ' ? WORKS : WORKS.filter(w => w.cat === active);

  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0a', paddingTop: '64px' }}>

      {/* Page Header */}
      <div style={{
        position: 'relative',
        padding: '60px 24px 50px',
        textAlign: 'center',
        overflow: 'hidden',
        borderBottom: '1px solid rgba(255,215,0,0.1)',
        background: 'linear-gradient(180deg, #000 0%, #0a0a0a 100%)',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(255,215,0,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,215,0,0.02) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          pointerEvents: 'none',
        }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-tag" style={{ marginBottom: '12px' }}>// PORTFOLIO_DATABASE :: LOADED</div>
          <h1 className="section-title glitch" data-text="НАШИ РАБОТЫ" style={{
            fontSize: 'clamp(2rem, 6vw, 5rem)',
            color: '#FFD700',
            textShadow: '0 0 40px rgba(255,215,0,0.4)',
            marginBottom: '16px',
          }}>
            НАШИ РАБОТЫ
          </h1>
          <p style={{
            fontFamily: 'Rajdhani, sans-serif',
            color: 'rgba(224,224,224,0.5)',
            fontSize: '16px',
            maxWidth: '550px',
            margin: '0 auto',
            lineHeight: '1.7',
          }}>
            Более 500 реализованных проектов. Каждая работа — уникальна.
          </p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div style={{
        padding: '32px 24px',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '8px',
        borderBottom: '1px solid rgba(0,255,255,0.08)',
        background: '#000',
      }}>
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            style={{
              fontFamily: 'Share Tech Mono, monospace',
              fontSize: '11px',
              letterSpacing: '2px',
              padding: '8px 18px',
              background: active === cat ? '#00FFFF' : 'transparent',
              color: active === cat ? '#000' : 'rgba(0,255,255,0.6)',
              border: '1px solid',
              borderColor: active === cat ? '#00FFFF' : 'rgba(0,255,255,0.2)',
              boxShadow: active === cat ? '0 0 16px #00FFFF, 0 0 32px rgba(0,255,255,0.2)' : '0 0 6px rgba(0,255,255,0.1)',
              cursor: 'none',
              transition: 'all 0.3s ease',
              textTransform: 'uppercase',
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div style={{ padding: '48px 24px', maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{
          columns: 'auto 280px',
          columnGap: '20px',
        }}>
          {filtered.map((work) => (
            <div
              key={work.id}
              className="cyber-card"
              style={{
                marginBottom: '20px',
                breakInside: 'avoid',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={() => setHovered(work.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Image */}
              <div className="work-img-wrap" style={{
                height: work.id % 3 === 0 ? '280px' : '220px',
              }}>
                <img
                  src={work.img}
                  alt={work.title}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: `brightness(${hovered === work.id ? '0.9' : '0.7'}) saturate(${hovered === work.id ? '0.9' : '0.6'})`,
                    transition: 'all 0.5s ease',
                  }}
                />
                {/* Hover overlay */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: `linear-gradient(135deg, ${work.accent}20, transparent 60%)`,
                  opacity: hovered === work.id ? 1 : 0,
                  transition: 'opacity 0.3s ease',
                }} />

                {/* Category badge */}
                <div style={{
                  position: 'absolute', top: '12px', left: '12px',
                  fontFamily: 'Share Tech Mono, monospace',
                  fontSize: '9px',
                  letterSpacing: '2px',
                  color: '#000',
                  background: work.accent,
                  boxShadow: `0 0 10px ${work.accent}`,
                  padding: '4px 8px',
                }}>
                  {work.cat}
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: '16px 20px 20px' }}>
                <h3 style={{
                  fontFamily: 'Orbitron, sans-serif',
                  fontSize: '12px',
                  fontWeight: 700,
                  color: '#fff',
                  letterSpacing: '1px',
                  marginBottom: '8px',
                  textTransform: 'uppercase',
                }}>
                  {work.title}
                </h3>
                <p style={{
                  fontFamily: 'Rajdhani, sans-serif',
                  color: 'rgba(224,224,224,0.5)',
                  fontSize: '13px',
                  lineHeight: '1.5',
                  marginBottom: '12px',
                }}>
                  {work.desc}
                </p>
                <div style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  paddingTop: '10px',
                  borderTop: `1px solid ${work.accent}1a`,
                }}>
                  <span style={{
                    fontFamily: 'Share Tech Mono, monospace',
                    fontSize: '11px',
                    color: '#FFD700',
                    textShadow: '0 0 6px #FFD700',
                    letterSpacing: '1px',
                  }}>
                    {work.price}
                  </span>
                  <span style={{
                    fontFamily: 'Share Tech Mono, monospace',
                    fontSize: '9px',
                    color: `${work.accent}80`,
                    letterSpacing: '1px',
                  }}>
                    ID:{String(work.id).padStart(3, '0')}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{
            textAlign: 'center',
            padding: '60px 24px',
            fontFamily: 'Share Tech Mono, monospace',
            color: 'rgba(0,255,255,0.3)',
            fontSize: '14px',
            letterSpacing: '3px',
          }}>
            &gt; NO_DATA_FOUND :: {active}
          </div>
        )}
      </div>

      {/* CTA */}
      <div style={{
        textAlign: 'center',
        padding: '60px 24px',
        borderTop: '1px solid rgba(0,255,255,0.1)',
        background: '#000',
      }}>
        <div className="section-tag" style={{ marginBottom: '16px' }}>// REQUEST_YOUR_PROJECT</div>
        <h2 style={{
          fontFamily: 'Orbitron, sans-serif',
          fontWeight: 900,
          fontSize: 'clamp(1.4rem, 3vw, 2.2rem)',
          color: '#fff',
          marginBottom: '24px',
          textTransform: 'uppercase',
          letterSpacing: '2px',
        }}>
          Хотите такой же результат?
        </h2>
        <Link to="/contacts" className="btn-cyber">
          Обсудить проект
        </Link>
      </div>
    </div>
  );
}
