import CourseGoal from "./CourseGoal.tsx";
import { CourseGoal as CourseGoalType } from "../App.tsx";
interface CourseGoalProps {
  goals: CourseGoalType[];
  onDeleteGoal: (id: number) => void;
}

export default function CourseGoalList({
  goals,
  onDeleteGoal,
}: CourseGoalProps) {
  return (
    <ul>
      {goals.map((goal) => {
        return (
          <li key={goal.id}>
            <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
              {goal.description}
            </CourseGoal>
          </li>
        );
      })}
    </ul>
  );
}
