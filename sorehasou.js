function alert_sorehasou(){
    window.alert("それはそう");
}
function alert_sorehasouzyanaino(){
    window.alert("それはそうじゃないの？");
}

// 将来的にはOKとキャンセルじゃなくてそれはそうかを聞きたい
function confirm_sorehasouzyanaino(){
    var let;
    let=window.confirm("それはそうじゃないの？");
    if (let){
        window.location.href = 'https://www.google.com/';
    }
    else {
        window.alert("それはそう");
    }   
}
