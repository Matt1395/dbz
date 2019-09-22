<?php

require 'vendor/autoload.php';

$loader = new Twig_Loader_Filesystem('views/layouts');
$twig = new Twig_Environment($loader);

$request = $_SERVER['REQUEST_URI'];

switch ($request) {
    case '/' :
    echo $twig->render('hello.html', array(
        'name' => 'Ben',
        'age' => 26,
    
        'intro' => array(
        'welcome' => 'Let me introduce you to the World of Dragon Ball Z!',
        'introduction' => 'Dragon Ball Z (commonly abbreviated as DBZ) is a Japanese anime television series produced by Toei Animation. It is the sequel to Dragon Ball and adapts the latter 325 chapters of the original 519-chapter Dragon Ball manga series created by Akira Toriyama which ran in Weekly Shōnen Jump from 1988 to 1995.',
        'story' => 'Dragon Ball Z continues the adventures of Goku, who, along with his companions, defend the Earth against villains ranging from aliens (Frieza), androids (Cell) and other creatures (Majin Buu). While the original Dragon Ballanime followed Goku from childhood to early adulthood, Dragon Ball Z is a continuation of his adult life, but at the same time parallels the life of his son, Gohan, as well as the development of his rival Vegeta.',
        'charIntro' => 'Some of the reccuring characters are:',
    
        'characters' => array(
            array('name' => 'Goku', 'age' => 18),
            array('name' => 'Gohan', 'age' => 22),
            array('name' => 'Vegeta', 'age' => 34),
            array('name' => 'Piccolo', 'age' => 62),
            array('name' => 'Krillin', 'age' => 34),
            array('name' => 'Yamcha', 'age' => 34),
            array('name' => 'Bulma', 'age' => 34)
        )),
    
        'images' => array(
            array('img' => 'http://2.media.dorkly.cvcdn.com/24/51/5ac1845ed5e8c42ffe02e5cd57b952e1.jpg'),
            array('img' => 'https://s3.amazonaws.com/sneakerfreaker-cdn/image/2017/DEEBZ.jpg?mtime=20180802162004'),
            array('img' => 'https://vignette.wikia.nocookie.net/dragonuniverse/images/c/cb/DragonBalls.png/revision/latest?cb=20170426092949'),
            array('img' => 'https://pm1.narvii.com/6661/6bf1158619a08a68b0dd44c457d19ef60a4daa0e_hq.jpg'),
            array('img' => 'https://images6.alphacoders.com/647/thumb-1920-647551.jpg')
        )
    ));
    break;
    case '/characters' :
    echo $twig->render('characters.html', array(
        'characters' => array(
            array('name' => 'Goku', 'img' => 'https://media1.giphy.com/media/Dh9jqNm8YcGVG/giphy.gif', 'about' => "Son Goku is the main protagonist of the Dragon Ball manga series. He is based on Sun Wukong, a main character in the classic Chinese novel Journey to the West and Superman, with whom he shares a very similar origin story. Initially believed to have been born on Earth, Goku later learns that he is a member of an extraterrestrial warrior race called the Saiyans, which is also the reason for his superhuman strength, and his birth name is Kakarot. As Goku grows up, he becomes the Earth's mightiest warrior and protects his adopted home planet from those who seek to destroy it. Goku is depicted as carefree and cheerful when at ease, but quickly serious and strategic-minded when in battle and also enthusiastic to fight. He is able to concentrate his Ki and use it for devastatingly powerful energy-based attacks; the most prominent being his signature Kamehameha, in which Goku launches a blue energy blast from his palms. Also pure of heart, Goku has frequently granted mercy to his enemies, which has often earned him additional allies in the process (though has also resulted in others taking advantage of his kindness), and he is one of the few who can ride the magic cloud called Kinto'un (Somersault Cloud, renamed Flying Nimbus)."),
            array('name' => 'Gohan', 'img' => 'https://media3.giphy.com/media/4oX0CdYMn0xY4/giphy.gif?cid=790b7611847b4bfe094f3620819bd8e5769ea9d3aadab3a6&rid=giphy.gif', 'about' => "Son Gohan is the elder son of the series' primary protagonist Goku and his wife Chi-Chi, the older brother of Goten, the husband of Videl and father to Pan. He is named after Goku's adoptive grandfather, Gohan. Unlike his father, Gohan lacks a passion for fighting and prefers to do so only when the need to defend his loved ones arises. (although he does possess a strong power within him) Nevertheless, Gohan fights alongside the Dragon Team in the defense of Earth for much of his life."),
            array('name' => 'Vegeta', 'img' => 'https://media1.tenor.com/images/e4494317b30a60e648e00846c4c3de1b/tenor.gif?itemid=7248615', 'about' => "Vegeta, recognized as Prince Vegeta is the prince of the fallen Saiyan race and one of the major characters of the Dragon Ball series. He is the eldest son of Vegeta III, the older brother of Tarble, the husband of Bulma, the father of Trunks and Bulla, and the ancestor of Vegeta Jr. Alongside Goku, Gohan, Bulma, Krillin, and Piccolo, he is easily one of the most prominent characters in the series, receiving more character development after being introduced than a number of other characters. Regal, egotistical, and full of pride, Vegeta was once a ruthless, cold-blooded warrior and outright killer, but later abandons his role in the Frieza Force, instead opting to remain and live on Earth, fighting alongside the universe's most powerful warrior, specifically with the mission to defeat and surpass Goku in power. His character evolves from villain, to anti-hero, to a hero through the course of the series."),
            array('name' => 'Bulma', 'img' => 'https://66.media.tumblr.com/ed3223fbf3575069733ddc6c6c8ef2de/tumblr_oaat161PDt1vsic9jo2_250.gif', 'about' => "Bulma is a brilliant scientist and the second daughter of Capsule Corporation's founder Dr. Brief and his wife Panchy, the younger sister of Tights, and is Goku's first friend. She used to be the girlfriend of Yamcha, but moved on and, eventually, became the wife of Vegeta, as well as the mother of Trunks and Bulla. While she is unable to physically fight most of the villains in the series, her gadgetry plays a key role in winning several battles as well as the search for the Dragon Balls. Bulma is the most significant female character in the series. Aside from Goku, Bulma is the single longest-running character in the entire meta-series, being introduced in the first Dragon Ball chapter and episode, and maintaining a prominent role until the final chapter of the manga and the final episode of Dragon Ball GT."),
            array('name' => 'Piccolo', 'img' => 'https://media.tenor.com/images/0fd997a206eddb50dd6a7f1ba5b4abe6/tenor.gif', 'about' => "Piccolo Jr., usually just called Piccolo also known as Ma Junior, is a Namekian and also the final child and reincarnation of King Piccolo, later becoming the reunification of the Nameless Namekian after fusing with Kami. According to Grand Elder Guru, Piccolo, along with Kami and King Piccolo, are part of the Dragon Clan, who were the original creators of the Dragon Balls. A wise and cunning warrior who was originally a ruthless enemy of Goku, Piccolo later becomes a permanent member of the Dragon Team, largely due to forming a mutual respect to Goku and even more from forming a close bond with Goku's first-born son Gohan."),
            array('name' => 'Krillin', 'img' => 'https://pa1.narvii.com/6245/aa76a2b33696145865e0228ab7f4fcaf5f1ed306_hq.gif', 'about' => "Krillin is a supporting protagonist in the Dragon Ball anime series, Dragon Ball Z, Dragon Ball GT and Dragon Ball Super. Krillin had a brief rivalry with Goku when they first met and trained under Master Roshi, but they quickly became lifelong best friends. One of the most powerful and talented martial artists on Earth, Krillin is courageous, a faithful ally and good-natured. He is a prominent Z Fighter, despite usually being overpowered by the major enemies. His short stature and baldness (with the exception of when he grows out his hair in the Majin Buu Saga onwards) aid him in his ability to provide comic relief during tense moments. During the latter half of Dragon Ball Z, he largely retires from fighting, opting to settle down with his family instead, becoming the husband of Android 18 and the father of Marron. However, he returns to his lifestyle as a warrior later on in Dragon Ball Super."),
            array('name' => 'Yamcha', 'img' => 'https://i.pinimg.com/originals/e4/fa/79/e4fa795fe1f148231c8d6d65af17fe76.gif', 'about' => "Yamcha is a main protagonist in the Dragon Ball manga and in the anime Dragon Ball, and later a supporting protagonist in Dragon Ball Z and Dragon Ball Super, with a few appearances in Dragon Ball GT. He is a former boyfriend of Bulma and the lifelong best friend of Puar. A former desert bandit, Yamcha was once an enemy of Goku, but quickly reformed and became a friend and ally. Brave, boastful and dependable, Yamcha is a very talented martial artist and one of the most powerful humans on Earth, possessing skills and traits that allow him to fight alongside his fellow Z Fighters when major threats loom. Although he retired by the latter half of Dragon Ball Z, due to being largely outclassed by both his allies (namely the Saiyans) and their enemies, he is always present whenever a new threat approaches, and will occasionally lend a helping hand, thus proving himself to be a powerful ally in his own right."),
            array('name' => 'Tien', 'img' => 'http://bigcalsworld.co.uk/wp-content/uploads/2014/11/bloggif_546c8cbea5365.gif', 'about' => "Tien Shinhan is a disciplined, reclusive and heavily devoted martial artist, and one of the strongest Earthlings within the Dragon Ball universe. He also possesses a few non-human traits due to being descended from the Three-Eyed People. He was originally a student of the Crane School who desired revenge against Goku for defeating his mentor, Mercenary Tao, but realized he was on the wrong side with the help of Master Roshi. He battles alongside the other Z Fighters against major threats to the Earth surface, often courageously engaging enemies far more powerful than himself. However, he spends most of his time training with his lifelong best friend, Chiaotzu.") 
        )
    
    ));
    break;
    case '/cards' :
    echo $twig->render('cards.html', array(
        'fighters' => array(
            array(
                'id' => '1',
                'name' => 'Goku', 
                "description" => "Goku is often at the forefront of all the fight in the DBZ universe for the Z Fighers. His natural skill and confidence makes him a pesky opponent to defeat. Especially once he goes Super Saiyan.", 
                "img" => "https://vignette.wikia.nocookie.net/dbz-dokkanbattle/images/2/21/Dl5OdcoU0AAtMfQ.jpeg/revision/latest?cb=20181122082552",
                'attributes' => array(
                    array("name" => 'Race:', "value" => "Saiyan (Ginyu's race)"), 
                    array("name" => "Height:", "value" => "175"), 
                    array("name" => "Weight:", "value" => "62"),
                    array("name" => "Goodness Level:", "value" => "9"),
                    array("name" => "Evil Level:", "value" => "0"),
                    array("name" => "Fighitng Skill:", "value" => "10"), 
                    array("name" => "Matt's Ranking:", "value" => "19"))),
            array(
                'id' => '2',
                'name' => 'Frieza',
                "description" => "Frieza is one of the early villains the Z Fighters come across. His skill in combat is as great as his ego. He uses these skills to attempt to complete his goal of destroying all Saiyans.", 
                "img" => "https://vignette.wikia.nocookie.net/villains/images/5/5d/Frieza.png/revision/latest?cb=20190209052711",
                'attributes' => array(
                    array("name" => 'Race:', "value" => "Frieza Race (mutant)"),
                    array("name" => "Height:", "value" => "158"),
                    array("name" => "Weight:", "value" => "Unknown"),
                    array("name" => "Goodness Level:", "value" => "2"),
                    array("name" => "Evil Level:", "value" => "10"),
                    array("name" => "Fighitng Skill:", "value" => "8"),
                    array("name" => "Matt's Ranking:", "value" => "14"))),
            array(
                "id" => "3",
                'name' => 'Cell',
                "description" => "Cell is a formidable adversary that was created using the genetics of the greatest fighters to have been present on Earth. The Z Fighters to battle hard to stop him reaching his end goal of destroying all things imperfect",
                "img" => "https://vignette.wikia.nocookie.net/dragonball/images/b/b4/Cell_DBZ_Ep_177_001.png/revision/latest?cb=20170921030318",
                'attributes' => array(
                    array("name" => 'Race:', "value" => "Bio-Android"),
                    array("name" => 'Height:', "value" => "213"),
                    array("name" => "Weight:", "value" => "unknown"),
                    array("name" => "Goodness Level:", "value" => "1"),
                    array("name" => "Evil Level:", "value" => "8"),
                    array("name" => "Fighitng Skill:", "value" => "10"),
                    array("name" => "Matt's Ranking:", "value" => "8"))),
            array(
                "id" => "4",
                'name' => 'Vegeta',
                "description" => "Prince Vegeta comes to earth to battle the powerful Kakarot (Goku). It is clear early on Vegeta posses incredible strength and arrogance to win at all costs. But after his loss, and meeting Bulma, Vegeta becomes a valuable asset to the Z Fighters.",
                "img" => "https://vignette.wikia.nocookie.net/dbmoves/images/0/00/Vegetapan-1-.jpg/revision/latest?cb=20111023155207",
                'attributes' => array(
                    array("name" => 'Race:', "value" => "Tuffle-Saiyan"),
                    array("name" => 'Height:', "value" => "164"),
                    array("name" => "Weight:", "value" => "56"),
                    array("name" => "Goodness Level:", "value" => "6"),
                    array("name" => "Evil Level:", "value" => "3"),
                    array("name" => "Fighitng Skill:", "value" => "9"),
                    array("name" => "Matt's Ranking:", "value" => "17"))),
            array(
                "id" => "5",
                'name' => 'Gohan',
                "description" => "Gohan is the eldest son of Goku. Often belived to be more powerful than his legendary farther but he is much less willing to fight. Often only choosing to when absolutely necessary and looks to offer mercy when possible.",
                "img" => "https://vignette.wikia.nocookie.net/dragonball/images/5/5e/GohanSuperSaiyanIINV.png/revision/latest?cb=20100506144945",
                'attributes' => array(
                    array("name" => 'Race:', "value" => "Human-Saiyan"),
                    array("name" => 'Height:', "value" => "176"),
                    array("name" => "Weight:", "value" => "61"),
                    array("name" => "Goodness Level:", "value" => "11"),
                    array("name" => "Evil Level:", "value" => "0"),
                    array("name" => "Fighitng Skill:", "value" => "11"),
                    array("name" => "Matt's Ranking:", "value" => "18"))),
            array(
                "id" => "6",
                'name' => 'Piccolo',
                "description" => "Piccolo is initially one of the first villains Goku faces. After being defeated by Goku he humbles and starts working with the Z Fighters, even training Gohan for the battle with Vegeta. After his merge with Kami he become Earth's Guardian.",
                "img" => "https://static.fjcdn.com/pictures/Dbz_0258e7_5503020.jpg",
                'attributes' => array(
                    array("name" => 'Race:', "value" => "Demonic Namekian"),
                    array("name" => 'Height:', "value" => "226"),
                    array("name" => "Weight:", "value" => "116"),
                    array("name" => "Goodness Level:", "value" => "7"),
                    array("name" => "Evil Level:", "value" => "1"),
                    array("name" => "Fighitng Skill:", "value" => "8"),
                    array("name" => "Matt's Ranking:", "value" => "17"))),
            array(
                "id" => "7",
                'name' => 'Majin Buu',
                "description" => "Majin Buu has many different forms and personalities. Super Buu (picutred above) is the result of Evil Buu absorbing Good Buu which means Super Buu has the strength and intellect of both with non of the morality.",
                "img" => "https://vignette.wikia.nocookie.net/dragonball/images/e/e3/Majin_Buu_DBZ_Ep_263_002.png/revision/latest?cb=20180121183408",
                'attributes' => array(
                    array("name" => 'Race:', "value" => "Tuffle-Saiyan"),
                    array("name" => 'Height:', "value" => "244"),
                    array("name" => "Weight:", "value" => "unknown"),
                    array("name" => "Goodness Level:", "value" => "0"),
                    array("name" => "Evil Level:", "value" => "9"),
                    array("name" => "Fighitng Skill:", "value" => "10"),
                    array("name" => "Matt's Ranking:", "value" => "15"))),
            array(
                "id" => "8",
                'name' => 'Krillin',
                "description" => "Krillin is the lifelong best friend of Goku. One of the strongest fighters actually from Earth but often finds himself out classed in the battles throughout the series. Regardless he is always with his fellow Z Fighters to  save his home and his loved ones.",
                "img" => "http://66.media.tumblr.com/3ab260d45a7a047511d497bf2de2177d/tumblr_n9n6l4wmxj1sopnxqo1_500.gif",
                'attributes' => array(
                    array("name" => 'Race:', "value" => "Human"),
                    array("name" => 'Height:', "value" => "153"),
                    array("name" => "Weight:", "value" => "45"),
                    array("name" => "Goodness Level:", "value" => "10"),
                    array("name" => "Evil Level:", "value" => "0"),
                    array("name" => "Fighitng Skill:", "value" => "6"),
                    array("name" => "Matt's Ranking:", "value" => "18")))
    )));
    break;
    case '/characters/${ id }' :
    break;
}