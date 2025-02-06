## 🌍 Navigation Structure
### 🔹 Public Routes (Accessible to all users)

|Page                  |Route           |Description                                        |
|----------------------|----------------|---------------------------------------------------|
|Home                  |/               |Landing page with featured opportunities           |
|Sign Up               |//signup        |User registration for volunteers & organizatio     |
|Login                 |/login          |Secure login for access to dashboards              |
|Browse Opportunities  |/opportunitie   |List of available volunteering events with filters |
|Event Details         |/event/:id      |Detailed page about a specific event               |

### 🔹 Volunteer Routes (After Login)

|Page                    |Route             |Description                                  |
|------------------------|------------------|---------------------------------------------|
|Volunteer Dashboard     |/dashboard        |Personalized dashboard with stats and upcoming events  |
|My Applications         |/my-applications  |Track event applications and status updates            |
|Ratings & Reviews       |/reviews          |Provide feedback on organizations                      |
|Profile Settings        |/profile          |Manage volunteer details, interests, and location      |

### 🔹 Organization Routes (For Non-profits)

|Page                    |Route             |Description                                  |
|------------------------|------------------|---------------------------------------------|
|Organization Dashboard  |/org-dashboard    |Manage events and volunteer applications     |
|Create Event            |/create-event     |Form to add new volunteer opportunities      |
|Manage Volunteers       |/manage-volunteers|View and approve/reject volunteer requests   |
|View Ratings            |/org-reviews      |See feedback and reviews given by volunteers |

### 🔹 Admin Routes (Restricted Access)

|Page               |Route         |Description                                     |
|-------------------|--------------|------------------------------------------------|
|Admin Dashboard    |/admin        |Overview of platform stats, users, and events   |
|Manage Users       |/admin/users  |View, edit, or remove volunteers/organizations  |
|Approve Events     |/admin/events |Review and approve or reject event postings     |
|Reports & Analytics|/admin/reports|Insights on volunteer engagement and impact     |
