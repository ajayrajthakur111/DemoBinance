import Accordion from "../components/Accordian/Accordian";
import { CallToAction } from "../components/Action/Action";
import "./Home.css";

export const Home = () => {
  const cryptoData = [
    { symbol: "BTC", name: "Bitcoin", price: "$103,635.77", change: "-1.80%" },
    { symbol: "ETH", name: "Ethereum", price: "$3,276.25", change: "-1.29%" },
    { symbol: "BNB", name: "BNB", price: "$693.19", change: "+0.13%" },
    { symbol: "XRP", name: "XRP", price: "$3.16", change: "-0.43%" },
    { symbol: "SOL", name: "Solana", price: "$257.64", change: "+5.31%" },
  ];
  return (
    <>
      <div className="hero-container">
        <div className="hero-left">
          <div className="left-top-content">
            <div className="number-section">254,953,035</div>
            <div className="users-trust-section">
              USERS
              <br />
              TRUST US
            </div>
            <div className="email-btn">
              <input placeholder="Email/Phone number" />
              <button> Get Started</button>
            </div>
          </div>

          <div className="bottom-area">
            <div className="or-continue">
              <p>Or Continue With</p>
              <div className="social-icon">
                <div>
                  <svg
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="none">
                      <path
                        d="M7.537 8.917h-1.989V15h1.989c0-1.989 0-4.081 0-6.083m7.673 1.637a4.602 4.602 0 01.298-1.568h-.806a4.487 4.487 0 01-.646.426 5.171 5.171 0 01-1.124.192c-.864 0-1.477-.404-1.477-1.124 0-.562.41-1.008.94-1.176.479-.165.758-.407.758-.81 0-.687-.694-1.008-1.295-1.008-.96 0-1.897.524-2.393 1.287-.066.161.008.326.185.335l.813.01a3.261 3.261 0 00.258-1.364c0-1.264 1.391-1.706 2.454-1.706 1.22 0 1.855.417 2.183.904.328.487.544 1.279.407 2.22a4.12 4.12 0 01-.843 1.864v.038l2.393-1.495h.71a.175.175 0 00.056-.362m3.563-.303c-.584 0-.943.279-.943.776v5.646c0 .708.703 1.191 1.41 1.191h2.263v-6.725h-2.73"
                        fill="grey"
                      ></path>
                    </g>
                  </svg>
                </div>
                <div>
                  <svg
                    width="24"
                    height="24"
                    fill="grey"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 6a1 1 0 01-2 0c0-1.414-.141-2.693.121-3.374a1 1 0 011.681-.898c.868.371 1.917.659 3.162.56a2.09 2.09 0 01-.529.243c-.855.054-2.034.216-2.854.937C7 4.061 7 5 7 6zm5.801-.867a1 1 0 011.142-.283c1.543.183 2.805.477 2.853 1.625a1 1 0 11-2.124.021c0-.592-.223-.865-.645-.867.201-.036.392-.104.397-.354zM8.185 7.855c-.928 1.228-1.857 2.416-2.294 3.034a1 1 0 00-.561 1.333c.184.635 1.311 1.563 3.554 1.677a5.023 5.023 0 01-1.753-1.603a5.181 5.181 0 00.172-.426 3.501 3.501 0 00-.456-2.197zm9.05 2.842a.662.662 0 01-.137.329c.491 1.422.988 3.181.885 3.38a.845.845 0 01-.616.355c-1.568-.111-3.128-1.606-3.867-2.626a4.345 4.345 0 001.183-.743 1.532 1.532 0 01.654-.252 2.071 2.071 0 001.898-.351a.787.787 0 00.008-.139zm-1.686 3.036a2.72 2.72 0 01-2.323-1.34c-.021-.051-.001-.124.06-.137-.015-.373.073-.854.292-1.233-.159-.271-.69-.917-.587-1.087-.352-.013-1.007.267-1.642 1.505-1.008 1.942-1.724 2.903-1.941 3.414a1.012 1.012 0 00.07-.376z"></path>
                  </svg>
                </div>
              </div>
            </div>

            <div className="download-app">
              <p>Download App</p>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="grey"
                  height="24px"
                  width="24px"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M20.722 8.832v2.865a.9.9 0 01-.124.458.93.93 0 01-.79.348h-.421a3.11 3.11 0 01-1.281-.472c-.418-.19-.932-.314-1.51-.314s-1.093.125-1.511.314a3.1 3.1 0 01-1.282.473H7.034a.927.927 0 01-.791-.349.886.886 0 01-.124-.457V8.832a.93.93 0 01.124-.457.915.915 0 01.791-.348H8.28a3.436 3.436 0 011.119.426.616.616 0 00.313.092 5.962 5.962 0 003.18.031c.523-.026.853-.055 1.319-.177a.636.636 0 00.32-.11 3.452 3.452 0 011.119-.427h.419a.915.915 0 01.791.348.93.93 0 01.124.457m.988-.099v1.475h-.255a2.3 2.3 0 01-1.781-.907c-.312-.143-.804-.154-1.223-.04-.475.128-.936.516-1.003.994v.804a.688.688 0 00.203.04.413.413 0 00.178.064l.453.04a.227.227 0 01.129.238 5.613 5.613 0 00-.27 1.64c.315.655 1.311.595 1.65-.191a4.242 4.242 0 00.913-1.205 3.492 3.492 0 011.471-2.197.753.753 0 00.063-.523a.59.59 0 00-.356-.248zm-2.513 6.77a4.172 4.172 0 011.839.644l.52.043a1.211 1.211 0 00.401.981 2.064 2.064 0 01-1.66 1.126 2.517 2.517 0 01-1.521-.288 2.247 2.247 0 01-.365-.202 1.397 1.397 0 00-.236-.126.62.62 0 01-.066-.128c0-.201.119-.429.445-.531a.896.896 0 01.485-.125 1.506 1.506 0 00.878.201.561.561 0 01.366.103m-.09 3.157c0 .585-.168.947-.797.947h-.026c-.372 0-.704-.146-.908-.533l-.216-1.285a.542.542 0 00-.27-.154 2.247 2.247 0 01-.282-.01.705.705 0 01-.653.019.966.966 0 01-.424-.237c-.173-.207-.135-.577.077-.666l1.179-.516a1.1 1.1 0 00-.241-1.579l-.195.048a3.375 3.375 0 01-.422.057l-2.81.563a1.8 1.8 0 00-1.65.633 1.552 1.552 0 00.297 1.325 2.126 2.126 0 001.723.297.674.674 0 00.393.249h.551a.652.652 0 00.473.128m-.31 1.901h.057c.604.192 1.064-.089 1.075-.553v-.38c0-.094-.017-.174-.072-.254a.537.537 0 00-.55-.133.805.805 0 00-.345.278.277.277 0 00-.08.083c-.088.084-.12.222-.122.275m.752-4.901l-3.326-.567c.348-.942 1.318-2.107 2.595-2.768a.927.927 0 01.556-.229c.329 0 .55.158.55.431z"
                    fill="grey"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-right">
          <div className="crypto-container">
            <div className="crypto-header">
              <div className="header-title">
                <span>Popular</span>
                <span>New Listing</span>
              </div>
              <span className="view-all">
                View All 350+ Coins
                <span> {">"}</span>
              </span>
            </div>

            <div className="crypto-listing-content">
              {cryptoData.map((item) => (
                <div key={item.symbol} className="crypto-item">
                  <div className="crypto-item-symbol">
                    <span className="symbol">{item.symbol}</span>
                    <span>{item.name}</span>
                  </div>
                  <div>
                    <span className="crypto-price">{item.price}</span>
                    <span
                      className={`crypto-change  ${
                        item.change.includes("-") ? "red-color" : "green-color"
                      }`}
                    >
                      {" "}
                      {item.change}{" "}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="news-listing">
            <div className="news-title">
              <div>News</div>
              <span>
                View All News
                <span>{">"}</span>
              </span>
            </div>
            <p>
              {" "}
              Vitalik Buterin Predicts Release of Tornado Cash Team Members{" "}
            </p>

            <p> U.S. Stock Market Opens With Gains As AI Sector Rises</p>

            <p> Bitcoin Donation Made To Support Fund For Ross Ulbricht </p>
            <p>
              {" "}
              Ethereum Foundation&apos;s Role in Governance Reform Debated{" "}
            </p>
          </div>
        </div>
      </div>
      <Accordion />
      <CallToAction />
    </>
  );
};
