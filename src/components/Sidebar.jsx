import { FaHome, FaReact, FaLaravel, FaPython, FaGithub, FaJava, FaGit } from 'react-icons/fa';
// import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-icons">
        <div className="icon-wrapper" title="Home">
          <FaHome size={24} />
        </div>
        <hr className="divider" />
        <div className="icon-wrapper" title="React">
          <FaReact size={24} color="#61DBFB" />
        </div>
        git status
        <div className="icon-wrapper" title="Laravel">
          <FaLaravel size={24} color="#FF2D20" />
        </div>
        
        <div className="icon-wrapper" title="Python">
          <FaPython size={24} color="#3776AB" />
        </div>
        
         <div className="icon-wrapper" title="Git">
          <FaGithub size={24} color="#3776AB" />
        </div>
        
        <div className="icon-wrapper" title="Java">
          <FaJava size={24} color="#3776AB" />
        </div>
        
        
      </div>
    </aside>
  );
};

export default Sidebar;
