
import ModuleCard from '../components/ui/ModuleCard';
import { Activity, Truck, Calendar, Shield, Users, Clock, Map, Utensils, MessageCircle, AlertTriangle, Coffee } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useUserGroup } from '../contexts/UserGroupContext';

const Contents = () => {
  const navigate = useNavigate();
  const { group } = useUserGroup();

  const modulesA = [
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

  const modulesB = [
    {
      id: '1.0',
      title: '1.0 A Typical Day',
      description: 'Your daily schedule and routines.',
      color: 'var(--color-accent-blue)',
      icon: <Clock size={32} />
    },
    {
      id: '2.0',
      title: '2.0 Activity Planning',
      description: 'Games, excursions, events, and student engagement.',
      color: 'var(--color-accent-peach)',
      icon: <Map size={32} />
    },
    {
      id: '3.0',
      title: '3.0 The First Three Days',
      description: 'Arrival, orientation, and getting started.',
      color: 'var(--color-accent-purple)',
      icon: <Calendar size={32} />
    },
    {
      id: '4.0',
      title: '4.0 Meals and Catering',
      description: 'Meal service, dietary needs, and catering arrangements.',
      color: 'var(--color-accent-green)',
      icon: <Utensils size={32} />
    },
    {
      id: '5.0',
      title: '5.0 Safeguarding & Welfare',
      description: 'Student safety, welfare protocols, and compliance.',
      color: 'var(--color-accent-orange)',
      icon: <Shield size={32} />
    },
    {
      id: '6.0',
      title: '6.0 Communication',
      description: 'Team communication, WhatsApp groups, and meetings.',
      color: 'var(--color-accent-blue)',
      icon: <MessageCircle size={32} />
    },
    {
      id: '7.0',
      title: '7.0 Emergency Procedure',
      description: 'Emergency protocols and escalation procedures.',
      color: 'var(--color-accent-peach)',
      icon: <AlertTriangle size={32} />
    },
    {
      id: '8.0',
      title: '8.0 Down Time',
      description: 'Rest, social events, and time off guidance.',
      color: 'var(--color-accent-purple)',
      icon: <Coffee size={32} />
    },
  ];

  const modules = group === 'B' ? modulesB : modulesA;

  return (
    <div className="container fade-in" style={{ padding: 'var(--spacing-2xl) var(--spacing-lg)' }}>
      <div style={{ marginBottom: 'var(--spacing-xl)' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-sm)' }}>Contents</h1>
        <p style={{ color: 'var(--color-text-light)', fontSize: '1.1rem' }}>
          Select a module to view detailed guidelines.
        </p>
      </div>

      <div className="contents-grid" style={{ 
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

      <style>{`
        @media (max-width: 768px) {
          .contents-grid {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)) !important;
          }
        }

        @media (max-width: 400px) {
          .contents-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Contents;
