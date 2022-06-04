import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import backgroundImg from "../../assets/images/unsplash_m_7p45JfXQo.png";

export default function Erro() {
  const styles = {
    screen: {
      backgroundImage: `url(${backgroundImg})`,
      height: "100%",
      backgroundSize: "cover",
      display: "flex",
      flexDirection: "column",
      justifyItems: "center",
      alignItems: "center",
    },
    container: {
      position: "fixed",
      top: "30%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      width: "40%",
      height: "40%",
      color: "#003dd9",
      background: "white",
      borderRadius: "15px",
      boxShadow: "0 0 20px rgba(0,0,0,0.3)",
    },
    title: {
      fontSize: "40px",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
    },
    subTitle: {
      fontSize: "70px",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
    },
  };

  return (
    <Box style={styles.screen}>
      <Box sx={styles.container}>
        <Typography sx={styles.title}>Error Not Found</Typography>
        <Typography sx={styles.subTitle}>404</Typography>
      </Box>
    </Box>
  );
}
