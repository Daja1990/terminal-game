// Handle arrays of gameboard words
let easyone = ['STOP' ,'SHOT' ,'SWAT' ,'WOMP' ,'SHOP'];
let easytwo = ['HARD' ,'HIDE' ,'HINT' ,'NAME' ,'HAND'];
let easythree = ['TEAR' ,'WANT' ,'FOND' ,'SETS' ,'SEND'];
let mediumone = ['OXBOW'  ,'SATIN' ,'TEPID' ,'RISEN' ,'FOXED' ,'BALLY' ,'HUBBY' ,'GROUP' ,'ROILS' ,'CRUDE' ,'MUTES' ,'WHALE' ,'HOWLS' ,'FIRED' ,'SMART'];
let mediumtwo = ['SPIES' ,'JOINS' ,'TRICK' ,'TRIED' ,'SKIES' ,'TERMS' ,'THIRD' ,'FRIES' ,'PRICE' ,'TRIES' ,'TRITE' ,'TANKS' ,'THICK' ,'TRIBE' ,'TEXAS'];
let mediumthree = ['APPLE' ,'BUILT' ,'TITAN' ,'BLUSH' ,'DIXIE' ,'VERSE' ,'WHERE' ,'CLYDE' ,'FLAKE' ,'ROMAN' ,'ALOFT' ,'STAKE' ,'CREEP' ,'MINGE' ,'HARPE'];
let hardone = ['TROUBLES' ,'RUTHLESS' ,'SATURDAY' ,'REFUGEES' ,'REPELLED' ,'HUMOROUS' ,'SUNDRIES' ,'RADSUITS' ,'PROVIDES' ,'REMUSTER' ,'REVERTED' ,'RECORDED' ,'REQUIRES' ,'REWARDED' ,'FLOURISH' ,'SUPPLIED' ,'RESULTED'];
let hardtwo = ['BREAKING' ,'CREATING' ,'GUARDIAN' ,'DOCUMENT' ,'AGREEING' ,'GREENERY' ,'DYNAMITE' ,'FACILITY' ,'TRIPPING' ,'STEMMING' ,'LOYALIST' ,'RUSTLING' ,'CHAMBERS' ,'BREAKERS' ,'BRAWLING' ,'THINKING' ,'CLEANING'];
let hardthree = ['MEETING' ,'SENDING' ,'SETTING' ,'WARRIOR' ,'OFFLINE' ,'WRITING' ,'WARNING' ,'AFFRONT' ,'WISHING' ,'STERILE' ,'MELTING' ,'DANCING' ,'LETTING' ,'TESTING' ,'ACQUIRE' ,'HEADING' ,'CALLING' ,'SELLING' ,'WINDING' ,'WELCOME'];
let easy = [easyone, easytwo, easythree];
let medium = [mediumone, mediumtwo, mediumthree];
let hard = [hardone, hardtwo, hardthree];
let randomsigns = ['< ', '> ', '& ', '! ', '[ ', ' ]', '( ', ') ', '? ', '* ', '? ', '@ ', '$ ', '+ ', '- ', '# ', '/ ', '^ ', '_ ', '; '];
let allowance = ['( . / ) ', '< # ! @ > '];
let wordremove = ['[ # ? - ] ', '{ + _ * } '];
let life = 4;
const numbercount = document.querySelector(".numbercount");
const lifecount = document.querySelector(".lifecount");
const lifeboxes = document.querySelector(".lifeboxes");
const wintxt = document.querySelector(".wintxt");
const pctxt = document.querySelector(".pctxt");
const pclocked = document.querySelector(".pclocked");
const grid = document.querySelector(".grid");
const topblock = document.querySelector(".top");
const introtxt = document.querySelector(".introtxt");
const introbox = document.querySelector(".introbox");
let textPosition = 0; 
let speed = 5;

// Startup text typewriter effect
var quoteArray = [`WELCOME TO ROBCO INDUSTRIES (TM) TERMLINK <br/><br/> >SET TERMINAL/INQUIRE <br/><br/> RIT V300 <br/><br/> >SET FILE/PROTECTION=OWNER:RWED ACCOUNTS.F <br/> >SET HALT RESTART/MAINT <br/><br/> Initializing Robco Industries(TM) MF Boot Agent v2.3.0 <br/> RETROS BIOS<br/><br/> RBIOS-4.02.08.00 52EE5.E7.E8<br/> Uppermem: 64KB<br/> Root(5A8)<br/> Maintenance Mode<br/><br/>>RUN DEBUG/ACCOUNTS.F<br/><br/> <div>CHOOSE DIFFICULTY:</div><br/> <div class="startup" onclick="easydiff();">Easy</div><br/><br/> <div class="startup" onclick="mediumdiff();">Medium</div><br/><br/> <div class="startup" onclick="harddiff();">Hard</div><br/><br/> <div id="help" class="help" onclick="help();">How To Play</div><br/>`];

