import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';

const WhosWho = () => {
  const navigate = useNavigate();

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

      <div style={{ maxWidth: '960px', margin: '0 auto' }}>
        <img
          src="/staff-organogram.png"
          alt="LiA Staff Organogram"
          style={{ width: '100%', height: 'auto', borderRadius: 'var(--radius-lg)', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
        />
      </div>

      <div style={{ marginTop: '6rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: 'var(--spacing-xl)' }}>Language in Action Summer Structure</h2>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <img
            src="/lia-summer-structure.png"
            alt="Language in Action Summer Structure Chart"
            style={{ width: '100%', height: 'auto', borderRadius: 'var(--radius-lg)', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
          />
        </div>
      </div>

      <div style={{ marginTop: '6rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: 'var(--spacing-xl)' }}>Language in Action Mission and Values</h2>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <img
            src="/lia-mission-values.png"
            alt="Language in Action Mission and Values"
            style={{ width: '100%', height: 'auto', borderRadius: 'var(--radius-lg)', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
          />
        </div>
      </div>

      <div style={{ marginTop: '4rem', textAlign: 'center' }}>
        <Button size="lg" onClick={() => navigate('/contents')}>
          Let's Start
        </Button>
      </div>
    </div>
  );
};

export default WhosWho;
