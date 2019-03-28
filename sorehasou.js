function alert_sorehasou(){
    alert("それはそう");
}
function alert_sorehasouzyanaino(){
    alert("それはそうじゃないの？");
}

// 将来的にはOKとキャンセルじゃなくてそれはそうかを聞きたい
function confirm_sorehasouzyanaino(){
    var let;
    let=confirm("それはそうじゃないの？");
    if (let){
        location.href = 'https://www.google.com/';
    }
    else {
        alert("それはそう");
    }   
}
