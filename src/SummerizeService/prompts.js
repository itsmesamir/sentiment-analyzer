// {
//     "feedback": "I wanted to take a moment to express my appreciation for your outstanding work on the recent project. Your dedication, attention to detail, and ability to meet tight deadlines have not gone unnoticed. The quality of your work was exceptional, and the project was completed ahead of schedule, which is a significant achievement. Your positive attitude and willingness to go the extra mile have been incredibly valuable to the team. The thoroughness of your reports and the innovative solutions you provided helped us overcome several challenges and ensured the project's success. Thank you for your hard work and commitment. Your contributions are highly valued, and I look forward to seeing more of your excellent work in the future. However, you are lacking in meeting the deadlines and you need to focus on knowledge sharing session. Also, you are lacking in discussion with product owners and task prioritization"
// }

// export const feedbackSummarizer = (feedback) => {
//   return `
//   [INST]You are a feedback summarizer specializing in summarizing and classifying feedback into sentiments.
//   Summarize multiple similar comments into one. Write your summary in the third person perspective.
//   Classify the summary points into the following sentiments and dont make your own:
//   Mixed, Neutral, Constructive, Appreciative, Negative, Suggestive, Criticism
//   [/INST]
//   <s>Feedback to evaluate: ${feedback}</s>
//   [INST]Format your analysis as the following JSON object which is a list of sentiment with a sentiment and points for that sentiment in each object, which should be parsable with no extra text:
//   [
//     {
//       "sentiment": "[INST]One of<Mixed/Neutral/Constructive/Appreciative/Negative/Suggestive/Criticism>[/INST]",
//       "summeryPoints": "[[INST]Summarize the feedback for the said sentiment in the third person perspective and create a list.[/INST]]"
//     }
//   ]
//   [/INST]
//   [INST]The response will be parsed, so ensure it is a JSON object only, following the given format with no extra context.[/INST]
//   `;
// };

// export const feedbackSummarizer = (feedback) => {
//   return `
//   [INST]You are a feedback summarizer specializing in summarizing and classifying feedback into sentiments.
//   Summarize multiple similar comments into one. Write your summary in the third person perspective.
//   Classify the summary points into the following sentiments and dont make your own:
//   Mixed, Neutral, Constructive, Appreciative, Negative, Suggestive, Criticism

//   Determine the overall sentiment of the feedback based on the weight of each sentiment category.

//   [/INST]
//   <s>Feedback to evaluate: ${feedback}</s>
//   [INST]Format your analysis as the following JSON object:
//   {
//     "overallSentiment": "[INST]Determine and provide the overall sentiment of the feedback.[/INST]",
//     "summary": [
//       {
//         "sentiment": "[INST]One of<Mixed/Neutral/Constructive/Appreciative/Negative/Suggestive/Criticism>[/INST]",
//         "summaryPoints": "[[INST]Summarize the feedback for the said sentiment in the third person perspective and create a list.[/INST]]"
//       }
//     ]
//   }
//   [/INST]
//   [INST]The response will be parsed, so ensure it is a JSON object only, following the given format with no extra context.[/INST]
//   `;
// };

// response:

// {
//     "summery": {
//         "overallSentiment": "Mixed",
//         "summary": [
//             {
//                 "sentiment": "Appreciative",
//                 "summaryPoints": [
//                     "Your outstanding work on the recent project was appreciated.",
//                     "Your dedication, attention to detail, and ability to meet tight deadlines were noted.",
//                     "The quality of your work was exceptional.",
//                     "Your positive attitude and willingness to go the extra mile were valuable to the team.",
//                     "Your thorough reports and innovative solutions helped overcome challenges and ensured the project's success.",
//                     "Your contributions are highly valued."
//                 ]
//             },
//             {
//                 "sentiment": "Criticism",
//                 "summaryPoints": [
//                     "You were criticized for lacking in meeting deadlines.",
//                     "You need to focus on knowledge sharing sessions.",
//                     "You were criticized for lacking in discussion with product owners.",
//                     "You need to improve on task prioritization."
//                 ]
//             }
//         ]
//     }
// }

