/* global React */

/* Repurposed as the closing CTA strip — "ContactStrip" → CtaStrip */
function ContactStrip() {
  return (
    <section id="contato" style={{
      background: 'var(--nk-black)',
      padding: '120px 40px',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 64, alignItems: 'end' }}>
        <div>
          <div style={{
            fontFamily: 'var(--font-text)', fontSize: 12, fontWeight: 500,
            letterSpacing: '0.16em', textTransform: 'uppercase',
            color: 'var(--nk-coral)',
            marginBottom: 24,
            display: 'flex', alignItems: 'center', gap: 12,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: 999, background: 'var(--nk-coral)', display: 'inline-block' }}></span>
            Comece grátis
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 700,
            fontSize: 'clamp(40px, 5.6vw, 80px)',
            lineHeight: 1.02, letterSpacing: '-0.025em',
            color: 'var(--nk-white)', margin: 0, textWrap: 'balance',
          }}>
            14 dias grátis.<br />
            Sem cartão. Sem espera.
          </h2>
          <p style={{
            fontFamily: 'var(--font-text)', fontSize: 18, lineHeight: 1.5,
            color: 'rgba(255,255,255,0.6)', margin: '28px 0 0', maxWidth: 540,
          }}>
            Migramos sua planilha atual. Sua equipe está produtiva no primeiro dia.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-start' }}>
          <a href="#start" style={{
            fontFamily: 'var(--font-text)', fontSize: 16, fontWeight: 600,
            padding: '18px 32px', borderRadius: 'var(--r-pill)',
            background: 'var(--nk-coral)', color: 'var(--nk-white)',
            textDecoration: 'none',
          }}>Criar conta — grátis</a>
          <a href="#demo" style={{
            fontFamily: 'var(--font-text)', fontSize: 14, fontWeight: 500,
            color: 'rgba(255,255,255,0.7)', textDecoration: 'none',
            padding: '6px 0',
          }}>Falar com vendas →</a>
        </div>
      </div>
    </section>
  );
}

window.ContactStrip = ContactStrip;
