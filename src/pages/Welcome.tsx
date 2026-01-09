import { useNavigate, Link } from 'react-router-dom';
import Button from '../components/ui/Button';

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="container fade-in" style={{ padding: 'var(--spacing-2xl) var(--spacing-lg)' }}>
      <header style={{ marginBottom: 'var(--spacing-xl)', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: 'var(--spacing-md)' }}>Welcome!</h1>
      </header>

      <div style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem', lineHeight: '1.7', color: 'var(--color-text)' }}>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'stretch', marginBottom: '1.5rem', flexDirection: 'row' }}>
          <div style={{ width: '200px', flexShrink: 0 }}>
             <img 
              src="https://languageinactionltd.co.uk/wp-content/uploads/sites/9/2025/08/Malvern-International-head-language-i-action-adam-ennis.jpg" 
              alt="Adam Ennis" 
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover',
                borderRadius: 'var(--radius-lg)', 
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }} 
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <p style={{ marginBottom: '1.5rem', marginTop: 0 }}>
              Firstly, I would like to welcome you to our Language in Action family! We are excited to have you join us this summer, and look forward to working with you to deliver the best summer school programme possible!
            </p>
            <p style={{ marginBottom: 0 }}>
              As a member of our management team, the happiness of our students, clients and team members rests in your hands, and although that may seem like a daunting task, you are not alone. You'll work closely with your Area Managers and the Head Office team, and we will support you and provide guidance every step of the way.
            </p>
          </div>
        </div>
        <p style={{ marginBottom: '1.5rem' }}>
          Family is important at Language in Action, and you and your team are now a part of that family.
        </p>
        <p style={{ marginBottom: '1.5rem' }}>
          This is our biggest year ever, and you are an integral part of that growth. Over the last ten years, our team has expanded from a small group to nearly 100 in-centre team members across 7 schools!
        </p>
        <p style={{ marginBottom: '1.5rem' }}>
          The Head Office team consists of seasoned managers who have worked their way into senior management roles all within Language in Action, so you can always look to them for the support you need to deliver the summer programme to perfection.
        </p>
        <p style={{ marginBottom: '2rem' }}>
          Good luck with your training, I have no doubt that you will be an excellent addition to the family!
        </p>
        
        <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Welcome aboard!</p>
        <p style={{ marginBottom: '0.2rem' }}>Adam Ennis</p>
        <p style={{ color: 'var(--color-text-light)' }}>Head of Juniors</p>
        
        <div style={{ 
          marginTop: '3rem', 
          backgroundColor: '#F0F9FF', 
          padding: '2rem', 
          borderRadius: 'var(--radius-lg)',
          borderLeft: '5px solid var(--color-accent-blue)'
        }}>
          <h3 style={{ marginTop: 0, color: 'var(--color-primary)', fontSize: '1.25rem' }}>
            Welcome to your complete management training and support guide!
          </h3>
          <p style={{ marginBottom: '1rem' }}>
            As you work through this site you will learn everything there is to know about your role including daily operations, client management, team leadership and much more.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            You should work through the site in the order it is presented in, but at anytime you can revisit any section to refresh your memory.
          </p>
          <p style={{ marginBottom: 0, fontStyle: 'italic', fontWeight: '500', color: 'var(--color-primary)' }}>
            <span style={{ fontWeight: 'bold', textTransform: 'uppercase', marginRight: '0.5rem' }}>Tip:</span>
            Check out the <Link to="/glossary" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>Glossary</Link> at any time to familiarise yourself with some of the more specific language you might see in your training, or hear over the summer.
          </p>
        </div>

        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
          <Button size="lg" onClick={() => navigate('/whos-who')}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
