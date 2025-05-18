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
  { id: '1', type: 'input', data: { label: 'GitHub' }, position: { x: 100, y: 50 } },
  { id: '2', data: { label: 'Vercel' }, position: { x: 400, y: 50 } },
  { id: '3', data: { label: 'Supabase' }, position: { x: 250, y: 200 } },
  { id: '4', data: { label: 'Cursor' }, position: { x: 100, y: 350 } },
  { id: '5', data: { label: 'Codex' }, position: { x: 400, y: 350 } },
  { id: '6', data: { label: 'Operator (ChatGPT)' }, position: { x: 250, y: 500 } }
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

  return (
    <div style={{ height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        deleteKeyCode={46} // 'delete' key
      >
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
}
