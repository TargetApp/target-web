export interface ClassificationReport {
  id?: number;
  userId?: number;
  imageBase64?: string;
  modelId?: number;
  diseaseId?: number;
  diseaseName?: string;
  severityId?: number;
  severity?: string;
  prevention?: string;
  description?: string;
  treatment?: string;
  createdAt?: string;
}
