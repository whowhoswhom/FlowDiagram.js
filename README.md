# FlowDiagram.js

## Overview
A visual, interactive, and editable diagram representing Jose's infrastructure tools: GitHub, Vercel, Supabase, Cursor, Codex, and Operator. Built with Next.js and React Flow, this project allows you to view and edit the relationships between these tools in a full-screen, minimal UI.

## Features
- Draggable nodes with custom labels (e.g., "Supabase")
- Connectable edges between nodes (drag to connect)
- MiniMap, zoom controls, and background grid
- Live editing: move, connect, or delete nodes/edges
- Full screen layout (100vh)
- Minimal, functional styling
- Clickable nodes open dashboard URLs or trigger OAuth

## Getting Started
1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```
2. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
3. **Open [http://localhost:3000](http://localhost:3000) to view the diagram.**

## Deployment
- Deployable on Vercel (recommended)

## Future Enhancements
  - Enable node creation via UI
  - Save/load layout from Supabase
  - Integrate ChatGPT (Operator) for editing support

---

For more details, see the PRD in the project notes.
