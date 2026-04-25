/* global React */

function Hero() {
  return (
    <section style={{
      background: 'var(--nk-white)',
      minHeight: '100vh',
      padding: '140px 40px 64px',
      display: 'flex', flexDirection: 'column',
      position: 'relative',
      borderBottom: '1px solid var(--border)',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', width: '100%', display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 64, alignItems: 'center', flex: 1 }}>
        {/* Left — copy */}
        <div>
          <div style={{
            fontFamily: 'var(--font-text)', fontSize: 12, fontWeight: 500,
            letterSpacing: '0.16em', textTransform: 'uppercase',
            color: 'var(--fg-muted)',
            marginBottom: 28,
            display: 'flex', alignItems: 'center', gap: 12,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: 999, background: 'var(--nk-coral)', display: 'inline-block' }}></span>
            Plataforma para escritórios de arquitetura
          </div>
          <h1 style={{
            fontFamily: 'var(--font-display)', fontWeight: 700,
            fontSize: 'clamp(48px, 6.4vw, 88px)',
            lineHeight: 1.02, letterSpacing: '-0.025em',
            color: 'var(--nk-black)', margin: 0,
            textWrap: 'balance',
          }}>
            Gestão eficiente<br />para arquitetos.
          </h1>
          <p style={{
            fontFamily: 'var(--font-text)', fontSize: 20, lineHeight: 1.5,
            color: 'var(--fg-muted)', margin: '32px 0 40px', maxWidth: 540,
            fontWeight: 400,
          }}>
            Projetos, prazos, orçamentos e comunicação em um só lugar. Menos planilhas, mais arquitetura.
          </p>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
            <a href="#start" style={{
              fontFamily: 'var(--font-text)', fontSize: 15, fontWeight: 600,
              padding: '14px 28px', borderRadius: 'var(--r-pill)',
              background: 'var(--nk-coral)', color: 'var(--nk-white)',
              textDecoration: 'none',
              boxShadow: 'var(--shadow-coral)',
            }}>Comece grátis</a>
            <a href="#demo" style={{
              fontFamily: 'var(--font-text)', fontSize: 15, fontWeight: 500,
              padding: '14px 28px', borderRadius: 'var(--r-pill)',
              background: 'transparent', color: 'var(--fg)',
              border: '1px solid var(--border-strong)', textDecoration: 'none',
            }}>Ver demonstração →</a>
          </div>
          <div style={{
            marginTop: 56, display: 'flex', gap: 40, flexWrap: 'wrap',
            fontFamily: 'var(--font-text)', fontSize: 13, color: 'var(--fg-subtle)',
          }}>
            <span><strong style={{ color: 'var(--fg)', fontWeight: 600 }}>14 dias</strong> grátis</span>
            <span>Sem cartão de crédito</span>
            <span>Migração assistida</span>
          </div>
        </div>

        {/* Right — product mock */}
        <ProductMock />
      </div>
    </section>
  );
}

function ProductMock() {
  return (
    <div style={{
      background: 'var(--nk-gray-light)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--r-lg)',
      padding: 24,
      position: 'relative',
    }}>
      {/* Window chrome */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
        <span style={{ width: 10, height: 10, borderRadius: 999, background: '#E0E0E0' }}></span>
        <span style={{ width: 10, height: 10, borderRadius: 999, background: '#E0E0E0' }}></span>
        <span style={{ width: 10, height: 10, borderRadius: 999, background: '#E0E0E0' }}></span>
        <div style={{ flex: 1 }}></div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-subtle)' }}>nankin.me / projetos</div>
      </div>

      {/* App body */}
      <div style={{ background: 'var(--nk-white)', borderRadius: 'var(--r-md)', overflow: 'hidden', border: '1px solid var(--border)' }}>
        {/* Toolbar */}
        <div style={{ padding: '14px 18px', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 16, color: 'var(--nk-black)' }}>Projetos · 12 ativos</div>
          <div style={{ display: 'flex', gap: 6 }}>
            <span style={{ fontFamily: 'var(--font-text)', fontSize: 11, fontWeight: 500, padding: '4px 10px', borderRadius: 999, background: 'var(--nk-coral)', color: 'var(--nk-white)' }}>+ Novo</span>
          </div>
        </div>

        {/* Project rows */}
        {[
          { name: 'Casa Aurora', status: 'Em andamento', pct: 62, due: 'Out 2025', team: 4 },
          { name: 'Edifício Mirante', status: 'Revisão', pct: 84, due: 'Set 2025', team: 6 },
          { name: 'Escritório Volta', status: 'Anteprojeto', pct: 28, due: 'Dez 2025', team: 3 },
          { name: 'Galeria Pátio', status: 'Em andamento', pct: 47, due: 'Nov 2025', team: 5 },
        ].map((p, i) => (
          <div key={i} style={{
            padding: '14px 18px',
            borderBottom: i < 3 ? '1px solid var(--border)' : 'none',
            display: 'grid', gridTemplateColumns: '1.4fr 1fr 1.2fr 0.6fr', gap: 16, alignItems: 'center',
          }}>
            <div style={{ fontFamily: 'var(--font-text)', fontSize: 14, fontWeight: 600, color: 'var(--nk-black)' }}>{p.name}</div>
            <div style={{ fontFamily: 'var(--font-text)', fontSize: 12, color: 'var(--fg-muted)' }}>{p.status}</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ flex: 1, height: 4, background: 'var(--nk-ink-100)', borderRadius: 999, overflow: 'hidden' }}>
                <div style={{ width: p.pct + '%', height: '100%', background: 'var(--nk-black)' }}></div>
              </div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-muted)', minWidth: 30, textAlign: 'right' }}>{p.pct}%</span>
            </div>
            <div style={{ fontFamily: 'var(--font-text)', fontSize: 12, color: 'var(--fg-subtle)', textAlign: 'right' }}>{p.due}</div>
          </div>
        ))}
      </div>

      {/* Bottom stat row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, marginTop: 16 }}>
        {[
          { label: 'Faturamento mês', value: 'R$ 184k' },
          { label: 'Horas alocadas', value: '1 240' },
          { label: 'No prazo', value: '92%' },
        ].map((s, i) => (
          <div key={i} style={{
            background: 'var(--nk-white)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--r-md)',
            padding: '12px 14px',
          }}>
            <div style={{ fontFamily: 'var(--font-text)', fontSize: 10, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--fg-subtle)' }}>{s.label}</div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700, color: 'var(--nk-black)', marginTop: 4, letterSpacing: '-0.02em' }}>{s.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

window.Hero = Hero;
