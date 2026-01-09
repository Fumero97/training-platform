import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Contents', path: '/contents' },
    { name: 'Who\'s Who', path: '/whos-who' },
    { name: 'Glossary', path: '/glossary' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav style={{
      backgroundColor: 'var(--color-primary)',
      color: 'var(--color-bg)',
      padding: 'var(--spacing-md) 0',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
    }}>
      <div className="container flex justify-between items-center">
        {/* Logo Area */}
        <Link to="/" style={{ fontSize: '1.25rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <img src="/src/assets/logo.png" alt="Logo" style={{ height: '32px' }} />

        </Link>

        {/* Desktop Menu */}
        <div className="desktop-menu" style={{ display: 'flex', gap: 'var(--spacing-lg)', alignItems: 'center' }}>
          {links.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              style={{
                color: isActive(link.path) ? 'var(--color-accent-peach)' : 'var(--color-bg)',
                fontWeight: isActive(link.path) ? '600' : '400',
                transition: 'color 0.2s',
              }}
            >
              {link.name}
            </Link>
          ))}

        </div>

        {/* Mobile Toggle */}
        <div className="mobile-toggle" style={{ display: 'none' }}>
          <button onClick={() => setIsOpen(!isOpen)} style={{ color: 'white' }}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div style={{
          backgroundColor: 'var(--color-primary)',
          padding: 'var(--spacing-lg)',
          borderTop: '1px solid rgba(255,255,255,0.1)'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
            {links.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                onClick={() => setIsOpen(false)}
                style={{ fontSize: '1.1rem' }}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
      
      {/* Responsive Styles Injection */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
