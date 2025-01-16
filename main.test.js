import { expect, test } from "vitest";
import { isProperFormation } from "./main.js";

test("test should pass", () => {});

// Test case 1: Valid formation
test("should return true for a valid formation", () => {
  // Arrange
  const formation = [
    "GK",
    "DEF",
    "DEF",
    "DEF",
    "MID",
    "MID",
    "MID",
    "MID",
    "FW",
    "FW",
    "FW",
  ];
  // Act
  const result = isProperFormation(formation);
  // Assert
  expect(result).toBe(true);
});

// Test case 2: Invalid formation (too few players)
test("should return false as there is under 11 players", () => {
  // Arrange
  const formation = ["GK", "DEF", "MID", "FW"];
  // Act
  const result = isProperFormation(formation);
  // Assert
  expect(result).not.toBe(true, "The team must have exactly 11 players.");
});

// Test case 3: Invalid data (incorrect string used in the array)
test("should return false as there is a value in the array not equal to GK, DEF, MID or FWD", () => {
  // Arrange
  const formation = [
    "GK",
    "DEF",
    "DEF",
    "DEF",
    "DEF",
    "MID",
    "SOC",
    "MID",
    "FW",
    "FW",
    "FW",
  ];
  // Act
  const result = isProperFormation(formation);
  // Assert
  expect(result).not.toBe(true, "The formation must be GK, DEF, MID or FWD.");
});

// Test case 4: Invalid formation (too many GK)
test("should return false if there are more than 1 GK", () => {
  // Arrange
  const formation = [
    "GK",
    "GK",
    "DEF",
    "DEF",
    "DEF",
    "MID",
    "MID",
    "MID",
    "FW",
    "FW",
    "FW",
  ];
  // Act
  const result = isProperFormation(formation);
  // Assert
  expect(result).toBe(false), "There can only be one GK.";
});

// Test case 5: Invalid formation (too few DEF)
test("should return false if there are less than 3 DEF", () => {
  // Arrange
  const formation = [
    "GK",
    "DEF",
    "DEF",
    "MID",
    "MID",
    "MID",
    "MID",
    "FW",
    "FW",
    "FW",
    "FW",
  ];
  // Act
  const result = isProperFormation(formation);
  // Assert
  expect(result).toBe(false, "There must be at between 3 and 5 DEF.");
});

// Test case 6: Invalid formation (too many MID)
test("should return false if there are more than 5 MID", () => {
  // Arrange
  const formation = [
    "GK",
    "DEF",
    "DEF",
    "DEF",
    "MID",
    "MID",
    "MID",
    "MID",
    "MID",
    "MID",
    "FW",
  ];
  // Act
  const result = isProperFormation(formation);
  // Assert
  expect(result).toBe(false, "There must be between 2 and 5 MID.");
});

// Test case 7: Invalid formation (too few FW)
test("should return false if there are less than 1 FW", () => {
  // Arrange
  const formation = [
    "GK",
    "DEF",
    "DEF",
    "DEF",
    "DEF",
    "DEF",
    "MID",
    "MID",
    "MID",
    "MID",
    "MID",
  ];
  // Act
  const result = isProperFormation(formation);
  // Assert
  expect(result).toBe(false, "There must between 1 and 4 FWD.");
});
