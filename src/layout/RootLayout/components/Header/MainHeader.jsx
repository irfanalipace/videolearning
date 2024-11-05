import { useSelector } from "react-redux";
import NewHeader from "./NewHeader"; 
import AuthenticatedHeader from "./AuthenticatedHeader"; 

const MainHeader = () => {
    const isAuthenticated = localStorage.getItem("isAuthenticated"); 
  
  return isAuthenticated ? <AuthenticatedHeader /> : <NewHeader />;
};

export default MainHeader;
