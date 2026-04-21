import { useState } from "react";
import { motion } from "framer-motion";
import { ZoomIn } from "lucide-react";
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export interface GalleryPhoto {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption?: string;
}

interface Props {
  photos: GalleryPhoto[];
  targetRowHeight?: number;
}

export const MasonryGallery = ({ photos, targetRowHeight = 280 }: Props) => {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <RowsPhotoAlbum
        photos={photos}
        targetRowHeight={targetRowHeight}
        spacing={12}
        onClick={({ index }) => setIndex(index)}
        render={{
          image: (_, { photo, width, height, index }) => (
            <div className="group relative h-full w-full overflow-hidden rounded-xl">
              <motion.img
                key={photo.src}
                src={photo.src}
                alt={photo.alt}
                width={width}
                height={height}
                loading="lazy"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                  delay: (index ?? 0) * 0.05,
                }}
                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <p className="line-clamp-2 text-sm font-semibold leading-snug">
                  {photo.caption || photo.alt}
                </p>
                <span className="rounded-full bg-black/35 p-2 backdrop-blur-sm" aria-hidden>
                  <ZoomIn className="h-4 w-4" />
                </span>
              </div>
            </div>
          ),
        }}
      />
      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={photos.map((p) => ({ src: p.src, alt: p.alt, description: p.caption }))}
      />
    </>
  );
};
