// pages/api/validate-code.js

let validCodes = {
  "123ABC": "https://example.com",
  "456DEF": "https://another-site.com",
};

export default function handler(req, res) {
  if (req.method === "POST") {
    const { code } = req.body;

    if (validCodes[code]) {
      const redirectURL = validCodes[code];

      // Once the code is used, remove it
      delete validCodes[code];

      return res.status(200).json({ redirectURL });
    } else {
      return res.status(400).json({ error: "Invalid or already used code" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
}
