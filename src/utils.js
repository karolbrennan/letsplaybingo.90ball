import React from 'react';
import logo from './images/logo.svg';

/**
 * Generates the needed bingo balls
 *
 * @var  {Object}
 */
export const generateBingoBoard = () => {
  let board = {};
  let columns = [1,2,3,4,5];
  let count = 1;
  columns.forEach(column => {
    board[column] = [];
    for(let i = 1; i <= 18; i++) {
      let obj = {
        column: column,
        number: count,
        called: false,
        active: false
      }
      board[column].push(obj);
      count++;
    }
  })
  return board;
}

export const getPhrase = (number) => {
  let phraseList = {
    1: ["Kelly's eye","Buttered scone","At the beginning","Little Jimmy","Nelson's column","First on the board","Number Ace","Son of a gun"],
    2: ["One little duck","Baby's done it","Doctor who","Me and you","Little boy blue","Home alone","Peek a boo"],
    3: ["Dearie me","I'm free","Debbie McGee","You and me","Goodness me","One little flea","Cup of tea","Monkey on the tree"],
    4: ["The one next door","On the floor","Knock at the door","Bobby Moore","Shut the door"],
    5: ["Man alive","Jack's alive","One little snake"],
    6: ["Tom Mix","Tom's tricks","Chopsticks","In a fix"],
    7: ["Lucky seven","God's in heaven","One little crutch","David Beckham","One hockey stick","A slice of heaven"],
    8: ["Garden gate","Golden gate","At the gate","Harry Tate","One fat lady","She's always late","Sexy Kate","Is she in yet"],
    9: ["Doctor's orders","Dinner time"],
    10: ["Cock and hen","Uncle Ben","A big fat hen","King blairs den"],
    11: ["Legs eleven","Legs","they're lovely","Chicken legs","Skinny legs"],
    12: ["One dozen","One and two","a dozen","Monkey's cousin","One doz' if one can"],
    13: ["Unlucky for some","Devil's number","Bakers dozen"],
    14: ["Valentines day","Tender","Pork chops"],
    15: ["Young and keen","Yet to be kissed"],
    16: ["Sweet sixteen","She's lovely","Never been kissed"],
    17: ["Often been kissed","Over-ripe","Old Ireland","Dancing queen","The age to catch 'em"],
    18: ["Key of the door","Now you can vote","Coming of age"],
    19: ["Goodbye teens","Cuervo gold"],
    20: ["One score","Getting plenty","Blind 20"],
    21: ["Key of the door","If only I was..","Just my age","At 21 watch your son"],
    22: ["Quack quack","Two little ducks","Ducks on a pond","Dinky doo","All the twos","Bishop Desmond","Put your 22's on","Toot toot"],
    23: ["A duck and a flea","Thee and me","The Lord's my shepherd","A duck on a tree","Dr. Pepper"],
    24: ["Two dozen","Did you score?","Do you want some more?"],
    25: ["Duck and dive","At 25, wish to have wife"],
    26: ["Bed and breakfast","Half a crown","Pick and mix"],
    27: ["Little duck with a crutch","Gateway to heaven"],
    28: ["In a state","The old brags","Over weight","Duck & its mate"],
    29: ["You're doing fine","In your prime","Rise and shine"],
    30: ["Burlington Bertie","Dirty Gertie","Speed limit","Blind 30","Flirty thirty","Your face is dirty","Tomato ball"],
    31: ["Get up and run"],
    32: ["Buckle my Shoe"],
    33: ["Dirty knees","All the feathers","All the threes","Gertie Lee","Two little fleas","Sherwood forest"],
    34: ["Ask for more"],
    35: ["Jump and jive","Flirty wives"],
    36: ["Three dozen","Yardstick… he wishes!"],
    37: ["A flea in heaven","More than eleven"],
    38: ["Christmas cake"],
    39: ["Those famous steps","All the steps","Jack Benny"],
    40: ["Two score","Life begins at","Blind 40","Naughty 40","Mary"],
    41: ["Life's begun","Time for fun"],
    42: ["That famous street in Manhattan","Whinny the Poo"],
    43: ["Down on your knees"],
    44: ["Droopy drawers","All the fours","Open two doors","Magnum"],
    45: ["Halfway house","Halfway there","Cowboy's friend","Colt"],
    46: ["Up to tricks"],
    47: ["Four and seven"],
    48: ["Four dozen"],
    49: ["Copper","Nick nick","Rise and shine"],
    50: ["Bulls eye","Blind 50","Half a century","Snow White's number","Hawaii five O, Hawaii"],
    51: ["Tweak of the thumb","The Highland Div","President's salute"],
    52: ["Weeks in a year","The Lowland Div","Danny La Rue","Pack 'o cards","Pickup"],
    53: ["Stuck in the tree","The Welsh Div","The joker"],
    54: ["Clean the floor","House of bamboo"],
    55: ["Snakes alive","All the fives","Double nickels","Give us fives","Bunch of fives"],
    56: ["Was she worth it?"],
    57: ["Heinz varieties","All the beans"],
    58: ["Make them wait","Choo choo Thomas"],
    59: ["Brighton line"],
    60: ["Three score","Blind 60","Five dozen"],
    61: ["Bakers bun"],
    62: ["Tickety boo","Turn on the screw"],
    63: ["Tickle me","Home ball"],
    64: ["The Beatles number","Red ra"],
    65: ["Old age pension","Stop work"],
    66: ["Clickety click","All the sixes","Quack quack"],
    67: ["Made in heaven","Argumentative number"],
    68: ["Saving grace","Check your weight"],
    69: ["The same both ways","Your place or mine?","Any way up","Either way up","Any way round","Meal for two","The French connection","Yum yum","Happy meal"],
    70: ["Three score and ten","Blind 70","Big O"],
    71: ["Bang on the drum","Lucky one"],
    72: ["A crutch and a duck","Six dozen","Par for the course","Lucky two"],
    73: ["Crutch with a flea","Queen B","Under the tree","Lucky three"],
    74: ["Candy store","Grandmamma of Bingo","Lucky four"],
    75: ["Strive and strive","Big Daddy","Granddaddy of Bingo","Lucky five"],
    76: ["Trombones","Seven n six","was she worth it?","Lucky six"],
    77: ["Sunset strip","All the sevens","Two little crutches","The double hockey stick","Lucky seven"],
    78: ["Heavens gate","Lucky eight"],
    79: ["One more time","Lucky nine"],
    80: ["Gandhi's breakfast","Blind 80","Eight and blank","There you go matey"],
    81: ["Stop and run","Corner shot"],
    82: ["Straight on through"],
    83: ["Time for tea","Ethel's Ear"],
    84: ["Seven dozen"],
    85: ["Staying alive"],
    86: ["Between the sticks"],
    87: ["Torquay in Devon"],
    88: ["Wobbly wobbly","All the eights"],
    89: ["Nearly there","All but one"],
    90: ["Top of the shop","Top of the house","Blind 90","As far as we go","End of the line"]
  }
  let phrases = phraseList[number];
  if(phrases.length > 1){
    return phrases[Math.floor(Math.random() * phrases.length)];
  } else {
    return phrases[0];
  }
}

