import { Link } from 'react-router-dom';

const TEAM = [
  { name: 'Иван Стальнов', role: 'Главный сварщик', exp: '12 лет опыта', color: '#00FFFF' },
  { name: 'Дмитрий Кузин', role: 'Дизайнер-технолог', exp: '8 лет опыта', color: '#FFD700' },
  { name: 'Алексей Форж', role: 'Руководитель проектов', exp: '10 лет опыта', color: '#FF00FF' },
  { name: 'Сергей Металлин', role: 'Мастер-краснодеревщик', exp: '15 лет опыта', color: '#00FFFF' },
];

const REVIEWS = [
  {
    name: 'Анна К.',
    project: 'Кровать из металла',
    text: 'Заказала кровать. Цена подошла, ниже чем в других местах. Прождали почти 3 недели, но результатом остались очень довольны!',
    rating: 5,
  },
  {
    name: 'Михаил Р.',
    project: 'Перегородка лофт',
    text: 'В квартиру нужна была межкомнатная перегородка в стиле Лофт. Коллектив молодые активные ребята справились на отлично. Вышло не дорого и замечательного качества.',
    rating: 5,
  },
  {
    name: 'Юлия Т.',
    project: 'Мебель для ванной',
    text: 'Заказывали комплект в ванную комнату — шкаф и комод под раковину. Приемлемые цены, качество 10 из 10, всё в оговоренные сроки!',
    rating: 5,
  },
  {
    name: 'Сервис «Прайд»',
    project: 'Мебель барбершопа',
    text: 'Менеджеры очень отзывчивые и помогают решить практически любой вопрос. Понравилось человеческое отношение и скорость работы.',
    rating: 5,
  },
  {
    name: 'Семья Новиковых',
    project: 'Комплект мебели',
    text: 'Заказывали комплект мебели со встроенным подоконником. Сделали красиво и качественно — претензий нет, ребята молодцы.',
    rating: 5,
  },
  {
    name: 'Павел М.',
    project: 'Стеллажи для магазина',
    text: 'Перепробовали несколько вариантов, прежде чем обратиться сюда. Ни разу не пожалели! Теперь советуем всем своим друзьям.',
    rating: 5,
  },
];

