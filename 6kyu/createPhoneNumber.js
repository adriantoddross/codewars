function createPhoneNumber(numbers) {
  // Slice & join the array into the parts of a phone number
  // https://website-assets-fw.freshworks.com/attachments/cjv69zu1o05fvqwg0dbmeg3z7-parts-of-a-phone-number.svg

  if (numbers.length > 10)
    throw new Error(
      "Invalid phone number. Provide phone number without country code."
    );

  const sliceAndJoin = (start, end) => numbers.slice(start, end).join("");

  const areaCode = sliceAndJoin(0, 3);
  const exchangeCode = sliceAndJoin(3, 6);
  const lineNumber = sliceAndJoin(6, numbers.length + 1);

  return `(${areaCode}) ${exchangeCode}-${lineNumber}`;
}

/*

  ❤️ An alternative, much simpler approach that made me smile...
  https://www.codewars.com/kata/reviews/525f50e3b73515a6db000b86/groups/539ceeedb9de00c4da000a4e

  function createPhoneNumber(numbers){
  var format = "(xxx) xxx-xxxx";
  
  for(var i = 0; i < numbers.length; i++)
  {
    format = format.replace('x', numbers[i]);
  }
  
  return format;
}

*/
