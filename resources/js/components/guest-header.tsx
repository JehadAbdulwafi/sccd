import { Icon } from '@/components/icon';
import { Button } from '@/components/ui/button';
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { type BreadcrumbItem, type NavItem } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { BookOpen, Folder, Menu } from 'lucide-react';
import AppLogo from './app-logo';
import AppLogoIcon from './app-logo-icon';

const mainNavItems: NavItem[] = [
  {
    title: 'المجلة العلمية',
    href: '/journal',
    // icon: NotebookText,
  },
  {
    title: 'البحوث والمنشورات',
    href: '/publications',
    // icon: FolderSearch,
  },
  {
    title: 'الأخبار والأحداث',
    href: '/news',
    // icon: Newspaper,
  },
  {
    title: 'شركاؤنا',
    href: '/partners',
    // icon: UsersRound,
  },
  {
    title: 'من نحن',
    href: '/about',
    // icon: Info,
  },
  {
    title: 'اتصل بنا',
    href: '/contact',
    // icon: Mail,
  },
];

export function GuestHeader() {
  const page = usePage();
  return (
    <>
      <div className="border-b border-sidebar-border/80 bg-white">
        <div className="container mx-auto flex h-16 items-center px-4  gap-4">

          <div className="flex flex-row w-full items-center justify-between">
            <Link href="/" prefetch className="flex items-center space-x-2">
              <AppLogo />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden h-full items-center gap-x-2 lg:flex">
              <NavigationMenu className="flex h-full items-stretch">
                <NavigationMenuList dir='rtl' className="flex h-full items-stretch gap-x-2">
                  {mainNavItems.map((item, index) => (
                    <NavigationMenuItem key={index} className="relative flex h-full items-center">
                      <Link
                        href={item.href}
                        className={cn(
                          page.url === item.href && "text-accent-foreground",
                          'h-9 cursor-pointer px-3 gap-2 text-md font-medium hover:text-accent-foreground flex flex-row items-center',
                        )}
                      >
                        {item.title}
                      </Link>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-[34px] w-[34px]">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="flex h-full w-64 flex-col items-stretch justify-between bg-sidebar">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <SheetHeader className="flex justify-start text-left">
                  <AppLogoIcon className="h-6 w-6 fill-current text-black dark:text-white" />
                </SheetHeader>
                <div className="flex h-full flex-1 flex-col space-y-4 p-4">
                  <div className="flex h-full flex-col justify-between text-sm">
                    <div className="flex flex-col space-y-4">
                      {mainNavItems.map((item) => (
                        <Link key={item.title} href={item.href} className="flex items-center space-x-2 font-medium hover:text-primary">
                          {item.icon && <Icon iconNode={item.icon} className="h-5 w-5" />}
                          <span>{item.title}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </>
  );
}

