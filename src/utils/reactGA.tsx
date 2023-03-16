import ReactGA from "react-ga4";

export const initGA = (trackingID: string) => {
  ReactGA.initialize(trackingID);
};

export const logPageView = () => {
  ReactGA.send({
    hitType: "pageview",
    page: window.location.pathname,
    title: window.location.pathname,
  });
};
