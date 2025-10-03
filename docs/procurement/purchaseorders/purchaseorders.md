# Purchase Orders

A **Purchase Order (PO)** is a formal document issued by a buyer to a vendor or supplier, specifying the products or services they wish to purchase. It acts as a legal offer to buy and helps track orders from creation to delivery.

### Why POs are Important

- 📑 Ensures **clarity and agreement** between buyer and supplier.
- 💰 Helps **manage budgets and financial planning**.
- 🛠️ Tracks **inventory and procurement needs**.
- ✅ Serves as a **legal document** in case of disputes.
- 📊 Supports **reporting and auditing** in procurement processes.

---

## Overview

The **Purchase Orders** page allows you to **view, search, and manage all purchase orders** in the system. Depending on your access permissions, you can also **create new POs** or **delete existing ones**.

---

## Features

- 📋 **View all Purchase Orders** in a tabular format.
- 🔍 **Search and filter columns** (like PO Number, Vendor, Status, etc.).
- ➕ **Create a new Purchase Order** (if you have permission).
- 🗑️ **Delete existing Purchase Orders** (if you have permission).
- 📑 **Open PO details** by clicking on a PO Number.
- ⚙️ **Customize visible columns** (your preferences are saved automatically).

---

## How to Use

1. **View POs**

   - All existing purchase orders are listed in a table.
   - Click a **PO Number** to view its full details.

2. **Add New PO**

   - Click the **"+ Add New"** button (visible only if you have creation access).
   - You will be redirected to the **New Purchase Order** form.

3. **Delete a PO**

   - If you have delete access, a **trash icon** will appear in the last column.
   - Click the icon, confirm the action, and the PO will be deleted.

4. **Customize Columns**
   - You can hide/show certain fields (like Vendor Code, Project Code, Shipping City, etc.).
   - Your column preferences will be saved automatically in the browser.

---

## Data Shown in Table

| Field               | Description                                              |
| ------------------- | -------------------------------------------------------- |
| **PO Number**       | Unique purchase order number. Clickable to view details. |
| **Vendor Name**     | Name of the supplier/vendor.                             |
| **Vendor Code**     | Vendor’s unique code.                                    |
| **Vendor Contact**  | Contact person for the vendor.                           |
| **Vendor Phone**    | Phone number of the vendor contact.                      |
| **Order Date**      | Date when the PO was created.                            |
| **Delivery Date**   | Expected delivery date of items.                         |
| **Status**          | Current status of the PO (e.g., Open, Closed).           |
| **Total Amount**    | Total financial value of the order.                      |
| **Approved By**     | Person who approved the order.                           |
| **Approved Date**   | Date when the PO was approved.                           |
| **Payment Term**    | Payment terms associated with this PO.                   |
| **Project Code**    | Linked project’s unique code.                            |
| **Project Name**    | Name of the linked project.                              |
| **Billing City**    | City of the billing address.                             |
| **Shipping City**   | City of the shipping address.                            |
| **Requisition No.** | Linked requisition number (if any).                      |

---

## Notes

- If you **don’t have permission**, you will see a warning message when trying to view or create a PO.
- Deleted POs **cannot be recovered** once confirmed.
- Large datasets may take time to load; a loader will appear during data fetching.
