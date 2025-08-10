import type { FC } from "react";
import { useState } from "react";
import NextLink from "next/link";

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
    </Box>
  );
};

export default HomePage;
