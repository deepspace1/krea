import AppSidebar from '@/components/layout/app-sidebar';
import Header from '@/components/layout/header';
import { SidebarProvider } from '@/components/ui/sidebar';
import Hero from '@/components/hero';
import GenerateTools from '@/components/generate-tools';
import Gallery from '@/components/gallery';

export default function Home() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full flex-col bg-background font-body">
        <Header />
        <div className="flex flex-1">
          <AppSidebar />
          <main className="flex-1 overflow-y-auto overflow-x-hidden p-4 md:p-8">
            <Hero />
            <GenerateTools />
            <Gallery />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
