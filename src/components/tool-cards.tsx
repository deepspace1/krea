import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BrainCircuit, Image as ImageIcon, Move3d, Paintbrush, SmilePlus, Video } from 'lucide-react';

const tools = [
  {
    icon: ImageIcon,
    title: 'Image',
    description: 'Create and edit images with AI.',
  },
  {
    icon: Video,
    title: 'Video',
    description: 'Generate stunning videos from text.',
  },
  {
    icon: Paintbrush,
    title: 'Edit',
    description: 'Intelligently edit your media.',
  },
  {
    icon: SmilePlus,
    title: 'Video Lipsync',
    description: 'Sync audio to video character lips.',
  },
  {
    icon: Move3d,
    title: 'Motion Transfer',
    description: 'Apply motion from one video to another.',
  },
  {
    icon: BrainCircuit,
    title: 'Train',
    description: 'Train your own custom AI models.',
  },
];

export default function ToolCards() {
  return (
    <Card>
        <CardHeader>
            <CardTitle className="font-headline">Tools</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {tools.map((tool) => (
                <Card key={tool.title} className="bg-background/50">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3">
                            <tool.icon className="w-5 h-5 text-primary" />
                            <span className="text-base font-semibold">{tool.title}</span>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground mb-4 h-10">{tool.description}</p>
                        <Button variant="secondary" className="w-full">Open</Button>
                    </CardContent>
                </Card>
            ))}
        </CardContent>
    </Card>
  );
}
