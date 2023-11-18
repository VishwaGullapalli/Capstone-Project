import React from "react";

const Market = () => (
  <div style={{ padding: "20px" }}>
    <h1 className="text-3xl sm:text-5xl text-white align-middle text-gradient py-1">
      Market Price Updates
    </h1>
    <br />
    <iframe
      title="Market Real-Time Price"
      src="https://www.widgets.investing.com/top-cryptocurrencies?theme=darkTheme&roundedCorners=true"
      width="100%"
      height="100%"
      allowTransparency="true"
      className="rounded-md h-[28rem]"
    />
    <div
      className="poweredBy"
      style={{ fontFamily: "Arial, Helvetica, sans-serif", marginTop: "10px", color: "white" }}
    >
      Powered by{" "}
      <a
        href="https://www.investing.com?utm_source=WMT&utm_medium=referral&utm_campaign=TOP_CRYPTOCURRENCIES&utm_content=Footer%20Link"
        target="_blank"
        rel="nofollow noreferrer"
      >
        Investing.com
      </a>
    </div>
  </div>
);

export default Market;
