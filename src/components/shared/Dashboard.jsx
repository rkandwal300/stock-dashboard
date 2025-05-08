import React from "react";
import Header from "./header/Header";
import { Card } from "../ui/card";
import { mockCompanyDetails } from "@/constants/mock";

export default function Dashboard() {
  return (
    <div className="h-screen grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-8 md:grid-rows-7 xl:grid-rows-5 auto-rows-fr gap-6 p-10">
      <Header name={mockCompanyDetails.name} />
      <div className="row-span-4 md:col-span-2">
        <Card className={"h-full"}>Chart</Card>
      </div>

      <div className="h-full">
        <Card className={"h-full"}>Overview</Card>
      </div>
      <div className="row-span-2 md:col-span-1">
        <Card className={"h-full"}>Details</Card>
      </div>
    </div>
  );
}
