# Stacks of Boxes

### 5 inputs, 5 stacks of boxes and a claw.

I try to code a simple algo which should spread all boxes across all available stacks evenly.

I'll have to code a function **solve(clawPos, boxes, boxInClaw)** to resolve the problem.

```diff
@@ clawPos is an integer for the index of the stack above which the claw is located. @@

@@ boxes is an array of integers which represents the state of the stacks. @@

@@ boxInClaw is an integer to indicate if the Claw contains a box (1) or not (0). @@
```

Only Vanilla JS allowed