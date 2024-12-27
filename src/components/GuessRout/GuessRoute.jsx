import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../Context/User.context";
export default function GuessRoute({children}) {
  
let {token}  = useContext(UserContext)

  if(token) {
   return <Navigate to="/" />;
   } else {
    return children;
   }
}
