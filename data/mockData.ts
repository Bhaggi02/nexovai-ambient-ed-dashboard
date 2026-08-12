import type { ActionItem, ClinicalSummary, Patient, TranscriptMessage, Vitals } from "@/types";

export const transcriptSeed: TranscriptMessage[] = [
  {
    id: 1,
    speaker: "Doctor",
    text: "What brings you to the emergency department today?",
    timestamp: "08:42:11",
  },
  {
    id: 2,
    speaker: "Patient",
    text: "I've been having severe chest pain for about thirty minutes.",
    timestamp: "08:42:18",
  },
  {
    id: 3,
    speaker: "Doctor",
    text: "Does the pain radiate anywhere?",
    timestamp: "08:42:22",
  },
  {
    id: 4,
    speaker: "Patient",
    text: "It goes toward my left arm, and I feel a little short of breath.",
    timestamp: "08:42:30",
  },
  {
    id: 5,
    speaker: "Doctor",
    text: "Are you experiencing dizziness or nausea?",
    timestamp: "08:42:36",
  },
  {
    id: 6,
    speaker: "Patient",
    text: "I feel mildly dizzy and a bit lightheaded.",
    timestamp: "08:42:41",
  },
  {
    id: 7,
    speaker: "Doctor",
    text: "Do you have any history of cardiac symptoms or hypertension?",
    timestamp: "08:42:48",
  },
  {
    id: 8,
    speaker: "Patient",
    text: "Yes, I have hypertension and this is the first time I've had this kind of pain.",
    timestamp: "08:42:56",
  },
];

export const initialPatient: Patient = {
  name: "Ava Patel",
  age: 54,
  sex: "Male",
  patientId: "ED-2048",
  chiefComplaint: "—",
  allergies: "Shellfish",
};

export const initialVitals: Vitals = {
  bloodPressure: "—",
  heartRate: "—",
  spo2: "—",
  temperature: "—",
  respiratoryRate: "—",
};

export const initialClinicalSummary: ClinicalSummary = {
  symptoms: "—",
  duration: "—",
  observations: "—",
};

export const initialActionItems: ActionItem[] = [
  { id: 1, title: "Immediate clinical assessment", priority: "High", completed: false },
  { id: 2, title: "Obtain ECG", priority: "High", completed: false },
  { id: 3, title: "Continue vital monitoring", priority: "Medium", completed: false },
  { id: 4, title: "Physician review", priority: "Medium", completed: false },
];

export const riyaStates = ["IDLE", "LISTENING", "PROCESSING", "ALERTING"] as const;
