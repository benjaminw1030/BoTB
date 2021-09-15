export { shaggyLines, metalLines, countryLines, kpopLines }

const shaggyLines = new Map(
  [
    [1, 'The day began like any other day: with one crucial difference. You are going to become a rock star (well…pop star. Genre isn’t important. You wanted to sell out anyway). To become a star you need an audience. And you know just the guy to vet your stuff. TO YOUR BEST FRIEND’S GARAGE!'],
    [2, 'SHAGGY: “Yo what up doobs? You’re here early, it ain’t even 4:00 and you’re scratching at my door.”'],
    [3, '*You tell Shaggy about your destiny*'],
    [4, 'SHAGGY: “Haha really? You think you got what it takes to be a star? Well I’ve heard you play man and I guess you’re pretty talented. Why don’t you play for me now? If you rock my socks off I might even be tempted to join you.'],
    [5, '*You take a second to channel the spirit of your musical ancestors. Here we go! (click -Let’s Jam- to proceed!)']
  ]
);


const metalLines = new Map(
  [
    [1, "*You feel a sense of exhilaration. Life has meaning!*"],
    [2, "Shaggi: This might be my extracurriculars talking, but I think you have that star quality! And I’m just relatable enough to balance that “leading man” energy! You alright turning this solo into a duo?"],
    [3, "*You would never turn down a friend. You excitedly shake Shaggi’s hand*"],
    [4, "Shaggi: Let’s GO dude! And I know the perfect place to start. There’s an open mic battle of the bands later this evening! I hear they got that local up and coming group – that one metal band? I’m sure there’s some record label skeez bag scoping them out tonight, let’s go show them the power of our tenacious duet!"],
    [5, "*A battle of the bands? Already? You aren’t completely sure you’re ready, but as Optimus Prime once said “Fate rarely calls upon us at a time of our choosing.” You used to think that quote only applied to seeing a spider in the shower, but it rings true here as well. You pick up your trusty axe and nod. Let’s get famous!*"],
    [6, "NOTE: You can now call on Shaggi to help build your hype meter! You don’t want the audience to focus too much on someone else, so this will only work once a show!"],
    [7, "*You arrive at the venue – The Goredrinker. How droll. The staff take your band name on a list and usher you both backstage. You don’t have much time, but you and Shaggi go through your paces and talk about the song you’ll play. While you review your plan, a strange woman approaches…*"],
    [8, "ASTRA: Sup. The name’s Astra, and I’m the leader and drummer of Astral Forest. So you’re the pair we’re gonna be sending home? Tough luck I guess. At least you look ready to relax."],
    [9, "*You and Shaggi look down at your tshirts and jeans. In hindsight, you probably could have spruced up a bit*"],
    [10, "Shaggi: Hey there my dude. We might look chill now, but once the music starts playing we’re gonna heat up something FIERCE. Keep your distance unless you want those long locks to get singed!"],
    [11, "*Shaggi makes something resembling a burning sound and gestures with his hand. The lady looks very unimpressed*"],
    [12, "ASTRA: I hope your music is better than your comebacks. I’ll see you nerds on the stage."],
    [13, "*With that Astra leaves you to your sound check*"],
    [14, "Shaggi: Don’t let her psych you out man. Give me some of that determination you showed in my garage earlier! Game face ON buddy!"],
    [15, "Announcer: HELLO METAL HEADS, GEAR JOCKEYS, AND DENIZENS OF THE DEEP! *The small crowd’s shouting echoes in the small room* TWO BAND ENTER – ONE BAND LEAVE! Deep from the shadowed  and misty forests of the Elysian fields – crossing the boundaries of time and the spirit world – we present to you….ASTRAL FOREST!!!"],
    [16, "*The crowd’s shouting grows as Astra and her bandmates take up position on their half of the stage. *"],
    [17, "Announcer: And challenging this other worldly coven of rock – uh……*the announcer squints at Shaggi’s handwriting* …..Shaggi and the Shaggettes? "],
    [18, "*The crowd is mostly silent and Shaggi grins at you sheepishly. You manage to convey without words that a band meeting to discuss the name is on the horizon. The pair of you step out from backstage, and Astra’s drumstick makes a sliding motion across her throat. A rush of adrenaline surges forth as you take your place on the stage. Get ready! It’s now or never!*"]
  ]
);

