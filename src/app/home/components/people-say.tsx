import { cn } from "@/lib/utils";
import Marquee from "./marquee";

const reviews = [
  {
    name: "Alice",
    username: "@alice",
    body: "I have tried many music apps before, but this one truly amazed me. The interface is smooth, easy to navigate, and the overall experience is fantastic. I can quickly find my favorite songs and create playlists effortlessly, making my music experience seamless and enjoyable.",
    img: "https://avatar.vercel.sh/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "The audio quality in this app is outstanding. Every note is crystal clear, from the deep bass to the sharp highs. If you're a true music lover, you will appreciate the sound precision and richness this app offers.",
    img: "https://avatar.vercel.sh/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "One of the best things about this app is its speed. Songs load almost instantly, and there's no lag at all. Even when I have a large playlist, the app handles it effortlessly, making it a top choice for music streaming.",
    img: "https://avatar.vercel.sh/charlie",
  },
  {
    name: "David",
    username: "@david",
    body: "I love how customizable this app is. From themes to equalizer settings, I can adjust everything to match my preferences. Whether I want more bass or a balanced sound, this app gives me full control over my listening experience.",
    img: "https://avatar.vercel.sh/david",
  },
  {
    name: "Emma",
    username: "@emma",
    body: "The offline mode is a lifesaver! I can download my favorite playlists and listen to them without needing an internet connection. It's perfect for traveling or when I'm in areas with poor network coverage.",
    img: "https://avatar.vercel.sh/emma",
  },
  {
    name: "Frank",
    username: "@frank",
    body: "Managing playlists has never been easier. The app allows me to create, edit, and organize my playlists in just a few taps. The intuitive design makes the entire process smooth and enjoyable.",
    img: "https://avatar.vercel.sh/frank",
  },
  {
    name: "Grace",
    username: "@grace",
    body: "I am amazed by how well the app understands my music taste. The smart recommendations suggest songs that perfectly match my preferences, helping me discover new artists and tracks that I genuinely enjoy.",
    img: "https://avatar.vercel.sh/grace",
  },
  {
    name: "Hannah",
    username: "@hannah",
    body: "Seamless device syncing is one of my favorite features. I can start listening on my laptop and continue right where I left off on my phone. It's incredibly convenient and enhances my music experience.",
    img: "https://avatar.vercel.sh/hannah",
  },
  {
    name: "Isaac",
    username: "@isaac",
    body: "Unlike other music apps, this one supports a wide range of audio formats. I can play all my music files without needing to convert them, which is a huge plus for someone who has an extensive collection.",
    img: "https://avatar.vercel.sh/isaac",
  },
  {
    name: "Jack",
    username: "@jack",
    body: "The equalizer settings are simply amazing. I can fine-tune the sound exactly how I like it. Whether I'm in the mood for deep bass or clear vocals, this app lets me adjust the audio experience to perfection.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Kelly",
    username: "@kelly",
    body: "Battery efficiency is impressive. Unlike some other apps that drain my battery quickly, this one is well-optimized, allowing me to enjoy my music for hours without worrying about my phone running out of power.",
    img: "https://avatar.vercel.sh/kelly",
  },
  {
    name: "Leo",
    username: "@leo",
    body: "Dark mode is a game-changer! It’s easy on the eyes, especially at night. The sleek design and color scheme make the app look even more premium and enjoyable to use.",
    img: "https://avatar.vercel.sh/leo",
  },
  {
    name: "Mia",
    username: "@mia",
    body: "As an audiophile, I appreciate that this app supports high-resolution audio. It allows me to experience music at its best quality, bringing out every detail in my favorite songs.",
    img: "https://avatar.vercel.sh/mia",
  },
  {
    name: "Noah",
    username: "@noah",
    body: "Gesture controls make navigating the app so much more intuitive. Swiping to change tracks or adjust the volume feels natural and responsive, making my music experience even smoother.",
    img: "https://avatar.vercel.sh/noah",
  },
  {
    name: "Olivia",
    username: "@olivia",
    body: "The built-in radio feature is incredible! I can explore a variety of stations and discover new music from different genres without even having to search for songs manually.",
    img: "https://avatar.vercel.sh/olivia",
  },
  {
    name: "Paul",
    username: "@paul",
    body: "Having both music and podcast support in the same app is fantastic. I no longer need to switch between different apps, making my listening experience more convenient and enjoyable.",
    img: "https://avatar.vercel.sh/paul",
  },
  {
    name: "Quinn",
    username: "@quinn",
    body: "The integrated lyrics feature is one of my favorites. I love being able to sing along to my favorite songs without having to search for the lyrics separately.",
    img: "https://avatar.vercel.sh/quinn",
  },
  {
    name: "Ryan",
    username: "@ryan",
    body: "Frequent updates keep improving the app. It’s great to see that the developers actually listen to user feedback and continue to add new features and fix bugs regularly.",
    img: "https://avatar.vercel.sh/ryan",
  },
  {
    name: "Sophia",
    username: "@sophia",
    body: "The user community is amazing! I can share my playlists with friends, discover new music, and even interact with other users who have similar tastes in music.",
    img: "https://avatar.vercel.sh/sophia",
  },
  {
    name: "Tom",
    username: "@tom",
    body: "Cross-platform support is one of the best features of this app. I can use it seamlessly on my Windows PC, MacBook, iPhone, and Android device without any issues.",
    img: "https://avatar.vercel.sh/tom",
  },
  {
    name: "Uma",
    username: "@uma",
    body: "The best part? No annoying ads! Unlike other apps that constantly interrupt my music, this one provides a truly immersive and uninterrupted listening experience.",
    img: "https://avatar.vercel.sh/uma",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-[200px] w-[200px] cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "border dark:bg-black dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        {/* <img className="rounded-full" width="32" height="32" alt="" src={img} /> */}
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemoVertical() {
  return (
    <div className="relative flex h-[500px] w-full flex-row items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
      <Marquee pauseOnHover vertical className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee pauseOnHover vertical className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white dark:from-background"></div>
    </div>
  );
}
