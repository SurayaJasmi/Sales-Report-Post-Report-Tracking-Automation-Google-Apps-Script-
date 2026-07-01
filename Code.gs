function sendEmails() {

  var sheetName = 'Email List';
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);

  var trackingSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Tracking');

  var range = sheet.getRange('B2:E');
  var data = range.getValues();

  var reportPeriod = sheet.getRange('H1').getValue();

  for (var i = 0; i < data.length; i++) {

    var emailAddress = data[i][0];
    var ccEmails = data[i][1];
    var supplierName = data[i][2];
    var reportLink = data[i][3];

    if (!emailAddress) continue;

    var emailSubject =
      "Sales Report - " + reportPeriod + " - " + supplierName;

    var emailBody =
      "Dear Supplier,<br><br>" +

      "Please find your sales report for <b>" + reportPeriod + "</b> below:<br><br>" +

      "Sales Report: " +
      "<a href='" + reportLink + "'>" +
      supplierName + " Sales Report</a><br><br>" +

      "If you have any questions regarding the report, please contact our support team.<br><br>" +

      "Best regards,<br>" +
      "Operations Team";

    MailApp.sendEmail({
      to: emailAddress,
      cc: ccEmails,
      subject: emailSubject,
      htmlBody: emailBody
    });

    // Update tracking sheet
    if (trackingSheet && supplierName) {

      var trackingData = trackingSheet
        .getRange('A3:A' + trackingSheet.getLastRow())
        .getValues();

      for (var j = 0; j < trackingData.length; j++) {

        if (
          String(trackingData[j][0]).trim().toLowerCase() ===
          String(supplierName).trim().toLowerCase()
        ) {

          var statusCell = trackingSheet.getRange(j + 3, 10);

          statusCell.setValue("YES");
          statusCell.setBackground("#b7e1cd");

          break;
        }
      }
    }
  }
}
