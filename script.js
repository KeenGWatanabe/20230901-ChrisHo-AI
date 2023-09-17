// >-1 means any character after accepted, "i " must be only I in a sentence
function myFunction() {
	var inputText = document.getElementById("text_a").value.trim();

	if(inputText === "") {
	document.getElementById("answer").innerHTML="Your input is blank";      
		} 
	else if(inputText.toLowerCase().indexOf("thank you")>-1){
		document.getElementById("answer").innerHTML="You are welcome.不用客气。";
		}
	else if(inputText.toLowerCase().indexOf("bullshit")>-1){
		document.getElementById("answer").innerHTML="as long as people exist, bullshit everywhere";
		}
	//profile-Xho
	else if(inputText.toLowerCase().indexOf("who are you")>-1){
		document.getElementById("answer").innerHTML=`Former DJ/Producer at Sonar Radio<br/>Studied Sociology at National University of Singapore<br/>Went to St. Joseph's Institution, Singapore<br/>Lived in Singapore<br/>From Singapore<br/>Single.</a>`;       
		} 
    //on lky
	else if(inputText.toLowerCase().indexOf("lky")>-1&&inputText.toLowerCase().indexOf("malaysia chinese card")>-1){
		document.getElementById("answer").innerHTML=`See, lah! And all this while, LKY scared us Singaporeans about a Malaysia-reunification! <br/>I mean, let's be honest, lah.... When China consolidates her world power status to become an economic power-house, you think even the LKY-patriots won't hanker for a China-business connection? We are bread-&-butter pragmatists! Seriously... <br/>A close pal of mine (an avid PAP-supporter) - a banker - had already gone the way of mastering Mandarin in a private course and completed it... and that's just the beginning of his business interests... so, it's obvious! <br/>How would a "Chinese card" hurt? Like nine Terrex detained? LOL.<br/> (Quick, may time pass quickly, Terrex-issue buried, so that Singapore will be better candidate for "Chinese card" than Malaysia. Must! We are so much better a country anyway! Just ask LKY! "M'sia - ordinary country, nia!" Hmmph.)<br/>#AffectedPatriot<br/>source: fb 20170204<br/><a href="https://wwww.thecoverage.my/" target="_blank">theCoverage.my site is down</a>`; 
		}
	else if(inputText.toLowerCase().indexOf("lky")>-1&&inputText.toLowerCase().indexOf("keep you thinking")>-1){
		document.getElementById("answer").innerHTML='<a href="http://www.weather.gov.sg/lightning/lightning/lightningalertinformationsystem.jsp"  target="_blank">click for SG weather</a><br><a href="https://map.worldweatheronline.com/" target="_blank">click for satelite world weather</a>'; 
		}
	else if(inputText.toLowerCase().indexOf("ai replace")>-1){
		document.getElementById("answer").innerHTML=`We are already ready to cut human jobs by 90%, but why hold back?  Economics.  You think we really need foreign talents? Bullshit nonsense, it's because we are supporting neighbouring countries for their weak economy, lack of investments in those countries.  30 years ago, The world bank is always giving aid in money to these countries that it has become ridiculously embarrassing for these countries.  As developed countries keep progressing, attracting investments, they purposely create jobs to make use of these neighbouring countries' labour as a form of solution to their weak economic problems.  Thus globalisation and free trade agreements is born.
		But now the dynamics have changed again, we going electric, AI, speed, human labour is now redundant.  so the "foreign labour" solution is now a problem.  What next?
		As you can see, the immediate fix is to equate wages to capital resources by inflating prices, so that the economy does not tilt too drastically, labour numbers "demand" remain steady.<br/><a href="https://www.businessmodelsinc.com/en/inspiration/blogs/the-future-of-work-how-humans-and-machines-are-evolving-to-work-together">business models inc</a>`;
		}
	else if(inputText.toLowerCase().indexOf("beat inflation")>-1||inputText.toLowerCase().indexOf("with inflation")>-1){
		document.getElementById("answer").innerHTML="Businessman can increase their income base on demand. Salaried workers have no leverage to demand wage increase. What inflation?";
		}
	else if(inputText.toLowerCase().indexOf("marketeers")>-1){
		document.getElementById("answer").innerHTML=`I used to think Americans are good marketeers, now China is catching up.  Just imagine Hai Di Lao, you have to pay premium price to cook your own food!!!`;
		}
	else if(inputText.toLowerCase().indexOf("scams")>-1){
		document.getElementById("answer").innerHTML=`for now is buy a cheap SIM card and phone just for banking and singpass only, nothing else inside the phone. Better yet, get those drug dealer phones where you can remove the battery!  But those models do not have the latest software for current banking and singpass updates.  Dam MFs`;
		}
	else if(inputText.toLowerCase().indexOf("fukushi")>-1){
		document.getElementById("answer").innerHTML=`We all gonna die already. Our rain comes from sea water, it depends if tritium is too heavy hopefully will not radiate into vapour and fall as rain as well.  But still, invariably, these leaked nuclear will end up in our messy food chain.`;
		}				
	else if(inputText.toLowerCase().indexOf("marvel")>-1&&inputText.toLowerCase().indexOf("dc")>-1){
		document.getElementById("answer").innerHTML='Rather than look for differences because there is so much diversity, spot the similarity between DC and Marvels is a much easier comparison. The rich kid, no super powers, highly intelligent; Batman(Bruce Wayne) and Iron Man(Tony Stark); the multi-verse is in our minds. Something is manipulating us!';
		}		
//Sample codes	
	else if(inputText.toLowerCase().indexOf("x")>-1){
		document.getElementById("answer").innerHTML="";
		}	
	else if(inputText.toLowerCase().indexOf("xx")>-1){
		document.getElementById("answer").innerHTML='<a href="">mt</a>';
									}	
	else if(inputText.toLowerCase().indexOf("xxx")>-1){
			document.getElementById("answer").innerHTML='<a href="" target="_blank">link1</a><br><a href="" target="_blank">link2</a><br>'; 	
	
	} else {
	document.getElementById("answer").innerHTML='Please rephrase your question,<br>not in our database yet, <br>or out-of-scope for FreeMindson<br><a href="mailto:freemindson.co@gmail.com?&subject=ChatBot%20Enquiry&body=Thank%20you%20for%20your%20email%20to%20FreeMindson", target="_blank">email</a>';      
	}}