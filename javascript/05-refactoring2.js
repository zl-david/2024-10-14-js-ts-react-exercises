/*
 * Similar to the previous exercise, but look at some of the less common Array methods: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 */

function evaluateUsers(users) {
  var qualifiedUsers = [];
  var totalScore = 0;

  for (var i = 0; i < users.length; i++) {
    var user = users[i];

    if (user.age >= 18 && user.age <= 65) {
      var hasHighScore = false;

      for (var j = 0; j < user.scores.length; j++) {
        if (user.scores[j] >= 70) {
          hasHighScore = true;
          break;
        }
      }

      if (hasHighScore) {
        qualifiedUsers.push(user);
        totalScore += user.scores.reduce((sum, score) => sum + score, 0);
      }
    }
  }

  var averageScore = totalScore / qualifiedUsers.length;

  var reversedUsers = [];
  for (var k = qualifiedUsers.length - 1; k >= 0; k--) {
    reversedUsers.push(qualifiedUsers[k]);
  }

  console.log("Qualified Users (in reverse order):");
  for (var l = 0; l < reversedUsers.length; l++) {
    console.log(reversedUsers[l].name);
  }

  return averageScore;
}

module.exports = { evaluateUsers };

// var usersData = [
//   { name: "Alice", age: 30, scores: [80, 90, 75] },
//   { name: "Bob", age: 15, scores: [50, 60] },
//   { name: "Charlie", age: 55, scores: [70, 65, 85] },
//   { name: "Dave", age: 70, scores: [90, 95] },
//   { name: "Eve", age: 25, scores: [60, 75, 80] },
// ];

// var average = evaluateUsers(usersData);
// console.log("Average Score of Qualified Users:", average);
