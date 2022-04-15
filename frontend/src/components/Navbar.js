import React from "react";
import Select from "react-select";
import { Typography, Grid } from "@mui/material";


export default function Navbar({
  userLang,
  setUserLang,
  userTheme,
  setUserTheme,
  fontSize,
  setFontSize,
}) {
  const languages = [
    { value: "c", label: "C" },
    { value: "cpp", label: "C++" },
    { value: "python", label: "Python" },
    { value: "java", label: "Java" },
  ];
  const themes = [
    { value: "vs-dark", label: "Dark" },
    { value: "light", label: "Light" },
  ];

  return (
    <>
      <Grid
        display="flex"
        alignItems="center"
        style={{
          paddingLeft: "20px",
          height: "10vh",
          textAlign: "center",
          color: "#afec3f",
          backgroundColor: "#474747",
          gap: "20px",
        }}
      >
        <Typography varinat="h2">Code Compiler</Typography>
        <Select
          options={languages}
          value={userLang}
          onChange={(e) => setUserLang(e.value)}
          placeholder={userLang}
        />
        <Select
          options={themes}
          value={userTheme}
          onChange={(e) => setUserTheme(e.value)}
          placeholder={userTheme}
        />
        <label>Font Size</label>
        <input
          type="range"
          min="18"
          max="30"
          value={fontSize}
          step="2"
          onChange={(e) => {
            setFontSize(e.target.value);
          }}
        />
      </Grid>
    </>
  );
}
