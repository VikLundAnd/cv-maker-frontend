import { createTemplate } from "@/utils/createTemplate";
import { Heading } from "@chakra-ui/react";
import { Open_Sans } from "next/font/google";
import Image from "next/image";
import { forwardRef } from "react";
import styles from "./BetterTemplate.module.scss";

const OpenSans = Open_Sans({ subsets: ["latin"] });

export const BetterTemplate = createTemplate(
  {
    name: {
      type: "text",
      value: "",
    },
    title: {
      type: "text",
      value: "",
    },
    description: {
      type: "textfield",
      value: "",
    },
    avatar: {
      type: "image",
      value: "",
    },
  },
  (props, ref) => {
    return (
      <div {...props} ref={ref}>
        <div className={styles.layout}>
          <div className={styles.sidebar}>
            <img
              src={props.variables.avatar.value}
              alt={"avatar"}
              width="100%"
            />
          </div>
          <div className={styles.main}>
            <section>
              <h1 className={OpenSans.className}>
                <span>
                  {props.variables.name.value.split(" ").splice(0, 1)}
                </span>{" "}
                <b>{props.variables.name.value.split(" ").splice(1)}</b>
              </h1>
              <h2 className={OpenSans.className}>
                {props.variables.title.value}
              </h2>
            </section>
            <p className={OpenSans.className}>
              {props.variables.description.value}
            </p>
            <section className={styles.section}>
              <hr className={styles.divider} />
              <h3 className={OpenSans.className}>Erfaring</h3>
            </section>
            <section className={styles.section}>
              <hr className={styles.divider} />
              <h3 className={OpenSans.className}>Erfaring</h3>
            </section>
            <section className={styles.section}>
              <hr className={styles.divider} />
              <h3 className={OpenSans.className}>Erfaring</h3>
            </section>
            <section className={styles.section}>
              <hr className={styles.divider} />
              <h3 className={OpenSans.className}>Erfaring</h3>
            </section>
            <section className={styles.section}>
              <hr className={styles.divider} />
              <h3 className={OpenSans.className}>Erfaring</h3>
            </section>
            <section className={styles.section}>
              <hr className={styles.divider} />
              <h3 className={OpenSans.className}>Erfaring</h3>
            </section>
          </div>
        </div>
      </div>
    );
  }
);
