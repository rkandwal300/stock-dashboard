import { mockSearchResults } from "@/constants/mock";
import React, { useState } from "react";
import { Button } from "../../ui/button";
import { Search as SIcon, X } from "lucide-react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"; 
import SearchResult from "./SearchResult";

function Search() {
  const [input, setInput] = useState("");
  const [bestResults, setBestResults] = useState(mockSearchResults.result);
  const clear = () => {
    setInput("");
    setBestResults([]);
  };
  const updateBestMatches = () => {
    setBestResults(mockSearchResults.result);
  };
  return (
    <Popover open={input.length > 0}>
      <PopoverTrigger asChild>
        <div className="flex items-center my-4 border-2 rounded-lg relative z-50 w-96 bg-background border-primary">
          <input
            type="text"
            value={input}
            placeholder="Search stock...."
            className="w-full px-4 py-2 h-8 focus:outline-none rounded-md"
            onChange={(e) => {
              setInput(e.target.value);
            }}
            onKeyPress={(e) => {
              if (e.key == "Enter") {
                updateBestMatches();
              }
            }}
          />  
            <Button variant={"ghost"} onClick={clear}>
              <X size={18} />
            </Button>
         
            <Button onClick={updateBestMatches}   >
              <SIcon size={18} />
            </Button>
          
        </div>
      </PopoverTrigger>
      <PopoverContent className={"w-96"}>
        <SearchResult result={bestResults} />
      </PopoverContent>
    </Popover>
  );
}

export default Search;
