import "../style/base.css";

export function reportWebVitals({ id, name, label, value }) {
  ga("send", "event", {
    eventCategory:
      label === "web-vital" ? "Web Vitals" : "Next.js custom metric",
    eventAction: name,
    eventValue: Math.round(name === "CLS" ? value * 1000 : value), // values must be integers
    eventLabel: id, // id unique to current page load
    nonInteraction: true, // avoids affecting bounce rate.
  });
}

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
