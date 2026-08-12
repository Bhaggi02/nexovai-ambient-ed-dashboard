"use client";

import { ActionItems } from "@/components/ActionItems";
import { AmbientListener } from "@/components/AmbientListener";
import { ClinicalSummary } from "@/components/ClinicalSummary";
import { Disclaimer } from "@/components/Disclaimer";
import { Header } from "@/components/Header";
import { PatientInfo } from "@/components/PatientInfo";
import { RiyaAgent } from "@/components/RiyaAgent";
import { SessionSelector } from "@/components/SessionSelector";
import { SimulationControls } from "@/components/SimulationControls";
import { Vitals } from "@/components/Vitals";
import { mockSessions } from "@/data/mockSessions";
import { useLiveSimulation } from "@/hooks/useLiveSimulation";

export function TriageDashboard() {
  const {
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
  } = useLiveSimulation();

  const selectedSession = mockSessions.find((session) => session.id === activeSessionId) ?? mockSessions[0];

  const sessionOptions = mockSessions.map((session) => ({
    id: session.id,
    label: session.label,
    patientName: session.patient.name,
    age: session.patient.age,
    sex: session.patient.sex,
    chiefComplaint: session.patient.chiefComplaint,
  }));

  return (
    <main className="relative min-h-screen px-4 py-4 text-slate-100 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4">
        <Header
          currentTime={currentTime}
          riyaState={state.riyaState}
          sessionId={selectedSession.id}
          statusLabel={simulationStatus === "running" ? "ACTIVE" : simulationStatus === "paused" ? "PAUSED" : simulationStatus === "complete" ? "COMPLETE" : "READY"}
        />

        <div className="grid gap-4 xl:grid-cols-[280px_minmax(0,1fr)]">
          <SessionSelector
            sessions={sessionOptions}
            selectedSessionId={selectedSession.id}
            onSelect={loadSession}
          />

          <section className="grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
            <AmbientListener state={state.riyaState} messages={state.transcripts} transcriptEndRef={transcriptEndRef} />

            <div className="space-y-4">
              <div className="rounded-[28px] border border-slate-800/80 bg-slate-950/80 p-5 shadow-[0_16px_60px_rgba(2,8,23,0.55)]">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Live case sheet</p>
                    <h2 className="text-xl font-semibold text-slate-100">Structured triage view</h2>
                  </div>
                  <div className="rounded-full border border-cyan-400/25 bg-cyan-500/10 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-cyan-200">
                    {state.riyaState}
                  </div>
                </div>

                <div className="space-y-4">
                  <PatientInfo patient={state.patient} highlighted={state.highlightedField} />
                  <Vitals vitals={state.vitals} highlighted={state.highlightedField} />
                  <ClinicalSummary summary={state.summary} highlighted={state.highlightedField} />
                  <ActionItems items={state.actionItems} />
                </div>
              </div>

              <div className="rounded-[28px] border border-slate-800/80 bg-slate-950/80 p-5 shadow-[0_16px_60px_rgba(2,8,23,0.55)]">
                <SimulationControls
                  onStart={startSimulation}
                  onPause={pauseSimulation}
                  onResume={resumeSimulation}
                  onReset={resetSimulation}
                  simulationStatus={simulationStatus}
                  state={state}
                />
                <Disclaimer />
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="pointer-events-none fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6">
        <div className="pointer-events-auto">
          <RiyaAgent state={state.riyaState} />
        </div>
      </div>
    </main>
  );
}
