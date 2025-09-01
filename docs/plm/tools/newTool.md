# 🛠️ Create Tool

The **Create Tool** form allows users to add a new tool into the system.  
It validates key fields, prevents duplicate tool numbers, and lets you add new tool types on the fly.

---

## 📍 How to Access

- Navigate to the **Tools** section in the sidebar.
- Click **+ Add New** → the **Create Tool** form will appear in a flyout.

---

## 📋 Fields in the Form

| Field           | Description                                                                                                     |
| --------------- | --------------------------------------------------------------------------------------------------------------- |
| **Tool Number** | Unique identifier for the tool. Required. Checked against existing tools for duplicates. Max length: 100 chars. |
| **Tool Name**   | Descriptive name of the tool. Required. Max length: 250 chars.                                                  |
| **Tool Type**   | Select from existing tool types. Required. You can also **add a new tool type** if it doesn’t exist.            |

---

## ✅ Validation Rules

| Field           | Rules                                                                                            |
| --------------- | ------------------------------------------------------------------------------------------------ |
| **Tool Number** | - Required <br /> - Maximum 100 characters <br /> - Must be unique (system checks automatically) |
| **Tool Name**   | - Required <br /> - Maximum 250 characters                                                       |
| **Tool Type**   | - Required <br /> - Choose from list or create new one                                           |

---

## 🚀 Actions

- **Create** → Saves the tool if all validations pass.
  - ✅ Success alert: _"Tool Created Successfully..!"_
  - ❌ Error alert: _"Couldn't Create Tool...!"_
- **Cancel** → Closes the form without saving.

---

## 🔔 Alerts & Notifications

- Validation errors appear **below the fields** (e.g., "Tool Name is required").
- Flyout alerts display global messages at the bottom:
  - **Error:** `"Couldn't fetch Tool Types...!"` / `"Couldn't Fetch Tools...!"`
  - **Success:** `"Tool Type Added Successfully..!"`

---

## 🧩 Example Workflow

1. Click **+ Add New** in the Tools section.
2. Enter **Tool Number** → e.g., `DRL-101`.
   - If the number already exists, the system shows an error immediately.
3. Enter **Tool Name** → e.g., `"Drill Machine"`.
4. Select **Tool Type** → e.g., `"Cutting Tool"`.
   - If not available, type a new one and select **Add "New Type"**.
5. Click **Create**.
6. ✅ A success alert confirms, and the new tool appears in the tools list.

---

✨ With this form, tool creation is quick, validated, and ensures no duplicates in the system.
