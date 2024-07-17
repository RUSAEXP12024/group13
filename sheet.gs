function getSheet(name) {
  const SPREADSHEET_ID = '1PKNaFcdwqIG0QuzThjzEhqA-i6rdg4YA4T5PLyVYcac'
  const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = spreadsheet.getSheetByName(name);

  if (!sheet) {
    throw new Error('シートが見つかりません');
  }

  return sheet;
}

function getLastData(name) {
  return getSheet(name).getDataRange().getValues().length;
}

