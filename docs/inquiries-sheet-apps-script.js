// Google Apps Script for the private "ARP Inquiries" Google Sheet.
// Paste into the Sheet's Extensions > Apps Script editor and deploy as a web app
// (Execute as: Me, Who has access: Anyone). The web app URL goes in the
// INQUIRIES_SHEET_URL secret on the arp-experiences Cloudflare Worker.
function doPost(e) {
  var payload = JSON.parse(e.postData.contents);
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  var headers = ["Received"].concat(payload.headers);

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(headers);
    sheet.getRange(1, 1, 1, headers.length).setFontWeight("bold");
    sheet.setFrozenRows(1);
  }

  sheet.appendRow([new Date()].concat(payload.values));
  return ContentService.createTextOutput("ok");
}
