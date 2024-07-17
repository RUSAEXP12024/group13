function air_main() {

  // スプレッドシートとシートを取得
  var ss = SpreadsheetApp.openById(sheetId);
  var sheet1 = ss.getSheetByName(sheetName1);
  var sheet2 = ss.getSheetByName(sheetName2);
  var situation = getLastRow2();

  if(situation==1){
    var arg = recordSensorData(); //remoから温度、湿度取得

    if (arg.hu > 50){

      airconJho();//エアコンを除湿にする
      
    }else if (arg.te > 28){

      airconOn();//エアコンを冷房にする

    }
  }else{
      airconOff();// エアコンをOFFにする
    }
}

//getLastRow2関数で最終行を取得するコード
function getLastRow2() {
  var ss = SpreadsheetApp.openById(sheetId);
  let sheet = ss.getSheetByName(sheetName2);
  let lastRow = sheet.getLastRow();
  return lastRow;
}

// エアコンON
function airconOn(){
  Logger.log('a');
    var url = "https://api.nature.global/1/signals/3e5e1013-a0b8-430f-a177-df3beb503913/send"
    var options = {
      "method" : "post",
      "headers" : {"Authorization" : "Bearer 7ST2XLgBKsFEjqeTunrdiaGZJSVqGTeYYI5AwOz-iig.sG1bW5apSDz2rKue_GL0ZzQRMZrCdL7SXhwn5ZSP_Z4"}
    };
    var reply = UrlFetchApp.fetch(url, options);
}

// エアコンOFF
function airconOff(){
  Logger.log('b');
    var url = "https://api.nature.global/1/signals/d96805ef-a11c-442d-957d-7fb2b624a68b/send"
    var options = {
      "method" : "post",
      "headers" : {"Authorization" : "Bearer 7ST2XLgBKsFEjqeTunrdiaGZJSVqGTeYYI5AwOz-iig.sG1bW5apSDz2rKue_GL0ZzQRMZrCdL7SXhwn5ZSP_Z4"}
    };
    var reply = UrlFetchApp.fetch(url, options);
}

// エアコン除湿
function airconJho(){
   Logger.log('c');
    var url = "https://api.nature.global/1/signals/2376365a-4009-4942-a18f-13310c651a5f/send"
    var options = {
      "method" : "post",
      "headers" : {"Authorization" : "Bearer 7ST2XLgBKsFEjqeTunrdiaGZJSVqGTeYYI5AwOz-iig.sG1bW5apSDz2rKue_GL0ZzQRMZrCdL7SXhwn5ZSP_Z4"}
    };
    var reply = UrlFetchApp.fetch(url, options);
}