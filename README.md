# Sales Report & Post-Report Tracking Automation (Google Apps Script)

This project showcases enhancements made to an existing Google Apps Script used for supplier sales report distribution. My contribution focused on automating the post-report tracking process by updating the reporting status after successful email delivery, reducing manual administrative work and improving reporting accuracy.

> **Note:** The supplier email generation and distribution workflow was part of an existing automation. This project highlights my enhancements to the post-report tracking process.

---

## My Contribution

I enhanced the existing automation by:

* Automatically updating the **Summary** sheet after successful email delivery.
* Eliminating the need for manual report tracking.
* Maintaining a centralized report execution tracker to improve visibility of completed reports.

---

## Features

* Automatically records successful email delivery in the tracking sheet.
* Eliminates manual report tracking.
* Maintains a centralized report execution tracker.
* Improves reporting accuracy and consistency.

---

## Workflow

1. An existing automation sends personalized sales report emails to suppliers.
2. After each successful email delivery, the supplier name is identified.
3. The corresponding supplier is automatically marked as **YES** in the **Summary** sheet.
4. The updated tracking sheet provides a centralized record of completed report distribution.

---

## Setup

1. Open Google Sheets → **Extensions** → **Apps Script**.
2. Paste the script into `Code.gs`.
3. Ensure the following sheets exist:

   * `EMAIL Execution`
   * `Summary`
4. Enter the reporting period in cell `H1`.
5. Run `sendEmails()`.

---

## Summary Tracking

The automation automatically updates the **Summary** sheet after each successful email, replacing a manual tracking process with an automated status update.

---

## Technical Highlights

* Google Apps Script
* Google Sheets Automation
* GmailApp
* SpreadsheetApp
* Spreadsheet Data Processing
* Automated Status Tracking

---

## Screenshots

### Existing Email Execution Process

The existing automation retrieves supplier information from the **EMAIL Execution** sheet before sending sales report emails.

![EMAIL Execution](screenshots/email-execution-list.png)

### Existing Email Distribution

Supplier sales report emails are generated and sent through the existing automation.

![Email Generation](screenshots/email-output.png)

### My Contribution: Automated Summary Tracking

After each successful email, the corresponding supplier is automatically marked as **YES** in the **Summary** sheet, eliminating manual tracking.

![Summary Tracking](screenshots/summary.png)
