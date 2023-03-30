import { AzureChatGPTAPI, ChatMessage } from "@freistli/azurechatgptapi";

export const createPromptFactory = (instance: AzureChatGPTAPI, prompt: string) => {
  return async (message: string, messageId: string) => {
    let res: ChatMessage | undefined;

    if (!messageId) {
      res = await instance.sendMessage(prompt);
      messageId= res.id;
    }
    

    res = await instance.sendMessage(message, {
      parentMessageId: messageId
    });

    return res;
  };
};
