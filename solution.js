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
