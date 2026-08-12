import type { ActionItem, ClinicalSummary, Patient, TranscriptMessage, Vitals } from "@/types";

export interface SessionDefinition {
  id: string;
  label: string;
  patient: Patient;
  transcriptSeed: TranscriptMessage[];
  vitals: Vitals;
  summary: ClinicalSummary;
  actionItems: ActionItem[];
}

export const defaultSessionId = "ED-2026-001";

export const mockSessions: SessionDefinition[] = [
  {
    id: "ED-2026-001",
    label: "Session 001",
    patient: {
      name: "Alex Morgan",
      age: 54,
      sex: "Male",
      patientId: "ED-2026-001",
      chiefComplaint: "Chest pain",
      allergies: "Penicillin",
    },
    transcriptSeed: [
      { id: 1, speaker: "Doctor", text: "What brings you to the emergency department today?", timestamp: "08:42:11" },
      { id: 2, speaker: "Patient", text: "I've been having severe chest pain for about thirty minutes.", timestamp: "08:42:18" },
      { id: 3, speaker: "Doctor", text: "Does the pain radiate anywhere?", timestamp: "08:42:22" },
      { id: 4, speaker: "Patient", text: "It goes toward my left arm and I feel a little short of breath.", timestamp: "08:42:30" },
      { id: 5, speaker: "Doctor", text: "Are you experiencing dizziness or nausea?", timestamp: "08:42:36" },
      { id: 6, speaker: "Patient", text: "I feel mildly dizzy and lightheaded.", timestamp: "08:42:41" },
      { id: 7, speaker: "Doctor", text: "Do you have any history of cardiac symptoms or hypertension?", timestamp: "08:42:48" },
      { id: 8, speaker: "Patient", text: "Yes, I have hypertension and this is the first time I've had this kind of pain.", timestamp: "08:42:56" },
    ],
    vitals: {
      heartRate: "—",
      bloodPressure: "—",
      spo2: "—",
      temperature: "—",
      respiratoryRate: "—",
    },
    summary: {
      symptoms: "—",
      duration: "—",
      observations: "—",
    },
    actionItems: [
      { id: 1, title: "Immediate clinical assessment", priority: "High", completed: false },
      { id: 2, title: "Obtain ECG", priority: "High", completed: false },
      { id: 3, title: "Continue vital monitoring", priority: "Medium", completed: false },
      { id: 4, title: "Physician review", priority: "Medium", completed: false },
    ],
  },
  {
    id: "ED-2026-002",
    label: "Session 002",
    patient: {
      name: "Priya Shah",
      age: 38,
      sex: "Female",
      patientId: "ED-2026-002",
      chiefComplaint: "Shortness of breath",
      allergies: "None",
    },
    transcriptSeed: [
      { id: 1, speaker: "Doctor", text: "What brings you to the emergency department today?", timestamp: "09:05:12" },
      { id: 2, speaker: "Patient", text: "I've been struggling to catch my breath for the last hour.", timestamp: "09:05:18" },
      { id: 3, speaker: "Doctor", text: "Any chest tightness or wheezing?", timestamp: "09:05:24" },
      { id: 4, speaker: "Patient", text: "A little chest tightness and some wheezing, especially when I lie down.", timestamp: "09:05:31" },
      { id: 5, speaker: "Doctor", text: "Do you have any history of asthma or recent illness?", timestamp: "09:05:39" },
      { id: 6, speaker: "Patient", text: "I have a history of asthma and I came down with a mild cold two days ago.", timestamp: "09:05:46" },
      { id: 7, speaker: "Doctor", text: "Any recent exertion or fever?", timestamp: "09:05:53" },
      { id: 8, speaker: "Patient", text: "I ran to catch the bus this morning and I think I might have a low-grade fever.", timestamp: "09:06:00" },
    ],
    vitals: {
      heartRate: "—",
      bloodPressure: "—",
      spo2: "—",
      temperature: "—",
      respiratoryRate: "—",
    },
    summary: {
      symptoms: "—",
      duration: "—",
      observations: "—",
    },
    actionItems: [
      { id: 1, title: "Immediate clinical assessment", priority: "High", completed: false },
      { id: 2, title: "Obtain ECG", priority: "High", completed: false },
      { id: 3, title: "Continue vital monitoring", priority: "Medium", completed: false },
      { id: 4, title: "Physician review", priority: "Medium", completed: false },
    ],
  },
  {
    id: "ED-2026-003",
    label: "Session 003",
    patient: {
      name: "Daniel Reed",
      age: 67,
      sex: "Male",
      patientId: "ED-2026-003",
      chiefComplaint: "Abdominal pain",
      allergies: "None",
    },
    transcriptSeed: [
      { id: 1, speaker: "Doctor", text: "What brings you to the emergency department today?", timestamp: "10:14:08" },
      { id: 2, speaker: "Patient", text: "I've had severe abdominal pain in the lower right area for several hours.", timestamp: "10:14:17" },
      { id: 3, speaker: "Doctor", text: "Does the pain move or worsen with movement?", timestamp: "10:14:23" },
      { id: 4, speaker: "Patient", text: "It hurts more when I move and I feel nauseated.", timestamp: "10:14:31" },
      { id: 5, speaker: "Doctor", text: "Have you had fever, vomiting, or a change in appetite?", timestamp: "10:14:38" },
      { id: 6, speaker: "Patient", text: "Yes, I have had nausea and a mild fever, and I haven't eaten much.", timestamp: "10:14:47" },
      { id: 7, speaker: "Doctor", text: "Any history of gallbladder or bowel issues?", timestamp: "10:14:54" },
      { id: 8, speaker: "Patient", text: "I had a similar episode two years ago, but nothing like this before.", timestamp: "10:15:02" },
    ],
    vitals: {
      heartRate: "—",
      bloodPressure: "—",
      spo2: "—",
      temperature: "—",
      respiratoryRate: "—",
    },
    summary: {
      symptoms: "—",
      duration: "—",
      observations: "—",
    },
    actionItems: [
      { id: 1, title: "Immediate clinical assessment", priority: "High", completed: false },
      { id: 2, title: "Obtain ECG", priority: "High", completed: false },
      { id: 3, title: "Continue vital monitoring", priority: "Medium", completed: false },
      { id: 4, title: "Physician review", priority: "Medium", completed: false },
    ],
  },
];
