
/*function whatAmI () {
	var firstValue = prompt ("Type a number, letter or word please...");
	firstValue = parseInt(firstValue);
	if (isNaN(firstValue)) {
		document.write("This is a string");

	}
	else {
		document.write("this is a number");
	}

	
}

whatAmI();*/

function whichIsBigger() {

  var num1 = prompt ("Type the first number");
  var num2 = prompt ("Type the second number");

  num1 = parseInt(num1);
  num2 = parseInt(num2);
  
  if((num1)>(num2)){

    document.write(num2 + " is smaller!");
  }

  else if ((num1)<(num2)) {

    document.write(num1 + " is smaller!");
  }

   else if ((num1)===(num2)) {

    document.write(num1 +" " + num2 + " Both are equal");
  }

 else {

    document.write("your values are not numbers");
  }
}

whichIsBigger();