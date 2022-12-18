# Remarks

This file's purpose is to serve as a place to gather my thoughts about the challenge in case there is any way to give feedback after Advent of Vue concludes.

At the time of doing this challenge I have over 6 years experience as a web developer and over 3 years with Vue (both 2 and 3).

## 02

I was really looking forward to this one as I hoped to see how `vitest` can be used in an application to test the written code. After implementing my solution I started the tests and of course they were red. Which is fine, I just missed applying the required `data-qa` tags to my elements.

After doing that and starting the tests again they were still all red though, throwing errors because `fetch` wasn't defined. I thought this might be caused by me using `fetch` instead of `window.fetch` to clearly state where `fetch` is coming from but that didn't resolve the errors either.

Not sure what else I could try I decided to look at the solution to see that there is quite a lot of code for the tests which isn't part of the `main` branch. After grabbing the missing stuff from the `solution` branch (namely the whole `test/` folder and the `beforeEach` block for the `App.spec.js`) everything worked as expected.

Just checked the `main` branch again to make sure this code wasn't part of it initially and updates including the `test/` folder and the `beforeEach` block were merged to `main` on December 3rd 2022, 9:21am GMT+1. Looks like someone already provided feedback on this broken state and it was fixed. A bit too late for me but I worked around it. Would be good if an update for an older challenge would be mentioned in the next mail sent out though so users that might've given up on a door because of that know that things changed, and they can try again.

## 04

I learnt how recursively called components resolve rendering which is definitely interesting and was great to find out during this puzzle.
Seeing that the parent div (line 2) renders and then the next ChristmasTreeRecursion component begins by rendering the parent div (line 2)
and this continues until the condition for the recursion is reached definitely helped me understand how Vue works here and I might be able
to implement such a recursive component in future projects when needed.


During implementing this challenge I realized a few things.

1. The example chosen isn't exactly the most logical or easy to grasp example for a recursion. Initially I solved the puzzle by writing just two `v-for` loops inside the `ChristmasTree.vue` component which achieved exactly the same. Coming up with a real world example for Component recursion is probably really hard in this limited context and I appreciate the concept of recursions being included here, I'd like to see a challenge closer to real world application though for such a topic.
2. The `hints.md` file didn't really hint at much.
   1. The `See things more clearly` section basically is a write-off and doesn't provide any help for getting to the actual solution. Sure, it is nice to understand that `-m-2` is applying a negative margin (and I learnt that CSS classes can start with a `-` which is cool) but by mentioning this class specifically it could feel like it is needed to solve the puzzle. Could be confusing for a beginner.
   2. The `Slots` section is completely useless. I tried to wrap my head around how I could use a slot there to get things working better with the recursion and couldn't find anything. I decided to check out the [2022-recursive-tree-solution](https://github.com/Advent-Of-Vue/2022-recursive-tree-solution/blob/main/src/ChristmasTree.vue) repository to see where it would be used and guess what? There is not a single named slot in the solution.

## 09

The README.md says `to toggle sorting`, the button should be named `Toggle sort` .. a test case that unsorts the presents after sorting them would be sweet. I understood `toggle` as click the button once, sort the presents, and we are done. After checking the solution I figured out what the `computed` should be for, without unsorting the presents again I didn't see a need for a `computed`. :)

## 10

I can see where the idea of the 10th door is going and this might be something many developers participating enjoy. For me though receiving a completely open "challenge" doesn't pass the challenge character. When signing up I expected to get 24 challenges that clearly tell me what to do, how the end result should look like and maybe some hints on how to get there. Then comes door 10 and tells me "use whatever you want, do whatever you want and implement everything however you want, there is no right or wrong here". I have other projects for that kind of creative freedom so I couldn't really get myself to work on door 10 on stream.
