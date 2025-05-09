import React, { useState } from "react";
import { Button } from "../../ui/button";
import { Search as SIcon, X } from "lucide-react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import SearchResult from "./SearchResult"; 
import { fetchSearch } from "@/api/fetchSearch.api";

function Search() {
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);
  const [bestResults, setBestResults] = useState([]);

  const clear = () => {
    setInput("");
    setBestResults([]);
    setOpen(false);
  };
  const updateBestMatches = async () => {
    if (!input || input.length == 0) return;
    try {
      const {data} = await fetchSearch(input);
      setBestResults(data.stock);
    } catch (error) {
      console.log({ error });
    } finally {
      setOpen(true);
    }
  };
  const handleInputValue = async (e) => setInput(e.target.value);
  return (
    <Popover open={open}>
      <PopoverTrigger asChild>
        <div className="flex items-center my-4 border-2 rounded-lg relative z-50 w-96 bg-background border-primary">
          <input
            type="text"
            value={input}
            placeholder="Search stock...."
            className="w-full px-4 py-2 h-8 focus:outline-none rounded-md"
            onChange={handleInputValue}
            onKeyPress={(e) => {
              if (e.key == "Enter") {
                updateBestMatches();
              }
            }}
          />
          <Button
            variant={"ghost"}
            onClick={clear}
            className={!open && "hidden"}
          >
            <X size={18} />
          </Button>

          <Button onClick={updateBestMatches}>
            <SIcon size={18} />
          </Button>
        </div>
      </PopoverTrigger>
      <PopoverContent className={"w-96"}>
        <SearchResult result={bestResults} onClose={clear} />
      </PopoverContent>
    </Popover>
  );
}

export default Search;