export default function About() {
  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0a', paddingTop: '64px' }}>

      {/* Page Header */}
      <div style={{
        position: 'relative',
        padding: '60px 24px 50px',
        textAlign: 'center',
        overflow: 'hidden',
        borderBottom: '1px solid rgba(255,0,255,0.1)',
        background: 'linear-gradient(180deg, #000 0%, #0a0a0a 100%)',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(255,0,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,0,255,0.02) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          pointerEvents: 'none',
        }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-tag" style={{ marginBottom: '12px' }}>// ABOUT_PROTOCOL :: INITIALIZED</div>
          <h1 className="section-title glitch" data-text="О НАС" style={{
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            color: '#FF00FF',
            textShadow: '0 0 40px rgba(255,0,255,0.4)',
            marginBottom: '16px',
          }}>
            О НАС
          </h1>
          <p style={{
            fontFamily: 'Rajdhani, sans-serif',
            color: 'rgba(224,224,224,0.5)',
            fontSize: '16px',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.7',
          }}>
            Мы — команда профессионалов, которые превращают металл и дерево в произведения искусства.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '80px 24px' }}>

        {/* Main About Block */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '60px',
          marginBottom: '100px',
          alignItems: 'center',
        }}>
          {/* Text */}
          <div>
            <div className="section-tag" style={{ marginBottom: '12px' }}>// IDENTITY_FILE</div>
            <h2 className="section-title" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', color: '#fff', marginBottom: '24px' }}>
              STEMI <span className="neon-magenta">CUSTOM</span>
            </h2>
            {[
              'Компания STEMI CUSTOM — это мастерская, где металл обретает форму. Мы специализируемся на изготовлении мебели, дверей и конструкций в стилях лофт, индастриал и стимпанк.',
              'Наше собственное производство расположено в Московской области (г. Подольск). Здесь работают настоящие мастера своего дела — люди, которые не просто делают свою работу, а вкладывают душу в каждое изделие.',
              'Мы работаем без выходных, постоянно разрабатываем новые идеи и внедряем современные решения. Каждый заказ — уникальный вызов, который мы принимаем с удовольствием.',
              'Вы приходите к нам с идеей — мы воплощаем её в металле. От концепта до установки — всё в наших руках.',
            ].map((p, i) => (
              <p key={i} style={{
                fontFamily: 'Rajdhani, sans-serif',
                color: 'rgba(224,224,224,0.65)',
                fontSize: '16px',
                lineHeight: '1.8',
                marginBottom: '16px',
                paddingLeft: '16px',
                borderLeft: `2px solid ${['#00FFFF', '#FFD700', '#FF00FF', '#00FFFF'][i]}40`,
              }}>
                {p}
              </p>
            ))}
          </div>

          {/* Visual block */}
          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'relative',
              border: '1px solid rgba(0,255,255,0.2)',
              padding: '40px',
              background: 'rgba(0,0,0,0.5)',
            }}>
              {/* Corner decorations */}
              <div className="corner-tl" />
              <div className="corner-tr" />
              <div className="corner-bl" />
              <div className="corner-br" />

              <div style={{
                fontFamily: 'Share Tech Mono, monospace',
                fontSize: '11px',
                color: 'rgba(0,255,255,0.4)',
                letterSpacing: '2px',
                marginBottom: '24px',
              }}>
                &gt; COMPANY_PROFILE.exe
              </div>

              {[
                { label: 'Основана', value: '2017', color: '#FFD700' },
                { label: 'Локация', value: 'МО, Подольск', color: '#00FFFF' },
                { label: 'Специализация', value: 'Metal & Wood', color: '#FF00FF' },
                { label: 'Проектов выполнено', value: '500+', color: '#FFD700' },
                { label: 'Мастеров в команде', value: '12', color: '#00FFFF' },
                { label: 'Режим работы', value: 'Пн–Пт 10:00–19:00', color: '#FF00FF' },
                { label: 'Доставка', value: 'По всей России', color: '#FFD700' },
                { label: 'Гарантия', value: '12 месяцев', color: '#00FFFF' },
              ].map((row, i) => (
                <div key={i} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '10px 0',
                  borderBottom: '1px solid rgba(255,255,255,0.04)',
                  fontFamily: 'Rajdhani, sans-serif',
                  fontSize: '14px',
                }}>
                  <span style={{ color: 'rgba(224,224,224,0.4)', letterSpacing: '1px' }}>{row.label}</span>
                  <span style={{ color: row.color, textShadow: `0 0 6px ${row.color}`, fontFamily: 'Share Tech Mono, monospace', fontSize: '12px' }}>{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Workshop Photos */}
        <div style={{ marginBottom: '100px' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <div className="section-tag" style={{ marginBottom: '12px' }}>// WORKSHOP_FOOTAGE</div>
            <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)', color: '#fff' }}>
              НАША <span className="neon-cyan">МАСТЕРСКАЯ</span>
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
            gap: '16px',
          }}>
            {[
              { img: 'https://images.pexels.com/photos/13296053/pexels-photo-13296053.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600', title: 'Сварочные работы' },
              { img: 'https://images.pexels.com/photos/37517094/pexels-photo-37517094.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600', title: 'Производственный цех' },
              { img: 'https://images.pexels.com/photos/37517098/pexels-photo-37517098.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600', title: 'Точность исполнения' },
              { img: 'https://images.pexels.com/photos/5846282/pexels-photo-5846282.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600', title: 'Мастер за работой' },
              { img: 'https://images.pexels.com/photos/30180598/pexels-photo-30180598.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600', title: 'Ручная сварка' },
              { img: 'https://images.pexels.com/photos/29960487/pexels-photo-29960487.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600', title: 'Газовая резка' },
            ].map((photo, i) => (
              <div key={i} className="cyber-card work-img-wrap" style={{ height: '200px' }}>
                <img
                  src={photo.img}
                  alt={photo.title}
                  loading="lazy"
                  style={{
                    width: '100%', height: '100%', objectFit: 'cover',
                    filter: 'brightness(0.7) saturate(0.5)',
                    transition: 'all 0.4s ease',
                  }}
                  onMouseEnter={e => (e.target as HTMLElement).style.filter = 'brightness(0.9) saturate(0.8)'}
                  onMouseLeave={e => (e.target as HTMLElement).style.filter = 'brightness(0.7) saturate(0.5)'}
                />
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  padding: '12px',
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                  fontFamily: 'Share Tech Mono, monospace',
                  fontSize: '10px',
                  color: '#00FFFF',
                  letterSpacing: '2px',
                }}>
                  &gt; {photo.title.toUpperCase()}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div style={{ marginBottom: '100px' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <div className="section-tag" style={{ marginBottom: '12px' }}>// TEAM_ROSTER</div>
            <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)', color: '#fff' }}>
              НАША <span className="neon-yellow">КОМАНДА</span>
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '24px',
          }}>
            {TEAM.map((member, i) => (
              <div key={i} className="cyber-card" style={{ padding: '32px 24px', textAlign: 'center' }}>
                {/* Avatar placeholder */}
                <div style={{
                  width: '80px', height: '80px',
                  margin: '0 auto 20px',
                  border: `1px solid ${member.color}`,
                  boxShadow: `0 0 16px ${member.color}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '32px',
                  clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                  background: `${member.color}08`,
                }}>
                  👷
                </div>
                <div style={{
                  fontFamily: 'Orbitron, sans-serif',
                  fontSize: '13px',
                  fontWeight: 700,
                  color: '#fff',
                  letterSpacing: '1px',
                  marginBottom: '8px',
                }}>
                  {member.name}
                </div>
                <div style={{
                  fontFamily: 'Share Tech Mono, monospace',
                  fontSize: '10px',
                  color: member.color,
                  textShadow: `0 0 6px ${member.color}`,
                  letterSpacing: '2px',
                  marginBottom: '8px',
                  textTransform: 'uppercase',
                }}>
                  {member.role}
                </div>
                <div style={{
                  fontFamily: 'Rajdhani, sans-serif',
                  fontSize: '13px',
                  color: 'rgba(224,224,224,0.4)',
                  letterSpacing: '1px',
                }}>
                  {member.exp}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews */}
        <div>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <div className="section-tag" style={{ marginBottom: '12px' }}>// CLIENT_FEEDBACK_LOG</div>
            <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)', color: '#fff' }}>
              ОТЗЫВЫ <span className="neon-magenta">КЛИЕНТОВ</span>
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
          }}>
            {REVIEWS.map((review, i) => {
              const colors = ['#00FFFF', '#FFD700', '#FF00FF'];
              const color = colors[i % 3];
              return (
                <div key={i} className="cyber-card" style={{ padding: '28px 24px' }}>
                  {/* Stars */}
                  <div style={{ marginBottom: '16px', color: '#FFD700', textShadow: '0 0 6px #FFD700', fontSize: '14px', letterSpacing: '2px' }}>
                    {'★'.repeat(review.rating)}
                  </div>
                  <p style={{
                    fontFamily: 'Rajdhani, sans-serif',
                    color: 'rgba(224,224,224,0.7)',
                    fontSize: '15px',
                    lineHeight: '1.7',
                    marginBottom: '20px',
                    fontStyle: 'italic',
                  }}>
                    "{review.text}"
                  </p>
                  <div style={{
                    borderTop: `1px solid ${color}20`,
                    paddingTop: '16px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                  }}>
                    <div style={{
                      fontFamily: 'Orbitron, sans-serif',
                      fontSize: '12px',
                      fontWeight: 700,
                      color: '#fff',
                      letterSpacing: '1px',
                    }}>
                      {review.name}
                    </div>
                    <div style={{
                      fontFamily: 'Share Tech Mono, monospace',
                      fontSize: '10px',
                      color: color,
                      textShadow: `0 0 6px ${color}`,
                      letterSpacing: '1px',
                    }}>
                      {review.project}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{
        textAlign: 'center',
        padding: '60px 24px',
        borderTop: '1px solid rgba(255,0,255,0.1)',
        background: '#000',
      }}>
        <Link to="/contacts" className="btn-cyber">
          Начать проект
        </Link>
      </div>
    </div>
  );
}
