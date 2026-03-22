import { useContext } from "react";

import { MultiStepContext } from "./multi-step-context";

function useMultiStep() {
  const context = useContext(MultiStepContext);
  if (!context) throw new Error("useMultiStep must be used within a MultiStep");
  return context;
}

export { useMultiStep };
