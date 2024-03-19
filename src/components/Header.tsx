import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";

export const Header = () => {
  return (
    <div className="sticky top-0 z-50">
      <div className="py-2 px-2 h-full w-full bg-gray-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-200">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem className="flex items-center justify-center">
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <Image className="center" src="/logo.png" alt="logo" width={40} height={40} />
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>links</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 lg:w-[200px] bg-gray-300 bg-opacity-20">
                  <li className="row-span-5">
                    <ListItem
                      href="https://qemelly.bandcamp.com"
                      title="bandcamp"
                    >
                      曲
                    </ListItem>
                    <ListItem href="https://github.com/Noth827" title="GitHub">
                      コード
                    </ListItem>
                    <ListItem href="https://zenn.dev/qemel" title="zenn">
                      アウトプット記事
                    </ListItem>
                    <ListItem
                      href="https://www.youtube.com/@qemelly"
                      title="YouTube"
                    >
                      曲などの投稿
                    </ListItem>
                    <ListItem
                      href="https://atcoder.jp/users/Noth827"
                      title="AtCoder"
                    >
                      競技プログラミング
                    </ListItem>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#works" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  works
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#skills" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  skills
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
