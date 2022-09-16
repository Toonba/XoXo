var clickCount = 0
document.getElementById('buy').addEventListener('click', (event)=> {
    document.getElementById('purchaseLink').style.display = 'block';
    clickCount++;
    if(clickCount==2){
        document.getElementById('purchaseLink').style.display = 'none';
        clickCount = 0
}})