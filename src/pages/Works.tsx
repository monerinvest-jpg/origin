import { useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link, useParams } from 'react-router-dom';

type WorkPhoto = {
  img: string;
  group: string;
  title: string;
};

type Category = {
  slug: string;
  title: string;
  description: string;
  accent: string;
  cover: string;
  photos: WorkPhoto[];
};

// Relative path keeps the gallery working both from a local folder and from a site hosted in a subdirectory.
const photo = (file: string) => `./works/${file}`;

const CATEGORIES: Category[] = [
  {
    slug: 'furniture',
    title: 'МЕБЕЛЬ',
    description: 'Столы, стеллажи, консоли и предметы интерьера из металла.',
    accent: '#00ffff',
    cover: photo('photo_2026-07-22_12-42-44.jpg'),
    photos: [
      ['12-40-44', 'Столы'], ['12-40-58', 'Консоли'], ['12-41-09', 'Стойки'], ['12-41-12', 'Тумбы'],
      ['12-41-16', 'Стеллажи'], ['12-41-20', 'Стеллажи'], ['12-41-24', 'Столы'], ['12-41-35', 'Стеллажи'], ['12-41-44', 'Спальни'],
      ['12-42-44', 'Столы'], ['12-42-48', 'Тумбы'], ['12-43-19', 'Стеллажи'], ['12-43-31', 'Стеллажи'],
      ['12-43-59', 'Консоли'], ['12-44-17', 'Тумбы'], ['12-44-33', 'Уличная мебель'], ['12-44-42', 'Столы'],
      ['12-44-46', 'Консоли'], ['12-45-01', 'Консоли'], ['12-45-36', 'Свет'], ['12-45-39', 'Стулья'],
      ['12-46-02', 'Консоли'], ['12-46-35', 'Зеркала и рамы'], ['12-46-38', 'Столы'],
    ].map(([time, group]) => ({ img: photo(`photo_2026-07-22_${time}.jpg`), group, title: group })),
  },
  {
    slug: 'doors',
    title: 'ДВЕРИ',
    description: 'Амбарные, бункерные и авторские двери из металла.',
    accent: '#ff00ff',
    cover: photo('photo_2026-07-22_12-44-02.jpg'),
    photos: [
      ['12-41-02', 'Авторские'], ['12-41-05', 'Бункерные'], ['12-41-28', 'Бункерные'], ['12-41-32', 'Авторские'],
      ['12-41-50', 'Бункерные'], ['12-41-56', 'Авторские'], ['12-42-04', 'Авторские'], ['12-42-08', 'Авторские'],
      ['12-43-07', 'Авторские'], ['12-43-12', 'Авторские'], ['12-43-36', 'Авторские'], ['12-43-40', 'Авторские'],
      ['12-43-44', 'Авторские'], ['12-43-48', 'Авторские'], ['12-43-52', 'Авторские'], ['12-43-55', 'Бункерные'],
      ['12-44-02', 'Авторские'], ['12-44-05', 'Авторские'], ['12-44-09', 'Межкомнатные'], ['12-44-12', 'Бункерные'],
      ['12-44-38', 'Авторские'], ['12-44-53', 'Бункерные'], ['12-45-05', 'Авторские'], ['12-45-44', 'Авторские'],
      ['12-46-13', 'Авторские'], ['12-46-20', 'Авторские'], ['12-46-23', 'Авторские'], ['12-46-31', 'Авторские'],
    ].map(([time, group]) => ({ img: photo(`photo_2026-07-22_${time}.jpg`), group, title: `${group} двери` })),
  },
  {
    slug: 'fencing',
    title: 'ОГРАЖДЕНИЯ',
    description: 'Перегородки, лестничные ограждения и конструкции из металла.',
    accent: '#ffd700',
    cover: photo('photo_2026-07-22_12-46-42.jpg'),
    photos: [
      ['12-40-54', 'Перегородки'], ['12-41-47', 'Перегородки'], ['12-42-00', 'Перегородки'], ['12-43-16', 'Перегородки'],
      ['12-44-50', 'Лестницы'], ['12-44-57', 'Перегородки'], ['12-46-16', 'Перегородки'], ['12-46-42', 'Ограждения'],
    ].map(([time, group]) => ({ img: photo(`photo_2026-07-22_${time}.jpg`), group, title: group })),
  },
  {
    slug: 'barbershop',
    title: 'БАРБЕРШОП',
    description: 'Интерьерные решения и мебель для мужских пространств.',
    accent: '#00ffff',
    cover: photo('photo_2026-07-22_12-42-40.jpg'),
    photos: [
      ['12-40-50', 'Интерьер'], ['12-42-40', 'Стойки'], ['12-45-49', 'Интерьер'],
    ].map(([time, group]) => ({ img: photo(`photo_2026-07-22_${time}.jpg`), group, title: `Барбершоп: ${group.toLowerCase()}` })),
  },
  {
    slug: 'workshop',
    title: 'МАСТЕРСКАЯ',
    description: 'Нестандартные объекты, спортивные конструкции и арт-проекты.',
    accent: '#ff00ff',
    cover: photo('photo_2026-07-22_12-45-33.jpg'),
    photos: [
      ['12-44-27', 'Транспорт'], ['12-45-33', 'Транспорт'], ['12-45-58', 'Спорт'],
      ['12-46-06', 'Арт-объекты'], ['12-46-09', 'Арт-объекты'], ['12-46-27', 'Арт-объекты'],
    ].map(([time, group]) => ({ img: photo(`photo_2026-07-22_${time}.jpg`), group, title: group })),
  },
];

