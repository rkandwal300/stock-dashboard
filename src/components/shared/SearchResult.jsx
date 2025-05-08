import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

function SearchResult({ result }) {
  return (
    <Command>
      <CommandList className={"custom-scrollbar"}>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup>
          {result.map((item) => (
            <CommandItem key={item.symbol} value={item.symbol}>
              <span>{item.symbol}</span>
              <span>{item.description}</span>
            </CommandItem>
          ))}
          {result.map((item) => (
            <CommandItem key={item.symbol} value={item.symbol}>
              <span>{item.symbol}</span>
              <span>{item.description}</span>
            </CommandItem>
          ))}
          {result.map((item) => (
            <CommandItem key={item.symbol} value={item.symbol}>
              <span>{item.symbol}</span>
              <span>{item.description}</span>
            </CommandItem>
          ))}
          {result.map((item) => (
            <CommandItem key={item.symbol} value={item.symbol}>
              <span>{item.symbol}</span>
              <span>{item.description}</span>
            </CommandItem>
          ))}
          {result.map((item) => (
            <CommandItem key={item.symbol} value={item.symbol}>
              <span>{item.symbol}</span>
              <span>{item.description}</span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}

export default SearchResult;
