import { NAVIGATE } from "../constant/constant";

export const NavigateAction = (navigate: (path: string) => void) => ({
  type: NAVIGATE.NAVIGATE_TO,
  payload: navigate,
});
