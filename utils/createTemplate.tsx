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

export type Configuration = {
  type: "text" | "textfield";
  value: string;
};

export type Template<
  T extends Record<string, Configuration> = Record<string, Configuration>
> = {
  Element: ForwardRefExoticComponent<
    PropsWithoutRef<JSX.IntrinsicElements["div"] & { variables: T }> &
      RefAttributes<HTMLDivElement>
  >;
  configuration: T;
};

export const createTemplate = <
  T extends Record<string, Configuration> = Record<string, Configuration>
>(
  variables: T,
  element: ForwardRefExoticComponent<
    PropsWithoutRef<JSX.IntrinsicElements["div"] & { variables: T }> &
      RefAttributes<HTMLDivElement>
  >
): Template => {
  return {
    configuration: variables,
    Element: element,
  };
};
