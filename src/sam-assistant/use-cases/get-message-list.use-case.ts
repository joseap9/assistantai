import OpenAI from 'openai';

interface Options {
  threadId: string;
}

export const getMessageListUseCase = async (openai: OpenAI, options: Options) => {
  
  const { threadId } = options;

  // Obtener la lista de mensajes
  const messageList = await openai.beta.threads.messages.list(threadId);
  console.log(messageList);

  // Filtrar y mapear los mensajes con rol 'assistant'
  const assistantMessages = messageList.data.filter(message => message.role === 'assistant').map(message => ({
    role: message.role,
    content: message.content.map(content => (content as any).text.value)
  }));

  const firstAssistantMessage = assistantMessages[0].content;
  return firstAssistantMessage;
}




// import OpenAI from 'openai';


// interface Options {
//   threadId: string;
// }


// export const getMessageListUseCase = async( openai: OpenAI, options: Options ) => {

//   const { threadId } = options;

//   const messageList = await openai.beta.threads.messages.list( threadId );
  
//   console.log( messageList );

//   const messages = messageList.data.map( message => ({
//     role: message.role,
//     content: message.content.map( content => (content as any).text.value )
//   }));

//   return messages.reverse();


// }

