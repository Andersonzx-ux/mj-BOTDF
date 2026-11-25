window.album = {
    title: "Blood on the Dance Floor: HIStory in the Mix",
    artist: "Michael Jackson",
    releaseDate: "20 de maio de 1997",
    recordingDate: "",
    genre: "Pop",
    labels: ["Epic"],
    cover: "assets/cover.jpg",
    // Paleta medida na capa (assets/cover.jpg) — ver tools/medir_paleta.py
    // O player usa duas versões feitas só com estas cores: Noite (moldura preta) e Dia (dourado das nuvens).
    palette: {
        black: "#000000",    // moldura da capa
        red: "#F40114",      // título escrito à mão
        crimson: "#C2010F",  // terno vermelho
        oxblood: "#5C0101",  // sombras do terno
        navy: "#0A2250",     // céu azul-noite
        gold: "#E4A72A",     // nuvens douradas iluminadas
        ochre: "#AD7416",    // nuvens douradas, tom médio
        amber: "#BE4D07",    // prédios alaranjados
        check: "#B09126",    // amarelo do piso xadrez
        white: "#F5F5F5"     // texto "MICHAEL JACKSON"
    },
    description: "",
    totalDuration: "",
    awards: [],
    technicalCredits: {},
    // CONFIRA a ordem, os títulos (versões/remixes) e os nomes dos arquivos de áudio.
    // Compositores, letras (.lrc em `lyrics`) e tradução (`translation`) são opcionais; a duração aparece sozinha ao tocar.
    tracks: [
        {
            number: 1,
            title: "Blood on the Dance Floor",
            duration: "4:13",
            composers: ["Michael Jackson / Teddy Riley"],
            audio: "audio/01.flac",
            lyrics: `[00:36.54] She got your number, ah
[00:38.35] She know your game, ah
[00:40.61] She put you under, ah
[00:42.61] It's so insane, ah
[00:45.05] Since you seduced her, ah
[00:47.10] How does it feel? Ah
[00:49.35] To know that woman, ah
[00:51.53] Is out to kill
[00:53.07] Every night stance is like taking a chance
[00:55.51] It's not about love and romance
[00:57.73] And now you're going to get it
[01:01.92] Ah, every hot man is out taking a chance
[01:04.54] It's not about love and romance
[01:06.31] And now you do regret it
[01:08.78] 
[01:10.94] To escape the world, I've got to enjoy that simple dance
[01:15.08] And it seemed that everything was on my side (blood on my side)
[01:20.00] She seemed sincere like it was love and true romance
[01:23.88] And now she's out to get me
[01:26.19] But I just can't take it
[01:27.45] Just can't break it
[01:28.75] Susie got your number and Susie ain't your friend
[01:30.99] Look who took you under with seven inches in
[01:37.25] Blood is on the dance floor, blood is on the knife
[01:41.71] Susie's got your number and Susie says it's right
[01:47.29] She got your number, ah
[01:49.25] How does it feel? Ah
[01:51.32] To know this stranger, ah
[01:53.03] Is about to kill, ah
[01:55.24] She got yo' baby, ah
[01:57.19] It happened fast, ah
[01:59.25] If you could only, ah
[02:01.78] Erase the past (ah)
[02:03.44] Every night stance is like taking chances (ah)
[02:06.34] It's not about love and romance
[02:08.29] And now you're going to get it
[02:12.30] Ah, every hot man is out taking a chance
[02:14.85] It's not about love and romance
[02:17.35] And now you do regret it
[02:21.11] To escape the world, I got to enjoy this simple dance
[02:25.44] And it seemed that everything was on my side (blood on my side)
[02:30.66] It seemed sincere like it was love and true romance
[02:33.76] And now she's out to get me
[02:36.85] But I just can't take it
[02:38.80] Just can't break it
[02:39.86] Susie got your number and Susie ain't your friend
[02:43.11] Look who took you under with seven inches in
[02:48.09] Blood is on the dance floor, blood is on the knife
[02:52.47] Susie got your number, you know Susie says it's right (woo-hoo)
[02:56.38] Susie's got your number
[02:58.58] Susie ain't your friend (ah, it's goin' down, baby)
[03:01.32] Look who took you under, she put seven inches in
[03:03.42] Blood is on the dance floor, blood is on the knife (it's goin' down, baby)
[03:09.87] Susie's got your number (ah)
[03:13.27] Susie says it's right
[03:14.74] It was blood on the dance floor (blood on the dance floor)
[03:17.17] It was blood on the dance floor (blood on the dance floor)
[03:21.41] It was blood on the dance floor (blood on the dance floor)
[03:24.87] It was blood on the dance floor (blood on the dance floor)
[03:29.99] And I just can't take it (the girl won't break it)
[03:31.57] Hoo!
[03:31.80] `
        },
        {
            number: 2,
            title: "Morphine",
            duration: "6:29",
            composers: ["Michael Jackson"],
            audio: "audio/02.flac",
            lyrics: `[00:37.91] He got flat baby
[00:40.26] Kick in the back baby
[00:42.65] A heart attack baby
[00:44.96] I need your body
[00:46.52] A hot kiss honey
[00:49.65] He's just a bitch baby
[00:51.93] You make me sick baby
[00:54.12] So unrelying
[00:55.14] I'm such a swine baby
[00:59.00] All down the line daddy
[01:01.20] I hate your kind baby
[01:03.51] So unreliable
[01:05.42] A hot buzz baby
[01:08.33] He's one of us baby
[01:10.69] Another drug baby
[01:12.99] You're so desire
[01:14.97] Trust in me
[01:17.06] Trust in me
[01:18.60] Put all your trust in me
[01:22.53] You're doin' Morphine
[01:26.31] 
[01:27.84] 
[01:38.24] Hoo!
[01:38.46] They got place baby
[01:45.59] Kicked in the face baby
[01:47.98] You hate your race baby
[01:50.20] You're just a liar
[01:51.99] Your every lick baby
[01:54.96] Your dog's a bitch baby
[01:57.24] You make me sick baby
[01:59.59] You soul survivor
[02:01.89] She never cut from me
[02:04.23] She never cut baby
[02:06.60] I had to work baby
[02:08.96] You just a rival
[02:11.29] Always to please daddy
[02:13.57] Right up and leave daddy
[02:15.99] You're throwing shame daddy
[02:18.14] So undesirable
[02:20.20] Trust in me
[02:22.51] Just in me
[02:23.99] Put all your trust in me
[02:27.61] You're doin' Morphine
[02:31.02] Go on, Babe
[02:33.66] 
[02:48.00] Relax
[02:50.03] This won't hurt you
[02:52.65] Before I put it in
[02:55.10] Close your eyes and count to ten
[02:57.32] Don't cry
[02:59.12] I won't convert you
[03:01.95] There's no need to dismay
[03:04.52] Close your eyes and drift away
[03:09.36] Demerol
[03:09.40] Demerol
[03:09.69] Oh God, he's taking Demerol
[03:12.05] Demerol
[03:12.08] Demerol
[03:12.09] Oh God, he's taking Demerol
[03:24.85] He's tried
[03:27.04] Hard to convince her
[03:29.64] To be over what he had
[03:32.44] Today he wants it twice as bad
[03:34.64] Don't cry
[03:36.38] I won't resent you
[03:38.94] Yesterday you had his trust
[03:41.71] Today he's taking twice as much
[03:44.67] Demerol
[03:44.67] Demerol
[03:44.72] Oh God, he's taking Demerol
[03:51.24] Hee!, hee!
[03:52.26] Demerol
[03:54.41] 
[03:56.67] Demerol
[03:56.69] Oh my, Oh God, it's Demerol
[04:00.48] Hee!
[04:02.92] Oooh
[04:06.75] 
[04:18.42] Oh!
[04:20.50] 
[04:26.58] He got shit baby
[04:28.88] Your dog's a bitch baby
[04:31.20] You make me sick baby
[04:33.50] You are a liar
[04:35.96] Is truth a game daddy
[04:37.73] To win the fame baby
[04:40.56] It's all the same baby
[04:42.83] You're so reliable
[04:44.75] Trust in me
[04:47.15] Trust in me
[04:48.58] Put all your trust in me
[04:52.17] She's doin' Morphine
[04:56.20] 
[04:58.36] Hoo!
[04:58.47] You just sit around just talkin' nothing
[05:01.56] You're takin' Morphine
[05:04.42] Hoo!
[05:05.51] Go on, Baby
[05:07.65] You just sit around just talking about it
[05:10.84] You're takin' Morphine
[05:14.38] Hoo!, hoo!
[05:16.65] Just sit around just talking nothing about it
[05:20.19] You're takin' Morphine
[05:24.20] 
[05:26.32] You just sit around just talking about it
[05:29.58] You're taking Morphine
[05:33.60] 
[05:35.73] You just sit around just talkin' nothin'
[05:38.88] And takin' Morphine
[05:41.75] Hoo!, Hoo!
[05:44.73] Something going down baby
[05:48.17] You're takin' Morphine
[05:51.07] Go on, Baby
[05:54.55] Hoo!
[05:58.46] Hoo!
[05:58.46] Morphine!
[06:01.55] Do it!
[06:03.93] 
[06:06.86] Hoo!
[06:06.92] He's takin' Morphine
[06:10.93] 
[06:17.09] Morphine!
[06:17.43] Morphine!
[06:18.31] `
        },
        {
            number: 3,
            title: "Superfly Sister",
            duration: "6:28",
            composers: ["Michael Jackson / Bryan Loren"],
            audio: "audio/03.flac",
            lyrics: `[00:11.00] Hee-hee
[00:18.00] Hoo
[00:20.35] Oh-oh
[00:22.42] Oh-oh (hee)
[00:25.43] Love ain't what it used to be
[00:29.61] That is what they're tellin' me
[00:33.81] Push it in, stick it out
[00:38.11] That ain't what it's all about (oh)
[00:42.26] He wanna do something keen to you
[00:45.82] He wanna wrap his arms all around you, girl
[00:50.02] He wanna shake it up, shake it down, doin' it right
[00:54.30] He wanna jump back, half flap, doin' it right
[00:58.54] He wanna lay you down, turn it up, shakin' it loose
[01:02.75] He wanna fly high, nigh high, baby for you'se
[01:07.05] He wanna motormouth, float around, baby the back
[01:11.31] He wanna shake it up, shake it down, movin' 'round ha-ha
[01:16.29] Love ain't what it used to be (hee)
[01:20.31] That is what they're tellin' me
[01:24.81] Push it in, stick it out
[01:29.03] That ain't what it's all about (oh)
[01:33.37] Susie like to agitate
[01:37.55] Get the boy and make him wait
[01:41.84] Mother's preachin' Abraham
[01:46.17] Brothers, they don't give a damn (oh)
[01:50.38] He wanna do something keen to you
[01:53.84] He wanna wrap his arms all around you, girl
[01:58.12] He wanna glue it up, keep it high, deep in the night
[02:02.28] He wanna eyeball, get hard, playin' it right
[02:06.54] He wanna turn the key, hurt the sheets, move to the left
[02:10.85] He wanna hot scrub, hot love, makin' it wet
[02:15.02] He wanna give hot, jump shot, move to the left
[02:19.26] He wanna time bar, slam dunk, ha-ha-ha
[02:24.44] Hoo
[02:26.26] Keep it goin' (hoo)
[02:28.36] Party down
[02:30.25] Hoo, hoo
[02:32.91] Love ain't what it used to be (ow)
[02:37.00] That is what they're tellin' me
[02:41.29] Push it in, stick it out
[02:45.54] That ain't what it's all about (oh)
[02:49.79] Sister says she love him some (she's doin' it, she's doin' it)
[02:54.16] Got his Jimmy on the run (hoo, hee)
[02:58.25] Mother's preaching Abraham (hee)
[03:02.54] Brothers, they don't give a damn (oh)
[03:14.00] (What? Ho)
[03:26.06] Johnny's begging pretty please (keep the brother on his knees)
[03:30.17] Keep the brother on his knees (hoo-hee)
[03:34.44] Susie likes to agitate (keep doin' it, keep doin' it, hee)
[03:38.63] Get the boy and make him wait (oh)
[03:42.97] Sister's married to her hood
[03:47.17] Sayin' that she got it good
[03:51.46] Holy Mary, mercy me
[03:55.62] I can't believe the things I see
[03:59.92] Thinkin' that they got it made (hoo)
[04:04.12] They doin' what they used to hate
[04:08.45] Push it in, stick it out (keep doin' it, keep doin' it)
[04:12.66] That ain't what it's all about (that ain't what it's all about)
[04:16.95] Holy Mary, mercy me (she's holy Mary, moly Mary)
[04:21.21] I can't believe the things I see (keep it goin' on now)
[04:25.45] Mother's preaching Abraham (she's preachin' Abraham)
[04:27.58] (She's doin' it she's doin' it)
[04:29.55] Brothers they don't give a damn (hoo, hoo-hoo)
[04:31.75] (Holy Mary, moly Mary)
[04:33.90] Sister says she love him some (she goin' down, hee)
[04:38.13] Got his Jimmy on the run (got his Jimmy, hee-hee)
[04:42.42] Holy Mary, mercy me (she's holy Mary, moly Mary)
[04:46.56] I can't believe the things I see (keep on goin', hee, hee)
[04:51.84] You're doin' it
[04:52.78] You're dirty
[04:53.87] Keep doin' it
[04:54.94] You're dirty
[04:55.95] Keep nasty
[04:57.13] You're nasty
[04:58.13] You're doin' it
[04:59.19] You're dirty
[05:00.24] You're dirty
[05:01.28] You're doin' it
[05:02.38] You're nasty
[05:03.46] You're doin' it
[05:04.53] Keep dirty
[05:05.56] Keep dirty
[05:06.62] You really don't want it
[05:09.64] Hoo
[05:16.13] Hoo, ooh
[05:22.23] Go on, now
[05:24.48] Hoo
[05:41.96] (Keep it goin')
[05:43.09] (Close your eyes)
[05:46.17] (I gotta make)
[05:47.25] (Close the door)
[05:50.35] (She's doin' it)
[05:52.31] (She's dirty)
[05:54.49] (She's, ooh)
[05:56.53] (She's, hoo)
[05:58.72] (Keep on goin')
[06:00.82] (Party down)
[06:11.72] Holy Mary, mercy me
[06:15.81] I can't believe the things I see
[06:20.20] Push it in, stick it out (stick it out)
[06:24.32] That ain't what it's all about`
        },
        {
            number: 4,
            title: "Ghosts",
            duration: "5:14",
            composers: ["Michael Jackson / Teddy Rilley"],
            audio: "audio/04.flac",
            lyrics: `[00:36.97] There's a ghost down in the hall
[00:39.16] There's a ghoul upon the bed
[00:41.42] There's something in the walls
[00:43.61] There's blood up on the stairs
[00:46.15] And it's floating through the room
[00:48.34] And there's nothing I can see
[00:50.68] And I know that that's the truth
[00:53.05] Because now it's onto me
[00:54.79] I don't understand it
[00:57.72] Hey
[00:59.38] I don't understand it
[01:04.03] Aaow
[01:06.41] 
[01:14.08] There's a thumpin' in the floor
[01:16.35] There's a creak behind the door
[01:18.73] There's a rocking in the chair
[01:20.97] But there's no one sitting there
[01:23.27] There's a ghostly smell around
[01:25.75] But nobody to be found
[01:28.06] And a coffin', it lay open
[01:30.36] Where a restless soul has fallen
[01:31.95] Don't understand it
[01:34.96] Hey!
[01:36.62] Don't understand it
[01:40.32] 
[01:51.19] And who gave you the right to scare my family?
[01:55.73] And who gave you the right to shake my baby, she needs me
[02:00.55] And who gave you the right to shake my family tree?
[02:05.14] They put a knife in my back
[02:06.38] Shot an arrow in me!
[02:08.03] Tell me are you the ghost of jealousy?
[02:13.62] The ghost of jealousy
[02:19.14] There's a thumpin' in the floor
[02:21.30] There's a creak behind the door
[02:23.78] There's a rocking in the chair
[02:26.07] But nobody's sitting there
[02:28.32] There's a ghostly smell around
[02:30.53] But nobody to be found
[02:33.02] And a coffin', it lay open
[02:35.31] Where a restless soul has fallen
[02:37.09] Don't understand it!
[02:39.71] Yeah Yeah!
[02:41.83] Don't understand it!
[02:45.27] You're just a dog gone!
[02:48.85] Aaow!
[02:51.33] 
[02:56.32] And who gave you the right to scare my family?
[03:00.92] And who gave you the right to scare my baby, she needs me
[03:05.68] And who gave you the right to shake my family tree?
[03:10.19] And who gave you the right to take intrusion, to see me?
[03:14.90] And who gave you the right to shake my family?
[03:19.43] And who gave you the right to hurt my baby, she needs me
[03:24.26] And who gave you the right to shake my family tree?
[03:28.86] They put a knife in my back
[03:30.19] Shot an arrow in me!
[03:31.72] Tell me are you the ghost of jealousy?
[03:37.28] A suckin' ghost of jealousy
[03:41.48] Aaow!
[03:45.18] 
[04:01.56] And who gave you the right to shake my family?
[04:06.13] And who gave you the right to shake my baby, she needs me
[04:10.93] And who gave you the right to shake my family tree?
[04:15.44] And who gave you the right to take, intrusion to see me?
[04:20.37] And who gave you the right to hurt my family?
[04:24.85] And who gave you the right hurt my baby, she needs me
[04:29.69] And who gave you the right to shake my family tree?
[04:34.09] You put a knife in my back
[04:35.44] Shot an arrow in me!
[04:37.06] Tell me are you the ghost of jealousy?
[04:42.70] The ghost of jealousy
[04:46.78] Aaow
[04:49.70] 
[04:52.38] Dog gone
[04:54.98] 
[05:01.61] But there's no doubt about it, piece of mind
[05:05.08] Tell me are you the ghost of jealousy
[05:08.04] `
        },
        {
            number: 5,
            title: "Is It Scary",
            duration: "5:36",
            composers: ["Michael Jackson / James Harris III / Terry Lewis"],
            audio: "audio/05.flac",
            lyrics: `[00:45.73] There's a ghost out in the hall
[00:47.98] There's a ghoul under the bed
[00:50.13] Now it's coming through the walls
[00:52.40] Now it's coming up the stairs
[00:54.62] There's a spirit in the dark
[00:56.83] Hear the beating of his heart
[00:59.18] Can you feel it in the air?
[01:01.37] Ghostly haunting everywhere
[01:03.95] I'm gonna be exactly what you wanna see
[01:07.59] It's you who's taunting me
[01:10.13] 'Cause you're wanting me
[01:12.07] To be the stranger in the night
[01:16.46] Am I amusing you or just confusing you?
[01:20.95] Am I the beast you visualized?
[01:25.33] And if you wanna see eccentric oddities
[01:29.75] I'll be grotesque before your eyes
[01:33.84] Let them all materialize
[01:37.70] Is that scary for you, baby?
[01:42.26] Am I scary for you? Oh
[01:46.67] Is it scary for you, baby?
[01:51.01] Is it scary for you?
[01:52.98] You know the stranger is you
[01:55.35] Is it scary for you, baby?
[02:01.11] Oh, babe
[02:07.93] There's a creaking in the floor
[02:10.12] There's a creak behind the door
[02:12.37] There's a rocking in the chair
[02:14.59] But nobody's sitting there
[02:16.79] There's a ghastly smell around
[02:18.99] But nobody to be found
[02:21.12] And a coffin and it lay open
[02:23.33] Where a restless soul is hoping
[02:25.88] I'm gonna be exactly what you gonna see
[02:29.45] So did you come to me to see your fantasies
[02:33.94] Performed before your very eyes?
[02:38.10] A haunting ghostly treat, the ghoulish trickery
[02:42.59] And spirits dancing in the night
[02:46.92] But if you came to see the truth, the purity
[02:51.38] It's here inside a lonely heart
[02:55.35] So let the performance start
[02:59.32] Is that scary for you, baby?
[03:03.71] Am I scary for you? Oh
[03:08.02] Am I scary for you, baby?
[03:12.59] Am I scary for you? Oh
[03:16.07] So tell me, is it scary for you, baby?
[03:20.95] Tell me
[03:24.94] So tell me, is that realism for you, baby?
[03:30.31] Am I scary for you?
[03:32.05] You know the stranger is you
[03:34.50] Am I scary for ya?
[03:36.18] Masquerade the heart
[03:39.76] Is to hide a hurting soul
[03:44.88] Just not what you seek of me
[03:49.04] Can the heart reveal the proof?
[03:51.28] Like a mirror reveals the truth?
[03:53.42] See the evil one is you
[03:56.45] Is that scary for you, baby?
[04:00.86] Am I scary for you? Oh, no
[04:05.31] Am I scary for you, baby?
[04:09.65] Am I scary for you? Oh
[04:13.25] So tell me, am I scary for you, baby?
[04:18.23] Am I scary for you, baby?
[04:22.88] Is it scary for you, baby?
[04:27.24] Am I scary for you? Oh
[04:31.39] (I don't want to talk about it)
[04:34.02] (I don't want to talk about it)
[04:35.54] (I don't want to talk about it)
[04:37.68] (I don't want to talk about it)
[04:39.95] Is this scary for you, baby?
[04:44.83] Is this scary for you?
[04:46.73] I'm tired of being abused
[04:48.99] You know you're scaring me too
[04:51.16] I see the evil is you
[04:53.65] Is it scary for you, baby? Oh
[04:58.37] Oh, baby
[05:32.48] `
        },
        {
            number: 6,
            title: "Scream Louder (Flyte Tyme Remix)",
            duration: "5:30",
            composers: ["James Harris III / Terry Lewis / Michael Jackson / Janet Jackson"],
            audio: "audio/06.flac",
            lyrics: `[01:03.32] Tired of injustice
[01:05.55] Tired of the schemes
[01:07.86] Life is disgusting
[01:10.02] So what does it mean, dammit
[01:12.22] Kicking me down
[01:14.53] I got to get up
[01:16.92] As jacked as it sounds
[01:19.17] The whole system sucks, dammit (hoo)
[01:24.12] (Hoo, hoo)
[01:26.03] Peek in the shadow (hoo, hoo)
[01:28.23] Come into the light (hoo, hoo)
[01:30.49] You tell me I'm wrong
[01:32.46] Then you better prove you're right
[01:35.29] You're selling out souls but
[01:37.14] I care about mine
[01:39.70] I've got to get stronger
[01:41.78] And I won't give up the fight
[01:44.08] With such confusion, don't it make you wanna scream?
[01:47.19] Make you wanna scream
[01:48.50] Your bash abusing victimize within the scheme
[01:53.23] You try to cope with every lie they scrutinize
[01:57.17] Somebody please have mercy
[01:59.17] 'Cause I just can't take it
[02:02.16] Stop pressuring me
[02:04.52] Just stop pressuring me
[02:07.05] Stop pressuring me
[02:08.63] Makes me wanna scream
[02:11.68] Stop pressuring me
[02:13.52] Just stop pressuring me
[02:16.26] Stop pressuring me
[02:17.88] Makes me wanna scream
[02:20.63] Tired of your telling (telling)
[02:22.89] The story your way (the story your way)
[02:25.06] It's causing confusion (confusion)
[02:27.36] You think it's okay, dammit
[02:29.31] Keep changing the rules while
[02:32.09] You're playing the game
[02:34.18] I can't take it much longer
[02:36.19] I think I might go insane
[02:38.61] With such confusion
[02:40.40] Make me wanna scream
[02:41.53] Now, baby
[02:43.30] With such confusion, don't it make you wanna scream?
[02:46.37] Make you wanna scream
[02:47.62] Your bash abusing victimize within the scheme
[02:50.74] Scheming, baby
[02:52.15] You find your pleasure scandalizing every lie
[02:56.01] Oh Father, please have mercy
[02:58.41] 'Cause I just can't take it
[03:01.75] Stop pressuring me
[03:03.61] Just stop pressuring me
[03:06.35] Stop pressuring me
[03:08.03] Makes me wanna scream
[03:10.78] Stop pressuring me
[03:13.01] Just stop pressuring me
[03:15.43] Stop pressuring me
[03:17.13] Makes me wanna scream
[03:24.13] Oh, my God, can't believe what I saw
[03:26.01] As I turned on the TV this evening
[03:28.64] I was disgusted by all the injustice
[03:30.88] All the injustice
[03:33.34] 
[03:51.40] With such confusion, don't it make you wanna scream?
[03:54.48] Make you wanna scream
[03:55.99] Your bash abusing victimize within the scheme
[04:00.65] You try to cope with every lie they scrutinize
[04:04.55] Oh brother, please have mercy
[04:06.60] 'Cause I just can't take it
[04:14.44] Stop pressuring me
[04:16.41] Just stop pressuring me
[04:18.99] Stop pressuring me
[04:20.65] Makes me wanna scream
[04:23.63] Stop pressuring me
[04:25.52] Just stop pressuring me
[04:28.05] Stop pressuring me
[04:29.79] Makes me wanna scream
[04:32.74] Stop pressuring me
[04:34.68] Just stop pressuring me
[04:37.14] Stop pressuring me
[04:38.84] Makes me wanna scream
[04:41.89] Stop pressuring me
[04:43.90] Just stop pressuring me
[04:46.05] Stop pressuring me
[04:47.95] Makes me wanna scream
[05:00.01] Stop pressuring me
[05:02.03] Just stop pressuring me
[05:04.56] Stop pressuring me
[05:06.15] Makes me wanna scream
[05:08.96] Stop pressuring me
[05:10.91] Just stop pressuring me
[05:13.76] Stop pressuring me
[05:15.30] Makes me wanna scream
[05:17.10] (Stop your pressure)
[05:20.57] `
        },
        {
            number: 7,
            title: "Money (Fire Island Radio Edit)",
            duration: "4:23",
            composers: ["Michael Jackson"],
            audio: "audio/07.flac",
            lyrics: `[00:04.56] Lie for it
[00:08.80] So you call it trust
[00:10.01] But I say it's just
[00:11.14] In the devil's game
[00:12.10] Of greed and lust
[00:13.14] They don't care
[00:13.82] They'd do me for the money
[00:15.27] They don't care
[00:15.91] They use me for the money
[00:17.23] So you go to church
[00:18.42] Read the Holy Word
[00:19.53] In the scheme of life
[00:20.51] It's all absurd
[00:21.54] They don't care
[00:22.38] They'd kill for the money
[00:23.60] Do or dare
[00:24.48] The thrill for the money
[00:25.88] You're saluting the flag
[00:26.75] Your country trusts you
[00:27.94] Now you're wearing a badge
[00:28.99] You're called the 'Just Few'
[00:30.04] And you're fighting the wars
[00:31.01] A soldier must do
[00:32.19] I'll never betray or deceive you my friend but
[00:34.35] If you show me the cash
[00:35.22] Then I will take it
[00:36.32] If you tell me to cry
[00:37.34] Then I will fake it
[00:38.58] If you give me a hand
[00:39.44] Then I will shake it
[00:41.38] You would do anything for money
[00:43.24] Anything
[00:43.54] Anything
[00:44.89] Anything for money
[00:46.49] I'd lie for you
[00:47.25] Would die for you, I
[00:49.04] Even sell my soul to the devil
[00:52.21] Anything
[00:53.23] Anything
[00:53.66] Anything for money
[00:54.85] I'd lie for you
[00:55.65] Would die for you, I
[00:57.40] Even sell my soul to the devil
[01:01.26] Insurance
[01:02.20] Where do your loyalties lie
[01:03.69] Is that your alibi
[01:04.77] I don't think so
[01:05.58] You don't care
[01:05.88] You'd do her for the money
[01:07.82] Say it's fair
[01:08.32] You sue her for the money
[01:10.17] Want your pot of gold
[01:11.16] Need the Midas touch
[01:12.14] Bet you sell your soul
[01:13.16] 'Cause your God is such
[01:14.21] You don't care
[01:14.96] You kill for the money
[01:16.18] Do or dare
[01:17.06] The thrill for the money
[01:18.35] Are you infected with the same disease
[01:20.04] Of lust, gluttony and greed
[01:21.64] Then watch the ones
[01:22.50] With the biggest smiles
[01:23.58] The idle jabbers
[01:25.24] 'Cause they're the backstabbers
[01:26.99] If you know it's a lie
[01:27.83] Then you will swear it
[01:29.18] If you give it with guilt
[01:29.91] Then you will bear it
[01:31.16] If it's taking a chance
[01:32.05] Then you will dare it
[01:33.26] You would do anything for money
[01:34.92] Anything
[01:35.15] Anything
[01:37.43] Anything for money
[01:38.42] I'd lie for you
[01:40.04] Would die for you, I
[01:41.70] Even sell my soul to the devil
[01:43.30] Anything
[01:43.51] Anything
[01:45.92] Anything for money
[01:46.83] I'd lie for you
[01:48.39] Would die for you, I
[01:50.18] Even sell my soul to the devil
[01:51.97] Anything
[01:54.25] Anything
[01:54.30] Anything for money
[01:55.83] I'd lie for you
[01:56.94] Would die for you, I
[01:58.56] Even sell my soul to the devil
[02:00.39] Anything
[02:02.58] Anything
[02:02.70] Anything for money
[02:03.69] I'd lie for you
[02:05.26] Would die for you, I
[02:06.94] Even sell my soul to the devil
[02:08.70] Anything
[02:09.09] Anything
[02:11.23] Anything for money
[02:12.00] I'd lie for you
[02:13.66] Would die for you, I
[02:15.39] Even sell my soul to the devil
[02:17.17] Anything
[02:19.49] Anything
[02:19.64] Anything for money
[02:21.10] I'd lie for you
[02:22.12] Would die for you, I
[02:23.79] Even sell my soul to the devil
[02:28.92] I don't think so
[02:30.02] If you show me the man
[02:30.80] Then I will sell him
[02:32.13] If you ask me to lie
[02:33.15] Then I will tell him
[02:34.20] If it's dealing with God
[02:35.22] Then you will hell him
[02:38.22] Anything
[02:40.75] Anything for money
[02:41.52] I'd lie for you
[02:42.96] Would die for you, I
[02:44.80] Even sell my soul to the devil
[02:46.59] Anything
[02:46.75] Anything
[02:49.08] Anything for money
[02:50.69] I'd lie for you
[02:51.35] Would die for you, I
[02:53.24] Even sell my soul to the devil
[02:55.14] Anything
[02:57.34] Anything
[02:57.54] Anything for money
[02:59.08] I'd lie for you
[02:59.84] Would die for you
[03:01.61] Even sell my soul to the devil
[03:03.37] Anything
[03:04.52] Anything
[03:05.92] Anything for money
[03:07.04] I'd lie for you
[03:08.26] Would die for you
[03:09.17] Even sell my soul to the devil
[03:11.79] Anything
[03:13.58] Anything
[03:14.22] Anything for money
[03:15.22] I'd lie for you
[03:16.08] Would die for you
[03:16.68] Even sell my soul to the devil
[03:19.30] Anything
[03:20.20] Anything
[03:22.66] Anything for money
[03:23.63] I'd lie for you
[03:25.36] Would die for you, I
[03:26.72] Even sell my soul to the devil
[03:30.65] Anything for money
[03:31.75] I'd lie for you, I
[03:33.08] Would die for you
[03:34.77] Even sell my soul to the devil
[03:37.16] Anything
[03:39.67] Anything for money
[03:41.16] Don't tell it,
[03:42.22] Don't tell it,
[03:43.21] Don't,
[03:44.15] Don't tell it to the devil
[03:48.04] Anything for money
[03:48.98] I'd lie for you
[03:50.35] Would die for you, I
[03:51.79] Even sell my soul to the devil
[03:56.42] Anything for money
[03:58.08] I'd lie for you
[03:58.73] Would die for you
[04:00.68] Even sell my soul to the devil
[04:04.75] Anything
[04:04.93] Anything for money
[04:05.77] I'd lie for you
[04:07.27] Would die for you
[04:09.05] Even sell my soul to the devil
[04:13.06] Anything
[04:13.26] Anything for money
[04:14.05] I'd lie for you
[04:14.26] Would die for you
[04:17.43] Even sell my soul to the devil
[04:19.14] `
        },
        {
            number: 8,
            title: "2 Bad (Refugee Camp Mix)",
            duration: "3:33",
            composers: ["Michael Jackson / Bruce Swedien / René Moore / Dallas Austin"],
            audio: "audio/08.flac",
            lyrics: `[00:08.74] Right Right Right Right Right Right Right
[00:11.13] Right back where I wanna be
[00:13.68] Told me that you're doin' wrong
[00:18.15] Word out shockin' all alone
[00:23.09] Cryin' wolf ain't like a man
[00:27.54] Throwin' rocks to hide your hands
[00:30.09] You ain't done enough for me
[00:32.27] You ain't done enough for me
[00:34.49] You are disgustin' me, yeah yeah
[00:39.28] You're aiming just for me
[00:41.80] You are disgustin' me
[00:43.93] Just want your cut from me
[00:46.07] But too bad, too bad
[00:50.16] Look who just walked in the place
[00:54.76] Dead and stuffy in the face
[00:59.71] Look who's standing if you please
[01:04.24] Though you tried to bring me to my knees
[01:06.73] Too bad too bad about it
[01:09.47] Why don't you scream and shout it
[01:11.41] Too bad too bad about it
[01:14.26] Why don't you just scream and shout it
[01:16.08] Too bad too bad about it
[01:18.53] Why don't you scream and shout it
[01:20.69] Too bad too bad about it
[01:23.15] Why don't you just scream and shout it
[01:25.26] What do you want from me?
[01:46.11] What do you want from me?
[01:48.78] Tired of you haunting me, yeah yeah
[01:53.17] You're aiming just for me
[01:55.39] You are disgustin' me
[01:57.61] You got blood lust for me
[01:59.90] But too bad, too bad
[02:05.02] Look who got slapped in the face
[02:09.29] It's dead and stuffy in the place
[02:13.76] I'm right back where I wanna be
[02:18.32] I'm standin' though you're kickin' me
[02:21.03] Too bad too bad about it
[02:23.36] Why don't you scream and shout it
[02:25.41] Too bad too bad about it
[02:27.62] Why don't you just scream and shout it
[02:30.14] Too bad too bad about it
[02:32.80] Why don't you scream and shout it
[02:34.65] Too bad too bad about it
[02:36.92] Why don't you just scream and shout it
[02:48.87] Too bad too bad about it
[02:51.31] Right Right Right
[02:58.13] Right back where I wanna be
[03:01.92] Right Right Right
[03:07.83] Right back where I wanna be
[03:09.91] Right Right Right
[03:11.74] Right back where I wanna be...
[03:26.08] `
        },
        {
            number: 9,
            title: "Stranger in Moscow (Tee's In-House Club Mix)",
            duration: "6:54",
            composers: ["Michael Jackson"],
            audio: "audio/09.flac",
            lyrics: `[01:06.72] I was wandering in the rain
[01:14.40] Mask of life, feelin' insane
[01:18.02] Swift and sudden fall from grace
[01:21.81] Sunny days seem far away
[01:26.22] Kremlin's shadow belittlin' me
[01:30.23] Stalin's tomb won't let me be
[01:33.51] On and on and on it came
[01:37.26] Wish the rain would just let me[[Chorus 1]]How does it feel (How does it feel)
[01:44.37] How does it feel
[01:47.57] How does it feel
[01:51.71] When you're alone
[01:54.52] And you're cold inside[[Verse 2]]Here abandoned in my fame
[02:04.30] Armageddon of the brain
[02:08.32] KGB was doggin' me
[02:12.77] Take my name and just let me be
[02:16.23] Then a begger boy called my name
[02:20.07] Happy days will drown the pain
[02:23.62] On and on and on it came
[02:27.48] And again, and again, and again...
[02:30.53] Take my name and just let me be[[Chorus 2]]How does it feel (How does it feel)
[02:38.20] How does it feel
[02:42.49] How does it feel
[02:46.35] How does it feel
[02:49.02] How does it feel (How does it feel now)
[02:52.39] How does it feel
[02:56.34] How does it feel
[02:58.49] When you're alone
[02:59.49] And you're cold inside[[Chorus 2]][[Verse 3]]Like stranger in Moscow
[03:54.28] Like stranger in Moscow
[04:14.26] We're talkin' danger
[04:23.43] We're talkin' danger, baby
[04:26.59] Like stranger in Moscow
[04:31.26] We're talkin' danger
[04:35.17] We're talkin' danger, baby
[04:37.50] Like stranger in Moscow
[04:41.53] I'm live in lonely
[04:43.06] I'm live in lonely, baby
[04:45.42] Stranger in Moscow[(KGB interrogator - Russian to English Translation)]"Why have you come from the West?
[04:48.68] Confess! To steal the great achievments of
[04:49.69] The people, the accomplishments of the workers...[[Chorus 2]][[Verse 3]]Like stranger in Moscow
[04:51.15] Like stranger in Moscow
[04:52.14] We're talkin' danger
[04:52.70] We're talkin' danger, baby
[04:53.25] Like stranger in Moscow
[04:53.77] We're talkin' danger
[04:54.30] We're talkin' danger, baby
[04:54.85] Like stranger in Moscow
[04:55.42] I'm live in lonely
[04:55.97] I'm live in lonely, baby
[04:56.90] Stranger in Moscow[(KGB interrogator - Russian to English Translation)]"Why have you come from the West?
[04:57.50] Confess! To steal the great achievments of
[04:58.09] The people, the accomplishments of the workers...[[Verse 3]]Like stranger in Moscow
[04:58.68] Like stranger in Moscow
[04:59.20] We're talkin' danger
[04:59.74] We're talkin' danger, baby
[05:00.32] Like stranger in Moscow
[05:00.89] We're talkin' danger
[05:01.44] We're talkin' danger, baby
[05:01.97] Like stranger in Moscow
[05:02.56] I'm live in lonely
[05:03.08] I'm live in lonely, baby
[05:03.63] Stranger in Moscow[(KGB interrogator - Russian to English Translation)]"Why have you come from the West?
[05:04.20] Confess! To steal the great achievments of
[05:05.21] The people, the accomplishments of the workers...
[05:06.77] `
        },
        {
            number: 10,
            title: "This Time Around (D.M. Radio Mix)",
            duration: "4:05",
            composers: ["Michael Jackson / Dallas Austin"],
            audio: "audio/10.flac",
            lyrics: `[00:07.23] Song and lyrics written by michael jackson.
[00:08.91] Music composed by dallas austin, bruce swedien and rene.
[00:13.77] This time around I'll never get bit
[00:35.50] Though you really wanna fix me
[00:37.59] This time around you're making me sick
[00:42.99] Though you really wanna get me
[00:47.02] Somebody's out
[00:48.83] Somebody's out to get me
[00:51.08] They really wanna fix me, hit me
[00:53.85] But this time around I'm taking no shit
[00:58.54] Though you really wanna get me
[01:00.50] You really wanna get me
[01:03.39] He really thought he really had
[01:05.92] Had a hold on me
[01:07.48] He really thought he really had
[01:08.95] They thought they really had control of me
[01:10.93] He really thought he really had
[01:12.41] Control of me
[01:14.82] He really thought he really had
[01:16.59] They thought they really could control me
[01:18.97] This time around I'll never get bit
[01:21.95] Though you really wanna get me
[01:23.94] This time around I'm taking no shit
[01:29.51] Though you really wanna fix me
[01:31.75] Somebody's out
[01:35.60] Somebody's out to use me
[01:37.78] They really want to use me
[01:39.36] And then falsely accuse me
[01:41.68] This time around
[01:43.14] They'll take it like spit'cause you really can't control me
[01:46.88] You know you can't control me
[01:49.42] He really thought he really had
[01:51.85] Had a hold on me
[01:53.56] He really thought he really had
[01:54.91] They thought they really had control of me
[01:57.25] He really thought he really had
[01:59.25] A hold on me
[02:01.33] He really thought he really had
[02:02.78] They thought they really had control of me
[02:05.04] He really thought he really had
[02:06.89] Had a hold on me
[02:09.12] He really thought he really had
[02:11.85] They thought they really had control of me
[02:13.38] He really thought he really had
[02:14.85] A hold on me
[02:17.23] He really thought he really had
[02:19.33] They thought they really had control of me(rap: the notorious big)Listen, I've got problems of my own
[03:12.25] Flashin' cameras, taps on my phone
[03:13.95] Even in my home I ain't safe as I should be
[03:15.27] Things always missin'Maybe it could be my friends
[03:16.52] They ain't friends if they robbin' me
[03:17.61] Stoppin' me from makin' a profit, see
[03:18.31] Apology shallow like the ocean
[03:19.54] I guess I'll resort to gun totin'If I was dead broke and smokin'I'd probably be by my lonesome
[03:21.52] I'm a killer nigga I ain't jokin'Endo smoke got me choked and I'm hopin'The fool comes slippin'So I could blow'em open
[03:23.43] This time around
[03:24.11] I changed up my flow
[03:24.87] Got rid of the rocks
[03:25.62] Got pits by the door
[03:26.53] I've raised other peoples to watch my back
[03:27.33] Stay away from strangers
[03:28.08] So I won't slack
[03:28.75] And I know my nigga mike like that
[03:29.39] Baby(michael)This time around yeah...
[03:29.94] He really thought he really had
[03:30.69] Control of me
[03:31.47] He really thought he really had
[03:32.18] They thought they really had control of me
[03:32.78] He really thought he really had
[03:33.20] A hold on me
[03:33.83] He really thought he really had
[03:34.57] They thought they really had control of me
[03:35.16] He really thought he really had
[03:35.66] Had a hold on me
[03:36.21] He really thought he really had
[03:36.94] They thought they really had control of me
[03:37.52] He really thought he really had
[03:38.07] Control of me
[03:38.61] He really thought he really had
[03:39.35] They thought they really had control of me
[03:39.98] He really thought he really had
[03:40.63] A hold on me
[03:41.29] He really thought he really had
[03:41.85] They thought they really had control of me
[03:42.16] This time around yeah
[03:42.71] He really thought
[03:57.48] `
        },
        {
            number: 11,
            title: "Earth Song (Hani's Extended Club Experience)",
            duration: "6:27",
            composers: ["Michael Jackson"],
            audio: "audio/11.flac",
            lyrics: ``
        },
        {
            number: 12,
            title: "You Are Not Alone (Classic Club Mix)",
            duration: "7:37",
            composers: ["R. Kelly"],
            audio: "audio/12.flac",
            lyrics: `[00:14.20] Another day has gone, I'm still all alone
[00:21.49] How could this be? You're not here with me
[00:29.36] You never said good-bye, someone tell me why
[00:35.36] Did you have to go, and leave my world so cold?
[00:44.01] 
[00:46.23] Everyday I sit and ask myself
[00:50.34] How did love slip away?
[00:54.34] Something whispers in my ear and says
[01:00.02] That you are not alone
[01:04.18] I am here with you
[01:08.29] Though you're far away
[01:11.71] I am here to stay
[01:17.45] You are not alone
[01:19.60] I am here with you
[01:23.18] Though we're far apart
[01:27.06] You're always in my heart
[01:31.08] You are not alone
[01:35.14] 
[01:37.67] Lone lone, why, oh...
[01:50.14] Just the other night, I thought I heard you cry
[01:57.90] Asking me to come, and hold you in my arms
[02:05.33] I can hear your prayers, your burdens I will bear
[02:13.20] But first I need your hand, then forever can begin
[02:22.43] Everyday I sit and ask myself
[02:27.04] How did love slip away?
[02:30.64] Something whispers in my ear and says
[02:37.64] That you are not alone
[02:40.11] I am here with you
[02:44.27] Though you're far away
[02:48.09] I am here to stay
[02:52.16] You are not alone
[02:57.10] I am here with you
[02:59.47] Though we're far apart
[03:03.26] You're always in my heart
[03:07.39] You are not alone
[03:12.54] Oh... whisper three words and I'll come runnin'
[03:20.12] Fly... and girl you know that I'll be there
[03:27.42] I'll be there
[03:34.58] That you are not alone
[03:38.07] I am here with you
[03:41.85] Though you're far away
[03:45.66] I am here to stay
[03:49.45] You are not alone
[03:53.55] I am here with you
[03:57.81] Though we're far apart
[04:00.87] You're always in my heart
[04:05.22] You are not alone
[04:07.98] That you are not alone (That you are not alone)
[04:10.93] I am here with you (I am here with you)
[04:13.38] Though you're far away (Though you're far away)
[04:16.61] I am here to stay (I am here to stay)
[04:20.45] You are not alone
[04:24.83] I am here with you
[04:28.82] Though we're far apart
[04:32.66] You're always in my heart
[04:35.96] You are not alone...
[04:39.15] `
        },
        {
            number: 13,
            title: "HIStory (Tony Moran's HIStory Lesson)",
            duration: "8:01",
            composers: ["Michael Jackson / James Harris III / Terry Lewis"],
            audio: "audio/13.flac",
            lyrics: `[02:04.16] He got kicked in the back
[02:05.83] He say that he needed that
[02:08.13] He hot willed in the face
[02:09.84] Keep daring to motivate
[02:11.67] He say one day you will see
[02:13.75] His place in world history
[02:15.89] He dares to be recognized
[02:17.58] The fire's deep in his eyes
[02:19.63] How many victims must there be
[02:23.16] Slaughtered in vain across the land
[02:26.60] And how many struggles must there be
[02:30.57] Before we choose to live the prophet's plan
[02:34.28] Everybody sing
[02:36.11] Every day create your history
[02:39.07] Every path you take you're leaving your legacy
[02:43.00] Every soldier dies in his glory
[02:47.05] Every legend tells of conquest and liberty
[02:56.64] "I'm the greatest of all time"
[03:05.95] Don't let no one get you down
[03:07.97] Keep movin' on higher ground
[03:10.07] Keep flying until
[03:12.14] You are the king of the hill
[03:13.97] No force of nature can break
[03:16.07] Your will to self motivate
[03:17.78] She say this face that you see
[03:19.63] Is destined for history
[03:21.93] How many people have to cry
[03:25.08] The song of pain and grief across the land
[03:28.76] And how many children have to die
[03:32.52] Before we stand to lend a healing hand
[03:35.67] Everybody sing
[03:37.42] Every day create your history
[03:41.36] Every path you take you're leaving your legacy
[03:44.70] Every soldier dies in his glory
[03:48.87] Every legend tells of conquest and liberty
[03:52.93] Every day create your history
[03:56.46] Every page you turn you're writing your legacy
[04:00.46] Every hero dreams of chivalry
[04:03.01] "I have a dream"
[04:04.29] Every child should sing together in harmony
[04:23.63] All nations sing
[04:25.52] Let's harmonize all around the world
[04:30.77] "I am happy to join with you today,
[04:37.92] In what will be down in history as the greatest
[04:41.03] Demonstration for freedom in the history of our nation."
[06:04.04] How many victims must there be
[06:07.83] Slaughtered in vain across the land
[06:10.59] (Lord, we need your assistance)
[06:11.79] And how many children must we see
[06:15.89] Before we learn to live as brothers
[06:17.86] And be one family, oh
[06:22.96] (Every day create your history)
[06:24.63] History
[06:25.64] (Every path you take you're leaving your legacy)
[06:29.34] (Every soldier dies in his glory)
[06:32.32] His glory
[06:33.57] (Every legend tells of conquest and liberty)
[06:37.38] (Every day create your history)
[06:39.70] History
[06:41.54] (Every page you turn you're writing your legacy)
[06:45.00] (Every hero dreams of chivalry)
[06:47.77] All around the world we sing
[06:49.36] (Every child should sing together in harmony)
[07:23.37] Yeah, yeah, together
[07:25.47] A soldier dies
[07:25.83] (A soldier dies)
[07:26.20] A mother cries
[07:26.53] (A mother cries)
[07:26.80] The promised child
[07:27.22] (The promised child)
[07:27.63] Shines in a baby's eyes
[07:27.94] All nations sing
[07:28.14] (All nation sing)
[07:28.41] Let's harmonize all around the world
[07:28.76] "Some men see things as they are and say, why?
[07:29.28] I see things that never were and say, why not?"
[07:29.76] "That's one small step for men, one giant leap for mankind."
[07:30.09] `
        }
    ]
};