function typewriterbegin(){
document.querySelector("#intro").innerHTML = quoteArray[0].substring(0, textPosition) + '<span>\u25AE</span>';
if(textPosition++ != quoteArray[0].length)
setTimeout(typewriterbegin, speed);
}
window.addEventListener("load", typewriterbegin);

// Handle difficulties + params
function easydiff(){
let valueToUse = easy[Math.floor(Math.random() * easy.length)];
const random = valueToUse[Math.floor(Math.random() * valueToUse.length)];
let charnbr = 30;
runterminal(valueToUse, random, charnbr);
}

function mediumdiff(){
let valueToUse = medium[Math.floor(Math.random() * medium.length)];
const random = valueToUse[Math.floor(Math.random() * valueToUse.length)];
let charnbr = 28;
runterminal(valueToUse, random, charnbr);
}

function harddiff(){
let valueToUse = hard[Math.floor(Math.random() * hard.length)];
const random = valueToUse[Math.floor(Math.random() * valueToUse.length)];
let charnbr = 25;
runterminal(valueToUse, random, charnbr);
}

//Handle my help modal
var modal = document.getElementById("helpmodal");
var span = document.getElementsByClassName("close")[0];
function help() {
 modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
  modal.style.display = "none";
  }
}

// Hide all elements, display introbox
function hide(){
numbercount.style.display = "none";
lifeboxes.style.display = "none";
lifecount.style.display = "none";
pctxt.style.display = "none";
topblock.style.display = "none";
grid.style.display = "none";
introtxt.style.display = "none";
introbox.style.display = "inline-block";
}

// Blackscreen onclick power button
function blackout(){
let element = document.getElementById("blackout");
element.classList.toggle("blackscreen");
}

