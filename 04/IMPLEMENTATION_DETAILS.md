# Implementation details

During livestreaming this challenge on Twitch I originally implemented a quick and easy to understand double loop solution. After realizing that this can't be the desired solution and consulting the `hints.md` I dug into this puzzle more and came up with the first recursion solution.  
Once the first recursion solution was written I duplicated that to also provide one with a named slot as the `hints.md` pointed out would be necessary for solving this puzzle.

## ChristmasTreeRecursion.vue

The implementation works as intended, however there are a few drawbacks to this solution in my opinion.

* Implementing the Christmas tree like this might be really hard to understand for junior developers.
* Performance wise this implementation is limited.
  * There is lots of unnecessary div nesting (each recursive call gets nested into the parent div (line 2) which means there are 7 levels of nesting for a tree of size 7) which clutters the DOM.
  * The tree is limited to a size of 390 on my machine (at least when many Chrome tabs were open and OBS was running to livestream to Twitch) before running into `Maximum call stack size exceeded` errors.

## ChristmasTreeRecursionWithSlot.vue

The implementation above works as intended, however there are a few drawbacks to this solution in my opinion.
 
* Implementing the Christmas tree like this might be really hard to understand for junior developers.
* Performance wise this implementation is limited.
  * There is lots of unnecessary div nesting (each recursive call gets nested into the parent div (line 2) which means there are 7 levels of nesting for a tree of size 7) which clutters the DOM
  * The tree is limited to a size of 390 on my machine (at least when many Chrome tabs were open and OBS was running to livestream to Twitch) before running into `Maximum call stack size exceeded` errors.
* The `hints.md` mentions the need of named slots which I can just not see at all. This component is basically identical to the ChristmasTreeRecursion.vue and there is no benefit of implementing the named slot.

## ChristmasTreeWithLoops.vue

This component implements the another solution of this puzzle by just looping twice based on the size prop provided.

* The first loop is done to create the required amount of rows (7 in the original example) while the second loop makes sure that each row gets the right amount of tree elements inside. (1 for the first row, 2 for the second row, ..., 7 for the seventh row)
* The implementation is easier to understand for newer developers in my opinion
* The performance of this implementation is way better on my machine as even a size of 1000 didn't cause any errors. Sure, rendering took a bit longer and the browser tab was using excessive amounts of RAM and CPU resources, but it didn't error out during rendering.
