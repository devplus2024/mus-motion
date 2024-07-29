export interface PlayList {
  [x: string]: any;
  id: number;
  name: string;
}
export const playlist: PlayList[] = [
  { id: 1, name: "Recently Added" },
  { id: 2, name: "Recently Played" },
  { id: 3, name: "Top Songs" },
  { id: 4, name: "Top Albums" },
  { id: 5, name: "Top Artists" },
  { id: 6, name: "Logic Discography" },
  { id: 7, name: "Bedtime Beats" },
  { id: 8, name: "Feeling Happy" },
  { id: 9, name: "I miss Y2K Pop" },
  { id: 10, name: "Runtober" },
  { id: 11, name: "Mellow Days" },
  { id: 12, name: "Eminem Essentials" },
];
