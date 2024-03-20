export interface CounterProps {
  count: number;
  onTrackCounter(data: any): void;
  title?: string;
  disabled?: boolean;
}

export interface CounterSate {
  count: number;
}

export interface Action {
  type: string;
  value: any;
}
