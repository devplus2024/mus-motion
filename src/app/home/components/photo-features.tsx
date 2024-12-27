import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Camera,
  ImageIcon,
  Palette,
  Share2,
  Cloud,
  Zap,
  Layers,
  Video,
  Music,
  Globe,
} from "lucide-react";
import Image from "next/image";

export default function PhotoFeatures() {
  return (
    <section className="w-full bg-background py-[2rem] md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center gap-8 md:flex-row-reverse lg:gap-12">
          {/* Left side - Photo */}
          {/* <div className="w-full md:w-1/2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src="/Opera Snapshot_2024-12-25_203610_stromatech.vercel.app.png"
                alt="Feature illustration"
                className=""
                fill
                priority
              />
            </div>
          </div> */}

          {/* Right side - Content */}
          <div className="w-full space-y-8 lg:w-[90%]">
            <div className="flex flex-col items-center justify-center space-y-4">
              <Badge variant="secondary" className="text-sm">
                Revolutionary Features
              </Badge>
              <h2 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl xl:text-[2.75rem]/none">
                Unleash Your Creative Vision
              </h2>
              <p className="md:text-md max-w-[600px] text-zinc-500 dark:text-zinc-400">
                Experience photography like never before with our cutting-edge
                tools and features. From advanced editing to AI-powered
                enhancements, we&apos;ve got everything you need to bring your
                creative vision to life.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-4">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border">
                  <ImageIcon className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold">Advanced Editing Suite</h3>
                  <p className="text-sm text-muted-foreground">
                    Professional-grade tools for perfect adjustments and
                    creative effects.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border">
                  <Zap className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold">AI-Powered Enhancements</h3>
                  <p className="text-sm text-muted-foreground">
                    Intelligent auto-adjustments and smart filters for stunning
                    results.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border">
                  <Share2 className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold">Seamless Sharing</h3>
                  <p className="text-sm text-muted-foreground">
                    Instantly share your creations across all major platforms.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border">
                  <Cloud className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold">Cloud Integration</h3>
                  <p className="text-sm text-muted-foreground">
                    Automatic backup and sync across all your devices.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border">
                  <Layers className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold">Layer Masking</h3>
                  <p className="text-sm text-muted-foreground">
                    Create complex compositions with non-destructive layer
                    masks.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border">
                  <Video className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold">Video Editing</h3>
                  <p className="text-sm text-muted-foreground">
                    Seamlessly edit videos with the same powerful photo tools.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border">
                  <Music className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold">Audio Integration</h3>
                  <p className="text-sm text-muted-foreground">
                    Add and edit audio tracks for your video projects.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="border0 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg">
                  <Globe className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold">Collaborative Editing</h3>
                  <p className="text-sm text-muted-foreground">
                    Work together in real-time with team members worldwide.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="w-full sm:w-auto">
                Start Free Trial
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                View All Features
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
