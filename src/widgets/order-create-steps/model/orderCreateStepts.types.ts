export type StepStatus = 'wait' | 'process' | 'finish' | 'error';

export interface GetCurrentItemsProps {
  stepStatuses: StepStatus[];
  current: number;
}
