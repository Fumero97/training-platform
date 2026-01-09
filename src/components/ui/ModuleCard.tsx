import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ModuleCardProps {
  title: string;
  description?: string;
  color: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

const ModuleCard: React.FC<ModuleCardProps> = ({ 
  title, 
  description, 
  color, 
  icon,
  onClick 
}) => {
  return (
    <div 
      onClick={onClick}
      style={{
        backgroundColor: color,
        borderRadius: 'var(--radius-lg)',
        padding: 'var(--spacing-xl)',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '200px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transition: 'transform 0.3s ease',
        boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
      }}
      className="module-card"
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.02)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
      }}
    >
      <div style={{ position: 'relative', zIndex: 2 }}>
        {icon && <div style={{ marginBottom: 'var(--spacing-md)', color: 'var(--color-primary)' }}>{icon}</div>}
        <h3 style={{ 
          fontSize: '1.5rem', 
          marginBottom: 'var(--spacing-sm)',
          color: 'var(--color-primary)' 
        }}>
          {title}
        </h3>
        {description && (
          <p style={{ color: 'var(--color-primary)', opacity: 0.8 }}>{description}</p>
        )}
      </div>

      <div style={{
        marginTop: 'var(--spacing-lg)',
        display: 'flex',
        justifyContent: 'flex-end',
        color: 'var(--color-primary)'
      }}>
        <ArrowRight />
      </div>

      {/* Decorative texture/shape */}
      <div style={{
        position: 'absolute',
        bottom: '-20px',
        right: '-20px',
        width: '100px',
        height: '100px',
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderRadius: '50%',
      }} />
    </div>
  );
};

export default ModuleCard;
