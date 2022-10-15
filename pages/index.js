import Head from 'next/head'
import { CanvasClient } from "@uniformdev/canvas";
import { Composition } from "@uniformdev/canvas-react";
import content from "../content/content.json";
import doEnhance from "../lib/enhancer";
import resolveRenderer from "../lib/resolveRenderer";
import LayoutCanvas from "../src/components/LayoutCanvas";

async function getComposition(slug) {
  const client = new CanvasClient({
    apiKey: process.env.UNIFORM_API_KEY,
    projectId: process.env.UNIFORM_PROJECT_ID,
  });
  const { composition } = await client.getCompositionBySlug({
    slug,
  });
  return composition;
}

export async function getStaticProps() {
  const slug = "/";
  const topic = content.find((e) => e.url == slug);

  const composition = await getComposition(slug);
  await doEnhance(composition);
  return {
    props: {
      composition,
      fields: topic.fields,
    },
  };
}

export default function Home({ fields, composition }) {
  return (
    <div className="container">
      <Head>
        <title>Website content personalization</title>
        <meta name="description" content="Website content personalization" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <Composition data={composition} resolveRenderer={resolveRenderer}>
          <LayoutCanvas composition={composition} fields={fields} />
        </Composition>
      </main>
    </div>
  )
}
