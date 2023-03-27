import { Template, TestTemplate } from "@/utils/createTemplate";
import React, { forwardRef, useEffect, useState } from "react";
import { FC, PropsWithChildren } from "react";

export const DocumentContext = React.createContext<
  readonly [Template, (key: string, value: string) => void]
>([
  {
    configuration: {},
    Element: forwardRef(() => <p>Placeholder</p>),
  },
  () => undefined,
] as const);

type DocumentProviderProps = {
  defaultTemplate: Template;
};

export const DocumentProvider: FC<PropsWithChildren<DocumentProviderProps>> = ({
  defaultTemplate,
  children,
}) => {
  const [template, setTemplate] = useState<Template>(defaultTemplate);

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

  const value = [template, handleChange] as const;

  return (
    <DocumentContext.Provider value={value}>
      {children}
    </DocumentContext.Provider>
  );
};
