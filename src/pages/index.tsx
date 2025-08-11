import type { FC } from "react";
import { useState } from "react";
import NextLink from "next/link";
import { Link as MuiLink } from "@mui/material";

import { Box, Button, Typography, TextField, Stack } from "@mui/material";

const HomePage: FC = () => {
  const [dynamicId, setDynamicId] = useState("");

  return (
    <Box>
      <Typography variant="h5" fontWeight="bold">
        トップページ
      </Typography>
      <Box sx={{ mt: 2 }}>動的ページの遷移</Box>
      <Stack sx={{ mt: 1 }} direction="row" spacing={1}>
        <TextField
          id="dynamic-id"
          label="ID"
          value={dynamicId}
          size="small"
          onChange={(event) => {
            setDynamicId(event.target.value);
          }}
        />
        <Button
          LinkComponent={NextLink}
          variant="contained"
          href={dynamicId !== "" ? `/dynamic/${dynamicId}/` : undefined}
          disabled={dynamicId === ""}
        >
          遷移
        </Button>
      </Stack>
      <hr />
      <Typography variant="h6" fontWeight="bold">
        デプロイ先
      </Typography>
      <ul>
        <li>
          Netlify
          <br />
          <MuiLink
            href="https://trial-nextjs-pages-ssg.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://trial-nextjs-pages-ssg.netlify.app/
          </MuiLink>
        </li>
        <li>
          Vercel
          <br />
          <MuiLink
            href="https://trial-nextjs-pages-ssg.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://trial-nextjs-pages-ssg.vercel.app/
          </MuiLink>
        </li>
        <li>
          Firebase Hosting
          <br />
          <MuiLink
            href="https://trial-nextjs-pages-ssg.web.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://trial-nextjs-pages-ssg.web.app/
          </MuiLink>
        </li>
      </ul>
    </Box>
  );
};

export default HomePage;
