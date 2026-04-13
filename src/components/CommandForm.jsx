import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function CommandForm({ activeCategory, onCommandAdded }) {
  const [title, setTitle] = useState('');
  const [code, setCode] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const { error } = await supabase.from('commands').insert([
      { 
        title, 
        code, 
        category: activeCategory, 
        language: 'bash',
        user_id: (await supabase.auth.getUser()).data.user.id 
      }
    ]);

    if (!error) {
      setTitle('');
      setCode('');
      onCommandAdded(); // Atualiza a lista automaticamente
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-[#161617] p-6 rounded-xl border border-white/5 mb-8 w-full max-w-3xl">
      <h3 className="text-white mb-4">Novo comando para <span className="text-purple-400 capitalize">{activeCategory}</span></h3>
      <div className="flex flex-col gap-4">
        <input 
          className="bg-[#0b0b0b] border border-white/10 p-2 rounded text-white"
          placeholder="Título (ex: Instalar dependências)"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea 
          className="bg-[#0b0b0b] border border-white/10 p-2 rounded text-white font-mono"
          placeholder="Código aqui..."
          value={code}
          onChange={(e) => setCode(e.target.value)}
          required
        />
        <button className="bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition-colors">
          Salvar Comando
        </button>
      </div>
    </form>
  );
}
