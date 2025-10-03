# Edit Requisition Page

## Overview

The **Edit Requisition** page allows users to view, edit, and manage existing requisitions in the system. It is designed for users with appropriate permissions to make changes to requisition details, add or update line items, submit, approve, or reject requisitions. This page provides a structured interface to manage requisitions efficiently.

---

## User Perspective

From a user's point of view, the page provides a **read-only view** by default for most users, showing the requisition details and line items. Users with appropriate permissions can switch to **edit mode** to modify details or perform actions like submitting or approving.

---

## Features

### Header

- Displays the requisition number (`reqNumber`).
- Shows the current **status** of the requisition: Draft, Submitted, or Approved.
- Provides buttons to:
  - Switch to **edit mode** (if user has modify permissions and the requisition is a Draft).
  - Close the requisition flyout.

### Tabs

The page uses a **tabbed layout**:

1. **Details Tab**

   - **Title:** Editable text field for the requisition title.
   - **Requested By:** Autocomplete field to select the staff member requesting the requisition.
   - **Request Date:** Date picker for the required-by date.
   - **Priority:** Autocomplete to select Low, Medium, or High.
   - **Project:** Autocomplete to link the requisition to a specific project.
   - **Justification:** Multiline text field to describe the reason for the requisition.
   - All fields are **read-only** by default, editable only if the user switches to edit mode.

2. **Line Items Tab**
   - Displays all line items in a **DataGrid** with columns:
     - Part Number
     - Part Name
     - Quantity
     - Description
     - Actions (delete line item if in edit mode)
   - In **edit mode**, users can:
     - Add new line items with part selection, quantity, and optional description.
     - Edit or update existing line items.
     - Delete line items after confirmation.
   - Shows a warning if the user tries to add a part that already exists.

---

## Actions and Permissions

The page adapts based on the **requisition status** and **user permissions**:

- **Draft Requisition**

  - Users with modify permission can:
    - Edit requisition details.
    - Add, update, or delete line items.
    - Reset the form to its original values.
    - Submit the requisition.

- **Submitted Requisition**

  - Users with approver permission or super admin role can:
    - Approve the requisition.
    - Reject the requisition.

- **Approved Requisition**
  - Requisition details are read-only for all users.

All actions prompt the user with a **confirmation dialog** to prevent accidental changes.

---

## Validation

- Mandatory fields in **Details**:
  - Title
  - Requested By
  - Priority
- Mandatory fields in **Line Items**:
  - Part
  - Quantity
- Errors are displayed inline for each field, guiding the user to correct issues before submission.

---

## Loading State

- Shows a **loader** while fetching requisition, staff, or parts data.
- Ensures the user cannot perform actions until all data is fully loaded.

---

## Footer

- Displays action buttons depending on **edit mode** and **requisition status**:
  - **Draft**: Reset, Update, Submit.
  - **Submitted** (for approvers): Reject, Approve.
- Alerts are shown using **Flyout Alerts** for feedback on actions.

---

## Summary of User Flow

1. User opens a requisition to view details.
2. If they have permissions and the requisition is Draft:
   - Click **edit** to modify details.
   - Update fields or line items as needed.
   - Submit or update the requisition.
3. Approvers for submitted requisitions can:
   - Approve or reject the requisition after confirmation.
4. All actions show real-time feedback using alerts.

---

## Notes

- The interface is **tab-based**, separating requisition details and line items for clarity.
- Supports **inline editing** for line items via the DataGrid.
- Ensures **permission-based control** for all critical actions.
