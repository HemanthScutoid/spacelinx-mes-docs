# ⚙️ Parts Inventory

The **Parts Inventory** page helps you track and manage the physical stock of each part across multiple locations and bins.  
It ensures that every item in the system matches the actual quantity available in the warehouse — maintaining full **visibility**, **accuracy**, and **control** over your inventory.

---

## 🧾 Overview

### What is Parts Inventory?

**Parts Inventory** represents the total stock details of a specific part. It records where the part is stored, how much quantity is available, and how it’s distributed across different **locations** and **bins**.

### Why do we need Parts Inventory?

In manufacturing and production systems, parts are stored in multiple warehouse areas.  
The Parts Inventory module ensures:

- ✅ Accurate tracking of every part across all storage bins and locations
- 📦 Clear visibility of stock movement and quantity on-hand
- 🔄 Quick identification of reorder levels
- ⚠️ Prevention of shortages and overstocking

By maintaining an updated parts inventory, users can make informed decisions when issuing materials, creating kits, or placing purchase orders.

---

## 🗂️ Page Sections

### 1. Part Details

At the top, the system shows basic information related to the selected part:

- **Available Quantity** – Displays the total on-hand stock.
- **SKU Code** – A unique identifier for the part.
- **Unit Price** – Cost per unit of the part.
- **Reorder Level** – The minimum quantity before triggering a restock.

Users can update these details when editing inventory.

---

### 2. Add or Revise Inventory Entry

You can manage stock details using the **accordion section** titled **Add Inventory Entry**.  
This section allows you to:

- Select a **Location** (where the part is stored)
- Select a **Bin Code** (specific bin under that location)
- Enter **Quantity** to add or revise stock

After entering the details:

- Click **Add** to create a new entry
- If revising, click **Revise** to update the existing record

Once saved, the system automatically updates the total quantity and recalculates available stock.

---

### 3. Inventory Table

The main section displays a structured **tree-style table** of all inventory records for the selected part.

| Column             | Description                                                                             |
| ------------------ | --------------------------------------------------------------------------------------- |
| **Location / Bin** | Shows the warehouse location and its bins. Clicking a bin lets you revise its quantity. |
| **Aisle**          | Indicates the aisle number (if applicable).                                             |
| **Rack**           | Shows the rack identifier under that aisle.                                             |
| **Quantity**       | Displays the stock available in that specific bin or the total quantity per location.   |

**Parent rows** represent locations, while **child rows** represent individual bins within those locations.

---

### 4. Search & Filter

You can use the **Search bar** above the table to quickly find:

- Locations
- Bins
- Aisles
- Racks

The table updates instantly as you type, showing only matching results.

---

### 5. Save Inventory

After adding or revising inventory:

- Click the **Save** button (available at top or bottom).
- The system updates all stock data for the selected part.
- A confirmation message appears once the inventory is successfully saved.

---

## ⚙️ Permission Control

- Only users with **Modify Inventory permission** can add, edit, or update stock data.
- If you don’t have permission, editing buttons and add options will appear **disabled**.
- Unauthorized users attempting to modify inventory will see a **warning alert**.

---

## 💡 Tips for Users

- Use the **search bar** to quickly find a specific bin or location.
- Always ensure that **reserved quantity** does not exceed **in-hand quantity**.
- Update the **reorder level** to get alerts when stock drops below safety limits.
- Review all quantities before saving to maintain inventory accuracy.

---

✅ You now understand how to view, edit, and maintain accurate **Parts Inventory** across your organization.
