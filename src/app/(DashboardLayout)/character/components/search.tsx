"use client";

import { InputAdornment, TextField } from "@mui/material";
import { IconSearch } from "@tabler/icons-react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <TextField
      id="search"
      label="Search"
      fullWidth
      sx={{ mx: 2 }}
      // size="small"
      placeholder={placeholder}
      variant="outlined"
      onChange={(e) => {
        handleSearch(e.target.value);
      }}
      defaultValue={searchParams.get("query")?.toString()}
      slotProps={{
        input: {
          endAdornment: (
            <InputAdornment position="end">
              <IconSearch />
            </InputAdornment>
          ),
        },
      }}
    />
  );
}
