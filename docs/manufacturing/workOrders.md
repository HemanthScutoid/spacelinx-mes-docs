---
id: workOrders
title: Work Orders
sidebar_label: Work Orders
---

# 📑 Work Orders

The **Work Orders page** allows you to view, create, and manage all manufacturing work orders.  
Each work order is linked to a platform, part, and guide, ensuring complete production traceability.

---

## 🔍 Viewing Work Orders

When you open the page, you’ll see a **table** listing all available work orders.

The table includes:

- **Platform** – The platform the work order belongs to.
- **Number** – Unique identifier (clickable to open details).
- **Name** – The name of the work order.
- **Part Number** – The linked part (clickable to open part details).
- **Part Name** – The name of the linked part.
- **Status** – Current status (`Pending`, `Assigned`, `In Progress`, `Completed`).
- **Started On** – Date when execution began.
- **Ended On** – Date when execution finished.

You can **click a row** or the work order number to open full details.

---

## ➕ Creating a Work Order

- Click the **+ Add New** button in the top right.
- A drawer will slide in where you can:
  - Enter work order details
  - Link to a part and guide
  - Save the new work order

👉 You must have **Modify permission** to create a work order.

---

## 🗑️ Deleting a Work Order

- Click the **trash icon** in the last column of the table.
- A confirmation dialog will appear.
- Deletion rules:
  - ✅ Allowed if status = **Pending** or **Assigned**
  - ❌ Not allowed if status = **In Progress** or **Completed**

---

## 📋 Work Order Details

When you open a work order, the details drawer shows:

- **General Info** – Name, number, linked part, and platform
- **Guide Info** – The guide connected to the work order
- **Dates & Status** – Start and end dates, current status

You can also access **kit data** and additional linked information through the details view.

---

## ⚙️ Permissions

- Users with **Modify permission** can create and delete work orders.
- Users without permission will see buttons disabled or icons grayed out.

---

## 💡 Tips for Users

- Use the **filter and search bar** (toolbar in the table) to quickly find work orders.
- Always double-check the **linked part and guide** before publishing or starting.
- Completed work orders cannot be deleted, only archived for record-keeping.

---

✅ You now know how to view, create, and manage Work Orders in the system.
