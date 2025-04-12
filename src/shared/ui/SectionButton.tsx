import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-scroll";

interface SectionButtonProps {
  label: string;
  target: string;
}

function SectionButton({ label, target }: SectionButtonProps) {
  return (
    <Button color="inherit">
      <Link
        to={target}
        smooth={true}
        duration={500}
        style={{
          textDecoration: "none",
          color: "inherit",
          marginRight: "20px",
          marginLeft: "20px",
        }}
      >
        {label}
      </Link>
    </Button>
  );
}

export default SectionButton;
