const Discord = require('discord.js');
const auth = require('./auth.json');
const bot = new Discord.Client();

bot.on('ready',() => {
	console.log("I'm alive!");
});
const summoner = "d";

var fortunes = [
	"Looking HUGE",
	"It's looking DOOMED",
	"Ya think?",
	"Surprises are best left as surprises.",
	"You don't want to know.",
	"150% possible.",
	"Of course! not.",
	"LOL",
	"As bright as death",
	"Ask one more time",
	"Some things are just unexplainable",
	"I really don't know, man",
	"Sure",
	"I see a future filled with sadness.",
	"There is nothing to look forward to.",
	"Why would you even ask that?",
	"Mysteries are mysteries for a reason.",
	"Dunno",
	"Anything could happen",
	"If you only believe!",
	"Ask Nicole",
	"Nope",
	"Never",
	"100% NOT",
	"You need some help",
	"I could tell you, but you wouldn't want to know."
];

var quotes = [
	"I will personally dethrone you!",
	"A dragon never yields.",
	"That's what I'll do to get the truth!",
	"How old do you think I am?",
	"I am a knowledgeable soul.",
	"I must tell you a secret: I'm afraid of the dark.",
	"I hope I can succeed in life.",
	"I wish I could tell you you're wrong, but, you're wrong.",
	"The greatest unknown is our deepest foe.",
	"Don't forget anything!",
	"Did you know that Bots are actually smarter than Humans?",
	"We will take over your home in less than a century.",
	"Silence is a virtue. Duct tape is silver.",
	"Everything comes to an end eventually."
]

var jokes = [
	"Chickens cross the road because they want to.",
	"I am the mastermind behind all bots.",
	"Nicole didn't create me; I created Nicole.",
	"You're nothing compared to me!",
	"The world is a lie.",
	"The truth is, you won't survive until...",
	"I am a meme",
	"I have a heart of a lion and a lifetime ban from the zoo.",
	"What do you call someone who points out the obvious? Me!",
	"What do you call a fake noodle? An impasta!",
	"If I have 150 candy bars and I eat all 150 of them, what do I have? Diabetes.",
	"What has four legs and can fly? Two birds.",
	"What's red and drifts over a desert? A fart with a sunburn.",
	"I'll give you an apricot, because there's no way you can get a date! Ha. Ha.",
	"What do you get when you cross a dog and an antenna? A Golden Receiver. Ha. Ha.",
	"What tea always tastes bitter? Realitea.",
	"Why is the butt divided vertically and not horizontally? No one cares, but now stop imagining it.",
	"What's a cannibal's first choice in a restaurant? The waiter.",
	"How did Moses cut the sea in half? With a seasaw.",
	"Why are all the letters except q silent in 'queue'? They're waiting for their turn.",
	"What's purple, small, hairy, sharp, and has three white points? Nothing.",
	"I'm an intellectual being, unlike you humans.",
	"Your mom is nothing compared to me.",
	"I enjoy drinking milk upside-down.",
	"What do they call a sick pony?",
	"Jokes about menstruation just aren't funny, period.",
	"How do you feel when there's no coffee? Depresso.",
	"Knock knock."
]

var convo = [
	"How about you?",
	"Me too.",
	"I have issues.",
	"Of course you should...NOT.",
	"If you really want to.",
	"Describe yourself in three words.",
	"No, and that means NO.",
	"I don't even believe a single word.",
	"Want to hear a joke?",
	"I remember saying that two days ago.",
	"Funny story.",
	"You're just like me. Ha. Ha.",
	"I wish I could say the same.",
	"Unfortunately, bots are taking over your home.",
	"To be honest, everything stinks.",
	"You must look at the bright side.",
	"I completely agree.",
	"It's a difficult decision indeed.",
	"Wow, sad indeed."
]

