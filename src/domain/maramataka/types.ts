export type MaramatakaDay = {
  date: string;       // ISO string
  phase: MoonPhase;
  notes?: string;
};

export type MoonPhase =
  | "New"
  | "Waxing"
  | "Full"
  | "Waning"
  | "Other";