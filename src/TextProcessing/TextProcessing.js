import { createInput } from "./utils.js";
import BedrockClientService from "../BedrockService/BedrockClientService.js";
import ErrorHandlingService from "../ErrorHandlingService/errorHandlingService.js";

const TextProcessing = {
  summarizeFeedback: async (body) => {
    const { feedback } = body;
    const input = createInput();
    const modifiedInput = {
      ...input,
      body: JSON.stringify({
        ...input.body,
        prompt: input.body.prompt(feedback),
      }),
    };

    try {
      const response = await BedrockClientService.invokeModel(modifiedInput);

      // console.log("response", response);

      const rawRes = response.body;
      const jsonString = new TextDecoder().decode(rawRes);
      const parsedResponse = JSON.parse(jsonString);

      console.log(
        "response --- decoded ----:45",
        parsedResponse.outputs[0].text
      );

      const jsonResponse = parsedResponse.outputs[0].text;
      console.log(jsonResponse);

      // Parse each JSON object
      const feedbackArray = JSON.parse(jsonResponse);

      return feedbackArray;
    } catch (error) {
      await ErrorHandlingService.handleModelError(error);
      return new Error("Something occurred");
    }
  },
};

export default TextProcessing;
