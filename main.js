//Write a function that takes the intput of an array
//of 11 football positions from the following list (GK, DEF, MID, FW)
//and returns true if the selection of positions chosen would work as a valid formation
//or returns false otherwise.
//Feel free to add appropriate console logs to results to show an appropriate error or message.

//A valid formation would have the following:
//Exactly 1 goalkeeper (GK)
//Between 3 and 5 defenders (DEF)
//Between 2 and 5 midfielders (MID)
//Between 1 and 4 forwards (FW)
//Exactly 11 players total

// TrueExample: isProperFormation([`GK`,`DEF`,`DEF`,`DEF`,`MID`,`MID`,`MID`,`MID`,`FW`,`FW`,`FW`,]);    This would return true
// FalseExample: isProperFormation([`GK`,`DEF`,`DEF`,`DEF`,`DEF`,`DEF`,`MID`,`FW`,`FW`,`FW`,`FW`,]);     This would return false as theres less than 2 midfielders
// FalseExample: isProperFormation([`GK`,`DEF`,`DEF`,`DEF`,`MID`,`MID`,`MID`,`FW`,`FW`,`FW`,]);          This would return false as theres less than 11 players

//HAVE FUN :)

export function isProperFormation(formation) {}
