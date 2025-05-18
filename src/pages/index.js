import React, { useCallback, useState } from 'react';
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  addEdge,
  removeElements
} from 'reactflow';

const initialElements = [
  { id: '1', type: 'input', data: { label: 'GitHub' }, position: { x: 100, y: 50 } },
  { id: '2', data: { label: 'Vercel' }, position: { x: 400, y: 50 } },
  { id: '3', data: { label: 'Supabase' }, position: { x: 250, y: 200 } },
  { id: '4', data: { label: 'Cursor' }, position: { x: 100, y: 350 } },
  { id: '5', data: { label: 'Codex' }, position: { x: 400, y: 350 } },
  { id: '6', data: { label: 'Operator (ChatGPT)' }, position: { x: 250, y: 500 } },
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e2-3', source: '2', target: '3' },
  { id: 'e3-4', source: '3', target: '4' },
  { id: 'e3-5', source: '3', target: '5' },
  { id: 'e5-6', source: '5', target: '6' },
  { id: 'e4-6', source: '4', target: '6' }
];

export default function Home() {
  const [elements, setElements] = useState(initialElements);

  const onElementsRemove = useCallback((elementsToRemove) =>
    setElements((els) => removeElements(elementsToRemove, els)),
    []
  );

  const onConnect = useCallback((params) =>
    setElements((els) => addEdge({ ...params, animated: true }, els)),
    []
  );

  const onNodeDragStop = useCallback((event, node) => {
    setElements((els) =>
      els.map((el) =>
        el.id === node.id ? { ...el, position: node.position } : el
      )
    );
  }, []);

  return (
    <div style={{ height: '100vh' }}>
      <ReactFlow
        elements={elements}
        onElementsRemove={onElementsRemove}
        onConnect={onConnect}
        onNodeDragStop={onNodeDragStop}
        deleteKeyCode={46} // 'delete' key
      >
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
}
