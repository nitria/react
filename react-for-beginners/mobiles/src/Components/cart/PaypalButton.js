import React, { usePayPalScriptReducer } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
function PaypalButton() {
  const [{ isPending }] = usePayPalScriptReducer();
  const initialOptions = {
    "client-id": "sb",
    currency: "USD",
    intent: "capture",
  };

  return (
    <PayPalScriptProvider options={initialOptions}>
      {isPending ? <div className="spinner" /> : null}
      <div style={{ maxWidth: 80 }}>
        <PayPalButtons style={{ height: 25 }} />
      </div>
    </PayPalScriptProvider>
  );
}

export default PaypalButton;
