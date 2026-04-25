/* global React */

function Footer() {
  const cols = [
    { title: 'Produto', items: ['Recursos', 'Preços', 'Mudanças', 'Roadmap', 'Status'] },
    { title: 'Empresa', items: ['Sobre', 'Clientes', 'Parceiros', 'Imprensa', 'Contato'] },
    { title: 'Recursos', items: ['Documentação', 'API', 'Migração', 'Modelos', 'Comunidade'] },
    { title: 'Legal', items: ['Termos', 'Privacidade', 'Cookies', 'LGPD'] },
  ];

  return (
    <footer style={{
      background: 'var(--nk-white)',
      padding: '80px 40px 40px',
      borderTop: '1px solid var(--border)',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.6fr repeat(4, 1fr)', gap: 48, marginBottom: 80 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
              <img src="../../assets/icon-nankin.svg" alt="" width="22" height="22" style={{ display: 'block' }} />
              <span style={{
                fontFamily: 'var(--font-wordmark)', fontWeight: 700,
                fontSize: 22, letterSpacing: '-0.04em',
                color: 'var(--nk-black)',
              }}>nankin</span>
            </div>
            <p style={{
              fontFamily: 'var(--font-text)', fontSize: 14, lineHeight: 1.55,
              color: 'var(--fg-muted)', margin: 0, maxWidth: 320,
            }}>
              A plataforma completa para escritórios de arquitetura.
            </p>
          </div>
          {cols.map((col) => (
            <div key={col.title}>
              <div style={{
                fontFamily: 'var(--font-text)', fontSize: 11, fontWeight: 600,
                letterSpacing: '0.16em', textTransform: 'uppercase',
                color: 'var(--fg-subtle)', marginBottom: 16,
              }}>{col.title}</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {col.items.map((it) => (
                  <li key={it}>
                    <a href={'#' + it.toLowerCase()} style={{
                      fontFamily: 'var(--font-text)', fontSize: 14,
                      color: 'var(--fg)', textDecoration: 'none',
                    }}>{it}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          paddingTop: 32, borderTop: '1px solid var(--border)',
          fontFamily: 'var(--font-text)', fontSize: 13, color: 'var(--fg-subtle)',
          flexWrap: 'wrap', gap: 16,
        }}>
          <span>nankin · 2025 · São Paulo, Brasil</span>
          <span>Feito por arquitetos, para arquitetos.</span>
        </div>
      </div>
    </footer>
  );
}

window.Footer = Footer;
