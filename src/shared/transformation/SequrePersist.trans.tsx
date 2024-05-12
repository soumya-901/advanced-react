import createTransform from "redux-persist/es/createTransform";
import * as CryptoJS from "crypto-js"; // Custom transform for encryption
export const encryptionTransform = createTransform(
  // Transform state on its way to being serialized and stored
  (inboundState, key) => {
    // Encrypt the state before storing it
    console.log("inbound state ", inboundState);
    return CryptoJS.AES.encrypt(
      JSON.stringify(inboundState),
      "yourSecretKey"
    ).toString();
  },
  // Transform state being rehydrated
  (outboundState, key) => {
    console.log("out bound state ", outboundState);
    // Decrypt the state after retrieving it from storage
    return JSON.parse(
      CryptoJS.AES.decrypt(outboundState, "yourSecretKey").toString()
    );
  }
);
