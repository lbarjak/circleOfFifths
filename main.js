function start() {
  let start_note;
  let fifths = document.getElementById("fifths");
  start_note = 440;
  for (let i = 0; i <= 12; i++) {
    fifths.innerHTML +=
      "<li>" + (start_note * Math.pow(2, i / 12)).toFixed(2) + "</li>";
  }
  fifths.innerHTML += "-------";
  let step = Math.pow(2, 1 / 12);
  let chromatic_fifth = Math.pow(step, 7);
  let natural_fifth = 1.5;
  notes_chromatic = [];
  notes_natural = [];
  notes_chromatic = put_fifths(start_note, chromatic_fifth, notes_chromatic);
  notes_natural = put_fifths(start_note, natural_fifth, notes_natural);
  write_fifths(notes_chromatic);
  fifths.innerHTML += "-------";
  write_fifths(notes_natural);

  function put_fifths(start_note, typeOfFifth, notes) {
    let actual_fifth;
    notes = [];
    for (let i = 0; i <= 12; i++) {
      actual_fifth = start_note;
      while (actual_fifth > 900) {
        actual_fifth = actual_fifth / 2;
      }
      notes.push(actual_fifth.toFixed(2));
      start_note = start_note * typeOfFifth;
    }
    notes.sort();
    return notes;
  }
  function write_fifths(notes) {
    for (let i = 0; i <= 12; i++) {
      fifths.innerHTML += "<li>" + notes[i] + "</li>";
    }
  }
}
