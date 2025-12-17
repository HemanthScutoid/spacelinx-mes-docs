# Create Goods Receipt Note (New GRN)

The **New GRN** form allows you to create a new **Goods Receipt Note (GRN)** based on purchase orders.  
It ensures materials received are properly recorded, validated, and documented.

---

## Layout & Tabs

The GRN creation screen opens in a **flyout drawer** with two tabs:

1. **GRN Details**

   - Select purchase order
   - Enter invoice details, location, dates, and notes
   - Record received quantities for each line item

2. **Documents**
   - Upload supporting documents (invoice, delivery challan, etc.)
   - At least **one document is required** before submitting

At the bottom of each tab:

- **Cancel** → Closes the drawer without saving
- **Create** → Validates and submits the GRN

---

## Fields & Inputs

| Field              | Description                                                                                         | Validation |
| ------------------ | --------------------------------------------------------------------------------------------------- | ---------- |
| **Purchase Order** | Dropdown of available POs (Issued / Partially Delivered). Selecting a PO auto-loads its line items. | Required   |
| **Received Date**  | Date when goods were received.                                                                      | Required   |
| **Location**       | Location where goods are received.                                                                  | Required   |
| **Invoice Number** | Supplier’s invoice number.                                                                          | Required   |
| **Invoice Date**   | Invoice date from supplier.                                                                         | Required   |
| **Reference**      | Optional reference number.                                                                          | Optional   |
| **Description**    | Additional notes.                                                                                   | Optional   |

---

## Line Items Table

Displayed when a Purchase Order is selected.

| Column           | Description                            |
| ---------------- | -------------------------------------- |
| **Part Number**  | Part being received                    |
| **Ordered Qty**  | Total ordered quantity                 |
| **Pending Qty**  | Remaining quantity not yet received    |
| **Received Qty** | Input field to enter received quantity |

### Rules for Received Qty:

- Must be **≥ 0**
- Cannot exceed **Pending Qty**
- If invalid, an **error message** appears under the field

---

## Documents Tab

- **At least one file upload is mandatory** before submitting.
- Permissions control whether you can **view, upload, or delete** documents.

---

## Validation Flow

- All required fields must be filled (PO, Location, Invoice No, Dates).
- At least **one line item** must have a valid **Received Qty > 0**.
- At least **one document** must be uploaded.
- If any validation fails:
  - User is shown an **error alert**.
  - The system switches to the relevant tab to fix inputs.

---

## Actions

- **Create GRN**

  - Submits details, line items, and documents.
  - On success → Success alert shown, drawer closes, and list refreshes.
  - On failure → Error alert with reason.

- **Cancel**
  - Closes the drawer without saving.

---

## Permissions

- You must have the correct **Goods Receipts permissions** to create or upload documents.
- Limited permissions may allow **view only** access.

---

## Notes

- Dates are shown in **YYYY-MM-DD** format.
- Validation errors are shown inline (under fields) and via alerts.
- Line items auto-populate from the **selected Purchase Order**.

---
