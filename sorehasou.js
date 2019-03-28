function alert_sorehasou(){
    window.alert("それはそう");
}
function alert_sorehasouzyanaino(){
    window.alert("それはそうじゃないの？");
}

// 将来的にはOKとキャンセルじゃなくてそれはそうかを聞きたい
function confirm_sorehasouzyanaino(){
    var sorehasou;
    sorehasou=window.confirm("それはそうじゃないの？");
    if (sorehasou){
        window.location.href = 'https://www.google.com/';
    }
    else {
        window.alert("それはそう");
    }   
}
