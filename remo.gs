function getNatureRemoData(endpoint) {
  const REMO_ACCESS_TOKEN = 'Ng1owb7T4WgX0BBVtzvYC5xCJ_wPPazVo7OVV7iUkjA.AX1mpM6ZcSm5lTpSZ5e1mZYwEVKFqOuXRZV_kJQClZs'
  const headers = {
    "Content-Type" : "application/json;",
    'Authorization': 'Bearer ' + REMO_ACCESS_TOKEN,
  };

  const options = {
    "method" : "get",
    "headers" : headers,
  };

  return JSON.parse(UrlFetchApp.fetch("https://api.nature.global/1/" + endpoint, options));
}

