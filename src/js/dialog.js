export { shaggiLines, metalLines, countryLines, kpopLines, endLines }

const shaggiLines = new Map(
  [
    [1, 'The day began like any other day: with one crucial difference. You are going to become a rock star (well…pop star. Genre isn’t important. You wanted to sell out anyway). To become a star you need an audience. And you know just the guy to vet your stuff. TO YOUR BEST FRIEND’S GARAGE!'],
    [2, 'SHAGGI: “Yo what up doobs? You’re here early, it ain’t even 4:00 and you’re scratching at my door.”'],
    [3, '*You tell Shaggi about your destiny*'],
    [4, 'SHAGGI: “Haha really? You think you got what it takes to be a star? Well I’ve heard you play man and I guess you’re pretty talented. Why don’t you play for me now? If you rock my socks off I might even be tempted to join you.'],
    [5, '*You take a second to channel the spirit of your musical ancestors. Here we go! (click -Let’s Jam- to proceed!)']
  ]
);


const metalLines = new Map(
  [
    [1, "*You feel a sense of exhilaration. Life has meaning!*"],
    [2, "SHAGGI: This might be my extracurriculars talking, but I think you have that star quality! And I’m just relatable enough to balance that “leading man” energy! You alright turning this solo into a duo?"],
    [3, "*You would never turn down a friend. You excitedly shake Shaggi’s hand*"],
    [4, "SHAGGI: Let’s GO dude! And I know the perfect place to start. There’s an open mic battle of the bands later this evening! I hear they got that local up and coming group – that one metal band? I’m sure there’s some record label skeez bag scoping them out tonight, let’s go show them the power of our tenacious duet!"],
    [5, "*A battle of the bands? Already? You aren’t completely sure you’re ready, but as Optimus Prime once said “Fate rarely calls upon us at a time of our choosing.” You used to think that quote only applied to seeing a spider in the shower, but it rings true here as well. You pick up your trusty axe and nod. Let’s get famous!*"],
    [6, "NOTE: You can now call on Shaggi to help build your hype meter! You don’t want the audience to focus too much on someone else, so this will only work once a show!"],
    [7, "*You arrive at the venue – The Goredrinker. How droll. The staff take your band name on a list and usher you both backstage. You don’t have much time, but you and Shaggi go through your paces and talk about the song you’ll play. While you review your plan, a strange woman approaches…*"],
    [8, "ASTRA: Sup. The name’s Astra, and I’m the leader and drummer of Astral Forest. So you’re the pair we’re gonna be sending home? Tough luck I guess. At least you look ready to relax."],
    [9, "*You and Shaggi look down at your tshirts and jeans. In hindsight, you probably could have spruced up a bit*"],
    [10, "SHAGGI: Hey there my dude. We might look chill now, but once the music starts playing we’re gonna heat up something FIERCE. Keep your distance unless you want those long locks to get singed!"],
    [11, "*Shaggi makes something resembling a burning sound and gestures with his hand. The lady looks very unimpressed*"],
    [12, "ASTRA: I hope your music is better than your comebacks. I’ll see you nerds on the stage."],
    [13, "*With that Astra leaves you to your sound check*"],
    [14, "SHAGGI: Don’t let her psych you out man. Give me some of that determination you showed in my garage earlier! Game face ON buddy!"],
    [15, "ANNOUNCER: HELLO METAL HEADS, GEAR JOCKEYS, AND DENIZENS OF THE DEEP! *The small crowd’s shouting echoes in the small room* TWO BAND ENTER – ONE BAND LEAVE! Deep from the shadowed  and misty forests of the Elysian fields – crossing the boundaries of time and the spirit world – we present to you….ASTRAL FOREST!!!"],
    [16, "*The crowd’s shouting grows as Astra and her bandmates take up position on their half of the stage. *"],
    [17, "ANNOUNCER: And challenging this other worldly coven of rock – uh……*the announcer squints at Shaggi’s handwriting* …..Shaggi and the Shaggettes? "],
    [18, "*The crowd is mostly silent and Shaggi grins at you sheepishly. You manage to convey without words that a band meeting to discuss the name is on the horizon. The pair of you step out from backstage, and Astra’s drumstick makes a sliding motion across her throat. A rush of adrenaline surges forth as you take your place on the stage. Get ready! It’s now or never!*"]
  ]
);

