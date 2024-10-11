import { delay } from "../lib/utilities/delay";

const existingUsernames = ["johndoe", "janedoe"];

export const checkUsernameExists = async (username: string) => {
  delay(1000);
  return existingUsernames.includes(username);
};
