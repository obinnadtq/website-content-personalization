import {
    createEdgeContext,
    createUniformEdgeHandler,
    buildNetlifyQuirks
  } from "../../lib/uniform/index.deno.js";
  import manifest from "../../contextManifest.json" assert { type: "json" };
  
  const IGNORED_PATHS = /\/.*\.(ico|png|jpg|jpeg|svg|css|js|json)(?:\?.*|$)$/g;
  
  export default async (request, netlifyContext) => {
    if (
      request.method.toUpperCase() !== "GET" ||
      request.url.match(IGNORED_PATHS)
    ) {
      return await netlifyContext.next({ sendConditionalRequest: true });
    }
  
    const context = createEdgeContext({
      manifest,
      request,
    });
  
    const originResponse = await netlifyContext.next();
  
    const handler = createUniformEdgeHandler();
  
    const { processed, response } = await handler({
      context,
      request,
      response: originResponse,
      quirks: buildNetlifyQuirks(netlifyContext)
    });
  
    console.log(request)
    if (!processed) {
      return response;
    }
  
    return new Response(response.body, {
      ...response,
      headers: {
        ...response.headers,
        "Cache-Control": "no-store, must-revalidate",
        Expires: "0",
      },
    });
  
  };