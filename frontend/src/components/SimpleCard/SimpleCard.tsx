import { Typography } from "@mui/material";
import React from "react";
import styled from "@emotion/styled";
import Card, { CardProps } from "@mui/material/Card";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import IconButton from "@mui/material/IconButton";

type SimpleCardProps = {
  label: string;
};

const Label = styled(Typography)({
  fontWeight: 600,
  fontSize: "16px",
  color: "#000000",
  lineHeight: "24px",
});

const ChevronIcon = styled(ChevronRightIcon)({
  color: "#666666",
});

const SimpleCard = ({ label }: SimpleCardProps) => {
  const CustomCard = styled(Card)({});
  return (
    <div
      style={{
        backgroundColor: "#F3F3F3",
        width: "319px",
        height: "63px",
        borderRadius: "10px",
      }}
    >
      <div
        style={{
          top: "19px",
          left: "24px",
          position: "relative",
        }}
      >
        <Label>{label}</Label>
      </div>
      <div
        style={{
          left: "275px",
          bottom: "13px",
          position: "relative",
        }}
      >
        <IconButton>
          <ChevronIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default SimpleCard;
