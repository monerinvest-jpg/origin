import { useState } from 'react';

export default function Contacts() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '', service: '' });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [terminalLines, setTerminalLines] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTerminalLines([]);

    const lines = [
      '> Инициализация протокола отправки...',
      `> Имя: ${form.name || 'UNDEFINED'}`,
      `> Телефон: ${form.phone || 'UNDEFINED'}`,
      `> Email: ${form.email || 'UNDEFINED'}`,
      `> Услуга: ${form.service || 'НЕ УКАЗАНА'}`,
      '> Шифрование данных... [AES-256]',
      '> Подключение к серверу... [OK]',
      '> Отправка заявки...',
      '> УСПЕШНО! Ожидайте звонка менеджера.',
    ];

    lines.forEach((line, i) => {
      setTimeout(() => {
        setTerminalLines(prev => [...prev, line]);
        if (i === lines.length - 1) {
          setTimeout(() => {
            setSending(false);
            setSubmitted(true);
          }, 500);
        }
      }, i * 250);
    });
  };

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
          <div className="section-tag" style={{ marginBottom: '12px' }}>// CONTACT_NODE :: OPEN</div>
          <h1 className="section-title glitch" data-text="КОНТАКТЫ" style={{
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            color: '#00FFFF',
            textShadow: '0 0 40px rgba(0,255,255,0.4)',
            marginBottom: '16px',
          }}>
            КОНТАКТЫ
          </h1>
          <p style={{
            fontFamily: 'Rajdhani, sans-serif',
            color: 'rgba(224,224,224,0.5)',
            fontSize: '16px',
            maxWidth: '500px',
            margin: '0 auto',
            lineHeight: '1.7',
          }}>
            Оставьте заявку — и мы свяжемся с вами в течение 1 часа.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '60px 24px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '60px',
        }}>

          {/* Contact Info */}
          <div>
            <div className="section-tag" style={{ marginBottom: '20px' }}>// CONNECTION_POINTS</div>

            {/* Contact cards */}
            {[
              {
                icon: '📞',
                label: 'Телефон',
                value: '+7 (985) 123-45-67',
                sub: 'Пн–Пт: 10:00–19:00',
                color: '#FFD700',
                href: 'tel:+79851234567',
              },
              {
                icon: '✉️',
                label: 'Email',
                value: 'info@stemicustom.ru',
                sub: 'Ответим в течение 2 часов',
                color: '#00FFFF',
                href: 'mailto:info@stemicustom.ru',
              },
              {
                icon: '📍',
                label: 'Адрес производства',
                value: 'МО, г. Подольск',
                sub: 'дер. Малое Брянцево, ул. Полевая',
                color: '#FF00FF',
                href: null,
              },
              {
                icon: '⏰',
                label: 'Режим работы',
                value: 'Понедельник–Пятница',
                sub: '10:00 до 19:00',
                color: '#FFD700',
                href: null,
              },
            ].map((item, i) => (
              <div key={i} style={{
                display: 'flex',
                gap: '20px',
                padding: '24px',
                marginBottom: '16px',
                background: 'rgba(0,0,0,0.5)',
                border: `1px solid ${item.color}20`,
                boxShadow: `0 0 10px ${item.color}05`,
                position: 'relative',
                clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)',
                transition: 'all 0.3s ease',
              }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = `${item.color}60`;
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 0 20px ${item.color}15`;
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = `${item.color}20`;
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 0 10px ${item.color}05`;
                }}
              >
                <div style={{
                  width: '48px', height: '48px',
                  border: `1px solid ${item.color}`,
                  boxShadow: `0 0 10px ${item.color}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '20px',
                  flexShrink: 0,
                }}>
                  {item.icon}
                </div>
                <div>
                  <div style={{
                    fontFamily: 'Share Tech Mono, monospace',
                    fontSize: '9px',
                    letterSpacing: '3px',
                    color: item.color,
                    textShadow: `0 0 6px ${item.color}`,
                    textTransform: 'uppercase',
                    marginBottom: '6px',
                  }}>
                    [{item.label}]
                  </div>
                  {item.href ? (
                    <a href={item.href} style={{
                      fontFamily: 'Orbitron, sans-serif',
                      fontSize: '14px',
                      fontWeight: 600,
                      color: '#fff',
                      textDecoration: 'none',
                      display: 'block',
                      marginBottom: '4px',
                      letterSpacing: '1px',
                    }}>
                      {item.value}
                    </a>
                  ) : (
                    <div style={{
                      fontFamily: 'Orbitron, sans-serif',
                      fontSize: '13px',
                      fontWeight: 600,
                      color: '#fff',
                      letterSpacing: '1px',
                      marginBottom: '4px',
                    }}>
                      {item.value}
                    </div>
                  )}
                  <div style={{
                    fontFamily: 'Rajdhani, sans-serif',
                    color: 'rgba(224,224,224,0.4)',
                    fontSize: '13px',
                    letterSpacing: '0.5px',
                  }}>
                    {item.sub}
                  </div>
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div style={{ marginTop: '32px' }}>
              <div style={{
                fontFamily: 'Share Tech Mono, monospace',
                fontSize: '9px',
                letterSpacing: '3px',
                color: '#FF00FF',
                textShadow: '0 0 6px #FF00FF',
                marginBottom: '16px',
              }}>
                // SOCIAL_NETWORK_NODES
              </div>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                {[
                  { label: 'ВКонтакте', icon: 'VK', color: '#00FFFF', href: '#' },
                  { label: 'Telegram', icon: 'TG', color: '#00FFFF', href: '#' },
                  { label: 'WhatsApp', icon: 'WA', color: '#FFD700', href: '#' },
                  { label: 'YouTube', icon: 'YT', color: '#FF00FF', href: '#' },
                ].map(s => (
                  <a
                    key={s.label}
                    href={s.href}
                    title={s.label}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '8px',
                      padding: '8px 16px',
                      border: `1px solid ${s.color}40`,
                      boxShadow: `0 0 8px ${s.color}15`,
                      color: s.color,
                      textDecoration: 'none',
                      fontFamily: 'Share Tech Mono, monospace',
                      fontSize: '11px',
                      letterSpacing: '1px',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.background = s.color;
                      (e.currentTarget as HTMLElement).style.color = '#000';
                      (e.currentTarget as HTMLElement).style.boxShadow = `0 0 16px ${s.color}`;
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.background = 'transparent';
                      (e.currentTarget as HTMLElement).style.color = s.color;
                      (e.currentTarget as HTMLElement).style.boxShadow = `0 0 8px ${s.color}15`;
                    }}
                  >
                    <span style={{ fontWeight: 700 }}>{s.icon}</span>
                    <span>{s.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            <div className="section-tag" style={{ marginBottom: '20px' }}>// SUBMIT_REQUEST_FORM</div>

            {submitted ? (
              <div style={{
                padding: '48px 32px',
                border: '1px solid #00FFFF',
                boxShadow: '0 0 30px rgba(0,255,255,0.15)',
                textAlign: 'center',
                background: 'rgba(0,0,0,0.6)',
              }}>
                <div style={{ fontSize: '48px', marginBottom: '20px' }}>✅</div>
                <h3 style={{
                  fontFamily: 'Orbitron, sans-serif',
                  fontSize: '18px',
                  fontWeight: 700,
                  color: '#00FFFF',
                  textShadow: '0 0 16px #00FFFF',
                  letterSpacing: '3px',
                  marginBottom: '16px',
                  textTransform: 'uppercase',
                }}>
                  Заявка отправлена!
                </h3>
                <p style={{
                  fontFamily: 'Rajdhani, sans-serif',
                  color: 'rgba(224,224,224,0.7)',
                  fontSize: '16px',
                  lineHeight: '1.7',
                  marginBottom: '24px',
                }}>
                  Наш специалист свяжется с вами в течение 1 часа в рабочее время.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', email: '', message: '', service: '' }); setTerminalLines([]); }}
                  className="btn-cyber btn-cyber-cyan"
                  style={{ border: 'none' }}
                >
                  Отправить ещё
                </button>
              </div>
            ) : (
              <div style={{
                background: 'rgba(0,0,0,0.6)',
                border: '1px solid rgba(0,255,255,0.15)',
                padding: '40px 32px',
                position: 'relative',
              }}>
                {/* Corner decorations */}
                <div className="corner-tl" />
                <div className="corner-tr" />
                <div className="corner-bl" />
                <div className="corner-br" />

                {/* Terminal output during sending */}
                {sending && (
                  <div style={{
                    marginBottom: '24px',
                    padding: '16px',
                    background: '#000',
                    border: '1px solid rgba(0,255,255,0.2)',
                    fontFamily: 'Share Tech Mono, monospace',
                    fontSize: '12px',
                    lineHeight: '1.8',
                    maxHeight: '200px',
                    overflowY: 'auto',
                  }}>
                    {terminalLines.map((line, i) => (
                      <div key={i} style={{
                        color: i === terminalLines.length - 1 ? '#FFD700' : '#00FFFF',
                        opacity: 1,
                        animation: 'terminalReveal 0.1s ease forwards',
                      }}>
                        {line}
                      </div>
                    ))}
                    <span className="terminal-cursor" />
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div style={{ marginBottom: '20px' }}>
                    <label style={{
                      display: 'block',
                      fontFamily: 'Share Tech Mono, monospace',
                      fontSize: '10px',
                      letterSpacing: '3px',
                      color: '#00FFFF',
                      textShadow: '0 0 6px #00FFFF',
                      marginBottom: '8px',
                    }}>
                      &gt; ИМЯ *
                    </label>
                    <input
                      className="cyber-input"
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Ваше имя"
                      required
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
                    <div>
                      <label style={{
                        display: 'block',
                        fontFamily: 'Share Tech Mono, monospace',
                        fontSize: '10px',
                        letterSpacing: '3px',
                        color: '#FFD700',
                        textShadow: '0 0 6px #FFD700',
                        marginBottom: '8px',
                      }}>
                        &gt; ТЕЛЕФОН *
                      </label>
                      <input
                        className="cyber-input"
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+7 (___) ___-__-__"
                        required
                      />
                    </div>
                    <div>
                      <label style={{
                        display: 'block',
                        fontFamily: 'Share Tech Mono, monospace',
                        fontSize: '10px',
                        letterSpacing: '3px',
                        color: '#FF00FF',
                        textShadow: '0 0 6px #FF00FF',
                        marginBottom: '8px',
                      }}>
                        &gt; EMAIL
                      </label>
                      <input
                        className="cyber-input"
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="mail@example.com"
                      />
                    </div>
                  </div>

                  <div style={{ marginBottom: '20px' }}>
                    <label style={{
                      display: 'block',
                      fontFamily: 'Share Tech Mono, monospace',
                      fontSize: '10px',
                      letterSpacing: '3px',
                      color: '#00FFFF',
                      textShadow: '0 0 6px #00FFFF',
                      marginBottom: '8px',
                    }}>
                      &gt; УСЛУГА
                    </label>
                    <select
                      className="cyber-input"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      style={{ background: 'rgba(0,0,0,0.6)', appearance: 'none' }}
                    >
                      <option value="">Выберите услугу</option>
                      <option value="mebel">Металлическая мебель</option>
                      <option value="dveri">Амбарные / бункерные двери</option>
                      <option value="peregorodki">Ограждения и перегородки</option>
                      <option value="barbershop">Барбершоп под ключ</option>
                      <option value="hudozh">Художественные работы</option>
                      <option value="metall">Металлоконструкции</option>
                      <option value="massiv">Мебель из массива</option>
                      <option value="other">Другое</option>
                    </select>
                  </div>

                  <div style={{ marginBottom: '28px' }}>
                    <label style={{
                      display: 'block',
                      fontFamily: 'Share Tech Mono, monospace',
                      fontSize: '10px',
                      letterSpacing: '3px',
                      color: '#FFD700',
                      textShadow: '0 0 6px #FFD700',
                      marginBottom: '8px',
                    }}>
                      &gt; ОПИСАНИЕ ПРОЕКТА
                    </label>
                    <textarea
                      className="cyber-input"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Опишите ваш проект: размеры, материалы, сроки, особые пожелания..."
                      rows={4}
                      style={{ resize: 'vertical', minHeight: '100px' }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className="btn-cyber"
                    style={{
                      width: '100%',
                      justifyContent: 'center',
                      textAlign: 'center',
                      border: 'none',
                      opacity: sending ? 0.6 : 1,
                    }}
                  >
                    {sending ? '> ОТПРАВКА...' : 'Отправить заявку'}
                  </button>

                  <p style={{
                    fontFamily: 'Share Tech Mono, monospace',
                    fontSize: '9px',
                    color: 'rgba(224,224,224,0.25)',
                    textAlign: 'center',
                    marginTop: '16px',
                    letterSpacing: '1px',
                    lineHeight: '1.6',
                  }}>
                    Нажимая кнопку, вы соглашаетесь с обработкой персональных данных.<br/>
                    Бесплатная консультация · Без обязательств
                  </p>
                </form>
              </div>
            )}
          </div>
        </div>

        {/* Map placeholder */}
        <div style={{ marginTop: '80px' }}>
          <div className="section-tag" style={{ marginBottom: '20px' }}>// LOCATION_MATRIX</div>
          <div style={{
            position: 'relative',
            height: '300px',
            border: '1px solid rgba(0,255,255,0.15)',
            background: 'rgba(0,0,0,0.8)',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            {/* Grid overlay */}
            <div style={{
              position: 'absolute', inset: 0,
              backgroundImage: 'linear-gradient(rgba(0,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,255,0.04) 1px, transparent 1px)',
              backgroundSize: '30px 30px',
            }} />

            {/* Decorative map lines */}
            <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.1 }} xmlns="http://www.w3.org/2000/svg">
              <line x1="20%" y1="0" x2="40%" y2="100%" stroke="#00FFFF" strokeWidth="1" />
              <line x1="60%" y1="0" x2="80%" y2="100%" stroke="#FFD700" strokeWidth="1" />
              <circle cx="50%" cy="50%" r="80" stroke="#00FFFF" strokeWidth="1" fill="none" />
              <circle cx="50%" cy="50%" r="40" stroke="#FFD700" strokeWidth="1" fill="none" />
            </svg>

            {/* Pulsing dot */}
            <div style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
              <div style={{
                width: '20px', height: '20px',
                background: '#00FFFF',
                borderRadius: '50%',
                boxShadow: '0 0 20px #00FFFF, 0 0 40px rgba(0,255,255,0.4)',
                margin: '0 auto 20px',
                animation: 'pulse-glow 2s ease-in-out infinite',
              }} />
              <div style={{
                fontFamily: 'Share Tech Mono, monospace',
                fontSize: '12px',
                color: '#00FFFF',
                textShadow: '0 0 8px #00FFFF',
                letterSpacing: '3px',
                marginBottom: '8px',
              }}>
                &gt; STEMI_CUSTOM_FORGE
              </div>
              <div style={{
                fontFamily: 'Rajdhani, sans-serif',
                color: 'rgba(224,224,224,0.6)',
                fontSize: '14px',
                letterSpacing: '1px',
              }}>
                МО, г. Подольск, дер. Малое Брянцево, ул. Полевая
              </div>
              <div style={{
                marginTop: '16px',
                fontFamily: 'Share Tech Mono, monospace',
                fontSize: '10px',
                color: '#FFD700',
                letterSpacing: '2px',
              }}>
                КООРДИНАТЫ: 55.4166° N, 37.5222° E
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
