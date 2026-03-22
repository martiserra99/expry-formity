import type { OnNext, OnBack } from "@formity/react";

export interface MultiStepValue {
  onNext: OnNext<Record<string, unknown>>;
  onBack: OnBack<Record<string, unknown>>;
}
