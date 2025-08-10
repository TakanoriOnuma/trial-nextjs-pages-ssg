import { createEmotionCache } from "@mui/material-nextjs/v15-pagesRouter";

export const createMyEmotionCache = () => {
  return createEmotionCache({
    key: "css",
    prepend: true,
  });
};
