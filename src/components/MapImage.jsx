import petaImage from "../assets/peta.jpeg";
import icon from "../assets/icon-start.png";

const MapImage = () => {
  const divStyle = {
    position: "relative",
    width: "100%",
    height: "100vh", // Sesuaikan tinggi sesuai kebutuhan
    // backgroundImage: `url(${petaImage})`,
    backgroundRepeat: "no-repeat",
    // backgroundAttachment: "fixed",
    // backgroundPosition: "center",
    backgroundSize: "cover",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const iconStyle = {
    position: "absolute",
    width: "30px",
    height: "30px",
    top: "62.90%", // Sesuaikan ini untuk posisi vertikal
    left: "29.40%", // Sesuaikan ini untuk posisi horizontal
    transform: "translate(-30%, -50%)", // Menjaga ikon tetap di tengah
  };

  return (
    <>
      <img src={petaImage} alt="Peta" style={divStyle} />
      <img src={icon} style={iconStyle} alt="Icon" />
    </>
  );
};

export default MapImage;
