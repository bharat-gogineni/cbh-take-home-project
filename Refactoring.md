# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.


## Explanation

Instead of storing keys and Secrets a dotenv was added to store variables into a .env file.
Most of the if else cases require only one condition to primarily work.
In the code provided  the candidate was initiated with a base value and altered if there exists a partition key provided by the user or if some input was provided
The hash function was used internally to add some reusability for future.
4 test cases were created one when no input was provided ,one when partition key was provided one where no partition key was provided but data was sent and one case where data was greater than 256 characters
