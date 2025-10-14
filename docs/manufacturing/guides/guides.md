# 📖 Guides Module – User Guide

A **Guide** is a documented instruction, reference, or work procedure that helps teams follow standardized processes in manufacturing, assembly, or maintenance.  
Guides ensure that **work is performed correctly, consistently, and safely**, while providing traceability for audits and process improvements.

### Why We Use Guides

- 📋 **Standardization:** Ensures all operators and engineers follow the same procedures.
- ✅ **Quality Assurance:** Reduces errors and maintains consistent output.
- 🕒 **Time-Saving:** Provides step-by-step instructions to perform tasks efficiently.
- 📑 **Documentation:** Maintains a record of processes for audits and compliance.
- 💡 **Training & Onboarding:** New employees can quickly learn procedures.

### When We Need Guides

- Creating **work instructions** for assembly or manufacturing tasks.
- Documenting **standard operating procedures (SOPs)**.
- Providing **part-specific reference materials** for engineers or operators.
- Updating procedures after **design or process changes**.
- Ensuring **regulatory or quality compliance** across teams.

The **Guides module** allows you to manage work instructions and reference guides linked to parts, platforms, and categories.  
From here, you can **view, create, update, and delete guides** that are part of the manufacturing process.

---

## 🔑 Key Features

### 📋 1. View All Guides

<div className = "image-container"> 
<img

    src="/assets/manufacturing/guides/guides.png"
    alt="Guides Page Screenshot"
    width={700}

/>

  <p className = "image-text" >
    Figure 1: Overview of the Guides Page
  </p>
</div>

- All existing guides are displayed in a **table format**.
- Each row shows details such as:
  - Platform
  - Guide Number (clickable for details)
  - Name
  - Part Number & Part Name
  - Type & Category
  - Version & Status
  - Created Date

👉 Clicking a **Guide Number** takes you to its detailed view.

<div className = "image-container"> 
<img

    src="/assets/manufacturing/guides/guide-details.png"
    alt="Guide Details Page Screenshot"
    width={700}

/>

  <p className = "image-text" >
    Figure 2: Overview of the Guide Details Page
  </p>
</div>
👉 Clicking a **Part Number** opens its part details in a side drawer.
<div className = "image-container"> 
<img

    src="/assets/manufacturing/guides/redirecting-to-part.png"
    alt="Part Drawer Page Screenshot"
    width={700}

/>

  <p className = "image-text" >
    Figure 3: Part Drawer Page
  </p>
</div>

---

### ➕ 2. Add a New Guide

<div className = "image-container"> 
<img

    src="/assets/manufacturing/guides/create-guide.png"
    alt="Create Guide  Page Screenshot"
    width={700}

/>

  <p className = "image-text" >
    Figure 4: Overview of the Create Guide Page
  </p>
</div>

1. Click the **+ Add New** button at the top right.
2. A **drawer** will slide in from the right.
3. Fill in required information such as:
   - Guide Number
   - Guide Name
   - Part Number (if linked)
   - Type & Category
   - Version and Status
4. Click **Create**. The new guide will appear in the list.

---

### ✏️ 3. Edit a Guide

- Click on a **Guide Number** to open its details.
- Update the necessary fields.
- Save changes to update the guide.

---

### 🗑️ 4. Delete a Guide

<div className = "image-container"> 
  <img

      src="/assets/manufacturing/guides/delete-guide.png"
      alt="Delete Confirmation Screenshot"
      width={700}

/>

  <p className = "image-text" >
    Figure 5: Delete Confirmation Alert
  </p>
</div>
- In the list, click the **trash icon** (🗑️) in the row of the guide you want to delete.
- A confirmation dialog will appear.
  
- Select **Yes** to delete or **Cancel** to keep the guide.
- Once deleted, the guide is permanently removed from the list.

⚠️ **Note:** You need modification permissions to delete a guide.

---

### ⏳ 5. Loading and Empty States

- While fetching data, a **loading spinner** is displayed.
- If no guides exist, a message appears:
  > "Currently, there are no guides exist."  
  > Along with an option to **Add Guide**.

---

## 📊 Example Workflow

Imagine you want to add a **Work Instruction Guide** for assembling an engine part:

1. Go to **Guides**.
2. Click **+ Add New**.
3. Enter details:
   - Number: `WI-ENG-001`
   - Name: `Engine Assembly Instructions`
   - Linked Part: `ENG-4567`
   - Type: `Work Instruction`
   - Category: `Assembly`
   - Version: `1.0`
   - Status: `Active`
4. Save. The new guide appears in the list and can now be accessed by your team.

---

## 💡 Tips for Users

- Use **meaningful Guide Numbers** (e.g., WI-001, PROC-002).
- Always keep the **status updated** (Active, Draft, Obsolete).
- Link guides to parts for better traceability.
- Use the search bar (toolbar) to quickly find a specific guide.

---

✅ You now know how to **view, create, edit, and manage guides** in the system, and understand **why guides are important for standardization, quality, and traceability**.
