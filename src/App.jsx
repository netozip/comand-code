import Sidebar from './components/Sidebar'; 
import { CodeBlock } from './components/CodeBlock';

function App() {
  return (
    // Container principal com flexbox para alinhar Sidebar e Conteúdo
    <div className="flex min-h-screen bg-[#0b0b0b]">
      
      {/* 1. Barra Lateral Fixa */}
      <Sidebar />

      {/* 2. Conteúdo Principal com margem à esquerda (ml-16 ou ml-20 conforme o tamanho da sua sidebar) */}
      <main className="flex-1 p-6 md:p-12 flex flex-col items-center ml-[70px]">
        <div className="w-full max-w-3xl">
          
          {/* Título Principal */}
          <div className="mb-10">
            <h1 className="text-white text-2xl font-semibold mb-4">
              Configuração do Projeto <span className="text-purple-400">comandCode</span>
            </h1>
            <p className="text-gray-400">
              Siga os passos abaixo para configurar o ambiente de desenvolvimento.
            </p>
          </div>

          {/* Bloco 1: Vite */}
          <section className="mb-8">
            <h2 className="text-gray-200 text-lg mb-4">
              1. Criar a estrutura do projeto com <code className="bg-[#1e1e1f] px-2 py-0.5 rounded text-purple-300">Vite </code>
            </h2>
            <p className='text-xs text-white mb-2'>O Vite já cria uma pasta chamada comand-code para você.</p>
            <CodeBlock 
              language="bash" 
              code={'npm create vite@latest name-project -- --template react'} 
            />
          </section>

          {/* Bloco 2: CD */}
          <section className="mb-8">
            <h2 className="text-gray-200 text-lg mb-4">
              2. Entrar na <code className="bg-[#1e1e1f] px-2 py-0.5 rounded text-purple-300">pasta do projeto </code>
            </h2>
            <p className='text-xs text-white mb-2'>Não pule este passo, caso contrário os próximos comandos darão erro de "executable not found".</p>
            <CodeBlock 
              language="bash" 
              code={'cd comand-code'} 
            />
          </section>

          {/* Bloco 3: Git */}
          <section className="mb-8">
            <h2 className="text-gray-200 text-lg mb-4">
              3. Inicializar o Git
            </h2>
            <p className='text-xs text-white mb-2'>Vamos preparar o controle de versão antes de instalar as dependências.</p>
            <CodeBlock 
              language="bash" 
              code="git init" 
            />
          </section>

          {/* Bloco 4: Install */}
          <section className="mb-8">
            <h2 className="text-gray-200 text-lg mb-4">
              4. Instalar as dependências base do React
            </h2>
            <p className='text-xs text-white mb-2'>Isso criará a pasta node_modules. </p>
            <CodeBlock 
              language="bash" 
              code="npm install" 
            />
          </section>

          {/* Bloco 5: Tailwind */}
          <section className="mb-8">
            <h2 className="text-gray-200 text-lg mb-4">
              5. Instalar o Tailwind CSS para Vite
            </h2>
            <p className='text-xs text-white mb-2'>No seu terminal (dentro da pasta comand-code), rode: </p>
            <CodeBlock 
              language="bash" 
              code="npm install @tailwindcss/vite" 
            />
          </section>
          
          {/* Bloco 6: Lucide Icons */}
          <section className="mb-8">
            <h2 className="text-gray-200 text-lg mb-4">
              6. Instale o pacote de ícones
            </h2>
            <p className='text-xs text-white mb-2'>No terminal, dentro da pasta comand-code, rode: </p>
            <CodeBlock 
              language="bash" 
              code="npm install lucide-react" 
            />
          </section>

          {/* Bloco 7: Syntax Highlighter */}
          <section className="mb-8">
            <h2 className="text-gray-200 text-lg mb-4">
              7. Instale a biblioteca de cores
            </h2>
            <p className='text-xs text-white mb-2'>Instalando a biblioteca de cores no terminal: </p>
            <CodeBlock 
              language="bash" 
              code="npm install react-syntax-highlighter" 
            />
          </section>

        </div>
      </main>
    </div>
  );
}

export default App;
