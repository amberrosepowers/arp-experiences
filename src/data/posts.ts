export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  imageAlt: string;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: "a-hotel-lens-on-travel",
    title: "A Hotel Lens on Travel",
    excerpt:
      "Twenty-five years inside hospitality changes how you plan a trip. It starts with the welcome, not the itinerary.",
    date: "2026-06-18",
    category: "Perspective",
    image: "/photos/blog-hotel-lens-seafront-dusk.jpg",
    imageAlt: "Seafront hotel room with arched balcony doors at dusk",
    body: [
      "Working inside hotels teaches you that the reservation is the least interesting part of a stay. What people remember is the arrival — the pace of the check-in, the temperature of the room, whether someone noticed they were celebrating something.",
      "When we plan travel, we work backwards from that feeling. Which property actually delivers on the morning after a long flight? Which general manager will take care of a client the way we would? Which room, on which floor, facing which direction?",
      "That knowledge is not on a booking site. It comes from relationships, from having stayed, and from asking better questions before anything is confirmed.",
    ],
  },
  {
    slug: "gathering-people-in-a-place",
    title: "Gathering People in a Place",
    excerpt:
      "Retreats, weddings, and reunions succeed on the same principle: the place should do some of the work.",
    date: "2026-05-02",
    category: "Gatherings",
    image: "/photos/offering-flights-paris-dusk.jpg",
    imageAlt: "City skyline over the Seine at dusk",
    body: [
      "A group gathering is an act of hospitality at scale. The property sets the tone, but the moments between the scheduled hours are where connection happens — the long table at dusk, the walk into town, the unplanned second drink.",
      "We build gatherings with those spaces left open on purpose, then quietly prepare for them: the table already held, the guide already briefed, the transportation already waiting.",
      "The measure of a good gathering is that nobody notices the planning.",
    ],
  },
  {
    slug: "the-case-for-fewer-options",
    title: "The Case for Fewer Options",
    excerpt: "Choice is not the same as service. Knowing the right recommendation is the work.",
    date: "2026-03-27",
    category: "Approach",
    image: "/photos/blog-fewer-options-ocean-room.jpg",
    imageAlt: "Ocean-view bedroom with private terrace",
    body: [
      "Clients rarely need more options. They need someone who has narrowed the field honestly, and can explain why one place is right for this trip and this group of people.",
      "We would rather present three properties we know deeply than twelve we have only read about. That editing is the value.",
      "It also means saying when a destination is wrong for the season, the occasion, or the people traveling — which is often the most useful advice we give.",
    ],
  },
];
