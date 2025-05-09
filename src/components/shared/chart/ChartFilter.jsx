import { Button } from "@/components/ui/button";
import React from "react";

export default function ChartFilter({text, active, onClick}) {
  return (
    <Button variant={active ? "default" : "outline"} onClick={onClick}>
      {text}
    </Button>
  );
}
