export interface OrgNode {
  id?: string;
  name: string;
  role: string;
  tools?: string[];
  children?: OrgNode[];
}
