import { useState } from "react";
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
          image: (_, { photo, width, height }) => (
            <img
              src={photo.src}
              alt={photo.alt}
              width={width}
              height={height}
              loading="lazy"
              className="h-full w-full rounded-xl object-cover transition duration-500 ease-out hover:scale-[1.02] hover:brightness-105"
            />
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
