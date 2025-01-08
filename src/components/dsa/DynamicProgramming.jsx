import React from 'react';

const DynamicProgramming = () => {
  const fibonacciUsingDP = (n) => {
    let dp = [];
    const fib = (m) => {
      if (m === 0 || m === 1) return 1;
      return fib(m - 1) + fib(m - 2);
    }

    for (let i = 1; i <= n; i++) {

      // Store i-th Fibonacci number
      dp[i - 1] = fib(i);
    }

    //   Problem statement
    // There is a frog on the '1st' step of an 'N' stairs long staircase. The frog wants to reach the 'Nth' stair. 'HEIGHT[i]' is the height of the '(i+1)th' stair.If Frog jumps from 'ith' to 'jth' stair, the energy lost in the jump is given by absolute value of ( HEIGHT[i-1] - HEIGHT[j-1] ). If the Frog is on 'ith' staircase, he can jump either to '(i+1)th' stair or to '(i+2)th' stair. Your task is to find the minimum total energy used by the frog to reach from '1st' stair to 'Nth' stair.

    // For Example
    // If the given ‘HEIGHT’ array is [10,20,30,10], the answer 20 as the frog can jump from 1st stair to 2nd stair (|20-10| = 10 energy lost) and then a jump from 2nd stair to last stair (|10-20| = 10 energy lost). So, the total energy lost is 20.

    const frogJump = (n, heights) => {

      const minEnergy = (current, count = 0) => {

        if (current === 1) return 0;

        let oneStep = Infinity;
        if (current > 1) {
          oneStep = minEnergy(current - 1) + Math.abs(heights[current - 1] - heights[current - 2]);
        }

        let twoSteps = Infinity;
        if (current > 2) {
          twoSteps = minEnergy(current - 2) + Math.abs(heights[current - 1] - heights[current - 2]);
        }
        return Math.min(oneStep, twoSteps);
      }

      minEnergy(n, 0)
    };

    function frogJumpWithDp(n, heights) {
      if (n === 1) return 0; // Only one stair, no energy needed

      const dp = new Array(n).fill(0);

      // Base cases
      dp[0] = 0;
      dp[1] = Math.abs(heights[1] - heights[0]);

      // Fill the DP table
      for (let i = 2; i < n; i++) {
        const oneStep = dp[i - 1] + Math.abs(heights[i] - heights[i - 1]);
        const twoSteps = dp[i - 2] + Math.abs(heights[i] - heights[i - 2]);
        dp[i] = Math.min(oneStep, twoSteps);
      }

      // The result is the minimum energy to reach the last stair
      return dp[n - 1];
    }


    function chgb(n) {
      const dp = new Array(n).fill(0);

      function climbStairs(n) {
        // Base cases
        dp[0] = 1;
        dp[1] = 1;

        // Recursive call
        return dp[n - 1] + dp[n - 2];
      }


    }


    function frogJumpK(n, k, heights) {
      const dp = new Array(n).fill(Infinity);
      dp[0] = 0; // Base case: No cost to start at the first stone
  
      for (let i = 1; i < n; i++) {
          for (let j = 1; j <= k; j++) {
              if (i - j >= 0) {
                  dp[i] = Math.min(dp[i], dp[i - j] + Math.abs(heights[i] - heights[i - j]));
              }
          }
      }
  
      return dp[n - 1]; // Minimum cost to reach the last stone
  }
  



  };
  return (
    <div>DynamicProgramming</div>
  )
}

export default DynamicProgramming