# Work Order Steps

The **Work Order Step** page gives you a complete view of a specific Work Order, including its steps, progress, timing, materials, and BOM (Bill of Materials).

<div className = "image-container"> 
<img

    src="/assets/manufacturing/workorders/workorder-step.png"
    alt="Workorder Step Page Screenshot"
    width={700}

/>

  <p className = "image-text" >
    Figure 1: Overview of the Workorder Step Page
  </p>
</div>
---

## Navigation

- Access this page by clicking a Work Order from the **Work Orders** list.
- A breadcrumb at the top shows your navigation path (Work Orders → Work Package → Selected Work Order).
- You can return to the main Work Orders list any time using the breadcrumb links.

---

## Header Information

At the top of the page, you’ll see key details about the Work Order:

- **WO Name** → Displays the Work Order name.
- **Part** → Shows the part number and part name. You can click it to view more part details.
- **Status** → Displays the current Work Order status (Pending, In Progress, Completed).
- **Product** → The product linked to this Work Order.
- **Kit** → Shows the kit number (clickable to view details).
- **Steps Completed** → Shows progress (e.g., 3/10 steps).

---

## Timer Controls

The timer tracks how much time is spent on the Work Order:

- ▶️ **Start** → Starts the Work Order.
- ⏸️ **Pause** → Pauses the timer.
- ⏹️ **Stop** → Stops the timer.
- 🔄 **Reset** → Resets the Work Order time (available only after progress).

The total tracked time is shown in `HH:MM:SS` format.

---

## Steps Section

Each Work Order is made up of **steps**.

- Steps appear in a horizontal scrollable bar with images, titles, and step numbers.
- Completed steps are marked differently (green check or highlight).
- Click a step to open its full details.

You can also use the left ⬅️ and right ➡️ buttons to scroll through steps.

---

## Step Details

When you select a step, the right side of the page displays:

- **Title** → The step name.
- **Image** → A larger image for reference.
- **Step Tasks** → Actions and details linked to this step.
- **Execution Data** → Captured time, status, and related information.

---

## BOM & Equipment

The bottom controls allow you to access material and equipment data:

- **Step BOM** → Opens a drawer showing materials required for the current step.
- **BOM** → Opens a drawer showing the Bill of Materials for the overall guide.

---

## Kit Data

Clicking on the **Kit Number** or selecting the **Kit Drawer** opens a detailed view of the assigned kit and its child kits.

---

## Printing

- Once the Work Order is **completed**, you can generate a **Print Report**.
- Use the **Print button** in the breadcrumb section.
- If the Work Order is not completed, printing is not allowed.

---

## Alerts & Notifications

- Notifications appear when actions are taken (e.g., Work Order reset, errors fetching data, or deletion issues).
- Alerts are shown in the bottom section of the page.

---

## Summary

The **Work Order Details** page helps you:

- Monitor progress of steps
- Track time spent
- View linked parts, kits, and BOMs
- Reset or restart Work Orders if needed
- Print reports for completed Work Orders
