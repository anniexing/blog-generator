import OpenAI from 'openai';


interface OpenAIProps {
    topic: string;
    keywords: string;
}
const OPEN_AI_MODEL = "gpt-3.5-turbo";
// @ts-ignore
export async function openAIMain<OpenAIProps>({topic, keywords}:OpenAIProps) {
    const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY
    });

    const postMessages: OpenAI.Chat.Completions.ChatCompletionMessageParam[]
        = [{
        role:'system',
        content: 'You are a blog generator',
    },{
        role:'user',
        content: `Generate a long and detailed blog about ${topic} and ${keywords}, the ${keywords} are separated by comma. 
            The response should be formatted in SEO friendly HTML tag, limited to the following HTML tags: p, h1, h2, h3, h4, h5, h6, strong, i, ul, li, ol.`
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
        {role:'user', content: 'Generate a title tag for the generated blog'}
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
        {role:'user', content:'Generate SEO-friendly meta description content for the generated blog.'}
    ];

    const metaDescriptionResult:OpenAI.Chat.ChatCompletion = await openai.chat.completions.create({
        model: OPEN_AI_MODEL,
        messages: metaDescriptionMessages,
        temperature: 0,
    });

    const metaDescription = metaDescriptionResult.choices[0]?.message.content;

    return { postContent, title, metaDescription};
}

