import { useState } from 'react'
import './App.css'
import WorkoutList from "./components/WorkoutList";
import workouts from  "/workspaces/react-gym-real/workout-tracker/src/data/workouts.json";

function App() {
  return (
    <div>
      <h1>Workout Tracker</h1>
      <WorkoutList workouts={workouts} />
    </div>
  );
}

export default App
