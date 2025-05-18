import dynamic from 'next/dynamic';
import React from 'react';

const OrgChartCanvas = dynamic(() => import('../components/OrgChartCanvas'), { ssr: false });

export default function Home() {
  return <OrgChartCanvas />;
}
