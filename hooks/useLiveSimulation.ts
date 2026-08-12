"use client";

import { useEffect, useRef, useState } from "react";
import { mockSessions } from "@/data/mockSessions";
import type {
  ActionItem,
  ClinicalSummary,
  Patient,
  RiyaState,
  TranscriptMessage,
  Vitals,
} from "@/types";

interface SimulationState {
  transcripts: TranscriptMessage[];
  patient: Patient;
  vitals: Vitals;
  summary: ClinicalSummary;
  actionItems: ActionItem[];
  riyaState: RiyaState;
  highlightedField: string | null;
  alertMessage: string | null;
}

const getSessionForId = (sessionId: string) => mockSessions.find((entry) => entry.id === sessionId) ?? mockSessions[0];

const buildInitialState = (sessionId = "ED-2026-001"): SimulationState => {
  const session = getSessionForId(sessionId);

  return {
    transcripts: [],
    patient: { ...session.patient },
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
    actionItems: session.actionItems.map((item) => ({ ...item })),
    riyaState: "IDLE",
    highlightedField: null,
    alertMessage: null,
  };
};

const applySimulationEvent = (
  sessionId: string,
  previousState: SimulationState,
  eventIndex: number,
): SimulationState => {
  const session = getSessionForId(sessionId);
  const nextState: SimulationState = {
    ...previousState,
    transcripts: [...previousState.transcripts, session.transcriptSeed[eventIndex]],
    highlightedField: null,
    alertMessage: null,
  };

  switch (eventIndex) {
    case 0:
      nextState.riyaState = "LISTENING";
      nextState.highlightedField = "chiefComplaint";
      break;
    case 1:
      nextState.riyaState = "PROCESSING";
      nextState.summary = { ...previousState.summary, duration: "~30 minutes" };
      nextState.highlightedField = "duration";
      break;
    case 2:
      nextState.riyaState = "LISTENING";
      nextState.summary = {
        ...previousState.summary,
        observations:
          sessionId === "ED-2026-001"
            ? "Pain radiates to the left arm."
            : sessionId === "ED-2026-002"
              ? "Wheezing is more pronounced when lying flat."
              : "Tenderness is localized in the lower right abdomen.",
      };
      nextState.highlightedField = "observations";
      break;
    case 3:
      nextState.riyaState = "PROCESSING";
      nextState.summary = {
        ...previousState.summary,
        symptoms:
          sessionId === "ED-2026-001"
            ? "Chest pain, shortness of breath"
            : sessionId === "ED-2026-002"
              ? "Chest tightness, wheezing"
              : "Abdominal pain, nausea",
      };
      nextState.highlightedField = "symptoms";
      break;
    case 4:
      nextState.riyaState = "LISTENING";
      nextState.vitals = { ...previousState.vitals, heartRate: "108 bpm" };
      nextState.highlightedField = "heartRate";
      break;
    case 5:
      nextState.riyaState = "PROCESSING";
      nextState.vitals = { ...previousState.vitals, bloodPressure: "150/95 mmHg" };
      nextState.highlightedField = "bloodPressure";
      break;
    case 6:
      nextState.riyaState = "ALERTING";
      nextState.vitals = { ...previousState.vitals, spo2: "94%" };
      nextState.highlightedField = "spo2";
      nextState.alertMessage = "Oxygen saturation trending low";
      nextState.actionItems = previousState.actionItems.map((item) =>
        item.id === 2 ? { ...item, completed: true } : item,
      );
      break;
    case 7:
      nextState.riyaState = "LISTENING";
      nextState.vitals = { ...previousState.vitals, temperature: "37.2°C", respiratoryRate: "22/min" };
      nextState.highlightedField = "temperature";
      nextState.actionItems = previousState.actionItems.map((item) =>
        item.id === 1 ? { ...item, completed: true } : item,
      );
      break;
    default:
      nextState.riyaState = "IDLE";
      break;
  }

  return nextState;
};

export function useLiveSimulation() {
  const [activeSessionId, setActiveSessionId] = useState("ED-2026-001");
  const [state, setState] = useState<SimulationState>(() => buildInitialState("ED-2026-001"));
  const [simulationStatus, setSimulationStatus] = useState<"ready" | "running" | "paused" | "complete">("ready");
  const transcriptEndRef = useRef<HTMLDivElement | null>(null);
  const timeoutRef = useRef<number | null>(null);
  const currentIndexRef = useRef(0);
  const [currentTime, setCurrentTime] = useState(() =>
    new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    })
  );

  const clearTimer = () => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
      );
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (simulationStatus !== "running") {
      clearTimer();
      return;
    }

    const activeSession = getSessionForId(activeSessionId);
    const hasMoreEvents = currentIndexRef.current < activeSession.transcriptSeed.length;

    if (!hasMoreEvents) {
      clearTimer();
      setSimulationStatus("complete");
      setState((prev) => ({ ...prev, riyaState: "IDLE", highlightedField: null, alertMessage: null }));
      return;
    }

    timeoutRef.current = window.setTimeout(() => {
      const eventIndex = currentIndexRef.current;
      const nextIndex = eventIndex + 1;

      setState((prev) => applySimulationEvent(activeSessionId, prev, eventIndex));
      currentIndexRef.current = nextIndex;

      if (nextIndex >= activeSession.transcriptSeed.length) {
        setSimulationStatus("complete");
        setState((prev) => ({ ...prev, riyaState: "IDLE", highlightedField: null, alertMessage: null }));
      }
    }, 1200);

    return clearTimer;
  }, [activeSessionId, simulationStatus]);

  useEffect(() => {
    transcriptEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [state.transcripts]);

  const loadSession = (sessionId: string) => {
    clearTimer();
    currentIndexRef.current = 0;
    setActiveSessionId(sessionId);
    setState(buildInitialState(sessionId));
    setSimulationStatus("ready");
  };

  const startSimulation = () => {
    if (simulationStatus === "running") return;

    clearTimer();

    if (simulationStatus === "ready" || simulationStatus === "complete") {
      currentIndexRef.current = 0;
      setState(buildInitialState(activeSessionId));
    }

    setSimulationStatus("running");
    setState((prev) => ({
      ...prev,
      riyaState: "LISTENING",
      alertMessage: null,
      highlightedField: null,
    }));
  };

  const pauseSimulation = () => {
    if (simulationStatus !== "running") return;
    clearTimer();
    setSimulationStatus("paused");
  };

  const resumeSimulation = () => {
    if (simulationStatus !== "paused") return;
    setSimulationStatus("running");
  };

  const resetSimulation = () => {
    clearTimer();
    currentIndexRef.current = 0;
    setState(buildInitialState(activeSessionId));
    setSimulationStatus("ready");
  };

  return {
    state,
    currentTime,
    simulationStatus,
    transcriptEndRef,
    activeSessionId,
    startSimulation,
    pauseSimulation,
    resumeSimulation,
    resetSimulation,
    loadSession,
  };
}

