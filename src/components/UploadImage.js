import React, { useState } from 'react'
import {sdk} from "../services";
import { createReadStream } from 'fs';
import { useHistory } from "react-router-dom";

export default function UploadImage() {
  const history = useHistory()
  const fileReadStream = createReadStream(`./images/shield.jpg`);
  console.log(fileReadStream, "data Image")
  const [uploadSuccess, setUploadSuccess] = useState([])

  const uploadResponse = async (file) => {
    const data = await sdk.nfts.uploadFileToIFPS(file);
    setUploadSuccess(data)
    // history.push("/")
  }

  console.log(uploadSuccess, "data upload sukses")

  // console.log(uploadResponse(fileReadStream), "data terupload");
  return (
    <div>
      <button onClick={() => uploadResponse(fileReadStream)}></button>
    </div>
  )
}


 



