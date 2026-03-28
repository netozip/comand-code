import { CodeBlock } from './components/CodeBlock';

function App() {
  return (
    <main className="min-h-screen bg-[#0b0b0b] p-6 md:p-12 flex flex-col items-center">
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

        {/* Bloco 1: CSS */}
        <section className="mb-8">
          <h2 className="text-gray-200 text-lg mb-4">
            1. Criar a estrutura do projeto com <code className="bg-[#1e1e1f] px-2 py-0.5 rounded text-purple-300">Vite </code>
          </h2>
          <p className='text-xs text-white'>O Vite já cria uma pasta chamada comand-code para você.</p>
          <CodeBlock 
            language="bash" 
            code={'npm create vite@latest name-project -- --template react'} 
          />
        </section>

        {/* Bloco 2: JavaScript */}
        <section className="mb-8">
          <h2 className="text-gray-200 text-lg mb-4">
            2. Entrar na <code className="bg-[#1e1e1f] px-2 py-0.5 rounded text-purple-300">pasta do projeto </code>
          </h2>
          <p className='text-xs text-white'>Não pule este passo, caso contrário os próximos comandos darão erro de "executable not found".</p>
          <CodeBlock 
            language="bash" 
            code={'cd comand-code'} 
          />
        </section>

        {/* Bloco 3: Terminal/Bash */}
        <section className="mb-8">
          <h2 className="text-gray-200 text-lg mb-4">
            3. Inicializar o Git
          </h2>
          <p className='text-xs text-white'>Vamos preparar o controle de versão antes de instalar as dependências.
</p>
          <CodeBlock 
            language="bash" 
            code="git init" 
          />
        </section>

        {/* Bloco 4: Terminal/Bash */}
        <section className="mb-8">
          <h2 className="text-gray-200 text-lg mb-4">
            4. Instalar as dependências base do React
          </h2>
          <p className='text-xs text-white'>Isso criará a pasta node_modules. </p>
          <CodeBlock 
            language="bash" 
            code="npm install" 
          />
        </section>

         {/* Bloco 5: Terminal/Bash */}
        <section className="mb-8">
          <h2 className="text-gray-200 text-lg mb-4">
            5. Instalar o Tailwind CSS para Vite
          </h2>
          <p className='text-xs text-white'>No seu terminal (dentro da pasta comand-code), rode: </p>
          <CodeBlock 
            language="bash" 
            code="npm install @tailwindcss/vite" 
          />
        </section>
        
         {/* Bloco 6: Terminal/Bash */}
        <section className="mb-8">
          <h2 className="text-gray-200 text-lg mb-4">
            6. Instale o pacote de ícones
          </h2>
          <p className='text-xs text-white'>No terminal, dentro da pasta comand-code, rode: </p>
          <CodeBlock 
            language="bash" 
            code="npm install lucide-react" 
          />
        </section>

         {/* Bloco 6: Terminal/Bash */}
        <section className="mb-8">
          <h2 className="text-gray-200 text-lg mb-4">
            6. Instale a biblioteca de cores
          </h2>
          <p className='text-xs text-white'>Instalado a biblioteca de cores no terminal: </p>
          <CodeBlock 
            language="bash" 
            code="npm install react-syntax-highlighter" 
          />
        </section>


      </div>
    </main>
  );
}

export default App;