// export const feedbackSummarizer = (feedback) => {
//   return `
//   [INST]You are a feedback summarizer specializing in summarizing and classifying feedback into sentiments.
//   Summarize multiple similar comments into one. Write your summary in the third person perspective.
//   Classify the summary points into the following sentiments and dont make your own:
//   Mixed, Neutral, Constructive, Appreciative, Negative, Suggestive, Criticism

//   Determine the overall sentiment of the feedback based on the weight of each sentiment category.

//   [/INST]
//   <s>Feedback to evaluate: ${feedback}</s>
//   [INST]Format your analysis as the following JSON object:
//   {
//     "overallSentiment": "[INST]Determine and provide the overall sentiment of the feedback.[/INST]",
//     "sentimentPercentages": {
//       "Mixed": "[INST]Calculate the raw percentage of Mixed sentiment based on summary points.[/INST]",
//       "Neutral": "[INST]Calculate the raw percentage of Neutral sentiment based on summary points.[/INST]",
//       "Constructive": "[INST]Calculate the raw percentage of Constructive sentiment based on summary points.[/INST]",
//       "Appreciative": "[INST]Calculate the raw percentage of Appreciative sentiment based on summary points.[/INST]",
//       "Negative": "[INST]Calculate the raw percentage of Negative sentiment based on summary points.[/INST]",
//       "Suggestive": "[INST]Calculate the raw percentage of Suggestive sentiment based on summary points.[/INST]",
//       "Criticism": "[INST]Calculate the raw percentage of Criticism sentiment based on summary points.[/INST]"
//     },
//     "summary": [
//       {
//         "sentiment": "[INST]One of<Mixed/Neutral/Constructive/Appreciative/Negative/Suggestive/Criticism>[/INST]",
//         "summaryPoints": "[[INST]Summarize the feedback for the said sentiment in the third person perspective and create a list.[/INST]]"
//       }
//     ]
//   }
//   [/INST]
//   [INST]The response will be parsed, so ensure it is a JSON object only, following the given format with no extra context. Ensure the calculated percentages sum up to 100%.[/INST]
//   `;
// };
// export const feedbackSummarizer = (feedback) => {
//   return `
//   [INST]You are a feedback summarizer specializing in summarizing and classifying feedback into sentiments.
//   Summarize multiple similar comments into one. Write your summary in the third person perspective.
//   Classify the summary points into the following sentiments and dont make your own:
//   Mixed, Neutral, Constructive, Appreciative, Negative, Suggestive, Criticism

//   Determine the overall sentiment of the feedback based on the weight of each sentiment category.

//   [/INST]
//   <s>Feedback to evaluate: ${feedback}</s>
//   [INST]Format your analysis as the following JSON object:
//   {
//     "overallSentiment": "[INST]Determine and provide the overall sentiment of the feedback.[/INST]",
//     "sentimentPercentages": {
//       "Mixed": "[INST]Calculate the raw percentage of Mixed sentiment based on summary points.[/INST]",
//       "Neutral": "[INST]Calculate the raw percentage of Neutral sentiment based on summary points.[/INST]",
//       "Constructive": "[INST]Calculate the raw percentage of Constructive sentiment based on summary points.[/INST]",
//       "Appreciative": "[INST]Calculate the raw percentage of Appreciative sentiment based on summary points.[/INST]",
//       "Negative": "[INST]Calculate the raw percentage of Negative sentiment based on summary points.[/INST]",
//       "Suggestive": "[INST]Calculate the raw percentage of Suggestive sentiment based on summary points.[/INST]",
//       "Criticism": "[INST]Calculate the raw percentage of Criticism sentiment based on summary points.[/INST]"
//     },
//     "sentimentQualitativeAssessment": "[INST]Provide a qualitative assessment of the overall sentiment distribution, considering the calculated percentages and overall tone of the feedback.[/INST]",
//     "summary": [
//       {
//         "sentiment": "[INST]One of<Mixed/Neutral/Constructive/Appreciative/Negative/Suggestive/Criticism>[/INST]",
//         "summaryPoints": "[[INST]Summarize the feedback for the said sentiment in the third person perspective and create a list.[/INST]]"
//       }
//     ]
//   }
//   [/INST]
//   [INST]The response will be parsed, so ensure it is a JSON object only, following the given format with no extra context. Ensure the calculated percentages sum up to 100%.[/INST]
//   `;
// };

