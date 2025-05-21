import { OrgNode } from '../types/OrgNode';

// Sample organisational structure consisting of an executive chain and
// three departments. This data drives the React Flow diagram.
export const orgData: OrgNode = {
  name: 'Frank Greeff',
  role: 'CEO',
  type: 'Executive',
  tools: ['gmail'],
  children: [
    {
      name: 'Jacques Greeff',
      role: 'CTO',
      type: 'Executive',
      tools: ['gmail'],
      children: [
        {
          name: 'Chief AI Agent',
          role: 'Central Hub',
          type: 'ChiefAgent',
          tools: ['notion', 'chatgpt'],
          children: [
            {
              name: 'Blair',
              role: 'Marketing Head',
              type: 'DepartmentHead',
              department: 'marketing',
              tools: ['gmail', 'slack'],
              children: [
                { name: 'Socials Manager', role: 'SubFunction', type: 'SubFunction', tools: ['slack'] },
                { name: 'CRM Suggestions', role: 'SubFunction', type: 'SubFunction', tools: ['gmail'] }
              ]
            },
            {
              name: 'Nolan',
              role: 'Engineering Lead',
              type: 'DepartmentHead',
              department: 'engineering',
              tools: ['github'],
              children: [
                { name: 'Deployment', role: 'SubFunction', type: 'SubFunction', tools: ['vercel'] },
                { name: 'QA Bot', role: 'SubFunction', type: 'SubFunction', tools: ['github'] }
              ]
            },
            {
              name: 'Gatsby',
              role: 'Finance Lead',
              type: 'DepartmentHead',
              department: 'finance',
              tools: ['notion'],
              children: [
                { name: 'VC Matching', role: 'SubFunction', type: 'SubFunction', tools: ['gmail'] },
                { name: 'Budget Tracker', role: 'SubFunction', type: 'SubFunction', tools: ['notion'] }
              ]
            }
          ]
        }
      ]
    }
  ]
};
