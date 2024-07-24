import {
  BedrockRuntimeClient,
  InvokeModelCommand,
} from "@aws-sdk/client-bedrock-runtime";
import { fromEnv } from "@aws-sdk/credential-providers";

class BedrockClientSingleton {
  constructor() {
    if (!BedrockClientSingleton.instance) {
      BedrockClientSingleton.instance = new BedrockRuntimeClient({
        credentials: fromEnv(),
        region: process.env.AWS_REGION,
      });
    }
  }

  getInstance() {
    return BedrockClientSingleton.instance;
  }

  async invokeModel(input) {
    const command = new InvokeModelCommand(input);

    // console.log("Invoking model with input: ", input, command);
    return await BedrockClientSingleton.instance.send(command);
  }
}

const instance = new BedrockClientSingleton();
Object.freeze(instance);

export default instance;
