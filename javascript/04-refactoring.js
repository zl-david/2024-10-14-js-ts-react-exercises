/*
 * Refactor the following function. Start with writing unit tests to make sure you don't change the behavior.
 */

function processData(data) {
  var processedItems = [];

  for (var i = 0; i < data.length; i++) {
    var item = data[i];

    if (item.isValid) {
      var alreadyProcessed = false;
      for (var j = 0; j < processedItems.length; j++) {
        if (processedItems[j].id === item.id) {
          alreadyProcessed = true;
          break;
        }
      }

      if (!alreadyProcessed) {
        var newItem = {
          id: item.id,
          value: item.value * 2,

          isProcessed: true,
        };
        processedItems.push(newItem);
      }
    }
  }

  for (var k = 0; k < processedItems.length; k++) {
    var processedItem = processedItems[k];
    if (processedItem.value > 10) {
      console.log("Item processed: ", processedItem.id);
    }
  }

  return processedItems;
}

var data = [
  { id: 1, value: 5, isValid: true },
  { id: 2, value: 15, isValid: true },
  { id: 3, value: 10, isValid: false },
  { id: 1, value: 5, isValid: true },
];

var result = processData(data);
console.log(result);
