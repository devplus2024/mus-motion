import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "../../components/getPostMetadata";
import DocsSideBar from "./components/side-bar";
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
import { posts } from "#site/content";
import { PostItem } from "./components/post-item";
import { QueryPagination } from "./components/query-pagination";
import { Tag } from "@/components/tag";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getAllTags, sortPosts, sortTagsByCount } from "@/lib/utils";
import { Metadata } from "next";
import { MDXContent } from "@/components/mdx-components";

const POSTS_PER_PAGE = 20;

interface BlogPageProps {
  searchParams: {
    page?: string;
  };
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const currentPage = Number(searchParams?.page) || 1;
  const sortedPosts = sortPosts(posts.filter((post) => post.published));
  const totalPages = Math.ceil(sortedPosts.length / POSTS_PER_PAGE);

  const displayPosts = sortedPosts.slice(
    POSTS_PER_PAGE * (currentPage - 1),
    POSTS_PER_PAGE * currentPage
  );

  const tags = getAllTags(posts);
  const sortedTags = sortTagsByCount(tags);

  return (
    <main className="w-full flex  px-[2rem] mb-[4rem] relative">
      <DocsSideBar />
      <div className="mt-[1.3rem] w-[700px]">
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
          <div>
            <div className="flex flex-col  gap-[1rem]">
              <h1
                className="text-[1.5rem] docs-content-purpose scroll-m-20 font-bold mt-[1rem]"
                id="core-objectives"
              >
                1. Core Objectives
              </h1>
              <p className="text-md font-medium">
                Simplifying Music Production:
              </p>
              <p className="text-[#a1a1a1] ">
                The primary goal of the software is to streamline the music
                production process, making it accessible to both beginners and
                professionals. By providing an intuitive interface and a
                comprehensive set of tools, the software allows users to focus
                on creativity rather than technical complexity.
              </p>
              <p className="text-md font-medium">Enhancing Creative Freedom:</p>
              <p className="text-[#a1a1a1]">
                The software is designed to remove barriers to creativity,
                offering a flexible environment where users can experiment with
                sounds, effects, and compositions without limitations. Its
                non-destructive editing capabilities ensure that users can make
                changes freely without fear of losing their original work.
              </p>
              <p className="text-md font-medium">
                Supporting Professional-Grade Output:
              </p>
              <p className="text-[#a1a1a1]">
                Despite its user-friendly design, the software is equipped with
                advanced features that enable users to produce
                professional-quality audio. From high-resolution audio support
                to sophisticated effect processors, the software ensures that
                the final output meets industry standards.
              </p>
            </div>
            <div className="flex flex-col  gap-[1rem]">
              <h1
                className="text-[1.5rem] docs-content-purpose font-bold mt-[1rem] scroll-m-20"
                id="target-audience"
              >
                2. Target Audience
              </h1>
              <p className="text-md font-medium">Beginners and Hobbyists:</p>
              <p className="text-[#a1a1a1]">
                For those new to music production, the software offers a gentle
                learning curve, with tutorials, templates, and presets that help
                users get started quickly. It demystifies complex audio concepts
                and provides a safe space for learning and experimentation.
              </p>
              <p className="text-md font-medium">
                Independent Musicians and Producers:
              </p>
              <p className="text-[#a1a1a1]">
                The software is a powerful tool for indie musicians and
                producers who require professional capabilities without the
                steep costs associated with high-end production suites. It
                supports the entire creative process, from recording and editing
                to mixing and mastering.
              </p>
              <p className="text-md font-medium">Educators and Students:</p>
              <p className="text-[#a1a1a1]">
                With its educational resources and interactive interface, the
                software is ideal for use in music education. Teachers can use
                it to demonstrate audio concepts, while students can practice
                and develop their skills in a hands-on environment.
              </p>
            </div>
            <div className="flex  flex-col gap-[1rem]">
              <h1
                className="text-[1.5rem] docs-content-purpose font-bold mt-[1rem] scroll-m-20"
                id="key-benefits"
              >
                3. Key Benefits
              </h1>
              <p className="text-md font-medium">
                Efficiency and Productivity:
              </p>
              <p className="text-[#a1a1a1]">
                The software is designed to enhance workflow efficiency,
                enabling users to complete projects faster without sacrificing
                quality. Features like batch processing, customizable shortcuts,
                and automated tasks reduce repetitive work and streamline the
                production process.
              </p>
              <p className="text-md font-medium">Collaborative Capabilities:</p>
              <p className="text-[#a1a1a1]">
                The software supports collaboration among multiple users,
                whether they are in the same studio or working remotely.
                Features like real-time editing, cloud project storage, and
                version control allow teams to work together seamlessly.
              </p>
              <p className="text-md font-medium">
                Customization and Flexibility:
              </p>
              <p className="text-[#a1a1a1]">
                Users can tailor the software to their specific needs, with
                options to customize the interface, effects, and workflow. This
                flexibility makes it suitable for a wide range of projects, from
                simple recordings to complex, multi-track productions.
              </p>
            </div>
            <div className="flex  flex-col gap-[1rem]">
              <h1
                className="text-[1.5rem] docs-content-purpose font-bold mt-[1rem scroll-m-20]"
                id="impact-on-users"
              >
                4. Impact on Users
              </h1>
              <p className="text-md font-medium">Empowering Creativity:</p>
              <p className="text-[#a1a1a1]">
                By providing a robust platform for music creation, the software
                empowers users to bring their artistic visions to life. Whether
                composing original music, remixing existing tracks, or
                experimenting with sound design, users have the tools they need
                to express themselves fully.
              </p>
              <p className="text-md font-medium">Skill Development:</p>
              <p className="text-[#a1a1a1]">
                The software not only serves as a production tool but also as a
                learning platform. Users can gradually advance from basic tasks
                to mastering complex production techniques, supported by the
                software&apos;s comprehensive feature set and educational
                resources.
              </p>
              <p className="text-md font-medium">Market Readiness:</p>
              <p className="text-[#a1a1a1]">
                For professionals aiming to release their work commercially, the
                software ensures that the final product is market-ready. It
                supports industry-standard file formats, high-resolution audio,
                and export options that meet the demands of streaming platforms,
                record labels, and more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
