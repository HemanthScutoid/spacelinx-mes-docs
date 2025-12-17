# Editing a Goods Receipt Note (GRN)

The **Goods Receipt Note (GRN)** is used to confirm the receipt of materials against a Purchase Order.  
With the **Edit GRN screen**, you can view, update, and take actions on a GRN depending on your permissions.

---

## What You Can Do

### 1. View GRN Details

- See all information related to the GRN, such as:
  - GRN Number and Status (e.g., _In Process_).
  - Purchase Order linked to the GRN.
  - Supplier invoice details (Invoice Number & Date).
  - Received Date and who received it.
  - Location where materials are stored.
  - Notes like **Reference** and **Description**.

### 2. Edit GRN (if allowed)

- If the GRN is still **In Process** and you have edit rights:
  - Update the **Reference** and **Description**.
  - Adjust **Received Quantities** for each line item.
  - Add new documents (like delivery challans, supplier invoices).
  - Save changes by clicking **Update**.

### 3. Work With Line Items

- A table lists all the items received against the PO.
- For each item you can:
  - Check the **Part Name** and **Quantity Ordered**.
  - Update the **Quantity Received** (if in edit mode).
- This helps track what has been received vs pending.

### 4. Manage Documents

- If you have permission, you can:
  - Upload supporting files (PDFs, images, Excel sheets).
  - Edit document details.
  - Delete documents you no longer need.

### 5. Approve or Reject GRN (Approver role only)

- If you are an **Approver**, you will see extra options:
  - **Reject GRN** → If the items don’t meet expectations or documents are wrong.
  - **QC Complete** → Mark the GRN as approved after quality check.

---

## Screen Layout

- **Header**

  - Shows GRN number and status.
  - An **Edit button** (if editable).
  - A **Close button** to exit.

- **Tabs**

  - **GRN Details**: All header info + line items.
  - **Documents**: Upload and manage files (visible only if you have document permissions).

- **Footer Actions**

  - While editing: **Cancel** or **Update**.
  - As approver: **Reject** or **QC Complete**.

- **Alerts**
  - Success or error messages will appear as notifications.

---

## Typical User Journeys

- **Store Keeper**
  - Opens GRN, updates received quantities, uploads invoice copy, and saves.
- **Quality Inspector**
  - Reviews GRN and items, then clicks **QC Complete** to approve.
- **Manager**
  - Reviews supporting documents and either approves or rejects the GRN.

---

## Key Notes

- You can only edit a GRN while it is **In Process**.
- Once approved or rejected, the GRN becomes **read-only**.
- Permissions determine whether you can **edit, upload documents, or approve**.
