export const EnvConfiguration = () => ({
    enviroment: process.env.NODE_ENV || 'dev',
    assistantId: process.env.OPENAI_ASSISTANT_ID,
    openaiKey: process.env.OPENAI_API_KEY,
    port: process.env.PORT || 3002
})