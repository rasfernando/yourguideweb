// Placeholder tickets (can be dynamically fetched from a server)
const roadmapTickets = {
    now: [
      { title: "AI Recommendations", description: "Enhance personalization using AI." },
      { title: "Verified Guide Profiles", description: "Build trust with guide verification badges." },
    ],
    next: [
      { title: "Group Travel Features", description: "Share costs and explore together." },
      { title: "Smart Notifications", description: "Proactive alerts for upcoming tours." },
    ],
    later: [
      { title: "AR City Tours", description: "Use augmented reality for interactive tours." },
      { title: "Global Events", description: "Host traveler meetups worldwide." },
    ],
  };
  
  // Populate roadmap tickets
  function populateTickets() {
    ["now", "next", "later"].forEach((category) => {
      const column = document.getElementById(`${category}-tickets`);
      roadmapTickets[category].forEach((ticket) => {
        const ticketDiv = document.createElement("div");
        ticketDiv.classList.add("ticket", category);
        ticketDiv.innerHTML = `<h5>${ticket.title}</h5><p>${ticket.description}</p>`;
        column.appendChild(ticketDiv);
      });
    });
  }
  
  // Handle form submission
  document.getElementById("ticket-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const title = document.getElementById("ticket-title").value;
    const description = document.getElementById("ticket-description").value;
    const category = document.getElementById("ticket-category").value;
  
    const ticketDiv = document.createElement("div");
    ticketDiv.classList.add("ticket", category);
    ticketDiv.innerHTML = `<h5>${title}</h5><p>${description}</p>`;
    document.getElementById(`${category}-tickets`).appendChild(ticketDiv);
  
    // Clear form
    e.target.reset();
  });
  
  document.addEventListener("DOMContentLoaded", populateTickets);
  