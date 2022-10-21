import { UniformContext } from "@uniformdev/context-react";
import { Context, enableContextDevTools } from "@uniformdev/context";
import manifest from "../contextManifest.json";
import { NextCookieTransitionDataStore } from "@uniformdev/context-next";

import '../styles/globals.css'
import '../styles/pages.css'

const context = new Context({
  manifest,
  defaultConsent: true,
  transitionStore: new NextCookieTransitionDataStore({}),
  plugins: [
    enableContextDevTools(),
  ],
});

function MyApp({ Component, pageProps }) {
  return (
    <UniformContext context={context} outputType="edge">
      <Component {...pageProps} />
    </UniformContext>
  )
}
export default MyApp
