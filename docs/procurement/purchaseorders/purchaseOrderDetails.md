# Purchase Order Details

The **Purchase Order Details** page allows you to view and manage a single purchase order (PO). Depending on your role and the PO status, you can perform actions such as **editing, submitting, approving, rejecting, closing, or printing** the PO.

---

## Page Header

At the top of the page, you can see:

- **PO Number & Status** (e.g., Draft, Submitted, Approved, Delivered).
- Action buttons based on your permissions and the PO status.

| Action          | Availability                    | Description                      |
| --------------- | ------------------------------- | -------------------------------- |
| **Edit P.O**    | Draft + Creator/SCM Admin       | Switches PO to edit mode.        |
| **Submit P.O**  | Draft + Creator                 | Submits PO for approval.         |
| **Approve P.O** | Submitted + SCM Manager         | Approves the purchase order.     |
| **Reject P.O**  | Submitted + SCM Manager         | Rejects the purchase order.      |
| **Close P.O**   | Delivered + SCM Manager/Admin   | Closes the order after delivery. |
| **Update P.O**  | Draft (edit mode)               | Saves modifications made.        |
| **Print**       | All statuses + Print permission | Opens PO as a PDF for printing.  |

---

## Tabs

The page has three main tabs:

### 1. Overview

Displays general details of the PO.

- **Vendor** (code & name)
- **Payment Terms**
- **Order Date**
- **Billing Organization & Address**
- **Shipping Organization & Address**
- **Expected Delivery Date**
- **Project**
- **Line Items** (materials/services requested)
- **Terms and Conditions**

---

### 2. Documents

Upload and manage supporting documents for the PO.

| Action     | Availability                                 |
| ---------- | -------------------------------------------- |
| **View**   | All users with View permission               |
| **Upload** | Only when PO is in Draft + Modify permission |
| **Delete** | Only when PO is in Draft + Delete permission |

---

### 3. GRN (Goods Receipt Notes)

Lists all GRNs linked to the purchase order.

- You can view all GRNs if you have **View permission**.
- Helps track goods received against this PO.

---

## Required Fields (for Editing/Submission)

| Field                  | Mandatory | Notes                            |
| ---------------------- | --------- | -------------------------------- |
| Vendor                 | ✅        | Select vendor from the list.     |
| Payment Terms          | ✅        | Choose agreed payment condition. |
| Order Date             | ✅        | Must be today or earlier.        |
| Billing Organization   | ✅        | Billing address auto-fills.      |
| Shipping Organization  | ✅        | Shipping address auto-fills.     |
| Expected Delivery Date | ✅        | Must be later than order date.   |
| Project                | ✅        | Choose related project.          |
| Line Items             | ✅        | At least one item required.      |
| Terms and Conditions   | Optional  | Add any specific conditions.     |

---

## Notes

- Only users with the correct **role & permissions** (Modify, Approve, Delete, Print) will see the corresponding actions.
- **SCM Managers** and **Super Admins** have extended rights (approve, reject, close PO).
- Once a PO is **Closed**, no further edits are allowed.
