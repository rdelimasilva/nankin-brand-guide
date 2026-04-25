/* global React */

function Nav({ onCta }) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      padding: '20px 40px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      background: scrolled ? 'rgba(255,255,255,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'saturate(140%) blur(8px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'saturate(140%) blur(8px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      transition: 'background 200ms var(--ease-out), border-color 200ms var(--ease-out)',
    }}>
      <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
        <img src="../../assets/icon-nankin.svg" alt="" width="22" height="22" style={{ display: 'block' }} />
        <span style={{
          fontFamily: 'var(--font-wordmark)', fontWeight: 700,
          fontSize: 22, letterSpacing: '-0.04em',
          color: 'var(--nk-black)',
        }}>nankin</span>
      </a>
      <div style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
        {[
          ['Produto', '#produto'],
          ['Recursos', '#recursos'],
          ['Preços', '#precos'],
          ['Clientes', '#clientes'],
        ].map(([label, href]) => (
          <a key={href} href={href} style={{
            fontFamily: 'var(--font-text)', fontSize: 14, fontWeight: 500,
            color: 'var(--fg)', textDecoration: 'none',
          }}>{label}</a>
        ))}
        <a href="#login" style={{
          fontFamily: 'var(--font-text)', fontSize: 14, fontWeight: 500,
          color: 'var(--fg-muted)', textDecoration: 'none',
        }}>Entrar</a>
        <button onClick={onCta} style={{
          fontFamily: 'var(--font-text)', fontSize: 14, fontWeight: 600,
          padding: '10px 20px', borderRadius: 'var(--r-pill)',
          background: 'var(--nk-coral)', color: 'var(--nk-white)',
          border: 'none', cursor: 'pointer',
        }}>Comece grátis</button>
      </div>
    </nav>
  );
}

window.Nav = Nav;
