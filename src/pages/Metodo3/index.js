import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import backgroundImg from "../../assets/images/unsplash_m_7p45JfXQo.png";

export default function SignInSide() {
  const navigate = useNavigate();
  const [showMessage, setShowMessage] = useState(false);
  const [count, setCount] = useState("");
  const [minLength, setMinLength] = useState("");
  const results = [];

  const styles = {
    page: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "flex-start",
    },
    backgroundImage: {
      backgroundImage: `url(${backgroundImg})`,
      width: "100%",
      height: "100%",
      padding: "0px",
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
    formsRow: {
      marginBottom: "5px",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    formsRowItem: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      width: "45%",
    },
    label: {
      fontSize: "20px",
      fontWeight: "bold",
    },
    input: {
      fontSize: "10px",
      margin: "4% 0",
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
      display: "flex",
      flexDirection: "row",
      gap: "4px",
      fontSize: "20px",
      margin: "0.5% 0",
    },
    count: {
      fontWeight: "bold",
    },
  };

  const handleClickMetodo1 = (e) => {
    e.preventDefault();
    navigate(`/metodo-1`);
  };

  const handleClickMetodo2 = (e) => {
    e.preventDefault();
    navigate(`/metodo-2`);
  };

  const handleShowMessage = (e) => {
    e.preventDefault();
    setShowMessage(true);
  };

  return (
    <Box sx={styles.page}>
      <Avatar
        variant="square"
        src={backgroundImg}
        sx={styles.backgroundImage}
      />
      <Box sx={styles.leftBar}>
        <Button
          sx={[styles.items, styles.noSelected]}
          onClick={(e) => handleClickMetodo1(e)}
        >
          Método 1
        </Button>
        <Button
          sx={[styles.items, styles.noSelected]}
          onClick={(e) => handleClickMetodo2(e)}
        >
          Método 2
        </Button>
        <Button sx={[styles.items, styles.selected]}>Método 3</Button>
      </Box>
      <Box sx={styles.board}>
        <Typography sx={styles.title}>Método 3</Typography>
        <Box sx={styles.forms}>
          <Box sx={styles.formsRow}>
            <Box sx={styles.formsRowItem}>
              <Typography sx={styles.label}>Count</Typography>
              <TextField
                sx={styles.input}
                fullWidth
                type={"number"}
                name="count"
                value={count}
                onChange={(e) => {
                  setCount(e.target.value);
                }}
              />
            </Box>
            <Box sx={styles.formsRowItem}>
              <Typography sx={styles.label}>Minimum Word Length</Typography>
              <TextField
                sx={styles.input}
                fullWidth
                type={"number"}
                name="minimumWordLength"
                value={minLength}
                onChange={(e) => {
                  setMinLength(e.target.value);
                }}
              />
            </Box>
          </Box>
          <Button
            type="submit"
            sx={styles.submit}
            onClick={(e) => handleShowMessage(e)}
          >
            Verificar
          </Button>
          {showMessage
            ? results.map((results) => (
                <Box sx={styles.text}>
                  <Typography>{`${results.word} - `}</Typography>
                  <Typography
                    sx={styles.count}
                  >{`${results.count}`}</Typography>
                  <Typography>{`ocorrências no texto.`}</Typography>
                </Box>
              ))
            : null}
        </Box>
      </Box>
    </Box>
  );
}
