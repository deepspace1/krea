import { Button } from '@/components/ui/button';
import { Bell, Camera, Folder, Home, Image as ImageIcon, PenSquare, Sparkles } from 'lucide-react';
import { ThemeToggle } from '../theme-toggle';

const Header = () => {
  return (
    <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background/80 px-4 md:px-8 backdrop-blur-sm">
      <div className="flex items-center gap-2 lg:hidden">
        {/* Mobile sidebar trigger can be added here if needed */}
      </div>

      <div className="flex-1 flex justify-center items-center">
        <div className="flex items-center gap-1 rounded-full border bg-card p-1">
          <Button variant="ghost" size="icon" className="rounded-full bg-accent">
            <Home />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <ImageIcon />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Camera />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <PenSquare />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Sparkles />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Folder />
          </Button>
        </div>
      </div>

      <div className="ml-auto flex items-center gap-2">
        <Button variant="ghost">Gallery</Button>
        <Button variant="ghost">Support</Button>
        <Button variant="ghost" size="icon">
          <Bell />
        </Button>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
