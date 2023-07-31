import React from 'react';
import Image from 'next/image';

interface HoverImageProps {
  src1: string;
  src2: string;
  alt: string;
}

const HoverImage: React.FC<HoverImageProps> = ({ src1, src2, alt }) => {
  return (
    <div className="group relative">
      <Image src={src1} alt={alt} className="object-cover transition-opacity duration-300" />
      <Image src={src2} alt={alt} className="object-cover absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
};

export default HoverImage;
