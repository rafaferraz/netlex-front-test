import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import backgroundImg from "../../assets/images/unsplash_m_7p45JfXQo.png";

export default function SignInSide() {
  const navigate = useNavigate();
  const [showMessage, setShowMessage] = useState(false);
  const [word, setWord] = useState("");
  const [sentences, setSentences] = useState([]);
  const results = [
    {
      id: 1,
      before: "The point of using",
      word: "Lorem",
      after:
        "Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    },
    {
      id: 2,
      before: "Contrary to popular belief,",
      word: "Lorem",
      after: "Ipsum is not simply random text.",
    },
  ];
  const number = results.length;

  const styles = {
    page: {
      backgroundImage: `url(${backgroundImg})`,
      height: "100%",
      backgroundSize: "cover",
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "flex-start",
    },
    leftBar: {
      padding: "3% 0.5%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
      position: "fixed",
      width: "10%",
    },
    items: {
      fontSize: "18px",
      textTransform: "none",
      textAlign: "center",
      width: "100%",
      borderRadius: "10px",
      padding: "15px",
      margin: "5% 1%",
      "&:hover": {
        cursor: "pointer",
      },
    },
    selected: {
      color: "black",
      backgroundColor: "white",
      "&:hover": {
        backgroundColor: "#dbdbdb",
      },
    },
    noSelected: {
      color: "white",
      backgroundColor: "transparent",
      "&:hover": {
        backgroundColor: "#08026e",
      },
    },
    board: {
      position: "fixed",
      left: "10%",
      width: "90%",
      height: "100%",
      backgroundColor: "white",
      padding: "3% 4%",
    },
    title: {
      fontSize: "40px",
      fontWeight: "bold",
      padding: "0",
    },
    forms: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      padding: "3% 10% 3% 3%",
    },
    label: {
      fontSize: "20px",
      fontWeight: "bold",
    },
    input: {
      fontSize: "10px",
      margin: "2% 0",
    },
    submit: {
      fontSize: "20px",
      fontWeight: "bold",
      textTransform: "none",
      backgroundColor: "#003dd9",
      color: "white",
      width: "10%",
      marginBottom: "1.5%",
      "&:hover": {
        backgroundColor: "#003dd9",
      },
    },
    text: {
      marginTop: "2%",
      display: "flex",
      flexDirection: "row",
      gap: "4px",
      fontSize: "20px",
      margin: "0.5% 0",
    },
    word: {
      fontWeight: "bold",
    },
    textResults: {
      margin: "0.5% 0",
      display: "flex",
      flexDirection: "row",
      gap: "4px",
      fontSize: "20px",
      color: "gray",
    },
  };

  const handleClickMetodo1 = (e) => {
    e.preventDefault();
    navigate(`/metodo-1`);
  };

  const handleClickMetodo3 = (e) => {
    e.preventDefault();
    navigate(`/metodo-3`);
  };

  async function getWordSentences(e) {
    e.preventDefault();
    const response = await fetch("documents/word-sentences", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        word: word,
      }),
    });
    const data = await response.json();
    setSentences(data.sentences);
  }

  const handleShowMessage = (e) => {
    e.preventDefault();
    getWordSentences(e);
    setShowMessage(true);
  };

  return (
    <Box sx={styles.page}>
      <Box sx={styles.leftBar}>
        <Button
          sx={[styles.items, styles.noSelected]}
          onClick={(e) => handleClickMetodo1(e)}
        >
          Método 1
        </Button>
        <Button sx={[styles.items, styles.selected]}>Método 2</Button>
        <Button
          sx={[styles.items, styles.noSelected]}
          onClick={(e) => handleClickMetodo3(e)}
        >
          Método 3
        </Button>
      </Box>
      <Box sx={styles.board}>
        <Typography sx={styles.title}>Método 2</Typography>
        <Box sx={styles.forms}>
          <Typography sx={styles.label}>Digite uma palavra</Typography>
          <TextField
            sx={styles.input}
            fullWidth
            name="word"
            value={word}
            onChange={(e) => {
              if (e.target.value.length === 0) {
                setShowMessage("");
              }
              setWord(e.target.value);
            }}
          />
          <Button
            type="submit"
            sx={styles.submit}
            onClick={(e) => {
              handleShowMessage(e);
            }}
          >
            Verificar
          </Button>
          {showMessage && word !== "" ? (
            <Box sx={styles.text}>
              <Typography>A palavra</Typography>
              <Typography sx={styles.word}>{`${word}`}</Typography>
              <Typography>foi encontrada em</Typography>
              <Typography>{`${number}`}</Typography>
              <Typography>frases no texto.</Typography>
            </Box>
          ) : null}
          {showMessage
            ? results.map((results) => (
                <Box sx={styles.textResults}>
                  <Typography>{`${results.id}. ${results.before}`}</Typography>
                  <Typography sx={styles.word}>{`${results.word}`}</Typography>
                  <Typography>{`${results.after}`}</Typography>
                </Box>
              ))
            : null}
        </Box>
      </Box>
    </Box>
  );
}
