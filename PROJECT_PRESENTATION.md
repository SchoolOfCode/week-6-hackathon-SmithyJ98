# The story of this test

For this hackathon, we have been asked to make a Codewars style kata that can be passed onto other people that will automatically review their answers through the tests we build into the repo. We decided to keep all of our teams kata within a set theme to give us a little extra challenge of trying to think of real world examples of how code can be used to solve everyday problems. The theme we ended up choosing was sports as we felt it gave us a wide range of areas to work with, as well as a variety of different data sets we can work from with different sports scoring methods, rules, league structures etc. allowing us more freedom in what we wanted the functionality of our code to look like. For my kata, I have chosen to assist people that are getting into football for the first time by helping them visualise what formations teams could play in a real match by inputting a list of potential positions into a function to see if that would be realistic to play.

I decided on this function as I had the layout of it visualised with how it would simply pass through an array of strings, then check each of those values and add to a counter variable if the value was a specific string such as "GK". Once it finishes running through the array, the counters for the different position would be filled out and I can run a variety of if statements to ensure that it would match a realist formation of a football team.

# Deciding what the tests will require from the function

I have decided to make my function return a boolean result with console logs attatched to each depending on the what part of the function caused the return. Becasue of this, all my test will be looking for is the end result to either be true or false, and setting up the different my arrange areas with different array inputs in order to trigger the different exits from my function.

# Writing the test
