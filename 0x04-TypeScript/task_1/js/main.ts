// Task 1
export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [index: string]: any;
}

// Task 2
export interface Directors extends Teacher {
  numberOfReports: number;
}
