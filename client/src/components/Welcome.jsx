import React, { useContext, useState } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { BsInfoCircle } from "react-icons/bs";
import axios from "axios";

import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from "../utils/shortenAddress";
import { Loader } from ".";
// import dummyData from "../utils/dummyData";
import { getDummyData, setDummyData } from "../utils/dummyData";

const companyCommonStyles =
  "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);

const Welcome = () => {
  const {
    currentAccount,
    connectWallet,
    handleChange,
    sendTransaction,
    formData,
    isLoading,
  } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;

    e.preventDefault();

    if (!addressTo || !amount || !keyword || !message) return;

    sendTransaction();
  };

  const handleBankSubmit = async (e) => {
    const {
      "Sender Card Number": SenderCardNumber,
      "Sender CVV/CVC": SenderCVVCVC,
      "Receiver Card Number": ReceiverCardNumber,
      "Transfer Amount": TransferAmount,
    } = formData;

    e.preventDefault();

    const dataToSend = {
      inputData: [
        parseFloat(SenderCardNumber),
        parseInt(SenderCVVCVC, 10),
        parseFloat(ReceiverCardNumber),
        parseFloat(TransferAmount),
      ],
    };

    // Send data to the server using the specified format
    // Replace this with your actual server request logic
    console.log("Data to send:", dataToSend);

    try {
      const response = await axios.post(
        "http://localhost:3000/predict",
        // `${import.meta.env.VITE_BACKEND_URI}`,
        dataToSend
      );
      // const prediction = response.data.rfPrediction && response.data.nnPrediction;
      console.log("RF Prediction:", response.data.rfPrediction);
      console.log("NN Prediction:", response.data.nnPrediction);
      console.log("Current Time:", response.data.current_time);
      console.log("Message:", response.data.outString);
      const newData = {
        id:
          getDummyData().length > 0
            ? getDummyData()[getDummyData().length - 1].id + 1
            : 1,
        url: "https://media.tenor.com/OATh5yeUlacAAAAC/shanks-one-piece.gif",
        message: `${response.data.outString}`,
        timestamp: `${response.data.current_time}`,
        addressFrom: `${SenderCardNumber}`,
        amount: `${TransferAmount}`,
        addressTo: `${ReceiverCardNumber}`,
      };
      console.log(newData);
      console.log(getDummyData());
      // Add the new data to the existing array
      const updatedData = [...getDummyData(), newData];
      // Update the dummyData
      setDummyData(updatedData);
      console.log(getDummyData());
    } catch (error) {
      console.error("Error predicting:", error.message);
    }
  };

  const [isEthereumVisible, setIsEthereumVisible] = useState(true);

  const handleButtonClick = (isEthereum) => {
    setIsEthereumVisible(isEthereum);
  };

  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
          <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
            Fraud Detection using Machine Learning & <br /> Transactions using
            Blockchain
          </h1>
          <p className="text-left mt-5 text-2xl text-white font-light md:w-9/12 w-11/12 sm:text-base">
            Capstone Id : 20230240
          </p>
          {!currentAccount && (
            <button
              type="button"
              onClick={connectWallet}
              className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
            >
              <AiFillPlayCircle className="text-white mr-2" />
              <p className="text-white text-base font-semibold">
                Connect Wallet
              </p>
            </button>
          )}

          <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
            <div className={`rounded-tl-2xl ${companyCommonStyles}`}>
              Reliability
            </div>
            <div className={companyCommonStyles}>Security</div>
            <div className={`sm:rounded-tr-2xl ${companyCommonStyles}`}>
              Ethereum
            </div>
            <div className={`sm:rounded-bl-2xl ${companyCommonStyles}`}>
              Random Forest
            </div>
            <div className={companyCommonStyles}>Low Fees</div>
            <div className={`rounded-br-2xl ${companyCommonStyles}`}>
              Blockchain
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
          <div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card .white-glassmorphism ">
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                  <RiMoneyDollarCircleFill fontSize={21} color="#fff" />
                </div>
                <BsInfoCircle fontSize={17} color="#fff" />
              </div>
              <div>
                <p className="text-white font-light text-sm">
                  {shortenAddress(currentAccount)}
                </p>
                <p className="text-white font-semibold text-lg mt-1">
                  Titan X Metamask wallet
                </p>
              </div>
            </div>
          </div>
          <div className="container flex flex-col items-center justify-evenly">
            <div className="flex flex-row space-x-4">
              <button
                type="button"
                onClick={() => handleButtonClick(true)}
                className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
              >
                Ethereum
              </button>
              <button
                type="button"
                onClick={() => handleButtonClick(false)}
                className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
              >
                Bank Transfer
              </button>
            </div>

            {isEthereumVisible ? (
              <div className=" p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
                <Input
                  placeholder="Address To"
                  name="addressTo"
                  type="text"
                  handleChange={handleChange}
                />
                <Input
                  placeholder="Amount (ETH)"
                  name="amount"
                  type="number"
                  handleChange={handleChange}
                />
                <Input
                  placeholder="Keyword (Gif)"
                  name="keyword"
                  type="text"
                  handleChange={handleChange}
                />
                <Input
                  placeholder="Enter Message"
                  name="message"
                  type="text"
                  handleChange={handleChange}
                />

                <div className="h-[1px] w-full bg-gray-400 my-2" />

                {isLoading ? (
                  <Loader />
                ) : (
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
                  >
                    Send now
                  </button>
                )}
              </div>
            ) : (
              <div className=" p-5 sm:w-96 w-full flex flex-col justify-start items-center green-glassmorphism">
                <Input
                  placeholder="Sender Card Number"
                  name="Sender Card Number"
                  type="number"
                  handleChange={handleChange}
                />
                <Input
                  placeholder="Sender CVV/CVC"
                  name="Sender CVV/CVC"
                  type="number"
                  handleChange={handleChange}
                />
                {/* <Input
                  placeholder="Sender Expiry Date"
                  name="SenderExpiryDate"
                  type="text"
                  handleChange={handleChange}
                /> */}
                {/* <Input
                  placeholder="Sender Bank Name"
                  name="SenderBankName"
                  type="text"
                  handleChange={handleChange}
                /> */}
                <Input
                  placeholder="Receiver Card Number"
                  name="Receiver Card Number"
                  type="number"
                  handleChange={handleChange}
                />
                {/* <Input
                  placeholder="Receiver Expiry Date"
                  name="ReceiverExpiryDate"
                  type=""
                  handleChange={handleChange}
                /> */}
                {/* <Input
                  placeholder="Receiver Bank Name"
                  name="ReceiverBankName"
                  type="text"
                  handleChange={handleChange}
                /> */}
                <Input
                  placeholder="Transfer Amount"
                  name="Transfer Amount"
                  type="number"
                  handleChange={handleChange}
                />

                <div className="h-[1px] w-full bg-gray-400 my-2" />

                {isLoading ? (
                  <Loader />
                ) : (
                  <button
                    type="button"
                    onClick={handleBankSubmit}
                    className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
                  >
                    Send now
                  </button>
                )}
              </div>
            )}
          </div>
          {}
          {}
        </div>
      </div>
    </div>
  );
};

export default Welcome;
