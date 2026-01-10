import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { glossaryTerms } from '../data';
import { Search } from 'lucide-react';
import Button from '../components/ui/Button';

const Glossary = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTerms = glossaryTerms.filter(item => 
    item.term.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container fade-in" style={{ padding: 'var(--spacing-2xl) var(--spacing-lg)' }}>
      <header style={{ marginBottom: 'var(--spacing-xl)', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: 'var(--spacing-md)' }}>Glossary</h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--color-text-light)', maxWidth: '600px', margin: '0 auto' }}>
          Key terms, acronyms, and definitions used throughout the management guide.
        </p>
      </header>

      {/* Search Bar */}
      <div style={{ maxWidth: '600px', margin: '0 auto var(--spacing-2xl) auto', position: 'relative' }}>
        <Search style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-light)' }} />
        <input 
          type="text" 
          placeholder="Search for a term..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: '100%',
            padding: '1rem 1rem 1rem 3rem',
            fontSize: '1rem',
            border: '2px solid var(--color-bg-soft)',
            borderRadius: 'var(--radius-full)',
            fontFamily: 'var(--font-body)',
            outline: 'none',
            transition: 'border-color 0.2s',
          }}
          onFocus={(e) => e.target.style.borderColor = 'var(--color-accent-blue)'}
          onBlur={(e) => e.target.style.borderColor = 'var(--color-bg-soft)'}
        />
      </div>

      {/* Terms List */}
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {filteredTerms.length > 0 ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xl)' }}>
            {["The People", "The Places", "Suppliers etc.", "Operational"].map(category => {
               const categoryTerms = filteredTerms.filter(item => item.category === category);
               if (categoryTerms.length === 0) return null;
               
               return (
                 <div key={category}>
                   <h2 style={{ 
                     color: 'var(--color-primary)', 
                     fontSize: '1.75rem', 
                     borderBottom: '2px solid var(--color-accent-blue)', 
                     paddingBottom: '0.5rem',
                     marginBottom: 'var(--spacing-lg)',
                     display: 'inline-block'
                   }}>
                     {category}
                   </h2>
                   <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
                    {categoryTerms.map((item, index) => (
                      <div key={index} className="glossary-term" style={{
                        backgroundColor: 'var(--color-bg-soft)',
                        padding: 'var(--spacing-lg)',
                        borderRadius: 'var(--radius-md)',
                        display: 'flex',
                        alignItems: 'baseline',
                        gap: 'var(--spacing-md)',
                        flexWrap: 'wrap'
                      }}>
                        <span style={{ 
                          fontSize: '1.25rem', 
                          fontWeight: '700', 
                          color: 'var(--color-primary)',
                          minWidth: '150px'
                        }} className="glossary-term-label">
                          {item.term}
                        </span>
                        <span style={{ color: 'var(--color-text)', lineHeight: 1.6, flex: 1 }}>
                          {item.definition}
                        </span>
                      </div>
                    ))}
                   </div>
                 </div>
               );
            })}
          </div>
        ) : (
          <p style={{ textAlign: 'center', color: 'var(--color-text-light)' }}>No terms found matching "{searchTerm}"</p>
        )}

        <div style={{ marginTop: '4rem', textAlign: 'center' }}>
          <Button size="lg" onClick={() => navigate('/contents')}>
            Back to Contents
          </Button>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .glossary-term {
            flex-direction: column !important;
            align-items: flex-start !important;
          }

          .glossary-term-label {
            min-width: auto !important;
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default Glossary;
