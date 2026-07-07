(function(){
  var DATA = {
    nav: {variants:[
      '<div class="glass n1"><a class="on">Essays</a><a>Companies</a><a>Quotes</a><a>Timeline</a></div>',
      '<div class="n2"><a class="on">Essays</a><a>Companies</a><a>Quotes</a><a>Timeline</a></div>',
      '<div class="glass n4"><a class="on">首</a><a>公</a><a>语</a><a>时</a></div>',
      '<div class="n5"><a class="on">Essays</a><a>Companies</a><a>Quotes</a><a>Timeline</a></div>'
    ]},
    hero: {variants:[
      '<div class="hv1"><div class="glass pill"><span class="dot"></span>6 companies · live</div><h2 class="grad-text">Reason from first<br/>principles. Build bold.</h2><p style="color:var(--sub);font-size:14.5px;max-width:52ch;margin:0 auto">测试素材：马斯克真实公开内容</p></div>',
      '<div class="hv2"><div class="txt"><h2><span class="grad-text">Build bold.</span><br/>Think first principles.</h2><p style="color:var(--sub);font-size:13.5px;margin-top:10px">测试素材：马斯克真实公开内容</p></div><div class="orb"></div></div>',
      '<div class="hv3"><h2 class="grad-text" style="font-size:34px;font-weight:800;margin:0">First Principles</h2><p style="color:var(--sub);font-size:13px;margin-top:10px">测试素材：马斯克真实公开内容</p></div>',
      '<div class="hv4"><div><div class="eyebrow grad-text">ABOUT</div><h2>Reason from first principles</h2></div><div style="display:flex;gap:10px"><div class="glass hv4-badge"><span class="n grad-text">03</span>Essays</div><div class="glass hv4-badge"><span class="n grad-text">06</span>Co.</div></div></div>'
    ]},
    stat: {variants:[
      '<div class="glass s1"><div class="s1-item"><div class="n grad-text">03</div><div class="l">Essays</div></div><div class="s1-item"><div class="n grad-text">14</div><div class="l">Timeline</div></div><div class="s1-item"><div class="n grad-text">07</div><div class="l">Quotes</div></div><div class="s1-item"><div class="n grad-text">06</div><div class="l">Companies</div></div></div>',
      '<div class="s2"><div class="s2-item"><div class="n grad-text">03</div><div style="font-size:10px;color:var(--sub)">ESSAYS</div></div><div class="s2-item"><div class="n grad-text">14</div><div style="font-size:10px;color:var(--sub)">TIMELINE</div></div><div class="s2-item"><div class="n grad-text">07</div><div style="font-size:10px;color:var(--sub)">QUOTES</div></div><div class="s2-item"><div class="n grad-text">06</div><div style="font-size:10px;color:var(--sub)">COMPANIES</div></div></div>',
      '<div class="s3"><div class="ring"><span>70%</span></div><div class="ring"><span>45%</span></div><div class="ring"><span>90%</span></div></div>',
      '<div class="s5"><div class="glass s5-item"><div class="ic"></div><div><div class="n">03</div><div style="font-size:9.5px;color:var(--sub)">Essays</div></div></div><div class="glass s5-item"><div class="ic"></div><div><div class="n">14</div><div style="font-size:9.5px;color:var(--sub)">Timeline</div></div></div><div class="glass s5-item"><div class="ic"></div><div><div class="n">07</div><div style="font-size:9.5px;color:var(--sub)">Quotes</div></div></div><div class="glass s5-item"><div class="ic"></div><div><div class="n">06</div><div style="font-size:9.5px;color:var(--sub)">Companies</div></div></div></div>'
    ]},
    card: {variants:[
      '<div class="cardgrid"><div class="glass c1"><div class="d grad-text">2006.08</div><h3>The Secret Master Plan</h3><p>四步走计划起点</p></div><div class="glass c1"><div class="d grad-text">2016.07</div><h3>Master Plan Part Deux</h3><p>十年后续篇</p></div><div class="glass c1"><div class="d grad-text">2023.03</div><h3>Master Plan Part 3</h3><p>可持续能源地球</p></div></div>',
      '<div class="cardgrid"><div class="glass c2"><div class="bar"></div><div class="body"><h3>The Secret Master Plan</h3><p style="font-size:12px;color:var(--sub)">2006.08</p></div></div><div class="glass c2"><div class="bar"></div><div class="body"><h3>Part Deux</h3><p style="font-size:12px;color:var(--sub)">2016.07</p></div></div><div class="glass c2"><div class="bar"></div><div class="body"><h3>Part 3</h3><p style="font-size:12px;color:var(--sub)">2023.03</p></div></div></div>',
      '<div class="cardgrid"><div class="glass c3"><div class="top"></div><div class="body"><h3>The Secret Master Plan</h3></div></div><div class="glass c3"><div class="top" style="background:linear-gradient(135deg,var(--i3),var(--i1))"></div><div class="body"><h3>Part Deux</h3></div></div><div class="glass c3"><div class="top" style="background:linear-gradient(135deg,var(--i4),var(--i2))"></div><div class="body"><h3>Part 3</h3></div></div></div>',
      '<div class="cardgrid"><div class="glass c5"><div class="idx grad-text">01</div><h3 style="position:relative">The Secret Master Plan</h3></div><div class="glass c5"><div class="idx grad-text">02</div><h3 style="position:relative">Part Deux</h3></div><div class="glass c5"><div class="idx grad-text">03</div><h3 style="position:relative">Part 3</h3></div></div>'
    ]},
    quote: {variants:[
      '<div class="glass q1"><p>"当一件事足够重要，即便胜算不在你这边，你也应该去做。"</p><div style="font-size:12px;color:var(--sub);font-weight:600">— Elon Musk</div></div>',
      '<div class="q4"><p class="grad-text">"当一件事足够重要，即便胜算不在你这边，你也应该去做。"</p><div style="color:var(--sub);font-size:12px">— Elon Musk</div></div>',
      '<div class="glass q3"><div class="accent"></div><div class="body"><span style="font-weight:700;font-size:13px">Elon Musk</span><p style="font-size:16px;font-weight:700;margin:10px 0 0">"当一件事足够重要，即便胜算不在你这边，你也应该去做。"</p></div></div>'
    ]},
    footer: {variants:[
      '<div class="f1-grid"><div><div style="font-weight:800">NOTES ✦ MUSK</div><p style="font-size:12px;color:var(--sub);margin-top:8px">测试素材站点</p></div><div><h4>EXPLORE</h4><a>Essays</a><a>Companies</a></div><div><h4>COMPANIES</h4><a>Tesla</a><a>SpaceX</a></div><div><h4>INFO</h4><a>Contact</a></div></div><div class="f1-bottom"><div>v16 edition</div><div class="mono" id="footclock">local time --</div></div>',
      '<div class="f2"><div class="socials"><span>X</span><span>in</span><span>@</span></div><p style="font-size:11.5px;color:var(--sub)">© 2026 NOTES · MUSK</p></div>',
      '<div class="f4"><h3 class="grad-text" style="font-size:24px;margin:0 0 14px">Let\'s talk</h3><span class="btn">Get in touch</span></div>'
    ]},
    intro: {variants:[
      '<div class="glass iv1"><div class="av"></div><div><div class="eyebrow grad-text" style="font-size:11px">About</div><h2 style="margin:6px 0 8px;font-size:20px;font-weight:800">Elon Musk</h2><p style="color:var(--sub);font-size:13px;margin:0;max-width:54ch">创业者 · 工程师。1971年生于南非比勒陀利亚，先后创立/执掌Tesla、SpaceX等6家公司。</p></div></div>',
      '<div class="glass iv2"><div class="av"></div><h2 style="margin:0 0 8px;font-size:20px;font-weight:800">Elon Musk</h2><p style="color:var(--sub);font-size:13px;max-width:50ch;margin:0 auto">创业者 · 工程师，先后创立/执掌6家在运营公司</p></div>',
      '<div class="glass iv3"><div class="txt"><div class="eyebrow grad-text" style="font-size:11px">About</div><h2 style="margin:6px 0 8px;font-size:20px;font-weight:800">Elon Musk</h2><p style="color:var(--sub);font-size:12.5px;margin:0">创业者 · 工程师</p></div><div class="stats"><div><b>1971</b>出生年份</div><div><b>6</b>在运营公司</div></div></div>'
    ]},
    timeline: {variants:['','','']},
    companies: {variants:['','','']},
    contact: {variants:['','','']}
  };

  var TIMELINE = [
    {yr:'1995',t:'创立 Zip2'},{yr:'2002',t:'创立 SpaceX'},{yr:'2004',t:'投资特斯拉'},
    {yr:'2016',t:'创立 Neuralink'},{yr:'2022',t:'收购 X'},{yr:'2023',t:'创立 xAI'}
  ];
  var COMPANIES = [
    {n:'Tesla',s:'电动汽车与清洁能源'},{n:'SpaceX',s:'可重复使用火箭'},
    {n:'Neuralink',s:'脑机接口技术'},{n:'X',s:'社交媒体平台'},{n:'xAI',s:'人工智能研究'}
  ];
  var CONTACT = [
    {n:'X / Twitter',v:'@elonmusk'},{n:'Tesla',v:'tesla.com'},{n:'SpaceX',v:'spacex.com'},{n:'Neuralink',v:'neuralink.com'}
  ];

  DATA.timeline.variants = [
    '<div class="glass tv1" style="padding:6px">' + TIMELINE.map(function(n){return '<div class="tv1-row"><span>'+n.t+'</span><span class="yr grad-text">'+n.yr+'</span></div>';}).join('') + '</div>',
    '<div class="tv2">' + TIMELINE.map(function(n){return '<div class="glass tv2-item"><div class="yr grad-text">'+n.yr+'</div><div style="font-size:12px;color:var(--sub);margin-top:6px">'+n.t+'</div></div>';}).join('') + '</div>',
    '<div class="tv3">' + TIMELINE.map(function(n,i){return '<div class="tv3-row'+(i%2?' right':'')+'"><div class="tv3-dot"></div><div class="glass tv3-card"><span class="yr grad-text mono" style="font-family:ui-monospace,monospace;font-weight:700">'+n.yr+'</span><div style="font-size:13px;font-weight:700;margin-top:4px">'+n.t+'</div></div></div>';}).join('') + '</div>'
  ];
  DATA.companies.variants = [
    '<div class="cov1">' + COMPANIES.slice(0,3).map(function(c){return '<div class="glass cov1-item"><h3>'+c.n+'</h3><p>'+c.s+'</p></div>';}).join('') + '</div>',
    '<div class="cov2">' + COMPANIES.map(function(c){return '<div class="glass cov2-item grad-text">'+c.n+'</div>';}).join('') + '</div>',
    '<div class="cov3">' + COMPANIES.map(function(c){return '<div class="glass cov3-row"><div class="bar"></div><div><div style="font-weight:800;font-size:14px">'+c.n+'</div><div style="font-size:11.5px;color:var(--sub)">'+c.s+'</div></div></div>';}).join('') + '</div>'
  ];
  DATA.contact.variants = [
    '<div class="ctv1">' + CONTACT.map(function(c){return '<div class="glass ctv1-item"><div class="ic"></div><div><h3 style="font-size:14px;margin:0 0 3px;font-weight:800">'+c.n+'</h3><p style="font-size:12px;color:var(--sub);margin:0">'+c.v+'</p></div></div>';}).join('') + '</div>',
    '<div class="ctv2">' + CONTACT.map(function(c){return '<div class="ctv2-item"><div class="ic"></div><div style="font-size:11.5px;font-weight:700">'+c.n+'</div></div>';}).join('') + '</div>',
    '<div class="glass ctv3">' + CONTACT.map(function(c){return '<div class="ctv3-row"><span style="font-weight:700;font-size:13px">'+c.n+'</span><span style="font-size:12px;color:var(--sub)">'+c.v+'</span></div>';}).join('') + '</div>'
  ];

  var PROGRESS = [
    {n:'Starship 轨道测试',p:72},{n:'Optimus 量产筹备',p:38},{n:'Neuralink 二期临床',p:55}
  ];
  DATA.progress = {variants:[
    '<div class="glass pv1">' + PROGRESS.map(function(p){return '<div class="pv1-row"><div class="pv1-top"><span>'+p.n+'</span><span class="grad-text" style="font-weight:800">'+p.p+'%</span></div><div class="pv1-track"><div class="pv1-fill" style="width:'+p.p+'%"></div></div></div>';}).join('') + '</div>',
    '<div class="glass pv2">' + PROGRESS.map(function(p,i){var cols=['linear-gradient(90deg,var(--i1),var(--i3))','linear-gradient(90deg,var(--i2),var(--i4))','linear-gradient(90deg,var(--i3),var(--i1))'];return '<div class="pv2-item"><div class="lbl2">'+p.n+'</div><div class="pv2-track"><div class="pv2-fill" style="width:'+p.p+'%;background:'+cols[i%3]+'"></div></div><span class="mono" style="font-size:11px;color:var(--sub)">'+p.p+'%</span></div>';}).join('') + '</div>',
    '<div class="pv3">' + PROGRESS.map(function(p){return '<div class="pv3-item"><div class="pv3-ring" style="background:conic-gradient(var(--i2) 0 '+p.p+'%, var(--line) '+p.p+'% 100%)"><span>'+p.p+'%</span></div><div style="font-size:11px;color:var(--sub);max-width:80px">'+p.n+'</div></div>';}).join('') + '</div>'
  ]};

  var BOOKS = [
    {t:'The Almanack of Naval Ravikant',c:'#6366f1'},{t:'Elon Musk (传记)',c:'#a855f7'},
    {t:'Zero to One',c:'#ec4899'},{t:'The Innovator\'s Dilemma',c:'#06b6d4'}
  ];
  DATA.bookshelf = {variants:[
    '<div class="glass bs1">' + BOOKS.map(function(b,i){var h=[130,150,110,140][i];return '<div class="bs1-spine" style="height:'+h+'px;background:'+b.c+'">'+b.t.slice(0,14)+'</div>';}).join('') + '</div>',
    '<div class="bs2">' + BOOKS.map(function(b){return '<div class="glass bs2-item"><div class="bs2-cover" style="background:'+b.c+'"></div><div class="bs2-body"><h4>'+b.t+'</h4></div></div>';}).join('') + '</div>',
    '<div class="glass bs3">' + BOOKS.map(function(b){return '<div class="bs3-row"><div class="bs3-dot" style="background:'+b.c+'"></div><span style="font-size:13px;font-weight:600">'+b.t+'</span></div>';}).join('') + '</div>'
  ]};

  var PRINCIPLES = [
    {n:'01',t:'第一性原理',s:'把问题拆到最基本的事实，再往上推导'},
    {n:'02',t:'允许失败',s:'没有失败发生，说明创新得不够'},
    {n:'03',t:'速度即优势',s:'一周投入80-100小时换四个月做完一年的量'}
  ];
  DATA.principle = {variants:[
    '<div class="pr1">' + PRINCIPLES.map(function(p){return '<div class="glass pr1-item"><div class="idx grad-text">P'+p.n+'</div><h4>'+p.t+'</h4><p style="font-size:11.5px;color:var(--sub);margin:6px 0 0">'+p.s+'</p></div>';}).join('') + '</div>',
    '<div class="pr2">' + PRINCIPLES.map(function(p){return '<div class="glass pr2-item"><div class="idx grad-text mono" style="font-family:ui-monospace,monospace;font-weight:800;font-size:11px">P'+p.n+'</div><h4 style="margin:8px 0 4px">'+p.t+'</h4><p style="font-size:11.5px;color:var(--sub);margin:0">'+p.s+'</p></div>';}).join('') + '</div>',
    '<div class="glass pr3">' + PRINCIPLES.map(function(p){return '<div class="pr3-row"><span class="big grad-text">'+p.n+'</span><div><div style="font-weight:800;font-size:14px">'+p.t+'</div><div style="font-size:12px;color:var(--sub);margin-top:3px">'+p.s+'</div></div></div>';}).join('') + '</div>'
  ]};

  DATA.theme = {variants:[
    '<div class="th1"><span class="on">浅色</span><span>深色</span></div>',
    '<div class="th2 glass">🌙</div>',
    '<div class="th3"><span class="on">Light</span><span>Dark</span></div>'
  ]};
  DATA.backtop = {variants:[
    '<div class="bt1" style="background:linear-gradient(135deg,var(--i1),var(--i3))">↑</div>',
    '<div class="bt2" style="background:linear-gradient(90deg,var(--i1),var(--i3))">↑ Top</div>',
    '<div class="bt3" style="background:conic-gradient(var(--i2) 0 65%, var(--line) 65% 100%)"><span>↑</span></div>'
  ]};
  DATA.empty = {variants:[
    '<div class="es1"><div class="ic"></div><div style="font-size:13px;color:var(--sub)">暂无内容</div></div>',
    '<div class="es2"><div class="ic"></div><div style="font-size:13.5px;color:var(--sub)">这里还没有文章</div><span class="btn">去写一篇</span></div>',
    '<div class="es3">暂无数据 · 稍后再来看看</div>'
  ]};

  var state = {nav:0, hero:0, stat:0, card:0, quote:0, footer:0, intro:0, timeline:0, companies:0, contact:0, progress:0, bookshelf:0, principle:0, theme:0, backtop:0, empty:0};

  function render(key){
    var d = DATA[key];
    document.getElementById('slot-'+key).innerHTML = d.variants[state[key]];
    var lbl = document.getElementById('lbl-'+key);
    if(lbl) lbl.textContent = (state[key]+1)+'/'+d.variants.length;
    if(key==='footer') tickClock();
  }
  window.cycle = function(key){
    state[key] = (state[key]+1) % DATA[key].variants.length;
    render(key);
  };
  function tickClock(){
    var el = document.getElementById('footclock');
    if(!el) return;
    el.textContent = 'local time ' + new Date().toLocaleTimeString('zh-CN',{hour12:false});
  }

  ['nav','hero','stat','card','quote','footer','intro','timeline','companies','contact','progress','bookshelf','principle','theme','backtop','empty'].forEach(render);
  setInterval(tickClock, 1000);
})();
