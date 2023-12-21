import { ReactNode } from "react";

type HintBoxProps = {
  mode: "hint";
  children: ReactNode;
};

type WarningBoxProps = {
  mode: "warning";
  children: ReactNode;
  severity: "low" | "medium" | "high";
};

type InfoBoxProps = HintBoxProps | WarningBoxProps;

export default function InfoBox(props: InfoBoxProps) {
  const { mode, children } = props;
  if (mode === "hint") {
    return (
      <aside className="infobox infobox-hint">
        {/* <h1>WARNING</h1> */}
        <p>{children}</p>
      </aside>
    );
  }

  const { severity } = props;

  return (
    <aside className={`infobox infobox-warning warning--${severity}`}>
      <h2>Warning</h2>
      <p>{children}</p>
    </aside>
  );

  //   return (
  //     <aside>
  //       {mode === "warning" ? <h1>WARNING</h1> : "null"}
  //       <p>{children}</p>
  //     </aside>
  //   );
}
