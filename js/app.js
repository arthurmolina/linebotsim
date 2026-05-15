// ══════════════════════════════════════
// I18N
// ══════════════════════════════════════
const I18N={
  pt:{
    subtitle:'Simulador Seguidor de Linha',time:'TEMPO',
    secRobot:'⚙ Configuração do Robô',axleDist:'Dist. entre eixos',numSensors:'Nº de sensores',
    arrayWidth:'Largura do array',sensorDist:'Dist. dos sensores',sensorSize:'Tamanho sensor',baseSpeed:'Velocidade base',
    secDraw:'🖌 Desenho',thickness:'Espessura',
    kbHint:'<span style="color:var(--grn)">Shift</span> = círculo / quadrado<br>'
          +'<span style="color:var(--grn)">D</span> Livre &nbsp;<span style="color:var(--grn)">L</span> Linha &nbsp;<span style="color:var(--grn)">E</span> Elipse<br>'
          +'<span style="color:var(--grn)">R</span> Ret. &nbsp;<span style="color:var(--grn)">X</span> Apagar &nbsp;<span style="color:var(--grn)">P</span> Pos.<br>'
          +'<span style="color:var(--grn)">Espaço</span> Iniciar / Parar',
    secStatus:'◉ Estado',angle:'Ângulo',speeds:'Velocidades',
    tbDraw:'Traçar',btnFree:'✏ Livre',btnLine:'─ Linha',btnEllp:'◯ Elipse',btnRect:'▭ Ret.',
    btnErase:'⌫ Apagar',btnContour:'□ Contorno',btnSolid:'⬛ Sólido',
    tbAction:'Ação',btnPlace:'⊕ Posicionar',btnOval:'◎ Oval',btnEight:'∞ Fig-8',
    btnSquare:'⬜ Retangular',btnImage:'📁 Imagem',btnStart:'▶ Iniciar',btnStop:'⏹ Parar',btnClear:'✕ Limpar',
    secSensors:'◈ Sensores',lateralErr:'Erro Lateral',leftLbl:'◄ ESQ',rightLbl:'DIR ►',active:'Ativos',spacing:'Espaçamento',
    secPID:'⚡ Controlador PID',kpLbl:'Kp — proporcional',kiLbl:'Ki — integral',kdLbl:'Kd — derivativo',
    error:'Erro',pidOut:'Saída PID',integral:'Integral',
    secGeo:'📐 Geometria',axleDistG:'Entre eixos',arrayG:'Array sensores',sensorDistG:'Dist. sensores',numG:'Nº sensores',resolution:'Resolução',
    modePrefix:'MODO: ',modeFree:'TRAÇAR LIVRE',modeLine:'TRAÇAR LINHA',modeEllipse:'TRAÇAR ELIPSE',
    modeRect:'TRAÇAR RETÂNGULO',modeErase:'APAGAR',modePlace:'POSICIONAR ROBÔ',modeSim:'SIMULAÇÃO',
    spdLeft:'ESQ',spdRight:'DIR',
    imgTitle:'Configurar Imagem',imgScale:'Escala',
    imgFit:'Ajustar',imgFill:'Preencher',imgStretch:'Esticar',
    imgThresh:'Limiar',imgInvert:'Inverter cores',
    imgHint:'Use imagens com linha escura sobre fundo claro, ou ative "Inverter".',
    imgApply:'Aplicar',imgCancel:'Cancelar',
    spSub:'Simulador Seguidor de Linha',spF1:'Controle PID',
    spF2:'Sensores Configuráveis',spF3:'Trilha Personalizada',
    spStatus:'Inicializando simulador...',spHint:'Clique para iniciar',
    spCredits:'Feito por <b>Arthur Molina</b> com ajuda do <span class="claude">Claude Code</span>',
    btnAbout:'ⓘ Sobre',
  },
  en:{
    subtitle:'Line Following Robot Simulator',time:'TIME',
    secRobot:'⚙ Robot Config',axleDist:'Axle distance',numSensors:'Num. sensors',
    arrayWidth:'Array width',sensorDist:'Sensor distance',sensorSize:'Sensor size',baseSpeed:'Base speed',
    secDraw:'🖌 Drawing',thickness:'Thickness',
    kbHint:'<span style="color:var(--grn)">Shift</span> = circle / square<br>'
          +'<span style="color:var(--grn)">D</span> Free &nbsp;<span style="color:var(--grn)">L</span> Line &nbsp;<span style="color:var(--grn)">E</span> Ellipse<br>'
          +'<span style="color:var(--grn)">R</span> Rect &nbsp;<span style="color:var(--grn)">X</span> Erase &nbsp;<span style="color:var(--grn)">P</span> Place<br>'
          +'<span style="color:var(--grn)">Space</span> Start / Stop',
    secStatus:'◉ Status',angle:'Angle',speeds:'Speeds',
    tbDraw:'Draw',btnFree:'✏ Free',btnLine:'─ Line',btnEllp:'◯ Ellipse',btnRect:'▭ Rect.',
    btnErase:'⌫ Erase',btnContour:'□ Outline',btnSolid:'⬛ Solid',
    tbAction:'Action',btnPlace:'⊕ Position',btnOval:'◎ Oval',btnEight:'∞ Fig-8',
    btnSquare:'⬜ Rect. Track',btnImage:'📁 Image',btnStart:'▶ Start',btnStop:'⏹ Stop',btnClear:'✕ Clear',
    secSensors:'◈ Sensors',lateralErr:'Lateral Error',leftLbl:'◄ LEFT',rightLbl:'RIGHT ►',active:'Active',spacing:'Spacing',
    secPID:'⚡ PID Controller',kpLbl:'Kp — proportional',kiLbl:'Ki — integral',kdLbl:'Kd — derivative',
    error:'Error',pidOut:'PID Output',integral:'Integral',
    secGeo:'📐 Geometry',axleDistG:'Axle dist.',arrayG:'Sensor array',sensorDistG:'Sensor dist.',numG:'Num. sensors',resolution:'Resolution',
    modePrefix:'MODE: ',modeFree:'FREE DRAW',modeLine:'LINE',modeEllipse:'ELLIPSE',
    modeRect:'RECTANGLE',modeErase:'ERASE',modePlace:'POSITION ROBOT',modeSim:'SIMULATION',
    spdLeft:'LEFT',spdRight:'RIGHT',
    imgTitle:'Configure Image',imgScale:'Scale',
    imgFit:'Fit',imgFill:'Fill',imgStretch:'Stretch',
    imgThresh:'Threshold',imgInvert:'Invert colors',
    imgHint:'Use images with dark line on light background, or enable "Invert".',
    imgApply:'Apply',imgCancel:'Cancel',
    spSub:'Line Following Robot Simulator',spF1:'PID Control',
    spF2:'Configurable Sensors',spF3:'Custom Track Image',
    spStatus:'Initializing simulator...',spHint:'Click to start',
    spCredits:'Made by <b>Arthur Molina</b> with help from <span class="claude">Claude Code</span>',
    btnAbout:'ⓘ About',
  }
};

