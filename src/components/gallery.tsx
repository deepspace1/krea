import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';

export default function Gallery() {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
      <Carousel opts={{ align: 'start', loop: true }} className="w-full">
        <CarouselContent className="-ml-4">
          {PlaceHolderImages.map((image) => (
            <CarouselItem key={image.id} className="md:basis-1/2 lg:basis-1/4 pl-4">
              <div className="group relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint={image.imageHint}
                  sizes="(max-width: 768px) 50vw, (max-width: 1280px) 25vw, 20vw"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </div>
  );
}
