import axios from 'axios';
import { NextResponse } from 'next/server';

// POST method handler
export const POST = async (req: Request) => {
    try {
        const { messages } = await req.json(); // Get the messages from the request body

        // Check if the API key is set
        if (!process.env.OPENAI_API_KEY) {
            return NextResponse.json({ error: "OpenAI API key is not set in environment variables." }, { status: 400 });
        }

        const response = await axios.post(
            'https://api.openai.com/v1/chat/completions',
            {
                model: 'gpt-4-turbo',
                messages: messages,  // Sending the entire array of messages directly
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
                    'Content-Type': 'application/json',
                },
            }
        );

        // Return the data received from OpenAI API
        return NextResponse.json(response.data);
    } catch (error) {
        // Improved error handling to provide more context
        console.error("Error in OpenAI API:", error); // Log the full error for debugging

        if (axios.isAxiosError(error)) {
            const apiError = error.response?.data?.error?.message;
            return NextResponse.json({ error: apiError || 'Error communicating with OpenAI API' }, { status: 500 });
        } else if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        } else {
            return NextResponse.json({ error: "An unknown error occurred" }, { status: 500 });
        }
    }
};
