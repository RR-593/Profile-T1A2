/*Variable elements created using terminal command 'echo |fortune -n 'short' >> ranFort.txt'
    then editing text in regex.
*/
var quotes = [
    'When you are at Rome live in the Roman style; when you are elsewhere live as they live elsewhere. <br>-- St. Ambrose',
    'Honesty\'s the best policy. <br>-- Miguel de Cervantes',
    'Where do you go to get anorexia? <br>-- Shelley Winters "During the race  We may eat your dust,  But when you graduate,  You\'ll work for us." <br>-- Reed College cheers',
    'You will not be elected to public office this year.',
    'YOW!!!  I am having fun!!!',
    'If you want me to be a good little bunny just dangle some carats in front of my nose. <br>-- Lauren Bacall',
    'Aberdeen was so small that when the family with the car went on vacation, the gas station and drive-in theatre had to close.',
    'Now I know someone out there is going to claim, "Well then, UNIX is intuitive, because you only need to learn 5000 commands, and then everything else follows from that! Har har har!"',
    '(Andy Bates in comp.os.linux.misc, on "intuitive interfaces", slightly defending Macs.)',
    'A father doesn\'t destroy his children. <br>-- Lt. Carolyn Palamas, "Who Mourns for Adonais?",    stardate 3468.1.',
    'Don\'t abandon hope: your Tom Mix decoder ring arrives tomorrow.',
    'I refuse to consign the whole male sex to the nursery.  I insist on believing that some men are my equals. <br>-- Brigid Brophy',
    'I guess some things never leave you. <br>-- Jack Handley, The New Mexican, 1988.',
    'While your friend holds you affectionately by both your hands you are safe, for you can watch both of his. <br>-- Ambrose Bierce, "The Devil\'s Dictionary"',
    'When I saw a sign on the freeway that said, "Los Angeles 445 miles," I said to myself, "I\'ve got to get out of this lane." <br>-- Franklyn Ajaye',
    '"Ada is PL/I trying to be Smalltalk. <br>-- Codoso diBlini',
    'Use an accordion.  Go to jail. <br>-- KFOG, San Francisco',
    '"You and I as individuals can, by borrowing, live beyond our means, but only for a limited period of time.  Why should we think that collectively, as a nation, we are not bound by that same limitation?" <br>-- Ronald Reagan',
    'A "practical joker" deserves applause for his wit according to its quality.',
    'Elephant, n.: A mouse built to government specifications.',
    'A LISP programmer knows the value of everything, but the cost of nothing. <br>-- Alan Perlis',
    'Don\'t interfere with the stranger\'s style.',
    'YOW!!  Now I understand advanced MICROBIOLOGY and th\' new TAX REFORM laws!!',
    'You will gain money by a speculation or lottery.',
    'No one becomes depraved in a moment. <br>-- Decimus Junius Juvenalis',
    'Dying is one of the few things that can be done as easily lying down. <br>-- Woody Allen',
    'Not every question deserves an answer.',
    'Time-sharing is the junk-mail part of the computer business. <br>-- H.R.J. Grosch (attributed)',
    'The trouble with eating Italian food is that five or six days later you\'re hungry again. <br>-- George Miller',
    'A clash of doctrine is not a disaster <br>-- it is an opportunity.',
    'He that bringeth a present, findeth the door open. <br>-- Scottish proverb.',
    'I know not how I came into this, shall I call it a dying life or a living death? <br>-- St. Augustine',
    'Gibble, Gobble, we ACCEPT YOU ...',
    'The Phone Booth Rule: A lone dime always gets the number nearly right.',
    'While there\'s life, there\'s hope. <br>-- Publius Terentius Afer (Terence)',
    'These PRESERVES should be FORCE-FED to PENTAGON OFFICIALS!!',
    'A song in time is worth a dime.',
    'Television has proved that people will look at anything rather than each other. <br>-- Ann Landers',
    'To undertake a project, as the word\'s derivation indicates, means to cast an idea out ahead of oneself so that it gains autonomy and is fulfilled not only by the efforts of its originator but, indeed, independently of him as well. <br>-- Czeslaw Milosz',
    'A day without orange juice is like a day without orange juice.',
    'A man either lives life as it happens to him, meets it head-on and licks it, or he turns his back on it and starts to wither away. <br>-- Dr. Boyce, "The Menagerie" ("The Cage"), stardate unknown',
    'All true wisdom is found on T-shirts.',
    'Your depth of comprehension may tend to make you lax in worldly ways.',
    'Freedom is something that dies unless it\'s used. <br>-- Hunter S.  Thompson',
    'In a closed society where everybody\'s guilty, the only crime is getting caught. In a world of thieves, the only final sin is stupidity. <br>-- Hunter S.  Thompson',
    'Politics is the art of controlling your environment. <br>-- Hunter S.  Thompson',
    '\'Crazy\' is a term of art; \'Insane\' is a term of law. Remember that, and you will save yourself a lot of trouble. <br>-- Hunter S.  Thompson',
    'As long as I\'m learning something, I figure I\'m OK - it\'s a decent day. <br>-- Hunter S.  Thompson',
    //ascii art
    ' ＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿<br>'+    　
    '|　Windows　　　　　　　　　　　　　　　　　　　[－][口][×]| |<br>'+
    '|￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣|<br>'+
    '|　　Windows has detected You are a great person. 　　　|<br>'+
    '|　　　Do you Agree?　　　　　　　　　　　　　　　　　　　　　|<br>'+
    '|　　　　＿＿＿＿＿＿　　　　＿＿＿＿＿＿＿　　　＿＿＿＿＿＿　　|<br>'+
    '|　　　　｜　Yes　　|　　　｜　　Yes　　｜　　|　　Yes　　| 　|<br>'+
    '|　　　　￣￣￣￣￣￣　　　　￣￣￣￣￣￣￣　　　￣￣￣￣￣￣　　|<br>'+
    '￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣'
]

function rf(){
    var ranNum = Math.floor(Math.random()*quotes.length)
    var displayRanNum = ranNum + 2
    document.getElementById('fortune').innerHTML = quotes[ranNum]
}



/* Add HTML snippits
Code taken from:
https://www.w3schools.com/howto/howto_html_include.asp
*/
function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      /*search for elements with a certain atrribute:*/
      file = elmnt.getAttribute("include-html");
      if (file) {
        /* Make an HTTP request using the attribute value as the file name: */
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
            /* Remove the attribute, and call this function once more: */
            elmnt.removeAttribute("include-html");
            includeHTML();
          }
        }
        xhttp.open("GET", file, true);
        xhttp.send();
        /* Exit the function: */
        return;
      }
    }
  }