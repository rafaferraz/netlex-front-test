import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import backgroundImg from "../../assets/images/unsplash_m_7p45JfXQo.png";

export default function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const styles = {
    screen: {
      backgroundImage: `url(${backgroundImg})`,
      height: "100%",
      backgroundSize: "cover",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      justifyItems: "center",
    },
    modal: {
      margin: "auto",
      padding: "0 2% 2% 2%",
      position: "fixed",
      width: "30%",
      top: "25%",
      zIndex: 999999,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: "white",
      borderRadius: "2%",
    },
    title: {
      fontSize: "20px",
      fontWeight: "bold",
      textAlign: "left",
      width: "115%",
      padding: "5% 0 5% 5%",
      borderBottom: "1px solid #EFEFEF",
      marginBottom: "4%",
    },
    forms: {
      width: "95%",
    },
    label: {
      paddingTop: "5%",
      fontSize: "18px",
      fontWeight: "bold",
    },
    input: {
      width: "100%",
    },
    submit: {
      fontSize: "20px",
      fontWeight: "bold",
      width: "100%",
      height: "50px",
      textTransform: "none",
      backgroundColor: "#003dd9",
      marginTop: "10%",
      padding: "4%",
    },
    alertBox: {
      position: "absolute",
      backgroundColor: "#011c28",
      borderRadius: "7px",
      top: "88%",
      left: "3%",
      width: "10%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    toast: {
      backgroundColor: "transparent",
      color: "white",
      fontSize: "20px",
    },
    closeAlert: {
      marginRight: "5%",
      color: "white",
      cursor: "pointer",
      width: "30px",
      height: "30px",
    },
  };

  async function getData(data) {
    const response = await fetch("/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const json = await response.json();
    if (json.success) {
      navigate(`/metodo-1`);
    } else {
      setShowAlert(true);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };

    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailRegex.test(email) && password.length > 0) {
      getData(data);
    } else {
      setShowAlert(true);
    }

    navigate(`/metodo-1`); // Used here just to test the route to metodo-1 page. If the API is working, this line will be removed.
  };

  const handleCloseAlert = (e) => {
    e.preventDefault();
    setShowAlert(false);
  };

  return (
    <Box sx={styles.screen}>
      <Box sx={styles.modal}>
        <Typography sx={styles.title}>Login</Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={styles.forms}
        >
          <Typography sx={styles.label}>E-mail</Typography>
          <TextField
            sx={styles.input}
            margin="normal"
            fullWidth
            id="email"
            label="Digite seu e-mail"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(e) => setEmail(e.target.value)}
          />
          <Typography sx={styles.label}>Senha</Typography>
          <TextField
            sx={styles.input}
            margin="normal"
            fullWidth
            name="password"
            label="Digite sua senha"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={styles.submit}
            onClick={(e) => handleSubmit(e)}
          >
            Entrar
          </Button>
        </Box>
      </Box>
      {showAlert ? (
        <Box sx={styles.alertBox}>
          <Alert sx={styles.toast} icon={false}>
            Toast falha
          </Alert>
          <CloseRoundedIcon
            sx={styles.closeAlert}
            onClick={(e) => handleCloseAlert(e)}
          ></CloseRoundedIcon>
        </Box>
      ) : null}
    </Box>
  );
}
