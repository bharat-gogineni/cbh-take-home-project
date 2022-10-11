const crypto = require("crypto");
require('dotenv').config()

exports.deterministicPartitionKey = (event) => {
  let candidate = process.env.TRIVIAL_PARTITION_KEY;
  if (event) {
    candidate = event.partitionKey? event.partitionKey : hash(JSON.stringify(event));
  }
  candidate = typeof candidate !== "string" ? JSON.stringify(candidate) : candidate; 
  if (candidate.length > process.env.MAX_PARTITION_KEY_LENGTH) {
    candidate = hash(candidate);
  }
  return candidate;
};

const hash = (key) => {
  return crypto.createHash("sha3-512").update(key).digest("hex")
}