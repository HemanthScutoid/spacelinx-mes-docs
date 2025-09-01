# Create Machine

The **Create Machine** page allows users to add new machines into the system. Machines are uniquely identified by their **machine number** and can be grouped by **machine type**. This ensures consistency, prevents duplicate entries, and allows you to manage machines efficiently.

---

## Accessing the Page

- Go to the **Machines** section from the sidebar.
- Click **+ Add New** to open the **Create Machine** form.

---

## Fields in the Form

When adding a new machine, you must provide the following details:

1. **Machine Number**

   - A unique identifier for the machine.
   - Cannot be left blank.
   - Must be less than 100 characters.
   - If the machine number already exists, the system will show an error:  
     ❌ _The Machine Number Already Exists_

2. **Machine Name**

   - The descriptive name of the machine.
   - Cannot be left blank.
   - Must only contain letters, numbers, and spaces.
   - Maximum length: 250 characters.
   - Invalid entries (e.g., special symbols) will trigger an error.

3. **Machine Type**
   - Select a type from the dropdown list.
   - If the required type doesn’t exist, you can type a new one and select **Add "YourType"** to create it instantly.
   - This field is mandatory.

---

## Actions

- **Create**  
  Saves the machine details into the system.

  - If successful, you will see a confirmation message:  
    ✅ _Machine Created Successfully!_
  - The new machine will then appear in the machine list.

- **Cancel**  
  Closes the form without saving changes.

---

## Validation Rules

- All three fields are required.
- **Machine Number** must be unique.
- **Machine Name** only allows letters, spaces, and numbers.
- Error messages will display under the field if rules are violated.

---

## Alerts and Notifications

- All actions trigger notifications for feedback.
- Example alerts:
  - **Success:** Machine created successfully.
  - **Error:** Couldn’t create machine / failed to fetch machine types.

---

## Example Workflow

1. Click **+ Add New** from the Machines page.
2. Enter a unique **Machine Number** (e.g., `MCN-102`).
3. Enter the **Machine Name** (e.g., `Drill Machine`).
4. Choose an existing **Machine Type** (e.g., _Cutting_), or create a new one.
5. Click **Create**.
6. The machine will be added to the list and available for future assignments.

---

✨ With this feature, machine management becomes structured, prevents duplicates, and allows easy categorization by type.