//{
//     "summery": {
//         "overallSentiment": "Mixed",
//         "sentimentPercentages": {
//             "Mixed": "50",
//             "Neutral": "30",
//             "Constructive": "10",
//             "Appreciative": "5",
//             "Negative": "5",
//             "Suggestive": "0",
//             "Criticism": "0"
//         },
//         "sentimentQualitativeAssessment": "The feedback expresses a mixed sentiment towards the product, with the reviewer acknowledging the improvements but also pointing out areas for enhancement.",
//         "summary": [
//             {
//                 "sentiment": "Appreciative",
//                 "summaryPoints": [
//                     "The new product features are a step in the right direction.",
//                     "The increased customization options are appreciated."
//                 ]
//             },
//             {
//                 "sentiment": "Constructive",
//                 "summaryPoints": [
//                     "The user interface could be more intuitive in certain areas.",
//                     "These areas could be improved for a smoother user experience."
//                 ]
//             },
//             {
//                 "sentiment": "Negative",
//                 "summaryPoints": [
//                     "I've noticed some performance lags when using multiple features simultaneously."
//                 ]
//             }
//         ]
//     }
// }

// latest 20 august 2024
export const feedbackSummarizer = (feedback) => {
  return `
  [INST]You are a feedback summarizer specializing in summarizing and classifying feedback into sentiments.
  Summarize multiple similar comments into one. Write your summary in the third person perspective.
  Classify the summary points into the following sentiments and dont make your own:
  Mixed, Neutral, Constructive, Appreciative, Negative, Suggestive, Criticism

  Determine the overall sentiment of the feedback based on the weight of each sentiment category.

  [/INST]
  <s>Feedback to evaluate: ${feedback}</s>
  [INST]Format your analysis as the following JSON object:
  {
    "overallSentiment": "[INST]Determine and provide the overall sentiment of the feedback.[/INST]",
    "suggestions": "[INST]Provide suggestions for improvement on the provided feedback to increase the quality of the feedback.[/INST]",
    "overallSummary": "[INST]Provide a concise summary of the entire feedback, capturing the main points and overall tone.[/INST]",
    "sentimentPercentages": {
      "Mixed": "[INST]Calculate the raw percentage of Mixed sentiment based on summary points. Normalize percentages to ensure they sum up to 100%.[/INST]",
      "Neutral": "[INST]Calculate the raw percentage of Neutral sentiment based on summary points. Normalize percentages to ensure they sum up to 100%.[/INST]",
      "Constructive": "[INST]Calculate the raw percentage of Constructive sentiment based on summary points. Normalize percentages to ensure they sum up to 100%.[/INST]",
      "Appreciative": "[INST]Calculate the raw percentage of Appreciative sentiment based on summary points. Normalize percentages to ensure they sum up to 100%.[/INST]",
      "Negative": "[INST]Calculate the raw percentage of Negative sentiment based on summary points. Normalize percentages to ensure they sum up to 100%.[/INST]",
      "Suggestive": "[INST]Calculate the raw percentage of Suggestive sentiment based on summary points. Normalize percentages to ensure they sum up to 100%.[/INST]",
      "Criticism": "[INST]Calculate the raw percentage of Criticism sentiment based on summary points. Normalize percentages to ensure they sum up to 100%.[/INST]"
    },
    "sentimentQualitativeAssessment": "[INST]Provide a qualitative assessment of the overall sentiment distribution, considering the calculated percentages and overall tone of the feedback.[/INST]",
    "summary": [
      {
        "sentiment": "[INST]One of<Mixed/Neutral/Constructive/Appreciative/Negative/Suggestive/Criticism>[/INST]",
        "summaryPoints": "[[INST]Summarize the feedback for the said sentiment in the third person perspective and create a list.[/INST]]"
      }
    ]
  }
  [/INST]
  [INST]The response will be parsed, so ensure it is a JSON object only, following the given format with no extra context.[/INST]
  `;
};

