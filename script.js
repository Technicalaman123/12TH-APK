let studentTable = document.getElementById("studentTable");  
let totalStudents = 0;

// ✅ New Students Data
let studentData = {
  "001": "Riva Mirdha",
  "005": "Deepa Rohidas",
  "006": "Pragati Samal",
  "007": "Kiran Singh Thakur",
  "008": "Smita Dakua",
  "009": "Sushama Bhue",
  "011": "Aparna Seth",
  "012": "Sanjay Patra",
  "014": "Anup Hemram",
  "015": "Abinash Kerketta",
  "016": "Kuna Kisan",
  "017": "Madhusudhan Jena",
  "018": "Dinesh Bagarti",
  "019": "Kaushalya Bhoi",
  "020": "Sankar Sahu",
  "021": "Sneha Mahakud",
  "022": "Suchismita Das",
  "023": "Amrita Sahu",
  "024": "Lucky Behera",
  "025": "Pooja Oram",
  "026": "Subham Oram",
  "027": "Mayuresh Bag",
  "028": "Pankajini Rohidas",
  "032": "Kaberi Seth",
  "033": "Malti Oram",
  "035": "Nikhil Kishan",
  "037": "Prachi Barik",
  "038": "Sonali Bhoi",
  "039": "Simran Bhainsa",
  "041": "Tekananda Bhue",
  "042": "Kiran Bag",
  "043": "Jeevan Kumar Barik",
  "044": "Jigyansa Barge",
  "045": "Puja Rani Sahu",
  "046": "Hemanta Mirdha",
  "047": "Barsha Bhoi",
  "048": "Lovely Surujal",
  "049": "Jayanta Kumar Biswal",
  "051": "Khusbu Behera",
  "052": "Muskan Barle",
  "053": "Sophiya Haripal",
  "055": "Ankit Beshra",
  "057": "Priyanka Nag",
  "058": "Saloni Behera",
  "059": "Lipsa Khadia",
  "060": "Tanu Munda",
  "062": "Ananta Kumbhar",
  "063": "Srijeet Majhi",
  "064": "Ajaya Mirdha",
  "066": "Shikha Satnami",
  "067": "Baishnavi Kumbhar",
  "068": "Anjali Banchhor",
  "069": "Nitu Oram",
  "070": "Gayatri Behera",
  "071": "Sudarsan Oram",
  "072": "Samir Mirdha",
  "073": "Balaram Tandi",
  "074": "Rohit Khadia",
  "075": "Rita Oram",
  "076": "Esmail Barla",
  "077": "Barsha Oram",
  "079": "Dev Anda Nag",
  "080": "Neha Khadia",
  "081": "Akash Panigrahi",
  "083": "Suryakanta Mirdha",
  "084": "Anjali Meher",
  "085": "Prachi Nag",
  "087": "Anchal Ram",
  "088": "Sania Hemram",
  "090": "Sneha Naik",
  "091": "Ajit Mirdha",
  "092": "Ronit Suna",
  "095": "Mahima Suna",
  "096": "Smruti Dakua",
  "097": "Laxmipriya Barik",
  "098": "Tanushree Pradhan",
  "099": "Monali Gahir",
  "100": "Rasmi Hemram",
  "101": "Priyabrata Pradhan",
  "102": "Anjali Rana",
  "104": "Slok Kumar Swain",
  "105": "Likhita Sindhria",
  "106": "Riya Kalet",
  "107": "Chinmayee Barada",
  "108": "Rasmita Patra",
  "110": "Himesh Kalsai",
  "111": "Rakesh Munda",
  "112": "Nandini Majhi",
  "113": "Priyanka Meher",
  "114": "Rohan Bhoi",
  "115": "Lovely Matari",
  "116": "Tejas Kalet",
  "117": "Utkarsh Behera",
  "118": "Pinki Bag",
  "119": "Babli Sahu",
  "120": "Kanchan Satnami",
  "121": "Sahil Sahu",
  "122": "Kshirod Podh",
  "123": "Sabitri Tandi",
  "124": "Balaram Sahu",
  "125": "Naveen Singh",
  "126": "Seema Mahanand",
  "127": "Supriya Pradhan",
  "128": "Khusbu Gupta",
  "131": "Sandhyarani Bhainsal",
  "132": "Ballavi Mirdha",
  "133": "Priyanka Mahananda",
  "134": "Soumya Ranjan Nag",
  "135": "Sagarika Budhia",
  "136": "Barsha Sahani",
  "137": "Soham Bhoi",
  "138": "Roshni Tandia",
  "139": "Shruti Mugri",
  "140": "Archita Bag",
  "141": "Ayush Kumar Sahu",
  "143": "Meghasmita Bag",
  "144": "Snehalata Das",
  "145": "Kalyani Mirdha",
  "146": "Jyoti Mirdha",
  "147": "Ranjita Lakra",
  "148": "Tejash Meher",
  "149": "Nikita Khadia",
  "150": "Sanjay Kumar Sahu",
  "151": "Shiba Khadia",
  "152": "Smitapragnya Dalai"
};
// Add row function
function addRow(rollNo) {
  totalStudents++;
  let row = document.createElement("tr");

  // Roll ko string bana ke check karo
  let rollKey = rollNo.toString().padStart(3, "0");  

  row.innerHTML = `
    <td>${totalStudents}</td>
    <td>${studentData[rollKey] || "Unknown"}</td>
    <td>${rollKey}</td>
    <td><button class="deleteBtn" onclick="deleteRow(this)">Delete</button></td>
  `;

  studentTable.appendChild(row);
}