let lang='pt';
function t(k){return I18N[lang][k]||k;}

function applyLang(){
  const T=I18N[lang];
  document.querySelectorAll('[data-i18n]').forEach(el=>{const v=T[el.dataset.i18n];if(v!=null)el.textContent=v;});
  document.getElementById('kbHint').innerHTML=T.kbHint;
  const cr=document.getElementById('spCredits');
  if(cr) cr.innerHTML=T.spCredits;
  document.getElementById('btnFill').textContent=shapeFilled?T.btnSolid:T.btnContour;
  document.getElementById('btnRun').textContent=running?T.btnStop:T.btnStart;
  document.getElementById('modeLabel').textContent=T.modePrefix+getModeStr();
  document.getElementById('btnLang').textContent=lang==='pt'?'EN':'PT';
  document.documentElement.lang=lang==='pt'?'pt-BR':'en';
  document.title='LineBot Sim';
  document.getElementById('iVL').textContent=running?t('spdLeft')+' '+lLeft.toFixed(2):'—';
  document.getElementById('iVR').textContent=running?t('spdRight')+' '+lRight.toFixed(2):'—';
}
function getModeStr(){
  const m={free:'modeFree',line:'modeLine',ellipse:'modeEllipse',rect:'modeRect',erase:'modeErase',place:'modePlace',simulate:'modeSim'};
  return t(m[mode]||'modeFree');
}
function toggleLang(){lang=lang==='pt'?'en':'pt';applyLang();}

// ══════════════════════════════════════
// SPLASH
// ══════════════════════════════════════
(function initSplash(){
  const statusSeq = {
    pt:['Inicializando simulador...','Carregando física...','Calibrando sensores...','Pronto.'],
    en:['Initializing simulator...','Loading physics...','Calibrating sensors...','Ready.'],
  };
  let si=0;
  const seq=statusSeq[lang];
  const tick=()=>{
    const el=document.getElementById('spStatus');
    if(el) el.textContent=seq[si];
    si++;
    if(si>=seq.length){ clearInterval(window._splashInterval); }
  };
  tick();
  window._splashInterval=setInterval(tick,700);
})();

function dismissSplash(iv){
  clearInterval(iv||window._splashInterval);
  clearTimeout(window._splashTimeout);
  const sp=document.getElementById('splash');
  if(!sp||sp.style.display==='none') return;
  sp.classList.add('hide');
  sp.addEventListener('transitionend',()=>{ sp.style.display='none'; },{once:true});
}

function showSplash(){
  const sp=document.getElementById('splash');
  if(!sp) return;
  const anims=sp.querySelectorAll(
    '.sp-grid,.sp-robot,.sp-title,.sp-sub,.sp-feats,.sp-bar-wrap,.sp-bar-fill,.sp-status,.sp-hint,.sp-version,.sp-credits'
  );
  anims.forEach(el=>{ el.style.animation='none'; });
  void sp.offsetHeight;
  anims.forEach(el=>{ el.style.animation=''; });
  sp.style.display='flex';
  void sp.offsetHeight;
  sp.classList.remove('hide');
  clearInterval(window._splashInterval);
  const cr=document.getElementById('spCredits');
  if(cr) cr.innerHTML=I18N[lang].spCredits;
  const seq={
    pt:['Inicializando simulador...','Carregando física...','Calibrando sensores...','Pronto.'],
    en:['Initializing simulator...','Loading physics...','Calibrating sensors...','Ready.'],
  }[lang];
  let si2=0;
  const tick2=()=>{
    const el=document.getElementById('spStatus');
    if(el) el.textContent=seq[si2];
    si2++;
    if(si2>=seq.length){ clearInterval(window._splashInterval); }
  };
  tick2();
  window._splashInterval=setInterval(tick2,700);
}

