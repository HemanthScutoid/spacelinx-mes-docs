# Purchase Order – Line Items

The **Line Items** section is where you define the materials or services being purchased in a Purchase Order (PO). It includes controls for adding new items, applying discounts, setting tax options, selecting a currency, and reviewing the cost summary.

---

## Line Item Controls

At the top of the section, the following controls are available:

| Control               | Description                                                                                                         | Availability                                                               |
| --------------------- | ------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| **+ Add a Line Item** | Adds a new blank row to the PO for selecting an item/part.                                                          | Enabled only if the PO is in **Draft** and user has **Modify permission**. |
| **Discount Level**    | Choose whether discounts are applied per **Item** or at the **Transaction level**.                                  | Draft only.                                                                |
| **Disc. Value**       | Enter discount value if `Transaction Level` is selected. You can choose **Percentage (%)** or **Fixed (Currency)**. | Draft only.                                                                |
| **GST Option**        | Select tax split for the PO: <br/>- SGST/CGST <br/>- IGST <br/>- No Tax Split                                       | Draft only.                                                                |
| **Currency Code**     | Select the currency in which the PO will be created. Defaults to the vendor’s currency if available.                | Draft only.                                                                |

---

## Line Items Table

The table lists all items added to the PO. Each row has the following fields:

| Column                                | Description                                                                                                                                                                 | Editable                             |
| ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ |
| **# Item**                            | Select an item (part, goods, or service). <br/>• Search by _Name_, _XDL No._, or _Manufacturer No._ <br/>• If the item doesn’t exist, you can create it directly from here. | ✅                                   |
| **HSN Code**                          | Enter the Harmonized System of Nomenclature (HSN) code for the item.                                                                                                        | ✅                                   |
| **Quantity**                          | Ordered quantity for the item.                                                                                                                                              | ✅                                   |
| **Unit Price**                        | Price per unit.                                                                                                                                                             | ✅                                   |
| **Subtotal**                          | Auto-calculated as `Quantity × Unit Price`.                                                                                                                                 | ❌ (calculated)                      |
| **Discount** (if Item Level selected) | Discount applied to the item. <br/>Choose between **%** or **Fixed Amount**.                                                                                                | ✅                                   |
| **Tax Type**                          | Select applicable tax group (SGST, IGST, Custom). <br/>You can also create a **New Tax Group** on the fly.                                                                  | ✅                                   |
| **Tax Value**                         | Value of the tax based on the selected type.                                                                                                                                | ✅ (unless tax type auto-calculates) |
| **Actions**                           | Delete the line item.                                                                                                                                                       | ✅ (only in Draft)                   |

---

## Cost Summary

At the bottom, a **Cost Summary panel** shows all calculated totals:

| Field                    | Description                                                                                             |
| ------------------------ | ------------------------------------------------------------------------------------------------------- |
| **Subtotal (Excl. Tax)** | Total before discounts and taxes.                                                                       |
| **Total Discount**       | Sum of discounts applied (item or transaction level).                                                   |
| **Tax Breakdown**        | Shown depending on GST option: <br/>• SGST/CGST split <br/>• IGST <br/>• No Tax Split (flat total tax). |
| **Grand Total**          | Final PO total after discount and taxes.                                                                |

---

## Tax Groups

You can create custom **Tax Groups** from within the line items table:

- **Name** → Tax group name.
- **Operator** → Choose `%` for percentage-based tax or `+` for fixed amount.
- **Value** → Tax rate or fixed amount.
- **Description** → Optional note.

Once created, new tax groups become available in the **Tax Type** dropdown for items.

---

## Rules & Permissions

- Only users with **Modify permission** can add or edit line items.
- Discounts and currency selection are locked after PO submission.
- Taxes and discounts must be valid (non-negative).
- At least one line item is required before a PO can be submitted.
- Deleted items cannot be recovered; they must be re-added.

---
