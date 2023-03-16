import ReactGA from "react-ga4";

export const initGA = (trackingID: string) => {
  ReactGA.initialize(trackingID, { testMode: true });
};

export const logPageView = () => {
  ReactGA.set({
    hitType: "pageview",
    page: window.location.pathname,
    title: window.location.pathname,
  });
};