// ══════════════════════════════════════
// SETUP
// ══════════════════════════════════════
const cv   = document.getElementById('cv');
const ctx  = cv.getContext('2d');
const wrap = document.getElementById('cvwrap');
const hint = document.getElementById('dimHint');
const tc   = document.createElement('canvas');
const tctx = tc.getContext('2d',{willReadFrequently:true});

new ResizeObserver(resize).observe(wrap);
function resize(){
  const W=wrap.clientWidth,H=wrap.clientHeight;
  if(!W||!H) return;
  const tmp=document.createElement('canvas');
  tmp.width=tc.width||W;tmp.height=tc.height||H;
  tmp.getContext('2d').drawImage(tc,0,0);
  cv.width=W;cv.height=H;tc.width=W;tc.height=H;
  tctx.fillStyle='#000';tctx.fillRect(0,0,W,H);tctx.drawImage(tmp,0,0);
  render();
}

// ══════════════════════════════════════
// STATE
// ══════════════════════════════════════
let mode='free',painting=false;
let lx=0,ly=0,sx=0,sy=0,mx=-999,my=-999;
let shiftHeld=false,shapeFilled=false;
let running=false,animId=null,t0=0,tAcc=0;
let sVals=[],trail=[];
let lLeft=0,lRight=0,lErr=0,lOut=0;
const R={x:300,y:200,angle:0,wb:50,nc:8,ss:80,so:40,sr:1,spd:2.5};
const PID={kp:1.2,ki:0,kd:0.5,pe:0,intg:0};
const SHAPES=['line','ellipse','rect'];

// ══════════════════════════════════════
// IMAGE IMPORT
// ══════════════════════════════════════
let loadedImg      = null;
let imgPreSnap     = null;
let imgScaleMode   = 'fit';
let imgThreshold   = 128;
let imgInvertColors= false;

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('imgFileInput').addEventListener('change', function() {
    if(this.files && this.files[0]) {
      loadImageFile(this.files[0]);
      this.value = '';
    }
  });
});

function openImageFile(){
  if(running) return;
  document.getElementById('imgFileInput').click();
}

function loadImageFile(file){
  if(!file || !file.type.startsWith('image/')) return;
  const reader = new FileReader();
  reader.onload = function(ev){
    const img = new Image();
    img.onload = function(){
      loadedImg = img;
      if(tc.width>0 && tc.height>0)
        imgPreSnap = tctx.getImageData(0,0,tc.width,tc.height);
      const samp = document.createElement('canvas');
      samp.width  = Math.min(img.naturalWidth, 120);
      samp.height = Math.min(img.naturalHeight,120);
      const sc = samp.getContext('2d');
      sc.drawImage(img, 0, 0, samp.width, samp.height);
      const id = sc.getImageData(0,0,samp.width,samp.height).data;
      let sum=0;
      for(let i=0;i<id.length;i+=4) sum+=(id[i]+id[i+1]+id[i+2])/3;
      const mean = sum/(id.length/4);
      imgThreshold     = Math.max(20,Math.min(230, Math.round(mean*0.55+40)));
      imgInvertColors  = mean < 120;
      document.getElementById('imgThreshSlider').value    = imgThreshold;
      document.getElementById('imgThreshVal').textContent = imgThreshold;
      document.getElementById('imgInvertChk').checked     = imgInvertColors;
      document.getElementById('imgFileName').textContent  = file.name;
      document.getElementById('imgBackdrop').style.display = 'block';
      document.getElementById('imgPanel').style.display    = 'block';
      setTimeout(()=>{ updateThumb(); processImage(); }, 30);
    };
    img.onerror = ()=>{ alert(lang==='pt'?'Erro ao carregar imagem':'Error loading image'); };
    img.src = ev.target.result;
  };
  reader.onerror = ()=>{ alert(lang==='pt'?'Erro ao ler arquivo':'Error reading file'); };
  reader.readAsDataURL(file);
}

function updateThumb(){
  if(!loadedImg) return;
  const el = document.getElementById('imgThumbCanvas');
  const W  = el.offsetWidth  || 312;
  const H  = el.offsetHeight ||  90;
  el.width=W; el.height=H;
  const c2=el.getContext('2d');
  c2.fillStyle='#000'; c2.fillRect(0,0,W,H);
  const iw=loadedImg.naturalWidth, ih=loadedImg.naturalHeight;
  const s=Math.min(W/iw, H/ih);
  c2.drawImage(loadedImg,(W-iw*s)/2,(H-ih*s)/2,iw*s,ih*s);
}

