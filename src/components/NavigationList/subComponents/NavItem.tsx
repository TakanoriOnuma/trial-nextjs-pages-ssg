import { FC } from "react";
import { useRouter } from "next/router";
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Link,
} from "@mui/material";
import NextLink from "next/link";
import { NavigationItem } from "../NavigationItemType";

export type NavItemProps = {
  /** 項目 */
  item: NavigationItem;
};

export const NavItem: FC<NavItemProps> = ({ item }) => {
  const { asPath } = useRouter();

  const Icon = item.icon;

  return (
    <Link
      component={NextLink}
      href={item.href}
      underline="none"
      color="inherit"
    >
      <ListItemButton
        selected={
          item.exactPath ? item.href === asPath : asPath.startsWith(item.href)
        }
      >
        {Icon && (
          <ListItemIcon>
            <Icon />
          </ListItemIcon>
        )}
        <ListItemText primary={item.title} inset={Icon == null} />
      </ListItemButton>
    </Link>
  );
};
