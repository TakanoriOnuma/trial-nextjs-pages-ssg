import { FC } from "react";
import { List } from "@mui/material";
import {
  Home as HomeIcon,
  Description as DescriptionIcon,
  BrowserNotSupported as BrowserNotSupportedIcon,
} from "@mui/icons-material";

import { NavItem } from "./subComponents/NavItem";
import { NavigationItem } from "./NavigationItemType";

const NAVIGATION_ITEMS: NavigationItem[] = [
  { icon: HomeIcon, title: "トップ", href: "/", exactPath: true },
  { icon: DescriptionIcon, title: "ページ１", href: "/page1/" },
  { icon: DescriptionIcon, title: "ページ２", href: "/page2/" },
  {
    icon: BrowserNotSupportedIcon,
    title: "存在しないページ",
    href: "/not-found/",
  },
];

export type NavigationListProps = {};

export const NavigationList: FC<NavigationListProps> = ({}) => {
  return (
    <List>
      {NAVIGATION_ITEMS.map((navItem) => (
        <NavItem key={navItem.href} item={navItem} />
      ))}
    </List>
  );
};
