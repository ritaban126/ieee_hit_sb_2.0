import {
  GridBody,
  DraggableContainer,
  GridItem,
} from "@/components/ui/GalleryUi";
import Image from "next/image";

const images = [
  {
    id: 1,
    alt: "Silhouette of a traditional Japanese pagoda at sunset",
    src: "/gallery/B.jpg",
  },
  {
    id: 2,
    alt: "Himeji Castle on a clear day",
    src: "/gallery/C.jpg",
  },
  {
    id: 3,
    alt: "Red Car",
    src: "/gallery/D.jpg",
  },
  {
    id: 4,
    alt: "Woman in kimono standing beside a traditional Japanese house",
    src: "/gallery/E.jpg",
  },
  {
    id: 5,
    alt: "Group of men in black suits inside a hallway",
    src: "/gallery/F.jpg",
  },
  {
    id: 6,
    alt: "Crowd walking through a street decorated with red lanterns",
    src: "/gallery/I.jpg",
  },
  {
    id: 7,
    alt: "Timelapse of traffic lights and buildings at night",
    src: "/gallery/J.jpg",
  },
  {
    id: 8,
    alt: "Close-up of orange and black wooden torii gate posts",
    src: "/gallery/M.jpg",
  },
  {
    id: 9,
    alt: "Historic building with brown and white stone exterior in daylight",
    src: "/gallery/O.jpg",
  },
  {
    id: 10,
    alt: "Lantern glowing on a quiet street at night",
    src: "/gallery/P.jpg",
  },
  {
    id: 11,
    alt: "View of Osaka Castle with clear sky backdrop",
    src: "/gallery/Q.jpg",
  },
  {
    id: 12,
    alt: "Pagoda silhouetted during golden hour",
    src: "/gallery/R.jpg",
  },
  {
    id: 13,
    alt: "Himeji Castle seen from a distance",
    src: "/gallery/S.jpg",
  },
  {
    id: 14,
    alt: "Torii gate pillars in vibrant orange and black",
    src: "/gallery/T.jpg",
  },
  {
    id: 15,
    alt: "Traditional Japanese home under daylight",
    src: "/gallery/U.jpg",
  },
  {
    id: 16,
    alt: "Women wearing kimono beside wooden house",
    src: "/gallery/W.jpg",
  },
  {
    id: 17,
    alt: "People passing under hanging red lanterns at dusk",
    src: "/gallery/X.jpg",
  },
  {
    id: 18,
    alt: "Stepping stone path winding through lush forest",
    src: "/gallery/Y.jpg",
  },
];

const Gallery = () => {
  return (
    <DraggableContainer variant="masonry">
      <GridBody>
        {images.map((image) => (
          <GridItem
            key={image.id}
            className="relative h-54 w-36 overflow-hidden rounded-xl border border-zinc-800 md:h-96 md:w-64"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="pointer-events-none absolute h-full w-full object-cover"
            />
          </GridItem>
        ))}
      </GridBody>
    </DraggableContainer>
  );
};

export { Gallery };