function processImage(){
  if(!loadedImg) return;
  const W=tc.width,H=tc.height;
  const iw=loadedImg.naturalWidth,ih=loadedImg.naturalHeight;
  const tmp=document.createElement('canvas');
  tmp.width=W;tmp.height=H;
  const tc2=tmp.getContext('2d');
  tc2.fillStyle='#000';tc2.fillRect(0,0,W,H);
  let dx=0,dy=0,dw=W,dh=H;
  if(imgScaleMode==='fit'){
    const s=Math.min(W/iw,H/ih);dw=iw*s;dh=ih*s;dx=(W-dw)/2;dy=(H-dh)/2;
  } else if(imgScaleMode==='fill'){
    const s=Math.max(W/iw,H/ih);dw=iw*s;dh=ih*s;dx=(W-dw)/2;dy=(H-dh)/2;
  }
  tc2.drawImage(loadedImg,dx,dy,dw,dh);
  const id=tc2.getImageData(0,0,W,H);
  const d=id.data,thr=imgThreshold;
  for(let i=0;i<d.length;i+=4){
    const g=Math.round(0.299*d[i]+0.587*d[i+1]+0.114*d[i+2]);
    let v=g>=thr?255:0;
    if(imgInvertColors) v=255-v;
    d[i]=d[i+1]=d[i+2]=v;d[i+3]=255;
  }
  tctx.putImageData(id,0,0);
  trail=[];render();
}

function setImgScale(m){
  imgScaleMode=m;
  ['imgBtnFit','imgBtnFill','imgBtnStretch'].forEach(id=>document.getElementById(id).classList.remove('on'));
  const map={fit:'imgBtnFit',fill:'imgBtnFill',stretch:'imgBtnStretch'};
  document.getElementById(map[m])?.classList.add('on');
  processImage();
}

function applyImage(){
  document.getElementById('imgBackdrop').style.display='none';
  document.getElementById('imgPanel').style.display='none';
  imgPreSnap=null; loadedImg=null;
  trail=[];render();
}

function cancelImage(){
  if(imgPreSnap){tctx.putImageData(imgPreSnap,0,0);imgPreSnap=null;}
  document.getElementById('imgBackdrop').style.display='none';
  document.getElementById('imgPanel').style.display='none';
  loadedImg=null;trail=[];render();
}

wrap.addEventListener('dragover',e=>{e.preventDefault();wrap.classList.add('dragover');});
wrap.addEventListener('dragleave',()=>wrap.classList.remove('dragover'));
wrap.addEventListener('drop',e=>{
  e.preventDefault();wrap.classList.remove('dragover');
  if(running) return;
  const file=[...e.dataTransfer.files].find(f=>f.type.startsWith('image/'));
  if(file) loadImageFile(file);
});

// ══════════════════════════════════════
// SLIDERS
// ══════════════════════════════════════
function bindR(id,vid,key,unit,dec,cb){
  const el=document.getElementById(id),vl=document.getElementById(vid);
  el.addEventListener('input',()=>{
    R[key]=parseFloat(el.value);vl.textContent=R[key].toFixed(dec||0)+(unit||'');
    if(cb) cb();if(!running) render();updateGeo();
  });
}
function bindP(id,vid,key){
  const el=document.getElementById(id),vl=document.getElementById(vid);
  el.addEventListener('input',()=>{PID[key]=parseFloat(el.value);vl.textContent=PID[key].toFixed(2);});
}
bindR('slWB','vWB','wb','px');bindR('slNC','vNC','nc','',0,buildSbars);
bindR('slSS','vSS','ss','px');bindR('slSO','vSO','so','px');
bindR('slSR','vSR','sr','px');bindR('slSP','vSP','spd','',1);
document.getElementById('slBR').addEventListener('input',function(){document.getElementById('vBR').textContent=this.value+'px';});
bindP('slKP','vKP','kp');bindP('slKI','vKI','ki');bindP('slKD','vKD','kd');

function updateGeo(){
  document.getElementById('gWB').textContent=R.wb+'px';
  document.getElementById('gSS').textContent=R.ss+'px';
  document.getElementById('gSO').textContent=R.so+'px';
  document.getElementById('gNC').textContent=R.nc;
  document.getElementById('gSR').textContent=R.sr+'×'+R.sr+'px';
  document.getElementById('iSpac').textContent=R.nc>1?(R.ss/(R.nc-1)).toFixed(1)+'px':'—';
}

// ══════════════════════════════════════
// SENSOR BARS
// ══════════════════════════════════════
function buildSbars(){
  const c=document.getElementById('sbars');c.innerHTML='';
  for(let i=0;i<R.nc;i++){const d=document.createElement('div');d.className='sbar';d.id='sb'+i;c.appendChild(d);}
  document.getElementById('iAct').textContent='0 / '+R.nc;
}
function refreshSbars(vals){
  vals.forEach((v,i)=>{
    const el=document.getElementById('sb'+i);if(!el) return;
    el.style.height=(v>.05?Math.max(30,v*100):8)+'%';el.className='sbar'+(v>.05?' on':'');
  });
}

// ══════════════════════════════════════
// MODE
// ══════════════════════════════════════
const MB={free:'btnFree',line:'btnLine',ellipse:'btnEllp',rect:'btnRect',erase:'btnErase',place:'btnPlace'};

