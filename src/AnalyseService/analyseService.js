import { createInput } from "./utils.js";
import {
  feedbackAnalyser,
  feedbackSegmenter,
  feedbackSegmenterOld,
} from "./prompts.js";
import BedrockClientService from "../BedrockService/BedrockClientService.js";
import ErrorHandlingService from "../ErrorHandlingService/errorHandlingService.js";

/**
 * Analyzes feedback by segmenting it and then processing each segment through a model.
 * @param {Object} feedbackBody - The feedback object containing the feedback string.
 * @returns {Object} The analysis results, including segments and their processed feedbacks.
 */
const analyzeFeedback = async (feedbackBody) => {
  try {
    const { feedback } = feedbackBody;

    // Prepare the initial input for the feedback segmenter
    const initialInput = createSegmenterInput(feedback);

    // Invoke the segmenter model
    const segmenterResponse = await invokeModel(initialInput);
    const feedbackSegments = parseSegmenterResponse(segmenterResponse);

    // Process each feedback segment
    const feedbackAnalysisResults = await processFeedbackSegments(
      feedbackSegments
    );

    return {
      feedbacks: feedbackAnalysisResults.map((feedback, index) => {
        return { ...feedback, segment: feedbackSegments[index] };
      }),
    };
  } catch (error) {
    console.error("Feedback analysis failed:", error);
    await ErrorHandlingService.handleModelError(error);
  }
};

const createSegmenterInput = (feedback) => {
  const input = createInput(feedbackSegmenterOld);
  return prepareInput(input, feedback);
};

const invokeModel = async (input) => {
  return BedrockClientService.invokeModel(input);
};

const parseSegmenterResponse = (response) => {
  const parsedResponse = parseResponse(response.body);
  console.log(parsedResponse.outputs);
  return JSON.parse(parsedResponse.outputs[0].text);
};

const processFeedbackSegments = async (segments) => {
  const segmentPromises = segments.map((segment) => analyzeSegment(segment));
  return Promise.all(segmentPromises);
};

const analyzeSegment = async (segment) => {
  const input = createInput(feedbackAnalyser);
  const modifiedInput = prepareInput(input, segment);
  const response = await invokeModel(modifiedInput);
  const parsedResponse = parseResponse(response.body);
  return JSON.parse(parsedResponse.outputs[0].text);
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

export default analyzeFeedback;
