import { stringify } from "querystring";

export const checkBobot = async (answer: string, question: string): Promise<number> => {
    
    const bobotMap: Map<string, number> = new Map([
        ['penjelasan yang kurang panjang / lengkap, contohnya ketika user hanya memberikan jawaban singkat dan kurang lengkap', 0.35],
        ['kurangnya relevansi antara pertanyaan dan jawaban', 0.3],
        ['jawaban kurang detail, contohnya ketika user hanya memberikan jawaban untuk pertanyaanya saja, tanpa menjelsakan lebih secara detail', 0.15],
        ['indikasi ambiguitas / ketidakpastian, misal penggunaan kata "mungkin", "sepertinya", dan kata kata lain yang melemahkan argumen', 0.2],
        //['jika jawaban di perdalam lagi, maka akan mendapat informasi penting, seperti detail dari jawaban maupun hal hal yang berkaitan dengan jawaban user', 0.4]
    ]);

    const categoriesString = Array.from(bobotMap.entries()).map(([category, weight]) => `${category} (weight: ${weight})`).join('\n');

    const systemMessage = `
    You are an interview chatbot. Analyze the user's answer based on the following categories:
    ${categoriesString}
    Your task is to assign a score for each category based on the user's answer, and return the total score as a single number (between 0 and 1). The interview question is: "${question}".
    after you score it based on category, count the total and response with ONLY THE TOTAL example: 0.1.
    `;
    
    try {
        const response = await fetch('http://localhost:3000/API/openai', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                messages: [
                    { role: "system", content: systemMessage },
                    { role: "user", content: answer },
                ],
                temperature: 0,
                top_p: 1,
                token: 200
            }),
        });

        if (!response.ok) {
            const errorMessage = await response.text();
            console.error("Error details:", errorMessage);
            throw new Error(`Network response was not ok: ${response.status} - ${errorMessage}`);
        }

        const data = await response.json();

        if (!data.choices || data.choices.length === 0) {
            return 0; // Return 0 if no choices are available.
        }

        const totalScoreString = data.choices[0].message?.content;
        
        // Parse the string to a number
        const totalScore = parseFloat(totalScoreString);
        
        if (isNaN(totalScore)) {
            console.error("Invalid score returned:", totalScoreString);
            return 0; // Return 0 if the parsed score is NaN.
        }

        return totalScore;
    } catch (error) {
        console.error("Error in OpenAI API:", error);
        return 0; // Return 0 in case of an error.
    }
};

export const getNextQuestion = async (answer: string, question : string): Promise<string> => {
    try {
        const response = await fetch('http://localhost:3000/API/openai', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ messages: [
                { role: "system", content: `You are an interview chatbot. Based on the user's answer, generate insightful follow-up questions to continue the interview. and the interview question is ${question}` },
                { role: "user", content: answer },
            ]}),
        });

        if (!response.ok) {
            const errorMessage = await response.text(); // Get error response body
            console.error("Error details:", errorMessage);
            throw new Error(`Network response was not ok: ${response.status} - ${errorMessage}`);
        }
        

        const data = await response.json();

        if (!data.choices || data.choices.length === 0) {
            return "Sorry, I have no follow-up questions.";
        }

        return data.choices[0].message?.content || "Sorry, I have no follow-up questions.";
    } catch (error) {
        console.error("Error in OpenAI API:", error);
        return `Error processing the answer. ${error}`;
    }
};

export const conclude = async (chatHistory: { sender: string; text: string }[]): Promise<string> => {
    try {
      // Make a request to your local AI service or OpenAI API to generate a conclusion
      const response = await fetch('http://localhost:3000/API/openai', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [
            {
              role: 'system',
              content: `You are an AI that summarizes or concludes a chat based on the following conversation: ${JSON.stringify(chatHistory)}`,
            },
          ],
          temperature: 0.5, // Adjust creativity level of the response
          top_p: 1,
          max_tokens: 150, // Limit the response length
        }),
      });
  
      // Parse the API response
      const data = await response.json();
  
      // Safely return the generated conclusion
      return data.choices?.[0]?.message?.content || 'Unable to generate a conclusion.';
    } catch (error) {
      console.error('Error generating conclusion:', error);
      return `Error in generating the conclusion: ${error}`;
    }
  
};