function setMode(m){
  if(running) return;
  mode=m;painting=false;hint.style.display='none';
  Object.values(MB).forEach(id=>document.getElementById(id)?.classList.remove('on'));
  document.getElementById(MB[m])?.classList.add('on');
  document.getElementById('modeLabel').textContent=t('modePrefix')+getModeStr();
  if(!running) render();
}

function toggleFill(){
  shapeFilled=!shapeFilled;
  const b=document.getElementById('btnFill');
  b.textContent=shapeFilled?t('btnSolid'):t('btnContour');
  b.className=shapeFilled?'tb on-pur':'tb';
}

// ══════════════════════════════════════
// KEYBOARD
// ══════════════════════════════════════
document.addEventListener('keydown',e=>{
  if(e.key==='Shift'){shiftHeld=true;if(!running)render();return;}
  if(e.key===' '){e.preventDefault();toggleSim();return;}
  if(running) return;
  const m={d:'free',l:'line',e:'ellipse',r:'rect',x:'erase',p:'place'}[e.key.toLowerCase()];
  if(m) setMode(m);
});
document.addEventListener('keyup',e=>{if(e.key==='Shift'){shiftHeld=false;if(!running)render();}});

// ══════════════════════════════════════
// MOUSE / TOUCH
// ══════════════════════════════════════
function gp(e){const r=cv.getBoundingClientRect(),p=e.touches?.[0]||e;return{x:p.clientX-r.left,y:p.clientY-r.top};}
cv.addEventListener('mousedown',onDown);
cv.addEventListener('mousemove',onMove);
cv.addEventListener('mouseup',  onUp);
cv.addEventListener('mouseleave',()=>{onUp();mx=-999;my=-999;hint.style.display='none';if(!running)render();});
cv.addEventListener('touchstart',e=>{e.preventDefault();onDown(e);},{passive:false});
cv.addEventListener('touchmove', e=>{e.preventDefault();onMove(e);},{passive:false});
cv.addEventListener('touchend',  onUp);

function onDown(e){
  const p=gp(e);
  if(mode==='place'){R.x=p.x;R.y=p.y;R.angle=0;PID.pe=0;PID.intg=0;trail=[];render();return;}
  painting=true;
  if(SHAPES.includes(mode)){sx=p.x;sy=p.y;mx=p.x;my=p.y;render();return;}
  lx=p.x;ly=p.y;paintDot(p.x,p.y);render();
}
function onMove(e){
  const p=gp(e);mx=p.x;my=p.y;
  if(mode==='place'&&e.buttons>0){const dx=p.x-R.x,dy=p.y-R.y;if(Math.hypot(dx,dy)>8)R.angle=Math.atan2(dy,dx);render();return;}
  if(!painting){if(!running)render();return;}
  if(SHAPES.includes(mode)){updateDimHint(p.x,p.y);if(!running)render();return;}
  paintLine(lx,ly,p.x,p.y);lx=p.x;ly=p.y;render();
}
function onUp(e){
  if(!painting){painting=false;return;}
  if(SHAPES.includes(mode)){const p=e?gp(e):{x:mx,y:my};mx=p.x;my=p.y;applyShape(tctx,sx,sy,mx,my);hint.style.display='none';}
  painting=false;if(!running)render();
}

// ══════════════════════════════════════
// PAINT (freehand)
// ══════════════════════════════════════
function br(){return parseInt(document.getElementById('slBR').value);}
function paintDot(x,y){tctx.beginPath();tctx.arc(x,y,br()/2,0,Math.PI*2);tctx.fillStyle=mode==='erase'?'#000':'#fff';tctx.fill();}
function paintLine(x1,y1,x2,y2){
  tctx.beginPath();tctx.moveTo(x1,y1);tctx.lineTo(x2,y2);
  tctx.strokeStyle=mode==='erase'?'#000':'#fff';
  tctx.lineWidth=br();tctx.lineCap='round';tctx.lineJoin='round';tctx.stroke();
}

