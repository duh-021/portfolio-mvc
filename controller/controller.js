
import { skills } from '../model/skills.js';
import { langStats } from '../model/langStats.js';

const skillCode = document.getElementById('skill-code');
const langStatsDiv = document.getElementById('lang-stats');

let code = `while (skills) {\n  let skillSet = {\n`;

for (const category in skills) {
  code += `    ${category}: [${skills[category].map(s => `'${s}'`).join(', ')}],\n`;
}
code += `  };\n  break;\n}`;
skillCode.innerText = code;

langStats.forEach(stat => {
  const bar = document.createElement('div');
  bar.className = 'lang-bar';
  bar.innerHTML = `<span>${stat.name}</span><div style="width: ${stat.percent * 2}px"></div>`;
  langStatsDiv.appendChild(bar);
});
