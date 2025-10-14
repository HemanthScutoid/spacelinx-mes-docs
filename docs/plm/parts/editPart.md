# Edit Part Flyout

The **Edit Part Flyout** allows you to view and update details of a selected part in the system.  
It provides a clear interface with tabs for managing all aspects of a part — such as details, bill of materials (BOM), documents, usage, inventory, and transactions.

 <div className = "image-container">
       <img
         src="/assets/PLM/parts/edit-part.png"
         alt="Edit Part Page Screenshot"
         width={700}
       />
       <p className = "image-text" >
         Figure 1: Overview of the Edit Part page
       </p>
   </div>
---

## Overview

When you select a part to edit, a flyout panel opens from the side.  
This panel gives you access to key information about the part and provides options to update, revise, or manage related data.

If the data is still loading, a **loading spinner** is displayed until everything is ready.

---

## Header Section

The top section of the flyout shows important information about the selected part:

- **Part Name**
- **Revision Selector** – choose a different version of the part.
- **ECO (Engineering Change Order)** – click the ECO link to open details if one exists.
- **Make/Buy Information** – shows whether the part is manufactured internally or purchased.
- **Status** – current state of the part (e.g., Draft, Released).
- **Clone BOM** – create a copy of the Bill of Materials (if allowed).
- **Edit Icon** – switch the part into editable mode (only for Draft status).
- **Close Button** – closes the flyout panel.

---

## Tabs

The flyout is divided into multiple tabs:

1. **Details**

   - View and edit the part’s basic information:
     - Part Number (read-only)
     - Part Type
     - Part Name
     - Unit of Measure (UOM)
     - Weight (in grams)
     - Manufacturing Part Number (if applicable)
     - Unit Price (if applicable)
     - Serial Number Required (Yes/No, read-only)
   - Upload or capture a part image using your camera.
   - Option to revise the part (if the part is released and editable).
   - Save changes or reset them.
    <div className = "image-container">
       <img
         src="/assets/PLM/parts/edit-part.png"
         alt="Edit Part Page Screenshot"
         width={700}
       />
       <p className = "image-text" >
         Figure 2: Overview of the Edit Part page
       </p>
   </div>

2. **BOM (Bill of Materials)**

   - Shows the child parts used to build the selected part.
   - Allows managing child components if permitted.
    <div className = "image-container">
       <img
         src="/assets/PLM/parts/BOM-tab.png"
         alt="BOM Tab Screenshot"
         width={700}
       />
       <p className = "image-text" >
         Figure 3: Overview of the BOM Tab
       </p>
   </div>

3. **Documents**

   - Attach and view documents linked to the part.
   - Documents can only be deleted when the part is in Draft status.
   <div className = "image-container">
   <img
         src="/assets/PLM/parts/documents-tab.png"
         alt="Documents Tab Screenshot"
         width={700}
       />
   <p className = "image-text" >
   Figure 4: Overview of the Documents Tab
   </p>
   </div>

4. **Where Used**

   - Displays all assemblies or products that include this part.
    <div className = "image-container">
   <img
         src="/assets/PLM/parts/where-used-tab.png"
         alt="Where used Tab Screenshot"
         width={700}
       />
   <p className = "image-text" >
   Figure 5: Overview of the Where Used Tab
   </p>
   </div>

5. **Inventory** (visible only for specific roles)

   - Shows the inventory details for the selected part.
    <div className = "image-container">
   <img
         src="/assets/PLM/parts/inventory-tab.png"
         alt="Inventory Tab Screenshot"
         width={700}
       />
   <p className = "image-text" >
   Figure 6: Overview of the Inventory Tab
   </p>
   </div>

6. **Transactions** (visible only if enabled)
   - Displays all inventory transactions related to the part.
    <div className = "image-container">
   <img
         src="/assets/PLM/parts/transactions-tab.png"
         alt="Transactions Tab Screenshot"
         width={700}
       />
   <p className = "image-text" >
   Figure 7: Overview of the Transactions Tab
   </p>
   </div>

---

## Actions

- **Update** – Save the changes made to the part.
- **Reset** – Discard unsaved changes and restore the previous data.
- **Delete** – Remove the part (only if deletion is allowed).
- **Revise Part** – Create a new revision when the part is in Released state.
- **Clone BOM** – Duplicate the BOM from an existing parent part.
- **Upload/Camera** – Add or update part images.

---

## Alerts and Messages

- The flyout includes a section for displaying alerts and error messages.
- These messages notify you about invalid inputs or restricted actions (e.g., "Part cannot be deleted since guide is available").

---

## Key Notes for Users

- Only parts in **Draft status** can be edited.
- Released parts can only be revised, not directly changed.
- Some actions (Delete, Clone BOM, Edit) depend on your permissions.
- Inventory and Transactions tabs may not be visible to all roles.
