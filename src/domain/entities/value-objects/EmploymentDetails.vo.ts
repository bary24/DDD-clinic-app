export interface EmploymentDetailsProps {
  jobTitle: string;
  degree?: string;
  contractBeginDate?: Date;
  contractEndDate?: Date;
  dailyWage?: number;
  workingHours?: number;
  bonus?: number;
  PTO?: number;
}

export class EmploymentDetails {
  public readonly jobTitle: string;
  public readonly degree?: string;
  public readonly contractBeginDate?: Date;
  public readonly contractEndDate?: Date;
  public readonly dailyWage?: number;
  public readonly workingHours?: number;
  public readonly bonus?: number;
  public readonly PTO?: number;

  constructor(props: EmploymentDetailsProps) {
    if (!props.jobTitle.trim()) throw new Error('Job title is required.');
    if (props.dailyWage && props.dailyWage < 0) throw new Error('Daily wage must be positive.');

    this.jobTitle = props.jobTitle;
    this.degree = props.degree;
    this.contractBeginDate = props.contractBeginDate;
    this.contractEndDate = props.contractEndDate;
    this.dailyWage = props.dailyWage;
    this.workingHours = props.workingHours;
    this.bonus = props.bonus;
    this.PTO = props.PTO;
  }
}
