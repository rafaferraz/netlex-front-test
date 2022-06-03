import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import backgroundImg from "../../assets/images/unsplash_m_7p45JfXQo.png";

export default function SignIn() {
  const navigate = useNavigate();

  const styles = {
    backgroundImage: {
      backgroundImage: `url(${backgroundImg})`,
      width: "100%",
      height: "100%",
      padding: "0px",
    },
    screen: {
      display: "flex",
      flexDirection: "column",
      justifyItems: "center",
    },
    modal: {
      margin: "auto",
      padding: "0 2% 2% 2%",
      position: "fixed",
      top: "28%",
      left: "42%",
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
      width: "120%",
      padding: "5% 0 5% 3%",
      borderBottom: "1px solid #EFEFEF",
    },
    label: {
      paddingTop: "5%",
      fontSize: "18px",
      fontWeight: "bold",
    },
    submit: {
      backgroundColor: "#003dd9",
      marginTop: "10%",
      padding: "4%",
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const data = new FormData(e.currentTarget);
    // console.log({
    //   email: data.get("email"),
    //   password: data.get("password"),
    // });
    navigate(`/metodo-1`);
  };

  return (
    <Box sx={styles.screen}>
      <Avatar
        variant="square"
        src={backgroundImg}
        sx={styles.backgroundImage}
      />
      <Box sx={styles.modal}>
        <Typography sx={styles.title}>Login</Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <Typography sx={styles.label}>E-mail</Typography>
          <TextField
            margin="normal"
            fullWidth
            id="email"
            label="Digite seu e-mail"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <Typography sx={styles.label}>Senha</Typography>
          <TextField
            margin="normal"
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={styles.submit}
          >
            Entrar
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
