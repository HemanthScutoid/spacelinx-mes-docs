# 📝 How to Create a New Material Kit

The **New Material Kit** feature allows you to quickly create a kit by linking it to a part and location, specifying quantity, and optionally attaching an image.

---

## 1. Open the Create Kit Form

1. Go to the **Material Kits** section in the sidebar.
2. Click **+ Create Kit**.
3. The **Create Kit** flyout will open.

---

## 2. Fill in the Kit Details

### **Select Part**

- Start typing the part name or part number.
- Parts with an existing guide are highlighted in blue.
- Click to select the desired part.
- Selecting a part automatically fills the **Kit Name**.

### **Kit Name**

- Auto-filled based on the selected part.
- Cannot be edited manually.

### **Quantity**

- Enter the number of kits you want to create.
- Must be **1 or more**.

### **Location**

- Start typing the location name to search.
- Select the location where the kit will be stored.

---

## 3. Attach an Image (Optional)

You can attach an image to the kit in two ways:

1. **Upload from Device**

   - Click the **Attach** icon.
   - Select an image file from your computer.

2. **Capture with Camera**
   - Click the **Camera** button.
   - Take a picture and save it.

> A preview of the image will be shown. You can remove it before saving if needed.

---

## 4. Required Fields

| Field        | Description                            | Notes                  |
| ------------ | -------------------------------------- | ---------------------- |
| **Part**     | Select the parent part for the kit     | Required               |
| **Kit Name** | Auto-filled based on the selected part | Required, not editable |
| **Quantity** | Number of kits to create               | Must be 1 or more      |
| **Location** | Location where the kit will be stored  | Required               |

---

## 5. Create the Kit

- Click **Create** to save the new kit.
- If any required fields are missing, errors will be shown below the input fields.

### Success

- A notification will appear:  
  **"Material Kit Created Successfully..."**

### Error

- If there is an issue, an alert will appear:  
  **"Couldn't Create Material Kit — Please Try Again..."**

---

## 6. Cancel Creation

- Click **Cancel** at any time to close the form without saving.

---

## ✅ Notes

- **Required Fields:** Part, Kit Name, Quantity, Location.
- **Optional:** Image (upload or camera).
- **Kit Name** is automatically derived from the selected part.
- Quantity must be a positive number.
