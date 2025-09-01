# Create a New ECO

The **New ECO (Engineering Change Order)** screen allows you to record changes to existing parts or assemblies. It ensures every modification is documented with proper reasoning, priority, and impact analysis.

---

## Steps to Create an ECO

1. **Open the New ECO form**

   - Navigate to the **ECO section** and click **+ Add New ECO**.

2. **Enter Required Details**

   - **ECO Name** → Provide a unique name (max 250 characters).
   - **Reason for Change** → Clearly state why this change is needed.
   - **Change Type** → Select the category of change (e.g., Design Update, Supplier Change, etc.).
   - **Impact Analysis** → Describe how this change will affect operations, production, or existing products.
   - **Priority** → Choose _Low_, _Medium_, or _High_.

3. **Optional Fields**
   - **Description** → Add extra context or notes about the ECO.

---

## Adding Parts to the ECO

- Select one or more **parts** to include in this ECO.
- Each part will display in a table with the following details:

| Column           | Description                                  |
| ---------------- | -------------------------------------------- |
| Number           | Part Number                                  |
| Name             | Part Name                                    |
| Current Revision | The part’s current version                   |
| Revision         | The updated revision if applicable           |
| Current Status   | The part’s existing status (Draft / Release) |
| Status           | The new status to apply (Release / Obsolete) |
| Remarks          | Add specific comments for the part           |

### Status Rules

- **Draft → Release**: Promotes a part from draft to released.
- **Release → Release**: Creates the next revision.
- **Release → Obsolete**: Marks a part as obsolete.

---

## Editing Remarks

- Click on a part’s **Remarks** cell to add or edit comments.
- A small popover will open to enter the text.
- Save your changes to update the part’s remarks.

---

## Validations

- ECO Name, Reason for Change, Change Type, and Impact Analysis are **required fields**.
- Each selected part must have a **new status** assigned.
- If any field is missing, an error will be displayed before you can proceed.

---

## Actions

- **Cancel** → Close the form without saving.
- **Create** → Submit the ECO. The system will:
  1. Validate all fields and parts.
  2. Save the ECO with its details.
  3. Confirm with a success message.

---

## Notifications

- ✅ **Success** → "ECO created successfully".
- ❌ **Error** → "Failed to create ECO" or specific error messages for missing fields.

---

## Example Workflow

1. Open **New ECO**.
2. Enter **ECO Name** → "ECO-2025-EngineMount".
3. Provide **Reason for Change** → "Supplier update for fasteners".
4. Select **Change Type** → "Supplier Change".
5. Choose **Priority** → "High".
6. Add **Impact Analysis** → "Affects engine assembly line, but no design changes".
7. Add affected parts (e.g., "Hex Bolt M6") and update status → Release.
8. Add remarks → "Updated to supplier X specification".
9. Click **Create** → ECO saved and visible in the ECO list.

---
