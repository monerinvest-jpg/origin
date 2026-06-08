import { Link } from 'react-router-dom';

const SERVICES = [
  {
    cat: 'МЕБЕЛЬ',
    color: '#00FFFF',
    items: [
      { title: 'Мебель для фитнес-клуба', desc: 'Вся мебель под ключ — стойки, лавки, стеллажи, вешалки', price: 'от 40 000 ₽', img: 'https://m-files.cdn1.cc/lpfile/8/e/7/8e7ff29cc7fbf0a089ede2649d0e3e8b/-/resize/800/f.jpg' },
      { title: 'Мебель для клуба единоборств', desc: 'Современное стильное решение из металла и дерева', price: 'от 20 000 ₽', img: 'https://m-files.cdn1.cc/lpfile/b/3/a/b3a6f64c13081234e61808d91cf66d59/-/resize/800/f.jpg' },
      { title: 'Мебель для салона красоты', desc: 'Из нержавеющей или чёрной стали любой конфигурации', price: 'от 25 000 ₽', img: 'https://m-files.cdn1.cc/lpfile/4/e/4/4e46e7a53c63102cdb38121820b93888/-/resize/800/f.jpg' },
      { title: 'Мебель для кальянных и кафе', desc: 'Стулья, столы, стеллажи, ресепшен — всё под ключ', price: 'от 8 000 ₽', img: 'https://m-files.cdn1.cc/lpfile/9/f/8/9f854029994b61a8ed5a09235a8e7174/-/resize/800/f.jpg' },
      { title: 'Рабочее место Индастриал', desc: 'Комбинация металла и дерева, настраивается под запрос', price: 'от 10 000 ₽/МП', img: 'https://m-files.cdn1.cc/lpfile/2/3/8/23855b6f69f4f9262820355816755d67/-/resize/800/f.jpg' },
      { title: 'Мебель для барбершопа', desc: 'Ресепшен, стеллажи, зеркала, рабочие места — всё под ключ', price: 'от 300 000 ₽', img: 'https://m-files.cdn1.cc/lpfile/3/c/9/3c9a307afbcd62076afb9484b0559d0c/-/resize/800/f.jpg' },
      { title: 'Мебель для общественных мест', desc: 'Надёжная и недорогая мебель для любых пространств', price: 'от 7 000 ₽', img: 'https://m-files.cdn1.cc/lpfile/5/2/3/523db421ba1a0b733fd96d524b136a8b/-/resize/800/f.jpg' },
      { title: 'Подстолье Индастриал', desc: 'Брутальные конструкции под любую столешницу', price: 'от 15 000 ₽', img: 'https://m-files.cdn1.cc/lpfile/2/0/b/20b0239d5b3091105da2f99e43ff36dd/-/resize/800/f.jpg' },
      { title: 'Подстолья и опоры для стола', desc: 'Изготавливаем по вашему макету или чертежу', price: 'от 8 000 ₽', img: 'https://m-files.cdn1.cc/lpfile/6/0/c/60cb88126ee8781963701a9173c426a0/-/resize/800/f.jpg' },
      { title: 'Мебель из массива', desc: 'Дуб, ясень, карагач, клён — в сочетании с металлом', price: 'от 12 000 ₽', img: 'https://m-files.cdn1.cc/lpfile/7/1/e/71eb24dbe8a23d0f0c6a190dcf0d2ae7/-/resize/800/f.jpg' },
    ]
  },
  {
    cat: 'ДВЕРИ',
    color: '#FFD700',
    items: [
      { title: 'Комбинированные двери', desc: 'Из металла и дерева — распашные и амбарные', price: 'от 35 000 ₽', img: 'https://m-files.cdn1.cc/lpfile/a/1/4/a149bae01c7514d93a85327774c8f8b2/-/resize/800/f.jpg' },
      { title: 'Двери для бара', desc: 'С любыми табличками и брендингом', price: 'от 42 000 ₽', img: 'https://m-files.cdn1.cc/lpfile/0/f/8/0f8a5c8371b8ac5e550567ab532c7e1a/-/resize/800/f.jpg' },
      { title: 'Металлическая дверь Стимпанк', desc: 'Брутальное решение с декоративными элементами', price: 'от 55 000 ₽', img: 'https://m-files.cdn1.cc/lpfile/2/8/9/28948d4ff3e1cf3eae8af80d7ef90ce9/-/resize/800/f.jpg' },
      { title: 'Двери для детских комнат', desc: 'Яркие, безопасные, нестандартные решения', price: 'от 65 000 ₽', img: 'https://m-files.cdn1.cc/lpfile/7/d/9/7d94f49f7900882d6bacc47bff05df3e/-/resize/800/f.jpg' },
      { title: 'Двери для туалета', desc: 'Креативные двери со значками и рисунками', price: 'от 50 000 ₽', img: 'https://m-files.cdn1.cc/lpfile/a/0/6/a06c881e7f492701cb8fa75b7d2ed52d/-/resize/800/f.jpg' },
    ]
  },
  {
    cat: 'ОГРАЖДЕНИЯ И ПЕРЕГОРОДКИ',
    color: '#FF00FF',
    items: [
      { title: 'Ограждение для картинг-трасс', desc: 'Изготовление по ГОСТ, любые конфигурации', price: 'от 5 000 ₽/МП', img: 'https://m-files.cdn1.cc/lpfile/0/1/5/015b491aadc24393428629468e43a59b/-/resize/800/f.jpg' },
      { title: 'Ограждение из сетки ПВЛ', desc: 'Различные вариации сетки под ваш бюджет', price: 'от 7 000 ₽/МП', img: 'https://m-files.cdn1.cc/lpfile/c/1/4/c1491c499c4de93a865c738a530653a1/-/resize/800/f.jpg' },
      { title: 'Изделия для спортплощадок', desc: 'Ворота, кольца, борты и прочее оборудование', price: 'от 10 000 ₽', img: 'https://m-files.cdn1.cc/lpfile/2/3/9/23926119d30562611273ffab452a4b6b/-/resize/800/f.jpg' },
      { title: 'Художественные перегородки', desc: 'Любое исполнение по вашему запросу', price: 'от 4 000 ₽/м²', img: 'https://m-files.cdn1.cc/lpfile/d/2/7/d27ceda1b9dbf5575b3bbbce992b6a6a/-/resize/800/f.jpg' },
      { title: 'Перегородки из сетки и перфолиста', desc: 'Подберём подходящий по дизайну и бюджету материал', price: 'от 5 000 ₽/м²', img: 'https://m-files.cdn1.cc/lpfile/e/a/a/eaa3648a866e111ee7596a66a326492f/-/resize/800/f.jpg' },
      { title: 'Перегородки из стекла', desc: 'Стационарные, распашные, откатные — любое стекло', price: 'от 11 000 ₽/м²', img: 'https://m-files.cdn1.cc/lpfile/9/a/e/9ae0972f1a187afd460a3768913f2c77/-/resize/800/f.jpg' },
    ]
  },
  {
    cat: 'МЕТАЛЛОКОНСТРУКЦИИ И ПРОЧЕЕ',
    color: '#00FFFF',
    items: [
      { title: 'Оборудование для магазина', desc: 'Вешала, полки, стеллажи для магазина одежды', price: 'от 8 000 ₽', img: 'https://m-files.cdn1.cc/lpfile/8/f/b/8fbfd802712a03704ce89147dbb08537/-/resize/800/f.jpg' },
      { title: 'Металлоконструкции', desc: 'Конструкции любого назначения и сложности', price: 'от 8 000 ₽', img: 'https://m-files.cdn1.cc/lpfile/2/0/8/2085125ea54c80ee852cdcd5042ed262/-/resize/800/f.jpg' },
      { title: 'Художественная работа', desc: 'Реализация дизайнерских проектов любой сложности', price: 'от 8 000 ₽', img: 'https://m-files.cdn1.cc/lpfile/d/3/b/d3beab66aafa9ea2b102dda433791def/-/resize/800/f.jpg' },
    ]
  },
];

