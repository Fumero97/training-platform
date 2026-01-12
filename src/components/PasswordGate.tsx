import { useState, useEffect, type FormEvent } from 'react';

const CORRECT_PASSWORD = 'training2026';
const STORAGE_KEY = 'siteUnlocked';

interface PasswordGateProps {
  children: React.ReactNode;
}

const PasswordGate = ({ children }: PasswordGateProps) => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if already unlocked
    const unlocked = localStorage.getItem(STORAGE_KEY);
    if (unlocked === 'true') {
      setIsUnlocked(true);
    }
    setIsLoading(false);
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError('');

    if (password === CORRECT_PASSWORD) {
      localStorage.setItem(STORAGE_KEY, 'true');
      setIsUnlocked(true);
    } else {
      setError('Incorrect password. Please try again.');
      setPassword('');
    }
  };

  if (isLoading) {
    return null;
  }

  if (isUnlocked) {
    return <>{children}</>;
  }

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: 'var(--color-bg)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
      padding: 'var(--spacing-lg)'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '450px',
        animation: 'fadeIn 0.5s ease-out'
      }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-2xl)' }}>
          <div style={{
            display: 'inline-block',
            padding: '0.75rem 1.5rem',
            borderRadius: 'var(--radius-full)',
            backgroundColor: 'var(--color-primary)',
            color: 'white',
            fontWeight: '600',
            marginBottom: 'var(--spacing-lg)',
            fontSize: '0.875rem',
            letterSpacing: '0.05em',
            textTransform: 'uppercase'
          }}>
            Protected Content
          </div>

          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: '800',
            color: 'var(--color-primary)',
            marginBottom: 'var(--spacing-md)',
            letterSpacing: '-0.02em'
          }}>
            Management Guide
          </h1>

          <p style={{
            fontSize: '1.125rem',
            color: 'var(--color-text)',
            fontWeight: '500'
          }}>
            Enter password to access
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} style={{
          backgroundColor: 'var(--color-bg-soft)',
          padding: 'var(--spacing-xl)',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--color-border)',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)'
        }}>
          <div style={{ marginBottom: 'var(--spacing-lg)' }}>
            <label htmlFor="password" style={{
              display: 'block',
              fontSize: '0.875rem',
              fontWeight: '600',
              color: 'var(--color-text)',
              marginBottom: 'var(--spacing-sm)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              autoFocus
              style={{
                width: '100%',
                padding: '0.875rem 1rem',
                fontSize: '1rem',
                borderRadius: 'var(--radius-sm)',
                border: error ? '2px solid #ef4444' : '2px solid var(--color-border)',
                backgroundColor: 'var(--color-bg)',
                color: 'var(--color-text)',
                outline: 'none',
                transition: 'all 0.2s',
                fontFamily: 'inherit'
              }}
              onFocus={(e) => {
                if (!error) {
                  e.currentTarget.style.borderColor = 'var(--color-primary)';
                }
              }}
              onBlur={(e) => {
                if (!error) {
                  e.currentTarget.style.borderColor = 'var(--color-border)';
                }
              }}
            />
            {error && (
              <p style={{
                marginTop: 'var(--spacing-sm)',
                fontSize: '0.875rem',
                color: '#ef4444',
                fontWeight: '500'
              }}>
                {error}
              </p>
            )}
          </div>

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '1rem',
              fontSize: '1rem',
              fontWeight: '600',
              borderRadius: 'var(--radius-sm)',
              border: 'none',
              backgroundColor: 'var(--color-primary)',
              color: 'white',
              cursor: 'pointer',
              transition: 'all 0.2s',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Enter
          </button>
        </form>

        {/* Footer hint */}
        <p style={{
          marginTop: 'var(--spacing-lg)',
          textAlign: 'center',
          fontSize: '0.875rem',
          color: 'var(--color-text-light)'
        }}>
          🔒 Protected Content
        </p>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 2rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default PasswordGate;
