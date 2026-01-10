import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="fade-in" style={{ 
      display: 'flex', 
      minHeight: '100vh', 
      backgroundColor: 'var(--color-bg)',
      overflow: 'hidden',
      flexDirection: 'row'
    }}>
      
      {/* Left Content Section */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '0 var(--spacing-2xl)',
        zIndex: 1
      }}>
        <div style={{ maxWidth: '600px', marginLeft: 'auto', marginRight: 'var(--spacing-xl)' }}>
          <span style={{ 
            display: 'inline-block',
            padding: '0.5rem 1.5rem',
            borderRadius: 'var(--radius-full)',
            backgroundColor: 'var(--color-primary)',
            color: 'white',
            fontWeight: '600',
            marginBottom: 'var(--spacing-lg)',
            fontSize: '0.875rem',
            letterSpacing: '0.05em',
            textTransform: 'uppercase'
          }}>
            Internal Resource
          </span>

          <h1 style={{ 
            fontSize: '5rem', 
            marginBottom: '1.5rem',
            letterSpacing: '-0.03em',
            lineHeight: 1,
            fontWeight: '800',
            color: 'var(--color-primary)',
            position: 'relative',
            display: 'inline-block'
          }} className="home-title">
            Management<br />
            Guide<br />
            <span style={{ position: 'relative', display: 'inline-block' }}>
              2026.
              {/* Hand-drawn Oval SVG Highlight */}
              <svg style={{ 
                position: 'absolute', 
                top: '-15%', 
                left: '-10%', 
                width: '120%', 
                height: '130%', 
                zIndex: -1, 
                transform: 'rotate(-2deg)',
                overflow: 'visible' 
              }} viewBox="0 0 300 100" preserveAspectRatio="none">
                 <path d="M10,50 C30,10 270,10 290,50 C280,90 20,90 10,50 Z" fill="none" stroke="var(--color-accent-blue)" strokeWidth="8" opacity="0.6" />
              </svg>
            </span>
          </h1>

          <p style={{ 
            fontSize: '1.25rem', 
            color: 'var(--color-text)', 
            marginBottom: '3rem',
            fontWeight: '500',
            lineHeight: 1.6,
            maxWidth: '450px'
          }} className="home-description">
            Your comprehensive guide to operations, logistics, welfare, and management standards for the summer.
          </p>

          <button 
            onClick={() => navigate('/welcome')} 
            style={{
              display: 'inline-block',
              backgroundColor: 'transparent',
              color: 'var(--color-primary)',
              padding: '1rem 2rem',
              fontSize: '1rem',
              fontWeight: '600',
              borderRadius: 'var(--radius-sm)',
              border: '2px solid var(--color-text-light)',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-primary)';
              e.currentTarget.style.backgroundColor = 'var(--color-bg-soft)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-text-light)';
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            Let's get started
          </button>
        </div>
      </div>

      {/* Right Pattern Section */}
      <div className="home-pattern-grid" style={{
        flex: 1,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: '50vh 50vh',
        height: '100vh'
      }}>
        {/* TL: Peach */}
        <div style={{ backgroundColor: '#FFD6AC' }} />

        {/* TR: Orange */}
        <div style={{ backgroundColor: '#FF9F3F' }} />

        {/* BL: Photo with Green Overlay */}
        <div style={{ 
          position: 'relative', 
          backgroundColor: '#3399ff',
          backgroundImage: 'url("https://languageinactionltd.co.uk/wp-content/uploads/sites/9/2025/08/language-in-action-activity-leaders-at-middlesex-1536x1024.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
           {/* Green Overlay - Top Left Corner */}
           <div style={{
             position: 'absolute',
             top: 0,
             left: 0,
             width: '100%',
             height: '100%',
             background: 'radial-gradient(circle at top left, #45D55D 40%, transparent 40.5%)',
             pointerEvents: 'none' 
           }} />
        </div>

        {/* BR: Blue with Purple shape */}
        <div style={{ 
          backgroundColor: '#3399FF',
          position: 'relative'
        }}>
          {/* Purple Shape - Bottom Right */}
          <div style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: '80%',
            height: '80%',
            backgroundColor: '#9C5AFF',
            borderTopLeftRadius: '100%'
          }} />
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .fade-in > div:first-child {
            flex-direction: column !important;
          }

          .home-pattern-grid {
            display: none !important;
          }

          .fade-in > div:first-child {
            padding: var(--spacing-xl) var(--spacing-md) !important;
            text-align: center;
          }

          .fade-in > div:first-child > div {
            margin-left: auto !important;
            margin-right: auto !important;
          }

          .home-title {
            font-size: 2.5rem !important;
          }

          .home-description {
            font-size: 1rem !important;
            max-width: 100% !important;
          }
        }

        @media (max-width: 400px) {
          .home-title {
            font-size: 2rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
