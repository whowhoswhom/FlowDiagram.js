import React, { useState } from 'react';
import { Handle, NodeProps, Position } from 'reactflow';
import AgentTools from './AgentTools';

type Data = {
  name: string;
  role: string;
  tools?: string[];
  type?: string;
  department?: string;
};

export default function DepartmentNode({ data }: NodeProps<Data>) {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(data.name);
  const [role, setRole] = useState(data.role);

  const toggleEdit = () => setEditing(!editing);

  const colorMap: Record<string, string> = {
    Executive: 'bg-blue-100',
    ChiefAgent: 'bg-purple-100',
    DepartmentHead: 'bg-green-100',
    SubFunction: 'bg-yellow-100',
    IndividualAgent: 'bg-gray-100',
    Database: 'bg-gray-200',
  };

  const bgClass = colorMap[data.type ?? 'DepartmentHead'];

  return (
    <div
      onDoubleClick={toggleEdit}
      className={`${bgClass} border rounded shadow p-2 text-center min-w-[120px] hover:ring-2 hover:ring-blue-400`}
    >
      {editing ? (
        <>
          <input
            className="w-full border text-center text-sm mb-1"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="w-full border text-center text-xs text-gray-500"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
        </>
      ) : (
        <>
          <div className="font-bold">{name}</div>
          <div className="text-xs text-gray-500">{role}</div>
        </>
      )}
      <AgentTools tools={data.tools} />
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}
