"use client"
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarIcon, MessageCircleIcon, ThumbsUpIcon, UserIcon, MusicIcon, VideoIcon, BookIcon, AwardIcon } from "lucide-react"

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState("discussions")

  const discussions = [
    { title: "Best VST for lo-fi beats?", author: "BeatMaker22", replies: 15, likes: 7 },
    { title: "How to achieve that 80s synth sound", author: "RetroWave", replies: 23, likes: 18 },
    { title: "Mixing vocals: Tips and tricks", author: "VocalPro", replies: 31, likes: 25 },
    { title: "Favorite drum samples for trap music?", author: "TrapMaster", replies: 19, likes: 12 },
    { title: "Mastering techniques for EDM", author: "EDMGuru", replies: 27, likes: 22 },
  ]

  const showcases = [
    { title: "Cyberpunk Nightride", author: "NeonDreamer", type: "Track", likes: 42 },
    { title: "Ambient Soundscape Pack", author: "ChillMaster", type: "Sound Pack", likes: 38 },
    { title: "EDM Drop Tutorial", author: "BeatWizard", type: "Video", likes: 56 },
    { title: "Acoustic Guitar Loops", author: "StringMaster", type: "Sound Pack", likes: 31 },
    { title: "Jazz Improvisation Techniques", author: "JazzCat", type: "Video", likes: 45 },
  ]

  const events = [
    { title: "Virtual Music Production Workshop", date: "2023-07-15", attendees: 120 },
    { title: "Live Streaming Concert", date: "2023-07-22", attendees: 500 },
    { title: "Q&A with Top Producers", date: "2023-07-29", attendees: 250 },
    { title: "Electronic Music Festival", date: "2023-08-05", attendees: 1000 },
    { title: "Songwriting Masterclass", date: "2023-08-12", attendees: 150 },
  ]

  const featuredMembers = [
    { name: "Sarah Johnson", role: "Sound Designer", avatar: "SJ", contributions: 156 },
    { name: "Mike Chen", role: "Music Producer", avatar: "MC", contributions: 203 },
    { name: "Emma Davis", role: "Composer", avatar: "ED", contributions: 178 },
    { name: "Alex Rodriguez", role: "Mixing Engineer", avatar: "AR", contributions: 192 },
  ]

  const challenges = [
    { title: "30-Second Jingle Challenge", participants: 78, daysLeft: 5 },
    { title: "Remix Competition", participants: 124, daysLeft: 12 },
    { title: "Sound Design Battle", participants: 56, daysLeft: 3 },
  ]

  const resources = [
    { title: "Beginner's Guide to Music Production", type: "Article", author: "ProducerPro" },
    { title: "Advanced Mixing Techniques", type: "Video Series", author: "MixMaster" },
    { title: "Free Sample Pack: Organic Percussion", type: "Download", author: "DrumCrafter" },
    { title: "Music Theory for Electronic Producers", type: "E-Book", author: "TheoryGeek" },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl text-center font-bold mb-4">Community Of Mus Motion</h1>
      
      <Tabs defaultValue="discussions" className="">
        <TabsList className="grid w-full rounded-full  justify-items-center h-0 p-0  mb-[5rem]">
          <div className="w-fit border bg-black rounded-full">
          <TabsTrigger className="data-[state=active]:bg-white rounded-full data-[state=active]:text-black bg-black" value="discussions" onClick={() => setActiveTab("discussions")}>Discussions</TabsTrigger>
          <TabsTrigger className="data-[state=active]:bg-white rounded-full data-[state=active]:text-black bg-black" value="showcases" onClick={() => setActiveTab("showcases")}>Showcases</TabsTrigger>
          <TabsTrigger className="data-[state=active]:bg-white rounded-full data-[state=active]:text-black bg-black" value="events" onClick={() => setActiveTab("events")}>Events</TabsTrigger>
          </div>
        </TabsList>
        
        <TabsContent value="discussions">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-black">
              <CardHeader>
                <CardTitle>Recent Discussions</CardTitle>
                <CardDescription>Join the conversation</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {discussions.map((discussion, index) => (
                    <li key={index} className="border-b pb-4 last:border-b-0 last:pb-0">
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
            
            <Card className="bg-black">
              <CardHeader>
                <CardTitle>Start a New Discussion</CardTitle>
                <CardDescription>Share your thoughts with the community</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <Input placeholder="Discussion Title" />
                  <Textarea placeholder="What's on your mind?" />
                  <Button>Post Discussion</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="showcases">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-black">
              <CardHeader>
                <CardTitle>User Showcases</CardTitle>
                <CardDescription>Check out what our community is creating</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {showcases.map((showcase, index) => (
                    <li key={index} className="border-b pb-4 last:border-b-0 last:pb-0">
                      <h3 className="font-semibold">{showcase.title}</h3>
                      <div className="flex items-center justify-between text-sm text-muted-foreground mt-1">
                        <span>{showcase.author} • {showcase.type}</span>
                        <span><ThumbsUpIcon className="h-4 w-4 inline mr-1" />{showcase.likes}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button>View All Showcases</Button>
              </CardFooter>
            </Card>
            
            <Card className="bg-black">
              <CardHeader>
                <CardTitle>Submit Your Work</CardTitle>
                <CardDescription>Share your creations with the community</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <Input placeholder="Project Title" />
                  <Textarea placeholder="Describe your project" />
                  <div className="flex items-center space-x-4">
                    <Button variant="outline"><MusicIcon className="mr-2 h-4 w-4" /> Upload Audio</Button>
                    <Button variant="outline"><VideoIcon className="mr-2 h-4 w-4" /> Upload Video</Button>
                  </div>
                  <Button>Submit Showcase</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="events">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-black">
              <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
                <CardDescription>Don&apos;t miss out on these community events</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {events.map((event, index) => (
                    <li key={index} className="border-b pb-4 last:border-b-0 last:pb-0">
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
            
            <Card className="bg-black">
              <CardHeader>
                <CardTitle>Suggest an Event</CardTitle>
                <CardDescription>Have an idea for a community event?</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <Input placeholder="Event Title" />
                  <Textarea placeholder="Event Description" />
                  <Input type="date" />
                  <Button>Submit Event Idea</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card className="bg-black" >
          <CardHeader>
            <CardTitle>Featured Community Members</CardTitle>
            <CardDescription>Meet our outstanding contributors</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {featuredMembers.map((member, index) => (
                <li key={index} className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={`/placeholder.svg?text=${member.avatar}`} alt={member.name} />
                    <AvatarFallback>{member.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.contributions} contributions</p>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button>View All Members</Button>
          </CardFooter>
        </Card>

        <Card className="bg-black">
          <CardHeader>
            <CardTitle>Community Challenges</CardTitle>
            <CardDescription>Test your skills and win prizes</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {challenges.map((challenge, index) => (
                <li key={index} className="border-b pb-4 last:border-b-0 last:pb-0">
                  <h3 className="font-semibold">{challenge.title}</h3>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mt-1">
                    <span>{challenge.participants} participants</span>
                    <span>{challenge.daysLeft} days left</span>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button>Join a Challenge</Button>
          </CardFooter>
        </Card>

        <Card className="bg-black">
          <CardHeader>
            <CardTitle>Learning Resources</CardTitle>
            <CardDescription>Expand your knowledge and skills</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {resources.map((resource, index) => (
                <li key={index} className="border-b pb-4 last:border-b-0 last:pb-0">
                  <h3 className="font-semibold">{resource.title}</h3>
                  <div className="flex items-center text-sm text-muted-foreground mt-1">
                    {resource.type === "Article" && <BookIcon className="h-4 w-4 mr-1" />}
                    {resource.type === "Video Series" && <VideoIcon className="h-4 w-4 mr-1" />}
                    {resource.type === "Download" && <MusicIcon className="h-4 w-4 mr-1" />}
                    {resource.type === "E-Book" && <BookIcon className="h-4 w-4 mr-1" />}
                    <span>{resource.type}</span>
                    <span className="ml-4">by {resource.author}</span>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button>Browse All Resources</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}