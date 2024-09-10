import { FC } from "react";
import { Tooltip, Typography } from "@mui/material";

interface TooltipProps {
  title: string;
  children: React.ReactElement;
  [key: string]: any;
}

const ApTooltip: FC<TooltipProps> = ({ title, children, ...restProps }) => {
  return (
    <Tooltip
      title={<Typography sx={{ fontFamily: "'Poppins', sans-serif" }}>{title}</Typography>}
      arrow
      {...restProps}
    >
      {children}
    </Tooltip>
  );
};

export default ApTooltip;
