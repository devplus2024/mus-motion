import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  CalendarIcon,
  MessageCircleIcon,
  ThumbsUpIcon,
  UserIcon,
} from "lucide-react";

export default function CommunityPage() {
  const discussions = [
    {
      title: "Best VST for lo-fi beats?",
      author: "BeatMaker22",
      replies: 15,
      likes: 7,
    },
    {
      title: "How to achieve that 80s synth sound",
      author: "RetroWave",
      replies: 23,
      likes: 18,
    },
    {
      title: "Mixing vocals: Tips and tricks",
      author: "VocalPro",
      replies: 31,
      likes: 25,
    },
  ];

  const showcases = [
    {
      title: "Cyberpunk Nightride",
      author: "NeonDreamer",
      type: "Track",
      likes: 42,
    },
    {
      title: "Ambient Soundscape Pack",
      author: "ChillMaster",
      type: "Sound Pack",
      likes: 38,
    },
    {
      title: "EDM Drop Tutorial",
      author: "BeatWizard",
      type: "Video",
      likes: 56,
    },
  ];

  const events = [
    {
      title: "Virtual Music Production Workshop",
      date: "2023-07-15",
      attendees: 120,
    },
    { title: "Live Streaming Concert", date: "2023-07-22", attendees: 500 },
    { title: "Q&A with Top Producers", date: "2023-07-29", attendees: 250 },
  ];

  const featuredMembers = [
    { name: "Sarah Johnson", role: "Sound Designer", avatar: "SJ" },
    { name: "Mike Chen", role: "Music Producer", avatar: "MC" },
    { name: "Emma Davis", role: "Composer", avatar: "ED" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Community Hub</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Recent Discussions */}
        <Card className="bg-[#000000]">
          <CardHeader>
            <CardTitle>Recent Discussions</CardTitle>
            <CardDescription>Join the conversation</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {discussions.map((discussion, index) => (
                <li
                  key={index}
                  className="border-b pb-4 last:border-b-0 last:pb-0"
                >
                  <h3 className="font-semibold">{discussion.title}</h3>
                  <div className="flex items-center text-sm text-muted-foreground mt-1">
                    <UserIcon className="h-4 w-4 mr-1" />
                    <span>{discussion.author}</span>
                    <MessageCircleIcon className="h-4 w-4 ml-4 mr-1" />
                    <span>{discussion.replies}</span>
                    <ThumbsUpIcon className="h-4 w-4 ml-4 mr-1" />
                    <span>{discussion.likes}</span>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button>View All Discussions</Button>
          </CardFooter>
        </Card>

        {/* User Showcases */}
        <Card className="bg-[#000000]">
          <CardHeader>
            <CardTitle>User Showcases</CardTitle>
            <CardDescription>
              Check out what our community is creating
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {showcases.map((showcase, index) => (
                <li
                  key={index}
                  className="border-b pb-4 last:border-b-0 last:pb-0"
                >
                  <h3 className="font-semibold">{showcase.title}</h3>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mt-1">
                    <span>
                      {showcase.author} • {showcase.type}
                    </span>
                    <span>
                      <ThumbsUpIcon className="h-4 w-4 inline mr-1" />
                      {showcase.likes}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button>View All Showcases</Button>
          </CardFooter>
        </Card>

        {/* Upcoming Events */}
        <Card className="bg-[#000000]">
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
            <CardDescription>
              Don&apos;t miss out on these community events
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {events.map((event, index) => (
                <li
                  key={index}
                  className="border-b pb-4 last:border-b-0 last:pb-0"
                >
                  <h3 className="font-semibold">{event.title}</h3>
                  <div className="flex items-center text-sm text-muted-foreground mt-1">
                    <CalendarIcon className="h-4 w-4 mr-1" />
                    <span>{event.date}</span>
                    <UserIcon className="h-4 w-4 ml-4 mr-1" />
                    <span>{event.attendees} attending</span>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button>View All Events</Button>
          </CardFooter>
        </Card>

        {/* Featured Community Members */}
        <Card className="bg-[#000000]">
          <CardHeader>
            <CardTitle>Featured Community Members</CardTitle>
            <CardDescription>Meet our outstanding contributors</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {featuredMembers.map((member, index) => (
                <li key={index} className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage
                      src={`/placeholder.svg?text=${member.avatar}`}
                      alt={member.name}
                    />
                    <AvatarFallback>{member.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {member.role}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button>View All Members</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
