'use strict';

module.exports = {

reverseString: (str) =>
	{
		if(str === "")
	    {
	      return null;
	    }
	    
	    var newString = "";
	    for (var i = str.length - 1; i >= 0; i--) {
	        newString += str[i];
	    }
	    
	    if (str == newString)
	    {
	      return true;
	    }
	    else{
	      return newString;
	    }
	},

	findMissing: (arrayA, arrayB) =>
	{

		   var arrayBSize = arrayB.length;

		   // loop through previous array
		   for(var j = 0; j < arrayBSize; j++) {

		      // look for same thing in new array
		      if (arrayA.indexOf(arrayB[j]) == -1)
		         return arrayB[j];

   			}

   		return 0;

	}
	
}