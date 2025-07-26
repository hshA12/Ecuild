document.getElementById("submitBtn").addEventListener("click", () => {
  const aInput = document.getElementById("a");
  const bInput = document.getElementById("b");
  const a = parseInt(aInput.value);
  const b = parseInt(bInput.value);
  const tableBody = document.getElementById("resultTableBody");
  tableBody.innerHTML = ""; // clear previous
const alertDiv = document.getElementById("alert");
  if (isNaN(a) || isNaN(b) || a <= 0 || b <= 0) {
    aInput.value = "";
        bInput.value = "";
    alertDiv.innerHTML = `<div class="alert alert-danger mt-2">Please enter valid positive integers for a and b.</div>`;
    return;
  }
  const table=document.querySelector(".containerTable ").classList.add("visible");
  // Show the table
    // Clear previous results
  let r1 = a, r2 = b;
  let s1 = 1, s2 = 0;
  let t1 = 0, t2 = 1;

  while (r2 !== 0) {
    let q = Math.floor(r1 / r2);
    let r = r1 % r2;
    let s = s1 - q * s2;
    let t = t1 - q * t2;

    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${q}</td>
      <td>${r1}</td>
      <td>${r2}</td>
      <td>${r}</td>
      <td>${s1}</td>
      <td>${s2}</td>
      <td>${s}</td>
      <td>${t1}</td>
      <td>${t2}</td>
      <td>${t}</td>
    `;
    tableBody.appendChild(row);

    // Update variables
    r1 = r2;
    r2 = r;
    s1 = s2;
    s2 = s;
    t1 = t2;
    t2 = t;
  }
const finalRow = document.createElement("tr");
    finalRow.innerHTML = `
        <td class="footerbg" colspan="10">Final GCD: ${r1}, Coefficients: s=${s1}, t=${t1}</td>
    `;
    tableBody.appendChild(finalRow);
  // Optional: Display final result in last row if needed
});
    
  