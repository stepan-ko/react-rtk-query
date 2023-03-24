import { Box, Typography } from "@mui/material";
import { useGetUserDataQuery } from "../../services/user";

export const Teams = () => {
  const { data } = useGetUserDataQuery();
  console.log(data);

  return (
    <Box>
      <Typography variant="h1">Команды</Typography>
    </Box>
  );
};
