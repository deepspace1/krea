'use client';

import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Logo } from '@/components/logo';
import { ChevronDown, HardDrive, Settings } from 'lucide-react';

const AppSidebar = () => {
  return (
    <Sidebar side="left" variant="sidebar" collapsible="none" className="bg-background border-r">
      <SidebarHeader className="p-4 justify-between">
        <div className="flex items-center gap-2">
          <Logo className="w-8 h-8" />
          <h1 className="font-headline text-lg font-semibold">Krea AI</h1>
        </div>
      </SidebarHeader>
      <SidebarContent className="p-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="https://picsum.photos/seed/user/32/32" data-ai-hint="user avatar" />
                  <AvatarFallback>B</AvatarFallback>
                </Avatar>
                <span>benevolent...</span>
              </div>
              <ChevronDown className="w-4 h-4 ml-auto" />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="p-4 mt-auto">
        <SidebarMenu>
           <SidebarMenuItem>
            <SidebarMenuButton variant="ghost">
              <HardDrive />
              <span>Credits</span>
              <span className="ml-auto text-xs text-muted-foreground">100</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton variant="ghost">
              <Settings />
              <span>Settings</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
