export interface OrgNode {
  id?: string;
  name: string;
  role: string;
  tools?: string[];
  children?: OrgNode[];
}

export const orgData: OrgNode = {
  name: 'Chief AI Agent',
  role: 'Central Hub',
  tools: ['notion', 'chatgpt'],
  children: [
    {
      name: 'Rowan',
      role: 'Marketing Head',
      tools: ['discord', 'gmail'],
      children: [
        { name: 'Socials Manager', role: 'Agent', tools: ['discord'] },
        { name: 'CRM Suggestions', role: 'Agent', tools: ['gmail'] }
      ]
    },
    {
      name: 'Gatsby',
      role: 'Engineering Lead',
      tools: ['github'],
      children: [
        { name: 'Deployment', role: 'Agent', tools: ['vercel'] },
        { name: 'QA Bot', role: 'Agent', tools: ['github'] }
      ]
    },
    {
      name: 'Blair',
      role: 'Finance Lead',
      tools: ['notion'],
      children: [
        { name: 'VC Matching', role: 'Agent', tools: ['gmail'] },
        { name: 'Budget Tracker', role: 'Agent', tools: ['notion'] }
      ]
    }
  ]
};
