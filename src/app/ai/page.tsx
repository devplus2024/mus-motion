
import OpenAI from "openai"
import { ChatInput, ChatInputTextArea, ChatInputSubmit } from "@/components/ui/chat-input"

import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbList,
	BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
	SidebarInset,
	SidebarProvider,
	SidebarTrigger,
} from "@/components/ui/sidebar";
import { Chat } from "@/components/chat";
import { SidebarApp } from "@/components/sidebar-app";
// const openai = new OpenAI({
//   dangerouslyAllowBrowser: true,
//   baseURL: "https://openrouter.ai/api/v1",
//   apiKey: "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",
//   defaultHeaders: {
//     "HTTP-Referer": "<YOUR_SITE_URL>", // Optional. Site URL for rankings on openrouter.ai.
//     "X-Title": "<YOUR_SITE_NAME>", // Optional. Site title for rankings on openrouter.ai.
//   }
// })

export default async function AiPage() {
  // const completion = await openai.chat.completions.create({
  //   model: "openai/gpt-3.5-turbo",
  //   messages: [
  //     {
  //       "role": "user",
  //       "content": "Hello"
  //     }
  //   ]
  // })

  // console.log(completion.choices[0].message)
  return(
    <SidebarProvider>
    <SidebarApp />
    <SidebarInset className="flex flex-col h-screen overflow-y-auto">
      <header className="sticky top-0 flex h-14 shrink-0 items-center gap-2 bg-background">
        <div className="flex flex-1 items-center gap-2 px-3">
          <SidebarTrigger />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbPage className="line-clamp-1">
                  Project Management & Task Tracking
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>
      <Chat />
    </SidebarInset>
  </SidebarProvider>
);
}