function runterminal(valueToUse, random, charnbr) {
// Typewriter effect
pcArray = [`<p>ROBCO INDUSTRIES (TM) TERMLINK PROTOCOL</p><br />
<p>ENTER PASSWORD NOW</p>`];
let textPosition = 0; 
let speed = 10;

function typewriter(){
document.querySelector("#pctxt").innerHTML = pcArray[0].substring(0, textPosition);
  if(textPosition++ != pcArray[0].length)
  setTimeout(typewriter, speed);
}typewriter();

// Concats randomsigns array together a number of times
const makeRepeated = (arr, repeats) =>
[].concat(...Array.from({ length: repeats }, () => arr));
let signsconcat = makeRepeated(randomsigns, charnbr);

// Concatinates the randomly picked array together with the random symbols
let concater = valueToUse.concat(signsconcat, allowance, wordremove);

// Randomize array
const shuffle = arr => 
[...arr].reduceRight((res,_,__,s) => 
  (res.push(s.splice(0|Math.random()*s.length,1)[0]), res),[]);
valueToUse = shuffle(valueToUse);
concater = shuffle(concater);

// Filter the Random word out of array
var filtered = valueToUse.filter(function(value){ 
return value != random;
});

const wordtoremove = filtered[Math.floor(Math.random() * filtered.length)];

// Filters next word out from filtered array that is not wordtoremove
var filteredtwo = filtered.filter(function(value){ 
return value != wordtoremove;
});

const wordtoremovetwo = filteredtwo[Math.floor(Math.random() * filteredtwo.length)];


// Split the concatinated array in half to place in two columns
const half = Math.ceil(concater.length / 2);    
const firstHalf = concater.slice(0, half);
const secondHalf = concater.slice(-half);

// Show playscreen
introbox.style.display = "none";
topblock.style.display = "block";
grid.style.display = "grid";

lifecount.innerHTML = life + `<p>ATTEMPT(S) LEFT</p>`;
lifeboxes.innerHTML = 
`<div id="box1"class="boxOne"></div>
<div id="box2"class="boxTwo"></div>
<div id="box3"class="boxThree"></div>
<div id="box4"class="boxFour"></div>`;

document.getElementById("words").classList.add("typewriter");
document.getElementById("words2").classList.add("typewriter");
document.getElementById("c1").classList.add("typewriter", "show");
document.getElementById("c3").classList.add("typewriter", "show");

for (var c in firstHalf) {
// Create Elements within 'words' div each with same classname and an ID matching its name
let appendFirstHalf = document.getElementById('words');
let newElement = document.createElement('div');
newElement.id = firstHalf[c]; newElement.className = "wordindex";
newElement.innerHTML = firstHalf[c] + ' ';
appendFirstHalf.appendChild(newElement);

let appendSecondHalf = document.getElementById('words2');
let newElement2 = document.createElement('div');
newElement2.id = secondHalf[c]; newElement2.className = "wordindex";
newElement2.innerHTML = secondHalf[c] + ' ';
appendSecondHalf.appendChild(newElement2);
}

// Add eventlistener to created divs that fires the printDetails function checking if it is the right clicked word
var items = document.getElementsByClassName('wordindex');
for (var i = 0; i < items.length; i++) {
items[i].addEventListener('click', printDetails);
}

// Function firing after a character is clicked on game screen
function printDetails(e) {
// If else regarding if the random win word is chosen or not / if a dud word is chosen
if (this.id === random || this.id === '( . / ) '  || this.id === '< # ! @ > ' || this.id === '[ # ? - ] ' || this.id === '{ + _ * } '){

} else {
life -= 1;

if(life > 0){
document.getElementById('box'+life).style.display = "none";
}
}

// Checks if you are out of life
if (life === 0){
document.getElementById('words').style.display = "none";
document.getElementById('words2').style.display = "none";
document.getElementById('box4').style.display = "none";
document.getElementById('pctxt').style.display = "none";

let lossArray = [`<p>TERMINAL LOCKED</p> <br/><br/> <p>PLEASE CONTACT AN ADMINISTRATOR</p><br/><br/> <p>The right word was: ${random}</p><br/><br/> <div class="startup" onclick="restart();">Try Again</div>`];
let textPosition = 0; 
let speed = 15;

// Typewriter effect for loss text
function typewriterLoss(){
document.querySelector("#pclocked").innerHTML = lossArray[0].substring(0, textPosition) + '<span>\u25AE</span>';
if(textPosition++ != lossArray[0].length)
setTimeout(typewriterLoss, speed);
} typewriterLoss();
hide();
}

var str1 = random;
var str2 = this.id;

const getSameLetters = (a, b) => {
// MinLength iterates until end of smallest words (Math.min).
const minLength = Math.min(str1.length, str2.length);
let sameLetters = 0
// Iteration from 0 to min length, each loop cycle compares letters on same index from a and b strings. If it matches, increment and continue loop
for (let i = 0; i < minLength; i++) {
  if (a[i] === b[i]) {
    sameLetters++
    }
  }
return sameLetters
}

numbercount.innerHTML = this.id + `<br/><p>Entry Denied.</p><br/>` + getSameLetters(str1, str2) + "/" + str1.length + " correct";
lifecount.innerHTML = life + `<p>ATTEMPT(S) LEFT</p>`;

// If winning condition is met
if(getSameLetters(str1, str2) === str1.length){
let lossArray = [`<p>PASSWORD CORRECT</p> <br/><br/> <p>Congratulations, you have successfully hacked the terminal!</p><br/><br/> <p>The right word was: ${random}</p><br/><br/> <div class="startup" onclick="restart();">Try Again</div>`];
let textPosition = 0; 
let speed = 15;

function typewriterLoss(){
document.querySelector("#pclocked").innerHTML = lossArray[0].substring(0, textPosition) + '<span>\u25AE</span>';
  if(textPosition++ != lossArray[0].length)
  setTimeout(typewriterLoss, speed);
} typewriterLoss();
hide();
}

function removeword(){
document.getElementById(wordtoremove).innerHTML = `. . . .`;
numbercount.innerHTML = `<p class="allowance">Dud removed.</p>`;
}

function removewordtwo(){
document.getElementById(wordtoremovetwo).innerHTML = `. . . .`;
numbercount.innerHTML = `<p class="allowance">Dud removed.</p>`;
}

// Rules for each dud
if (this.id === '[ # ? - ] '){
removeword();
  if (document.getElementById("[ # ? - ] ")) {
  document.getElementById("[ # ? - ] ").id = "[ # ? - ]";
  } else {
  document.getElementById("[ # ? - ]").id = "[ # ? - ] ";
  }
}

if (this.id === '{ + _ * } '){
  removewordtwo();
  if (document.getElementById("{ + _ * } ")) {
  document.getElementById("{ + _ * } ").id = "{ + _ * }";
  } else {
  document.getElementById("{ + _ * }").id = "{ + _ * } ";
  }
}

// Allowance changing to dots after spent
if (this.id === '< # ! @ > '){
newhp();
  if (document.getElementById("< # ! @ > ")) {
  document.getElementById('< # ! @ > ').innerHTML = `< # ! @ >`;
  document.getElementById("< # ! @ > ").id = "< # ! @ >";
  } else {
  document.getElementById("< # ! @ >").id = "< # ! @ > ";
  }
}

if (this.id === '( . / ) '){
newhp();
  if (document.getElementById("( . / ) ")) {
  document.getElementById('( . / ) ').innerHTML = `( . / )`;
  document.getElementById("( . / ) ").id = "( . / )";
  } else {
  document.getElementById("( . / )").id = "( . / ) ";
  }
}

function typewriterWin(){
document.querySelector("#pclocked").innerHTML = lossArray[0].substring(0, textPosition) + '<span>\u25AE</span>';
  if(textPosition++ != lossArray[0].length)
  setTimeout(typewriterWin, speed);
} typewriterWin();
hide();
}
}

function newhp(){
life = 4;
document.getElementById('box1').style.display = "inline-block";
document.getElementById('box2').style.display = "inline-block";
document.getElementById('box3').style.display = "inline-block";
document.getElementById('box4').style.display = "inline-block";
lifecount.innerHTML = life + `<p>ATTEMPT(S) LEFT</p>`;
numbercount.innerHTML = `<p class="allowance">Allowance <br/>replenished.</p>`;
}

//Restart function for game
function restart(){
location.reload();
}