// Delete row function
function deleteRow(btn) {
  btn.closest("tr").remove();
}

// Bulk Add
document.getElementById("bulkAddButton").addEventListener("click", () => {
  let rolls = document.getElementById("bulkRollInput").value.trim().split(/\s+/);
  rolls.forEach(r => addRow(r));
  document.getElementById("bulkRollInput").value = "";
});

// Dialpad functions
function dialPress(num) {
  document.getElementById("dialInput").value += num;
}
function dialDelete() {
  let input = document.getElementById("dialInput");
  input.value = input.value.slice(0, -1);
}
function dialNext() {
  let roll = document.getElementById("dialInput").value.trim();
  if (roll) addRow(roll);
  document.getElementById("dialInput").value = "";
}

// ✅ Done Button - Sort Roll Nos
document.getElementById("doneButton").addEventListener("click", () => {
  let rows = Array.from(studentTable.querySelectorAll("tr"));

  rows.sort((a, b) => {
    let rollA = parseInt(a.cells[2].innerText);
    let rollB = parseInt(b.cells[2].innerText);
    return rollA - rollB;
  });

  studentTable.innerHTML = "";
  totalStudents = 0;
  rows.forEach(r => {
    totalStudents++;
    r.cells[0].innerText = totalStudents; 
    studentTable.appendChild(r);
  });
});

// Save
document.getElementById("saveButton").addEventListener("click", () => {
  localStorage.setItem("studentTable", studentTable.innerHTML);
  alert("Saved!");
});

// Restore
document.getElementById("restoreButton").addEventListener("click", () => {
  let saved = localStorage.getItem("studentTable");
  if (saved) {
    studentTable.innerHTML = saved;
    alert("Restored!");
  }
});

// Print
document.getElementById("printButton").addEventListener("click", () => {
  window.print();
});

// Export CSV
document.getElementById("exportCsvButton").addEventListener("click", () => {
  let csv = [];
  document.querySelectorAll("table tr").forEach(row => {
    let cols = Array.from(row.querySelectorAll("td,th")).map(td => td.innerText);
    cols = cols.filter(c => c !== "Delete");
    csv.push(cols.join(","));
  });
  let blob = new Blob([csv.join("\n")], { type: "text/csv" });
  let a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "students.csv";
  a.click();
});

// ✅ Export PDF
document.getElementById("exportPdfButton").addEventListener("click", () => {
  const { jsPDF } = window.jspdf;
  let doc = new jsPDF();

  let today = new Date();
  let formattedDate = today.toLocaleDateString("en-GB").replace(/\//g, "-"); 

  doc.setFontSize(14);
  doc.text("Student Attendance - Class 12th Commerce", 10, 10);
  doc.text("Date: " + formattedDate, 150, 10);

  let rows = [];
  rows.push(["SR. No", "Name", "Roll No"]);

  document.querySelectorAll("#studentTable tr").forEach(tr => {
    let sr = tr.cells[0].innerText;
    let name = tr.cells[1].innerText;
    let roll = tr.cells[2].innerText;
    rows.push([sr, name, roll]);
  });

  let y = 20;
  rows.forEach(r => {
    doc.text(r.join("   "), 10, y);
    y += 10;
  });

  let fileName = `${formattedDate} Class 12th Commerce Attendance.pdf`;
  doc.save(fileName);
});