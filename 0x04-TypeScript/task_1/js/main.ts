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

// Task 4
export interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassMethod;
}

export interface StudentClassMethod {
  workOnHomework(): string;
  displayName(): string;
}

export class StudentClass implements StudentClassMethod {
  private _firstName!: string;
  private _lastName!: string;

  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  workOnHomework() {
    return 'Currently working';
  }

  displayName() {
    return this._firstName;
  }
}
