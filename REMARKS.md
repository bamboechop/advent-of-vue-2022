# Remarks

This file's purpose is to serve as a place to gather my thoughts about the challenge in case there is any way to give feedback after Advent of Vue concludes.

At the time of doing this challenge I have over 6 years experience as a web developer and over 3 years with Vue (both 2 and 3).

## 02

I was really looking forward to this one as I hoped to see how `vitest` can be used in an application to test the written code. After implementing my solution I started the tests and of course they were red. Which is fine, I just missed applying the required `data-qa` tags to my elements.

After doing that and starting the tests again they were still all red though, throwing errors because `fetch` wasn't defined. I thought this might be caused by me using `fetch` instead of `window.fetch` to clearly state where `fetch` is coming from but that didn't resolve the errors either.

Not sure what else I could try I decided to look at the solution to see that there is quite a lot of code for the tests which isn't part of the `main` branch. After grabbing the missing stuff from the `solution` branch (namely the whole `test/` folder and the `beforeEach` block for the `App.spec.js`) everything worked as expected.

Just checked the `main` branch again to make sure this code wasn't part of it initially and updates including the `test/` folder and the `beforeEach` block were merged to `main` on December 3rd 2022, 9:21am GMT+1. Looks like someone already provided feedback on this broken state, and it was fixed. A bit too late for me but I worked around it. Would be good if an update for an older challenge would be mentioned in the next mail sent out though so users that might've given up on a door because of that know that things changed, and they can try again.

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

The README.md says `to toggle sorting`, the button should be named `Toggle sort` ... a test case that unsorts the presents after sorting them would be sweet. I understood `toggle` as click the button once, sort the presents, and we are done. After checking the solution I figured out what the `computed` should be for, without unsorting the presents again I didn't see a need for a `computed`. :)

## 10

I can see where the idea of the 10th door is going and this might be something many developers participating enjoy. For me though receiving a completely open "challenge" doesn't pass the challenge character. When signing up I expected to get 24 challenges that clearly tell me what to do, how the end result should look like and maybe some hints on how to get there. Then comes door 10 and tells me "use whatever you want, do whatever you want and implement everything however you want, there is no right or wrong here". I have other projects for that kind of creative freedom, so I couldn't really get myself to work on door 10 on stream.

## 11

The remark about door [04](#04) already mentioned the `Slots` section in the `hints.md` file which didn't make any sense for door 04. Well, it does for door 11, so I guess the examples where split into parts after the whole thing was implemented and this part was just forgotten to be removed from the `hints.md` file. I get it, happened to me in the past as well - completely implementing something and then stripping it down to smaller, easier to understand parts for smaller commits or to explain something to a colleague. We all overlook parts that shouldn't be included. With the additional knowledge of door 11 the `hints.md` file in door 04 makes more sense and I really appreciate reusing an implementation from a previous door and expanding on it.

That being said I had a really hard time figuring out how to get the `ChristmasLights.vue` to render recursively. I googled the problem, I read the whole `Slots` page in the Vue documentation and didn't get any closer to finding a solution. Maybe it is just my understanding of the Vue documentation or maybe this part really isn't described in there. If it is, a link to the right section in the `README.md` or `hints.md` would be really appreciated as I could imagine that a less experienced developer getting stuck there might just abandon the challenge as he/she can't find anything in the documentation that seems to help with the problem.  
If the Vue documentation has nothing about this recursive usage of components than maybe it would be a good idea to provide a self-written blog post or any form of documentation about this within the repository just to make sure that a less experienced developer can find some help about this topic quickly.

Even with the hint about both the recursive and the base case needing to use slots I couldn't figure out on my own that I have to provide the named slot again within the recursive call of the `ChristmasTree.vue` component. Instead I fed the slot in the recursion call with another instance of the `ChristmasLights.vue` component and after that worked I decided to check out the solution to see if this was the intended way or if I missed something.
