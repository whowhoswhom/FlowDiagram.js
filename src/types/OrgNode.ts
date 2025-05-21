export interface OrgNode {
  id?: string;
  name: string;
  role: string;
  tools?: string[];
  /**
   * Optional semantic type of the node. Examples: 'Executive', 'ChiefAgent',
   * 'DepartmentHead', 'SubFunction', 'IndividualAgent', 'Database'.
   */
  type?: string;
  /** Optional department label used for color coding */
  department?: string;
  children?: OrgNode[];
}
