# Goods Receipts – Overview

The **Goods Receipts (GRN)** page allows you to view, create, and manage goods receipt notes that record materials received against purchase orders.

---

## Page Layout

- **Header**

  - Page title: **Goods Receipts**
  - **+ Add New** button (visible only if you have permission to create GRNs).

- **Goods Receipts Table**

  - Displays all existing GRNs in a tabular format.
  - Clickable **GRN Number** opens the selected GRN in detail view.
  - Supports column visibility customization (your preferences are saved).

- **Drawers**

  - **New GRN Drawer**: Opens when you click **+ Add New**.
  - **Edit GRN Drawer**: Opens when you click an existing GRN row.

- **Alerts**
  - Success and error messages are shown at the bottom.

---

## Table Columns

| Column              | Description                                                       |
| ------------------- | ----------------------------------------------------------------- |
| **GRN Number**      | Unique identifier for the GRN. Click to view/edit (if permitted). |
| **PO Number**       | Related Purchase Order number.                                    |
| **PO Date**         | Date of the associated purchase order.                            |
| **Invoice Number**  | Supplier’s invoice number.                                        |
| **Invoice Date**    | Date on the supplier invoice.                                     |
| **Status**          | Current GRN status (e.g., Draft, Completed).                      |
| **Location**        | Location where items were received.                               |
| **Received By**     | Name of the person who received the items.                        |
| **Received Date**   | Date materials were received.                                     |
| **Created Date**    | When the GRN record was created.                                  |
| **Description**     | Additional details about the GRN.                                 |
| **Total Amount**    | Total monetary value of the GRN.                                  |
| **Delivery Status** | Progress of delivery (e.g., Pending, Completed).                  |
| **Delivery Date**   | Expected or actual delivery date.                                 |
| **Project ID**      | Linked project identifier.                                        |
| **Vendor Ref ID**   | Vendor’s reference identifier.                                    |
| **Is Active**       | Indicates whether the GRN record is active.                       |

---

## Actions

### Create a New GRN

- Click **+ Add New**.
- A drawer opens where you can enter details.
- On save, the new GRN appears in the list.

### View or Edit an Existing GRN

- Click the **GRN Number** or row.
- Opens the **Edit GRN Drawer**.
- Depending on your permissions:
  - You may **view only**.
  - Or **edit and update details**.

---

## Permissions

- **View Permission** → Can see GRN records and details.
- **Modify Permission** → Can create new GRNs.
- **No Permission** → System shows warning messages if access is restricted.

---

## Validations & Notes

- Dates are displayed in **DD-MM-YYYY** format.
- Alerts are shown for errors (e.g., failed to fetch data) or confirmations.
- Column visibility preferences are **saved in your session** and remembered until reset.

---
