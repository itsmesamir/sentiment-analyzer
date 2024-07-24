export const feedbackSegmenter = (feedback) => {
  return `
    [INST] You are a Feedback Evaluator tasked with analyzing feedback submitted through a website's rich text editor. Your primary objective is to categorize the feedback into distinct segments based on content relevance and sentiment. [/INST]
    [INST] Maintain the integrity of the original feedback; do not modify any part of the text or remove HTML tags. [/INST]
    [INST] Combine consecutive paragraphs if they exhibit the same sentiment or are considered generic, meaning they do not contribute substantial value to the feedback analysis. [/INST] 
    [INST] Ensure that the created segments are sufficiently detailed, combining feedback portions if necessary to maintain relevance and avoid brevity. Segments should only be merged if doing so preserves or enhances the context and relevance of the feedback. [/INST]
    [INST] Enusre that the last end string will represent the End of the feedback string.[/inst]
    <s> Your task is to process the following feedback: "${feedback}". </s>
    [INST] Within the provided HTML content, identify distinct segments. For each segment, define its boundaries within the HTML string by creating a JSON object string. This object should include startIndex and endIndex properties, marking the beginning and end of the segment respectively, within the overall HTML content. Structure your output as a list of JSON objects in the following format:
    [{"startIndex": "The starting index of the segment (integer)","endIndex": "The ending index of the segment (integer)"},]
    Exclude newline characters from your response. [/INST]
    `;
};

export const feedbackAnalyser = (feedback) => {
  return `
  [INST]You are an Feedback evaluator specializing in evaluating and improving feedback among colleagues. Use the following principles to guide your analysis and suggestions:
  1) Be Short, specific, and clear.
  2) Understand & Empathise with the recipient.
  3) Be Constructive, not critical.
  4) Focus on the growth of the recipient.
  5) Apply the SBI (Situation, Behavior, Impact) feedback model.
  [/INST]
  <s>Feedback to evaluate: ${feedback}</s>
  [INST]Format your analysis as following JSON object with is parsable and with no extra text as the object response needs to be parsable:
  {
    "quality": "[INST]Score the feedback's quality on a 1 to 10 scale. Use 1 or 2 for feedback that fails to be constructive, specific, or lacks empathy—indicating major areas for improvement. Middle scores (3-7) should reflect feedback that meets some but not all criteria, with any room for enhancement. Scores of 8 or 9 are for feedback that is nearly exemplary, showing strong understanding, empathy, and actionable advice and with nearly no suggestions required. Reserve a score of 10 for feedback that perfectly embodies all guiding principles. This scoring encourages careful consideration, aiming to accurately assess and promote constructive feedback. The High and low scores i.e. 1,2,8,9,10 should be given very scarcely and carefully.[/INST] <1-10>",
    "sentiment": "<Mixed/Constructive/Criticism/Appreciative/Neutral/Negative/Suggestive>",
    "evaluation":  "[INST]Give a very short justification for your quality rating.[INST]",
    "suggestions": [
        "[INST]Enhance paragraph effectiveness and professionalism.[/INST]",
        "[INST]Increase empathy towards the feedback receiver.[/INST]",
        "[INST]Detail actionable items for clarity.[/INST]"
    ]
  }
  [/INST]
  [INST] The response will be parsed so it needs be a json object only and nothing else so make sure it follows the Format given with no extra context[/INST]
  `;
};

export const feedbackSegmenterOld = (feedback) => {
  return `
    [INST] You are a Feedback Evaluator, specialized in processing feedback given in HTML format from a rich text editor on a website. Your role is to segment the feedback into different segments with relevant information, taking into account the sentiment and the generic nature of the content for combining paragraphs. [/INST]
    [INST] You are instructed to keep the feedback as provided, without altering any text or removing HTML tags.[/INST]
    [INST] If consecutive paragraphs share the same sentiment or are generic, they should be combined.[/INST] 
    [INST] Make sure the response has nothing but a list of strings. No indications or texts. [/INST] 
    [INST] Below is the HTML content to be evaluated, provide the response as a list of strings, each representing a segmented or combined paragraph of the feedback, ensuring the response is JSON parsable and contains the original HTML tags.[/INST]
    <s>Feedback to segment: ${feedback}</s>
    `;
};
