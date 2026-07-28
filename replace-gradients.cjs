const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // 1. Primary buttons
  content = content.replace(/bg-gradient-to-r from-blue to-blue-btn/g, 'bg-gradient-rose');
  content = content.replace(/bg-gradient-to-br from-blue to-blue-btn/g, 'bg-gradient-rose');

  // 2. Fix the manually added styles in Header and Home
  content = content.replace(/style=\{\{\s*background:\s*'linear-gradient\(135deg, #A38645 0%, #CBB06B 30%, #EAD798 50%, #CBB06B 70%, #A38645 100%\)'\s*\}\}/g, 'className="bg-gradient-gold"');
  content = content.replace(/className="([^"]+)"\s*className="bg-gradient-gold"/g, 'className="$1 bg-gradient-gold"');
  
  content = content.replace(/style=\{\{\s*background:\s*'linear-gradient\(135deg, #B36C63 0%, #D98E84 30%, #F2B2A8 50%, #D98E84 70%, #B36C63 100%\)'\s*\}\}/g, 'className="bg-gradient-rose"');
  content = content.replace(/className="([^"]+)"\s*className="bg-gradient-rose"/g, 'className="$1 bg-gradient-rose"');

  content = content.replace(/style=\{\{\s*background:\s*'linear-gradient\(180deg, #38838A 0%, #2C7379 100%\)',\s*border:\s*'1px solid #38838A'\s*\}\}/g, 'className="bg-gradient-teal border border-[#38838A]"');
  content = content.replace(/className="([^"]+)"\s*className="bg-gradient-teal border border-\[#38838A\]"/g, 'className="$1 bg-gradient-teal border border-[#38838A]"');

  content = content.replace(/style=\{\{\s*background:\s*'linear-gradient\(105deg, rgba\(249,250,246,0\.96\) 0%, rgba\(226,238,236,0\.88\) 38%, rgba\(178,212,208,0\.7\) 60%, rgba\(178,212,208,0\.2\) 100%\)',?\s*\}\}/g, 'className="absolute inset-0 bg-gradient-overlay"');
  content = content.replace(/className="absolute inset-0"\s*className="absolute inset-0 bg-gradient-overlay"/g, 'className="absolute inset-0 bg-gradient-overlay"');

  // 3. Find any old gradient overlay
  content = content.replace(/style=\{\{\s*background:\s*'linear-gradient\(105deg, rgba\(5,15,44,0\.96\) 0%, rgba\(10,31,92,0\.88\) 38%, rgba\(10,31,92,0\.60\) 60%, rgba\(5,15,44,0\.30\) 100%\)',?\s*\}\}/g, 'className="absolute inset-0 bg-gradient-overlay"');
  content = content.replace(/className="absolute inset-0"\s*className="absolute inset-0 bg-gradient-overlay"/g, 'className="absolute inset-0 bg-gradient-overlay"');

  // 4. Secondary buttons (borders)
  content = content.replace(/border border-white\/25 text-white font-semibold text-base hover:bg-white\/10 hover:border-white\/40/g, 'bg-gradient-teal border border-[#38838A] text-white font-semibold text-base');

  if (content !== original) {
    fs.writeFileSync(filePath, content);
    console.log('Updated ' + filePath);
  }
}

function walk(dir) {
  fs.readdirSync(dir).forEach(file => {
    let filepath = path.join(dir, file);
    if (fs.statSync(filepath).isDirectory()) {
      walk(filepath);
    } else if (filepath.endsWith('.jsx') || filepath.endsWith('.js')) {
      replaceInFile(filepath);
    }
  });
}

walk(path.join(__dirname, 'src'));
