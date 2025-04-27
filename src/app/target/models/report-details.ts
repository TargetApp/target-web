import { CommonDiseases } from "./common-diseases";
import { ReportDate } from "./report-date";

export interface ReportDetails {
  month: string,
  analysisAmount: number,
  diseaseAmount: number,
  mostCommonDiseases: CommonDiseases[],
  reportDates: ReportDate[]
}
