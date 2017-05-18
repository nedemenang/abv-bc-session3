'use strict';

module.exports = {

reverseString: (str) =>
	{
		if(str === "")
	    {
	      return null;
	    }
	    
	    var newString = "";
	    str = str.toLowerCase();
	    for (var i = str.length - 1; i >= 0; i--) {
	        newString += str[i];
	    }
	    
	    if (str.toLowerCase() == newString.toLowerCase())
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