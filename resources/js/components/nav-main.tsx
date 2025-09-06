import { SidebarGroup, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem } from '@/components/ui/sidebar';
import { Link, usePage } from '@inertiajs/react';
import { ChevronDown, ChevronLeft } from 'lucide-react';
import { useState } from 'react';
import { type NavItem } from '@/types';

export function NavMain({ menu = [] }: { menu: NavItem[] }) {
  const page = usePage();
  const [expandedMenus, setExpandedMenus] = useState<Record<string, boolean>>({});

  const isActive = (href?: string) => {
    if (!href || !page.url) return false;
    return page.url === href || page.url.startsWith(href);
  };

  const toggleMenu = (key: string) => {
    setExpandedMenus((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <SidebarGroup className="px-2 py-0 pt-4">
      <SidebarMenu>
        {menu.map((item, key) => {
          if (!item) return null;

          const hasChildren = item?.items?.length > 0;
          const isMenuActive =
            isActive(item.href);
          const isExpanded = expandedMenus[item.href] || isMenuActive;

          return (
            <SidebarMenuItem key={key}>
              {hasChildren ? (
                <>
                  <SidebarMenuButton
                    onClick={() => toggleMenu(item.href)}
                    isActive={isMenuActive}
                    tooltip={{ children: item.title || '' }}
                  >
                    {item.icon && <item.icon />}
                    <span>{item.title || ''}</span>
                    <span className="ml-auto">
                      {isExpanded ? <ChevronDown className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
                    </span>
                  </SidebarMenuButton>

                  {isExpanded && (
                    <SidebarMenuSub>
                      {item.items.map((child, childKey) =>
                        child ? (
                          <SidebarMenuSubItem key={childKey}>
                            <SidebarMenuSubButton asChild isActive={isActive(child.href)}>
                              <Link href={child.href || '#'} prefetch>
                                <span>{child.title || ''}</span>
                              </Link>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ) : null,
                      )}
                    </SidebarMenuSub>
                  )}
                </>
              ) : (
                <SidebarMenuButton asChild isActive={isActive(item.href)} tooltip={{ children: item.title || '' }}>
                  <Link href={item.href || '#'} prefetch>
                    {item.icon && <item.icon />}
                    <span>{item.title || ''}</span>
                  </Link>
                </SidebarMenuButton>
              )}
            </SidebarMenuItem>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
