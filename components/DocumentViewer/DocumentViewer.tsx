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
import styles from "./DocumentViewer.module.scss";
import { useTemplate } from "@/hooks/useTemplate";

export const DocumentViewer: FC = () => {
  const componentRef = useRef<HTMLDivElement>(null);
  const [{ Element, configuration }] = useTemplate();
  const [pagesNo, setPagesNo] = useState(0);

  useEffect(() => {
    console.log({ ref: componentRef.current });

    if (componentRef.current) {
      const numberOfPages = Math.ceil(
        componentRef.current?.clientHeight /
          (componentRef.current?.clientWidth * 1.41)
      );

      setPagesNo(isNaN(numberOfPages) ? 0 : numberOfPages);
    }
  }, []);

  console.log({ pagesNo });

  return (
    <>
      <Element
        ref={componentRef}
        variables={configuration}
        className={styles.hiddenComponent}
        style={{ width: "100%", aspectRatio: "1 / 1.41" }}
      />

      <div className={styles.pagesContainer}>
        {[...Array(pagesNo)].map((_, index) => (
          <div key={index} className={styles.paper}>
            <Element
              variables={configuration}
              key={`page-${index}`}
              style={{
                translate: `0 ${index * -(100 / pagesNo)}%`,
                width: "100%",
                aspectRatio: "1 / 1.41",
              }}
            />
          </div>
        ))}
      </div>
    </>
  );
};
