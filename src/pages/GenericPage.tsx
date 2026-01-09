import React from 'react';

interface GenericPageProps {
  title: string;
  description?: string;
}

const GenericPage: React.FC<GenericPageProps> = ({ title, description }) => {
  return (
    <div className="container fade-in" style={{ padding: 'var(--spacing-2xl) var(--spacing-lg)' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-lg)' }}>{title}</h1>
      {description && (
        <p style={{ fontSize: '1.25rem', color: 'var(--color-text-light)', marginBottom: 'var(--spacing-xl)' }}>
          {description}
        </p>
      )}
      
      <div style={{ 
        backgroundColor: 'var(--color-bg-soft)', 
        padding: 'var(--spacing-xl)', 
        borderRadius: 'var(--radius-lg)' 
      }}>
        <p>This content is currently under development.</p>
        <br />
        <p>Please check the "Contents" section for available modules.</p>
      </div>
    </div>
  );
};

export default GenericPage;
