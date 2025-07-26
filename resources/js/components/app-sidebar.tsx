import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { Calendar, Handshake, LayoutGrid, Mail, MessageCircle, Newspaper, NotebookText, UsersRound } from 'lucide-react';
import AppLogo from './app-logo';

const mainNavItems: NavItem[] = [
  {
    title: 'لوحة التحكم',
    href: '/dashboard',
    icon: LayoutGrid,
  },
  {
    title: 'الرسائل',
    href: '/dashboard/messages/list',
    icon: MessageCircle,
  },
  {
    title: 'بحوث والدراسات',
    href: '/dashboard/publications/list',
    icon: Newspaper,
  },
  {
    title: 'المجلة العلمية',
    href: '/dashboard/journal',
    icon: NotebookText,
    items: [
      {
        title: 'مقالات المجلة',
        href: '/dashboard/journal/articles/list',
      },
      {
        title: 'أعداد المجلة',
        href: '/dashboard/journal/issues/list',
      },
    ],
  },
  {
    title: 'الأخبار',
    href: '/dashboard/posts/list',
    icon: Newspaper,
  },
  {
    title: 'الفعاليات',
    href: '/dashboard/events/list',
    icon: Calendar,
  },
  {
    title: 'المستخدمون',
    href: '/dashboard/users/list',
    icon: UsersRound,
  },
  {
    title: 'الشركاء',
    href: '/dashboard/partners/list',
    icon: Handshake,
  },
  {
    title: 'النشرة الإخبارية',
    href: '/dashboard/newsletter',
    icon: Mail,
  },
];


export function AppSidebar() {
  return (
    <Sidebar dir='rtl' collapsible="icon" variant="inset" side='right'>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/dashboard" prefetch>
                <AppLogo />
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <NavMain menu={mainNavItems} />
      </SidebarContent>

      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
