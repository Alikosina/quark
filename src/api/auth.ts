import axios from "axios";
import { SignInModel } from "../models/sigInModel";

export const signIn = async (params: SignInModel) => {
  const data = await axios.post("some-url", params);

  return data;
};
