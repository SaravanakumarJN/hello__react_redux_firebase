import { useSelector } from "react-redux";
import { Route, useHistory } from "react-router-dom";
import { isLoaded, isEmpty } from "react-redux-firebase";

const PrivateRoute = ({ component, path, exact = true, redirect = "/" }) => {
  const auth = useSelector((state) => state.firebase.auth);
  const history = useHistory();

  if (!isLoaded(auth) || isEmpty(auth)) {
    history.push(redirect);
  }

  return (
    <Route path={path} exact={exact}>
      {component}
    </Route>
  );
};

export { PrivateRoute };
