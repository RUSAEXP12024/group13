function recordSensorData() {
  var situation = getLastRow2();
  if (situation == 1) {
    const deviceData = getNatureRemoData("devices"); //data取得
    const lastSensorData = getLastData("Sheet1"); //最終data取得

    var arg = {
      te:deviceData[0].newest_events.te.val,//温度
      hu:deviceData[0].newest_events.hu.val,//湿度
  }

    setSensorData(arg, lastSensorData + 1);
    
  }
  

  return arg;
}

function setSensorData(data, row) {
  getSheet('Sheet1').getRange(row, 1, 1, 4).setValues([[new Date(), data.te, data.hu, data.il]])
}
