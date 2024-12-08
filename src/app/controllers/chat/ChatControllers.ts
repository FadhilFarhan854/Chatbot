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


export const score = async (kriteria: string, posisi:string, jawaban: string, question:string): Promise<number> => {
    

    const systemMessage = `
   You are an professional HRD that scores candidates answer (${jawaban}) based on criteria(${kriteria}) and make sure score the relevance beetween answer and position(${posisi}). the interview question is ${question}  and makesure only return the score on scale 0 - 100, example 100 , 75, 87.
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
                    { role: "user", content: jawaban },
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
// export const scoreChatKriteria = async (chat:{}[], kriteria:string, posisi:string): Promise<number> => {
    

//     const systemMessage = `
//     scores the relativity beetween ${chat} ${kriteria} ${posisi}. make sure ONLY return the SCORE NUMBER on scale 0 - 100, (example 100 , 75, 87).
//     `;
    
//     try {
//         const response = await fetch('http://localhost:3000/API/openai', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//                 messages: [
//                     { role: "system", content: systemMessage },
                    
//                 ],
//                 temperature: 0.2,
//                 top_p: 0.8,
//                 token: 200
//             }),
//         });

//         if (!response.ok) {
//             const errorMessage = await response.text();
//             console.error("Error details:", errorMessage);
//             throw new Error(`Network response was not ok: ${response.status} - ${errorMessage}`);
//         }

//         const data = await response.json();

//         if (!data.choices || data.choices.length === 0) {
//             return 1; 
//         }

//         const totalScoreString = data.choices[0].message?.content;
        
//         // Parse the string to a number
//         const totalScore = parseFloat(totalScoreString);
        
//         if (isNaN(totalScore)) {
//             console.error("Invalid score returned:", totalScoreString);
//             return 2; 
//         }

//         return totalScore;
//     } catch (error) {
//         console.error("Error in OpenAI API:", error);
//         return 1; 
//     }
// };

export const scoreChatKriteria = async (chat: { sender: string; text: string }[], kriteria: string, posisi: string): Promise<number> => {
    // Gabungkan pesan chat menjadi satu teks
    const chatContext = chat.map(message => `${message.sender}: ${message.text}`).join('\n');

    const systemMessage = `
    You are an AI interviewer evaluating a candidate's chat history.
    
    Context:
    - Position: ${posisi}
    - Criteria: ${kriteria}
    - Chat History:
    ${chatContext}

    Your task is to score the candidate's responses based on:
    1. Relevance to the job position
    2. Depth of responses related to the ${kriteria} criteria
    3. Overall quality of communication

    Provide a score between 0-100, where:
    - 0-30: Poor performance
    - 31-50: Below average
    - 51-70: Average
    - 71-85: Good
    - 86-100: Excellent

    Return ONLY the numeric score.
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
                ],
                temperature: 0.2,
                top_p: 0.8,
                max_tokens: 50
            }),
        });

        if (!response.ok) {
            throw new Error(`API response not ok: ${response.statusText}`);
        }

        const data = await response.json();

        if (!data.choices || data.choices.length === 0) {
            console.error('No score returned');
            return 0; 
        }

        const scoreText = data.choices[0].message?.content?.trim() || '';
        const score = parseInt(scoreText, 10);

        return isNaN(score) ? 0 : Math.max(0, Math.min(score, 100));

    } catch (error) {
        console.error("Error in scoring chat criteria:", error);
        return 0;
    }
};
