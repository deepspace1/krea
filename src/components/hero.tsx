import { Card } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Image from 'next/image';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

export default function Hero() {
  return (
    <Carousel className="w-full mb-8">
      <CarouselContent>
        <CarouselItem>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
            <Card className="lg:col-span-3 p-0 overflow-hidden relative aspect-[16/9] lg:aspect-auto">
              <div className="absolute inset-0 grid grid-cols-3">
                <div className="relative">
                  <Image src="https://picsum.photos/seed/hero1/600/400" alt="WAN 2.2" fill className="object-cover" data-ai-hint="woman face" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
                </div>
                <div className="relative">
                  <Image src="https://picsum.photos/seed/hero2/600/400" alt="WAN 2.2" fill className="object-cover" data-ai-hint="anime landscape" />
                </div>
                <div className="relative">
                  <Image src="https://picsum.photos/seed/hero3/600/400" alt="WAN 2.2" fill className="object-cover" data-ai-hint="anime character" />
                  <div className="absolute inset-0 bg-gradient-to-l from-black/20 to-transparent" />
                </div>
              </div>
              <div className="relative flex flex-col justify-end h-full p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white">
                <div className="space-y-4">
                  <div>
                    <Badge variant="outline" className="bg-black/50 text-white border-white/20 text-xs">
                      NEW IMAGE MODEL
                    </Badge>
                  </div>
                  <h1 className="text-5xl font-bold">WAN 2.2</h1>
                  <h2 className="text-2xl font-semibold">WAN 2.2 Image generation</h2>
                  <p className="max-w-md">
                    Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures.
                  </p>
                </div>
                <div className="mt-6">
                  <Button size="lg" className="bg-white text-black hover:bg-white/90">Try WAN 2.2</Button>
                </div>
              </div>
            </Card>
            <Card className="lg:col-span-2 p-0 overflow-hidden relative aspect-[16/9] lg:aspect-auto">
              <Image src="https://picsum.photos/seed/hero4/600/400" alt="Open Source" fill className="object-cover" data-ai-hint="whiskey bottle" />
              <div className="relative flex flex-col justify-end h-full p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white">
                 <div className="space-y-4">
                    <div>
                    <Badge variant="outline" className="bg-black/50 text-white border-white/20 text-xs">
                        OPEN SOURCE MODEL
                    </Badge>
                    </div>
                    <h1 className="text-5xl font-bold">Open Source</h1>
                    <h2 className="text-2xl font-semibold">FLUX.1 Krea</h2>
                    <p className="max-w-md">
                        We're making the weights to our FLUX.1 Krea model open-source. Download and run our model weights, read the technical report, or generate with it in Krea Image.
                    </p>
                </div>
                <div className="mt-6"></div>
              </div>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
            <Card className="lg:col-span-2 p-0 overflow-hidden relative aspect-[16/9] lg:aspect-auto">
              <Image src="https://picsum.photos/seed/hero5/600/400" alt="New Feature" fill className="object-cover" data-ai-hint="abstract art" />
              <div className="relative flex flex-col justify-end h-full p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white">
                 <div className="space-y-4">
                    <div>
                    <Badge variant="outline" className="bg-black/50 text-white border-white/20 text-xs">
                        NEW FEATURE
                    </Badge>
                    </div>
                    <h1 className="text-5xl font-bold">Realtime</h1>
                    <h2 className="text-2xl font-semibold">Realtime Generation</h2>
                    <p className="max-w-md">
                        Experience the magic of creating with AI in realtime. Your ideas, visualized instantly.
                    </p>
                </div>
                <div className="mt-6">
                  <Button size="lg" className="bg-white text-black hover:bg-white/90">Try Realtime</Button>
                </div>
              </div>
            </Card>
            <Card className="lg:col-span-3 p-0 overflow-hidden relative aspect-[16/9] lg:aspect-auto">
               <Image src="https://picsum.photos/seed/hero6/1200/400" alt="Video Generation" fill className="object-cover" data-ai-hint="sci-fi movie" />
              <div className="relative flex flex-col justify-end h-full p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white">
                <div className="space-y-4">
                  <div>
                    <Badge variant="outline" className="bg-black/50 text-white border-white/20 text-xs">
                      VIDEO GENERATION
                    </Badge>
                  </div>
                  <h1 className="text-5xl font-bold">Haiiku</h1>
                  <h2 className="text-2xl font-semibold">Generate with Haiiku</h2>
                  <p className="max-w-md">
                    Create stunning videos from simple text prompts. Bring your stories to life with our new video generation model.
                  </p>
                </div>
                <div className="mt-6">
                   <Button size="lg" className="bg-white text-black hover:bg-white/90">Try Haiiku</Button>
                </div>
              </div>
            </Card>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="left-4" />
      <CarouselNext className="right-4" />
    </Carousel>
  );
}
