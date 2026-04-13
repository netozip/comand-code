import { useState } from 'react';
import { Lock, Mail } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate(); 

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert('Erro ao entrar: ' + error.message);
    } else {
      // Se o login for bem-sucedido, redireciona para a home
      navigate('/');
    }
    setLoading(false);
  };

  return (
    <div className="flex min-h-screen bg-[#0b0b0b] items-center justify-center p-6">
      <div className="w-full max-w-md bg-[#161617] p-8 rounded-2xl border border-white/5 shadow-2xl">
        
        {/* Header do Login */}
        <div className="text-center mb-10">
          <h1 className="text-white text-3xl font-bold mb-2">
            comand<span className="text-purple-400">Code</span>
          </h1>
          <p className="text-gray-400 text-sm">
            Bem-vindo de volta! Entre na sua conta.
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleLogin}>
          {/* Campo Email */}
          <div>
            <label className="block text-gray-300 text-sm font-medium mb-2">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
                className="w-full bg-[#0b0b0b] border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white focus:outline-none focus:border-purple-500 transition-colors"
              />
            </div>
          </div>

          {/* Campo Senha */}
          <div>
            <div className="flex justify-between mb-2">
              <label className="text-gray-300 text-sm font-medium">Senha</label>
              <a href="#" className="text-purple-400 text-xs hover:underline">Esqueceu a senha?</a>
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
              <input 
                type="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-[#0b0b0b] border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white focus:outline-none focus:border-purple-500 transition-colors"
              />
            </div>
          </div>

          {/* Botão Entrar */}
          <button 
            type="submit"
            disabled={loading}
            className="w-full bg-purple-600 hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-lg transition-all transform active:scale-[0.98] shadow-lg shadow-purple-500/20"
          >
            {loading ? 'Autenticando...' : 'Acessar Painel'}
          </button>
        </form>

        {/* Rodapé do Card */}
        <p className="text-center text-gray-500 text-sm mt-8">
          Não tem uma conta? <a href="#" className="text-purple-400 font-medium hover:underline">Criar conta</a>
        </p>
      </div>
    </div>
  );
}
