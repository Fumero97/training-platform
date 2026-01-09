import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Contents from './pages/Contents';
import WhosWho from './pages/WhosWho';
import Glossary from './pages/Glossary';
import Welcome from './pages/Welcome';
import ModuleDetail from './pages/ModuleDetail';
import SubModuleDetail from './pages/SubModuleDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="welcome" element={<Welcome />} />
          <Route path="contents" element={<Contents />} />
          <Route path="contents/:moduleId" element={<ModuleDetail />} />
          <Route path="contents/:moduleId/:subId" element={<SubModuleDetail />} />
          <Route path="whos-who" element={<WhosWho />} />
          <Route path="glossary" element={<Glossary />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
