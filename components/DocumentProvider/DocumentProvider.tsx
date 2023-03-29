import { Configuration, Template } from "@/utils/createTemplate";
import React, { forwardRef, useEffect, useState } from "react";
import { FC, PropsWithChildren } from "react";

export const DocumentContext = React.createContext<
  readonly [Template, (key: string, value: string) => void]
>([
  {
    configuration: {},
    // eslint-disable-next-line react/display-name
    Element: forwardRef(() => <p>Placeholder</p>),
  },
  () => undefined,
] as const);

type DocumentProviderProps<T extends Record<string, Configuration>> = {
  defaultTemplate: Template<T>;
};

export const DocumentProvider = <T extends Record<string, Configuration>>({
  defaultTemplate,
  children,
}: PropsWithChildren<DocumentProviderProps<T>>) => {
  const [template, setTemplate] = useState<Template<T>>(defaultTemplate);

  const handleChange = (key: string, value: string) => {
    setTemplate((currentTemplate) => {
      return {
        ...currentTemplate,
        configuration: {
          ...currentTemplate.configuration,
          ...{ [key]: { ...currentTemplate.configuration[key], value } },
        },
      };
    });
  };

  const value = [template as unknown as Template, handleChange] as const;

  return (
    <DocumentContext.Provider value={value}>
      {children}
    </DocumentContext.Provider>
  );
};
