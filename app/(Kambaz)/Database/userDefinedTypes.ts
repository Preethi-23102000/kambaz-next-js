// Previously used 'any' while filtering through modules and assignments,
// which caused TypeScript error and prevented deployment.
// Error: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
// Updated to use a defined interface (e.g., Module or Assignment or Lesson) from userDefinedTypes

export interface AssignmentDescription {
  summary: string;
  requirements: string[];
  note: string;
}

export interface Assignment {
  _id: string;
  title: string;
  course: string;
  modules: string;
  availableDateWords: string;
  dueDateWords: string;
  available: string;  
  due: string;        
  until: string;   
  description: AssignmentDescription;
  assignmentGroup: string;
  displayGrade: string;
  submissionType: string;
  assignedTo: string;
  points: number;
}

export interface Lesson {
  _id: string;
  name: string;
  description :string;
  module: string;
}

export interface Module {
  _id: string;
  name: string;
  description: string;
  course: string;
  lessons: Lesson[];
}

export interface User{
    _id: string;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    email: string;
    dob: string;
    role: string;
    loginId: string;
    section: string;
    lastActivity: string;
    totalActivity: string;
}