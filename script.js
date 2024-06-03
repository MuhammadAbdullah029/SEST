let btn = document.querySelector("button");



btn.addEventListener("click", function(){
    let text = document.querySelector("input").value;
    let google = document.querySelector(".google").checked;
    let googlescholar = document.querySelector(".googlescholar").checked;
    let youtube = document.querySelector(".youtube").checked;
    let gpt = document.querySelector(".gpt").checked;
    let wiki = document.querySelector(".wiki").checked;
    let bing = document.querySelector(".bing").checked;
    let rg = document.querySelector(".rg").checked;
    let wa = document.querySelector(".wa").checked;
    let ddg = document.querySelector(".ddg").checked;
    let gn = document.querySelector(".gn").checked;
    console.log(text);
    
    if (google) {
        window.open(`https://www.google.com/search?q=${text}` , '_blank');
        
    }
    if (googlescholar) {
        window.open(`https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=${text}` , '_blank');
        
    }
    if (youtube) {
        window.open(`https://www.youtube.com/results?search_query=${text}` , '_blank');
        
    }
    if (gpt) {
        window.open(`https://chat.openai.com/chat?q=${text}` , '_blank');
        
    }

    if (wiki) {
        window.open(`https://en.wikipedia.org/wiki/Special:Search?search=${text}` , '_blank');
        
    }
    if (bing) {
        window.open(`https://www.bing.com/search?q=${text}` , '_blank');
        
    }
    if (rg) {
        window.open(`https://www.researchgate.net/search?q=${text}` , '_blank');
        
    }
    if (wa) {
        window.open(`https://www.wolframalpha.com/input?i=${text}` , '_blank');
        
    }
    if (ddg) {
        window.open(`https://duckduckgo.com/?t=h_&q=${text}` , '_blank');
        
    }
    if (gn) {
        window.open(`https://news.google.com/search?q=${text}` , '_blank');
        
    }

})

document.querySelector("input").addEventListener("keydown", function(e){
    if (e.key === 'Enter') {
        e.preventDefault();
        btn.click();
    }
})