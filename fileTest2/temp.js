
const s={grammar:document.querySelector('#grammar'),vocabulary:document.querySelector('#vocabulary'),pronunciation:document.querySelector('#pronunciation'),practical:document.querySelector('#practical'),reading:document.querySelector('#reading'),listening:document.querySelector('#listening')};let id=0, exId=0;const norm=x=>x.trim().toLowerCase().replace(/[.?!,]/g,'').replace(/\s+/g,' ');const title=(t,x)=>{ exId++; t.insertAdjacentHTML('beforeend',`<h3>${x}</h3>`); };const endEx=(t,pts)=>t.insertAdjacentHTML('beforeend',`<div style="display:flex; justify-content:flex-end; margin:10px 0 25px;"><div id="score-box-${exId}" style="border: 1px solid #333; width: 25px; height: 25px; background: #fff; display: flex; justify-content: center; align-items: center; font-weight: bold; color: #29974e; font-family: Arial, sans-serif;"></div><div style="border: 1px solid #333; background: #999; color: #fff; font-weight: bold; font-family: Arial, sans-serif; width: 25px; height: 25px; display: flex; justify-content: center; align-items: center; margin-left: -1px; font-size: 14px;">${pts}</div></div>`);function fill(t,p,a){id++;t.insertAdjacentHTML('beforeend',`<div class="q">${p.replace('___',`<input type="text" data-answer="${a}" data-ex="${exId}">`)}</div>`)}function choice(t,p,o,c){id++;t.insertAdjacentHTML('beforeend',`<div class="q">${p}<div class="answers">${o.map((x,i)=>`<label><input type="radio" name="q${id}" data-ex="${exId}" ${i===c?'data-correct="true"':''}> ${String.fromCharCode(65+i)}. ${x}</label>`).join('')}</div></div>`)}const example=(t,html)=>t.insertAdjacentHTML('beforeend',`<div class="example" style="background:#fff7df; padding:8px 12px; margin-bottom:15px; border-radius:4px; font-style:italic;"><strong>Example:</strong> ${html}</div>`);function syllable(t,syls,c){id++;const html=syls.map((s,i)=>`<span class="syl" data-ex="${exId}" data-name="q${id}" data-idx="${i}" style="cursor:pointer; padding:3px 2px; font-size:16px;">${s}</span>`).join('&middot;');t.insertAdjacentHTML('beforeend',`<div class="q syl-q" data-correct="${c}" style="padding:4px;">${html}</div>`);}
document.addEventListener('click', e => { if(e.target.classList.contains('syl')){ const p=e.target.closest('.syl-q'); p.querySelectorAll('.syl').forEach(s=>{s.style.textDecoration='none'; s.style.fontWeight='normal'; s.classList.remove('selected');}); e.target.style.textDecoration='underline'; e.target.style.fontWeight='bold'; e.target.classList.add('selected'); }});

/* --- GRAMMAR (15 marks) --- */
title(s.grammar,'1. Underline the correct word.');
example(s.grammar,'It\'s a small <u><strong>bag</strong></u> / bags.');
[['They\'re her book\'s / books.',['book\'s','books'],1],
 ['It\'s John / John\'s coat.',['John','John\'s'],1],
 ['It\'s an / a umbrella.',['an','a'],0],
 ['They\'re Harry\'s / Harrys pens.',['Harry\'s','Harrys'],0],
 ['They\'re old / olds cars.',['old','olds'],0],
 ['Tony is my father / father\'s brother.',['father','father\'s'],1],
 ['Where are my photoes / photos?',['photoes','photos'],1],
 ['They\'re expensive watch\'s / watches.',['watch\'s','watches'],1]].forEach(x=>choice(s.grammar,...x));
endEx(s.grammar, 8);

