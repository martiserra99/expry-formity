import type { Executions } from "@expry/system";
import type { OnNext, OnBack } from "@formity/react";
import type { DefaultValues, Resolver } from "react-hook-form";
import { Fragment, type ReactNode } from "react";

import { MultiStep } from "@/multi-step";

import {
  FormStep,
  FormStepContent,
  FormStepHeading,
  FormStepInputs,
  FormStepRow,
} from "@/components/form-step";

import { TextInput } from "@/components/input/text-input";
import { NumberInput } from "@/components/input/number-input";
import { Select } from "@/components/input/select";

import { NextButton } from "@/components/buttons/next-button";
import { BackButton } from "@/components/buttons/back-button";

export type ComponentsOperations = {
  jsx$multiStep: {
    params: {
      onNext: unknown;
      onBack: unknown;
      children: unknown;
    };
    return: ReactNode;
  };
  jsx$formStep: {
    params: {
      key: unknown;
      defaultValues: unknown;
      resolver: unknown;
      children: unknown;
    };
    return: ReactNode;
  };
  jsx$formStepContent: {
    params: {
      children: unknown[];
    };
    return: ReactNode;
  };
  jsx$formStepHeading: {
    params: {
      children: unknown;
    };
    return: ReactNode;
  };
  jsx$formStepInputs: {
    params: {
      children: unknown[];
    };
    return: ReactNode;
  };
  jsx$formStepRow: {
    params: {
      children: unknown[];
    };
    return: ReactNode;
  };
  jsx$textInput: {
    params: {
      name: unknown;
      label: unknown;
      placeholder: unknown;
    };
    return: ReactNode;
  };
  jsx$numberInput: {
    params: {
      name: unknown;
      label: unknown;
      placeholder: unknown;
    };
    return: ReactNode;
  };
  jsx$select: {
    params: {
      name: unknown;
      label: unknown;
      options: unknown;
    };
    return: ReactNode;
  };
  jsx$nextButton: {
    params: {
      children: unknown;
    };
    return: ReactNode;
  };
  jsx$backButton: {
    params: {
      children: unknown;
    };
    return: ReactNode;
  };
};

export const componentsOperations: Executions<ComponentsOperations> = {
  jsx$multiStep: (args, vars, expry) => {
    const onNext = expry(args.onNext, vars) as OnNext;
    const onBack = expry(args.onBack, vars) as OnBack;
    const children = expry(args.children, vars) as ReactNode;
    return (
      <MultiStep onNext={onNext} onBack={onBack}>
        {children}
      </MultiStep>
    );
  },
  jsx$formStep: (args, vars, expry) => {
    const key = expry(args.key, vars) as string;
    const defaultValues = expry(args.defaultValues, vars) as DefaultValues<
      Record<string, unknown>
    >;
    const resolver = expry(args.resolver, vars) as Resolver<
      Record<string, unknown>
    >;
    const children = expry(args.children, vars) as ReactNode;
    return (
      <FormStep key={key} defaultValues={defaultValues} resolver={resolver}>
        {children}
      </FormStep>
    );
  },
  jsx$formStepContent: (args, vars, expry) => {
    const children: ReactNode[] = args.children.map((child, index) => {
      const component = expry(child, vars) as ReactNode;
      return <Fragment key={index}>{component}</Fragment>;
    });
    return <FormStepContent>{children}</FormStepContent>;
  },
  jsx$formStepHeading: (args, vars, expry) => {
    const children = expry(args.children, vars) as ReactNode;
    return <FormStepHeading>{children}</FormStepHeading>;
  },
  jsx$formStepInputs: (args, vars, expry) => {
    const children: ReactNode[] = args.children.map((child, index) => {
      const component = expry(child, vars) as ReactNode;
      return <Fragment key={index}>{component}</Fragment>;
    });
    return <FormStepInputs>{children}</FormStepInputs>;
  },
  jsx$formStepRow: (args, vars, expry) => {
    const children: ReactNode[] = args.children.map((child, index) => {
      const component = expry(child, vars) as ReactNode;
      return <Fragment key={index}>{component}</Fragment>;
    });
    return <FormStepRow>{children}</FormStepRow>;
  },
  jsx$textInput: (args, vars, expry) => {
    const name = expry(args.name, vars) as string;
    const label = expry(args.label, vars) as string;
    const placeholder = expry(args.placeholder, vars) as string;
    return <TextInput name={name} label={label} placeholder={placeholder} />;
  },
  jsx$numberInput: (args, vars, expry) => {
    const name = expry(args.name, vars) as string;
    const label = expry(args.label, vars) as string;
    const placeholder = expry(args.placeholder, vars) as string;
    return <NumberInput name={name} label={label} placeholder={placeholder} />;
  },
  jsx$select: (args, vars, expry) => {
    const name = expry(args.name, vars) as string;
    const label = expry(args.label, vars) as string;
    const options = expry(args.options, vars) as {
      value: string;
      label: string;
    }[];
    return <Select name={name} label={label} options={options} />;
  },
  jsx$nextButton: (args, vars, expry) => {
    const children = expry(args.children, vars) as ReactNode;
    return <NextButton>{children}</NextButton>;
  },
  jsx$backButton: (args, vars, expry) => {
    const children = expry(args.children, vars) as ReactNode;
    return <BackButton>{children}</BackButton>;
  },
};