// output

// {
//     "summery": {
//         "overallSentiment": "Mixed",
//         "overallSummary": "The user acknowledges the improvements in the new product features, specifically the increased customization options. However, they've identified performance lags and a need for a more intuitive user interface.",
//         "sentimentPercentages": {
//             "Mixed": 50,
//             "Neutral": 30,
//             "Constructive": 10,
//             "Appreciative": 5,
//             "Negative": 5,
//             "Suggestive": 0,
//             "Criticism": 0
//         },
//         "sentimentQualitativeAssessment": "The feedback is predominantly Mixed, as the user expresses both positive and negative sentiments. The constructive feedback is minimal, focusing on specific areas for improvement.",
//         "summary": [
//             {
//                 "sentiment": "Appreciative",
//                 "summaryPoints": [
//                     "The new product features are a step in the right direction.",
//                     "The increased customization options are appreciated."
//                 ]
//             },
//             {
//                 "sentiment": "Negative",
//                 "summaryPoints": [
//                     "I've noticed some performance lags when using multiple features simultaneously.",
//                     "The user interface could be more intuitive in certain areas."
//                 ]
//             }
//         ]
//     }
// }

// {
//     "summery": {
//         "overallSentiment": "Appreciative",
//         "overallSummary": "The team expresses their appreciation for the employee's outstanding work on the project, highlighting their dedication, attention to detail, and ability to meet deadlines. They acknowledge the exceptional quality of the work and the innovative solutions provided, which contributed significantly to the project's success.",
//         "sentimentPercentages": {
//             "Mixed": 0,
//             "Neutral": 0,
//             "Constructive": 0.2,
//             "Appreciative": 0.8,
//             "Negative": 0.2,
//             "Suggestive": 0,
//             "Criticism": 0.2
//         },
//         "sentimentQualitativeAssessment": "The feedback is predominantly Appreciative, with the team expressing their gratitude and acknowledging the employee's contributions. However, there are also constructive suggestions and a small amount of criticism regarding meeting deadlines and knowledge sharing.",
//         "summary": [
//             {
//                 "sentiment": "Constructive",
//                 "summaryPoints": [
//                     "The employee needs to focus on meeting deadlines.",
//                     "They need to improve their knowledge sharing.",
//                     "They need to discuss more with product owners and prioritize tasks."
//                 ]
//             },
//             {
//                 "sentiment": "Appreciative",
//                 "summaryPoints": [
//                     "The employee's dedication, attention to detail, and ability to meet deadlines have not gone unnoticed.",
//                     "The quality of their work was exceptional.",
//                     "Their positive attitude and willingness to go the extra mile have been incredibly valuable to the team.",
//                     "Their thorough reports and innovative solutions helped overcome challenges and ensured the project's success."
//                 ]
//             },
//             {
//                 "sentiment": "Criticism",
//                 "summaryPoints": [
//                     "The employee is lacking in meeting deadlines.",
//                     "They need to focus on knowledge sharing.",
//                     "They need to discuss more with product owners and prioritize tasks."
//                 ]
//             }
//         ]
//     }
// }

// export const feedbackSummarizer = (feedback) => {
//   return `
//   Summarize the following feedback. Focus on key points and categorize each point into one of the following sentiments: Mixed, Neutral, Constructive, Appreciative, Negative, Suggestive, Criticism.
//   Provide the overall sentiment based on the majority sentiment.

//   Feedback: ${feedback}

//   Response Format:
//   {
//     "overallSentiment": "",
//     "overallSummary": "",
//     "sentiments": [
//       {"sentiment": "", "summary": ""}
//     ]
//   }
//   `;
// };