title(s.grammar,'2. Complete the sentences with my, your, his, her, its, our, or their.');
example(s.grammar,'A What\'s <u>your</u> name?<br>B My name? Oh, it\'s Georgia.');
[['I\'m Fiona and ___ sister\'s name is Claire.','my'],
 ['We\'re brothers. ___ names are Ben and Roger.','our'],
 ['A: What\'s your brother\'s name? B: My brother? ___ name is William.','his'],
 ['They\'re my children. ___ names are Josie and Holly.','their'],
 ['Our hotel is fantastic. ___ name is The Ambassador.','its'],
 ['He\'s English but ___ wife is from Poland.','his'],
 ['A: What are ___ names? B: His name\'s Dan and her name\'s Mary.','their']].forEach(x=>fill(s.grammar,...x));
endEx(s.grammar, 7);

/* --- VOCABULARY (20 marks) --- */
title(s.vocabulary,'3. Write the words.');
example(s.vocabulary,'a <u>mobile phone</u>');
s.vocabulary.insertAdjacentHTML('beforeend', '<style>.vocab-img { height: 120px; border-radius: 6px; display: block; margin-bottom: 8px; border: 1px solid #d1d5db; object-fit: cover; }</style>');
[['<img src="file:///C:/Users/Videographer/.gemini/antigravity/brain/102364aa-26e7-4463-abcc-1a6cc6a18cee/watch_image_1789591943606.jpg" class="vocab-img"> a w___','atch|watch|a watch'],
 ['<img src="file:///C:/Users/Videographer/.gemini/antigravity/brain/102364aa-26e7-4463-abcc-1a6cc6a18cee/glasses_image_1789591958606.jpg" class="vocab-img"> g___','lasses|glasses'],
 ['<img src="file:///C:/Users/Videographer/.gemini/antigravity/brain/102364aa-26e7-4463-abcc-1a6cc6a18cee/keys_image_1789591980204.jpg" class="vocab-img"> k___','eys|keys'],
 ['<img src="file:///C:/Users/Videographer/.gemini/antigravity/brain/102364aa-26e7-4463-abcc-1a6cc6a18cee/credit_card_image_1789592008803.jpg" class="vocab-img"> a c___','redit card|credit card|a credit card'],
 ['<img src="file:///C:/Users/Videographer/.gemini/antigravity/brain/102364aa-26e7-4463-abcc-1a6cc6a18cee/bag_image_1789592055604.jpg" class="vocab-img"> a b___','ag|bag|a bag']].forEach(x=>fill(s.vocabulary,...x));
endEx(s.vocabulary, 5);

title(s.vocabulary,'4. Look at the family tree and complete the description of Tom\'s family with the words in the box.');
example(s.vocabulary,'Frank is Tom\'s <u>father</u>.');
s.vocabulary.insertAdjacentHTML('beforeend',`<div class="box-card"><strong>Words:</strong> father &bull; mother &bull; son &bull; daughter &bull; brother &bull; husband &bull; wife &bull; children &bull; sister<br><br><strong>Family tree:</strong><br>
<svg width="100%" height="180" viewBox="0 0 460 180" xmlns="http://www.w3.org/2000/svg" style="max-width: 460px; background:#fff; border:1px solid #d1d5db; border-radius:8px; display:block; margin: 15px auto;">
  <style>
    .ft-box { fill: #eef4f8; stroke: #0d568c; stroke-width: 2; rx: 6; }
    .ft-text { font-family: Arial, sans-serif; font-size: 16px; font-weight: bold; fill: #1f2937; text-anchor: middle; dominant-baseline: middle; }
    .ft-line { stroke: #0d568c; stroke-width: 2; fill: none; }
  </style>
  <path d="M 200 40 L 260 40" class="ft-line"/>
  <path d="M 230 40 L 230 90" class="ft-line"/>
  <path d="M 90 90 L 370 90" class="ft-line"/>
  <path d="M 90 90 L 90 120" class="ft-line"/>
  <path d="M 230 90 L 230 120" class="ft-line"/>
  <path d="M 370 90 L 370 120" class="ft-line"/>
  <rect x="100" y="20" width="100" height="40" class="ft-box"/>
  <text x="150" y="42" class="ft-text">Frank</text>
  <rect x="260" y="20" width="100" height="40" class="ft-box"/>
  <text x="310" y="42" class="ft-text">Mary</text>
  <rect x="40" y="120" width="100" height="40" class="ft-box"/>
  <text x="90" y="142" class="ft-text">Simon</text>
  <rect x="180" y="120" width="100" height="40" class="ft-box"/>
  <text x="230" y="142" class="ft-text">Anna</text>
  <rect x="320" y="120" width="100" height="40" class="ft-box"/>
  <text x="370" y="142" class="ft-text">Tom</text>
</svg>
</div>`);
[['Tom is Mary\'s ___.','son'],
 ['Frank is Mary\'s ___.','husband'],
 ['Mary is Simon\'s ___.','mother'],
 ['Anna is Frank\'s ___.','daughter'],
 ['Mary is Frank\'s ___.','wife'],
 ['Simon, Anna, and Tom are Mary\'s ___.','children'],
 ['Anna is Simon\'s ___.','sister'],
 ['Tom is Anna\'s ___.','brother']].forEach(x=>fill(s.vocabulary,...x));