const countryLines = new Map(
  [
    [1, '*The crowd is losing it! The building feels like it’s shaking as they stomp their feet. The venue owner rushes you backstage as some of the more volatile fans begin brawling. You don’t worry too much – a place like the Goredrinker probably sees its fair share of bruises.*'],
    [2, '*While you and Shaggy celebrate backstage, a man in a suit that looks far cleaner than the Goredrinker approaches. His hair is slicked back, indicating high levels of doucheosomes in his blood*'],
    [3, 'OBVIOUS CAPITALISM ANALOGY: “Hello hello hello my fine exploitable kids gentlefolk. I came here tonight expecting to sign a two-bit metal band, but I think you might be the real prize of the night. Are you two interested in signing up with a label?”'],
    [4, '*The man extends his hand out. You open your mouth to ask a question when Shaggy pushes you aside and grabs the man’s hand, eagerly pumping it up and down.*'],
    [5, 'SHAGGY: Hell yeah brother! Let’s SELL OUT!  I’m thinking 5% on album sales, 60% on merchandise, and a series of bonuses tied to spotify plays?'],
    [6, '*The man is practically salivating as he nods to Shaggy’s terms. You wish you had not dropped out of business school before they covered this situation. While Shaggy is signing away your lives on a tablet the man produces, you see Astra approach from behind. You turn to face her.*'],
    [7, 'ASTRA: Wow….you’re getting signed? I gotta be honest, my band and I just had a huge fight. I guess the girls think if we can get dusted by a couple yokels in band shirts, we aren’t meshing well. I thought you were pretty talented, and I can’t help but notice you could use a drummer…. '],
    [8, '*Shaggy is too busy being fleeced to notice. Well if he can make impulse decisions, so can you. You nod and shake Astra’s hand. Looks like your little band gained a member!*'],
    [9, 'NOTE: You can now call upon Astra to unleash a drum solo – Remember, you’re still the star here so you’ll only be able to spotlight one bandmate.'],
    [10, '*A couple weeks pass as you and your new band practice together – you’re surprised at the synergy, but Shaggy keeps saying it’s your ‘star quality’ bringing out their innate talent. Astra is ruthless in her expectations, pushing the band to new heights in a short amount of time. Before you know it, your ….(ugh) ‘manager’ has booked a sizeable gig. Branding you as “The Bandslayers”, he’s arranged for you to face off in another battle of the bands in Waco Texas!  He’s arranged to fly you all down where you’ll be premiering at the Holly Concert Hall. You’re playing against someone you’ve heard of – Steve Madison and the Good Ole Boys! Actual country music stars! Before you know it you find yourself backstage at the Holly with your band – minutes before your time to play.*'],
    [11, 'ASTRA: Alright team. This is it – if we perform well here the sky is the limit. If we fail we get meme’d on ruthlessly until we die in obscurity. No pressure.'],
    [12, '*Shaggy looks green…er. You nod in agreement and take a moment to steady your nerves. While you seek zen, a man in plaid with a cowboy hat approaches….*'],
    [13, 'STEVE: Y’all the ‘Bandslayers’ amirite? ‘Preciate you coming out all the way down, but I reckon you might have saved yourself the airfare. Figure this might be your first and last show with the big boys.'],
    [14, '*Steve speaks with a slow drawl and punctuates his last sentence by spitting out some chew into a garbage can.  His Good Ole Boys form up behind him like middle-schoolers setting up for a fight. Before you can respond Astra butts in*'],
    [15, 'ASTRA: Save your sad little voice for hitting those high notes after your truck leaves with your dog, or whatever hick cliché you ‘wrote’ about.'],
    [16, 'SHAGGY: Yeah! And we didn’t pay for the flight anyway!'],
    [17, '*Steve and Astra side-eye each other']
  ]
);

const kpopLines = new Map(
  [
    [1, 'The day began like any other day: with one crucial difference. You are going to become a rock star (well…pop star. Genre isn’t important. You wanted to sell out anyway). To become a star you need an audience. And you know just the guy to vet your stuff. TO YOUR BEST FRIEND’S GARAGE!'],
    [2, 'SHAGGY: “Yo what up doobs? You’re here early, it ain’t even 4:00 and you’re scratching at my door.”'],
    [3, '*You tell Shaggy about your destiny*'],
    [4, 'SHAGGY: “Haha really? You think you got what it takes to be a star? Well I’ve heard you play man and I guess you’re pretty talented. Why don’t you play for me now? If you rock my socks off I might even be tempted to join you.'],
    [5, '*You take a second to channel the spirit of your musical ancestors. Here we go! (click Let’s Jam to proceed!']
  ]
);