// ══════════════════════════════════════
// SHAPES
// ══════════════════════════════════════
function resolveShape(x1,y1,x2,y2){
  if(mode==='line'){let ex=x2,ey=y2;if(shiftHeld){const dx=x2-x1,dy=y2-y1,a=Math.round(Math.atan2(dy,dx)/(Math.PI/4))*Math.PI/4,d=Math.hypot(dx,dy);ex=x1+Math.cos(a)*d;ey=y1+Math.sin(a)*d;}return{type:'line',x1,y1,x2:ex,y2:ey};}
  if(mode==='ellipse'){let rx=Math.abs(x2-x1)/2,ry=Math.abs(y2-y1)/2;if(shiftHeld){const s=Math.max(rx,ry);rx=s;ry=s;}return{type:'ellipse',cx:(x1+x2)/2,cy:(y1+y2)/2,rx:Math.max(1,rx),ry:Math.max(1,ry)};}
  if(mode==='rect'){let w=x2-x1,h=y2-y1;if(shiftHeld){const s=Math.min(Math.abs(w),Math.abs(h));w=Math.sign(w||1)*s;h=Math.sign(h||1)*s;}return{type:'rect',x:x1,y:y1,w,h};}
}
function applyShape(c,x1,y1,x2,y2){const s=resolveShape(x1,y1,x2,y2);if(!s) return;c.save();c.strokeStyle='#fff';c.fillStyle='#fff';c.lineWidth=br();c.lineCap='round';c.lineJoin='round';c.setLineDash([]);drawShapeData(c,s,shapeFilled);c.restore();}
function drawPreview(c,x1,y1,x2,y2){const s=resolveShape(x1,y1,x2,y2);if(!s) return;c.save();c.strokeStyle='rgba(0,232,122,.75)';c.fillStyle='rgba(0,232,122,.09)';c.lineWidth=br();c.lineCap='round';c.lineJoin='round';c.setLineDash([7,5]);drawShapeData(c,s,shapeFilled);c.setLineDash([]);c.beginPath();c.arc(x1,y1,5,0,Math.PI*2);c.strokeStyle='rgba(0,232,122,.55)';c.lineWidth=1;c.stroke();c.restore();}
function drawShapeData(c,s,fill){
  if(s.type==='line'){c.beginPath();c.moveTo(s.x1,s.y1);c.lineTo(s.x2,s.y2);c.stroke();}
  else if(s.type==='ellipse'){c.beginPath();c.ellipse(s.cx,s.cy,s.rx,s.ry,0,0,Math.PI*2);if(fill)c.fill();c.stroke();}
  else if(s.type==='rect'){c.beginPath();c.rect(s.x,s.y,s.w,s.h);if(fill)c.fill();c.stroke();}
}
function updateDimHint(px,py){
  const s=resolveShape(sx,sy,px,py);if(!s){hint.style.display='none';return;}
  let txt='';
  if(s.type==='line'){txt=Math.hypot(s.x2-s.x1,s.y2-s.y1).toFixed(0)+'px  '+((Math.atan2(s.y2-s.y1,s.x2-s.x1)*180/Math.PI+360)%360).toFixed(1)+'°';}
  else if(s.type==='ellipse'){txt=shiftHeld?'⊙ r='+s.rx.toFixed(0)+'px':(s.rx*2).toFixed(0)+'×'+(s.ry*2).toFixed(0)+'px';}
  else if(s.type==='rect'){txt=shiftHeld?'⬜ '+Math.abs(s.w).toFixed(0)+'px':Math.abs(s.w).toFixed(0)+'×'+Math.abs(s.h).toFixed(0)+'px';}
  hint.textContent=txt;hint.style.display='block';hint.style.left=(px+14)+'px';hint.style.top=(py-20)+'px';
}

// ══════════════════════════════════════
// CLEAR & DEMO
// ══════════════════════════════════════
function clearTrack(){tctx.fillStyle='#000';tctx.fillRect(0,0,tc.width,tc.height);trail=[];sVals=new Array(R.nc).fill(0);render();refreshSbars(sVals);}
function drawDemo(type){
  clearTrack();trail=[];
  const W=tc.width,H=tc.height;
  tctx.strokeStyle='#fff';tctx.lineWidth=28;tctx.lineCap='round';tctx.lineJoin='round';
  const cx=W/2,cy=H/2;
  if(type==='oval'){const rx=W*.37,ry=H*.33;tctx.beginPath();tctx.ellipse(cx,cy,rx,ry,0,0,Math.PI*2);tctx.stroke();R.x=cx+rx;R.y=cy;R.angle=-Math.PI/2;}
  else if(type==='eight'){const r=Math.min(W,H)*.21;tctx.beginPath();tctx.ellipse(cx,cy-r*.88,r,r*.72,0,0,Math.PI*2);tctx.stroke();tctx.beginPath();tctx.ellipse(cx,cy+r*.88,r,r*.72,0,0,Math.PI*2);tctx.stroke();R.x=cx+r;R.y=cy-r*.88;R.angle=-Math.PI/2;}
  else if(type==='square'){const pad=50,r=30,x0=pad,y0=pad,x1=W-pad,y1=H-pad;tctx.beginPath();tctx.moveTo(x0+r,y0);tctx.lineTo(x1-r,y0);tctx.quadraticCurveTo(x1,y0,x1,y0+r);tctx.lineTo(x1,y1-r);tctx.quadraticCurveTo(x1,y1,x1-r,y1);tctx.lineTo(x0+r,y1);tctx.quadraticCurveTo(x0,y1,x0,y1-r);tctx.lineTo(x0,y0+r);tctx.quadraticCurveTo(x0,y0,x0+r,y0);tctx.closePath();tctx.stroke();R.x=cx;R.y=y0;R.angle=0;}
  PID.pe=0;PID.intg=0;render();updateUI();
}

