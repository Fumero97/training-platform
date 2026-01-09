
import ModuleCard from '../components/ui/ModuleCard';
import { Activity, Truck, Calendar, Shield, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Contents = () => {
  const navigate = useNavigate();
  const modules = [
    { 
      id: '1.0', 
      title: '1.0 Key Operations', 
      description: 'Essential operational guidelines and procedures.',
      color: 'var(--color-accent-blue)',
      icon: <Activity size={32} />
    },
    { 
      id: '2.0', 
      title: '2.0 Logistics', 
      description: 'Transportation, transfers, and equipment management.',
      color: 'var(--color-accent-peach)',
      icon: <Truck size={32} />
    },
    { 
      id: '3.0', 
      title: '3.0 Daily Operations', 
      description: 'Day-to-day schedules, activities, and routines.',
      color: 'var(--color-accent-purple)',
      icon: <Calendar size={32} />
    },
    { 
      id: '4.0', 
      title: '4.0 Safeguarding', 
      description: 'Student welfare, safety protocols, and compliance.',
      color: 'var(--color-accent-green)',
      icon: <Shield size={32} />
    },
    { 
      id: '5.0', 
      title: '5.0 Management', 
      description: 'Leadership resources, HR, and staff management.',
      color: 'var(--color-accent-orange)',
      icon: <Users size={32} />
    },
  ];

  return (
    <div className="container fade-in" style={{ padding: 'var(--spacing-2xl) var(--spacing-lg)' }}>
      <div style={{ marginBottom: 'var(--spacing-xl)' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-sm)' }}>Contents</h1>
        <p style={{ color: 'var(--color-text-light)', fontSize: '1.1rem' }}>
          Select a module to view detailed guidelines.
        </p>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: 'var(--spacing-lg)' 
      }}>
        {modules.map((mod) => (
          <ModuleCard
            key={mod.id}
            title={mod.title}
            description={mod.description}
            color={mod.color}
            icon={mod.icon}
            onClick={() => navigate(`/contents/${mod.id}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default Contents;
