import { showConnect } from "@stacks/connect";

document.getElementById("connect").onclick = () => {
  showConnect({
    appDetails: {
      name: "Stacks Counter DApp",
      icon: window.location.origin + "/logo.png",
    },
  });
};

document.getElementById("increment").onclick = () => {
  alert("Contract call will go here");
};