function PageHeader({ title, detail }: { title: string; detail: string }) {
  return (
    <header style={{
      position: 'relative', padding: '60px 24px 50px', textAlign: 'center', overflow: 'hidden',
      borderBottom: '1px solid rgba(255, 215, 0, 0.1)', background: 'linear-gradient(180deg, #000 0%, #0a0a0a 100%)',
    }}>
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(rgba(255, 215, 0, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 215, 0, 0.02) 1px, transparent 1px)',
        backgroundSize: '50px 50px',
      }} />
      <div style={{ position: 'relative' }}>
        <div className="section-tag" style={{ marginBottom: '12px' }}>// PORTFOLIO_DATABASE :: LOADED</div>
        <h1 className="section-title glitch" data-text={title} style={{
          fontSize: 'clamp(2rem, 6vw, 5rem)', color: '#FFD700', textShadow: '0 0 40px rgba(255,215,0,0.4)', marginBottom: '16px',
        }}>{title}</h1>
        <p style={{ fontFamily: 'Rajdhani, sans-serif', color: 'rgba(224,224,224,0.58)', fontSize: '16px', maxWidth: '620px', margin: '0 auto', lineHeight: 1.7 }}>{detail}</p>
      </div>
    </header>
  );
}

function CategoryCard({ category }: { category: Category }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link to={`/works/${category.slug}`} aria-label={`Открыть раздел «${category.title}»`} style={{ textDecoration: 'none', display: 'block' }}>
      <article className="cyber-card" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} style={{ overflow: 'hidden', height: '100%', transition: 'transform .3s ease, border-color .3s ease', transform: hovered ? 'translateY(-6px)' : 'none', borderColor: hovered ? `${category.accent}99` : undefined }}>
        <div className="work-img-wrap" style={{ height: '300px' }}>
          <img src={category.cover} alt={category.title} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: `brightness(${hovered ? '.9' : '.65'}) saturate(${hovered ? '1' : '.72'})`, transition: 'filter .4s ease, transform .6s ease', transform: hovered ? 'scale(1.05)' : 'scale(1)' }} />
          <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(180deg, transparent 35%, ${category.accent}33 100%)`, opacity: hovered ? 1 : .6, transition: 'opacity .3s ease' }} />
          <span style={{ position: 'absolute', top: '14px', left: '14px', padding: '5px 9px', fontFamily: 'Share Tech Mono, monospace', fontSize: '9px', letterSpacing: '1.5px', color: '#000', background: category.accent, boxShadow: `0 0 12px ${category.accent}` }}>{String(category.photos.length).padStart(2, '0')} ФОТО</span>
          <span style={{ position: 'absolute', right: '16px', bottom: '16px', fontFamily: 'Share Tech Mono, monospace', color: category.accent, fontSize: '12px', letterSpacing: '2px', textShadow: `0 0 10px ${category.accent}` }}>ОТКРЫТЬ →</span>
        </div>
        <div style={{ padding: '20px 22px 22px' }}>
          <h2 style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '16px', color: '#fff', letterSpacing: '1.5px', marginBottom: '10px' }}>{category.title}</h2>
          <p style={{ fontFamily: 'Rajdhani, sans-serif', color: 'rgba(224,224,224,.56)', fontSize: '15px', lineHeight: 1.45, margin: 0 }}>{category.description}</p>
        </div>
      </article>
    </Link>
  );
}

function WorksOverview() {
  return (
    <>
      <PageHeader title="НАШИ РАБОТЫ" detail="Выберите направление, чтобы посмотреть все проекты и детали исполнения." />
      <main style={{ maxWidth: '1280px', margin: '0 auto', padding: '48px 24px 72px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
          {CATEGORIES.map(category => <CategoryCard key={category.slug} category={category} />)}
        </div>
      </main>
    </>
  );
}

function CategoryGallery({ category }: { category: Category }) {
  const [activeGroup, setActiveGroup] = useState('ВСЕ ПРОЕКТЫ');
  const [hovered, setHovered] = useState<number | null>(null);
  const [selectedPhoto, setSelectedPhoto] = useState<WorkPhoto | null>(null);
  const groups = useMemo(() => ['ВСЕ ПРОЕКТЫ', ...new Set(category.photos.map(item => item.group))], [category.photos]);
  const photos = activeGroup === 'ВСЕ ПРОЕКТЫ' ? category.photos : category.photos.filter(item => item.group === activeGroup);

  useEffect(() => {
    if (!selectedPhoto) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedPhoto(null);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedPhoto]);

  return (
    <>
      <PageHeader title={category.title} detail={category.description} />
      <main style={{ maxWidth: '1280px', margin: '0 auto', padding: '30px 24px 72px' }}>
        <Link to="/works" style={{ display: 'inline-flex', marginBottom: '26px', fontFamily: 'Share Tech Mono, monospace', fontSize: '11px', letterSpacing: '1.5px', color: category.accent, textDecoration: 'none' }}>← ВСЕ КАТЕГОРИИ</Link>
        {groups.length > 2 && <nav aria-label="Подкатегории" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', paddingBottom: '30px' }}>
          {groups.map(group => <button key={group} onClick={() => setActiveGroup(group)} style={{ fontFamily: 'Share Tech Mono, monospace', fontSize: '10px', letterSpacing: '1.5px', padding: '9px 14px', background: activeGroup === group ? category.accent : 'transparent', color: activeGroup === group ? '#000' : `${category.accent}bb`, border: `1px solid ${activeGroup === group ? category.accent : `${category.accent}44`}`, boxShadow: activeGroup === group ? `0 0 15px ${category.accent}66` : 'none', cursor: 'pointer', transition: 'all .25s ease' }}>{group}</button>)}
        </nav>}
        <div style={{ columns: 'auto 280px', columnGap: '20px' }}>
          {photos.map((item, index) => <button type="button" key={item.img} className="cyber-card" onClick={() => setSelectedPhoto(item)} onMouseEnter={() => setHovered(index)} onMouseLeave={() => setHovered(null)} aria-label={`Увеличить: ${item.title}`} style={{ display: 'block', width: '100%', breakInside: 'avoid', overflow: 'hidden', marginBottom: '20px', padding: 0, textAlign: 'left', cursor: 'pointer', background: '#0a0a0a' }}>
            <div className="work-img-wrap" style={{ height: index % 4 === 0 ? '340px' : '245px' }}>
              <img src={item.img} alt={item.title} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: `brightness(${hovered === index ? '.95' : '.72'}) saturate(${hovered === index ? '.98' : '.7'})`, transition: 'filter .4s ease, transform .5s ease', transform: hovered === index ? 'scale(1.035)' : 'scale(1)' }} />
              <span style={{ position: 'absolute', top: '12px', left: '12px', padding: '4px 8px', fontFamily: 'Share Tech Mono, monospace', fontSize: '9px', letterSpacing: '1px', color: '#000', background: category.accent }}>{item.group}</span>
              <span style={{ position: 'absolute', right: '12px', bottom: '12px', padding: '5px 8px', fontFamily: 'Share Tech Mono, monospace', fontSize: '9px', letterSpacing: '1px', color: category.accent, border: `1px solid ${category.accent}88`, background: 'rgba(0,0,0,.68)', opacity: hovered === index ? 1 : 0, transition: 'opacity .25s ease' }}>УВЕЛИЧИТЬ</span>
            </div>
          </button>)}
        </div>
      </main>
      {selectedPhoto && createPortal(
        <div role="dialog" aria-modal="true" aria-label={`Просмотр: ${selectedPhoto.title}`} onClick={() => setSelectedPhoto(null)} style={{ position: 'fixed', inset: 0, zIndex: 9999, display: 'grid', placeItems: 'center', padding: '24px', overflow: 'auto', background: 'rgba(0,0,0,.9)', backdropFilter: 'blur(8px)' }}>
          <div onClick={event => event.stopPropagation()} style={{ position: 'relative', width: 'min(1100px, 100%)', maxHeight: 'calc(100dvh - 48px)', border: `1px solid ${category.accent}88`, background: '#080808', boxShadow: `0 0 36px ${category.accent}33` }}>
            <button type="button" onClick={() => setSelectedPhoto(null)} aria-label="Закрыть просмотр" style={{ position: 'absolute', zIndex: 1, top: '12px', right: '12px', width: '38px', height: '38px', border: `1px solid ${category.accent}`, background: '#050505', color: category.accent, fontFamily: 'Arial, sans-serif', fontSize: '27px', lineHeight: 1, cursor: 'pointer', boxShadow: `0 0 14px ${category.accent}55` }}>×</button>
            <img src={selectedPhoto.img} alt={selectedPhoto.title} style={{ display: 'block', width: '100%', maxHeight: 'calc(100dvh - 112px)', objectFit: 'contain', background: '#000' }} />
            <div style={{ padding: '12px 16px', fontFamily: 'Share Tech Mono, monospace', fontSize: '10px', letterSpacing: '1.5px', color: category.accent }}>{selectedPhoto.group} :: НАЖМИТЕ ESC ИЛИ КЛИКНИТЕ ВНЕ ФОТО, ЧТОБЫ ЗАКРЫТЬ</div>
          </div>
        </div>,
        document.body,
      )}
    </>
  );
}

export default function Works() {
  const { category: categorySlug } = useParams();
  const category = CATEGORIES.find(item => item.slug === categorySlug);

  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0a', paddingTop: '64px' }}>
      {categorySlug && !category ? <WorksOverview /> : category ? <CategoryGallery category={category} /> : <WorksOverview />}
      <section style={{ textAlign: 'center', padding: '56px 24px', borderTop: '1px solid rgba(0,255,255,.1)', background: '#000' }}>
        <div className="section-tag" style={{ marginBottom: '16px' }}>// REQUEST_YOUR_PROJECT</div>
        <h2 style={{ fontFamily: 'Orbitron, sans-serif', fontWeight: 900, fontSize: 'clamp(1.4rem, 3vw, 2.2rem)', color: '#fff', marginBottom: '24px', textTransform: 'uppercase', letterSpacing: '2px' }}>Обсудим ваш проект?</h2>
        <Link to="/contacts" className="btn-cyber">ОБСУДИТЬ ПРОЕКТ</Link>
      </section>
    </div>
  );
}
