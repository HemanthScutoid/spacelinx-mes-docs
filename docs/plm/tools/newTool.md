# Create Tool

The **Create Tool** page allows users to add new tools into the system. This is useful for managing tool inventory, associating them with tool types, and ensuring no duplicate tool numbers are created.

---

## Accessing the Page

- Navigate to the **Tools** section from the sidebar.
- Click on **+ Add New** to open the **Create Tool** form.

---

## Fields in the Form

When creating a new tool, the following details are required:

1. **Tool Number**

   - A unique identifier for the tool.
   - Cannot be left empty.
   - Must be less than 100 characters.
   - The system will check for duplicates automatically. If the number already exists, an error message will appear.

2. **Tool Name**

   - The descriptive name of the tool.
   - Cannot be left empty.
   - Must be less than 250 characters.

3. **Tool Type**
   - Select the type of tool from the available list.
   - If the required type does not exist, you can type a new one and select **Add "New Type"** to create it instantly.
   - This field is mandatory.

---

## Actions

- **Create**  
  Saves the new tool and adds it to the list.

  - If successful, you will see a confirmation message:  
    ✅ _Tool Created Successfully!_

- **Cancel**  
  Closes the form without saving changes.

---

## Validation Rules

- All fields are mandatory.
- Duplicate tool numbers are not allowed.
- Error messages will be shown if:
  - The tool number already exists.
  - Any required field is missing.
  - Length limits are exceeded.

---

## Alerts and Notifications

- All actions (success, error, validation issues) will display notifications at the bottom of the form.
- Example alerts:
  - **Success:** Tool created successfully.
  - **Error:** Couldn’t create tool / failed to fetch tool types.

---

## Example Workflow

1. Click **+ Add New** from the Tools page.
2. Enter a unique **Tool Number**.
3. Enter the **Tool Name**.
4. Select an existing **Tool Type** or create a new one.
5. Click **Create**.
6. The new tool will appear in the main tools list.

---

✨ With this feature, tool management becomes faster, prevents duplicates, and allows flexible addition of tool types.
