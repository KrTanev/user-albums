import { Box, Typography } from "@mui/material";

interface TitleProps {
  title: string;
  value: string;
}

export const TitleValue = ({ title, value }: TitleProps) => {
  return (
    <Box display={"flex"} gap={1} alignItems={"center"}>
      <Typography fontWeight={700}>{`${title} :`}</Typography>
      <Typography
        sx={{
          maxWidth: "140px",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        {value}
      </Typography>
    </Box>
  );
};
