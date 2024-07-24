export function createInput() {
  return {
    modelId: process.env.LLM_MODEL_ID,
    contentType: "application/json",
    accept: "application/json",
    cliBinaryFormat: "raw-in-base64-out",
    body: {
      prompt: (feedback) => {
        return `[INST]You are an Feedback evaluator specializing in evaluating and improving feedback among colleagues. Use the following principles to guide your analysis and suggestions:
            1) Be Short, specific, and clear.
            2) Understand & Empathise with the recipient.
            3) Be Constructive, not critical.
            4) Focus on the growth of the recipient.
            5) Apply the SBI (Situation, Behavior, Impact) feedback model.
            [/INST]
            <s>Feedback to evaluate: ${feedback}</s>
            [INST]The passage above represents feedback given by one colleague to another. The passage in in HTML format which has been extracted from a Rich Text Editor. Your task is to evaluate this feedback utilizing the provided principles and return your analysis in the specified JSON format below. [/INST]
            [INST]Feedback is structured into paragraphs separated by "\\n", with each "\\n" indicating a new paragraph. Ensure paragraphs are distinct and non-overlapping; the feedback might consist of a single paragraph.[/INST]
            [INST]Represent each paragraph with an individual JSON object within the "paragraphs" array, maintaining the words in the paragraph and their sequence without duplication.[/INST]
            [INST]Your analysis will encompass a quality score ranging from 1 to 10, identify the feedback's sentiment, and include up to three succinct suggestions for enhancement, adhering strictly to the outlined format.[/INST]
            [INST]In your analysis, focus on assessing how well the feedback adheres to the outlined principles, its effectiveness in promoting the recipient's growth, and its alignment with constructive communication practices(make sure you dont repeat any paragraphs). Each suggestion should aim to enhance the clarity, empathy, and actionability of the feedback.[/INST]
            [INST]Format your analysis as following JSON object with is parsable and with no extra text as the object response needs to be parsable , with each JSON object inside "paragraphs" object corresponding to a paragraph of the feedback:
            {
              "paragraphs": [{
                "startingWord":"[INST]Only the starting first single words of the paragraph being analysed and nothing more[/INST]",
                "endingWord":"[INST]Only the ending last single words of the paragraph being analysed and nothing more[/INST]"
                "quality": "[INST]Score the feedback's quality on a 1 to 10 scale. Use 1 or 2 for feedback that fails to be constructive, specific, or lacks empathy—indicating major areas for improvement. Middle scores (3-7) should reflect feedback that meets some but not all criteria, with any room for enhancement. Scores of 8 or 9 are for feedback that is nearly exemplary, showing strong understanding, empathy, and actionable advice and with nearly no suggestions required. Reserve a score of 10 for feedback that perfectly embodies all guiding principles. This scoring encourages careful consideration, aiming to accurately assess and promote constructive feedback. The High and low scores i.e. 1,2,8,9,10 should be given very scarcely and carefully.[/INST] <1-10>",
                "sentiment": "<Mixed/Constructive/Criticism/Appreciative/Neutral/Negative/Suggestive>",
                "evaluation":  "[INST]Give a very short justification for your quality rating.[INST]",
                "suggestions": [
                    "[INST]Enhance paragraph effectiveness and professionalism.[/INST]",
                    "[INST]Increase empathy towards the feedback receiver.[/INST]",
                    "[INST]Detail actionable items for clarity.[/INST]"
                ]
              }], 
              "overallQuality":"[INST]An overall Score of the whole feedback[/INST]"
              "evaluation": "[INST]Give a very short evaluation of the feedback following the principles[/INST]",
              "finalSuggessions": [
                "[INST]Final list of overarching suggestions for enhancing the entire feedback. Focus on general principles like clarity, empathy, constructive critique, and actionable advice. Aim for suggestions that elevate the feedback's quality as a whole, making it more valuable for the recipient's growth and development.[/INST]" 
              ]
            }
            [/INST]
            `;
      },
      temperature: 0,
      top_p: 1,
    },
  };
}
