# Create Company

The **Create Company** page allows users to add new business entities such as **Vendors**, **Customers**, or **Partners** into the system.  
Each company profile helps maintain important business details like contact information, payment terms, category, and other essential attributes — making collaboration, procurement, and customer management more organized.

---

## 🌟 Why We Need Company Records

Managing company information in one place ensures:

- Better **vendor and customer relationship management**.
- Accurate and **consistent data** for procurement, sales, and partnerships.
- Easy access to **contact details**, **payment preferences**, and **performance metrics**.
- Clear **segregation of company types** — Vendors, Customers, and Partners.

Each company record becomes the foundation for transactions like **purchase orders**, **sales orders**, and **service agreements**.

---

## 🧭 Page Overview

When you click **+ Add New** from the Companies page, a drawer panel opens titled **“New Vendor”**, **“New Customer”**, or **“New Partner”**, depending on the selected tab.

This form helps users input and validate all the details needed to create a new company record.

---

## 📝 Form Fields and Their Use

| Field                                      | Description                                                                                      |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| **Name**                                   | The official company name. This is a required field.                                             |
| **Contact Name**                           | The primary contact person representing the company.                                             |
| **Phone Number**                           | The company’s main contact number. Automatically validated for correct phone format.             |
| **Alternate Phone Number**                 | Backup contact number in case the main one is unavailable.                                       |
| **Email**                                  | The company’s email address for official communication. Validated automatically for correctness. |
| **Tax Number**                             | The company’s registered tax or GST number.                                                      |
| **Department**                             | The internal department or division associated with the company (optional).                      |
| **Logo URL**                               | A link to the company’s logo image (used for visual identification in the system).               |
| **Currency**                               | Defines the currency used for transactions with this company (e.g., USD, INR).                   |
| **Payment Term**                           | Sets the payment agreement, such as “Net 30” or “Advance.”                                       |
| **Category**                               | Defines what type of vendor or partner they are (e.g., Supplier, Contractor, Distributor).       |
| **Website**                                | Official company website. Must be a valid URL.                                                   |
| **Notes**                                  | Any additional remarks or business-related comments about the company.                           |
| **Vendor / Customer / Partner Checkboxes** | Used to classify the company type. You can select one or multiple, depending on permissions.     |

---

## 🧩 Form Validations

The system ensures all inputs are valid before creating a record:

- ✅ **Required Fields:** Name must not be empty.
- ⚠️ **Website:** Must start with a valid URL format (`https://` or `www.`).
- ⚠️ **Email:** Must be a proper email (e.g., `example@domain.com`).
- ⚠️ **Phone Numbers:** Must follow international phone format and accept optional `+` prefix.

If validation fails, you’ll see inline error messages and a red highlight around the incorrect fields.

---

## ⚙️ Actions Available

### 1. **Create Company**

- Fill in all required details.
- Click the **Create** button.
- The system validates the form and, if successful, saves the new company record.
- A confirmation message appears: ✅ _“Company created successfully!”_

Once created, the new company is visible in the main **Companies DataGrid**.

---

### 2. **Cancel Creation**

- Click the **Cancel** button to close the drawer without saving changes.
- No data will be submitted.

---

## 🔐 Permission Control

Access to company creation depends on user permissions:

- Only users with **Modify** permission for **Vendors**, **Customers**, or **Partners** can create or edit them.
- Unauthorized users attempting to create a record will receive a **warning message** — ensuring secure role-based access control.

---

## 🔔 Alerts and Notifications

The system displays real-time feedback at the bottom of the screen:

- 🟢 **Success:** Company created successfully.
- 🟡 **Warning:** Missing permissions or incomplete data.
- 🔴 **Error:** Failed to create company or network issue.

These alerts help ensure users understand the status of every action taken.

---

## 🚀 Example Workflow

1. Go to the **Companies** page.
2. Click on **+ Add New** under the “Vendors” tab.
3. Enter:
   - Name: _TechPro Supplies Pvt. Ltd._
   - Contact Name: _John Doe_
   - Phone Number: _+91 9876543210_
   - Email: *john@techpro.com*
   - Payment Term: _Net 30_
4. Click **Create**.
5. The vendor is now added to your list and can be used for purchase orders or tracking spending.

---

## 🧾 Summary

The **Create Company** page provides a quick and reliable way to register new business entities in the system.  
It ensures data accuracy through automatic validation, permission-based access, and helpful feedback — making company creation a smooth and user-friendly experience.

---

> 💡 **Tip:** Always verify contact information and payment terms before saving a new company to maintain clean, usable business records.
