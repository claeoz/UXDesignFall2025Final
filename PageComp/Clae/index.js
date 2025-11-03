(() => {
const r = 80;
const circumference = 2 * Math.PI * r;
const segments = document.querySelectorAll('.segment');
let offset = 0;


segments.forEach(seg => {
const pct = Number(seg.dataset.percent) || 0;
const len = (pct / 100) * circumference;
seg.setAttribute('r', r);
seg.style.strokeDasharray = `${len} ${circumference - len}`;
seg.style.strokeDashoffset = -offset;
offset += len;
});


const completed = Number(segments[0].dataset.percent || 0);
const inprogress = Number(segments[1].dataset.percent || 0);
document.getElementById('center-value').textContent = `${completed + inprogress}%`;


segments.forEach((seg, i) => {
seg.addEventListener('mouseenter', () => {
segments.forEach((s, j) => s.style.opacity = i === j ? 1 : 0.25);
});
seg.addEventListener('mouseleave', () => {
segments.forEach(s => s.style.opacity = 1);
});
});
})();