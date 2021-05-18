import { getPatientsAction } from "../actions/patientsAction";
import axios from "axios";
export const getPatients = () => {
  return (dispatch) => {
    axios
      .get("api path here")
      .then(({ data }) => {
        dispatch(getPatientsAction(data.country));
      })
      .catch((err) => {
        if (err.response) {
        }
      });
  };
};
