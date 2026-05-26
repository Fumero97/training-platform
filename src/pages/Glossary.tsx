import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { glossaryTermsByGroup } from '../data';
import { useUserGroup } from '../contexts/UserGroupContext';
import { Search, ChevronDown, ChevronUp } from 'lucide-react';
import Button from '../components/ui/Button';

const Glossary = () => {
  const navigate = useNavigate();
  const { group } = useUserGroup();
  const glossaryTerms = glossaryTermsByGroup[group ?? 'A'];
  const [searchTerm, setSearchTerm] = useState('');
  const categories = ["The People", "The Places", "Residences", "Suppliers", "Operational"];
  const [openCategories, setOpenCategories] = useState<Set<string>>(new Set(categories));

  const toggleCategory = (cat: string) => {
    setOpenCategories(prev => {
      const next = new Set(prev);
      if (next.has(cat)) next.delete(cat);
      else next.add(cat);
      return next;
    });
  };

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
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
            {categories.map(category => {
               const categoryTerms = filteredTerms.filter(item => item.category === category);
               if (categoryTerms.length === 0) return null;
               const isOpen = openCategories.has(category);

               return (
                 <div key={category} style={{ border: '1px solid var(--color-bg-soft)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
                   <button
                     onClick={() => toggleCategory(category)}
                     style={{
                       width: '100%',
                       display: 'flex',
                       alignItems: 'center',
                       justifyContent: 'space-between',
                       padding: '0.85rem var(--spacing-lg)',
                       background: 'var(--color-bg-soft)',
                       border: 'none',
                       cursor: 'pointer',
                       fontFamily: 'var(--font-body)',
                     }}
                   >
                     <h2 style={{ color: 'var(--color-primary)', fontSize: '1.25rem', margin: 0 }}>
                       {category}
                     </h2>
                     {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                   </button>

                   {isOpen && (
                     <div style={{ padding: '0.5rem 0' }}>
                       {categoryTerms.map((item, index) => (
                         <div key={index} className="glossary-term" style={{
                           display: 'grid',
                           gridTemplateColumns: '220px 1fr',
                           alignItems: 'baseline',
                           gap: 'var(--spacing-md)',
                           padding: '0.45rem var(--spacing-lg)',
                           borderBottom: index < categoryTerms.length - 1 ? '1px solid var(--color-bg-soft)' : 'none',
                         }}>
                           <span style={{ fontWeight: '700', color: 'var(--color-primary)', fontSize: '0.95rem' }} className="glossary-term-label">
                             {item.term}
                           </span>
                           <span style={{ color: 'var(--color-text)', lineHeight: 1.5, fontSize: '0.95rem' }}>
                             {item.definition}
                           </span>
                         </div>
                       ))}
                     </div>
                   )}
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
        @media (max-width: 600px) {
          .glossary-term {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Glossary;
