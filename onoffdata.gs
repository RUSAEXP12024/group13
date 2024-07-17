const LINE_TOKEN = 'axBUZQnTywv29WPIX/rPWwujLExj2hdkMKbDDBdKFkTt3svAm9uRa0uxz64cD9Bq/3gsYPsggQfHVkGIZp6W4UzRbJu6EFDxYN1jyLtwl/0IkjUvaMaTPe35vPFzhOpv2gHIBl8RF+eQVnvUOvYGQAdB04t89/1O/w1cDnyilFU=';
const LINE_ENDPOINT = 'https://api.line.me/v2/bot/message/push';
const LINE_USERID = 'Uae01fc2f231548e7714bc52c380603c2';

// Google SheetsのIDを設定
const sheetId = '1PKNaFcdwqIG0QuzThjzEhqA-i6rdg4YA4T5PLyVYcac';
const sheetName1 = 'Sheet1';
const sheetName2 = 'Sheet2'; // シート名を指定


//1hごとにスプレッドシートから取得する
//そのデータをif文にかけでエアコンを操作する

function getSituation(userMessage) {
  // メッセージが "ON" なら 1 を、"OFF" なら 0 を返す
  return (userMessage === "ON") ? 1 : (userMessage === "OFF") ? 0 : "Invalid Message";
}

// LINEで打ち込むごとに0,1をスプレッドシートに書き込む関数
function doPost(e) { //

  // スプレッドシートとシートを取得
  var ss = SpreadsheetApp.openById(sheetId);
  var sheet = ss.getSheetByName(sheetName2);

  // ユーザーのメッセージを取得
  var userMessage = JSON.parse(e.postData.contents).events[0].message.text;

  // メッセージが "ON" なら 1 を、"OFF" なら 0 を書き込む
  var value = getSituation(userMessage);
  sheet.getRange(sheet.getLastRow() + 1, 1).setValue(value);

  // var arg = recordSensorData(); //remoから温度、湿度取得

}


function linePush(e) {
  var situation = getLastRow2();
  if (situation == 1) {
  // スプレッドシートとシートを取得
  var ss = SpreadsheetApp.openById(sheetId);
  var sheet = ss.getSheetByName(sheetName1);

  const COLUMN_NUM_TE = 2;
  const COLUMN_NUM_HU = 3;

  var arg1 = sheet.getRange(sheet.getLastRow(), COLUMN_NUM_TE).getValue();
  var arg2 = sheet.getRange(sheet.getLastRow(), COLUMN_NUM_HU).getValue();

  let message = `※機能:ON\n
  現在室温：${arg1}℃\n
  現在湿度：${arg2}%`;
  lineReply(message);
  }
}


function lineReply(replyText) {

  const headers = {
    "Authorization": "Bearer " + LINE_TOKEN,
    'Content-type': 'application/json'
  }
  const messages = {
    "headers": headers,
    "to": LINE_USERID,
    "messages": [{
      "type": "text",
      "text": replyText
    }]
  };
  const options = {
    "headers": headers,
    "payload": JSON.stringify(messages)
  };

  UrlFetchApp.fetch(LINE_ENDPOINT, options);
}








