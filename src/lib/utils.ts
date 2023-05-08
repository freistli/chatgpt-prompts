import { AzureChatGPTAPI, ChatMessage } from "@freistli/azurechatgptapi";

export const createPromptFactory = (instance: AzureChatGPTAPI, prompt: string) => {
  return async (message: string, messageId: string) => {
    let res: ChatMessage | undefined;
    try{
      if (!messageId) {
        res = await instance.sendMessage(prompt);
        messageId= res.id;
      }
      else 
      {
          if(prompt)
          res = await instance.sendMessage(prompt, {
            parentMessageId: messageId
          });
          messageId= res.id;      
        
          res = await instance.sendMessage(message, {
            parentMessageId: messageId
          });
        
      }
    }
    catch(e)
    {
      console.log(e);
      const errorObject = JSON.parse(
        e.message.substring(
          e.message.indexOf('{'),
          e.message.lastIndexOf('}') + 1
        )
      )
      const messageString = errorObject.error.message
      return { text: messageString, id: messageId }
    }
    return res;
  };
};
