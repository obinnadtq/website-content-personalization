import Head from "next/head";
import { Slot } from "@uniformdev/canvas-react";

export default function LayoutCanvas() {
  return (
    <div className="container">
      <Head>
        <title>Website Content Personalization</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Slot name="bodyslot" />
    </div>
  );
}