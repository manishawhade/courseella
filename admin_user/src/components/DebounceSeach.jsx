import { useCallback, useEffect, useState } from "react";
import { TextField } from "@mui/material";

export default function DebounceSeach({ isDisable=false, searchCallback }) {
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      searchCallback(searchText);
    }, 1000); // 1seconds

    return () => {
      clearTimeout(debounceTimeout);
    };
  }, [searchText]);

  const handleSearchInputChange = useCallback((event) => {
    setSearchText(event.target.value);
  }, []);

  return (
    <div>
      <TextField
        disabled={isDisable}
        fullWidth
        label="Search..."
        variant="outlined"
        value={searchText}
        onChange={handleSearchInputChange}
      />
    </div>
  );
}
