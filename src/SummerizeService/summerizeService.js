import { createInput } from "./utils.js";
import { feedbackSummarizer } from "./prompts.js";
import BedrockClientService from "../BedrockService/BedrockClientService.js";
import ErrorHandlingService from "../ErrorHandlingService/errorHandlingService.js";

/**
 * Analyzes feedback by segmenting it and then processing each segment through a model.
 * @param {Object} feedbackBody - The feedback object containing the feedback string.
 * @returns {Object} The analysis results, including segments and their processed feedbacks.
 */
const summerizeFeedback = async (feedbackBody) => {
  try {
    const { feedback } = feedbackBody;

    // Process each feedback segment
    const input = createInput(feedbackSummarizer);
    const modifiedInput = prepareInput(input, feedback);
    const response = await invokeModel(modifiedInput);
    const parsedResponse = parseResponse(response.body);
    const summeryResults = JSON.parse(parsedResponse.outputs[0].text);

    return {
      summery: summeryResults,
    };
  } catch (error) {
    console.error("Feedback ", error);
    console.error("Feedback analysis failed:", error);
    await ErrorHandlingService.handleModelError(error);
  }
};
const invokeModel = async (input) => {
  return BedrockClientService.invokeModel(input);
};

const prepareInput = (input, feedback) => {
  return {
    ...input,
    body: JSON.stringify({
      ...input.body,
      prompt: input.body.prompt(feedback),
    }),
  };
};

const parseResponse = (rawResponse) => {
  const jsonString = new TextDecoder().decode(rawResponse);
  return JSON.parse(jsonString);
};

export default summerizeFeedback;
