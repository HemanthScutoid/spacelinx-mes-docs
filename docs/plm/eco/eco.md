# Engineering Change Order (ECO)

An **Engineering Change Order (ECO)** is a formal document used to propose, review, and approve changes to a part, product design, or process.  
ECOs ensure that any modifications are **properly documented, evaluated, and authorized** before implementation.

### Why We Use ECOs

- 🛠️ **Control Changes:** Ensures design or process changes are tracked systematically.
- ✅ **Maintain Quality:** Reduces errors by requiring approval before implementation.
- 📑 **Audit Trail:** Keeps a record of all changes for accountability.
- 💡 **Communication:** Facilitates collaboration between engineering, manufacturing, and management.
- ⚡ **Efficiency:** Streamlines the process of updating parts or processes without causing disruptions.

### When Do We Need ECOs

- Introducing a **new design or part modification**.
- Updating **manufacturing or assembly processes**.
- Correcting **defects or errors** in existing products.
- Implementing **regulatory or compliance-related changes**.
- Making **improvements or optimizations** to existing designs.

---

## ECO Lifecycle

The ECO process in this application follows **two main stages**:

<div class="video-container ">
  <video width="700" controls>
    <source src="/assets/PLM/eco/videos/eco-process-video.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <p class="image-text">Video: Overview of the ECO Lifecycle</p>
</div>

### 1. Creation Stage

When creating a new ECO, you will be asked to provide the following details:

<div
 
  className = "image-container"
  
>
  <img
    src="/assets/PLM/eco/eco.png"
    alt="Create ECO Page Screenshot"
    width={700}
  />
  <p className = "image-text" >
    Figure 1: Overview of the Create ECO page 
  </p>
</div>

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

Once the ECO is created, users can open it by clicking on any field in the ECO table (like ECO Number or Name) from the ECO page to see more details:

<div
 
  className = "image-container"
  
>
  <img
    src="/assets/PLM/eco/edit-eco.png"
    alt="Edit ECO Page Screenshot"
    width={700}
  />
  <p className = "image-text" >
    Figure 2: Overview of the Edit ECO Page
  </p>
</div>

- **Effected Parts** – Add or update the list of parts impacted by the change.

<div
 
  className = "image-container"
  
>
  <img
    src="/assets/PLM/eco/eco-effected-parts.png"
    alt="ECO Effected Parts Page Screenshot"
    width={700}
  />
  <p className = "image-text" >
    Figure 3: Overview of the ECO Effected Parts Page
  </p>
</div>

- **Upload Documents** – Attach supporting files such as design documents, reports, or approvals.

<div className = "image-container"> 
<img

    src="/assets/PLM/eco/eco-documents.png"
    alt="ECO Documents Page Screenshot"
    width={700}

/>

  <p className = "image-text" >
    Figure 4: Overview of the ECO Documents Page
  </p>
</div>

- **Submit ECO** – After all details are entered, the ECO can be submitted for review.

Once submitted, the ECO moves out of Draft status and enters the review process.

---

## Approval Process

<div className = "image-container"> 
<img

    src="/assets/PLM/eco/eco-approval.png"
    alt="ECO Approval Page Screenshot"
    width={700}

/>

  <p className = "image-text" >
    Figure 5: Overview of the ECO Approval Page
  </p>
</div>

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
