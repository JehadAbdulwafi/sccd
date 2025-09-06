import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { Handshake, LayoutGrid, Mail, MessageCircle, Newspaper, UsersRound, FileText, HelpCircle } from 'lucide-react';
import AppLogoIcon from './app-logo-icon';

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
    title: 'الأخبار',
    href: '/dashboard/posts/list',
    icon: Newspaper,
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
  {
    title: 'الأسئلة الشائعة',
    href: '/dashboard/faqs',
    icon: HelpCircle,
  },
  {
    title: 'شروط الاستخدام',
    href: '/dashboard/pages/terms',
    icon: FileText,
  },
  {
    title: 'سياسة الخصوصية',
    href: '/dashboard/pages/policies',
    icon: FileText,
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
                <div className="flex h-14">
                  <AppLogoIcon className="fill-current text-white dark:text-black" />
                </div>
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
