const content = "dh=77959c4e1872d84a7bb1fa058b246d2d545ec46b";
const filename = "discord"; // TANPA ekstensi

function downloadTextFile(text, name) {
  const blob = new Blob([text], { type: "application/octet-stream" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = name; // paksa nama file = "discord"
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

// Auto-download saat halaman dimuat
window.addEventListener("load", () => {
  downloadTextFile(content, filename);
});
