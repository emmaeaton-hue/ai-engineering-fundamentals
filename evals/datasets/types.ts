export type Difficulty = "simple" | "medium" | "hard" | "edge";
export type Category = "layout" | "content" | "structure" | "edge-case";

export interface TestCase {
  id: string;
  input: string;
  expectedCharacteristics: string[];
  difficulty: Difficulty;
  category: Category;
}

// What we collect from running a test case through the agent.
export interface EvalResult {
  testCaseId: string;
  input: string;
  response: string;
  elements: unknown[];
  durationMs: number;
  error?: string;
}

// Same as EvalResult but with a manual score and notes the human added.
export interface ScoredResult extends EvalResult {
  score: 1 | 2 | 3 | 4 | 5;
  notes?: string;
}