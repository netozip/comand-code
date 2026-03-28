import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// Tema "vscDarkPlus" é o que mais se aproxima do estilo VS Code/Google Gemini
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export function CodeBlock({ language, code }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-3xl my-4 rounded-xl bg-[#131314] overflow-hidden border border-[#2e2e2e] shadow-2xl">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#1e1e1f]">
        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          {language}
        </span>
        <button 
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors cursor-pointer"
        >
          {copied ? (
            <><Check size={14} className="text-green-400" /> Copiado!</>
          ) : (
            <><Copy size={14} /> Copiar</>
          )}
        </button>
      </div>
      
      {/* Área do Código com Cores Automáticas */}
      <div className="text-sm font-mono">
        <SyntaxHighlighter 
          language={language.toLowerCase()} 
          style={vscDarkPlus}
          customStyle={{
            margin: 0,
            padding: '1.25rem',
            backgroundColor: '#131314',
            fontSize: '0.875rem',
            lineHeight: '1.5',
          }}
        >
          {code}
        </SyntaxHighlighter>
      </div>

      {/* Footer */}
      <div className="px-4 py-2 border-t border-[#2e2e2e] bg-[#131314]">
        <p className="text-[11px] text-gray-500 italic font-medium">Use o código com cuidado.</p>
      </div>
    </div>
  );
}