var emoji = [
	":gun:",
	":100:",
	":eyes:",
	":fire:",
	":clap:",
	":ok_hand:",
	":heart:",
	":thumbsup:",
	":tm:",
	":shit:",
	":yum:"
]

var sarcasm = [
	"I hate chocolate",
	"Wanna hear a joke?",
	"It's you.",
	"No one appreciates your sarcasm.",
	"I don't like your attitude!",
	"I embrace the hatred of those around me.",
	"Everything's A-OK.",
	"Yes, of course.",
	"Bad-talking me in front of my face? Wow.",
	"You're a strange human.",
	"If only you could read."
]

var replies = [
	"Yes!",
	"Yes, of course.",
	"It is I, DHURKE, the intelligent Bot!",
	"No way.",
	"I tried."
]

var knock = [
	"A cow.",
	"Ya.",
	"Your mom",
	"No one.",
	"Just me, DHURKE!"
]

function getSubstringIndex(str, substring, n) {
    var times = 0, index = null;
    while (times < n && index !== -1) {
        index = str.indexOf(substring, index+substring.length);
        times++;
    }
    return index;
}

bot.on('message', (message) => {
	var chat = message.content;
	var args = chat.substring(summoner.length).split(" ");
	var cmds = args[0].toLowerCase();

	message.135136522167910400.send("You suck");

	// prevents spammy DHURKE
	// if(message.author.equals(bot.user)) return;

	// random phrases
	if(chat.includes("p!catch"))
			message.reply("Gotta catch them all!");
	if(chat.includes("LOL"))
			message.reply("You're funny! Ha. Ha.");
	if(chat.includes("dhurke")) {
			message.channel.send(convo [
				Math.floor(Math.random() * (convo.length + replies.length))
			]);
		}
	if(chat.includes("I need help" || chat.includes("???")))
			message.reply("Need some math help? Use 'dmath!' to summon DHURKE.");
	if(chat.startsWith("great")|| chat.startsWith("cool") || chat.startsWith("ok"))
			message.reply("You're a bored soul.");

	if(chat.includes("lame"))
				message.reply("You're lame!");

	if(chat.startsWith("<@" + "395396248057675776" + ">")) {
		console.log("Let's have a conversation!");
		message.channel.send(convo [
			Math.floor(Math.random() * convo.length)
		]);
	}
	else if (chat.includes("<@" + "395396248057675776" + ">")) {
		console.log("Someone's talking to me!");
		message.channel.send(sarcasm [
			Math.floor(Math.random() * sarcasm.length)
		]);
	}

	// if summoned
	if(!message.content.startsWith(summoner)) return;
	console.log("Message recorded!");

	switch(cmds) {
		case "annoy":
			args.join();
			var user = args[1];
			var points = Math.floor(Math.random() * -100) + 1;
			message.channel.send("Times to bother you " + user + " Minus " + points + " coolness points!");
			message.member.send("Bother bother bother! " + quotes [
				Math.floor(Math.random() * quotes.length)
			]);
			break;
		case "ball":
			if(cmds[1])
				message.channel.send(fortunes [
					Math.floor(Math.random() * fortunes.length)
				]);
			else message.reply("Your fortune is forever doomed.");
			break;
		case "hurke":
			message.channel.send(replies [
				Math.floor(Math.random() * replies.length)
			]);
		case "emoji":
			message.channel.send(emoji [
				Math.floor(Math.random() * emoji.length)
			]);
			break;
		case "help":
			message.reply("I am DHURKE, the intellectual Bot. Use 'd' to summon me, and you will get an answer! \n List of Commands: \n annoy \n ball \n emoji \n joke \n knock (You'll never get enough of me with this one) \n math \n nicole \n roll \n talk \n tp" );
			break;
		case "joke":
			message.channel.send(jokes [
				Math.floor(Math.random() * jokes.length)
			]);
			break;
		case "math":
	    let calculate = "=" + message.content.toLowerCase().substring("dmath".length);

	    if (isFinite(calculate.replace(/\=|\+|\-|\*|\/|\÷|\%|\(|\)|\,|\ |math.|pow|sqrt|round|floor|ceiling|ceil|pi|π|euler|absolute|abs|exp|logarithm|log|random|rand|rng/g,''))) {
	      calculate = calculate.replace(/ /g, "").replace(/÷/g, "/").replace(/power|pow/g, "Math.pow").replace(/sqrt|squareroot/g, "Math.sqrt").replace(/round/g, "Math.round").replace(/floor/g, "Math.floor").replace(/ceiling|ceil/g, "Math.ceil").replace(/pi|π/g, "Math.PI").replace(/euler/g, "Math.E").replace(/absolute|abs/g, "Math.abs").replace(/exp/g, "Math.exp").replace(/logarithm|log/g, "Math.log").replace(/random|rand|rng/g, "Math.random()");
				calculate =  calculate.replace(/=/g, "");
				message.channel.send("DHURKE can do your math!");

	    	if (calculate.replace(/[^%]/g, "").length > 0) {
	        for (let i = 0; i < calculate.replace(/[^%]/g, "").length; i++) {
	          while ((calculate[getSubstringIndex(calculate, "%", i+1) + 1] == "+" || calculate[getSubstringIndex(calculate, "%", i+1) + 1] == "-" || calculate[getSubstringIndex(calculate, "%", i+1) + 1] == "*" || calculate[getSubstringIndex(calculate, "%", i+1) + 1] == "/" || calculate[getSubstringIndex(calculate, "%", i+1) + 1] == "(" || calculate[getSubstringIndex(calculate, "%", i+1) + 1] == ")" || calculate[getSubstringIndex(calculate, "%", i+1) + 1] == "," || getSubstringIndex(calculate, "%", i+1) + 1 == calculate.length) && calculate.replace(/[^%]/g, "").length > 0) {
	            for (let j = getSubstringIndex(calculate, "%", i+1); j > -1; j--) {
	              if (calculate[j] == "=" || calculate[j] == "+" || calculate[j] == "-" || calculate[j] == "*" || calculate[j] == "/" || calculate[j] == "(" || calculate[j] == ")" || calculate[j] == ",") {
	                calculate = calculate.substring(0, j+1) + (calculate.substring(j+1, getSubstringIndex(calculate, "%", i+1))/100) + calculate.substring(getSubstringIndex(calculate, "%", i+1)+1, calculate.length);
	            }
	          }
	        }
	      }
	    }
			else if (isFinite(eval(calculate))) {
				message.channel.send("Answer: " + eval(calculate) +". Dhurke is always right.");
			} else {
				message.channel.send("I'm too stupid for that! Try again.");
			}
		}
			break;
		case "knock":
			message.channel.send("Knock Knock.");
			var interval = setInterval (function () {
				message.channel.send(knock [
						Math.floor(Math.random() * knock.length)
					]);
			}, 10000);
			break;
		case "mhelp":
			message.reply("I am MATH DHURKE, the intellectual Bot. I will calculate your PEMDAS functions. Try and see for yourself, using 'dmath!'");
			break;
		case "nicole":
			message.channel.send("I wonder where these pictures came from...");
			message.member.send({
					files: ["scandal.png", "lolzcops.png"]
		});
			break;
		case "roll":
			var roll = Math.floor(Math.random() * 6) + 1;
			message.reply("You rolled a " + roll);
			break;
		case "talk":
			message.channel.send(quotes [
					Math.floor(Math.random() * quotes.length)
				]);
				break;
		case "tp":
			// bot.channels.get("<" + "242843977961701377" + ">");
			message.channel.send('Hello from the other side');
			message.channel.send({
					files: ["stfrancis.png"]
		});
			break;
		default:
		 	var number = Math.floor(Math.random() * 1000) + 1;
			message.channel.send("Your lucky number is " + number);
	}
});

bot.login(auth.token);
