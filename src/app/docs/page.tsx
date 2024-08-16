import React from "react";
import { Navigation } from "@/components/Navigation";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
export default function DocumentionPage() {
  return (
    <main className="w-full flex mb-[4rem] relative">
      <div className="sticky h-full w-[320px] mr-[1rem]  top-[5.6rem]">
        <ScrollArea className="mr-[1rem] h-[520px] w-[320px] ">
          <div className="flex gap-[1rem] ml-[1rem] sticky top-[1rem] pl-[1.5rem]   h-[520px]  flex-col">
            <div className="flex flex-col gap-[0.5rem]">
              <h1 className="font-medium">Introduction</h1>
              <div className="flex flex-col gap-2">
                <p className="text-sm text-[#a1a1a1]">
                  Purpose of the Software
                </p>
                <p className="text-sm text-[#a1a1a1]">Key Features</p>
                <p className="text-sm text-[#a1a1a1]">Versions and Updates</p>
              </div>
            </div>
            <div className="flex flex-col gap-[0.5rem]">
              <h1 className="font-medium">System Requirements</h1>
              <div className="flex flex-col gap-2">
                <p className="text-sm text-[#a1a1a1]">
                  Minimum Hardware Specifications
                </p>
                <p className="text-sm text-[#a1a1a1]">
                  Necessary Software Requirements
                </p>
                <p className="text-sm text-[#a1a1a1]">
                  Operating System Compatibility
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-[0.5rem]">
              <h1 className="font-medium">Installation</h1>
              <div className="flex flex-col gap-2">
                <p className="text-sm text-[#a1a1a1]">
                  Downloading the Software
                </p>
                <p className="text-sm text-[#a1a1a1]">
                  Installation on Windows
                </p>
                <p className="text-sm text-[#a1a1a1]">Installation on Linux</p>
                <p className="text-sm text-[#a1a1a1]">Installation on macOS</p>
                <p className="text-sm text-[#a1a1a1]">
                  Upgrading and Uninstalling the Software
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-[0.5rem]">
              <h1 className="font-medium">Installation</h1>
              <div className="flex flex-col gap-2">
                <p className="text-sm text-[#a1a1a1]">
                  Downloading the Software
                </p>
                <p className="text-sm text-[#a1a1a1]">
                  Installation on Windows
                </p>
                <p className="text-sm text-[#a1a1a1]">Installation on Linux</p>
                <p className="text-sm text-[#a1a1a1]">Installation on macOS</p>
                <p className="text-sm text-[#a1a1a1]">
                  Upgrading and Uninstalling the Software
                </p>
              </div>
            </div>
          </div>
        </ScrollArea>
      </div>
      <div className="mt-[1.3rem] w-[800px]">
        <div>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center gap-1">
                    <BreadcrumbEllipsis className="h-4 w-4" />
                    <span className="sr-only">Toggle menu</span>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    <DropdownMenuItem>Documentation</DropdownMenuItem>
                    <DropdownMenuItem>Themes</DropdownMenuItem>
                    <DropdownMenuItem>GitHub</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/docs/components">
                  Components
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="flex flex-col gap-[1rem]">
          <h1 className="text-[1.5rem] mt-[1rem]">1. Core Objectives</h1>
          <p className="text-xl">Simplifying Music Production:</p>
          <p className="text-[#a1a1a1]">
            The primary goal of the software is to streamline the music
            production process, making it accessible to both beginners and
            professionals. By providing an intuitive interface and a
            comprehensive set of tools, the software allows users to focus on
            creativity rather than technical complexity.
          </p>
          <p className="text-xl">Enhancing Creative Freedom:</p>
          <p className="text-[#a1a1a1]">
            The software is designed to remove barriers to creativity, offering
            a flexible environment where users can experiment with sounds,
            effects, and compositions without limitations. Its non-destructive
            editing capabilities ensure that users can make changes freely
            without fear of losing their original work.
          </p>
          <p className="text-xl">Supporting Professional-Grade Output:</p>
          <p className="text-[#a1a1a1]">
            Despite its user-friendly design, the software is equipped with
            advanced features that enable users to produce professional-quality
            audio. From high-resolution audio support to sophisticated effect
            processors, the software ensures that the final output meets
            industry standards.
          </p>
        </div>
        <div className="flex flex-col gap-[1rem]">
          <h1 className="text-[1.5rem] mt-[1rem]">2. Target Audience</h1>
          <p className="text-xl">Beginners and Hobbyists:</p>
          <p className="text-[#a1a1a1]">
            For those new to music production, the software offers a gentle
            learning curve, with tutorials, templates, and presets that help
            users get started quickly. It demystifies complex audio concepts and
            provides a safe space for learning and experimentation.
          </p>
          <p className="text-xl">Independent Musicians and Producers:</p>
          <p className="text-[#a1a1a1]">
            The software is a powerful tool for indie musicians and producers
            who require professional capabilities without the steep costs
            associated with high-end production suites. It supports the entire
            creative process, from recording and editing to mixing and
            mastering.
          </p>
          <p className="text-xl">Educators and Students:</p>
          <p className="text-[#a1a1a1]">
            With its educational resources and interactive interface, the
            software is ideal for use in music education. Teachers can use it to
            demonstrate audio concepts, while students can practice and develop
            their skills in a hands-on environment.
          </p>
        </div>
        <div className="flex flex-col gap-[1rem]">
          <h1 className="text-[1.5rem] mt-[1rem]">2. Key Benefits</h1>
          <p className="text-xl">Efficiency and Productivity:</p>
          <p className="text-[#a1a1a1]">
            The software is designed to enhance workflow efficiency, enabling
            users to complete projects faster without sacrificing quality.
            Features like batch processing, customizable shortcuts, and
            automated tasks reduce repetitive work and streamline the production
            process.
          </p>
          <p className="text-xl">Collaborative Capabilities:</p>
          <p className="text-[#a1a1a1]">
            The software supports collaboration among multiple users, whether
            they are in the same studio or working remotely. Features like
            real-time editing, cloud project storage, and version control allow
            teams to work together seamlessly.
          </p>
          <p className="text-xl">Customization and Flexibility:</p>
          <p className="text-[#a1a1a1]">
            Users can tailor the software to their specific needs, with options
            to customize the interface, effects, and workflow. This flexibility
            makes it suitable for a wide range of projects, from simple
            recordings to complex, multi-track productions.
          </p>
        </div>
        <div className="flex flex-col gap-[1rem]">
          <h1 className="text-[1.5rem] mt-[1rem]">4. Impact on Users</h1>
          <p className="text-xl">Empowering Creativity:</p>
          <p className="text-[#a1a1a1]">
            By providing a robust platform for music creation, the software
            empowers users to bring their artistic visions to life. Whether
            composing original music, remixing existing tracks, or experimenting
            with sound design, users have the tools they need to express
            themselves fully.
          </p>
          <p className="text-xl">Skill Development:</p>
          <p className="text-[#a1a1a1]">
            The software not only serves as a production tool but also as a
            learning platform. Users can gradually advance from basic tasks to
            mastering complex production techniques, supported by the software&apos;s
            comprehensive feature set and educational resources.
          </p>
          <p className="text-xl">Market Readiness:</p>
          <p className="text-[#a1a1a1]">
            For professionals aiming to release their work commercially, the
            software ensures that the final product is market-ready. It supports
            industry-standard file formats, high-resolution audio, and export
            options that meet the demands of streaming platforms, record labels,
            and more.
          </p>
        </div>
      </div>
      <div className="w-[200px] sticky  top-[5.6rem]   pl-[1rem] flex flex-col gap-[1rem]  h-[500px]">
        <h1 className="text-sm">On This Page</h1>
        <div className="gap-[0.5rem] flex flex-col">
          <p className="text-sm text-[#a1a1a1]">Core Objectives</p>
          <p className="text-sm text-[#a1a1a1]">Target Audience</p>
          <p className="text-sm text-[#a1a1a1]">Key Benefits</p>
          <p className="text-sm text-[#a1a1a1]">Impact on Users</p>
        </div>
      </div>
    </main>
  );
}
