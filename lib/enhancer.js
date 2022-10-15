import { enhance, EnhancerBuilder } from "@uniformdev/canvas";

import content from "../content/content.json";

const dataEnhancer = async ({ component }) => {
    const contentId = component?.parameters?.contentId?.value;
    if (contentId) {
      const topic = content.find((e) => e.id == contentId);
      if (topic) {
        return { ...topic.fields };
      }
    }
  };

  export default async function doEnhance(composition) {
    const enhancedComposition = { ...composition };
    const enhancers = new EnhancerBuilder().data("fields", dataEnhancer);
    await enhance({
      composition: enhancedComposition,
      enhancers,
    });
  
    return enhancedComposition;
  }