endEx(s.vocabulary, 8);

title(s.vocabulary,'5. Complete the sentences with opposite adjectives.');
example(s.vocabulary,'It isn\'t big. It\'s <u>small</u>.');
[['It isn\'t old. It\'s ___.','new'],
 ['She isn\'t tall. She\'s ___.','short|small'],
 ['It isn\'t expensive. It\'s ___.','cheap'],
 ['They aren\'t black. They\'re ___.','white'],
 ['It isn\'t fast. It\'s ___.','slow'],
 ['It isn\'t short. It\'s ___.','long|tall'],
 ['They aren\'t good. They\'re ___.','bad']].forEach(x=>fill(s.vocabulary,...x));
endEx(s.vocabulary, 7);

/* --- PRONUNCIATION (10 marks) --- */
title(s.pronunciation,'6. Underline the stressed syllable.');
example(s.pronunciation,'<u><strong>mo</strong></u>ther');
[['daugh','ter'],
 ['hus','band'],
 ['ex','pen','sive'],
 ['or','ange'],
 ['chil','dren']].forEach((x,i)=>{ const correctIdx = [0,0,1,0,0][i]; syllable(s.pronunciation,x,correctIdx); });
endEx(s.pronunciation, 5);

title(s.pronunciation,'7. Match the words with the same sound.');
example(s.pronunciation,'bags &mdash; <u>keys</u>');
s.pronunciation.insertAdjacentHTML('beforeend',`<div class="box-card"><strong>Sounds:</strong> children &bull; keys &bull; father &bull; door &bull; laptops &bull; day</div>`);
[['books: ___','laptops'],
 ['person: ___','children'],
 ['same: ___','day'],
 ['card: ___','father'],
 ['tall: ___','door']].forEach(x=>fill(s.pronunciation,...x));
endEx(s.pronunciation, 5);

/* --- PRACTICAL ENGLISH (5 marks) --- */
title(s.practical,'8. Complete the dialogues with the phrases from the box.');
example(s.practical,'A How are you?<br>B <u>I\'m fine, thanks.</u>');
s.practical.insertAdjacentHTML('beforeend',`<div class="box-card"><strong>Phrases:</strong> I'm fine, thanks &bull; I'm thirty-two &bull; It's 795867 &bull; See you soon &bull; And you &bull; Sorry</div>`);
[['A: Goodbye, Sue. B: Bye. ___.','see you soon'],
 ['A: How old are you, Mark? B: ___.','i\'m thirty-two|im thirty-two|i\'m thirty two|im thirty two|thirty-two|thirty two'],
 ['A: What\'s your phone number? B: ___.','it\'s 795867|its 795867|795867'],
 ['A: How are you? B: OK, thanks. ___? A: Oh, I\'m fine.','and you'],
 ['A: My home number is 0207 98742. B: ___? A: It\'s 0207 98742.','sorry']].forEach(x=>fill(s.practical,...x));
