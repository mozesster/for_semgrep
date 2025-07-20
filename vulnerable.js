// Example of code with known Semgrep violations

// ❌ Hardcoded secrets
const API_KEY = "sk_test_1234567890abcdef";

// ❌ Use of eval (dangerous)
const code = "console.log('executed')";
eval(code);

// ❌ Insecure HTTP URL
fetch("http://example.com/api/data");

// ❌ InnerHTML assignment (can lead to XSS)
document.getElementById("output").innerHTML = userInput;

// ❌ console.log in production code
console.log("Debug info");

// ❌ Disabled SSL certificate verification (Node.js)
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

// ❌ Weak password hashing (MD5)
const crypto = require("crypto");
const hash = crypto.createHash("md5").update("password123").digest("hex");
