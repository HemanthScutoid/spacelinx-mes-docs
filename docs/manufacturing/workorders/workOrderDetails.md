# 📋 Work Order Details

Once you select a **Work Order** from the list, you will be taken to the **Work Order Details page**.  
This page shows everything about the selected order, including assigned kits, products, managers, technicians, and progress steps.

<div className = "image-container"> 
<img

    src="/assets/manufacturing/workorders/workorder-details.png"
    alt="Workorder Details Page Screenshot"
    width={700}

/>

  <p className = "image-text" >
    Figure 1: Overview of the Workorder Details Page
  </p>
</div>

---

## 🧾 Overview

At the top of the page, you’ll see:

- **Breadcrumb Navigation** – Helps you go back to the main Work Orders page.
- **Part Information** – Displays the part name and part number linked to the work order.
- **Search Bar** – Allows you to filter sub-work orders by number, status, or kit number.

---

## 📑 Sub Work Orders Table

The main section lists all **sub-work orders** for this work package.

The table includes:

- **Number** – Unique sub-work order number.

  - ✅ If all assignments (kit, manager, technician) are complete, you can click to open its details.
  - ⚠️ If assignments are missing, clicking will show an alert (e.g., _“Assign a Kit to proceed”_).

- **Status** – Current status of the sub-work order.

- **Kit Number** – Linked kit.

  - If assigned → shows the kit number (click to open kit details).
  - If not assigned → shows an **Assign button**.
  - You can also edit or unassign kits using the menu (⋮).

- **Product** – Linked product.

  - If assigned → shows the product name (click to view product details).
  - If not assigned → shows an **Assign button**.

- **Manager** – The manager responsible for this work order.

  - Shows full name if assigned.
  - If not assigned → shows an **Assign button**.

- **Technician** – The technician responsible.

  - Shows full name if assigned.
  - If not assigned → shows an **Assign button**.

- **Due Date** – Displays the planned end date of the sub-work order.

- **Details Icon (ℹ️)** – Opens the work order details drawer for editing or viewing more information.

---

## ⚙️ Assignments

You can assign or update:

- **Kit**
- **Product**
- **Manager**
- **Technician**

Assignments can only be done if you have **Modify permissions**.

👉 If the work order is already _In Progress_ or _Completed_, some assignments may be locked.

---

## 📊 Progress Tracking

On the right-hand panel, you’ll find the **Work Order Steps**:

- A **progress bar** shows % completion based on completed steps.
- Each step lists:
  - Step number and name
  - Number of tasks
  - Time taken

Statuses:

- ✅ Completed
- ▶️ In Progress
- ⏳ Pending

---

## 📂 Drawers & Details

The page uses **sliding drawers** for extra details:

- **Work Order Info Drawer** – Opens when you assign/edit kits, products, managers, or technicians.
- **Child Kit Data Drawer** – Opens when you click on a kit number.

---

## 🛑 Unassigning Kits

- You can unassign a kit using the menu (⋮) next to the kit number.
- Only possible if the work order status is **Pending** or **Assigned**.
- After unassigning, you’ll see a confirmation alert.

---

## 💡 Tips for Users

- Always assign **Kit, Manager, and Technician** before starting execution.
- Use the **search bar** to quickly find sub-work orders.
- Check the **progress bar** to track how close you are to completion.
- If you cannot click a work order number, check missing assignments.

---

✅ This page helps you manage and track **sub-work orders** inside a work package.
