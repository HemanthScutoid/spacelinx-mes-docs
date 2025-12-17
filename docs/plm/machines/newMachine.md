# 🏭 Create Machine

The **Create Machine** form allows users to add new machines into the system.  
It validates key fields, prevents duplicate machine numbers, and allows adding new machine types on the fly.

---

## 📍 Accessing the Page

- Navigate to the **Machines** section from the sidebar.
- Click **+ Add New** → the **Create Machine** form opens in a flyout.

---

## 📋 Fields in the Form

| Field              | Description                                                                                                                |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| **Machine Number** | Unique identifier for the machine. Required. Checked against existing machines for duplicates. Max length: 100 characters. |
| **Machine Name**   | Descriptive name of the machine. Required. Letters, numbers, and spaces only. Max length: 250 characters.                  |
| **Machine Type**   | Select from existing machine types. Required. You can also **add a new type** dynamically if it doesn’t exist.             |

---

## ✅ Validation Rules

| Field              | Rules                                                                                                    |
| ------------------ | -------------------------------------------------------------------------------------------------------- |
| **Machine Number** | - Required <br /> - Maximum 100 characters <br /> - Must be unique (system checks automatically on blur) |
| **Machine Name**   | - Required <br /> - Letters, numbers, and spaces only <br /> - Maximum 250 characters                    |
| **Machine Type**   | - Required <br /> - Choose from list or create a new type dynamically                                    |

---

## 🚀 Actions

- **Create** → Saves the machine if all validations pass.
  - ✅ Success alert: _"Machine Created Successfully!"_
  - ❌ Error alert: _"Couldn't Create Machine!"_
- **Cancel** → Closes the form without saving changes.

---

## 🔔 Alerts & Notifications

- Field-specific validation errors appear **below the corresponding input**.
- Global alerts appear via **FlyoutAlerts**:
  - **Error:** `"Couldn't fetch Machine Types...!"` / `"Couldn't Fetch Machines...!"`
  - **Success:** `"Machine Type Added Successfully!"`

---

## 🧩 Example Workflow

1. Click **+ Add New** from the Machines page.
2. Enter **Machine Number** → e.g., `MCH-101`.
   - If the number already exists, an error appears immediately.
3. Enter **Machine Name** → e.g., `"Drill Press"`.
4. Select **Machine Type** → e.g., `"Cutting Tool"`.
   - If not available, type a new type and select **Add "New Type"**.
5. Click **Create**.
6. ✅ A success alert confirms creation, and the new machine appears in the main list.

---

✨ This workflow ensures validated, duplicate-free machine creation and allows dynamic management of machine types.