const countryLines = new Map(
  [
    [1, '*The crowd is losing it! The building feels like it’s shaking as they stomp their feet. The venue owner rushes you backstage as some of the more volatile fans begin brawling. You don’t worry too much – a place like the Goredrinker probably sees its fair share of bruises.*'],
    [2, '*While you and Shaggi celebrate backstage, a man in a suit that looks far cleaner than the Goredrinker approaches. His hair is slicked back, indicating high levels of doucheosomes in his blood*'],
    [3, 'OBVIOUS CAPITALISM ANALOGY: “Hello hello hello my fine exploitable kids gentlefolk. I came here tonight expecting to sign a two-bit metal band, but I think you might be the real prize of the night. Are you two interested in signing up with a label?”'],
    [4, '*The man extends his hand out. You open your mouth to ask a question when Shaggi pushes you aside and grabs the man’s hand, eagerly pumping it up and down.*'],
    [5, 'SHAGGI: Hell yeah brother! Let’s SELL OUT!  I’m thinking 5% on album sales, 60% on merchandise, and a series of bonuses tied to spotify plays?'],
    [6, '*The man is practically salivating as he nods to Shaggi’s terms. You wish you had not dropped out of business school before they covered this situation. While Shaggi is signing away your lives on a tablet the man produces, you see Astra approach from behind. You turn to face her.*'],
    [7, 'ASTRA: Wow….you’re getting signed? I gotta be honest, my band and I just had a huge fight. I guess the girls think if we can get dusted by a couple yokels in band shirts, we aren’t meshing well. I thought you were pretty talented, and I can’t help but notice you could use a drummer…. '],
    [8, '*Shaggi is too busy being fleeced to notice. Well if he can make impulse decisions, so can you. You nod and shake Astra’s hand. Looks like your little band gained a member!*'],
    [9, 'NOTE: You can now call upon Astra to unleash a drum solo – Remember, you’re still the star here so you’ll only be able to spotlight one bandmate.'],
    [10, '*A couple weeks pass as you and your new band practice – you’re surprised at the synergy, but Shaggi keeps saying it’s your ‘star quality’ bringing out their innate talent. Astra is ruthless in her expectations, pushing the band to new heights in a short amount of time. Before you know it, your(ugh) ‘manager’ has booked a sizeable gig. Branding you as “The Bandslayers”, he’s arranged for you to face off in another battle of the bands in Waco Texas!*'],
    [11,  'He’s arranged to fly you all down where you’ll be premiering at the Holly Concert Hall. You’re playing against someone you’ve heard of – Steve Madison and the Good Ole Boys! Actual country music stars! Before you know it you find yourself backstage at the Holly with your band – minutes before your time to play.*'],
    [12, 'ASTRA: Alright team. This is it – if we perform well here the sky is the limit. If we fail we get meme’d on ruthlessly until we die in obscurity. No pressure.'],
    [13, '*Shaggi looks green…er. You nod in agreement and take a moment to steady your nerves. While you seek zen, a man in plaid with a cowboy hat approaches….*'],
    [14, 'STEVE: Y’all the ‘Bandslayers’ amirite? ‘Preciate you coming out all the way down, but I reckon you might have saved yourself the airfare. Figure this might be your first and last show with the big boys.'],
    [15, '*Steve speaks with a slow drawl and punctuates his last sentence by spitting out some chew into a garbage can.  His Good Ole Boys form up behind him like middle-schoolers setting up for a fight. Before you can respond Astra butts in.*'],
    [16, 'ASTRA: Save your sad little voice for hitting those high notes after your truck leaves with your dog, or whatever hick cliché you ‘wrote’ about.'],
    [17, 'SHAGGI: Yeah! And we didn’t pay for the flight anyway!'],
    [18, '*Everyone gives Shaggi a prolonged look. Steve clears his throat.*'],
    [19, 'STEVE: On that note I suppose we’ll be seeing y’all out front. *Steve tips his hat and departs, posse in tow*'],
    [20, "ANNOUNCER: Welcome down-home country folk to the battle of a lifetime! In one corner we have STEVE MADISON backed up by THE GOOD OLE BOYS! *The audience's cheering grows louder*"],
    [21, "ANNOUNCER: 'And the ruffians coming from up north to dust up - known in their hometown as the unapologetic BANDSLAYERS its.....Shagadelic Funk and the Funky Twins?' *the crowd's cheering turns puzzled and Astra punches a grinning Shaggi. You have GOT to change that name.*"],
    [22, 'SHAGGI: Let’s dance all over that square.'],
    [23, '*For once you agree with Shaggi. Your heartbeat picks up pace as you hear the speakers announcing the start of the show. Your band heads to the stage. It’s time to shine!*']
  ]
);

