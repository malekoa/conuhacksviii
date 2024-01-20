import IntroductionImage from "../../assets/background.jpg";
import { Colors } from "../../styles/theme";

const styles = {
  container: {
    padding: "10px",
    height: "90vh",
    width: "80vw", 
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderRadius: "15px",
    boxShadow: Colors.shadow,
  },
  backgroundImg: {
    backgroundImage: `url(${IntroductionImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: -1,
  },
  card: {
    borderRadius: "15px",
    height: "150px",
    boxShadow: Colors.shadow,
  }
};

export default styles;