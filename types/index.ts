export type RiyaState = "IDLE" | "LISTENING" | "PROCESSING" | "ALERTING";

export interface TranscriptMessage {
  id: number;
  speaker: "Doctor" | "Patient" | "RIYA";
  text: string;
  timestamp: string;
}

export interface Patient {
  name: string;
  age: number;
  sex: string;
  patientId: string;
  chiefComplaint: string;
  allergies: string;
}

export interface ClinicalSummary {
  symptoms: string;
  duration: string;
  observations: string;
}

export interface Vitals {
  bloodPressure: string;
  heartRate: string;
  spo2: string;
  temperature: string;
  respiratoryRate: string;
}

export interface ActionItem {
  id: number;
  title: string;
  priority: "High" | "Medium" | "Low";
  completed: boolean;
}

export interface CaseSheetState {
  patient: Patient;
  vitals: Vitals;
  summary: ClinicalSummary;
  actionItems: ActionItem[];
}

export interface SimulationEvent {
  type: "transcript" | "patient" | "vitals" | "summary" | "action" | "alert";
  payload: unknown;
}
