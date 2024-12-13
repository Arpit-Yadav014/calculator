function showInputs() {
  const formula = document.getElementById("formula").value;
  const inputsDiv = document.getElementById("inputs");
  inputsDiv.innerHTML = ""; // Clear previous inputs

  let inputsHTML = "";

  // Add input fields based on selected formula
  switch (formula) {
    case "velocity":
      inputsHTML = `
        <input type="number" id="u" placeholder="Initial velocity (u)" required>
        <input type="number" id="a" placeholder="Acceleration (a)" required>
        <input type="number" id="t" placeholder="Time (t)" required>
      `;
      break;

    case "displacement":
      inputsHTML = `
        <input type="number" id="u" placeholder="Initial velocity (u)" required>
        <input type="number" id="a" placeholder="Acceleration (a)" required>
        <input type="number" id="t" placeholder="Time (t)" required>
      `;
      break;

    case "velocityRelation":
      inputsHTML = `
        <input type="number" id="u" placeholder="Initial velocity (u)" required>
        <input type="number" id="a" placeholder="Acceleration (a)" required>
        <input type="number" id="s" placeholder="Displacement (s)" required>
      `;
      break;

    case "work":
      inputsHTML = `
        <input type="number" id="f" placeholder="Force (F)" required>
        <input type="number" id="d" placeholder="Displacement (d)" required>
        <input type="number" id="theta" placeholder="Angle (θ in degrees)" required>
      `;
      break;

    case "kineticEnergy":
      inputsHTML = `
        <input type="number" id="m" placeholder="Mass (m)" required>
        <input type="number" id="v" placeholder="Velocity (v)" required>
      `;
      break;

    case "potentialEnergy":
      inputsHTML = `
        <input type="number" id="m" placeholder="Mass (m)" required>
        <input type="number" id="g" placeholder="Gravitational acceleration (g)" required>
        <input type="number" id="h" placeholder="Height (h)" required>
      `;
      break;

    case "force":
      inputsHTML = `
        <input type="number" id="m" placeholder="Mass (m)" required>
        <input type="number" id="a" placeholder="Acceleration (a)" required>
      `;
      break;
  }

  inputsDiv.innerHTML = inputsHTML;
}

function calculate() {
  const formula = document.getElementById("formula").value;
  const resultDiv = document.getElementById("result");
  let result = "";

  try {
    switch (formula) {
      case "velocity":
        const u1 = parseFloat(document.getElementById("u").value);
        const a1 = parseFloat(document.getElementById("a").value);
        const t1 = parseFloat(document.getElementById("t").value);
        result = `Velocity (v) = ${u1 + a1 * t1}`;
        break;

      case "displacement":
        const u2 = parseFloat(document.getElementById("u").value);
        const a2 = parseFloat(document.getElementById("a").value);
        const t2 = parseFloat(document.getElementById("t").value);
        result = `Displacement (s) = ${u2 * t2 + 0.5 * a2 * t2 ** 2}`;
        break;

      case "velocityRelation":
        const u3 = parseFloat(document.getElementById("u").value);
        const a3 = parseFloat(document.getElementById("a").value);
        const s = parseFloat(document.getElementById("s").value);
        result = `Final Velocity (v²) = ${u3 ** 2 + 2 * a3 * s}`;
        break;

      case "work":
        const f = parseFloat(document.getElementById("f").value);
        const d = parseFloat(document.getElementById("d").value);
        const theta = parseFloat(document.getElementById("theta").value);
        result = `Work (W) = ${f * d * Math.cos((theta * Math.PI) / 180)}`;
        break;

      case "kineticEnergy":
        const m1 = parseFloat(document.getElementById("m").value);
        const v = parseFloat(document.getElementById("v").value);
        result = `Kinetic Energy (KE) = ${0.5 * m1 * v ** 2}`;
        break;

      case "potentialEnergy":
        const m2 = parseFloat(document.getElementById("m").value);
        const g = parseFloat(document.getElementById("g").value);
        const h = parseFloat(document.getElementById("h").value);
        result = `Potential Energy (PE) = ${m2 * g * h}`;
        break;

      case "force":
        const m3 = parseFloat(document.getElementById("m").value);
        const a4 = parseFloat(document.getElementById("a").value);
        result = `Force (F) = ${m3 * a4}`;
        break;
    }

    resultDiv.textContent = result || "Please fill all inputs correctly.";
  } catch (error) {
    resultDiv.textContent = "Error in calculation. Check inputs.";
  }
}