endEx(s.practical, 5);

/* --- READING (15 marks) --- */
title(s.reading,'1. Read the text and match the names to the descriptions.');
example(s.reading,'He\'s short, twenty-one and Scottish. &nbsp; <u>Ian</u>');
const names=['Ian','Anna','Lucy','Tom','Valeria','Jenny','Gordon','Rosie'];
[['She\'s tall, beautiful, and English.',names,2],
 ['She\'s short and Scottish, but her mother\'s Italian.',names,1],
 ['She\'s tall, twenty-six, and married.',names,7],
 ['He\'s short, Scottish, and fifty.',names,6],
 ['She isn\'t tall and she isn\'t married.',names,4],
 ['He\'s tall and he\'s married.',names,3],
 ['She\'s twenty-four and tall.',names,5]].forEach(x=>choice(s.reading,...x));
endEx(s.reading, 7);

title(s.reading,'2. Read the text again and complete the answers to the questions.');
example(s.reading,'A What is Ian\'s surname?<br>B It\'s <u>Haig</u>.');
[['Where is Ian from? &nbsp; He\'s from ___.','glasgow|glasgow in scotland|scotland'],
 ['What is Ian\'s father\'s name? &nbsp; It\'s ___.','gordon'],
 ['How old is Ian\'s mother? &nbsp; She\'s ___.','45|forty-five|forty five'],
 ['Where is Anna\'s mother from? &nbsp; She\'s from ___.','milan|milan in italy|italy'],
 ['What are Jenny\'s sisters\' names? &nbsp; Their names are ___.','rosie and valeria|valeria and rosie'],
 ['What is Rosie\'s husband\'s name? &nbsp; His name is ___.','tom'],
 ['Is their car fast and expensive? &nbsp; No, it\'s ___.','slow and cheap|cheap and slow'],
 ['Where is Ian\'s girlfriend from? &nbsp; She\'s from ___.','england']].forEach(x=>fill(s.reading,...x));
endEx(s.reading, 8);

/* --- LISTENING (10 marks) --- */
title(s.listening,'1. Listen to Lisa Smith talking to hotel reception about a bag. Tick (&check;) the 5 objects that are in her bag.');
example(s.listening,'A mobile phone &nbsp; <u>&#10003;</u>');
const bagItems=[
  {t:'keys',ok:false},
  {t:'a mobile phone',ok:true},
  {t:'an ID card',ok:true},
  {t:'glasses',ok:true},
  {t:'a big dictionary',ok:false},
  {t:'a small dictionary',ok:true},
  {t:'Lisa Smith\'s credit card',ok:false},
  {t:'Peter Morgan\'s credit card',ok:true}
];
s.listening.insertAdjacentHTML('beforeend',`<div class="chk-group" id="list_chk_group">${bagItems.map((item,i)=>`<label class="chk-label" id="lbl_chk_${i}"><input type="checkbox" id="chk_${i}" data-ex="${exId}" ${item.ok?'data-bag-correct="true"':''}> <span>${item.t}</span></label>`).join('')}</div>`);
document.querySelectorAll('#list_chk_group input[type="checkbox"]').forEach(c => {
  c.addEventListener('change', function() {
    if (document.querySelectorAll('#list_chk_group input[type="checkbox"]:checked').length > 5) {
      this.checked = false;
    }
  });
});
endEx(s.listening, 5);

title(s.listening,'2. Listen to five conversations and answer the questions. Choose A, B, or C.');
example(s.listening,'1. Who is Adam?<br>A Anna\'s boyfriend &nbsp; B <u>Anna\'s brother</u> &nbsp; C Anna\'s friend');
[['1. Who is Adam?',['Anna\'s boyfriend','Anna\'s brother','Anna\'s friend'],1],
 ['2. Who are in Andy\'s photo?',['His wife, son and daughter','His son and two daughters','His wife and two sons'],0],
 ['3. What\'s true about Felicity\'s mobile phone?',['It\'s small and cheap','It\'s new and expensive','It\'s very good but old'],0],
 ['4. Who is Emma?',['Graeme\'s friend','Sally\'s sister','Sally\'s boyfriend'],1],
 ['5. How old is Mark?',['Twenty-six','Twenty-seven','Twenty-eight'],1]].forEach(x=>choice(s.listening,...x));
