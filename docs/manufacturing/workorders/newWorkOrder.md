# 📘 Create work order

The **Create work order** flyout allows users to create a new manufacturing/work order for a **part** or **product**.  
It validates required fields, ensures proper guide selection, and assigns roles for technicians and managers.

<div className = "image-container"> 
<img

    src="/assets/manufacturing/workorders/create-workorder.png"
    alt="Create Workorder Page Screenshot"
    width={700}

/>

  <p className = "image-text" >
    Figure 1: Overview of the Create Workorder  Page
  </p>
</div>

---

## 📍 Accessing the Page

- Navigate to **Work Orders** in the sidebar.
- Click **+ Create Work Order** → opens the **Create work order** flyout.

---

## 📋 Fields in the Form

| Field                     | Description                                                                                          |
| ------------------------- | ---------------------------------------------------------------------------------------------------- |
| **Parent Part**           | Autocomplete search for parts that have a **published guide**. Required for "part" work orders.      |
| **Guide Number**          | Auto-populated from the selected parent part. Shows the latest published guide number and version.   |
| **Platform**              | Auto-populated from the selected part's guide. Optional, informational only.                         |
| **Work Order Name**       | Free text input. Required. Used as the identifier for the work order.                                |
| **Manager**               | Autocomplete search for users with role **Project Manager**. Required. Cannot be same as technician. |
| **Quantity**              | Positive integer input. Required. Determines the number of items to produce.                         |
| **Start Date**            | Calendar picker. Defaults to today.                                                                  |
| **Due Date**              | Calendar picker. Cannot be before Start Date.                                                        |
| **Technician** (optional) | Autocomplete search for users with role **Engineer/Technician**. Optional for assignment.            |
| **Work Order Type**       | Radio button: `"part"` or `"product"`. Determines whether parent part or product is selected.        |

---

## ✅ Validation Rules

| Field                     | Rules                                                                            |
| ------------------------- | -------------------------------------------------------------------------------- |
| **Parent Part**           | Required if Work Order Type = "part". Must select a part with a published guide. |
| **Product**               | Required if Work Order Type = "product". Must select a valid product.            |
| **Work Order Name**       | Required. Cannot be empty.                                                       |
| **Manager**               | Required. Cannot match selected technician.                                      |
| **Quantity**              | Required. Must be a positive number (>0).                                        |
| **Start Date / Due Date** | Due Date cannot be earlier than Start Date.                                      |

---

## 🚀 Actions

- **Create** → Saves a new work order if all validations pass.
  - ✅ Success alert: `"Manufacturing Order Created Successfully..."`
  - ❌ Error alert: `"Couldn't Create workorder — Please Try Again..."`
- **Cancel** → Closes the flyout without saving.

---

## 🔔 Alerts & Notifications

- Field-level validation errors appear **below the corresponding input**.
- Global alerts via **FlyoutAlerts**:
  - **Error:** `"Error Fetching Product Information"` / `"Error Fetching Technicians Data"`
  - **Success:** `"Manufacturing Order Created Successfully..."`

---

## 🧩 Example Workflow

1. Click **+ Create Work Order**.
2. Select **Work Order Type**: `"part"` or `"product"`.
3. **If "part" selected:**
   - Choose a parent part → only parts with published guides are available.
   - Latest published guide version and platform auto-populate.
4. Fill **Work Order Name**.
5. Select **Manager** from autocomplete.
6. Enter **Quantity**.
7. Set **Start Date** and **Due Date**.
8. Optional: select **Technician**.
9. Click **Create** → success alert appears and work order is created.

---

✨ The flyout ensures validated work order creation with dynamic guide selection, quantity control, date management, and role assignment.
