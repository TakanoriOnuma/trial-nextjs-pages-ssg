import { FC, ReactNode } from "react";
import { Box, AppBar, Toolbar, Typography, Drawer } from "@mui/material";
import { NavigationList } from "~/components/NavigationList";

export type DefaultLayoutProps = {
  children: ReactNode;
};

const NAVIGATION_WIDTH = 280;

export const DefaultLayout: FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar>
          <Typography>Pages RouterのSSG検証</Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        open
        sx={{
          width: NAVIGATION_WIDTH,
          "& .MuiDrawer-paper": {
            width: NAVIGATION_WIDTH,
          },
        }}
      >
        <Toolbar />
        <NavigationList />
      </Drawer>
      <Box sx={{ flex: "1 1 0", display: "flex", flexDirection: "column" }}>
        <Toolbar />
        <Box sx={{ flex: "1 1 0", padding: 2, overflow: "hidden" }}>
          {children}
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            padding: (theme) => theme.spacing(1, 2),
            backgroundColor: "#eee",
          }}
        >
          フッター
        </Box>
      </Box>
    </Box>
  );
};
