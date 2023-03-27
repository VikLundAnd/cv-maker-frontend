"use client";

import {
  Component,
  ComponentType,
  FC,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "./DocumentPrinter.module.scss";
import { useTemplate } from "@/hooks/useTemplate";

export const DocumentPrinter: FC = () => {
  const [{ Element, configuration }] = useTemplate();
  return (
    <Element
      className={styles.printContainer}
      style={{ width: "100%", aspectRatio: "1 / 1.41" }}
      variables={configuration}
    />
  );
};
