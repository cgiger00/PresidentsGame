//answer key 
var answers = [ 18 , 7 , 1, 3 ]; 

//president clues 
var pres_dict = {

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