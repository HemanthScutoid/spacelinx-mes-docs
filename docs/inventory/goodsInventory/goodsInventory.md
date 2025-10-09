# 📦 Goods Inventory

The **Goods Inventory** page helps you manage and track all finished goods or stocked items available in your warehouse.  
It provides a clear and organized overview of every item’s **quantity**, **price**, and **SKU code**, helping ensure accurate stock visibility and control.

---

## 🧾 Overview

### What is Goods Inventory?

**Goods Inventory** represents the collection of all finished items or ready-to-use materials that are stored and available for sale, dispatch, or production use.

Each item (or part) includes details like:

- **Item Number**
- **Item Name**
- **Available Quantity**
- **Unit Price**
- **SKU Code**

This section serves as your real-time window into what’s currently available in your inventory system.

---

### Why do we need Goods Inventory?

In manufacturing and supply chain operations, it’s crucial to maintain an accurate record of all goods that are:

- ✅ Ready for dispatch
- 🔁 Awaiting allocation to production or assembly
- 🏷️ Available for sale or internal use

By maintaining an updated Goods Inventory, your organization can:

- Avoid stock shortages and delays
- Monitor product availability
- Ensure pricing accuracy
- Streamline warehouse and logistics planning

---

## 🗂️ Page Layout

### 1. Header Section

At the top of the page, you’ll find:

- **Page Title** → “Goods Inventory”
- **+ Add New Button** → Used to add new goods or items to inventory.
  - Access is controlled by user permissions — only users with **Modify permission** can add new entries.

If a user without permission clicks this button, a **warning alert** appears indicating restricted access.

---

### 2. Goods Inventory Table

Below the header, a table lists all inventory items in the system.  
The table displays key information for each good:

| Column            | Description                                                                      |
| ----------------- | -------------------------------------------------------------------------------- |
| **Item Number**   | Unique number identifying the part or good. Clickable link to view full details. |
| **Item Name**     | The descriptive name of the item.                                                |
| **Unit Price**    | Displays the per-unit cost (formatted in ₹ with two decimal precision).          |
| **Qty Available** | Shows how many units are currently in stock.                                     |
| **SKU Code**      | Displays the Stock Keeping Unit code or “-” if not defined.                      |

Clicking the **Item Number** opens a detailed view or edit drawer (if user has viewing permission).

---

### 3. Add / Edit Goods Inventory

When you click **+ Add New** or select an existing item:

- A **drawer panel** slides in from the right.
- Based on your action:
  - **New Goods Inventory** form appears (for adding a new item).
  - **Edit Goods Inventory** form appears (for viewing or editing an existing item).

You can:

- Update item details like unit price or quantity.
- Review inventory-related data.
- Save or close the drawer.

After saving or closing, the table refreshes automatically to show updated data.

---

### 4. Alerts & Notifications

All actions show contextual alerts on the screen:

- ✅ **Success** – When a new good is added or data is updated.
- ⚠️ **Warning** – When you lack permissions to perform an action.
- ❌ **Error** – If data fetching or saving fails.

Alerts appear at the bottom-right corner, ensuring users are aware of every action’s result.

---

### 5. Loader & Data Refresh

- While fetching inventory data, a **loader animation** appears.
- Once loading completes, the table displays sorted results (latest inventory entries appear first).
- The page automatically refreshes the list whenever a drawer closes after changes.

---

## 🔐 Permissions

Access to this page and its actions is controlled through user permissions:

| Action                | Required Permission |
| --------------------- | ------------------- |
| **View Item Details** | GOODS.VIEW          |
| **Add / Edit Items**  | GOODS.MODIFY        |

If you try to access or modify goods without the proper permissions, the system shows a **warning message** and disables the respective action.

---

## 💡 Tips for Users

- Click the **Item Number** to view or edit detailed inventory information.
- Use the **Add New** button to add goods only when you have modify rights.
- Always verify **quantity** and **unit price** before saving updates.
- Refresh the page after saving to confirm the latest inventory list.
- If data doesn’t load immediately, wait for the loader to complete — it automatically updates once fetched.

---

✅ You now understand how to view, add, and manage **Goods Inventory** in the system with full visibility into each item’s availability and pricing.
