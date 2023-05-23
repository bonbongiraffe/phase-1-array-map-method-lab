const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  let titlesCased = tutorials.map((titleUncased) => {
    //titleUncased holds each title in tutorials
    let titleSeparatedUncased = titleUncased.split(' ');
    let titleSeparatedCased = titleSeparatedUncased.map((word) =>{
      let wordCased = '';
      for (let i = 0; i < word.length; i++){
        if (i === 0)
          wordCased += word[0].toUpperCase();
        else 
          wordCased += word[i];
      }
      return wordCased;
    })
    let titleUnseparatedCased = titleSeparatedCased.join(' ');
    return titleUnseparatedCased;
  })
  //get tutorial title
  // const tutorialsCased = tutorials.map((title) => {
  //   const titleSeparatedUncased = title.split(' ');
  //   //check first letter of each word, capitalize if it's not already capitalized
  //   const titleSeparatedCased = titleSeparatedUncased.map((word) => {
  //     // let wordCased = '';
  //     // for (let i = 0; i < word.length; i++){
  //     //   wordCased += word[i];
  //     // }
  //     // wordCased[0] = wordCased[0].toUpperCase();
  //     // return wordCased;
  //   })
  //   return titleSeparatedCased.join(' ');
  // })
//get words from tutorial title
  return titlesCased
}