import { EVENTS } from "@constants/eventList";
import { generateSlug } from "@utils/utils";

export default async function PostPage({ params, }: { params: Promise<{ post: string }> }) {
  const { post } = await params;
  const event = EVENTS.eventList.find((event) => generateSlug(event.eventName) === post);
  return (
    <div className="translate-y-[-75px] flex flex-col">
      <figure className="h-[70vh] w-full relative">
        <img src={event?.eventImage} alt={event?.eventName} className="w-full h-full object-cover" />
      </figure>
      <div className="max-w-screen-md mx-auto px-6 md:px-14 xl:px-14 flex flex-col items-center mt-20">
        <h1 className="leading-none md:text-7xl mb-20">{event?.eventName}</h1>
        <div>
          <p className="text-lg">
            The OISP International Festival 2024 is back, bigger and brighter than ever! This year’s theme, Luminary, celebrates the brilliance of cultural diversity, unity, and the vibrant talents of students at the Office for International Study Programs (OISP). As one of the most anticipated events of the year, the festival promises an unforgettable experience filled with performances, culinary delights, and engaging activities that showcase the essence of global cultures.
          </p>
          <h4 className="mb-4">A Celebration of Cultural Brilliance</h4>
          <p className="text-lg">
            The Luminary theme embodies the idea of illuminating the world with the uniqueness of each culture, bringing students together through art, music, dance, and traditions. The festival is a platform for students to express themselves and share their heritage with the OISP community, fostering an environment of inclusivity and global appreciation.
          </p>
          <p className="text-lg">
            From mesmerizing traditional performances to contemporary fusions, the stage will come alive with breathtaking showcases from different cultural backgrounds. Expect to witness a spectacular array of dances, musical acts, and dramatic presentations that reflect the diversity within OISP.
          </p>
          <h4 className="mb-4">Global Cuisine Experience</h4>
          <p className="text-lg">
            No cultural festival is complete without an international food fair! This year, Luminary will take your taste buds on a journey across continents. Students and faculty will have the chance to indulge in a variety of authentic dishes, from spicy Asian delicacies to rich European flavors and mouth-watering Middle Eastern specialties. Whether you’re craving a familiar taste from home or eager to explore new flavors, the festival’s food stalls will have something to satisfy every palate.
          </p>
          <h4 className="mb-4">Interactive Workshops & Exhibitions</h4>
          <p className="text-lg">
            Beyond performances and food, Luminary will offer engaging workshops where attendees can immerse themselves in different cultural traditions. Experience calligraphy from Japan, learn traditional dances from various regions, or participate in a hands-on crafts session to create your own cultural keepsake.
          </p>
          <p className="text-lg">
            Additionally, cultural exhibitions will feature vibrant displays of traditional clothing, artifacts, and stories that highlight the heritage of different communities. These exhibits serve as a visual journey through history and tradition, allowing attendees to deepen their understanding of various cultures.
          </p>
          <h4 className="mb-4">Community & Connection</h4>
          <p className="text-lg">
            The OISP International Festival has always been more than just an event—it’s an opportunity for students to connect, collaborate, and celebrate diversity. Luminary aims to strengthen friendships, create unforgettable memories, and inspire everyone to embrace the richness of global cultures.
          </p>
          <p className="text-lg">
            So, mark your calendars and get ready to shine at OISP International Festival 2024: Luminary! Whether you’re performing, showcasing your country’s traditions, or simply enjoying the festivities, this is a celebration you won’t want to miss. Stay tuned for more updates on event schedules, participating clubs, and special performances. Let’s light up the world together!
          </p>
        </div>
      </div>
    </div>
  )
}