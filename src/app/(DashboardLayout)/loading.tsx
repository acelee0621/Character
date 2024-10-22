import { Box, CircularProgress, Stack, Typography } from "@mui/material";

const Loading = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center",marginTop:25 }}>
      <Stack direction="column" gap={5}>
        <CircularProgress />
        <Typography variant="h6">Loading...</Typography>
      </Stack>
    </Box>
  );
};

export default Loading;
