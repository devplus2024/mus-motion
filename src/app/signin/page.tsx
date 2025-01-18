import { GalleryVerticalEnd } from "lucide-react";

import { LoginForm } from "./components/login-form";
import Image from "next/image";
import { TextLoop } from "@/components/ui/text-loop";

export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <GalleryVerticalEnd className="size-4" />
            </div>
            Acme Inc.
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block">
        {/* <Image
          src="/placeholder.svg"
          alt="Image"
          width={"20"}
          height={"20"}
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        /> */}
        <div className="absolute inset-0 h-full w-full bg-black">
          <TextLoop className="text-center font-mono text-2xl">
            <span>How can I assist you today?</span>
            <span>Generate a logo</span>
            <span>Create a component</span>
            <span>Draw a diagram</span>
          </TextLoop>
        </div>
      </div>
    </div>
  );
}
