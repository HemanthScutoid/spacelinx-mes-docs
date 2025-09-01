# 📘 New Material Kit

The **New Material Kit** flyout allows users to create a new material kit, associate it with a parent part and location, specify quantity, and optionally attach an image or capture one via camera.

---

## 📍 Accessing the Page

- Navigate to the **Material Kits** section in the sidebar.
- Click **+ Create Kit** → opens the **New Material Kit** flyout.

---

## 📋 Fields in the Form

| Field              | Description                                                                        |
| ------------------ | ---------------------------------------------------------------------------------- |
| **Select Part**    | Autocomplete search for parent parts. Required. Parts with guides are highlighted. |
| **Kit Name**       | Auto-filled based on selected part. Disabled for editing. Required.                |
| **Quantity**       | Number input. Minimum value = 1. Required.                                         |
| **Location**       | Autocomplete search for available locations. Required.                             |
| **Image Upload**   | Optional. Users can select an image file from their system.                        |
| **Camera Capture** | Optional. Opens camera component to capture an image.                              |

---

## ✅ Validation Rules

| Field           | Rules                                             |
| --------------- | ------------------------------------------------- |
| **Select Part** | Required. Must select an existing parent part.    |
| **Kit Name**    | Auto-filled. Required. Cannot be empty.           |
| **Quantity**    | Required. Must be a positive number ≥ 1.          |
| **Location**    | Required. Must select an existing location.       |
| **Image**       | Optional. Must be a valid image file if selected. |

---

## 🚀 Actions

- **Create** → Submits the new material kit:
  - Attaches selected image file (if any) via `FormData`.
  - Calls `createMaterialKitWithImage` API.
  - Refreshes material kit list via `fetchMaterialKitData()`.
  - ✅ Success alert: `"Material Kit Created Successfully..."`
  - ❌ Error alert: `"Couldn't Create Material Kit — Please Try Again..."`
- **Cancel** → Closes the flyout without creating the kit.

---

## 🧩 Example Workflow

1. Click **+ Create Kit**.
2. Select **Parent Part** from autocomplete → Kit Name auto-fills.
3. Enter **Quantity** (default = 1).
4. Select **Location** from autocomplete.
5. Optionally:
   - Upload an image using the **Attach** icon.
   - Open **Camera** to capture an image.
6. Click **Create** → new kit is created and the flyout closes.

---

## 🔔 Alerts & Notifications

- Field-level validation errors appear **below the corresponding input**.
- Global alerts via **FlyoutAlerts** and **HomeAlerts**:
  - **Error:** `"Error Fetching Parts"` / `"Error Fetching Locations"`
  - **Success:** `"Material Kit Created Successfully..."`

---

## ⚙️ Additional Features

- Highlights parts in autocomplete with a guide (`option.guideId`) in blue.
- Prevents invalid image uploads (non-image files).
- Provides live preview for uploaded or captured images.
- Allows canceling the uploaded image before submitting.

---

✨ The flyout ensures proper kit creation with part and location selection, quantity control, and optional image attachment or camera capture, all with validated inputs and alert feedback.
