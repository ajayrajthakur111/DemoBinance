import { useState } from "react";
import "./Accordian.css";
// eslint-disable-next-line react/prop-types
const AccordionItem = ({ title, content, id, isOpen, onToggle }) => {
  return (
    <div className={`accordion-item ${isOpen ? "open" : ""}`}>
      <div className="accordion-header" onClick={onToggle}>
        <span className="question-number">{id}</span>
        <span className="accordion-title">{title}</span>
        <span className={`toggle-icon ${isOpen ? "minus" : "plus"}`}>
          {isOpen ? "−" : "+"}
        </span>
      </div>
      {isOpen && <div className="accordion-content">{content}</div>}
    </div>
  );
};

const Accordion = () => {
  const accordionData = [
    {
      id: 1,
      title: "What is a cryptocurrency exchange?",
      content: (
        <div>
          <p>
            <span style={{ fontWeight: "bold", color: "#E4BB4F" }}>
              Cryptocurrency
            </span>{" "}
            &nbsp; exchanges are digital marketplaces that enable users to buy
            and sell cryptocurrencies like{" "}
            <span style={{ fontWeight: "bold", color: "#E4BB4F" }}>
              Bitcoin
            </span>
            ,{" "}
            <span style={{ fontWeight: "bold", color: "#E4BB4F" }}>
              Ethereum
            </span>
            , and{" "}
            <span style={{ fontWeight: "bold", color: "#E4BB4F" }}>Tether</span>
            . The Binance exchange is the largest crypto exchange by trade
            volume.
          </p>
        </div>
      ),
    },
    {
      id: 2,
      title: "What products does Binance provide?",
      content: (
        <div>
          <p>
            Binance is the world\&apos;s leading cryptocurrency exchange,
            catering to 235 million registered users in over 180 countries. With
            low fees and over 350 cryptocurrencies to trade, Binance is the
            preferred exchange to trade Bitcoin, Altcoins, and other virtual
            assets.
          </p>
          <p>
            With Binance users can:
            <ul>
              <li>
                Trade hundreds of cryptocurrencies on{" "}
                <span style={{ fontWeight: "bold", color: "#E4BB4F" }}>
                  Spot
                </span>
                ,{" "}
                <span style={{ fontWeight: "bold", color: "#E4BB4F" }}>
                  Margin
                </span>
                , and{" "}
                <span style={{ fontWeight: "bold", color: "#E4BB4F" }}>
                  Futures
                </span>{" "}
                markets.
              </li>
              <li>
                Buy and sell cryptocurrencies with{" "}
                <span style={{ fontWeight: "bold", color: "#E4BB4F" }}>
                  Binance P2P
                </span>
                .
              </li>
              <li>
                Earn interest on your crypto with{" "}
                <span style={{ fontWeight: "bold", color: "#E4BB4F" }}>
                  Binance Earn
                </span>
                .
              </li>
              <li>
                Buy or earn new tokens on{" "}
                <span style={{ fontWeight: "bold", color: "#E4BB4F" }}>
                  Binance Launchpad
                </span>
                .
              </li>
              <li>
                Trade, stake, and loan NFTs on{" "}
                <span style={{ fontWeight: "bold", color: "#E4BB4F" }}>
                  Binance NFT
                </span>{" "}
                marketplace.
              </li>
            </ul>
          </p>
        </div>
      ),
    },
    {
      id: 3,
      title: "How to buy Bitcoin and other cryptocurrencies on Binance",
      content: (
        <div>
          <p>
            There are several ways to buy cryptocurrencies on Binance. You can
            use a credit/debit card, cash balance, or Apple Pay/Google Pay to{" "}
            <span style={{ fontWeight: "bold", color: "#E4BB4F" }}>
              purchase crypto
            </span>{" "}
            on Binance. Before getting started, please make sure you&apos;ve
            completed{" "}
            <span style={{ fontWeight: "bold", color: "#E4BB4F" }}>
              Identity Verification
            </span>{" "}
            for your Binance account.
          </p>
        </div>
      ),
    },
    {
      id: 4,
      title: "How to track cryptocurrency prices",
      content: (
        <div>
          <p>
            The easiest way to track the latest cryptocurrency prices, trading
            volumes, trending altcoins, and market cap is the{" "}
            <span style={{ fontWeight: "bold", color: "#E4BB4F" }}>
              Binance Cryptocurrency Directory
            </span>
            . Click on the coins to know historical coin prices, 24-hour trading
            volume, and the price of cryptocurrencies like{" "}
            <span style={{ fontWeight: "bold", color: "#E4BB4F" }}>
              Bitcoin
            </span>
            ,{" "}
            <span style={{ fontWeight: "bold", color: "#E4BB4F" }}>
              Ethereum
            </span>
            , <span style={{ fontWeight: "bold", color: "#E4BB4F" }}>BNB</span>{" "}
            and others in real-time.
          </p>
        </div>
      ),
    },
    {
      id: 5,
      title: "How to trade cryptocurrencies on Binance",
      content: (
        <div>
          <p>
            You can trade hundreds of cryptocurrencies on Binance via the{" "}
            <span style={{ fontWeight: "bold", color: "#E4BB4F" }}>Spot</span>,{" "}
            <span style={{ fontWeight: "bold", color: "#E4BB4F" }}>Margin</span>
            ,{" "}
            <span style={{ fontWeight: "bold", color: "#E4BB4F" }}>
              Futures
            </span>
            , and{" "}
            <span style={{ fontWeight: "bold", color: "#E4BB4F" }}>
              Options
            </span>{" "}
            markets. To{" "}
            <span style={{ fontWeight: "bold", color: "#E4BB4F" }}>
              begin trading
            </span>
            , users need to register an account, complete identity verification,
            buy/deposit crypto, and start trading.
          </p>
        </div>
      ),
    },
    {
      id: 6,
      title: "How to earn from crypto on Binance",
      content: (
        <div>
          <p>
            Users can earn rewards on more than 180+ cryptocurrencies by using
            one of the products offered on{" "}
            <span style={{ fontWeight: "bold", color: "#E4BB4F" }}>
              Binance Earn
            </span>
            . Our platform offers dozens of digital assets like{" "}
            <span style={{ fontWeight: "bold", color: "#E4BB4F" }}>
              Bitcoin
            </span>
            ,{" "}
            <span style={{ fontWeight: "bold", color: "#E4BB4F" }}>
              Ethereum
            </span>
            , and stablecoins.
          </p>
        </div>
      ),
    },
  ];

  const [openItemId, setOpenItemId] = useState(1);

  const handleItemToggle = (itemId) => {
    setOpenItemId(itemId === openItemId ? null : itemId);
  };

  return (
    <div className="accordion-container">
      <h2 className="accordion-top-header">Frequently Asked Questions</h2>
      {accordionData.map((item) => (
        <AccordionItem
          key={item.id}
          id={item.id}
          title={item.title}
          content={item.content}
          isOpen={item.id === openItemId}
          onToggle={() => handleItemToggle(item.id)}
        />
      ))}
    </div>
  );
};
export default Accordion;
