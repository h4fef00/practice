import "./App.css";
import Header from "./components/Header";
import CourseGoalList from "./components/CourseGoalList";
import NewGoal from "./components/NewGoal";
import goalImg from "./assets/goals.jpg";
import { useState } from "react";
export interface CourseGoal {
  title: string;
  description: string;
  id: number;
}
function App() {
  const [goals, setGoal] = useState<CourseGoal[]>([]);
  function handleAddGoal(goal: string, summary: string) {
    setGoal((prevGoals) => {
      const newGoals: CourseGoal = {
        id: Math.random(),
        title: goal,
        description: summary,
      };
      return [...prevGoals, newGoals];
    });
  }

  function handleDeleteGoal(id: number) {
    setGoal((prevGoals) => prevGoals.filter((goal) => goal.id != id));
  }

  return (
    <main>
      <Header src={goalImg} alt="A list of goals">
        <h1>Your course goals</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal} />
      {/* <button onClick={handleAddGoal}>Add goal</button> */}
      <CourseGoalList
        goals={goals}
        onDeleteGoal={handleDeleteGoal}
      ></CourseGoalList>
    </main>
  );
}

export default App;
