/* eslint-disable @next/next/no-img-element */
import { createTemplate } from "@/utils/createTemplate";
import { Heading, Text } from "@chakra-ui/react";
import { Open_Sans } from "next/font/google";
import Image from "next/image";
import { forwardRef } from "react";
import styles from "./BetterTemplate.module.scss";
import AvatarPlaceholder from "../../public/avatar_placeholder.png";
import _ from "lodash";

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
    // experiences: {
    //   type: "collection",
    //   value: [
    //     {
    //       title: {
    //         type: "text",
    //         value: "",
    //       },
    //       company: {
    //         type: "text",
    //         value: "",
    //       },
    //     },
    //   ],
    // },
  },
  (props, ref) => {
    return (
      <div {...props} ref={ref}>
        <div className={styles.layout}>
          <div className={styles.sidebar}>
            <img
              src={
                _.isEmpty(props.variables.avatar.value)
                  ? AvatarPlaceholder.src
                  : props.variables.avatar.value
              }
              alt={"avatar"}
              width={"100%"}
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
              {/* {props.variables.experiences.value.map((experience) => (
                <Text key={experience.company.value + experience.title.value}>
                  {experience.company.value}
                </Text>
              ))} */}
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
