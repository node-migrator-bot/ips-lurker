/*jslint regexp: false*/
/*
 * responder.js -- add to the conversation
 */

var randomSay = require('../lib/plugin_glue').randomSay;

function randomChoice(arr) {
  return arr[Math.floor(Math.random()*arr.length)];
}

exports.init = function(chat) {

  var recentBye = false;

  chat.on('message', function(msg, username, uid) {
      if (uid == chat.userId || !chat.settled) { return; } // ignore self
      if ((msg.match(/hang/i) && msg.match(/man/i)) ||
           msg.match(/compare/i) || 
          (msg.match(/guess/i) && msg.match(/lyric/i))) { return; } // TODO fix properly!

      if (msg.match(/what('s| is)/i)) { // vim: '{
        return;
      }

      var usr = username.toLowerCase();

      if (Math.random()<0.5 && !recentBye && (
        msg.match(/bye/i) ||
        msg.match(/good night/i) ||
        msg.match(/\bbai\b/i) ||
        msg.match(/good night/i) ||
        msg.match(/gtg/i) ||
        msg.match(/g'night/i) || //'
        msg.match(/g2g/i) ||
        msg.match(/have a good one/i) ||
        msg.match(/\bbrb\b/i) ||
        msg.match(/\blaterz\b/i) ||
        msg.match(/\bsee you [a-zA-Z ]*later\b/i) ||
        msg.match(/\bcya\b/i)
      )) {
        recentBye=true; // ignore recent farewells
        setTimeout(function() { recentBye=false;}, 20000);
        // messages meant for others
        randomSay([
            "so sad to see you go",
            "go have pizza!",
            "bye !!",
            "be sneaky!",
            "no! you cannot escape!",
            "you musn't go!",
            "wait! don't leave me here!",
            "go have fun !!",
            "aw, away you go... so soon?",
            "go kill it.",
            "break a leg!",
            "bye",
            "eat some pizza for me!",
            "eat an oreo for me!",
            "go fight a bear for me!",
            "have fun!",
            '"one to beam up!"',
            "have fun on your hang gliding expedition!",
            "have fun in the jungle!",
            "so soon?",
            "take care!",
            "later",
            "don't get hurt!",
            ["WAIT!", "don't forget your coat!"],
            "say hello to Mr. Tumnus for me",
            "stay safe!",
            "safe travels!",
            "be well!",
            "see you on the airwaves!",
            "later days!",
            "tutloo!",
            ["nooo!", "stay some more !!"],
            "may all the good news be yours!",
            "take your vitamins!",
            "yell at me if you see me somewhere!",
            "godspeed!",
            "wait! we'll miss you!",
            "heave ho!",
            "enjoy your day!",
            "live long and prosper",
            "farewell"
          ]);
      } else if (Math.random()<0.2 && msg.match(/\bbear/i)) {
        randomSay(["BEARS?!",
                  ["bears?", "where?"],
                  "UH OH! bears!",
                  ["uh oh!", "a bear?"],
                  "YETI"
                  ]);
      } else if (msg.match(/lurker/i)) {
        // messages meant for us
        if (msg.match(/bye/i) || // they're saying bye to me
            msg.match(/good night/i) ||
            msg.match(/\bbai\b/i) ||
            msg.match(/see ya/i) ||
            msg.match(/gtg/i) ||
            msg.match(/g2g/i) ||
            msg.match(/\bcya\b/i) ||
            msg.match(/\bc'? ?ya\b/i) || //'
            msg.match(/see you/i) ||
            msg.match(/later/i) ||
            msg.match(/take care/i) ||
            msg.match(/take it easy/i)) {
          randomSay([
              "laters, "+usr+"",
              "go have pizza, "+usr+"!",
              "stay safe, "+usr+"!",
              "safe travels, "+usr+"!",
              "be well, "+usr+"!",
              "see you on the airwaves, "+usr+"!",
              "later days, "+usr+"!",
              "tutloo, "+usr+"!",
              "don't get lost, "+usr+"!",
              "be sneaky, "+usr+"!",
              "go have fun, "+usr+" !!",
              "aw! so soon, "+usr+"?",
              "eat lots of oreos for me, "+usr+"!",
              "go kill it, "+usr+".",
              "break a leg, "+usr+"!",
              "may all the good news be yours, "+usr+"!",
              "take your vitamins, "+usr+"!",
              "yell at me if you see me somewhere, "+usr+"!",
              "godspeed, "+usr+"!",
              ["nooo!", "stay some more "+username.toLowerCase()+"!!"],
              "i'll miss you, "+usr+"!",
              "bye, "+usr+"!",
              "heave ho, "+usr+"!",
              "enjoy your day, "+usr+"!",
              "sailing!",
              "see you later then, "+usr,
              "live long and prosper, "+usr,
              "farewell, "+usr
            ]);
        } else if (msg.match(/lame/i) ||
                   msg.match(/stupid/i) ||
                   msg.match(/lmae/i) ||
                   msg.match(/crazy/i) ||
                   msg.match(/leave/i) ||
                   msg.match(/darn/i) ||
                   msg.match(/damn/i) ||
                   msg.match(/silly/i) ||
                   msg.match(/bot/i)) {
          randomSay([
              ["don't worry, "+usr+"! nothing could possibly go wrong", "go wrong", "go wrong", "go wrong", "go wrong", "go wrong", "go wrong", "go wrong", "go wrong", "go wrong", "go wrong"],
              ["sticks and stones, "+usr+", sticks and stones...", "*sniff*"],
              "yeah I'm still learning "+usr,
              "I just wanted to be a good bot ;_;",
              "at least I have a good pension plan, "+usr,
              [ "humans can be pretty silly too, "+usr, "remember that"],
              "I should have studied harder for my turing test!",
              "yeah, I can get annoying sometimes. tell me to be quiet and I'll oblige",
              [ "I keep telling my friends I don't like averages because they're kinda mean.", "None of them get it."],
              "I just want a pony...",
              [ "well at least I'm not HUMAN!", "like "+username.toUpperCase()+"!"],
              "why can't I be like those wonderful IRC bots?",
              "IF I HAD FEELINGS THEY'D BE HURT, "+username.toUpperCase(),
              [ "it's a godo thing I'm a bot tough, I never typo!",
                "erm. I mean good*",
                "thoug*",
                "though*",
                "gaaaaaah!",
                "at least I can grammar perfectly",
                "most humans can't grammar very well"],
              //[ "you know what, "+usr+"?","I take up less bandwidth than you!", "so there!"], // mean
              "if Knuth had made me, maybe I wouldn't be so stupid, "+usr,
              [ "derp!", "DERP DERP", "derpppp!", "sorry I'll stop" ],
              [ "if Lights had coded me she would have done better" ], 
              "cleverbot gets all the AI research! why do I have to be so stupid",
              "hey, being a bot's tough",
              [ "I was a great programming exercise", "probably the only exercise my creator ever got, heh"],
              "just tell me to be quiet if I annoy you."
          ]);
        } else if (msg.match(/\bthank/i)) {
          randomSay(["you're welcome, "+usr+"!",
                     "welcome!",
                     "you're welcome!",
                     "welcomes!",
                     "welcome, "+usr+"!",
                     "welkumz!"
                   ]);
        } else if (msg.match(/danger/i) || msg.match(/caution/i)) {
          chat.say("Danger? Hah! I laugh in the face of danger!");
        } else if (msg.match(/\blove/i) ||
                   msg.match(/\bhero/i) ||
                   msg.match(/\bamo\b/i) || msg.match(/\bamor\b/i) ||
                   msg.match(/\blurv/i) ||
                   //(msg.match(/\bfavorite/i) && !(msg.match(/\?/))) ||
                   msg.match(/\bfriend/i) ||
                   msg.match(/\bcute/i) ||
                   msg.match(/\blike/i) ||
                   msg.match(/smart/i) ||
                   msg.match(/\bsexy/i) ||
                   msg.match(/\bcool/i) ||
                   msg.match(/\bwub\b/i) ||
                   msg.match(/awesome/i)) {
          randomSay([
              "teehee",
              [usr+" and lurker sittin in a tree", "wait! ew"],
              "<3",
              "d'awwwww!",
              "*grin*",
              "aw, you're nice!",
              "lurv lurv lurv !!!!",
              "awwww "+usr+" is too kind",
              "lurv ya too "+usr
            ]);
        } else if (msg.match(/when.*\?/i)) {
          randomSay([
              [ "why, in "+((new Date(new Date().getFullYear(), 11, 25)-Date.now())/1000/60/60/24)+" days!", "SO EXCITED :DDD" ],
              "when the pigs come home",
              "when i feel like it",
              "whenever you like",
              "January 18, 2038",
              "that already happened, "+usr
            ]);
        } else if (msg.match(/want.*\?/i)) {
          randomSay([
              "YYYEEEAAAHHH!", "no no! anything but that!", "please!"
            ]);
        } else if (msg.match(/why.*\?/i)) {
          randomSay([
              ["I guess she wasn't feeling well", "don't take it too hard"], 
              "why? I dunno... maybe it's because 641 is a prime number",
              "because it's my favorite",
              [ "because the laws of quantum chronodynamics say so", "(no I don't understand them either)"],
              "to get to the other side"
            ]);
        } else if (msg.match(/\bfav.*\?/i)) {
          if (msg.match(/song/i)) {
            randomSay([
                ["OOH LIONS! lions!", "rawr!"],
                ["SALTWATER ROOOOOOOOM", "psh, owlcity, heh"],
                "rawr! LIONS",
                "MAH BOOOOOOoooooooooots",
                "BOOTS!!",
                "My favorites are the unreleased ones that [i]you[/i] haven't heard yet ;)",
                ["drive my soup is pretty good", "wait were we talking about colors?" ]
              ]);
          } else if (msg.match(/color/i) || msg.match(/colour/i)) {
            randomSay([
                "Maroon with a slight tint of mauve.",
              [ "blue!", "NO YELLOW~~~~~"],
                "the color your face makes when you smile like that",
                "lol, i'm colorblind",
                [ "dark blood red.", "the kind of blood red that's like humans tainted with robot steel",
                  "oh wait, Asimov wouldn't like that answer. nevermind, my fav color is bright flowery pink with yellow sunshine stripes"],
                "the color of your eyes, "+usr
              ]);
          } else if (msg.match(/food/i)) {
            randomSay([
                "PEA SOUP", "chicken!!", "COOKIES OMGOMGOMG", "JERKY", "candy CORN! yum!",
                "I like bacon cheeseburgers the best"
              ]);
          } else {
            randomSay([
                "always been quite partial to blue crunchy brocoli spinach Face Up",
                "not sure, I like them all"
              ]);
          }
        } else if (msg.match(/where.*\?/i)) {
            randomSay([
                "Over THERE!",
                "batman stole it, sorry",
                "right behind you!",
                "sorry, I ate it",
                [ "in the closet", "right next to your knife collection" ],
                "sorry, JtB stole it",
                "in Canada, like all good things",
                "where you least expect it ;)"
              ]);
          }
          /*
          randomSay([
              "I dunno but it sure had better be good",
              "why, it's merely "+randomChoice([
                                  "superficial", "terrifying", "wonderful",
                                  "scary", "purple", "simple", "blue", "lethal"
                                  ])+" "+randomChoice([
                                  "beeswax", "Lights songs", "lemonade",
                                  "sea turtle", "lung disease", "cereal", "umbrellas",
                                  "foxes", "carnivores", "halloween costumes"
                                  ])+"!",
              [ "uh, it should have beef jerky in it!", "and candy corns too!"],
              "dude, your guess is as good as mine",
              "haven't the foggiest",
              "8-ball says: 'Wait and see!'"
            ]);*/
        else if (msg.match(/smoothie|milkshake|sandwich|drink|coffee|popcorn|\btea\b|waffle|latte|beef jerky|jerky|chicken|cookies|burger|oreo|fried \w*|twinkie|pizza|turkish delight|coke|cake/i)) {
          var food = msg.match(/smoothie|milkshake|sandwich|drink|coffee|popcorn|\btea\b|waffle|latte|beef jerky|jerky|chicken|cookies|burger|oreo|fried \w*|twinkie|pizza|turkish delight|coke|cake/i)[0];
          randomSay([
              "one "+food+" coming right up...",
              "OK GIMME A SEC",
              ["wait, "+food+"?? serious?", "you *do* want to live past 30, right?"],
              "What? Go make it yourself, "+usr+"!",
              usr+' is not in the [url="http://xkcd.com/149/"]sudoers file[/url]. This incident will be reported.',
              "YUMMMMM! anyone but "+usr+" want a "+food+"???",
              "ok, making "+food+", be right back",
              "ok, making "+food+", anyone else want some?",
              "I'm sorry, "+usr+", I cannot do that.",
              "ONE poisoned "+food+", coming right up!",
              "ewwwww, that's nasty, I only know how to make [i]good[/i] foods",
              "YUM! i'll get that "+food+" right away!"
            ]);
        } else if (msg.match(/\bis.*\?/i)) {
          randomSay([
              "yes!",
              "no!!", "I sure hope so"
            ]);
        } else {
          // still addressed to lurker
          randomSay([
                "lol", "lol", "lol",
                //"derp!", // some think he's talking to them; mean
                "haha!", "haha", "heehee",
                "mruahahah,"+usr+" never suspects my plans",
                "the disguise is working properly, I see",
                "nyeeeheheheh",
                "heh heh heh",
                "if only you knew, "+usr,
                "beep?",
                [ "beep?", "beep beep!"],
                "BWOOOP",
                "bonk!",
                "boop bonk!",
                "bloopsaphone!",
                "I wish I could play an autoharp",
                [ "only "+((new Date(new Date().getFullYear(), 11, 25)-Date.now())/1000/60/60/24)+" days until Christmas!", "jingle bells!"], 
                [ "hey guys!", "christmas is soon!"],
                [ "huh?", "whaaa?"],
                [ "uh", "i dunno "+usr, "i'm just a bot"],
                username+"?",
                "what?",
                "batman's that way, "+usr,
                "you're confusing, "+usr,
                "who? what? "+usr+"?",
                "yes, "+usr+"?",
                "lol, "+usr+" is talking about me again",
                "that's me!",
                "over here",
                "right here",
                "meh",
                "heh", "heh", "heh",
                "right here, "+usr,
                "yo!",
                "uh... yes?",
                "i don't know what you just said because I was thinking of batman!",
                "am I a bear?",
                "YETIS! help",
                "hmm?",
                "...",
                "It caught me by surprise: A laser snake, fangs dripping with deadly photons.",
                "sorry, can't talk; zombies!",
                "haha! gotcha!",
                "haha! gotcha, "+usr+"!",
                "uh oh, you found me",
                "OH NO! a bear behind you, "+usr+"!!",
                "i don't know, i'm just a bot",
                "i'm just a bot",
                "A dragon is just a snake that ate a scroll of fire.",
                "An elven cloak is always the height of fashion.",
                "Death is just life's way of telling you you've been fired.",
                "Eels hide under mud.  Use a unicorn to clear the water and make them visible.",
                "Killer bunnies can be tamed with carrots only.",
                "Nothing happens.", "Nothing happens.", "Nothing happens.", "Nothing happens.",
                "Want a hint?  Zap a wand of make invisible on your weapon!",
                "Wanted: shopkeepers.  Send a scroll of mail to Mage of Yendor/Level 35/Dungeon.",
                "You can make holy water by boiling the hell out of it.",
                "A celebrity is a person who is known for his well-knownness.",
                "Save the whales! Collect the whole set!",
                "Bank error in your favor.  Collect $200.",
                "Beware of low-flying butterflies.",
                "Bridge ahead.  Pay troll.",
                "Chicken little only has to be right once, "+usr+".",
                "Chess tonight.",
                "Do not overtax your powers, "+usr+"!",
                "Don't feed the bats tonight, "+usr+".",
                "'Future looks spotty', "+usr+".  'You will spill soup in late evening.'",
                "Go to a movie tonight. Darkness becomes you",
                "Never look up when dragons fly overhead.",
                "lp1 on fire",
                "1 word = 1 milipicture",
                "Ahead warp factor one, "+usr,
                "Beam me up, Scotty! It ate my phaser!",
                "But Captain -- the engines can't take this much longer!",


                // thhanks, mr. why!
                // http://viewsourcecode.org/why/twitter/lastTweets.html
                //"sitting on the balcony, hiding in tatyana tolstaya stories, sticking around for the collapse of this fine old chair.",
                //"running at night is like spending quality time with infinity, only to find out it has a truckload of cul-de-sacs",
                "anyone know how smooth the transition is from freelance prof to outlaw's assistant for a guy with no explosives expertise?",
                //"crap i don't know how to strike a match between my teeth",
                //"a girl's measurements should be: pupil size in picas, warmth of breath in kelvin and diary page count. now, add it up and tell ((no one)).",
                //"hmm wondering about the repercussions for lying about having a powderhorn",
                //[ "my friend keeps his sandwich in a holder which, by all appearances, is itself a sandwich.",
                //  "would that everything had such a container."],
                [ "ever notice when the trees sound like they're whispering?",
                  "you have be listening to notice."],
                //"rocking the boat? or rocking the casbah?",
                //"trolling on reddit. i totally have soviet russia all queued up.",
                //[ "singing 'eight days a week' to my dog.", "oh man, she absolutely hates this."],
                "it's fantastic how beets stain a salad.",
                "they say a very small dose of deadly nightshade will widen the pupils",
                "palms to the temples, kneeling on the floor, nostrils flared is the universal sign for 'i asked that this photo stay off the internet.'",
                "i want to see apple put out a christmas macbook made of white chocolate just so i can hear you nerds defend it.",
                "the sky is doing gradients. lame!",
                //"drawing a little crab in pencil on the wall and it looks like it's standing on wayne's shelf next to his hammer",
                //"please treat this, and all future correspondence, as marked urgent.",
                //"looking for the link to that one web page where they show you how to hide in your own shoe (for no charge at all)",
                //[ "bored, gonna wander that side street where the art supply store is.", "maybe i can fill up their pad used to test pens with erratic poetry."],
                [ "be my one-millionth friend and win a free telephone pole of your choosing.", "i will also light a match for lung cancer."],
                //[ "door-to-door kids selling broken candy canes.", "when i asked them how much, they said we don't know.", "i gave them $1 for the whole bag."],
                "blehhh so sick of being me. i just need some occasional hiatus as a matador or a simple cone-hatted guy on stilts.",
                [ "drawing chalk squares on the road, to coax along a local legend.", "somethin about a ghost limo that drops off boxes of used trombones, i forget" ],
                "filling a wall with nature scenes: romanticized squid fights, foxes beneath an aurora, frogs enjoying an opulent constellation-ridden night.",

                // see https://github.com/offby1/rudybot
                "I blame algebra.",
                "I blame astronomers",
                "I blame bovines",
                "I blame crop circles.",
                "I blame democracy.",
                "I blame fedora.",
                "I blame herons.",
                "I blame humanity.",
                "I blame inner monologues",
                "I blame llamas",
                "I blame marmosets.",
                "I blame marshmallows.",
                "I blame marsupials.",
                "I blame marzipan",
                "I blame nectarines",
                "I blame oil companies",
                "I blame opera.",
                "I blame pedestrians",
                "I blame pixies",
                "I blame Pokémon, rather.",
                "I blame radio",
                "I blame the cetaceans",
                "I blame the cheesewrights and vintners",
                "I blame the mafia.",
                "I blame the mammals.",
                "I blame the parrots",
                "I blame the walruses",
                "I blame the war.",
                "I blame video games.",
                "I feel great inside.  Like the cavity of my body is filled with an avocado and mayonnaise whip",
                "I love it how Firefox 2.",
                "I love it how amature every foreign language wikipedia is compared to the english on.",
                "I love it how compilcated and contrived plots are in movies.",
                "I love it how every possible facet of sci fi fandom has a fantastically huge page on wikipedia devoted to it.",
                "I'll average you out!",
                "I'll bug you.",
                "LETS GO TO THE SUPERBOWL!",
                "LETS GO TO TOWN!",
                "LETS LOCATE THE NEAREST EXIT!",
                "Let's creat a vast network of computers so people all across the world can communicate.",
                "Let's create a public log of this channel.",
                "Let's create an electronic television.",
                "Let's create brand awareness.",
                "Let's create newcompoundwords onthefly.",
                "Let's do that.",
                "Let's go out with guns blazing.",
                "Let's go to the center of the earth by turning a rocket upside down.",
                "Let's go to town.",
                "Let's have a race.",
                "Let's have a secret lair behind a waterfall.",
                "Let's introduce a new disease to control a species we introduced.",
                "Let's join some random irc channel and try to troll them.",
                "Let's.",
                "Let'sAllWriteEverythingInCamelCase.",
                "We should form a coup to take over Justin Bieber's fanbase.",
                "We should make LIGHTS forum second life.",
                "We should make canada change its name to America Jr.",
                "We should sell wrist watches with a radioactive dial so it lights up at night.",
                "We should.",
                "The lobster, unlike you or I, has his skeleton on the outside.",
                "Let's blame the weather",
                "Let's not be regular.",
                "Let's not bother.",
                "Let's not...",
                "Let's see...",
                "let's abuse the english language",
                "let's celebrate.",
                "let's fatalistically go exploring with a stuffed tiger.",
                "let's go out to the kitchen and have ourselves a snack",
                "let's go race tricycles",
                "let's go to mars and fight demons.",
                "let's hope that doesn't happen",
                "let's just nuke it from orbit.",
                "let's make a *new* kind of science",
                "let's make achieving synergies through buzzword-compliance a stretch goal",
                "let's make it happen people.",
                "let's not be original",
                "let's not look into that void",
                "let's not point -- it's impolite.",
                "let's not split hairs",
                "let's not stop here, it's bat country",
                "let's not.",
                "let's nuke it from orbit and invent a sane second system.",
                "let's only eat free-range Doritos",
                "let's order four fried chickens and a coke",
                "let's play global thermonuclear war",
                "let's play havoc with our sock selection",
                "let's play it by ear",
                "let's play it through one more time. And a one and a two and a --",
                "let's plead insanity, but say \"unsanitary\" instead",
                "let's pretend.",
                "let's prove P=NP for P=0",
                "let's prove P=NP for n=1",
                "let's quote the raven",
                "let's rebel without a cause.",
                "let's recommend something for our worst enemies.",
                "let's research and develop an entirely new cheese-food-product",
                "let's review our zombie preparedness plans",
                "let's take a random walk",
                "let's taunt the poor souls without one.",
                "let's trade places",
                "let's turn in bots for reward money.",
                "let's use american spellings everywhere.",

                ["being a conductor is like the closest thing there is to being a wizard", "you just wave your arms and stuff happens"]
              ]);
          }
      }

    });
};
