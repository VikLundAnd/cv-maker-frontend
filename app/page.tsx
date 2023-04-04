"use client";

import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.scss";
import { DocumentForm } from "@/components/DocumentForm/DocumentForm";
import { DocumentViewer } from "@/components/DocumentViewer/DocumentViewer";
import { FC, PropsWithRef, forwardRef, useState } from "react";
import { DocumentPrinter } from "@/components/DocumentPrinter/DocumentPrinter";
import { DocumentProvider } from "@/components/DocumentProvider/DocumentProvider";
import { BetterTemplate } from "@/templates/BetterTemplate/BetterTemplate";
import Logo from "../public/logo.svg";
import { Kbd } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <DocumentProvider defaultTemplate={BetterTemplate}>
        <div className={styles.formContainer}>
          <Image src={Logo} alt={"logo"} />
          <DocumentForm />
        </div>
        <div className={styles.documentContainer}>
          <DocumentViewer />
        </div>

        <DocumentPrinter />
      </DocumentProvider>
    </main>
  );
}
