// Adicionados FaDocker e FaTerminal ao import
import { FaHome, FaReact, FaLaravel, FaPython, FaGithub, FaJava, FaSignOutAlt, FaDocker, FaTerminal } from 'react-icons/fa';
import { supabase } from '../lib/supabaseClient';

const Sidebar = ({ setCategory }) => {
  
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) console.error('Erro ao sair:', error.message);
  };

  return (
    <aside className="sidebar flex flex-col justify-between h-screen pb-4">
      <div className="sidebar-icons">
        <div className="icon-wrapper" onClick={() => setCategory('geral')} title="Home">
          <FaHome size={24} />
        </div>
        <hr className="divider" />
        
        <div className="icon-wrapper" onClick={() => setCategory('react')} title="React">
          <FaReact size={24} color="#61DBFB" />
        </div>
        
        <div className="icon-wrapper" onClick={() => setCategory('laravel')} title="Laravel">
          <FaLaravel size={24} color="#FF2D20" />
        </div>
        
        <div className="icon-wrapper" onClick={() => setCategory('python')} title="Python">
          <FaPython size={24} color="#3776AB" />
        </div>

        {/* Ícone do Docker */}
        <div className="icon-wrapper" onClick={() => setCategory('docker')} title="Docker">
          <FaDocker size={24} color="#2496ED" />
        </div>

        {/* Ícone do Terminal */}
        <div className="icon-wrapper" onClick={() => setCategory('terminal')} title="Terminal">
          <FaTerminal size={24} color="#4D4D4D" />
        </div>
        
         <div className="icon-wrapper" onClick={() => setCategory('github')} title="Github">
          <FaGithub size={24} color="#ffffff" />
        </div>
        
        <div className="icon-wrapper" onClick={() => setCategory('java')} title="Java">
          <FaJava size={24} color="#f89820" />
        </div>
      </div>

      <div className="sidebar-icons">
        <div 
          className="icon-wrapper mt-auto border-t border-white/10 pt-4" 
          title="Sair"
          onClick={handleLogout}
          style={{ cursor: 'pointer' }}
        >
          <FaSignOutAlt size={24} color="#ff4d4d" />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
