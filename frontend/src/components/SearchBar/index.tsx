import React from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import styled from "@emotion/styled";
import InputAdornment from "@mui/material/InputAdornment";
import { useState } from "react";

export default function SearchBar() {
  const [input, setInput] = React.useState("");
  return (
    <div>
      <TextField
        InputProps={{
          sx: {
            borderRadius: 20,
            width: 379,
            height: 56,
          },
          startAdornment: (
            <InputAdornment position="start">
              <IconButton>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
        className="inputRounded"
        placeholder="Search"
        variant="outlined"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
}
