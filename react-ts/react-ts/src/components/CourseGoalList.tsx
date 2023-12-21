import CourseGoal from "./CourseGoal.tsx";
import { CourseGoal as CourseGoalType } from "../App.tsx";
import InfoBox from "./InfoBox";
import { ReactNode } from "react";

interface CourseGoalProps {
  goals: CourseGoalType[];
  onDeleteGoal: (id: number) => void;
}

export default function CourseGoalList({
  goals,
  onDeleteGoal,
}: CourseGoalProps) {
  if (goals.length === 0) {
    return (
      <InfoBox mode="hint">
        You have no course goals yet, start adding some
      </InfoBox>
    );
  }

  let warningBox: ReactNode;
  if (goals.length >= 4) {
    warningBox = (
      <InfoBox mode="warning" severity="high">
        You have too much goals
      </InfoBox>
    );
  }

  return (
    <>
      {warningBox}
      <ul>
        {goals.map((goal) => {
          return (
            <li key={goal.id}>
              <CourseGoal
                id={goal.id}
                title={goal.title}
                onDelete={onDeleteGoal}
              >
                {goal.description}
              </CourseGoal>
            </li>
          );
        })}
      </ul>
    </>
  );
}
