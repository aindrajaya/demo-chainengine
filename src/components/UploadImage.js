import React, { useState } from 'react'
import {sdk} from "../services";
import fs from 'fs';
import { useHistory } from "react-router-dom";

export default function UploadImage() {
  const history = useHistory()
  const fileReadStream = fs.createReadStream('./images/shield.jpg');
  console.log(fileReadStream, "data Image")
  const [uploadSuccess, setUploadSuccess] = useState([])

  const uploadResponse = async (file) => {
    await sdk.nfts.uploadFileToIFPS(file)
      .then((data) => {
        setUploadSuccess(data)
      })
      .catch((e) => {
        alert(e)
      })
    history.push("/")
  }

  // console.log(uploadResponse(fileReadStream), "data terupload");
  return (
    <div>
      <button onClick={() => uploadResponse(fileReadStream)}></button>
      <h1>{uploadSuccess.data?.url}</h1>
    </div>
  )
}


 



