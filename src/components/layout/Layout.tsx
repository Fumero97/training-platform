
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
      <footer style={{ 
        backgroundColor: 'var(--color-primary)', 
        color: 'white', 
        padding: 'var(--spacing-xl) 0',
        textAlign: 'center',
        marginTop: 'auto'
      }}>
        <div className="container">
          <p style={{ opacity: 0.6 }}>&copy; 2026 Language in Action. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