endEx(s.listening, 5);

/* --- CHECK ANSWERS SCRIPT --- */
document.querySelector('#check').onclick=()=>{
  const password=window.prompt('Enter the teacher password to check answers:');
  if(password!=='123'){
    if(password!==null)window.alert('Incorrect password.');
    return;
  }
  let score=0,total=0;
  let exScores = {};
  
  // Text inputs
  document.querySelectorAll('input[type=text][data-answer]').forEach(f=>{
    total++;
    const ex = f.dataset.ex;
    if(!exScores[ex]) exScores[ex] = 0;
    const ok=f.dataset.answer.split('|').map(norm).includes(norm(f.value));
    f.classList.toggle('ok',ok);
    f.classList.toggle('bad',!ok);
    if(ok) { score++; exScores[ex]++; }
  });
  
  // Radio choices
  document.querySelectorAll('input[type=radio][data-correct]').forEach(r=>{
    total++;
    const ex = r.dataset.ex;
    if(!exScores[ex]) exScores[ex] = 0;
    const chosen=document.querySelector(`input[name="${r.name}"]:checked`);
    const ok=chosen===r;
    document.querySelectorAll(`input[name="${r.name}"]`).forEach(x=>x.parentElement.classList.remove('ok','bad'));
    if(chosen)chosen.parentElement.classList.add(ok?'ok':'bad');
    if(ok) { score++; exScores[ex]++; }
  });
  
  // Checkbox items (Listening 1: 5 correct items to find)
  bagItems.forEach((item,i)=>{
    const chk=document.querySelector(`#chk_${i}`);
    const ex = chk.dataset.ex;
    if(!exScores[ex]) exScores[ex] = 0;
    const lbl=document.querySelector(`#lbl_chk_${i}`);
    lbl.classList.remove('ok','bad');
    if(item.ok){
      total++;
      if(chk.checked){
        lbl.classList.add('ok');
        score++; exScores[ex]++;
      } else {
        lbl.classList.add('bad');
      }
    } else {
      if(chk.checked){
        lbl.classList.add('bad');
      }
    }
  });

  // Syllables
  document.querySelectorAll('.syl-q').forEach(q => {
    total++;
    const ex = q.querySelector('.syl').dataset.ex;
    if(!exScores[ex]) exScores[ex] = 0;
    const correctIdx = q.dataset.correct;
    const selected = q.querySelector('.syl.selected');
    const ok = selected && selected.dataset.idx === correctIdx;
    q.classList.remove('ok', 'bad');
    if(selected) {
      if(ok) {
        selected.style.color = '#29974e'; q.classList.add('ok');
        score++; exScores[ex]++;
      } else {
        selected.style.color = '#ce3c3c'; q.classList.add('bad');
      }
    } else {
      q.classList.add('bad');
    }
  });

  // Populate the score boxes
  for (const ex in exScores) {
    const box = document.querySelector(`#score-box-${ex}`);
    if (box) {
        box.textContent = exScores[ex];
    }
  }

  document.querySelector('#result').innerHTML=`<div style="background:#eef4f8; border:2px solid #0d568c; color:#1f2937; padding:20px; border-radius:10px; font-size:18px; margin-top:20px; box-shadow: 0 4px 15px rgba(0,0,0,0.1);"><strong>Total Score: ${score} / ${total}</strong><br><span style="font-size:14px; font-weight:normal; color:#526273;">Add the teacher scores for Writing (10) and Speaking (15) for a final mark out of 100.</span></div>`;
  setTimeout(() => window.print(), 500);
};
