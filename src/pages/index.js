import React, { useCallback } from 'react';
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  addEdge,
  useEdgesState,
  useNodesState
} from 'reactflow';
import 'reactflow/dist/style.css';

const initialNodes = [
  {
    id: '1',
    type: 'input',
    data: { label: 'GitHub', url: 'https://github.com' },
    position: { x: 100, y: 50 }
  },
  {
    id: '2',
    data: { label: 'Vercel', url: 'https://vercel.com' },
    position: { x: 400, y: 50 }
  },
  {
    id: '3',
    data: { label: 'Supabase', url: 'https://supabase.com' },
    position: { x: 250, y: 200 }
  },
  {
    id: '4',
    data: { label: 'Cursor', url: 'https://cursor.so' },
    position: { x: 100, y: 350 }
  },
  {
    id: '5',
    data: { label: 'Codex', url: 'https://example.com/codex' },
    position: { x: 400, y: 350 }
  },
  {
    id: '6',
    data: { label: 'Operator (ChatGPT)', url: 'https://openai.com' },
    position: { x: 250, y: 500 }
  }
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e2-3', source: '2', target: '3' },
  { id: 'e3-4', source: '3', target: '4' },
  { id: 'e3-5', source: '3', target: '5' },
  { id: 'e5-6', source: '5', target: '6' },
  { id: 'e4-6', source: '4', target: '6' }
];

export default function Home() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge({ ...params, animated: true }, eds)),
    []
  );

  const onNodeClick = useCallback((_, node) => {
    if (node.data?.url) {
      window.open(node.data.url, '_blank');
    }
  }, []);

  const onNodeDragStop = useCallback((event, node) => {
    setNodes((nds) =>
      nds.map((n) =>
        n.id === node.id ? { ...n, position: node.position } : n
      )
    );
  }, []);

  return (
    <div style={{ height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeClick={onNodeClick}
        onNodeDragStop={onNodeDragStop}
        deleteKeyCode={46}
      >
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
}
