import OpenAI from 'openai';


interface OpenAIProps {
    topic: string;
    keywords: string;
}
const OPEN_AI_MODEL = "gpt-3.5-turbo";
// @ts-ignore
export async function openAIMain<OpenAIProps>({topic, keywords}:OpenAIProps) {
     const openai = new OpenAI(
     {
         apiKey: process.env.OPENAI_API_KEY
     })



    const postMessages: OpenAI.Chat.Completions.ChatCompletionMessageParam[]
        = [{
        role:'system',
        content: 'You are a blog generator that creates SEO-friendly, detailed, and formatted blog posts in the language of the input provided',
    },{
        role:'user',
        content: `Generate a long and detailed blog about ${topic} and ${keywords}, The blog should explain the following concepts in detail: ${keywords}. Each concept should be explained with formatted code examples or scenarios to help understand the descriptions. Use only the following HTML tags:p, h1, h2, h3, h4, h5, h6, strong, i, ul, li, ol,dl. The ${keywords} are separated by comma.`
    }
    ];

    const postResult:OpenAI.Chat.ChatCompletion = await openai.chat.completions.create({
        model: OPEN_AI_MODEL,
        messages: postMessages,
        temperature: 0,
    });

    const postContent = postResult.choices[0]?.message.content;

    const titleMessages: OpenAI.Chat.Completions.ChatCompletionMessageParam[] = [
        ...postMessages,
        {role: 'assistant', content:postContent},
        {role:'user', content: 'Generate a title tag for the generated blog without HTML tag'}
    ];

    const titleResult:OpenAI.Chat.ChatCompletion = await openai.chat.completions.create({
        model: OPEN_AI_MODEL,
        messages: titleMessages,
        temperature: 0,
    });

    const title = titleResult.choices[0]?.message.content;

    const metaDescriptionMessages:OpenAI.Chat.Completions.ChatCompletionMessageParam[] = [
        ...postMessages,
        {role:'assistant', content:postContent},
        {role:'user', content:'Generate SEO-friendly meta description content for the generated blog without HTML tag'}
    ];

    const metaDescriptionResult:OpenAI.Chat.ChatCompletion = await openai.chat.completions.create({
        model: OPEN_AI_MODEL,
        messages: metaDescriptionMessages,
        temperature: 0,
    });

    const metaDescription = metaDescriptionResult.choices[0]?.message.content;

    return { postContent, title, metaDescription};
}

