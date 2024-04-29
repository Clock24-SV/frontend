export const STATES = ["Not Started", "In Progress", "Completed"] as const;
export type StateType = (typeof STATES)[number];

export type TodoType = {
  id: number;
  state: StateType;
  content: string;
};
