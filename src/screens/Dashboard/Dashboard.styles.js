import IntroductionImage from "../../assets/background.jpg";

const styles = {
  container: {
    padding: "10px",
    height: "90vh",
    width: "80vw", 
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
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
};

export default styles;