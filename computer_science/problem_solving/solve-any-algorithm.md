# Solve Any Algorithm

1. Ask questions - establish an understanding of the problem
   - does this look like a problem you have seen before?
   - what do you remember about similar problems?
   - what immediately stands out about it to you?
   - **NOTE:** you can always ask questions later on as they come up, you don't need to nail down _every_ constraint now
   1. start with time and space constraints [^1][^2]
   1. are there edge cases [^3]
   1. ask about language specific questions [^4]
   1. if pair programming [^5]
1. Examples
   - try a lot of examples reduces the risk of overfitting
   - approach this step with a scientific mindset
   - try being random with your inputs
   - try to break your assumptions
   - figure out the edge case & test them
   - start specific and then slowly generalize your solution
   - **NOTE:** the harder the problem, the more examples you should play around with
1. Become the algorithm
   - Diagram [^6]
1. Distill the problem to its essence
   - be able to summarize problem into a sentence
   - break larger more complex problems into smaller, distinct pieces [^7][^8]
1. Pseudocode
   1. Two types of pseudocode
      1. high-level in plain abbreviated english [^9]
         1. answers the "what" you are going to do
      1. low-level
         1. answers the "how"
         1. lays out step-by-step
         1. spell out any additional variables
         1. auxiliary data structures or actions
            1. algorithm needs to perform adding, swapping, traversing, instantiating
         1. written in such a way that you can code out each line one at a time and not have to hold too much info about the rest of your solution in your head
1. Time to do some coding
   1. **NOTE:** on code DRYness - it's ok to start with a solution that doesn't use the fewest number of if/else statements or the most clever optimizations
   1. know your syntax, especially for strictly typed languages
   1. debug your code
   1. study other's code and see how they solved it
   1. start to look for patterns fo space/time complexity

[^1]: ex: if you have an array - is it sorted? - does it only contain numbers? - are those numbers integers? - can then be negative or just positive? - is there a max length ir a range of input sizes?
[^2]: ex: strings - is there a distinction between upper & lower case? - are there spaces? - is there any punctuation?
[^3]: edge cases: - empty strings? - empty arrays? - very large or very small inputs?
[^4]: language specific: - can you use certain libraries? - how should you handle errors? - what kinds of inputs should the function be able to handle?
[^5]: pair:- can you google syntax & docs? - can you run your code with examples? - will the interviewer be able to answer certain questions?
[^6]: ex: arrays - draw them out with pointers - what could you do if you had a pointer - what about 2 or 3 more? - what if you don't start both pointers at the beginning
[^7]: check: can you write a helper function that produced the output for that piece?
[^8]: Ex: Anagram Palindrome - 1. count the number of occurrences of each letter (one distinct function with output fo dictionary of letters and counts) 2. make sure there's at most one letter that occurs an odd number of times (takes input of dictionary above)
[^9]: ex: anagram palindrome - 1. count each character in the string 2. determine whether there are two or more that occur an odd number of times
