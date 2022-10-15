import Head from "next/head";
import { Slot } from "@uniformdev/canvas-react";

export default function LayoutCanvas({ title }) {
  return (
    <div className="container">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Slot name="body" />
    </div>
  );
}