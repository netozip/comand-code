import { useState, useEffect } from 'react';
import { supabase } from './lib/supabaseClient'; 
import Sidebar from './components/Sidebar'; 
import { CodeBlock } from './components/CodeBlock';
import Login from './components/Login';
import CommandForm from './components/CommandForm'; // Vamos criar este arquivo

function App() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // NOVOS ESTADOS: Categoria selecionada e lista de comandos do banco
  const [category, setCategory] = useState('react'); 
  const [commands, setCommands] = useState([]);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  // FUNÇÃO PARA BUSCAR COMANDOS: Dispara sempre que a categoria muda
  const fetchCommands = async () => {
    const { data, error } = await supabase
      .from('commands')
      .select('*')
      .eq('category', category)
      .order('created_at', { ascending: true });
    
    if (!error) setCommands(data);
  };

  useEffect(() => {
    if (session) fetchCommands();
  }, [category, session]);

  if (loading) return <div className="bg-[#0b0b0b] min-h-screen" />;
  if (!session) return <Login />;

  return (
    <div className="flex min-h-screen bg-[#0b0b0b]">
      {/* Passamos setCategory para a Sidebar saber qual ícone foi clicado */}
      <Sidebar setCategory={setCategory} activeCategory={category} />
      
      <main className="flex-1 p-6 md:p-12 flex flex-col items-center ml-[70px]">
        <div className="w-full max-w-3xl">
          <div className="mb-10">
            <h1 className="text-white text-2xl font-semibold mb-2 capitalize">
              Comandos <span className="text-purple-400">{category}</span>
            </h1>
            <p className="text-gray-400 text-sm">Gerencie seus snippets de {category}.</p>
          </div>

          {/* FORMULÁRIO: Para adicionar novos comandos na categoria atual */}
          <CommandForm activeCategory={category} onCommandAdded={fetchCommands} />

          {/* LISTA DINÂMICA: Renderiza os comandos vindos do Supabase */}
          <div className="space-y-10 mt-10">
            {commands.length > 0 ? (
              commands.map((cmd) => (
                <section key={cmd.id} className="animate-in fade-in duration-500">
                  <h2 className="text-gray-200 text-lg mb-4">{cmd.title}</h2>
                  <CodeBlock language={cmd.language || 'bash'} code={cmd.code} />
                </section>
              ))
            ) : (
              <p className="text-gray-600 italic">Nenhum comando salvo para {category}.</p>
            )}
          </div>
          
          <button 
            onClick={() => supabase.auth.signOut()}
            className="text-gray-600 text-xs hover:text-red-400 transition-colors mt-20"
          >
            Sair da conta ({session.user.email})
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
