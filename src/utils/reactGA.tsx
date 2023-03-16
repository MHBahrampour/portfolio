import ReactGA from "react-ga";

export const initGA = (trackingID: string) => {
  ReactGA.initialize(trackingID);
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};
