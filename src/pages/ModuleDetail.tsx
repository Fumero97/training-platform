
import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { modules } from '../data';
import { ChevronLeft, FileText } from 'lucide-react';

const ModuleDetail = () => {
  const { moduleId } = useParams<{ moduleId: string }>();
  const module = modules.find(m => m.id === moduleId);

  if (!module) {
    return <Navigate to="/contents" replace />;
  }

  const IconComp = module.icon;

  return (
    <div className="container fade-in" style={{ padding: 'var(--spacing-2xl) var(--spacing-lg)' }}>
      {/* Breadcrumb / Back Link */}
      <Link to="/contents" style={{ 
        display: 'inline-flex', 
        alignItems: 'center', 
        gap: '4px', 
        color: 'var(--color-text-light)',
        marginBottom: 'var(--spacing-lg)',
        fontWeight: 500
      }}>
        <ChevronLeft size={16} />
        Back to Contents
      </Link>

      {/* Header */}
      <header style={{ 
        display: 'flex', 
        alignItems: 'start', 
        gap: 'var(--spacing-lg)', 
        marginBottom: 'var(--spacing-2xl)',
        borderBottom: `4px solid ${module.color}`,
        paddingBottom: 'var(--spacing-xl)'
      }}>
        <div style={{ 
          backgroundColor: module.color, 
          padding: '1rem', 
          borderRadius: 'var(--radius-lg)',
          color: 'var(--color-primary)'
        }}>
          <IconComp size={48} />
        </div>
        <div>
          <h1 style={{ fontSize: '3rem', lineHeight: 1.1, marginBottom: 'var(--spacing-sm)' }}>
            {module.title}
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--color-text-light)' }}>
            {module.description}
          </p>
        </div>
      </header>

      {/* Content Layout */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--spacing-2xl)' }}>
        
        {/* Sub-Modules Grid */}
        <div>
          <h2 style={{ marginBottom: 'var(--spacing-lg)', fontSize: '1.75rem' }}>Topics in this module</h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
            gap: 'var(--spacing-lg)' 
          }}>
            {module.subModules.map((subModule) => (
              <Link 
                key={subModule.id} 
                to={`/contents/${moduleId}/${subModule.id}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  backgroundColor: 'var(--color-bg)',
                  padding: 'var(--spacing-lg)',
                  borderRadius: 'var(--radius-lg)',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                  textDecoration: 'none',
                  border: '1px solid var(--color-bg-soft)',
                  transition: 'transform 0.2s',
                  color: 'var(--color-primary)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.borderColor = module.color;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'var(--color-bg-soft)';
                }}
              >
                <div>
                  <span style={{ 
                    display: 'block', 
                    fontSize: '0.875rem', 
                    color: 'var(--color-text-light)', 
                    marginBottom: '4px' 
                  }}>
                    {subModule.id}
                  </span>
                  <HeadingTag level={3} style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                    {subModule.title.split(' ').slice(1).join(' ')}
                  </HeadingTag>
                </div>
                <div style={{ 
                  color: module.color, 
                  backgroundColor: 'var(--color-bg-soft)',
                  padding: '8px',
                  borderRadius: '50%'
                }}>
                  <FileText size={20} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper for dynamic heading level
const HeadingTag = ({ level, children, style }: { level: 1 | 2 | 3 | 4 | 5 | 6, children: React.ReactNode, style?: React.CSSProperties }) => {
  const Tag = `h${level}` as any;
  return <Tag style={style}>{children}</Tag>;
};

export default ModuleDetail;
