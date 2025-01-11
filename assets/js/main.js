async function loadHeader() {
  // Fetch the header.html from the components folder one level up
  const response = await fetch('../../components/header.html');
  const headerHTML = await response.text();
  document.getElementById('header-placeholder').innerHTML = headerHTML;
}

// Call the function to load the header
loadHeader();
