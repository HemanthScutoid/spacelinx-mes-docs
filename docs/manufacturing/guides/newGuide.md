# 📘 Create/Edit Guide

The **Create/Edit Guide** form allows users to add new guides or edit existing ones.  
It validates required fields, prevents duplicates, and allows selection of guide type, platform, and category.

<div className = "image-container"> 
<img

    src="/assets/manufacturing/guides/create-guide.png"
    alt="Create Guide  Page Screenshot"
    width={700}

/>

  <p className = "image-text" >
    Figure 1: Overview of the Create Guide Page
  </p>
</div>
---

## 📍 Accessing the Page

- Navigate to the **Guides** section from the sidebar.
- Click **+ Add New** → the **Create Guide** form opens in a flyout.
- To edit an existing guide, click **Edit** on the guide row → the form opens pre-filled.

---

## 📋 Fields in the Form

| Field           | Description                                                                                           |
| --------------- | ----------------------------------------------------------------------------------------------------- |
| **Parent Part** | Select a parent part that doesn’t have a guide yet. Required. Autocomplete with part number and name. |
| **Guide Name**  | Automatically populated from the selected parent part. Required. Cannot be empty.                     |
| **Platform**    | Optional. Select platform from the lookup list.                                                       |
| **Type**        | Guide type selection. Required. Defaults to "Assembly" if creating new.                               |
| **Category**    | Select a guide category. Required. Defaults to "Satellite" if creating new.                           |

---

## ✅ Validation Rules

| Field           | Rules                                                                                          |
| --------------- | ---------------------------------------------------------------------------------------------- |
| **Parent Part** | - Required <br /> - Must select from available parts without a guide                           |
| **Guide Name**  | - Required <br /> - Auto-populated from parent part <br /> - Cannot be empty                   |
| **Type**        | - Required <br /> - Must select from guide types <br /> - Disabled if published version exists |
| **Category**    | - Required <br /> - Must select from guide categories                                          |
| **Platform**    | - Optional <br /> - Must select from available platform types                                  |

---

## 🚀 Actions

- **Create** → Saves a new guide if all validations pass.
  - ✅ Success alert: _"Guide Created Successfully..!"_
  - ❌ Error alert: _"Couldn't Create guide...!"_
- **Update** → Updates an existing guide if all validations pass.
  - ✅ Success alert: _"Guide Updated Successfully..!"_
  - ❌ Error alert: _"Couldn't Update Guide...!"_
- **Cancel** → Closes the form without saving changes.

---

## 🔔 Alerts & Notifications

- Field-specific validation errors appear **below the corresponding input**.
- Global alerts appear via **FlyoutAlerts**:
  - **Error:** `"Couldn't fetch Guide Types...!"` / `"Couldn't fetch Platform Types...!"` / `"Couldn't fetch guide categories...!"`
  - **Success:** `"Guide Created Successfully..!"` / `"Guide Updated Successfully..!"`

---

## 🧩 Example Workflow (Create)

1. Click **+ Add New** from the Guides page.
2. Select **Parent Part** → e.g., `PRT-101 - Gear Box`.
   - Guide Name auto-populates → e.g., `"Gear Box"`.
3. Select **Type** → e.g., `"Assembly"`.
4. Select **Category** → e.g., `"Satellite"`.
5. Select **Platform** (optional) → e.g., `"Web"`.
6. Click **Create** → success alert appears and guide is added to the list.

---

## 🧩 Example Workflow (Edit)

1. Click **Edit** on an existing guide.
2. Modify **Platform**, **Type**, or **Category**.
   - **Parent Part** and **Guide Name** are disabled.
3. Click **Update** → success alert confirms the changes.

---

✨ This workflow ensures validated, duplicate-free guide creation and editing with dynamic selection of types, platforms, and categories.
