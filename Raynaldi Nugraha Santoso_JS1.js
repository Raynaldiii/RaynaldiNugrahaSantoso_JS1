// Contoh penggunaan if, else, dan nested if
let nilai = 85;

if (nilai >= 90) {
  console.log("Nilai A");
} else if (nilai >= 80) {
  console.log("Nilai B");
} else {
  console.log("Nilai C");
}

// Contoh penggunaan switch case
let grade = "B";

switch (grade) {
  case "A":
    console.log("Pertahankan!");
    break;
  case "B":
    console.log("Baik!");
    break;
  case "C":
    console.log("Perlu meningkatkan!");
    break;
  default:
    console.log("Tidak valid");
}

// Contoh penggunaan for statement
for (let i = 1; i <= 5; i++) {
  console.log("Iterasi ke-" + i);
}

// Contoh penggunaan while
let count = 0;

while (count < 5) {
  console.log("Perulangan ke-" + (count + 1));
  count++;
}

// Contoh penggunaan do while
let counter = 0;

do {
  console.log("Perulangan ke-" + (counter + 1));
  counter++;
} while (counter < 5);

// Contoh penggunaan function
function tambah(a, b) {
  return a + b;
}

let hasilPenambahan = tambah(10, 20);
console.log("Hasil penambahan: " + hasilPenambahan);

let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Today is Monday.");
    break;
  case "Tuesday":
    console.log("Today is Tuesday.");
    break;
  case "Wednesday":
    console.log("Today is Wednesday.");
    break;
  case "Thursday":
    console.log("Today is Thursday.");
    break;
  case "Friday":
    console.log("Today is Friday.");
    break;
  case "Saturday":
    console.log("Today is Saturday.");
    break;
  case "Sunday":
    console.log("Today is Sunday.");
    break;
  default:
    console.log("Invalid day.");
}