const kpopLines = new Map(
  [
    [1, '*The audience’s cheering is so loud they may as well be backstage with you. A few of the venue staff are applauding your band as the three of you high-five each other. Astra’s eyes are alight with glee, and SHAGGI can’t stop laughing. You feel great! You notice Steve waving at you and motion him over.*'],
    [2, 'STEVE: I must say that was one helluva show y’all put on. I might have underestimated you city slickers. Takes a real good musician to turn a country boy’s audience on him in his own town. '],
    [3, 'ASTRA: You can drop the act – nobody’s watching.'],
    [4, 'STEVE: Ain’t an act little lady. Some people just talk different.  While we’re on the subject of acts though….my boys miss our hometown and wanted to take a hiatus from the biz after this show. I intend to oblige em, but I was wondering if your little operation was looking for an opener?'],
    [5, '*Astra and you exchange glances, but before you can speak Shaggi has once again beaten you to the punch.*'],
    [6,'SHAGGI: Opener? You should join the band straight away! All the cool bands are sampling banjos and mandolins anyhow. Welcome aboard!'],
    [7,'*You suppose he is right. Old Town Road was a huge hit. You’ve already sold out. Why not lean into being a hack? Astra doesn’t have any complaints, so your trio becomes a quartet!*'],
    [8,'NOTE – You can now call upon Steve as a bandmate for some of that small-town nostalgia.'],
    [9,'*Your band is getting national attention. Your manager spins Steve joining into a fierce ad campaign.  The Bandslayers have one message – Join or die. You feel this is more aggressive than you intend, but Astra (and the fans) love it, and before you know it you’re being plied with offers to play across the country! The months pass quickly when your manager comes to you with a new opportunity: a chance at international fame.*'],
    [10,'*The hit KPOP 1GI GENESIS is going to be in New York this summer – and your manager has brokered a deal with their label to put on a battle. All you have to do is show up – and win of course. You take the deal back to your bandmates to discuss, but you already know their answer. The date is set and in the blink of an eye, you find yourself with your band at the prestigious Perris Stadium in New York, playing to a sold-out show!*'],
    [11,'*Your band is huddled together backstage. The audience is filled with rapid KPOP fans. Under the advice of your attorney, you’ve all prepared a last will and testament in the event you don’t make out from here in one piece. While you are discussing your set list, a group of manufactured personas in expensive clothing approach you – it’s Genesis.*'],
    [12,'1GI Genesis: (in unison) "안녕하세요 바보들입니다. 부숴질 준비를 합니다."'],
    [13,'*You stare blankly, unsure how to respond, until Shaggi inserts himself into the conversation*'],
    [14,'SHAGGI: "잠 올라 그런다"'],
    [15,'*The group stares in shock at his flawless pronunciation. Shaggi looks around at the baffled faces of both bands.*'],
    [16,'SHAGGI: You guys know I worked as a Korean translator before this right? I’ve brought it up more than once!'],
    [17,'*You sheepishly acknowledge that you may tune out Shaggi more than he deserves.*'],
    [18,'1GI Genesis: (in unison) You will need more surprises than that if you wish to emerge victorious. We did not come here to ‘play’ music. We came to make money and put your small-town act in its place. You are one small domino on our path to world domination. And we are going to knock * you * down *!'],
    [19,'*The band punctuates each word with a different flashy pose – the talking in unison is creepy enough, but their coordination adds genuine intimidation. They stride off together, having accomplished their goal of unsettling you all.*'],
    [20,'SHAGGI: Did they say world domination?! Music isn’t about control! It’s about freedom, and indulgent solos, and public break-ups! '],
    [21,'STEVE: And fame!'],
    [22,'YOU: And money!'],
    [23,'ASTRA: Uh and truth and beauty? Artistic expression?! Right team?!!'],
    [24,'*The three of you concede that those elements are probably important too. Regardless, the gauntlet has been thrown.*'],
    [25, "ANNOUNCER: HELLO NEW YORK CITY! We have quite the event for you tonight! Our champion for the night needs NO introduction, but I'll be torn asunder by preteens if I don't say it! They are the Alpha, the beginning, so one and only it's in their name - IG1 GENESIIIIIS!!! *the roar from the crowd almost knocks you off your feet*"],
    [26, "ANNOUNCER: Rising to the challenge of our future KPOP overlords are the underdogs of the century! Daring to brave the onslaught is the one, the only, SHAGGI AND THE SHAGGONEERS?! "],
    [27, "*Shaggi doesn't meet your gaze. You might actually have to put him in the ground.*"],
    [28, "*On cue, the four of you head to your half of the stage. The stadium is packed – in between the many MANY screaming Kpop stans, you see multiple small groups waving banners with your band name and sporting merc. Your fans are here! You can’t let them down! This is what you dreamed of that fateful day so long ago in the garage. YOU WANNA ROCK!!!!!*"]
  ]
);

const endLines = new Map(
  [
    [1, 'The millions of faces screaming your name feel deserved. You put in such a medium amount of effort, and it paid off. The members of Genesis stagger off the stage while the crowd continues to shout: "ENCORE! ENCORE! ENCORE!" *You turn to your bandmates. Shaggi tosses a thumbs up, Astra flips the horns, and Steve tips his hat. Facing the crowd you raise your guitar and your fist to the sky. You are a ROCKSTAR.*'],
  ]
);

