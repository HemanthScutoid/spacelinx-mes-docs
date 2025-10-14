# 📘 Clone BOM – User Guide

The **Clone BOM (Bill of Materials)** feature allows you to **duplicate the structure of an existing BOM** (all the parts and assemblies it contains) to another part in your system. This is particularly useful when you have multiple similar products or assemblies and want to **reuse an existing BOM** without manually creating it again.

---

## 📝 What is Clone BOM?

A **BOM (Bill of Materials)** is a complete list of raw materials, components, and assemblies needed to build a product.

**Cloning a BOM** means copying this structure from one part to another. This ensures consistency, saves time, and reduces errors when multiple parts share the same assembly structure.

---

## 💡 Why Use Clone BOM?

- **Save Time:** Avoid manually recreating a BOM for a similar product.
- **Maintain Consistency:** Ensure that the copied BOM matches the original exactly.
- **Reduce Errors:** Avoid missing components when building new parts.
- **Quick Setup for New Products:** When launching new variants, you can reuse existing BOMs.

---

## 🔑 Key Features

### 1. Open Clone BOM Panel

- Click the **Clone BOM** button (available on the part or BOM page) to open the Clone BOM panel.
- The panel overlays on your current page, allowing you to select a new part for cloning.

---

### 2. Choose a Part to Clone To

- You will see a **dropdown list** of available parts that are in _Draft_ status and do not already have a parent BOM.
- Each option shows:

  - **Part Number**
  - **Part Name**
  - A note if it is already a child part (these options cannot be selected).

- **How to select a part:**
  1. Click the dropdown or start typing the part name/number.
  2. Select the desired part from the list.
  3. Note: Parts that are already child parts of another BOM are disabled and cannot be selected.

---

### 3. Clone the BOM

- After selecting a valid part, click the **Clone** button.
- A success message will appear if the BOM is cloned successfully:
  > "Successfully cloned this BOM to [Part Number]"
- The panel will close automatically after a successful clone.

---

### 4. Cancel Cloning

- Click the **Cancel** button at any time to close the panel without cloning.

---

### 5. Error Handling

- If you try to click **Clone** without selecting a part, an error message will appear:
  > "Please select a valid part."
- If the system fails to fetch parts or clone the BOM, a warning message will appear:
  > "Failed to fetch parts. Please try again."  
  > "Failed to clone BOM. Please try again."

---

### 6. Notes

- Only parts in _Draft_ status and without an existing parent BOM can be selected as the target for cloning.
- The original BOM remains unchanged; a copy is created for the new part.
- This feature saves time and ensures consistency across similar products or assemblies.

---
