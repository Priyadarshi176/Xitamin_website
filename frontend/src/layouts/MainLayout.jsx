import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import CursorGlow from "../components/motion/CursorGlow";
import PageLoader from "../components/motion/PageLoader";
import ScrollProgress from "../components/motion/ScrollProgress";
import CalculateIcon from "@mui/icons-material/Calculate";
import AssistantIcon from "@mui/icons-material/Assistant";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";



export default function MainLayout({ children }) {
  const routeTo = useNavigate();
  const location = useLocation().pathname;

  const [showAssistant, setShowAssistant] = useState(false);

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
          <div className="w-full h-full bg-black/50 rounded-4xl">
            <div className="w-full border p-3 flex justify-center">
              <h1 className="text-3xl font-bold">XITI🤖</h1>
            </div>
          </div>
        </div>
      ) : (
        <div
          onClick={toggleAssistant}
          className="fixed bottom-5 z-30 p-5 bg-[#ff6200] rounded-full right-5 cursor-pointer"
        >
          <AssistantIcon sx={{ color: "white", fontSize: 40 }} />
        </div>
      )}

      <main id="main-content">{children}</main>

      <Footer />
    </>
  );
}
