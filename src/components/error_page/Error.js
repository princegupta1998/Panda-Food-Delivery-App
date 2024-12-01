import { useRouteError } from "react-router-dom";
import "./error.css";
import Errorpage from "../../assets/images/Error.webp";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div id="error">
      <img src={Errorpage} alt="Error" loading="lazy" />
      <h1>Error{err.status}</h1>
      <h3>{err.statusText}</h3>
    </div>
  );
};

export default Error;
