export type ApplicationLoanHistoryData = {
  loan_started: string;
  loan_ended: string;
  principle: number;
  interest_rate: number;
  interest: number;
};

export type ApplicationData = {
  id: number;
  first_name: string;
  last_name: string;
  loan_amount: number;
  email: string;
  date_created: string;
  expiry_date: string;
  avatar: string;
  loan_history: ApplicationLoanHistoryData[];
};
