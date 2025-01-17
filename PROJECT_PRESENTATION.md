# The story of this test

For this hackathon, we have been asked to make a Codewars style kata that can be passed onto other people that will automatically review their answers through the tests we build into the repo. We decided to keep all of our teams kata within a set theme to give us a little extra challenge of trying to think of real world examples of how code can be used to solve everyday problems. The theme we ended up choosing was sports as we felt it gave us a wide range of areas to work with, as well as a variety of different data sets we can work from with different sports scoring methods, rules, league structures etc. allowing us more freedom in what we wanted the functionality of our code to look like. For my kata, I have chosen to assist people that are getting into football for the first time by helping them visualise what formations teams could play in a real match by inputting a list of potential positions into a function to see if that would be realistic to play.

I decided on this function as I had the layout of it visualised with how it would simply pass through an array of strings, then check each of those values and add to a counter variable if the value was a specific string such as "GK". Once it finishes running through the array, the counters for the different position would be filled out and I can run a variety of if statements to ensure that it would match a realist formation of a football team. The falsey results here would come from things like incorrect inputs, too many or too few values in the array, and too many or too few of a specific position.

While this could be incorperated with a real database of formations used in professional matches around the world including precise positions such as LW, RB, CDM etc. I feel this works as a way to give a basic introduction to the game and the concept of how the players are organised on the pitch for someone who may just see it as people running around all over the place.

# The Challenge

Write a function that takes the intput of an array of 11 football positions from the following list (GK, DEF, MID, FW) and returns true if the selection of positions chosen would work as a valid formation or returns false otherwise.
Feel free to add appropriate console logs to results to show an appropriate error or message. A valid formation would have the following:
* Exactly 1 goalkeeper (GK)
* Between 3 and 5 defenders (DEF)
* Between 2 and 5 midfielders (MID)
* Between 1 and 4 forwards (FW)
* Exactly 11 players total

Some examples of how it will be tested are:

* TrueExample: isProperFormation([`GK`,`DEF`,`DEF`,`DEF`,`MID`,`MID`,`MID`,`MID`,`FW`,`FW`,`FW`,]);    This would return true
* FalseExample: isProperFormation([`GK`,`DEF`,`DEF`,`DEF`,`DEF`,`DEF`,`MID`,`FW`,`FW`,`FW`,`FW`,]);     This would return false as theres less than 2 midfielders
* FalseExample: isProperFormation([`GK`,`DEF`,`DEF`,`DEF`,`MID`,`MID`,`MID`,`FW`,`FW`,`FW`,]);          This would return false as theres less than 11 players

HAVE FUN :)

# Deciding what the tests will require from the function

I have decided to make my function return a boolean result with console logs attatched to each depending on the what part of the function caused the return. Becasue of this, all my test will be looking for is the end result to either be true or false, and setting up the different my arrange areas with different array inputs in order to trigger the different exits from my function. While this is not checked in the testing, I also recommended that errors were console logged ontop of the results to show that the tests were passing for the correct methods.

For a stretch goal, I would have like to follow what I previously stated about incorperating exact positioning and perhaps throwing a reference to a time when the formation the user pushes through the function was used in real play, to make sure it not only covers the mostly used options like I have currently covered, but also the weirder times where things like having no FW on the pitch has happened. This would have required a database to be setup with all of these formations and the exact positions used, so the users input can be referenced and either fetch a matching result from the database or return an error if nothing could be found.

![image](https://github.com/user-attachments/assets/ecdbb8c9-eae5-4507-a9e9-d4e0dcd061e9)
![image](https://github.com/user-attachments/assets/df43dd4b-d4d5-48c8-b673-30982f8f66ee)

# Writing the test

I first started off by installing vitest and setting up an empty test inside of my main.test.js file, so I can ensure that the package has been installed correctly and working as intended when it returns this test with a pass.

![image](https://github.com/user-attachments/assets/1b17f675-579e-424f-a5d5-35a625f4250d)

Once I knew that was working, I then moved towards the kinds of results that my function would need to produce. This is where I decided, for the sake of the testing and kata, that I would leave it as true or false boolean values as they would be simpler to work with while still giving the required results. I updated my function so that it would pass a true result if the input was ["A", "B"], then made 2 tests that would check if the result was indeed true on an ["A", "B"] and if the function returned false when a ["C", "D"] input was used.

![image](https://github.com/user-attachments/assets/0ca91d00-81cf-4a54-9beb-00b30b70033d)
![image](https://github.com/user-attachments/assets/24c10324-a519-4aa6-b001-fc95e00334fe)
![image](https://github.com/user-attachments/assets/4ead1a90-96df-4056-a0c5-661a3c0baca3)

Now that I am aware of the syntax I will need to use for my test, I could apply this to all my other restrictions that I have given them such as there must be 11 values in the array or only being 1 GK. I would also apply messages to these tests to make it easier for the people creating the function to debug and work out what they havew not done correctly as the majority of them will simply be looking for a false value. The tests I decided to go for were:

   * Pass a valid formation through the function and it will return true
   * Insert under 11 values and it should return false
   * Using a value that is not exactly GK, DEF, MID or FWD should return false
   * Have more than 1 GK to return false
   * Have less than 3 DEF to return false
   * Have more than 5 MID to return false
   * Have less than 1 FW to return false.

![image](https://github.com/user-attachments/assets/842b5f9f-45f4-485f-a7d5-77f828dd39fc)

# Bootcamper feedback

Kit took on my Kata and got through the majority of the tests aside from the data validation on test 3 so overall managed to make a good attempt at my challenge. The feedback I got from his was the the challenge had a lot of parts so it would have been nicer to lay out my instructions in more of a structured format so you know exactly what you need to aim for in a step by step process. It had enough of a challenge to make you properly think but it was all using basic concepts we have already covered so it is doable with enough time and research. If we had more time, I would have like to get more feedback but I am appreciative of what I got.

![image](https://github.com/user-attachments/assets/7faf4d1e-7f9c-4490-87ed-83c7df1ac216)

# Potential Solution

export function isProperFormation(formation) {
  const validPositions = ["GK", "DEF", "MID", "FW"];

  if (formation.length !== 11) {
    console.log("Error: The team must have exactly 11 players.");
    return false;
  }

  for (let position of formation) {
    if (!validPositions.includes(position)) {
      console.log(
        `Error: Invalid position "${position}" found. Position must be either GK, DEF, MID or FW.`
      );
      return false;
    }
  }

  let gkCount = 0;
  let defCount = 0;
  let midCount = 0;
  let fwCount = 0;

  for (let position of formation) {
    if (position === "GK") gkCount++;
    if (position === "DEF") defCount++;
    if (position === "MID") midCount++;
    if (position === "FW") fwCount++;
  }

  if (gkCount !== 1) {
    console.log("Error: There must be exactly 1 goalkeeper (GK).");
    return false;
  }

  if (defCount < 3 || defCount > 5) {
    console.log("Error: There must be between 3 and 5 defenders (DEF).");
    return false;
  }

  if (midCount < 2 || midCount > 5) {
    console.log("Error: There must be between 2 and 5 midfielders (MID).");
    return false;
  }

  if (fwCount < 1 || fwCount > 4) {
    console.log("Error: There must be between 1 and 4 forwards (FW).");
    return false;
  }

  console.log("This is a valid formation!");
  return true;
}

