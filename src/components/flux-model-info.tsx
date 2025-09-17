import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Cpu } from 'lucide-react';

export default function FluxModelInfo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline flex items-center gap-2">
            <Cpu className="w-6 h-6"/>
            FLUX.1 Krea
        </CardTitle>
        <CardDescription>
          Next-generation image model with unparalleled speed and quality.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">
          FLUX.1 is a powerful new image model designed for real-time generation, offering exceptional detail and coherence. It's optimized for performance without compromising on creative flexibility.
        </p>
        <Button className="w-full">Open</Button>
      </CardContent>
    </Card>
  );
}
