const { deterministicPartitionKey } = require("./dpk")

describe("deterministicPartitionKey", () => {
  it("Returns the literal that is same as env.TRIVIAL_PARTITION_KEY when given no input", () => {
    const trivialKey = deterministicPartitionKey()
    expect(trivialKey).toBe(process.env.TRIVIAL_PARTITION_KEY)
  })
  it("Returns the literal that is same as when given a partition key", () => {
    const partitionKey = deterministicPartitionKey({partitionKey:"test"})
    expect(partitionKey).toBe("test")
  })
  
  it("Returns the a hash when not given a partition key", () => {
    const partitionKey = deterministicPartitionKey("test")
    expect(partitionKey).toBe("0fa3727b22cbb0a5271dddfcb7d414a1a512284913ccd690b198751de8100b1ea1935c1b63c35837696f8e73709431de092894581bec9bbfe6532106733af6d8")
  })
  it("Returns the a hash when not given a partition key when characters greater than 256", () => {
    const partitionKey = deterministicPartitionKey(Math.floor(100000 + Math.random() * 900000))
    expect(partitionKey).not.toBe('')
  })
})
