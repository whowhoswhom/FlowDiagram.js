import React from 'react';
import { Handle, NodeProps, Position } from 'reactflow';
import AgentTools from './AgentTools';

type Data = {
  name: string;
  role: string;
  tools?: string[];
};

export default function DepartmentNode({ data }: NodeProps<Data>) {
  return (
    <div className="bg-white border rounded shadow p-2 text-center min-w-[120px]">
      <div className="font-bold">{data.name}</div>
      <div className="text-xs text-gray-500">{data.role}</div>
      <AgentTools tools={data.tools} />
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}
