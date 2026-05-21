import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import CursorGlow from "../components/motion/CursorGlow";
import PageLoader from "../components/motion/PageLoader";
import ScrollProgress from "../components/motion/ScrollProgress";
import CalculateIcon from "@mui/icons-material/Calculate";
import AssistantIcon from "@mui/icons-material/Assistant";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';


export default function MainLayout({ children }) {
  const routeTo = useNavigate();
  const location = useLocation().pathname;

  const [showAssistant, setShowAssistant] = useState(true);

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Hello 👋 I am XITI AI Assistant. How can I help you today?",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const askAI = async (question) => {
    const response = await fetch("http://localhost:6969/api/assistant", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: question,
      }),
    });

    const data = await response.json();

    if (!data.success) {
      throw new Error(data.error || "AI request failed");
    }

    return data.reply;
  };

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = {
      role: "user",
      text: input,
    };

    setMessages((prev) => [...prev, userMessage]);

    const currentQuestion = input;
    setInput("");
    setLoading(true);

    try {
      const response = await askAI(currentQuestion);

      const assistantMessage = {
        role: "assistant",
        text: response,
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: "Something went wrong. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const toggleAssistant = () => {
    setShowAssistant(!showAssistant);
  };

  return (
    <>
      <PageLoader />
      <CursorGlow />
      <ScrollProgress />
      <Header />

      {location !== "/calculator" && (
        <div
          onClick={() => {
            routeTo("/calculator");
          }}
          className="fixed bottom-5 z-30 p-5 bg-[#ff6200] rounded-full left-5 cursor-pointer"
        >
          <CalculateIcon sx={{ color: "white", fontSize: 40 }} />
        </div>
      )}

      {showAssistant ? (
        <div className="h-screen w-full lg:w-1/3 sm:w-1/2 fixed top-0 right-0 z-50 p-5 text-white overflow-hidden">
          <div className="w-full h-full bg-black/80 backdrop-blur-xl border border-white/10 rounded-4xl flex flex-col overflow-hidden shadow-2xl">
            <div className="w-full flex justify-between items-center p-5 border-b border-white/10">
              <div>
                <h1 className="text-3xl font-bold">XITI🤖</h1>
                <p className="text-sm text-white/60">
                  Your AI Business Assistant
                </p>
              </div>

              <div
                onClick={toggleAssistant}
                className="cursor-pointer hover:rotate-90 transition-all duration-300"
              >
                <CloseIcon sx={{ fontSize: 35 }} />
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`max-w-[85%] px-4 py-3 rounded-3xl text-sm leading-relaxed ${
                    message.role === "user"
                      ? "bg-[#ff6200] self-end"
                      : "bg-white/10 self-start"
                  }`}
                >
                  {message.text}
                </div>
              ))}

              {loading && (
                <div className="bg-white/10 self-start px-4 py-3 rounded-3xl text-sm animate-pulse">
                  XITI is typing...
                </div>
              )}

              <div ref={messagesEndRef}></div>
            </div>

            <div className="p-4 border-t border-white/10">
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-4 py-3">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSendMessage();
                    }
                  }}
                  placeholder="Ask anything about services, SEO, website, ecommerce..."
                  className="flex-1 bg-transparent outline-none text-white placeholder:text-white/40"
                />

                <button
                  onClick={handleSendMessage}
                  className="bg-[#ff6200] hover:scale-105 transition-all duration-300 px-5 py-2 rounded-full font-semibold cursor-pointer"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          onClick={toggleAssistant}
          className="fixed bottom-5 z-30 p-5 bg-[#ff6200] rounded-full right-5 cursor-pointer shadow-2xl hover:scale-110 transition-all duration-300"
        >
          <AssistantIcon sx={{ color: "white", fontSize: 40 }} />
        </div>
      )}

      <main id="main-content">{children}</main>

      <Footer />
    </>
  );
}
