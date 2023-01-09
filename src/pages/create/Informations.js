import React from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { updateQrData } from "../../redux/slices/qrSchemaSlice";
// Utils
import { getInputsForFields } from "../../utils/getInputsForFields";

export const Informations = () => {
  const qrData = useSelector((state) => state.qrSchema);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const parentObject = e.target.getAttribute("data-parentObject");
    dispatch(
      updateQrData({
        parentObject: parentObject,
        name,
        value,
      })
    );
  };

  const createQR = async () => {
    await fetch("https://qrcode3.p.rapidapi.com/qrcode/" + qrData.type, {
      method: "POST",
      headers: {
        headers: {
          "content-type": "application/json",
          "X-RapidAPI-Key":
            "5ddd22b24fmshffe63561ff22dcap148652jsn2825b2730aa4",
          "X-RapidAPI-Host": "qrcode3.p.rapidapi.com",
        },
      },
      body: JSON.stringify(qrData.data),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h1 className="text-3xl text-[red]"></h1>
      {getInputsForFields(null, qrData.data, handleInputChange, qrData.data)}
      <button
        className="bg-[limegreen] py-5 px-10 text-white"
        onClick={createQR}
      >
        Create QR Code
      </button>
    </div>
  );
};
