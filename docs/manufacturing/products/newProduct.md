---
id: newProduct
title: Create New Product
sidebar_label: New Product
---

# Create New Product

The **New Product** page allows users to create a new product by linking it to an existing released part, associating it with a platform, adding a description, and optionally uploading an image.

<div className = "image-container"> 
<img

    src="/assets/manufacturing/products/create-product.png"
    alt="Create Product Page Screenshot"
    width={700}

/>

  <p className = "image-text" >
    Figure 1: Overview of the Create Product Page
  </p>
</div>
---

## Key Features

- **Product Name** → Required field to specify the product’s name.
- **Parent Part** → Select an existing released part to link with the product.
- **Platform** → Choose the platform on which the product belongs.
- **Description** → Provide details about the product.
- **Image Upload** → Optionally attach an image of the product.

---

## Form Fields

| Field         | Type         | Required | Description                                             |
| ------------- | ------------ | -------- | ------------------------------------------------------- |
| Product Name  | Text Input   | ✅ Yes   | Name of the product.                                    |
| Parent Part   | Autocomplete | ✅ Yes   | Search & select a part (only released parts are shown). |
| Platform      | Dropdown     | ✅ Yes   | Choose from available platforms fetched dynamically.    |
| Description   | Text Input   | ✅ Yes   | Short description of the product.                       |
| Product Image | File Upload  | ❌ No    | Upload an optional product image (PNG, JPG, etc.).      |

---

## Actions

- **Cancel** → Closes the flyout without saving.
- **Create** → Validates input and creates a new product.

---

## Validation Rules

- Product Name cannot be empty.
- Parent Part must be selected.
- Platform must be chosen.
- Description is required.

If any required field is missing, an error message will be shown under the respective input field.

---

## Workflow

1. Enter the **Product Name**.
2. Select a **Parent Part** from the search-enabled list.
3. Select a **Platform**.
4. Provide a **Description**.
5. Optionally, attach an **Image**.
6. Click **Create** → The product is saved and a success alert is shown.

If the process fails, an error alert is displayed.

---

## UI Behavior

- A **loader** is displayed while fetching available parts and platforms.
- If no image is selected, an **upload button** is shown.
- Once an image is uploaded, a **preview** with remove option is displayed.
- On successful product creation:
  - The drawer closes.
  - Product list refreshes.
  - Form resets.

---
