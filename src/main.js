import "./style.css";
import { createElement } from "lucide";
import { Copy } from "lucide";

const copyIconSpan = document.querySelector(".copy-icon");
const referCodeElement = document.querySelector(".refer-code");
const copiedMessage = document.querySelector(".copied-message");

// Create the copy icon from lucid
const copyIcon = createElement(Copy, {
  width: 14,
  height: 14,
  "stroke-width": 1,
  stroke: "#fff",
  class: "lucid-copy",
});

// Append the icon to the <span>
copyIconSpan.appendChild(copyIcon);

// Add click event listener for copying referral code
copyIconSpan.addEventListener("click", async () => {
  try {
    // Get the referral code text
    const code = referCodeElement.textContent.trim();

    // Copy to clipboard
    await navigator.clipboard.writeText(code);

    // Show the copied message
    copiedMessage.style.display = "inline";

    // Hide message after 2 seconds
    setTimeout(() => {
      copiedMessage.style.display = "none";
    }, 2000);
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
});
