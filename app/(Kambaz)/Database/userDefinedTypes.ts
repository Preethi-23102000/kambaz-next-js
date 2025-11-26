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

export interface newAssignment {
  _id?: string;
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
  editing?: boolean;
}

export interface Module {
  _id: string;
  name: string;
  description: string;
  course: string;
  lessons: Lesson[];
   editing?: boolean;
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