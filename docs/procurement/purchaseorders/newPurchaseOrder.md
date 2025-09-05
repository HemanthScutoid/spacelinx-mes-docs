# Create Purchase Order

The **Create Purchase Order** screen allows you to raise a new purchase order by filling in vendor, project, billing, shipping, and item details.

---

## How to Use

1. Select the **Vendor** (supplier) from the list.
2. Choose **Payment Terms**.
3. Enter **Order Date** (default is today).
4. Provide **Billing** and **Shipping Organization & Addresses**.
5. (Optional) Select a **Project** linked to the PO.
6. Add **Expected Delivery Date** (cannot be earlier than Order Date).
7. Enter at least **one Line Item** (parts, quantity, unit price, tax, etc.).
8. (Optional) Add **Terms & Conditions**.
9. (Optional) Upload supporting **Documents**.
10. Click **Create** to save the Purchase Order.

---

## Required Fields

| Field                     | Description                                    | Validation/Notes                                        |
| ------------------------- | ---------------------------------------------- | ------------------------------------------------------- |
| **Vendor**                | Supplier/vendor for the PO.                    | Mandatory. Must select one.                             |
| **Payment Terms**         | Defines payment conditions with vendor.        | Mandatory.                                              |
| **Order Date**            | Date when the order is created.                | Mandatory. Defaults to today.                           |
| **Billing Organization**  | Organization to which the bill will be issued. | Mandatory. Must also have a valid **Billing Address**.  |
| **Shipping Organization** | Organization to which goods will be delivered. | Mandatory. Must also have a valid **Shipping Address**. |
| **Delivery Date**         | Expected delivery date of items.               | Mandatory if entered. Cannot be before Order Date.      |
| **Line Items**            | List of parts/items being ordered.             | Mandatory. At least one line item required.             |

---

## Optional Fields

| Field              | Description                                                      |
| ------------------ | ---------------------------------------------------------------- |
| **Project**        | Project under which the PO is created.                           |
| **Requisition**    | Required only if PO type is _From Requisition_.                  |
| **PO Terms**       | Terms & Conditions applicable for this PO.                       |
| **Discount / Tax** | Discounts and applicable tax options per line item.              |
| **Documents**      | Upload supporting files like quotations, contracts, or invoices. |

---

## Tabs

- **Overview** → Fill in all PO details (Vendor, Addresses, Dates, Line Items).
- **Documents** → Upload and manage related files.

---

## Notes

- ⚠️ You must add **at least one line item** before creating the PO.
- ⚠️ If PO type = _From Requisition_, selecting a **Requisition** is mandatory.
- Column validations ensure delivery date cannot be before order date.
- Default **Billing/Shipping Organization** is auto-selected if configured.
- After successful creation, you are redirected back to the **Purchase Orders** list.
