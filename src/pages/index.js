import dynamic from 'next/dynamic';
import React from 'react';

const FlowDiagram = dynamic(() => import('../components/FlowDiagram'), { ssr: false });

export default function Home() {
  return <FlowDiagram />;
}
