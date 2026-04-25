/* global React */

/* "WorkGrid" repurposed as Features grid for the SaaS site */
function WorkGrid() {
  const features = [
    {
      tag: '01',
      title: 'Controle de projetos',
      body: 'Cada projeto com fases, entregas, equipe alocada e percentual de conclusão. Anteprojeto, executivo, obra — tudo no mesmo lugar.',
    },
    {
      tag: '02',
      title: 'Planejamento de tempo',
      body: 'Apontamento de horas por projeto e profissional. Saiba onde a equipe está investindo, sem planilhas paralelas.',
    },
    {
      tag: '03',
      title: 'Orçamentos e propostas',
      body: 'Propostas comerciais com escopo, etapas e honorários. Aprovação digital, versionamento e histórico do cliente.',
    },
    {
      tag: '04',
      title: 'Comunicação integrada',
      body: 'Comentários no projeto, registros de reunião e linha do tempo do cliente. Email vira anexo, não dependência.',
    },
    {
      tag: '05',
      title: 'Análises inteligentes',
      body: 'Faturamento, margem, alocação e prazo. Indicadores que informam decisão — não relatórios para gerar relatórios.',
    },
    {
      tag: '06',
      title: 'Documentos e arquivos',
      body: 'Plantas, memoriais, contratos. Versionamento por projeto e fase, com permissão por papel.',
    },
  ];

  return (
    <section id="recursos" style={{
      background: 'var(--nk-white)',
      padding: '120px 40px',
      borderBottom: '1px solid var(--border)',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 64,
          alignItems: 'end', marginBottom: 80,
        }}>
          <div style={{
            fontFamily: 'var(--font-text)', fontSize: 12, fontWeight: 500,
            letterSpacing: '0.16em', textTransform: 'uppercase',
            color: 'var(--fg-muted)',
            display: 'flex', alignItems: 'center', gap: 12,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: 999, background: 'var(--nk-coral)', display: 'inline-block' }}></span>
            Recursos
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 600,
            fontSize: 'clamp(32px, 4vw, 56px)',
            lineHeight: 1.05, letterSpacing: '-0.02em',
            color: 'var(--nk-black)', margin: 0, textWrap: 'balance',
          }}>
            Tudo que um escritório precisa.<br />
            <span style={{ color: 'var(--fg-muted)' }}>Nada que não precisa.</span>
          </h2>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0,
          borderTop: '1px solid var(--border)',
          borderLeft: '1px solid var(--border)',
        }}>
          {features.map((f, i) => (
            <div key={i} style={{
              padding: '40px 32px',
              borderRight: '1px solid var(--border)',
              borderBottom: '1px solid var(--border)',
              background: 'var(--nk-white)',
              minHeight: 280,
              display: 'flex', flexDirection: 'column', gap: 16,
            }}>
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: 11,
                color: 'var(--fg-subtle)',
              }}>{f.tag}</div>
              <h3 style={{
                fontFamily: 'var(--font-display)', fontWeight: 600,
                fontSize: 22, lineHeight: 1.25, letterSpacing: '-0.01em',
                color: 'var(--nk-black)', margin: 0,
              }}>{f.title}</h3>
              <p style={{
                fontFamily: 'var(--font-text)', fontSize: 15, lineHeight: 1.55,
                color: 'var(--fg-muted)', margin: 0, marginTop: 'auto',
              }}>{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.WorkGrid = WorkGrid;
