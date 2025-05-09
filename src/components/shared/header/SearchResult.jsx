import { Badge } from "@/components/ui/badge";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useStock } from "@/context/StockContext";

function SearchResult({ result, onClose }) {
  const { stockSymbol, setStockSymbol } = useStock();
  
  const handleSelect = (currentValue) => {
    if (stockSymbol !== currentValue) setStockSymbol(currentValue);
    onClose();
  };
  return (
    <Command>
      <CommandList className={"custom-scrollbar"}>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup>
          {result.map((item) => (
            <CommandItem
              onSelect={handleSelect}
              onClick={handleSelect}
              key={item.symbol}
              value={item.symbol}
              >
              <span>{item.name}</span>
              <Badge variant={'outline'}
              className={'ml-auto text-xs font-medium'}
              >{item.timezone}</Badge>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}

export default SearchResult;
