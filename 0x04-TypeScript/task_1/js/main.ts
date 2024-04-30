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

// Task 3
export function printTeacher(firstName:string, lastName:string): string {
    return `${firstName[0]}. ${lastName}`
}

interface PrintTeacherFunction {
    (firstName: string, lastName: string): string;
}
