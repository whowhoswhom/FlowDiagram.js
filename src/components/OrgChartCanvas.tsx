import React from 'react';
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  Node,
  Edge,
  useNodesState,
  useEdgesState
} from 'reactflow';
import 'reactflow/dist/style.css';
import DepartmentNode from './DepartmentNode';
import { orgData } from '../data/orgData';
import { OrgNode } from '../types/OrgNode';

interface FlattenResult {
  nodes: Node[];
  edges: Edge[];
}

let idCounter = 0;
const getId = () => `${idCounter++}`;

function flatten(root: OrgNode): FlattenResult {
  const nodes: Node[] = [];
  const edges: Edge[] = [];

  const walk = (node: OrgNode, depth = 0, index = 0, parentId?: string) => {
    const id = getId();
    node.id = id;
    nodes.push({
      id,
      type: 'department',
      data: { name: node.name, role: node.role, tools: node.tools },
      position: { x: depth * 250, y: index * 150 }
    });
    if (parentId) {
      edges.push({ id: `e${parentId}-${id}`, source: parentId, target: id });
    }
    node.children?.forEach((child, idx) => walk(child, depth + 1, index * 3 + idx, id));
  };

  walk(root);
  return { nodes, edges };
}

export default function OrgChartCanvas() {
  const { nodes: initialNodes, edges: initialEdges } = flatten(orgData);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  return (
    <div className="w-full h-screen">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={{ department: DepartmentNode }}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        fitView
      >
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
}
