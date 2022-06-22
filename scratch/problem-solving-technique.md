---
id: DNNRHPv0ZHMok7yJ7a6Wq
title: Problem Solving Technique
desc: 'Problem Solving Technique'
updated: 1644102135987
created: 1643693017016
---

1. Understand the problem
   1. avoid coding
   1. read through the problem
   1. ask yourself:
      1. what are the inputs?
         1. these will become the parameters/arguments the function will take
         1. will the inputs stay that same data type?
         1. are teh number of inputs static ro dynamic?
            1. can you always expect a number of inputs or can there be more or less?
         1. **Suggestion**:
            1. write down possible inputs in a code comment to get a sense of what they look like
               1. // inputs: 2, 4
      1. what are the outputs?
         1. what will the function return?
      1. create some examples
         1. can be used as sanity checks to test your problem
         1. start with a simple example or two of possible inputs and outputs
            1. // add(2, 3) -> 5
      1. create complex examples
         1. take the time to look for edge cases you might need to account for
            1. what should happen if add function receives strings instead of integers?
         1. add comments to handle this case
            1. // return error if inputs are not numbers
            1. // check if no inputs
            1. // if no inputs return undefined
               1. write defensive code - think about what could go wrong and how the code will defend against possible errors
1. Devise a plan for solving the problem
   1. as you devise your plan write it out in psuedocode
      1. // create sum variable
      1. // add first input to the second input using the addition operator
      1. // store value of both inputs into sum variable
      1. // return sum variable as output
   1. for more complex problems consider systematically how you would solve the problem
1. Carry out the plan
   1. use the psuedocode as a guide to write out the actual code
   1. don't optimize at this step
   1. if you can't solve part of the problem, temporarily ignore it the hard part
1. Look back over what you've done
   1. reflect and figure out how to improve
      1. refactor to improve efficient one
   1. can you derive teh result differently?
   1. what other approaches are there that are viable
   1. can you understand it at a glance? Does it make sense?
   1. can you use the result or method for some other problem?
   1. can you improve the performance of your solution?
   1. can you think of other ways to refactor?
   1. how have other people solved this problem?

[![](https://img.shields.io/badge/back%20to%20top-%E2%86%A9-red)](#problem-solving)
