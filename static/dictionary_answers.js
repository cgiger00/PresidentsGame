//answer key 
var answers = [ 18 , 7 , 1, 3, 10, 6, 4, 14, 9, 16, 22, 20, 33, 37, 28, 40, 35]; 

//president clues 
var pres_dict = {

35 : ["(6 pts.) Television cameras were allowed in the Lincoln and Monroe rooms for "+
"first time as my wife gave a live tour of the White House that was shown simultaneously"+
" on CBS, NBC, and ABC. My wife was the youngest First Lady since the 1880’s. <3",

"(4 pts.) I was born and attended college in the North. I also attended school in a foreign country.",

"(2 pts.) Two of my brothers and I have served in the U.S. Senate. In December 1996, the "+
"Washington Redskins played their last game in the stadium named for one of those brothers."],	

40 : ["(6 pts.) As a boy, I was called “Specs.” I had a brother called “Moon” by my parents,"+
" Nell and Jack. My son covered my summit meeting with the Russian leader in Geneva for a national magazine.",

"(4 pts.) During my first term in the White House, U.S. health officials chose the term “AIDS” for a new"+
" disease. I once said, “There’s nothing better for the inside of a man than the outside of a horse.”",

"(2 pts.) I quoted actor Clint Eastwood’s character “Dirty Harry,” daring Congress to pass a bill I "+
"threatened to veto: “Go ahead, make my day.” The Iran-Contra scandal cast a shadow over my eighth year "+
"in the White House."],	

28 : ["(6 pts.) I remembered seeing General Robert E. Lee and Jefferson Davis when"+
	" I was a boy. The son of a minister, I loved the theater, played golf, and was a good"+
	" singer.",

	"(4 pts.) My second wife, Edith, sat in on my private conferences. She was the only other "+
	"person who knew the codes used to send messages to generals in Europe. The last part of my"+
	" presidency was called “petticoat government” because she would let no one and no document "+
	"reach me without her approval.",

	"(2 pts.) At age 45, I became president of the college that counted James Madison among "+
	"its graduates. This post was my stepping stone into politics."],

37 : ["(6 pts.) I said, “Politics … makes me sick.” My wife Nellie pushed me into"+
	" accepting the nomination to the presidency. Ten weeks into my presidency, Nellie "+
	"suffered a stroke that partially paralyzed her.",

	"(4 pts.) During my one term in the White House, the Carlisle Indian School football "+
	" team, coached by Glenn “Pop” Warner and led by Jim Thorpe, upset Harvard. About a "+
	"month before I left office, Wyoming’s legislature cast the 36th “yes” vote, making "+
	"the Sixteenth Amendment the law of the land.",

	"(2 pts.) While attending the theater one night, I got stuck in my seat."],	

33 : ["(6 pts.) The Communist leader, Mao Tse Tung, proclaimed the People’s Republic "+
	"of China. Two days later, I announced, “We have evidence an atomic explosion occurred "+
	"in the U.S.S.R.”",
	
	"(4 pts.) As a boy, I wore thick eyeglasses, which restricted my participation in sports. "+
	" As a consequence, I learned to play the piano and became an avid reader.",
	
	"(2 pts.) Like two of my predecessors, both of whom had the same last name, I offered the "+
	"American people a “deal.” My proposals included a Fair Employment Practices Commission and "+
	"Federal funds for education and national health insurance."],	

20 : ["(6 pts.) I had a history of mental depression. After the Battle of "+
	"Shiloh, my health began to deteriorate. My wife Lucretia nursed me back to "+
	"health. We had become engaged while I was teaching at Eclectic Institute in "+
	"my native state, a college co-founded by Lucretia’s father.",
	
	"(4 pts.) While in Congress, I admitted taking stock from Credit Mobilier at a "+
	"time when the company needed legislative favors. I defeated my Democratic opponent,"+
	" General Winfield S. Hancock, for the presidency.",
	
	"(2 pts.) I was shot at a railroad station in Washington where I was waiting to board"+
	" a train to see my wife, who was recovering from malaria in New Jersey. My two wounds"+
	" should not have been fatal. However, I contracted blood poisoning when doctors probed for "+
	"the bullet with unsterilized instruments. 79 days later, I died."],	

22 : ["(6 pts.) I was the second president who had not been married when I "+
	"entered the White House. During my presidency, Carnegie Hall opened in New "+
	"York; Tchaikovsky conducted his own music at the opening concert.",
	
	"(4 pts.) During my second term as president, a year after a worldwide financial"+
	" panic hit the American economy hard, Congress passed a graduated income tax aimed"+
	" entirely at the less than one percent of the population with earnings in excess"+
	" of $4,000 per year. However, the following year the Supreme Court ruled the law"+
	" unconstitutional.",
	
	"(2 pts.) Early in my political career, I served as county sheriff, mayor, and "+
	"governor. I admitted during my campaign for president that I had fathered an "+
	"illegitimate son. This admission defused what could have been a damaging issue for me."],	

16 : ["(6 pts.) My face was on the front of the t-shirt worn by Timothy McVeigh "+
	"the day of the Oklahoma City bombing. Under the face was the phrase “Sic semper "+
	"tyrannus.” Early in my life, I refused to attend the funeral of my father.",

	"(4 pts.) I opposed the Mexican War, which hurt my political ambitions for years. "+
	"My opponent in the race for the U.S. Senate did not hesitate to remind voters that "+
	"I had taken “the side of the common enemy, in time of war, against his own country.”",

	"(2 pts.) A famous music center in New York City is named for me. Also an automobile "+
	"bears my name, as well as a city in Nebraska."],	

9  : ["(6 pts.) I was the first candidate to campaign on a train. I did this during a losing "+
	"campaign four years before I was elected president. During my successful campaign, my supporters"+
	" rolled huge paper or tin balls printed with campaign slogans from town to town as part of "+
	"parades and rallies. “Keep the ball rolling” became a common American expression.",

	"(4 pts.) After the War of 1812, I had a steady if unspectacular political career, with service "+
	"in the House of Representatives, the Senate, and the diplomatic corps.",

	"(2 pts.) I gave the longest inaugural address ever – nearly two hours – during a snowstorm."+
	" I lived to regret it, although not for long."],	

14 : ["(6 pts.) During my second year at Bowdoin College in Maine, I had the lowest grades"+
	" in my class. I changed my study habits, and graduated third in my class. Among my classmates"+
	" were Nathaniel Hawthorne and Henry Wadsworth Longfellow.",
	
	"(4 pts.) Rufus King, my first vice-president, was sworn in outside the U.S. and never"+
	" set foot in Washington during my term. King, an alcoholic with tuberculosis, traveled "+
	"to Cuba following his election to try to regain his health. His health did not improve, " +
	"however, and he was unable to travel to Washington when the time came to be sworn in, so he "+
	"took the oath in Cuba, propped up by his aides. Within a month. it was clear that he was"+
	" dying, so he returned to his Alabama plantation where he died after only six weeks as vice-president.",
	
	"(2 pts.) A renewal of the storm between the North and the South occurred during my presidency."+
	" This was due mainly to the Kansas-Nebraska Act, which repealed the Missouri Compromise and reopened"+
	" the question of slavery in the West. This measure, the handiwork of Senator Stephen A. Douglas, grew "+
	"in part out of his desire to promote a railroad from Chicago to California through Nebraska."],	

10 : ["(6 pts.) I was the first president whose wife died while I was in office. " +
	"I was the only president to hold office in the Confederacy. Five years after leaving" +
	" office, I was so poor I was unable to pay a bill for $1.25 until I had sold my corn crop. ",

	"(4 pts.) Shortly after I became President, Congress passed two bills to create a new Bank " +
	"of the United States. I vetoed both as unconstitutional, the second amid charges that "+ 
	"I had expressed my approval privately before it was passed. An uproar followed where all "+ 
	"the members of my cabinet except Daniel Webster resigned in allegiance to Whig Congressional leaders.",

	"(2 pts.) I was the one president who was not a U.S. citizen when I died. A native of " +
	"Virginia, I died in that state as a citizen of the Southern Confederacy."],

6  : ["(6 pts.) During my presidency, the Erie Canal opened, construction of the Baltimore "+ 
	"& Ohio railroad began, and I went skinny-dipping in the Potomac. ",
	
	"(4 pts.) When I ran for president, no party labels were used. Instead candidates "+
	"came forward on the basis of regional endorsements. None of the candidates "+
	"received a majority of the electoral vote, and the election was thrown to the "+
	"House of Representatives.",
	
	"(2 pts.) Like my father, I was no “life of the party.” I described himself as " + 
	"“a man of reserved, cold, and forbidding manners.” And I was notoriously careless "+
	"about my dress, at one point wearing the same hat for ten years."],

4  : ["(6 pts.) My wife and I were the guests of honor at the first inaugural ball " +
	" held on the day of the inauguration. An Indian uprising in the South brought on" +
	" the Creek Indian War. Francis Lowell built the first U.S. plant designed to " +
	"manufacture cloth from raw cotton by power machinery.",

	"(4 pts.) I died in the state in which I was born, although I went to college in" + 
	" a different state. During my administration, the pirate Jean Lafitte became a" +
	" national hero, as did Captain James Lawrence, who uttered the immortal phrase, " +
	"“Don’t give up the ship!”",
	
	"(2 pts.) In the face of a British invasion, my wife Dolley sent my papers into the" +
	" country and, as she headed out the door of the White House with the painting of George "+
	"Washington under her arm, she scooped up a precious copy of the Declaration of Independence."],	

18 : ["(6 pts.) During the year 2000, three novels were published about me." +
	" One historian has written: “It’s [his] essential ordinariness that keeps " +
	" him interesting and appealing.” I was a man of few words. Son of a tanner," +
	" I was born in a northern state in a house just one step up from a log cabin.",

	"(4 pts.) My father Jesse was an abolitionist, but my father-in-law Frederick" +
	" Dent was pro-slavery. “Horses seem to understand [him],” my mother Hannah once"+
	" said about me.",

	"(2 pts.) My secretary of the treasury, William Richardson, was forced to resign "+
	"after it was discovered he allowed a tax collector to keep 50 percent of the "+
	"delinquent taxes he tracked down. Also the notorious “Whiskey Ring” stole"+
	" millions of dollars in liquor taxes."],	

7 :	["(6 pts.) I delivered my inaugural address on the platform under the eastern portico "  + 
	"of the Capitol, starting a trend that has continued to the present. I vetoed far more " +
	"bills than any previous president. None of my vetoes were overridden by Congress. Most " +
	"of these vetoes involved bills for building roads or improving harbors.",

	"(4 pts.) I rode to see my successor inaugurated in a carriage made of the wood of the " +
	"frigate Constitution. That successor had been my vice president for my second term.",

	"(2 pts.) My wife lacked the social training of earlier First Ladies; she and I had not " +
	"traveled to Europe, were unacquainted with most of the classics of literature, and were unfamiliar " +
	"with East Coast drawing room etiquette. As a result, we became the focus of critical gossip and " +
	"heard our grammar and accents mimicked."],

3 : ["(6 pts.) I urged Congress to sweep away just about all the taxes that had been imposed on " +
	"the American people. During my first term as president, the whiskey tax (as well as other similar, " +
	"direct taxes) was repealed.",

	"(4 pts.) I was so much opposed to show and form in government that I wanted Washington to be " +
	"inaugurated in 1793 in his house, privately, without show or speech of any kind. I also believed " +
	"that in America, as opposed to France, women knew their place, which was in the nursery. American " +
	"women, I said, were content with 'the tender and tranquil amusements of domestic life.'",

	"(2 pts.) I organized my library into three sections: Memory, Reason, and Imagination. My " +
	"library later formed the core of the Library of Congress."],

1 : ["(6 pts.) At age 26, I was described this way: “His frame is padded with " + 
	"well-developed muscles, indicating great strength … His mouth is large and " +
	"generally firmly closed, but which from time to time discloses some defective " +
	"teeth.” The first Congress of my presidency was more than a month late in assembling " +
	"and officially verifying my election. ",

	"(4 pts.) During my first year in office, I toured New England alone on horseback " +
	"for 28 days. In Boston, Governor John Hancock did not welcome me; so I stayed at " +
	"a boarding house." ,

	"(2 pts.) With the passing years, my doubts about slavery grew. I noted the parallel " +
	"between the “arbitrary rule of Britain over the American colonies and the ‘arbitrary " +
	"sway’ of Virginians over their … slaves.” I provided for the freeing of my slaves at " +
	"my wife’s death and guaranteed their support. In the 1830s, payments were still being " +
	"made to my aging freedmen."],

0 : ["Sorry, no more clues are avaliable"]

};