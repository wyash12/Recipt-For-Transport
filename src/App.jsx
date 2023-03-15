import Logo from "./Truck-Logo.jpg";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import SendToMobileIcon from "@mui/icons-material/SendToMobile";
import BusinessIcon from "@mui/icons-material/Business";
import "./recipt.css";
import Table from "./Table";



function App() {

  return (
    <>
      <div className="header">
        <img className="image" src={Logo} alt=" " style={{ width: "200px" }} />
        <div className="v1"></div>

        <div className="CompanyName">SAPANA TRANSPORT</div>
        <div className="ExtraInfo">
          (Transport Contractor &amp; Lorry Owners)
        </div>

        <div className="contact">
          <ContactPhoneIcon />
        </div>
        <div className="contactNumber">22986,222886 (Islamapur)</div>

        <div className="contactM">
          <SendToMobileIcon />
        </div>
        <div className="contactNumberM">
          9822886429(Muzaffer), 9822006429(Samir)
        </div>
        <div className="AddressIcon">
          <BusinessIcon />
        </div>
        <div className="Address">213-A,Vakhar Bagh, Sangli - 416416</div>
      </div>
      <hr className="hr1" />
      <div className="form1">
        <form action="get">
          <div className="ownerDet">
            <label className="FormLabel" htmlFor="OName">
              Owner's Name:{" "}
            </label>
            <input className="InputL"></input>
            <label className="FormLabel" htmlFor="OName">
              Driver's Name:{" "}
            </label>
            <input className="InputL"></input>
          </div>
          <div className="vehicalDet">
            <label className="FormLabel" htmlFor="OName">
              Lorry Number:{" "}
            </label>
            <input className="InputL1"></input>
            <label className="FormLabel" htmlFor="OName">
              Date:{" "}
            </label>
            <input className="InputL1"></input>
            <label className="FormLabel" htmlFor="OName">
              Licence Number:{" "}
            </label>
            <input className="InputL1"></input>
          </div>
        </form>
      </div>

      <div className="table">
      <Table/>
      </div>

    </>
  );
}


export default App;
