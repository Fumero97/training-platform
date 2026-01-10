import { useState } from 'react';
import { useParams, Navigate, Link, useNavigate } from 'react-router-dom';
import { modules } from '../data';
import { ChevronRight, ChevronLeft, FileText, ChevronDown, ChevronUp } from 'lucide-react';
import Button from '../components/ui/Button';

const SubModuleDetail = () => {
  const { moduleId, subId } = useParams<{ moduleId: string; subId: string }>();
  const navigate = useNavigate();
  
  const module = modules.find(m => m.id === moduleId);
  const subModule = module?.subModules.find(s => s.id === subId);
  
  // Track which accordion is open (by index). -1 means none.
  const [openAccordionIndex, setOpenAccordionIndex] = useState<number | null>(null);

  const toggleAccordion = (idx: number) => {
    setOpenAccordionIndex(openAccordionIndex === idx ? null : idx);
  };

  if (!module || !subModule) {
    return <Navigate to="/contents" replace />;
  }

  // Handle clicks on links within dangerouslySetInnerHTML content
  const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target.tagName === 'A') {
      const anchor = target as HTMLAnchorElement;
      const href = anchor.getAttribute('href');
      
      // Check if it's an internal link (starts with /)
      if (href && href.startsWith('/')) {
        e.preventDefault();
        navigate(href);
      }
    }
  };

  return (
    <div className="container fade-in" style={{ padding: 'var(--spacing-2xl) var(--spacing-lg)' }}>
      {/* Breadcrumb */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '8px', 
        color: 'var(--color-text-light)', 
        marginBottom: 'var(--spacing-lg)',
        fontSize: '0.9rem',
        flexWrap: 'wrap'
      }}>
        <Link to="/contents" className="hover-underline">Contents</Link>
        <ChevronRight size={14} />
        <Link to={`/contents/${moduleId}`} className="hover-underline">{module.title}</Link>
        <ChevronRight size={14} />
        <span style={{ color: 'var(--color-primary)', fontWeight: 500 }}>{subModule.title}</span>
      </div>

      <header style={{ marginBottom: 'var(--spacing-2xl)' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-md)' }}>{subModule.title}</h1>
        <div style={{ width: '60px', height: '4px', backgroundColor: module.color }} />
      </header>

      <div className="submodule-layout" style={{ display: 'grid', gridTemplateColumns: 'minmax(250px, 1fr) 3fr', gap: 'var(--spacing-2xl)' }}>
        {/* Navigation Sidebar */}
        <aside className="submodule-sidebar" style={{ height: 'fit-content' }}>
          <div style={{ 
            backgroundColor: 'var(--color-bg-soft)', 
            padding: 'var(--spacing-lg)', 
            borderRadius: 'var(--radius-md)'
          }}>
             <Link to={`/contents/${moduleId}`} style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '8px',
                marginBottom: 'var(--spacing-lg)',
                color: 'var(--color-text-light)',
                fontWeight: 500
              }}>
                <ChevronLeft size={16} /> Back to Module
              </Link>

            <h3 style={{ marginBottom: 'var(--spacing-md)', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-text-light)' }}>
              Topics
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
              {module.subModules.map((s) => (
                <li key={s.id}>
                  <Link 
                    to={`/contents/${moduleId}/${s.id}`}
                    style={{ 
                      color: s.id === subId ? module.color : 'var(--color-text)',
                      fontWeight: s.id === subId ? 600 : 400,
                      display: 'block',
                      padding: '4px 0'
                    }}
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* content Area */}
        <div className="content" onClick={handleContentClick}>
          {subModule.sections.length > 0 ? (
            subModule.sections.map((section, idx) => {
              // 1. SECTION HEADER (New "On the day" style)
              if (section.isSectionHeader) {
                return (
                  <div key={idx} style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '12px', 
                    marginTop: 'var(--spacing-2xl)', // Extra space before new section
                    marginBottom: 'var(--spacing-lg)' 
                  }}>
                    <div style={{ 
                      backgroundColor: module.color, 
                      padding: '8px', 
                      borderRadius: 'var(--radius-md)',
                      color: 'white'
                    }}>
                      <FileText size={24} />
                    </div>
                    <h2 style={{ fontSize: '1.5rem', margin: 0 }}>{section.title}</h2>
                  </div>
                );
              }

              // 2. ACCORDION (No Icon in title)
              if (section.isAccordion) {
                const isOpen = openAccordionIndex === idx;
                return (
                  <div key={idx} style={{ marginBottom: 'var(--spacing-md)' }}>
                    <button
                      onClick={() => toggleAccordion(idx)}
                      style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: 'var(--spacing-lg)',
                        backgroundColor: isOpen ? 'var(--color-bg-soft)' : 'var(--color-bg)',
                        border: '1px solid var(--color-bg-soft)',
                        borderRadius: isOpen ? 'var(--radius-lg) var(--radius-lg) 0 0' : 'var(--radius-lg)',
                        cursor: 'pointer',
                        transition: 'background-color 0.2s',
                        textAlign: 'left'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        {/* ICON REMOVED FOR ACCORDIONS AS REQUESTED */}
                        <h2 style={{ fontSize: '1.25rem', margin: 0, fontWeight: 600 }}>{section.title}</h2>
                      </div>
                      {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </button>
                    
                    {isOpen && (
                      <div style={{
                        padding: 'var(--spacing-lg)',
                        border: '1px solid var(--color-bg-soft)',
                        borderTop: 'none',
                        borderRadius: '0 0 var(--radius-lg) var(--radius-lg)',
                        backgroundColor: 'var(--color-bg)',
                      }}>
                         <div 
                           dangerouslySetInnerHTML={{ __html: section.content }} 
                           style={{ 
                             lineHeight: 1.7, 
                             color: 'var(--color-text-light)',
                             fontSize: '1.05rem' 
                           }} 
                         />
                      </div>
                    )}
                  </div>
                );
              }

              // 3. STANDARD SECTION
              // Hide icon for specific titles
              const hideIcon = ['What it covers', 'Why it is important', 'What they cover', 'What it is', 'Note'].includes(section.title);

              return (
                 <div key={idx} style={{ marginBottom: 'var(--spacing-xl)' }}>
                   <div style={{ 
                     display: 'flex', 
                     alignItems: 'center', 
                     gap: '12px', 
                     marginBottom: 'var(--spacing-md)' 
                   }}>
                     {!hideIcon && (
                       <div style={{ 
                         backgroundColor: module.color, 
                         padding: '8px', 
                         borderRadius: 'var(--radius-md)',
                         color: 'white'
                       }}>
                         <FileText size={20} />
                       </div>
                     )}
                     <h2 style={{ fontSize: '1.5rem' }}>{section.title}</h2>
                   </div>

                   <div 
                     dangerouslySetInnerHTML={{ __html: section.content }} 
                     style={{ 
                       lineHeight: 1.7, 
                       color: 'var(--color-text-light)',
                       fontSize: '1.05rem' 
                     }} 
                   />
                 </div>
              );
            })
          ) : (
             <div style={{ 
               padding: 'var(--spacing-2xl)', 
               textAlign: 'center', 
               backgroundColor: 'var(--color-bg-soft)',
               borderRadius: 'var(--radius-lg)'
             }}>
               <p>Content for this section is currently being migrated.</p>
               <br/>
               <Button variant="outline" onClick={() => window.history.back()}>Go Back</Button>
             </div>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .submodule-layout {
            grid-template-columns: 1fr !important;
          }

          .submodule-sidebar {
            order: -1;
            margin-bottom: var(--spacing-lg);
          }
        }
      `}</style>
    </div>
  );
};

export default SubModuleDetail;
