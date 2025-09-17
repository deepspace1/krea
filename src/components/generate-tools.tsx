import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Brain, Edit, Image as ImageIcon, Mic, Clapperboard, RefreshCcw, Sparkles, Wand2 } from 'lucide-react';
import { SVGProps } from 'react';

const MotionTransferIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="currentColor"/>
        <path d="M15.5 12.5C15.5 14.71 13.71 16.5 11.5 16.5C9.29 16.5 7.5 14.71 7.5 12.5C7.5 10.29 9.29 8.5 11.5 8.5C13.71 8.5 15.5 10.29 15.5 12.5Z" fill="currentColor"/>
    </svg>
)
const tools = [
  { icon: ImageIcon, title: 'Image', description: 'Generate images with custom styles in Flux and Ideogram.', new: true },
  { icon: Clapperboard, title: 'Video', description: 'Generate videos with Haiiku, Pika, Runway, Luma, and more.' },
  { icon: Wand2, title: 'Realtime', description: 'Realtime AI rendering on a canvas. Instant feedback loops.' },
  { icon: Sparkles, title: 'Enhancer', description: 'Upscale and enhance images and videos up to 22K.', new: true },
  { icon: Edit, title: 'Edit', description: 'Add objects, change style, or expand photos and generations.', new: true },
  { icon: Mic, title: 'Video Lipsync', description: 'Lip sync any video to any type of audio.', new: true },
  { icon: MotionTransferIcon, title: 'Motion Transfer', description: 'Transfer motion to images and animate characters.', new: true },
  { icon: Brain, title: 'Train', description: 'Teach Krea to replicate your style, products, or characters.' },
];

export default function GenerateTools() {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Generate</h2>
        <Button variant="link">Show all</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {tools.map((tool, index) => (
          <Card key={index} className="bg-card hover:bg-accent/50 transition-colors">
            <CardContent className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="p-2 bg-secondary rounded-lg">
                        <tool.icon className="w-6 h-6 text-foreground" />
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <h3 className="font-semibold">{tool.title}</h3>
                            {tool.new && <Badge className="bg-blue-500/20 text-blue-400 border-none">New</Badge>}
                        </div>
                        <p className="text-sm text-muted-foreground">{tool.description}</p>
                    </div>
                </div>
              <Button variant="secondary" size="sm">Open</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
