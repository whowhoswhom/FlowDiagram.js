import React from 'react';
import { Mail, Github, Database, Bot, MessageCircle } from 'lucide-react';

const icons: Record<string, React.ReactNode> = {
  gmail: <Mail size={16} />,
  github: <Github size={16} />,
  notion: <Database size={16} />,
  chatgpt: <Bot size={16} />,
  discord: <MessageCircle size={16} />,
  vercel: <Database size={16} />,
};

export default function AgentTools({ tools }: { tools?: string[] }) {
  if (!tools || tools.length === 0) return null;
  return (
    <div className="flex justify-center gap-1 mt-1">
      {tools.map((tool) => (
        <span key={tool}>{icons[tool] || <Database size={16} />}</span>
      ))}
    </div>
  );
}