export default function Services() {
  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0a', paddingTop: '64px' }}>

      {/* Page Header */}
      <div style={{
        position: 'relative',
        padding: '60px 24px 50px',
        textAlign: 'center',
        overflow: 'hidden',
        borderBottom: '1px solid rgba(0,255,255,0.1)',
        background: 'linear-gradient(180deg, #000 0%, #0a0a0a 100%)',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(0,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          pointerEvents: 'none',
        }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-tag" style={{ marginBottom: '12px' }}>// SERVICES_CATALOGUE :: v2.0</div>
          <h1 className="section-title glitch" data-text="УСЛУГИ" style={{
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            color: '#FFD700',
            textShadow: '0 0 40px rgba(255,215,0,0.4)',
            marginBottom: '16px',
          }}>
            УСЛУГИ
          </h1>
          <p style={{
            fontFamily: 'Rajdhani, sans-serif',
            color: 'rgba(224,224,224,0.5)',
            fontSize: '16px',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.7',
            letterSpacing: '0.5px',
          }}>
            Полный каталог продукции. Каждый проект — индивидуальный подход и точное исполнение.
          </p>
        </div>
      </div>

      {/* Services by category */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '60px 24px' }}>
        {SERVICES.map((cat, ci) => (
          <div key={ci} style={{ marginBottom: '80px' }}>
            {/* Category header */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '32px',
            }}>
              <div style={{
                fontFamily: 'Orbitron, sans-serif',
                fontSize: '12px',
                letterSpacing: '4px',
                color: cat.color,
                textShadow: `0 0 10px ${cat.color}`,
                whiteSpace: 'nowrap',
              }}>
                // {cat.cat}
              </div>
              <div style={{
                flex: 1, height: '1px',
                background: `linear-gradient(90deg, ${cat.color}, transparent)`,
                boxShadow: `0 0 6px ${cat.color}`,
                opacity: 0.4,
              }} />
            </div>

            {/* Items grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '20px',
            }}>
              {cat.items.map((item, i) => (
                <div key={i} className="cyber-card" style={{ overflow: 'hidden' }}>
                  {/* Image */}
                  <div className="work-img-wrap" style={{ height: '180px' }}>
                    <img
                      src={item.img}
                      alt={item.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.8) saturate(0.7)' }}
                      loading="lazy"
                    />
                    {/* Color overlay on hover */}
                    <div style={{
                      position: 'absolute', inset: 0,
                      background: `linear-gradient(135deg, ${cat.color}15, transparent)`,
                    }} />
                  </div>

                  {/* Content */}
                  <div style={{ padding: '20px' }}>
                    <h3 style={{
                      fontFamily: 'Orbitron, sans-serif',
                      fontSize: '12px',
                      fontWeight: 700,
                      color: '#fff',
                      letterSpacing: '1px',
                      marginBottom: '8px',
                      textTransform: 'uppercase',
                    }}>
                      {item.title}
                    </h3>
                    <p style={{
                      fontFamily: 'Rajdhani, sans-serif',
                      color: 'rgba(224,224,224,0.55)',
                      fontSize: '14px',
                      lineHeight: '1.5',
                      marginBottom: '16px',
                    }}>
                      {item.desc}
                    </p>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      borderTop: `1px solid ${cat.color}1a`,
                      paddingTop: '12px',
                    }}>
                      <span style={{
                        fontFamily: 'Share Tech Mono, monospace',
                        fontSize: '13px',
                        color: '#FFD700',
                        textShadow: '0 0 8px #FFD700',
                        letterSpacing: '1px',
                      }}>
                        {item.price}
                      </span>
                      <Link to="/contacts" style={{
                        fontFamily: 'Share Tech Mono, monospace',
                        fontSize: '10px',
                        color: cat.color,
                        textDecoration: 'none',
                        letterSpacing: '2px',
                        border: `1px solid ${cat.color}`,
                        padding: '4px 10px',
                        boxShadow: `0 0 6px ${cat.color}`,
                        transition: 'all 0.3s ease',
                      }}
                        onMouseEnter={e => {
                          (e.currentTarget as HTMLElement).style.background = cat.color;
                          (e.currentTarget as HTMLElement).style.color = '#000';
                        }}
                        onMouseLeave={e => {
                          (e.currentTarget as HTMLElement).style.background = 'transparent';
                          (e.currentTarget as HTMLElement).style.color = cat.color;
                        }}
                      >
                        ЗАКАЗАТЬ
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Process section */}
      <section style={{
        background: '#000',
        borderTop: '1px solid rgba(0,255,255,0.1)',
        borderBottom: '1px solid rgba(0,255,255,0.1)',
        padding: '80px 24px',
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div className="section-tag" style={{ marginBottom: '12px' }}>// WORKFLOW_SEQUENCE</div>
            <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)', color: '#fff' }}>
              КАК МЫ <span className="neon-cyan">РАБОТАЕМ</span>
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '0',
            position: 'relative',
          }}>
            {[
              { step: '01', title: 'Заявка', desc: 'Оставьте запрос на сайте или позвоните нам', color: '#00FFFF' },
              { step: '02', title: 'Консультация', desc: 'Обсуждаем детали, размеры, материалы и стоимость', color: '#FFD700' },
              { step: '03', title: 'Договор', desc: 'Фиксируем объём работ, сроки и порядок оплаты', color: '#FF00FF' },
              { step: '04', title: 'Производство', desc: 'Изготовление на собственном оборудовании', color: '#00FFFF' },
              { step: '05', title: 'Доставка', desc: 'Доставка по России или самовывоз с производства', color: '#FFD700' },
            ].map((s, i) => (
              <div key={i} style={{
                padding: '32px 24px',
                borderLeft: i > 0 ? '1px solid rgba(0,255,255,0.08)' : 'none',
                position: 'relative',
                textAlign: 'center',
              }}>
                <div style={{
                  fontFamily: 'Orbitron, sans-serif',
                  fontSize: '48px',
                  fontWeight: 900,
                  color: `${s.color}15`,
                  lineHeight: 1,
                  marginBottom: '16px',
                }}>
                  {s.step}
                </div>
                <div style={{
                  width: '40px', height: '40px',
                  border: `1px solid ${s.color}`,
                  boxShadow: `0 0 12px ${s.color}`,
                  borderRadius: '50%',
                  margin: '0 auto 16px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'Share Tech Mono, monospace',
                  fontSize: '11px',
                  color: s.color,
                  textShadow: `0 0 8px ${s.color}`,
                }}>
                  {s.step}
                </div>
                <h3 style={{
                  fontFamily: 'Orbitron, sans-serif',
                  fontSize: '12px',
                  fontWeight: 700,
                  color: s.color,
                  textShadow: `0 0 8px ${s.color}`,
                  letterSpacing: '2px',
                  marginBottom: '10px',
                  textTransform: 'uppercase',
                }}>
                  {s.title}
                </h3>
                <p style={{
                  fontFamily: 'Rajdhani, sans-serif',
                  color: 'rgba(224,224,224,0.5)',
                  fontSize: '14px',
                  lineHeight: '1.6',
                }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
