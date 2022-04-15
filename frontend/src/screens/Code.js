import { useState } from "react";
import "./Code.css";
import Editor from "@monaco-editor/react";
import { Grid, Typography, Button } from "@mui/material";
import Axios from "axios";
import Loading from "../assets/loading.png";
import Navbar from "../components/Navbar";

export default function Code() {
  const [userCode, setUserCode] = useState(``);
  const [userLang, setUserLang] = useState("python");
  const [userTheme, setUserTheme] = useState("vs-dark");
  const [fontSize, setFontSize] = useState(20);
  const [userInput, setUserInput] = useState("");
  const [userOutput, setUserOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const options = {
    fontSize: fontSize,
  };

  function compile() {
    setLoading(true);
    if (userCode === ``) {
      return;
    }
    Axios.post(`http://localhost:8000/compile`, {
      code: userCode,
      language: userLang,
      input: userInput,
    })
      .then((res) => {
        setUserOutput(res.data.output);
      })
      .then(() => {
        setLoading(false);
      });
  }
  function clearOutput() {
    setUserOutput("");
  }
  return (
    <>

    <Navbar
        userLang={userLang} setUserLang={setUserLang}
        userTheme={userTheme} setUserTheme={setUserTheme}
        fontSize={fontSize} setFontSize={setFontSize}
      />
      <Grid
        container
        display="flex"
        flexDirection="row"
        justifyContent="center"
        aligItems="center"
        style={{ width: "100vw", height: "90vh" }}
      >
        <Grid item display="flex" style={{ width: "50vw", height: "90vh" }}>
          <Editor
            options={options}
            width="50vw"
            theme={userTheme}
            language={userLang}
            defaultLanguage="python"
            defaultValue="# Enter your code here"
            onChange={(value) => {
              setUserCode(value);
            }}
          />
          <Button
            variant="contained"
            className="run-btn"
            onClick={() => compile()}
          >
            Run
          </Button>
        </Grid>
        <Grid
          item
          display="flex"
          flexDirection="column"
          style={{
            width: "50vw",
            height: "90vh",
            backgroundColor: "#242424",
            borderLeft: "3px solid #1f65e6",
          }}
        >
          <Typography variant="h4">Input</Typography>
          <div style={{ flex: "50%" }}>
            <textarea
              id="code-inp"
              style={{ fontSize: "16px" }}
              onChange={(e) => setUserInput(e.target.value)}
            ></textarea>
          </div>
          <Typography variant="h4">Output</Typography>
          {loading ? (
            <Grid
              item
              style={{
                backgroundColor: "#242424",
                overflowY: "auto",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img width="200px" src={Loading} alt="Loading..." />
            </Grid>
          ) : (
            <Grid item className="output-box">
              <pre>{userOutput}</pre>
              <Button
                onClick={() => {
                  clearOutput();
                }}
                className="clear-btn"
                variant="contained"
              >
                Clear
              </Button>
            </Grid>
          )}
        </Grid>
      </Grid>
    </>
  );
}
