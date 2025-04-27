export interface Tecnico {
  id: number;
  name: string;
  telephone: string;
  email: string;
  professionalQualification: string;
  occupationArea: string;
  councilRegistration: string;
  description: string;
  evaluation: string;
  newEvaluation?: number;
  isExpanded: boolean;
}
