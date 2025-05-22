import { createExpry } from "@expry/system";
import { basicOperations, type BasicOperations } from "@expry/basic";
import { formityOperations, type FormityOperations } from "@expry/formity";

import { componentsOperations, type ComponentsOperations } from "./components";
import { zodOperations, type ZodOperations } from "./zod";

type Operations = [
  BasicOperations,
  FormityOperations,
  ComponentsOperations,
  ZodOperations,
];

export const expry = createExpry<Operations>(
  basicOperations,
  formityOperations,
  componentsOperations,
  zodOperations,
);
