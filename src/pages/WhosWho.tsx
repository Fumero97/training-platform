import { useNavigate } from 'react-router-dom';
import { staff } from '../data';
import Button from '../components/ui/Button';

const WhosWho = () => {
  const navigate = useNavigate();

  const level1 = staff.slice(0, 2);
  const level2 = staff.slice(2, 5);
  const level3 = staff.slice(5, 8);

  const StaffCard = ({ person }: { person: typeof staff[0] }) => (
    <div style={{
      backgroundColor: 'var(--color-bg)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
      border: '1px solid var(--color-bg-soft)',
      transition: 'transform 0.3s ease',
      cursor: 'default',
      flex: '1 1 300px',
      maxWidth: '400px'
    }}
    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
    >
      <div style={{ height: '300px', overflow: 'hidden' }}>
        <img 
          src={person.image} 
          alt={person.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} 
        />
      </div>
      
      <div style={{ padding: 'var(--spacing-lg)' }}>
        <h3 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-xs)' }}>{person.name}</h3>
        <p style={{ 
          color: 'var(--color-accent-blue)', 
          fontWeight: '600', 
          marginBottom: 'var(--spacing-md)',
          textTransform: 'uppercase',
          fontSize: '0.875rem'
        }}>
          {person.role}
        </p>
        
        <div style={{ height: '1px', backgroundColor: 'var(--color-bg-soft)', marginBottom: 'var(--spacing-md)' }} />
        
        {person.bio && (
            <p style={{
                fontSize: '0.95rem',
                lineHeight: '1.6',
                color: 'var(--color-text)',
                marginBottom: 'var(--spacing-lg)'
            }}>
                {person.bio}
            </p>
        )}
      </div>
    </div>
  );

  return (
    <div className="container fade-in" style={{ padding: 'var(--spacing-2xl) var(--spacing-lg)' }}>
      <header style={{ marginBottom: 'var(--spacing-xl)', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: 'var(--spacing-md)' }}>Meet the Management Team</h1>
        <div style={{ fontSize: '1.25rem', color: 'var(--color-text-light)', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ marginBottom: '1rem' }}>
            Language in Action has a dedicated management team with many years of experience in the educational travel industry.
          </p>
          <p>
            During the summer period, our Head Office is also located on campus, ready to support you in resolving any issues immediately. We are all there for you so if you have any questions or issues, you just need to ask!
          </p>
        </div>
      </header>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2xl)' }}>
        
        {/* Level 1: Adam, Daniele */}
        <div className="staff-row" style={{ display: 'flex', justifyContent: 'center', gap: 'var(--spacing-xl)', flexWrap: 'wrap' }}>
          {level1.map(person => <StaffCard key={person.name} person={person} />)}
        </div>

        {/* Level 2: Ariosto, Beatrice, Don */}
        <div className="staff-row" style={{ display: 'flex', justifyContent: 'center', gap: 'var(--spacing-xl)', flexWrap: 'wrap' }}>
          {level2.map(person => <StaffCard key={person.name} person={person} />)}
        </div>

        {/* Level 3: Louis, George, Oriana */}
        <div className="staff-row" style={{ display: 'flex', justifyContent: 'center', gap: 'var(--spacing-xl)', flexWrap: 'wrap' }}>
          {level3.map(person => <StaffCard key={person.name} person={person} />)}
        </div>

      </div>

      <div style={{ marginTop: '6rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: 'var(--spacing-xl)' }}>Language in Action Summer Structure</h2>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <img 
            src="/lia-summer-structure.jpg" 
            alt="Language in Action Summer Structure Chart" 
            style={{ width: '100%', height: 'auto', borderRadius: 'var(--radius-lg)', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }} 
          />
        </div>
      </div>

       <div style={{ marginTop: '4rem', textAlign: 'center' }}>
        <Button size="lg" onClick={() => navigate('/contents')}>
          Let's Start
        </Button>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .staff-row {
            flex-direction: column !important;
            align-items: center !important;
          }

          .staff-row > div {
            width: 100%;
            max-width: 350px;
          }
        }
      `}</style>
    </div>
  );
};

export default WhosWho;
