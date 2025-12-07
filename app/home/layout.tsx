"use client";

import { Sidebar } from "@/components/home/sidebar";
import { ResizablePanel } from "@/components/home/resizable-panel";
import { ChatPanel } from "@/components/home/chat-panel";
import { QuestionProvider, useQuestion } from "@/components/home/question-context";

function HomeLayoutContent({ children }: { children: React.ReactNode }) {
  const { currentQuestion, userProgress } = useQuestion();

  return (
    <div className="h-screen flex overflow-hidden">
      {/* Left Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        <div className="flex-1 overflow-y-auto">{children}</div>

        {/* Right Resizable Chat Panel */}
        <ResizablePanel defaultWidth={400} minWidth={300} maxWidth={800}>
          <ChatPanel currentQuestion={currentQuestion} userProgress={userProgress} />
        </ResizablePanel>
      </div>
    </div>
  );
}

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QuestionProvider>
      <HomeLayoutContent>{children}</HomeLayoutContent>
    </QuestionProvider>
  );
}

