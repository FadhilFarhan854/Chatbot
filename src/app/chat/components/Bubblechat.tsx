"use client";

interface Message {
  sender: string;
  text: string;
}

interface BubbleChatProps {
  messages: Message[];
}

const BubbleChat: React.FC<BubbleChatProps> = ({ messages }) => {
  return (
    <section className="w-full dark:bg-[#1e1f24] bg-white rounded-lg flex flex-col gap-2">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
        >
          <div
            className={`max-w-[60%] p-3 text-sm rounded-lg ${
              message.sender === "user"
                ? "bg-red-500 text-white"
                : "dark:bg-[#2a2b32] bg-[#E0E0E0] dark:text-gray-300 text-gray-900"
            } shadow-sm`}
          >
            {message.text}
          </div>
        </div>
      ))}
    </section>
  );
};

export default BubbleChat;