/**
 * Generates a random number between 1-90
 *
 * @var  {Integer}
 */
export const getRandomBingoNumber = () => {
  return Math.floor(Math.random() * 90) + 1;
}

/**
 * Returns language code for use with the speech synthesis api
 *
 * @var  {String}
 */
export const getLanguageText = (text) => {
  switch (text) {
    case 'ar-SA':
      return 'Arabic (Saudi Arabia)';
    case 'cs-CZ':
      return 'Czech (Czech Republic)';
    case 'da-DK':
      return 'Danish (Denmark)';
    case 'de-DE':
      return 'German';
    case 'el-GR':
      return 'Greek (Greece)';
    case 'en':
      return 'English';
    case 'en-AU':
      return 'English (Australia)';
    case 'en-GB':
      return 'UK English';
    case 'en-IE':
      return 'English (Ireland)';
    case 'en-IN':
      return 'English (India)';
    case 'en-US':
      return 'US English';
    case 'en-ZA':
      return 'English (South Africa)';
    case 'es-AR':
      return 'Spanish (Argentina)';
    case 'es-ES':
      return 'Spanish (Spain)';
    case 'es-MX':
      return 'Spanish (Mexico)';
    case 'es-US':
      return 'Spanish (United States)';
    case 'fi-FI':
      return 'Finnish (Finland)';
    case 'fr-CA':
      return 'French (Canada)';
    case 'fr-FR':
      return 'French (France)';
    case 'he-IL':
      return 'Hebrew';
    case 'hi-IN':
      return 'Hindi (India)';
    case 'hu-HU':
      return 'Hungarian (Hungary)';
    case 'id-ID':
      return 'Indonesian';
    case 'it-IT':
      return 'Italian';
    case 'ja-JP':
      return 'Japanese';
    case 'ko-KR':
      return 'Korean (Korea)';
    case 'nb-NO':
      return 'Norwegian (Bokm?l) (Norway)';
    case 'nl-BE':
      return 'Dutch (Belgium)';
    case 'nl-NL':
      return 'Dutch (Netherlands)';
    case 'pl-PL':
      return 'Polish (Poland)';
    case 'pt-PT':
      return 'Portuguese (Portugal)';
    case 'pt-BR':
      return 'Portuguese (Brazil)';
    case 'ro-RO':
      return 'Romanian (Romania)';
    case 'ru-RU':
      return 'Russian (Russia)';
    case 'sk-SK':
      return 'Slovak (Slovakia)';
    case 'sv-SE':
      return 'Swedish';
    case 'th-TH':
      return 'Thai (Thailand)';
    case 'tr-TR':
      return 'Turkish (Turkey)';
    case 'zh-CN':
      return 'Chinese (S)';
    case 'zh-HK':
      return 'Chinese (Hong Kong)';
    case 'zh-TW':
      return 'Chinese (T)';
    default:
      return text;
  }
};

/**
 * Returns the default bingo ball display
 *
 * @return  {JSX}  JSX element
 */
export const getLogoBallDisplay = () => {
  return (
    <div className="ball-display white relative notranslate">
      <div className="content">
        <div className="ball-content">
          <img src={logo} alt="Lets Play Bingo Logo"/>
        </div>
      </div>
    </div>
  )
}
  
/**
 * Returns a bingo ball display using the selected ball object
 *
 * @return  {JSX}  JSX element
 */
export const getBallDisplay = (ball) => {
  return(
    <div className={"ball-display relative notranslate"}>
      <div className="content">
        <div className="ball-content">
          <div className="ball-number">{ball.number}</div>
        </div>
      </div>
    </div>
  )
}