// ══════════════════════════════════════
// SENSORS
// ══════════════════════════════════════
function sensorPositions(){
  const out=[];
  for(let i=0;i<R.nc;i++){const t_=R.nc===1?0:(i/(R.nc-1)-.5),side=t_*R.ss;out.push({x:R.x+R.so*Math.cos(R.angle)-side*Math.sin(R.angle),y:R.y+R.so*Math.sin(R.angle)+side*Math.cos(R.angle)});}
  return out;
}
function readSensors(poses){
  if(!poses.length) return [];
  const pad=Math.ceil(R.sr/2)+1;
  const xs=poses.map(p=>p.x),ys=poses.map(p=>p.y);
  const x0=Math.max(0,Math.floor(Math.min(...xs))-pad),y0=Math.max(0,Math.floor(Math.min(...ys))-pad);
  const x1=Math.min(tc.width,Math.ceil(Math.max(...xs))+pad),y1=Math.min(tc.height,Math.ceil(Math.max(...ys))+pad);
  if(x0>=x1||y0>=y1) return new Array(poses.length).fill(0);
  const img=tctx.getImageData(x0,y0,x1-x0,y1-y0),IW=x1-x0,IH=y1-y0,half=Math.floor(R.sr/2);
  return poses.map(pos=>{
    let sum=0,cnt=0;
    for(let dy=-half;dy<=half;dy++) for(let dx=-half;dx<=half;dx++){const px=Math.round(pos.x)-x0+dx,py=Math.round(pos.y)-y0+dy;if(px<0||py<0||px>=IW||py>=IH) continue;sum+=img.data[(py*IW+px)*4]/255;cnt++;}
    return cnt>0?sum/cnt:0;
  });
}

// ══════════════════════════════════════
// PID + STEP
// ══════════════════════════════════════
function pidStep(sv){
  const n=sv.length;let ws=0,tot=0;
  for(let i=0;i<n;i++){const w=i-(n-1)/2;ws+=w*sv[i];tot+=sv[i];}
  const mw=(n-1)/2||1,rawErr=tot>0?ws/tot/mw:(PID.pe>0?1.5:-1.5);
  const e=Math.max(-1.5,Math.min(1.5,rawErr));
  PID.intg=Math.max(-2,Math.min(2,PID.intg+e));const d=e-PID.pe;PID.pe=e;
  return{e,out:PID.kp*e+PID.ki*PID.intg+PID.kd*d};
}
function step(){
  const pos=sensorPositions();sVals=readSensors(pos);
  const{e,out}=pidStep(sVals);lErr=e;lOut=out;
  const base=R.spd,cap=base*2,o=Math.max(-cap,Math.min(cap,out));
  lLeft=base+o;lRight=base-o;
  const v=(lLeft+lRight)/2,omega=(lLeft-lRight)/R.wb;
  R.x+=v*Math.cos(R.angle);R.y+=v*Math.sin(R.angle);R.angle+=omega;
  R.angle=Math.atan2(Math.sin(R.angle),Math.cos(R.angle));
  trail.push({x:R.x,y:R.y});if(trail.length>250)trail.shift();
}

// ══════════════════════════════════════
// SIM TOGGLE
// ══════════════════════════════════════
function resetTime(){
  tAcc=0;
  if(running) t0=performance.now();
  document.getElementById('simTime').textContent='0.0s';
  const btn=document.getElementById('btnResetTime');
  btn.style.color='var(--grn)';btn.style.borderColor='var(--grn)';
  setTimeout(()=>{btn.style.color='';btn.style.borderColor='';},300);
}
function toggleSim(){
  running=!running;
  const btn=document.getElementById('btnRun'),led=document.getElementById('led');
  if(running){btn.textContent=t('btnStop');btn.className='tb stop-btn';t0=performance.now();document.getElementById('modeLabel').textContent=t('modePrefix')+t('modeSim');Object.values(MB).forEach(id=>document.getElementById(id)?.classList.remove('on'));led.className='hled run';loop();}
  else{btn.textContent=t('btnStart');btn.className='tb run-btn';cancelAnimationFrame(animId);tAcc+=(performance.now()-t0)/1000;setMode('free');led.className='hled idle';}
}
function loop(){step();render();updateUI();if(running)animId=requestAnimationFrame(loop);}

// ══════════════════════════════════════
// RENDER
// ══════════════════════════════════════
function render(){
  const W=cv.width,H=cv.height;
  ctx.fillStyle='#060a06';ctx.fillRect(0,0,W,H);
  ctx.strokeStyle='rgba(23,39,23,.5)';ctx.lineWidth=.5;
  for(let x=0;x<W;x+=32){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,H);ctx.stroke();}
  for(let y=0;y<H;y+=32){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(W,y);ctx.stroke();}
  ctx.save();ctx.globalCompositeOperation='screen';ctx.filter='sepia(.35) saturate(.85)';ctx.drawImage(tc,0,0);ctx.restore();
  if(painting&&SHAPES.includes(mode)&&mx>-100) drawPreview(ctx,sx,sy,mx,my);
  if(trail.length>1){ctx.save();for(let i=1;i<trail.length;i++){ctx.strokeStyle=`rgba(0,232,122,${((i/trail.length)*.38).toFixed(2)})`;ctx.lineWidth=1.5;ctx.beginPath();ctx.moveTo(trail[i-1].x,trail[i-1].y);ctx.lineTo(trail[i].x,trail[i].y);ctx.stroke();}ctx.restore();}
  drawRobot();
  if((mode==='free'||mode==='erase')&&mx>-100){const b=br();ctx.beginPath();ctx.arc(mx,my,b/2,0,Math.PI*2);ctx.strokeStyle=mode==='erase'?'rgba(255,60,78,.45)':'rgba(0,232,122,.3)';ctx.lineWidth=1;ctx.setLineDash([3,3]);ctx.stroke();ctx.setLineDash([]);}
  if(mode==='place'){ctx.strokeStyle='rgba(0,232,122,.18)';ctx.lineWidth=.5;ctx.setLineDash([4,4]);ctx.beginPath();ctx.moveTo(R.x,0);ctx.lineTo(R.x,H);ctx.stroke();ctx.beginPath();ctx.moveTo(0,R.y);ctx.lineTo(W,R.y);ctx.stroke();ctx.setLineDash([]);}
}

