# NexovAI — Ambient ED Voice Agent Dashboard

## Overview
NexovAI is a polished emergency department triage dashboard prototype designed for an internship portfolio submission. It presents a calm, high-contrast monitoring interface with an ambient voice agent, live transcript timeline, structured patient case sheet, and simulated clinical alerting.

The project emphasizes frontend UX quality, realistic mock data flow, and modular React architecture without introducing backend systems, real patient information, or live audio capture.

## Features
- Zero-login dashboard entry
- Persistent RIYA agent widget with IDLE, LISTENING, PROCESSING, and ALERTING states
- Ambient listener panel with simulated waveform visualizer
- Live transcript timeline with progressive updates and timestamps
- Structured ED case sheet with patient demographics, triage summary, vitals, and action items
- Start, pause, resume, and reset simulation controls
- Session selector supporting multiple mock emergency-room scenarios
- Responsive desktop, tablet, and mobile layout
- Dark clinical visual style with subtle cyan and blue accents
- Simulated clinical data labeling for demonstration-only use

## Tech Stack
- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- lucide-react

## Simulated Data Notice
This project is intentionally built with mock data only.

- No real microphone input
- No real audio processing
- No WebSocket connection
- No authentication or login flow
- No backend or database
- No real patient records
- No actual diagnosis engine

Clinical content is simulated for demonstration and portfolio purposes only.

## Architecture Overview
- app/ — App Router entry and global styling
- components/ — UI modules such as Header, PatientInfo, Vitals, AmbientListener, SessionSelector, and RIYA
- data/ — mock session and transcript definitions
- hooks/ — live simulation logic and timer-driven updates
- types/ — shared TypeScript interfaces for clinical data and simulation state

## Local Development
Install dependencies:

```bash
npm install
```

Run the app in development mode:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Run lint checks:

```bash
npm run lint
```

## Deployment
This project is suitable for deployment on platforms like Vercel using the standard Next.js build configuration. It does not require a backend or auth service.

## Internship Scope and Guardrails
The project deliberately stays within frontend simulation scope:
- no live audio capture
- no real-time WebSocket data ingestion
- no authentication
- no real patient database
- no medical diagnosis logic
- no unnecessary backend architecture

The goal is a polished UX and mock operational flow that feels realistic while remaining safe and demo-ready.

## Important Note
NexovAI is a simulated clinical dashboard for demonstration purposes only. It is not a medical device, not a real monitoring system, and not a real patient care application.
