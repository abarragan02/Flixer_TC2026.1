const fs  = require('fs');

const movies = [
          {
            "adult": false,
            "backdrop_path": "/cinER0ESG0eJ49kXlExM0MEWGxW.jpg",
            "genre_ids": [
              28,
              12,
              14
            ],
            "id": 566525,
            "original_language": "en",
            "original_title": "Shang-Chi and the Legend of the Ten Rings",
            "overview": "Shang-Chi must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization.",
            "popularity": 7750.478,
            "poster_path": "/1BIoJGKbXjdFDAqUEiA2VHqkK1Z.jpg",
            "release_date": "2021-09-01",
            "title": "Shang-Chi and the Legend of the Ten Rings",
            "video": false,
            "vote_average": 7.9,
            "vote_count": 3181
          },
          {
            "adult": false,
            "backdrop_path": "/u5Fp9GBy9W8fqkuGfLBuuoJf57Z.jpg",
            "genre_ids": [
              12,
              28,
              53
            ],
            "id": 370172,
            "original_language": "en",
            "original_title": "No Time to Die",
            "overview": "Bond has left active service and is enjoying a tranquil life in Jamaica. His peace is short-lived when his old friend Felix Leiter from the CIA turns up asking for help. The mission to rescue a kidnapped scientist turns out to be far more treacherous than expected, leading Bond onto the trail of a mysterious villain armed with dangerous new technology.",
            "popularity": 4212.055,
            "poster_path": "/iUgygt3fscRoKWCV1d0C7FbM9TP.jpg",
            "release_date": "2021-09-29",
            "title": "No Time to Die",
            "video": false,
            "vote_average": 7.6,
            "vote_count": 1927
          },
          {
            "adult": false,
            "backdrop_path": "/70nxSw3mFBsGmtkvcs91PbjerwD.jpg",
            "genre_ids": [
              878,
              28,
              12
            ],
            "id": 580489,
            "original_language": "en",
            "original_title": "Venom: Let There Be Carnage",
            "overview": "After finding a host body in investigative reporter Eddie Brock, the alien symbiote must face a new enemy, Carnage, the alter ego of serial killer Cletus Kasady.",
            "popularity": 4295.722,
            "poster_path": "/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg",
            "release_date": "2021-09-30",
            "title": "Venom: Let There Be Carnage",
            "video": false,
            "vote_average": 6.8,
            "vote_count": 2008
          },
          {
            "adult": false,
            "backdrop_path": "/dK12GIdhGP6NPGFssK2Fh265jyr.jpg",
            "genre_ids": [
              28,
              35,
              80,
              53
            ],
            "id": 512195,
            "original_language": "en",
            "original_title": "Red Notice",
            "overview": "An Interpol-issued Red Notice is a global alert to hunt and capture the world's most wanted. But when a daring heist brings together the FBI's top profiler and two rival criminals, there's no telling what will happen.",
            "popularity": 5461.94,
            "poster_path": "/wdE6ewaKZHr62bLqCn7A2DiGShm.jpg",
            "release_date": "2021-11-04",
            "title": "Red Notice",
            "video": false,
            "vote_average": 6.9,
            "vote_count": 1051
          },
          {
            "adult": false,
            "backdrop_path": "/zBkHCpLmHjW2uVURs5uZkaVmgKR.jpg",
            "genre_ids": [
              16,
              35,
              10751
            ],
            "id": 585245,
            "original_language": "en",
            "original_title": "Clifford the Big Red Dog",
            "overview": "As Emily struggles to fit in at home and at school, she discovers a small red puppy who is destined to become her best friend. When Clifford magically undergoes one heck of a growth spurt, becomes a gigantic dog and attracts the attention of a genetics company, Emily and her Uncle Casey have to fight the forces of greed as they go on the run across New York City. Along the way, Clifford affects the lives of everyone around him and teaches Emily and her uncle the true meaning of acceptance and unconditional love.",
            "popularity": 3574.383,
            "poster_path": "/30ULVKdjBcQTsj2aOSThXXZNSxF.jpg",
            "release_date": "2021-11-10",
            "title": "Clifford the Big Red Dog",
            "video": false,
            "vote_average": 7.9,
            "vote_count": 150
          },
          {
            "adult": false,
            "backdrop_path": "/4gKxQIW91hOTELjY5lzjMbLoGxB.jpg",
            "genre_ids": [
              28,
              53,
              878
            ],
            "id": 763164,
            "original_language": "en",
            "original_title": "Apex",
            "overview": "Ex-cop James Malone is serving a life sentence for a crime he didn’t commit. He is offered a chance at freedom if he can survive a deadly game of Apex, in which six hunters pay for the pleasure of hunting another human on a remote island. He accepts, and once he arrives, all hell breaks loose.",
            "popularity": 2238.926,
            "poster_path": "/chTkFGToW5bsyw3hgLAe4S5Gt3.jpg",
            "release_date": "2021-11-12",
            "title": "Apex",
            "video": false,
            "vote_average": 5.6,
            "vote_count": 164
          },
          {
            "adult": false,
            "backdrop_path": "/lyvszvJJqqI8aqBJ70XzdCNoK0y.jpg",
            "genre_ids": [
              28,
              12,
              878
            ],
            "id": 524434,
            "original_language": "en",
            "original_title": "Eternals",
            "overview": "The Eternals are a team of ancient aliens who have been living on Earth in secret for thousands of years. When an unexpected tragedy forces them out of the shadows, they are forced to reunite against mankind’s most ancient enemy, the Deviants.",
            "popularity": 1822.535,
            "poster_path": "/6AdXwFTRTAzggD2QUTt5B7JFGKL.jpg",
            "release_date": "2021-11-03",
            "title": "Eternals",
            "video": false,
            "vote_average": 7.1,
            "vote_count": 1072
          },
          {
            "adult": false,
            "backdrop_path": "/eeijXm3553xvuFbkPFkDG6CLCbQ.jpg",
            "genre_ids": [
              878,
              12
            ],
            "id": 438631,
            "original_language": "en",
            "original_title": "Dune",
            "overview": "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence-a commodity capable of unlocking humanity's greatest potential-only those who can conquer their fear will survive.",
            "popularity": 1635.364,
            "poster_path": "/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
            "release_date": "2021-09-15",
            "title": "Dune",
            "video": false,
            "vote_average": 8,
            "vote_count": 4085
          },
          {
            "adult": false,
            "backdrop_path": "/d0mpUFKzoPwF1KsdjHpkkaYSvKm.jpg",
            "genre_ids": [
              37
            ],
            "id": 618162,
            "original_language": "en",
            "original_title": "The Harder They Fall",
            "overview": "Gunning for revenge, outlaw Nat Love saddles up with his gang to take down enemy Rufus Buck, a ruthless crime boss who just got sprung from prison.",
            "popularity": 1526.89,
            "poster_path": "/su9WzL7lwUZPhjH6eZByAYFx2US.jpg",
            "release_date": "2021-10-22",
            "title": "The Harder They Fall",
            "video": false,
            "vote_average": 6.8,
            "vote_count": 317
          },
          {
            "adult": false,
            "backdrop_path": "/4vCh8R4yd6ybOmbxRAPOzaXmLTV.jpg",
            "genre_ids": [
              10749,
              18
            ],
            "id": 744275,
            "original_language": "en",
            "original_title": "After We Fell",
            "overview": "Just as Tessa's life begins to become unglued, nothing is what she thought it would be. Not her friends nor her family. The only person that she should be able to rely on is Hardin, who is furious when he discovers the massive secret that she's been keeping. Before Tessa makes the biggest decision of her life, everything changes because of revelations about her family.",
            "popularity": 1637.706,
            "poster_path": "/y0BBwpk5IIVbV655mfeR7kCNYhb.jpg",
            "release_date": "2021-09-01",
            "title": "After We Fell",
            "video": false,
            "vote_average": 7.2,
            "vote_count": 903
          },
          {
            "adult": false,
            "backdrop_path": "/8Y43POKjjKDGI9MH89NW0NAzzp8.jpg",
            "genre_ids": [
              35,
              28,
              12,
              878
            ],
            "id": 550988,
            "original_language": "en",
            "original_title": "Free Guy",
            "overview": "A bank teller called Guy realizes he is a background character in an open world video game called Free City that will soon go offline.",
            "popularity": 1437.118,
            "poster_path": "/xmbU4JTUm8rsdtn7Y3Fcm30GpeT.jpg",
            "release_date": "2021-08-11",
            "title": "Free Guy",
            "video": false,
            "vote_average": 7.8,
            "vote_count": 3727
          },
          {
            "adult": false,
            "backdrop_path": "/bwPXMrDyPDaSiQaOmUo10GLn0rf.jpg",
            "genre_ids": [
              27
            ],
            "id": 775943,
            "original_language": "es",
            "original_title": "Llanto Maldito",
            "overview": "Sara and Óscar, a couple going through a marital crisis, decide to spend a week in a remote country cabin with their two children, Alicia and Tomás. The family tries to have a quiet time, but something strange happens there. There is a woman who prowls through the forest and cries uncontrollably looking for a baby she has just lost. This deeply affects the family who will have to stay together to survive this nightmare.",
            "popularity": 1105.883,
            "poster_path": "/iwlmZKndp7fIfHbxVzQtk9zby3A.jpg",
            "release_date": "2021-07-29",
            "title": "Tarumama",
            "video": false,
            "vote_average": 4.8,
            "vote_count": 9
          },
          {
            "adult": false,
            "backdrop_path": "/2OFg5p9yarI5zZsUWKCRgBgPctj.jpg",
            "genre_ids": [
              28,
              12
            ],
            "id": 568620,
            "original_language": "en",
            "original_title": "Snake Eyes: G.I. Joe Origins",
            "overview": "After saving the life of their heir apparent, tenacious loner Snake Eyes is welcomed into an ancient Japanese clan called the Arashikage where he is taught the ways of the ninja warrior. But, when secrets from his past are revealed, Snake Eyes' honor and allegiance will be tested – even if that means losing the trust of those closest to him.",
            "popularity": 866.923,
            "poster_path": "/uIXF0sQGXOxQhbaEaKOi2VYlIL0.jpg",
            "release_date": "2021-07-22",
            "title": "Snake Eyes: G.I. Joe Origins",
            "video": false,
            "vote_average": 6.8,
            "vote_count": 820
          },
          {
            "adult": false,
            "backdrop_path": "/hugKriLPeBm3lErSCQiFOgQzpkC.jpg",
            "genre_ids": [
              28,
              53,
              80
            ],
            "id": 574060,
            "original_language": "en",
            "original_title": "Gunpowder Milkshake",
            "overview": "In her turbulent life as a professional assassin, Sam has no choice but to go rogue to save the life of an innocent 8-year-old girl in the middle of the gang war she has unleashed.",
            "popularity": 810.905,
            "poster_path": "/5AaKulwpUtkscAokKWtLenGTfVS.jpg",
            "release_date": "2021-07-14",
            "title": "Gunpowder Milkshake",
            "video": false,
            "vote_average": 6.5,
            "vote_count": 375
          },
          {
            "adult": false,
            "backdrop_path": "/eBGKU0ZLJmxtVtzESTB1mfllX1J.jpg",
            "genre_ids": [
              80,
              28,
              53
            ],
            "id": 630004,
            "original_language": "en",
            "original_title": "The Vault",
            "overview": "When an engineer learns of a mysterious, impenetrable fortress hidden under The Bank of Spain, he joins a crew of master thieves who plan to steal the legendary lost treasure locked inside while the whole country is distracted by Spain's World Cup Final. With thousands of soccer fans cheering in the streets, and security forces closing in, the crew have just minutes to pull off the score of a lifetime.",
            "popularity": 785.195,
            "poster_path": "/kWhXubAiIcHW0xn5GThflqaKZqh.jpg",
            "release_date": "2021-03-03",
            "title": "The Vault",
            "video": false,
            "vote_average": 7.1,
            "vote_count": 419
          },
          {
            "adult": false,
            "backdrop_path": "/icOUc1llxf2GJr1Z4dBbJYLzuvw.jpg",
            "genre_ids": [
              27,
              53,
              35
            ],
            "id": 871964,
            "original_language": "pl",
            "original_title": "W lesie dziś nie zaśnie nikt 2",
            "overview": "When something horrible happens to the only survivor of a bloody massacre, an insecure rookie cop must overcome his fears to stop further carnage.",
            "popularity": 746.113,
            "poster_path": "/6QvepemlDGIiiYsVs0Y1ieFuG7N.jpg",
            "release_date": "2021-10-27",
            "title": "Nobody Sleeps in the Woods Tonight 2",
            "video": false,
            "vote_average": 3.9,
            "vote_count": 89
          },
          {
            "adult": false,
            "backdrop_path": "/akwg1s7hV5ljeSYFfkw7hTHjVqk.jpg",
            "genre_ids": [
              16,
              35,
              12,
              10751
            ],
            "id": 459151,
            "original_language": "en",
            "original_title": "The Boss Baby: Family Business",
            "overview": "The Templeton brothers — Tim and his Boss Baby little bro Ted — have become adults and drifted away from each other. But a new boss baby with a cutting-edge approach and a can-do attitude is about to bring them together again … and inspire a new family business.",
            "popularity": 756.723,
            "poster_path": "/uWStkK8bq9ixY3fc7y209ZleCoF.jpg",
            "release_date": "2021-07-01",
            "title": "The Boss Baby: Family Business",
            "video": false,
            "vote_average": 7.7,
            "vote_count": 1605
          },
          {
            "adult": false,
            "backdrop_path": "/wfrfxivLOBtGMC98tIr2LSOeKSe.jpg",
            "genre_ids": [
              16,
              35,
              10751
            ],
            "id": 639721,
            "original_language": "en",
            "original_title": "The Addams Family 2",
            "overview": "The Addams get tangled up in more wacky adventures and find themselves involved in hilarious run-ins with all sorts of unsuspecting characters.",
            "popularity": 773.666,
            "poster_path": "/ld7YB9vBRp1GM1DT3KmFWSmtBPB.jpg",
            "release_date": "2021-10-01",
            "title": "The Addams Family 2",
            "video": false,
            "vote_average": 7.3,
            "vote_count": 607
          },
          {
            "adult": false,
            "backdrop_path": "/8VmF0Cg7CZTfMeTtsF7k2Wrj38Z.jpg",
            "genre_ids": [
              27
            ],
            "id": 672582,
            "original_language": "en",
            "original_title": "The Deep House",
            "overview": "While diving in a remote French lake, a couple of YouTubers who specialize in underwater exploration videos discover a house submerged in the deep waters. What was initially a unique finding soon turns into a nightmare when they discover that the house was the scene of atrocious crimes. Trapped, with their oxygen reserves falling dangerously, they realize the worst is yet to come: they are not alone in the house.",
            "popularity": 714.296,
            "poster_path": "/5xhAPxRr64oQPEFnUOrttuI4ZEU.jpg",
            "release_date": "2021-06-30",
            "title": "The Deep House",
            "video": false,
            "vote_average": 6.2,
            "vote_count": 213
          },
          {
            "adult": false,
            "backdrop_path": "/t9i5kSC6mYPRtc9hDlFeziLESa8.jpg",
            "genre_ids": [
              16,
              35,
              10751,
              14
            ],
            "id": 876716,
            "original_language": "en",
            "original_title": "Ciao Alberto",
            "overview": "With his best friend Luca away at school, Alberto is enjoying his new life in Portorosso working alongside Massimo - the imposing, tattooed, one-armed fisherman of a few words - who's quite possibly the coolest human in the entire world as far as Alberto is concerned. He wants more than anything to impress his mentor, but it's easier said than done.",
            "popularity": 947.194,
            "poster_path": "/buq1OIx6nGsknTy2cHxWTqKXVB.jpg",
            "release_date": "2021-11-12",
            "title": "Ciao Alberto",
            "video": false,
            "vote_average": 7.8,
            "vote_count": 150
          }
];

const parseData = () => {
    const data = movies.map(movie => ({
        title: movie.title,
        genre: '',
        overview: movie.overview,
        release_date: movie.release_date,
        vote_average: movie.vote_average,
        poster_path: 'https://image.tmdb.org/t/p/w500' + movie.poster_path,
    }));

    const jsonData = JSON.stringify(data);

    fs.writeFile('movies.json', jsonData, (err) => {
        if (err) throw err;
    });
};

parseData();