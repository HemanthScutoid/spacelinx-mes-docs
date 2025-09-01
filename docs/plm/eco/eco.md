# Engineering Change Order (ECO)

The **Engineering Change Order (ECO)** module allows teams to propose, track, and approve changes to parts, designs, or processes.  
It ensures that every change is properly documented, reviewed, and approved before being implemented.

---

## ECO Lifecycle

The ECO process in this application follows **two main stages**:

### 1. Creation Stage

When creating a new ECO, you will be asked to provide the following details:

- **ECO Name** – A short, descriptive title.
- **Reason for Change** – The justification for why the change is required.
- **Change Type** – Choose from predefined types (e.g., Design Change, Process Change).
- **Priority** – Select the urgency level (e.g., High, Medium, Low).
- **Impact Analysis** – A detailed explanation of how the change will affect products or processes.
- **Description** – Additional notes about the ECO.
- **Selected Parts (optional)** – Any parts directly linked during creation.

At this stage, the ECO is saved as a **Draft**.

---

### 2. Editing / Review Stage

Once the ECO is created, users can open it by clicking on any field from ECO table like ECO number,name etc. from ECO page to see more details:

- **Effected Parts** – Add or update the list of parts impacted by the change.
- **Upload Documents** – Attach supporting files such as design documents, reports, or approvals.
- **Submit ECO** – After all details are entered, the ECO can be submitted for review.

Once submitted, the ECO moves out of Draft status and enters the review process.

---

## Approval Process

- ECOs that are **submitted** are reviewed by users with the **ECO Approver** role.
- Approvers can review the details, assess the impact, and either **Approve** or **Reject** the ECO.
- An **Approved ECO** becomes the official record of the change and can be implemented.

---

## Example Workflow

1. A design engineer creates an ECO with basic details:

   - ECO Name: "Update Bracket Dimensions"
   - Reason for Change: "Supplier reported inconsistency in hole size"
   - Change Type: "Design Change"
   - Priority: High
   - Impact Analysis: "Affects Part #456; tooling needs update"

2. The ECO is saved as a **Draft**.
3. Later, the engineer opens the ECO to:

   - Add Part #456 as an effected part.
   - Upload the revised CAD drawing.
   - Submit the ECO.

4. The ECO Approver reviews the submission and **approves** it.
5. The ECO becomes the official change record and is ready for implementation.

---

## Notes

- Draft ECOs can be **discarded** if they are no longer needed.
- Only users with permission can **create or edit ECOs**.
- Only ECO Approvers can **approve submitted ECOs**.
- ECOs remain visible in the history, providing a clear audit trail of changes.
