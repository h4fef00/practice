/*type CourseGoalType = {
  title: string;
  description: string;
};*/

import { type PropsWithChildren } from "react";
/*}interface CourseGoalType {
  title: string;
  children: ReactNode;
}*/

type CourseGoalType = PropsWithChildren<{
  title: string;
  id: number;
  onDelete: (id: number) => void;
}>;

export default function CourseGoal({
  title,
  id,
  onDelete,
  children,
}: CourseGoalType) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{children}</p>
        <button onClick={() => onDelete(id)}>Delete</button>
      </div>
    </article>
  );
}
