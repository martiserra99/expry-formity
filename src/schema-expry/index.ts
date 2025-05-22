import type { Schema, Return } from "@formity/react";
import { expry } from "./expry";

export type Values = [Return<unknown>];

export const schema = expry([
  {
    $schema$form: {
      values: {
        name: ["", []],
        surname: ["", []],
        age: [20, []],
      },
      render: {
        $jsx$multiStep: {
          onNext: "$$onNext",
          onBack: "$$onBack",
          children: {
            $jsx$formStep: {
              key: "yourself",
              defaultValues: "$$values",
              resolver: {
                $zod$resolver: {
                  $zod$object: {
                    name: {
                      $zod$string: [
                        {
                          type: "min",
                          args: 1,
                          text: "Required",
                        },
                        {
                          type: "max",
                          args: 20,
                          text: "Must be at most 20 characters",
                        },
                      ],
                    },
                    surname: {
                      $zod$string: [
                        {
                          type: "min",
                          args: 1,
                          text: "Required",
                        },
                        {
                          type: "max",
                          args: 20,
                          text: "Must be at most 20 characters",
                        },
                      ],
                    },
                    age: {
                      $zod$number: [
                        {
                          type: "min",
                          args: 18,
                          text: "Minimum of 18 years old",
                        },
                        {
                          type: "max",
                          args: 99,
                          text: "Maximum of 99 years old",
                        },
                      ],
                    },
                  },
                },
              },
              children: {
                $jsx$formStepContent: {
                  children: [
                    {
                      $jsx$formStepHeading: {
                        children: "Tell us about yourself",
                      },
                    },
                    {
                      $jsx$formStepInputs: {
                        children: [
                          {
                            $jsx$formStepRow: {
                              children: [
                                {
                                  $jsx$textInput: {
                                    name: "name",
                                    label: "Name",
                                    placeholder: "Your name",
                                  },
                                },
                                {
                                  $jsx$textInput: {
                                    name: "surname",
                                    label: "Surname",
                                    placeholder: "Your surname",
                                  },
                                },
                              ],
                            },
                          },
                          {
                            $jsx$numberInput: {
                              name: "age",
                              label: "Age",
                              placeholder: "Your age",
                            },
                          },
                        ],
                      },
                    },
                    {
                      $jsx$nextButton: {
                        children: "Next",
                      },
                    },
                  ],
                },
              },
            },
          },
        },
      },
    },
  },
  {
    $schema$form: {
      values: {
        softwareDeveloper: ["yes", []],
      },
      render: {
        $jsx$multiStep: {
          onNext: "$$onNext",
          onBack: "$$onBack",
          children: {
            $jsx$formStep: {
              key: "softwareDeveloper",
              defaultValues: "$$values",
              resolver: {
                $zod$resolver: {
                  $zod$object: {
                    softwareDeveloper: {
                      $zod$string: [],
                    },
                  },
                },
              },
              children: {
                $jsx$formStepContent: {
                  children: [
                    {
                      $jsx$formStepHeading: {
                        children: "Are you a software developer?",
                      },
                    },
                    {
                      $jsx$formStepInputs: {
                        children: [
                          {
                            $jsx$select: {
                              name: "softwareDeveloper",
                              label: "Software developer",
                              options: [
                                { value: "yes", label: "Yes" },
                                { value: "no", label: "No" },
                              ],
                            },
                          },
                        ],
                      },
                    },
                    {
                      $jsx$formStepRow: {
                        children: [
                          {
                            $jsx$backButton: {
                              children: "Back",
                            },
                          },
                          {
                            $jsx$nextButton: {
                              children: "Next",
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            },
          },
        },
      },
    },
  },
  {
    $schema$cond: {
      if: { $eq: ["$$softwareDeveloper", "yes"] },
      then: [
        {
          $schema$form: {
            values: {
              expertise: ["frontend", []],
            },
            render: {
              $jsx$multiStep: {
                onNext: "$$onNext",
                onBack: "$$onBack",
                children: {
                  $jsx$formStep: {
                    key: "expertise",
                    defaultValues: "$$values",
                    resolver: {
                      $zod$resolver: {
                        $zod$object: {
                          expertise: {
                            $zod$string: [],
                          },
                        },
                      },
                    },
                    children: {
                      $jsx$formStepContent: {
                        children: [
                          {
                            $jsx$formStepHeading: {
                              children: "What is your area of expertise?",
                            },
                          },
                          {
                            $jsx$formStepInputs: {
                              children: [
                                {
                                  $jsx$select: {
                                    name: "expertise",
                                    label: "Expertise",
                                    options: [
                                      {
                                        value: "frontend",
                                        label: "Frontend development",
                                      },
                                      {
                                        value: "backend",
                                        label: "Backend development",
                                      },
                                      {
                                        value: "mobile",
                                        label: "Mobile development",
                                      },
                                    ],
                                  },
                                },
                              ],
                            },
                          },
                          {
                            $jsx$formStepRow: {
                              children: [
                                {
                                  $jsx$backButton: {
                                    children: "Back",
                                  },
                                },
                                {
                                  $jsx$nextButton: {
                                    children: "Submit",
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
            },
          },
        },
        {
          $schema$return: {
            name: "$$name",
            surname: "$$surname",
            age: "$$age",
            softwareDeveloper: true,
            expertise: "$$expertise",
          },
        },
      ],
      else: [
        {
          $schema$form: {
            values: {
              interested: ["yes", []],
            },
            render: {
              $jsx$multiStep: {
                onNext: "$$onNext",
                onBack: "$$onBack",
                children: {
                  $jsx$formStep: {
                    key: "interested",
                    defaultValues: "$$values",
                    resolver: {
                      $zod$resolver: {
                        $zod$object: {
                          interested: {
                            $zod$string: [],
                          },
                        },
                      },
                    },
                    children: {
                      $jsx$formStepContent: {
                        children: [
                          {
                            $jsx$formStepHeading: {
                              children:
                                "Are you interested in learning how to code?",
                            },
                          },
                          {
                            $jsx$formStepInputs: {
                              children: [
                                {
                                  $jsx$select: {
                                    name: "interested",
                                    label: "Interested",
                                    options: [
                                      {
                                        value: "yes",
                                        label: "Yes, I am interested.",
                                      },
                                      {
                                        value: "no",
                                        label: "No, it is not for me.",
                                      },
                                      {
                                        value: "maybe",
                                        label: "Maybe, I am not sure.",
                                      },
                                    ],
                                  },
                                },
                              ],
                            },
                          },
                          {
                            $jsx$formStepRow: {
                              children: [
                                {
                                  $jsx$backButton: {
                                    children: "Back",
                                  },
                                },
                                {
                                  $jsx$nextButton: {
                                    children: "Submit",
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
            },
          },
        },
        {
          $schema$return: {
            name: "$$name",
            surname: "$$surname",
            age: "$$age",
            softwareDeveloper: false,
            interested: "$$interested",
          },
        },
      ],
    },
  },
]) as Schema<Values>;
