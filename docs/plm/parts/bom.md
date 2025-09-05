# Bill of Materials (BOM) – Create & Manage

The **BOM Creation page** allows you to attach **child parts** to a parent part, define their quantities, and manage relationships between parts. This is used to define how a product is built.

---

## When You Can Use It

- BOM can be created or modified only if the **parent part is in Draft status**.
- You must have **Modify permission** to add, update, or delete child parts.
- Once the parent part is released, the BOM becomes **read-only**.

---

## Add a Child Part

1. **Select Part**

   - Use the search box to find an available part.
   - You can search by **Part Number** or **Name**.
   - Obsolete parts are not available.
   - Already attached child parts cannot be re-added (system will notify you).

2. **Enter Quantity**

   - Enter the required number of units.
   - Must be a positive number (`> 0`).

3. **Click “ADD”**
   - The selected part will be attached to the parent part.
   - A success message is shown.

---

## Update Quantity

- To update a quantity:
  1. Click the **Quantity** cell of the child part in the table.
  2. The part will load into the form with the existing quantity.
  3. Enter the new value.
  4. Click **Update** to save changes.
  5. Use **Cancel** to exit without updating.

---

## Delete a Child Part

- Click the **trash icon** in the child part row.
- Confirm deletion when prompted.
- If the child part is linked to a **guide**, it cannot be deleted.

---

## BOM Table

All attached child parts are listed in a table with the following details:

| Column          | Description                                                              |
| --------------- | ------------------------------------------------------------------------ |
| **Part Number** | Child part number. Clickable to view part details.                       |
| **Name**        | Name of the child part.                                                  |
| **Quantity**    | Number of units required. Editable in Draft mode.                        |
| **Status**      | Status of the child part (blank if Draft).                               |
| **Type**        | Part type (e.g., Component, Assembly).                                   |
| **Make/Buy**    | Indicates whether the part is made internally (Make) or purchased (Buy). |
| **Actions**     | Delete icon (only in Draft mode).                                        |

If no child parts are attached, the table shows: **“No BOM Attached.”**

---

## Rules & Validations

- **At least one child part** can be attached to define a BOM.
- Quantity must be a **positive integer**.
- A part cannot be attached as a child to itself.
- Deleting a child part is **permanent** and cannot be undone.
- Permissions:
  - Users with **View only** can see the BOM but cannot modify it.
  - Users with **Modify permission** can add, update, and delete.

---
