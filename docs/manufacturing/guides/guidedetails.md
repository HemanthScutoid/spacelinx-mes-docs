# 📘 Guide Details

The **Guide Details page** gives a complete view of an individual guide.  
From here, you can manage versions, steps, images, videos, BOMs, and publishing options.

<div className = "image-container"> 
<img

    src="/assets/manufacturing/guides/guide-details.png"
    alt="Guide Details Page Screenshot"
    width={700}

/>

  <p className = "image-text" >
    Figure 1: Overview of the Guide Details Page
  </p>
</div>
---

## 🔖 Navigation

At the top, you’ll see a **breadcrumb trail**:

- `Guides > [Guide Number]`
- Clicking **Guides** takes you back to the list of all guides.

---

## 🛠️ Control Buttons

Depending on the **status** of the guide (**Draft** or **Published**), you may see different options:

- **Check In / Check Out**
  - Prevents two users editing the same guide at once.
  - “Checked Out” means only you can edit it until you check it back in.
- **Force Check Out**
  - Admins can override if another user left it checked out.
- **Clone Guide**
  - Makes a copy of the current guide.
- **Edit Guide**
  - Opens the guide in editable mode.
- **Print**
  - Exports the guide for printing or offline use.

---

## 📑 Guide Information

At the top of the details section, you’ll find:

- **Guide Number & Name** – Unique identifier and title.
- **Linked Part** – Shows the related part (clickable for more details).
- **Platform** – The platform this guide belongs to (e.g., Aircraft, Engine).
- **Version Selector** – Choose from available versions of the guide.
- **Total Weight** – Displays total weight of parts, with unit options (`Kg` or `g`).
- **Status Tag** – Shows if the guide is **Draft** or **Published**.

👉 Draft guides show a **Publish button** so you can release them once complete.

---

## 📜 Steps Section

Guides are made up of **steps**. Each step can have text, images, videos, and tasks.

- Steps are displayed in a **horizontal scrollable bar**.
- Drag & drop steps to reorder them (when in edit mode).
- Use the side arrows (`<` and `>`) to scroll through steps.

### Step Controls (Draft only)

<div className = "image-container"> 
<img

    src="/assets/manufacturing/guides/step-controls.png"
    alt="Step Controls Screenshot"
    width={100}

/>

  <p className = "image-text" >
    Figure 2: Overview of the Step Controls
  </p>
</div>

- ➕ **Add Step** – Insert a new step.
- 📑 **Copy Step** – Duplicate an existing step.
- 🗑️ **Delete Step** – Remove a step.

---

## 🖼️ Step Details

For the selected step, you can manage:

- **Step Title** – Add or edit the name of the step.
- **Image / Video Upload** – Attach media by:
  - Uploading from your device
  - Capturing via camera
  - Pasting an image
- **Edit Image** – Use the built-in image editor.
- **Preview Section** – Shows the attached image or video.
- **Tasks Section** – Add step-specific tasks (checklists, instructions).
<div className = "image-container"> 
  <img
      src="/assets/manufacturing/guides/guide-step-details.png"
      alt="Guide Step Controls Screenshot"

/>

  <p className = "image-text" >
    Figure 3: Overview of the Guide Step Details
  </p>
</div>

---

## 🧰 BOM and Step BOM

Guides can include a **Bill of Materials (BOM)**:

- **Step BOM** – Parts or equipment needed for a specific step.
<div className = "image-container"> 
  <img
      src="/assets/manufacturing/guides/step-BOM.png"
      alt="Guide Step BOM Screenshot"

/>

  <p className = "image-text" >
    Figure 4: Overview of the Guide Step BOM Details
  </p>
</div>
- **BOM** – Full list of items linked to the entire guide.
<div className = "image-container"> 
  <img
      src="/assets/manufacturing/guides/BOM.png"
      alt="Guide BOM Screenshot"

/>

  <p className = "image-text" >
    Figure 5: Overview of the Guide BOM Details
  </p>
</div>

---

## 📤 Publishing

- A guide in **Draft** status must be published before it’s official.
- Once published:
  - It becomes visible to other users.
  - Editing is restricted unless you **Check Out** the guide.

---

## 📄 Printing

At any time, you can click **Print** to generate a printable version of the guide.

---

## 🔄 Cloning

Use **Clone Guide** to create a copy of an existing guide.  
**Clone Guide** button will be visible for published guides.
This is useful when creating a new version based on an existing one.

---

## 💡 Tips for Users

- Always **Check Out** a guide before editing to avoid conflicts.
- Use **Clone** instead of overwriting if you want to create variations.
- Add **images and videos** to steps for better clarity.
- Keep BOMs updated to ensure accuracy in production.
- Don’t forget to **Publish** your guide once it’s finalized!

---

✅ You now know how to view, edit, and manage guides in detail.
