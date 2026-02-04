import { showConnect } from "@stacks/connect";
import { makeContractCall } from "@stacks/transactions";

export function connectWallet() {
  showConnect({
    appDetails: {
      name: "Stacks Counter DApp",
      icon: window.location.origin + "/logo.png",
    },
  });
}

export async function callIncrement() {
  console.log("This will call the Stacks contract later");
}