function drawRobot(){
  const{x,y,angle,wb,so,ss,sr}=R;
  const blen=so+wb*.28,bback=wb*.3,pos=sensorPositions();
  ctx.save();ctx.translate(x,y);ctx.rotate(angle);
  ctx.shadowColor='rgba(0,232,122,.35)';ctx.shadowBlur=16;
  ctx.fillStyle='rgba(0,50,22,.9)';ctx.strokeStyle='#00e87a';ctx.lineWidth=1.5;
  ctx.fillRect(-bback,-wb/2,blen+bback,wb);ctx.strokeRect(-bback,-wb/2,blen+bback,wb);
  ctx.fillStyle='#00e87a';ctx.fillRect(blen-.5,-3,5,6);ctx.shadowBlur=0;
  const wl=Math.max(10,wb*.26),ww=Math.max(4,wb*.1);
  ctx.fillStyle='#00e87a';ctx.strokeStyle='#003018';ctx.lineWidth=.8;
  ctx.fillRect(-wb*.08,-wb/2-ww,wl,ww);ctx.strokeRect(-wb*.08,-wb/2-ww,wl,ww);
  ctx.fillRect(-wb*.08,wb/2,wl,ww);ctx.strokeRect(-wb*.08,wb/2,wl,ww);
  ctx.fillStyle='#003820';ctx.beginPath();ctx.arc(wb*.1,-wb/2,2,0,Math.PI*2);ctx.fill();ctx.beginPath();ctx.arc(wb*.1,wb/2,2,0,Math.PI*2);ctx.fill();
  ctx.strokeStyle='rgba(0,232,122,.4)';ctx.lineWidth=.8;ctx.beginPath();ctx.moveTo(-4,0);ctx.lineTo(4,0);ctx.stroke();ctx.beginPath();ctx.moveTo(0,-4);ctx.lineTo(0,4);ctx.stroke();
  ctx.strokeStyle='rgba(0,232,122,.22)';ctx.lineWidth=.8;ctx.setLineDash([3,3]);ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(so,0);ctx.stroke();ctx.setLineDash([]);
  ctx.strokeStyle='rgba(0,232,122,.45)';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(so,-ss/2);ctx.lineTo(so,ss/2);ctx.stroke();ctx.restore();
  const srad=Math.max(3,sr+2);
  pos.forEach((p,i)=>{const v=sVals[i]||0,on=v>.05;ctx.save();if(on){ctx.shadowColor='#00e87a';ctx.shadowBlur=8+sr*2;}ctx.beginPath();ctx.arc(p.x,p.y,on?srad:srad*.7,0,Math.PI*2);ctx.fillStyle=on?`rgba(0,232,122,${.5+v*.5})`:'#0f1f0f';ctx.strokeStyle=on?'#00e87a':'#1a2f1a';ctx.lineWidth=1;ctx.fill();ctx.stroke();ctx.restore();});
}

// ══════════════════════════════════════
// UI UPDATE
// ══════════════════════════════════════
function updateUI(){
  document.getElementById('iX').textContent=R.x.toFixed(1);
  document.getElementById('iY').textContent=R.y.toFixed(1);
  document.getElementById('iAng').textContent=(R.angle*180/Math.PI).toFixed(1)+'°';
  const ms=R.spd*2.5;
  document.getElementById('iVL').textContent=t('spdLeft')+' '+lLeft.toFixed(2);
  document.getElementById('iVR').textContent=t('spdRight')+' '+lRight.toFixed(2);
  document.getElementById('sbLf').style.width=Math.max(0,Math.min(100,lLeft/ms*100))+'%';
  document.getElementById('sbRf').style.width=Math.max(0,Math.min(100,lRight/ms*100))+'%';
  refreshSbars(sVals);
  document.getElementById('iAct').textContent=sVals.filter(v=>v>.05).length+' / '+R.nc;
  const ef=document.getElementById('errFill'),pct=Math.max(-1,Math.min(1,lErr));
  if(pct>=0){ef.style.left='50%';ef.style.width=(pct*50)+'%';ef.style.background='var(--amb)';}
  else{ef.style.left=(50+pct*50)+'%';ef.style.width=(-pct*50)+'%';ef.style.background='var(--blu)';}
  document.getElementById('iErr').textContent=lErr.toFixed(3);
  document.getElementById('iPID').textContent=lOut.toFixed(3);
  document.getElementById('iInt').textContent=PID.intg.toFixed(3);
  if(running){const tm=tAcc+(performance.now()-t0)/1000;document.getElementById('simTime').textContent=tm.toFixed(1)+'s';}
}

// ══════════════════════════════════════
// INIT
// ══════════════════════════════════════
buildSbars();updateGeo();applyLang();
setTimeout(()=>{if(!cv.width)resize();R.x=cv.width/2;R.y=cv.height*.4;render();updateUI();},60);
