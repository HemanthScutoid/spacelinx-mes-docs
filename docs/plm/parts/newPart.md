# Create a New Part

The **New Part** page allows you to create and register new parts in the system. Each part can include key details such as its type, name, measurement unit, manufacturing number, and an optional image.

---

## Steps to Create a Part

1. **Open the New Part form**

   - Access this screen from the **Parts section** by clicking **+ Add New**.

2. **Fill in Required Fields**

   - **Part Type** → Choose from available part categories.
   - **Part Name** → Enter a descriptive name (max 250 characters).
   - **Make / Buy** → Select whether the part is manufactured internally (**Make**) or purchased externally (**Buy**).
   - **Manufacturing Part Number** → Required if "Buy" is selected.
   - **Unit of Measure (UOM)** → Select the measurement unit (defaults to _Each (EA)_).
   - **Serial Number Required** → Choose **Yes** or **No**.

3. **Optional Fields**
   - **Unit Price** → Specify the part’s cost per unit (if applicable).
   - **Attach Image** → Upload an image from your device or capture a photo directly using your camera.

---

## Image Options

- **Upload from Device** → Attach a file (PNG, JPG, JPEG supported).
- **Take Photo** → Use the camera option to capture an image instantly.
- **Preview & Remove** → Preview the selected image and remove it if needed.
- If no image is uploaded, a **default placeholder image** is shown.

---

## Form Validation

- All **required fields** must be filled before saving.
- Errors will display under each missing or invalid field.
- The system will alert you if you try to save with missing information.

---

## Actions

- **Cancel** → Close the form without saving.
- **Create** → Save the new part. The system will:
  1. Validate the data.
  2. Save the part details.
  3. Upload the image (if attached).
  4. Confirm success with a notification.

---

## Example Workflow

1. Select **Part Type** → "Fastener - FN".
2. Enter **Part Name** → "Hex Bolt M6".
3. Choose **Make / Buy** → "Buy".
4. Provide **Manufacturing Part Number** → "HBM6-2024".
5. Select **UOM** → "Each (EA)".
6. Mark **Serial Number Required** → "No".
7. Upload an image of the part.
8. Click **Create** → The part is added to the catalog.

---

## Notifications

- ✅ **Success** → "Part Created Successfully..!"
- ❌ **Error** → "Couldn't Create Part...!" (appears if saving fails).
