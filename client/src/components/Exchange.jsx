import React from "react";

const Exchange = () => (
  <div style={{ padding: "20px" }}>
    <h1 className="text-3xl sm:text-5xl text-white align-middle text-gradient py-1">
      Exchange Rate Updates
    </h1>
    <br />
    {/* <iframe
      title="Market Real-Time Price"
      src="https://www.widgets.investing.com/top-cryptocurrencies?theme=darkTheme&roundedCorners=true"
      width="100%"
      height="100%"
      allowTransparency="true"
      className="rounded-md h-[28rem]"
    /> */}
    <br />
    <iframe
      title="Exchange Rate Real-Time Updates"
      // eslint-disable-next-line max-len
      src="https://www.widgets.investing.com/live-currency-cross-rates?theme=darkTheme&pairs=9289,9342,1493,1073188,9424,1529,1551,9506,1589,1646,1760,1822,9658,1847,9692,959204,1199872,9729,1865,9730,9731,9733,941149,941150,9734,9735,9736,9755,9738,9739,1869,9740,1870,1175890,9741,9742,9743,9744,9745,9746,9747,9748,9737,1873,1175853,9749,9750,1874,9751,1875,941148,9752,9753,9754,1089820,9759,1900,1920,9805,1961,1976,1985,9931,9956,9988,10038,10089,2020,2035,2054,10260,2074,160,10365,1168868,2242"
      width="100%"
      height="100%"
      allowtransparency="true"
      className="rounded-md h-screen"
    />
    <div
      className="poweredBy"
      style={{ fontFamily: "Arial, Helvetica, sans-serif", marginTop: "10px", color: "white" }}
    >
      Powered by{" "}
      <a
        href="https://www.investing.com?utm_source=WMT&amp;utm_medium=referral&amp;utm_campaign=LIVE_CURRENCY_X_RATES&amp;utm_content=Footer%20Link"
        target="_blank"
        rel="nofollow noreferrer"
      >
        Investing.com
      </a>
    </div>
  </div>
);

export default Exchange;
