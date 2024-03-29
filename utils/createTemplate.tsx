import { blue } from "@nextui-org/react";
import {
  ComponentType,
  ExoticComponent,
  FC,
  ForwardRefExoticComponent,
  ForwardedRef,
  JSXElementConstructor,
  PropsWithRef,
  ReactElement,
  RefAttributes,
  forwardRef,
  SVGProps,
  HTMLProps,
  ClassAttributes,
  HTMLAttributes,
  DetailedHTMLProps,
  PropsWithoutRef,
} from "react";

export type StandaloneConfiguration = {
  type: "text" | "textfield" | "image";
  value: string;
};

export type MultiConfiguration = {
  type: "collection";
  value: Record<string, StandaloneConfiguration>[];
};

export type Configuration = StandaloneConfiguration | MultiConfiguration;

export type Template<
  T extends Record<string, Configuration> = Record<string, Configuration>
> = {
  Element: ReturnType<
    typeof forwardRef<
      HTMLDivElement,
      HTMLAttributes<HTMLDivElement> & { variables: T }
    >
  >;
  configuration: T;
};

export const createTemplate = <T extends Record<string, Configuration>>(
  variables: T,
  element: Parameters<
    typeof forwardRef<
      HTMLDivElement,
      HTMLAttributes<HTMLDivElement> & { variables: T }
    >
  >[0]
): Template<T> => {
  return {
    configuration: variables,

    Element: forwardRef(element),
  };
};
