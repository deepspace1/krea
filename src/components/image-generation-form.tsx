'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { generateImageFromPrompt } from '@/ai/flows/generate-image-from-prompt';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Loader2, Wand2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Skeleton } from './ui/skeleton';

const formSchema = z.object({
  prompt: z.string().min(1, 'Prompt is required.'),
  negativePrompt: z.string().optional(),
  style: z.string(),
});

export default function ImageGenerationForm() {
  const { toast } = useToast();
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: 'A vibrant abstract painting of a futuristic city at night',
      negativePrompt: 'blurry, low quality',
      style: 'cinematic',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setImageUrl(null);
    try {
      // Using a placeholder for the image generation result as the AI flow is not fully implemented for frontend display.
      // In a real scenario, you would call:
      // const result = await generateImageFromPrompt({ prompt: values.prompt });
      // setImageUrl(result.imageUrl);
      
      // Placeholder logic:
      await new Promise(resolve => setTimeout(resolve, 2000));
      const placeholderUrl = `https://picsum.photos/seed/${Date.now()}/1024/1024`;
      setImageUrl(placeholderUrl);

    } catch (error) {
      toast({
        title: 'Error generating image',
        description: 'An unexpected error occurred. Please try again.',
        variant: 'destructive',
      });
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline flex items-center gap-2">
            <Wand2 className="w-6 h-6" />
            <span>WAN 2.2 Image Generation</span>
          </CardTitle>
          <CardDescription>Generate high-quality images from text prompts.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="prompt"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Prompt</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Describe the image you want to create..." rows={4} {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="negativePrompt"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Negative Prompt</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Describe what to avoid in the image..." rows={2} {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="style"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Style</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a style" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="cinematic">Cinematic</SelectItem>
                        <SelectItem value="photorealistic">Photorealistic</SelectItem>
                        <SelectItem value="anime">Anime</SelectItem>
                        <SelectItem value="digital-art">Digital Art</SelectItem>
                        <SelectItem value="fantasy">Fantasy</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Wand2 className="mr-2 h-4 w-4" />
                    Generate
                  </>
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      <div className="flex items-center justify-center bg-card rounded-lg border p-4">
        {isLoading && <Skeleton className="w-full h-full aspect-square" />}
        {!isLoading && imageUrl && (
          <Image
            src={imageUrl}
            alt="Generated image"
            width={1024}
            height={1024}
            className="rounded-md object-cover w-full h-full aspect-square"
            data-ai-hint="generated art"
          />
        )}
        {!isLoading && !imageUrl && (
          <div className="text-center text-muted-foreground">
            <Wand2 className="mx-auto h-12 w-12" />
            <p className="mt-2">Your generated image will appear here.</p>
          </div>
        )}
      </div>
    </div>
  );
}
