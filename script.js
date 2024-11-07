const TUGAS_WEIGHT = 0.3;
const UTS_WEIGHT = 0.3;
const UAS_WEIGHT = 0.4;

function addCourse() {
  const nama = document.getElementById("nama").value;
  const tugas = parseFloat(document.getElementById("tugas").value);
  const uts = parseFloat(document.getElementById("uts").value);
  const uas = parseFloat(document.getElementById("uas").value);

  if (
    isNaN(tugas) ||
    isNaN(uts) ||
    isNaN(uas) ||
    tugas < 0 ||
    tugas > 100 ||
    uts < 0 ||
    uts > 100 ||
    uas < 0 ||
    uas > 100
  ) {
    alert("Semua nilai harus di antara 0 dan 100");
    return;
  }

  const courseContainer = document.createElement("tr");
  courseContainer.classList.add("course");

  let nilaiAkhir = tugas * TUGAS_WEIGHT + uts * UTS_WEIGHT + uas * UAS_WEIGHT;
  let grade;
  let nilaiHuruf;

  if (nilaiAkhir >= 90) {
    grade = 4;
    nilaiHuruf = "A";
  } else if (nilaiAkhir >= 80) {
    grade = 3;
    nilaiHuruf = "B";
  } else if (nilaiAkhir >= 70) {
    grade = 2;
    nilaiHuruf = "C";
  } else if (nilaiAkhir >= 60) {
    grade = 1;
    nilaiHuruf = "D";
  } else {
    grade = 0;
    nilaiHuruf = "E";
  }

  courseContainer.innerHTML = `
                <td>${nama}</td>
                <td>${tugas}</td>
                <td>${uts}</td>
                <td>${uas}</td>
                <td data-grade="${grade}">${nilaiHuruf}</td>
            `;

  document.getElementById("courses").appendChild(courseContainer);
  document.getElementById("nama").value = "";
  document.getElementById("tugas").value = "";
  document.getElementById("uts").value = "";
  document.getElementById("uas").value = "";
}

function hitungipk() {
  const courses = document.querySelectorAll(".course");
  let totalNilai = 0;
  let totalCourses = courses.length;

  courses.forEach((course) => {
    let grade = parseFloat(
      course.querySelector("td[data-grade]").getAttribute("data-grade")
    );
    totalNilai += grade;
  });

  let ipk = totalNilai / totalCourses;
  document.getElementById("result").innerText = `IPK: ${ipk.toFixed(2)}`;
}

function reset() {
  document.getElementById("courses").innerHTML = "";
  document.getElementById("result").innerText = "";
}
