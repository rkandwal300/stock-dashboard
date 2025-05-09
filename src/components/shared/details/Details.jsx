import { Card } from "@/components/ui/card";
import dayjs from "dayjs";
import React from "react";

function Details({ details }) {
  const detailList = {
    name: "Name",
    open: "Open",
    previous_close: "Previous Close",
    high: "High",
    type: "Type",
    last_update_utc: "Last Updated",
  };

 
  return (
    <Card className='p-4'>
      <ul className={"h-full w-full flex flex-col jb divide-y-1"}>
        {Object.keys(detailList).map((item) => (
          <li key={item} className="flex justify-between items-center py-2 gap-2">
            <span className="font-medium">{detailList[item]}</span>
            <span>
              {item === "last_update_utc"
                ? dayjs(details[item]).format('MMMM D, YYYY h:mm A') 
                : details[item]}
            </span>
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default Details;
