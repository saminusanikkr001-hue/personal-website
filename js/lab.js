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

  // ---- 合集切换标签 / 合集封面卡片 ----
  DATA.collectiontabs = {variants:[
    '<div style="display:flex;gap:8px"><span class="gtag on">全部<sup>14</sup></span><span class="gtag">Master Plan<sup>3</sup></span><span class="gtag">访谈<sup>2</sup></span></div>',
    '<div class="glass" style="display:inline-flex;padding:5px;gap:2px;border-radius:999px"><span class="gtag on" style="border-radius:999px">全部</span><span class="gtag" style="background:none;border:none">Master Plan</span><span class="gtag" style="background:none;border:none">访谈</span></div>',
    '<div style="display:flex;gap:20px;border-bottom:1px solid var(--line)"><span style="padding-bottom:8px;border-bottom:2px solid var(--i2);font-size:13px;font-weight:700">全部</span><span style="padding-bottom:8px;font-size:13px;color:var(--sub)">Master Plan</span><span style="padding-bottom:8px;font-size:13px;color:var(--sub)">访谈</span></div>'
  ]};
  DATA.collectioncover = {variants:[
    '<div class="cardgrid"><div class="glass" style="overflow:hidden;padding:0"><div style="height:80px;background:linear-gradient(135deg,var(--i1),var(--i3))"></div><div class="gcard"><h4 style="margin:0;font-size:14px;font-weight:800">Master Plan 合集</h4><p style="font-size:11px;color:var(--sub);margin:4px 0 0">3篇</p></div></div></div>',
    '<div class="glass gcard" style="display:flex;gap:14px;align-items:center"><div style="width:50px;height:66px;border-radius:6px;background:linear-gradient(180deg,var(--i2),var(--i4));flex-shrink:0"></div><div><h4 style="margin:0;font-size:14px;font-weight:800">Master Plan 合集</h4><p style="font-size:11px;color:var(--sub);margin:4px 0 0">像一本书一样呈现，书脊色块+竖排信息</p></div></div>',
    '<div class="glass gcard"><div class="gtag on">合集</div><h4 style="margin:10px 0 0;font-size:16px;font-weight:800">Master Plan</h4><p style="font-size:11.5px;color:var(--sub);margin:6px 0 0">2006-2023 · 3篇文章</p></div>'
  ]};

  // ---- 文章列表表格版 / 文章详情三件套 / 双语 / 翻页 / 分享 / 二维码 / 阅读进度条 ----
  DATA.articletable = {variants:[
    '<div class="glass" style="padding:6px"><div class="grow"><span style="font-weight:700;font-size:13px">The Secret Master Plan</span><span class="mono" style="font-size:11px;color:var(--sub)">2006.08</span></div><div class="grow"><span style="font-weight:700;font-size:13px">Master Plan Part Deux</span><span class="mono" style="font-size:11px;color:var(--sub)">2016.07</span></div><div class="grow"><span style="font-weight:700;font-size:13px">Master Plan Part 3</span><span class="mono" style="font-size:11px;color:var(--sub)">2023.03</span></div></div>',
    '<div style="border-top:1px solid var(--line)"><div style="display:grid;grid-template-columns:2fr 1fr 1fr;font-size:10px;color:var(--sub);text-transform:uppercase;padding:8px 4px">标题<span>合集</span><span>日期</span></div><div class="grow" style="display:grid;grid-template-columns:2fr 1fr 1fr;padding:12px 4px"><span style="font-weight:700;font-size:13px">The Secret Master Plan</span><span class="gtag">Tesla</span><span class="mono" style="font-size:11px;color:var(--sub)">2006.08</span></div></div>'
  ]};
  DATA.articlemeta = {variants:[
    '<div><div class="mono grad-text" style="font-size:12px;font-weight:700">2006.08.02 · TESLA BLOG</div><h1 style="font-size:26px;margin:10px 0 0;font-weight:800">The Secret Tesla Motors Master Plan</h1></div>',
    '<div><h1 style="font-size:26px;margin:0 0 10px;font-weight:800">The Secret Tesla Motors Master Plan</h1><div style="display:flex;gap:14px;font-size:12px;color:var(--sub)"><span>2006.08.02</span><span>·</span><span>约1,200字</span><span>·</span><span>4分钟阅读</span></div></div>',
    '<div class="glass gcard"><div class="gtag on">Tesla Blog</div><h1 style="font-size:22px;margin:10px 0 6px;font-weight:800">The Secret Tesla Motors Master Plan</h1><div class="mono" style="font-size:11px;color:var(--sub)">2006.08.02</div></div>'
  ]};
  DATA.articlebody = {variants:[
    '<p style="font-family:ui-serif,Georgia,serif;font-size:16px;line-height:1.9;max-width:60ch;color:#2a2640">"As you know, the initial product of Tesla Motors is a high performance electric sports car..." 衬线正文，强调"这是被认真写下的内容"。</p>',
    '<p style="font-size:15px;line-height:1.85;max-width:64ch;color:#2a2640">"As you know, the initial product of Tesla Motors is a high performance electric sports car..." 无衬线正文，行宽更宽，适合快速浏览的博客风格。</p>',
    '<p style="font-size:17px;line-height:2.1;max-width:52ch;margin:0 auto;text-align:left;color:#2a2640">"As you know, the initial product of Tesla Motors is a high performance electric sports car..." 更窄的行宽+更大行距，强调阅读舒适度而非信息密度。</p>'
  ]};
  DATA.articletoc = {variants:[
    '<div class="glass gcard" style="max-width:220px"><div style="font-size:10px;color:var(--sub);text-transform:uppercase;margin-bottom:8px">目录</div><div style="font-size:12.5px;line-height:2;color:var(--sub)"><div style="color:var(--i2);font-weight:700">01 起点</div><div>02 四步走</div><div>03 太阳能</div></div></div>',
    '<div style="display:flex;flex-direction:column;gap:10px;border-left:2px solid var(--line);padding-left:14px;max-width:220px"><div style="font-size:12.5px;font-weight:700;color:var(--i2);border-left:2px solid var(--i2);margin-left:-16px;padding-left:14px">01 起点</div><div style="font-size:12.5px;color:var(--sub)">02 四步走</div><div style="font-size:12.5px;color:var(--sub)">03 太阳能</div></div>'
  ]};
  DATA.bilingual = {variants:[
    '<div class="th3"><span class="on">中文</span><span>EN</span></div>',
    '<span class="gtag on" style="cursor:pointer">中 / EN</span>'
  ]};
  DATA.articlenav = {variants:[
    '<div style="display:flex;justify-content:space-between;border-top:1px solid var(--line);padding-top:16px"><div><div style="font-size:10px;color:var(--sub)">← 上一篇</div><div style="font-size:13px;font-weight:700">The Secret Master Plan</div></div><div style="text-align:right"><div style="font-size:10px;color:var(--sub)">下一篇 →</div><div style="font-size:13px;font-weight:700">Part 3</div></div></div>',
    '<div style="display:flex;gap:10px"><span class="glass gcard" style="flex:1;text-align:center;cursor:pointer">← 上一篇</span><span class="glass gcard" style="flex:1;text-align:center;cursor:pointer">下一篇 →</span></div>'
  ]};
  DATA.share = {variants:[
    '<div style="display:flex;gap:8px"><span class="glass gring" style="display:flex;align-items:center;justify-content:center;cursor:pointer">X</span><span class="glass gring" style="display:flex;align-items:center;justify-content:center;cursor:pointer">微</span><span class="glass gring" style="display:flex;align-items:center;justify-content:center;cursor:pointer">🔗</span></div>',
    '<span class="gbtn">分享这篇文章 ↗</span>',
    '<div style="display:flex;gap:6px"><span class="gtag">分享到 X</span><span class="gtag">复制链接</span></div>'
  ]};
  DATA.qrcode = {variants:[
    '<div class="glass gcard" style="display:inline-flex;gap:12px;align-items:center"><div style="width:64px;height:64px;border-radius:8px;background:repeating-conic-gradient(var(--ink) 0 25%, transparent 0 50%) 0 0/16px 16px"></div><div style="font-size:12px;color:var(--sub)">扫码关注<br/>公众号「静论」</div></div>',
    '<div class="glass gcard" style="text-align:center;max-width:140px"><div style="width:100%;aspect-ratio:1;border-radius:8px;background:repeating-conic-gradient(var(--ink) 0 25%, transparent 0 50%) 0 0/14px 14px;margin-bottom:8px"></div><div style="font-size:11px;color:var(--sub)">关注「静论」</div></div>'
  ]};
  DATA.readprogress = {variants:[
    '<div style="height:4px;background:var(--line);border-radius:99px;overflow:hidden"><div style="width:62%;height:100%;background:linear-gradient(90deg,var(--i1),var(--i3))"></div></div><div style="font-size:10px;color:var(--sub);margin-top:4px">阅读进度 62%（页面顶部细条，滚动时更新）</div>',
    '<div style="display:flex;align-items:center;gap:8px"><div class="pv3-ring" style="width:32px;height:32px;background:conic-gradient(var(--i2) 0 62%, var(--line) 62% 100%)"><span style="width:24px;height:24px;font-size:8px">62%</span></div><span style="font-size:11px;color:var(--sub)">阅读进度（固定在角落的环形指示）</span></div>'
  ]};

  // ---- 月报三件套 ----
  DATA.monthlylist = {variants:[
    '<div class="glass" style="padding:6px">' + ['2026年06月刊','2026年05月刊','2026年04月刊'].map(function(m,i){return '<div class="grow"><span style="font-weight:700;font-size:13px">'+m+'</span><span class="mono" style="font-size:11px;color:var(--sub)">第'+(30-i)+'期</span></div>';}).join('') + '</div>',
    '<div class="cardgrid">' + ['06月','05月','04月'].map(function(m){return '<div class="glass gcard" style="text-align:center"><div class="grad-text" style="font-size:22px;font-weight:800">'+m+'</div><div style="font-size:11px;color:var(--sub)">2026</div></div>';}).join('') + '</div>'
  ]};
  DATA.monthlytimeline = {variants:[
    '<div style="display:flex;gap:14px;overflow-x:auto">' + ['04月','05月','06月'].map(function(m){return '<div class="glass gcard" style="flex-shrink:0;width:120px;text-align:center"><div class="grad-text" style="font-weight:800">'+m+'</div></div>';}).join('') + '</div>',
    '<div class="glass gcard"><div style="display:flex;justify-content:space-between;align-items:center"><span style="font-size:12px;color:var(--sub)">04月</span><div style="flex:1;height:2px;background:linear-gradient(90deg,var(--i1),var(--i3));margin:0 10px"></div><span style="font-size:12px;color:var(--sub)">06月</span></div><p style="font-size:11px;color:var(--sub);margin-top:10px">对比时间轴：看变化速度而非单期内容</p></div>'
  ]};

  // ---- 原则库两项 ----
  DATA.principlefilter = {variants:[
    '<div style="display:flex;gap:8px;flex-wrap:wrap"><span class="gtag on">全部</span><span class="gtag">决策类</span><span class="gtag">关系类</span><span class="gtag">工作类</span></div>',
    '<select class="glass" style="border:none;padding:9px 14px;border-radius:10px;font-size:12.5px;color:var(--ink)"><option>按分类筛选：全部</option><option>决策类</option><option>关系类</option></select>'
  ]};
  DATA.principleexpand = {variants:[
    '<div class="glass gcard"><div style="display:flex;justify-content:space-between"><h4 style="margin:0;font-size:14px;font-weight:800">P01 第一性原理</h4><span style="color:var(--sub)">▾</span></div><p style="font-size:12px;color:var(--sub);margin:8px 0 0">把问题拆到最基本的事实，再往上推导。点击展开查看完整案例与应用场景……</p></div>',
    '<div class="glass gcard"><div style="display:flex;justify-content:space-between"><h4 style="margin:0;font-size:14px;font-weight:800">P01 第一性原理</h4><span style="color:var(--sub)">▸</span></div></div>'
  ]};

  // ---- 单本书详情卡 ----
  DATA.bookdetail = {variants:[
    '<div class="glass gcard" style="display:flex;gap:14px"><div style="width:48px;height:64px;border-radius:6px;background:linear-gradient(180deg,var(--i1),var(--i3));flex-shrink:0"></div><div><h4 style="margin:0;font-size:14px;font-weight:800">The Almanack of Naval Ravikant</h4><p style="font-size:11px;color:var(--sub);margin:6px 0 0">英文原版 · 进度62% · 2026.05开始</p></div></div>',
    '<div class="glass gcard"><h4 style="margin:0 0 6px;font-size:14px;font-weight:800">The Almanack of Naval Ravikant</h4><div class="pv1-track"><div class="pv1-fill" style="width:62%"></div></div><p style="font-size:10.5px;color:var(--sub);margin-top:6px">62% · 英文原版</p></div>'
  ]};

  // ---- 追剧进度 / 任务同步状态 / 热力图 / 成就 ----
  DATA.watching = {variants:[
    '<div class="glass gcard"><h4 style="margin:0;font-size:14px;font-weight:800">老友记</h4><p style="font-size:11.5px;color:var(--sub);margin:6px 0 0">第3季 · 第14集</p></div>',
    '<div class="grow"><span style="font-weight:700;font-size:13px">老友记</span><span class="gtag on">S3 E14</span></div>'
  ]};
  DATA.syncstatus = {variants:[
    '<div class="glass gcard" style="display:flex;align-items:center;gap:10px"><span style="width:8px;height:8px;border-radius:50%;background:#22c55e"></span><span style="font-size:12px;color:var(--sub)">最后同步于 2小时前</span></div>',
    '<div class="glass gcard" style="display:flex;align-items:center;gap:10px"><span style="width:8px;height:8px;border-radius:50%;background:#f59e0b"></span><span style="font-size:12px;color:var(--sub)">已过期3天，该更新数据了</span></div>'
  ]};
  DATA.heatmap = {variants:[
    '<div style="display:grid;grid-template-columns:repeat(14,1fr);gap:3px;max-width:280px">' + Array.from({length:28}).map(function(_,i){var op=[0.15,0.35,0.6,0.9][i%4];return '<div style="aspect-ratio:1;border-radius:3px;background:var(--i2);opacity:'+op+'"></div>';}).join('') + '</div>',
    '<div class="glass gcard"><div style="display:flex;gap:2px">' + Array.from({length:14}).map(function(_,i){var h=[8,16,24,12,30,20,10][i%7];return '<div style="width:8px;height:'+h+'px;background:linear-gradient(180deg,var(--i1),var(--i3));border-radius:2px"></div>';}).join('') + '</div><p style="font-size:10.5px;color:var(--sub);margin-top:8px">近14天执行强度</p></div>'
  ]};
  DATA.badges = {variants:[
    '<div style="display:flex;gap:8px;flex-wrap:wrap"><span class="gtag on">🚀 SpaceX创始人</span><span class="gtag on">⚡ Tesla CEO</span><span class="gtag on">🧠 Neuralink</span></div>',
    '<div class="cardgrid">' + ['SpaceX创始人','Tesla CEO','Neuralink创始人'].map(function(b){return '<div class="glass gcard" style="text-align:center;font-size:12px;font-weight:700">'+b+'</div>';}).join('') + '</div>'
  ]};

  // ---- 浏览导览 / Dispatch ----
  DATA.explorecards = {variants:[
    '<div class="cardgrid">' + ['Essays','Timeline','Quotes'].map(function(c,i){return '<div class="glass gcard" style="text-align:center"><div class="grad-text" style="font-size:11px;font-weight:800;margin-bottom:4px">0'+(i+1)+'</div><div style="font-weight:800;font-size:13px">'+c+'</div></div>';}).join('') + '</div>',
    '<div style="display:flex;gap:10px;overflow-x:auto">' + ['Essays','Timeline','Quotes'].map(function(c){return '<div class="glass gcard" style="flex-shrink:0;width:110px;text-align:center;font-weight:700;font-size:12.5px">'+c+'</div>';}).join('') + '</div>'
  ]};
  DATA.dispatch = {variants:[
    '<div class="glass gcard" style="display:inline-flex;align-items:center;gap:10px"><span style="width:8px;height:8px;border-radius:50%;background:#22c55e"></span><span style="font-size:12px;font-weight:600">当前：xAI · Grok 5 训练中</span></div>',
    '<div class="glass gcard"><div style="font-size:10px;color:var(--sub);text-transform:uppercase">Now</div><div style="font-size:13px;font-weight:700;margin-top:4px">xAI · Grok 5 训练中</div></div>'
  ]};

  // ---- 设备框架 / 数据筛选器 / 图片画廊 / 正文引用块 / 相关文章 ----
  DATA.deviceframe = {variants:[
    '<div class="glass" style="overflow:hidden;padding:0;max-width:280px"><div style="display:flex;gap:6px;padding:8px 10px;border-bottom:1px solid var(--line)"><span style="width:8px;height:8px;border-radius:50%;background:var(--line)"></span><span style="width:8px;height:8px;border-radius:50%;background:var(--line)"></span><span style="width:8px;height:8px;border-radius:50%;background:var(--line)"></span></div><div style="height:100px;background:linear-gradient(135deg,var(--i1),var(--i3))"></div></div>',
    '<div style="border:2px solid var(--ink);border-radius:14px;overflow:hidden;max-width:280px"><div style="height:20px;background:var(--ink)"></div><div style="height:100px;background:linear-gradient(135deg,var(--i2),var(--i4))"></div></div>'
  ]};
  DATA.datafilter = {variants:[
    '<div style="display:flex;gap:8px;flex-wrap:wrap"><span class="gtag on">分类▾</span><span class="gtag">标签▾</span><span class="gtag">日期▾</span></div>',
    '<div class="glass" style="display:flex;padding:4px;border-radius:999px;gap:4px"><span class="gtag on" style="background:linear-gradient(90deg,var(--i1),var(--i3));color:#fff">分类</span><span class="gtag" style="background:none;border:none">标签</span><span class="gtag" style="background:none;border:none">日期</span></div>'
  ]};
  DATA.gallery = {variants:[
    '<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">' + ['var(--i1)','var(--i2)','var(--i3)'].map(function(c){return '<div style="aspect-ratio:1;border-radius:10px;background:'+c+'"></div>';}).join('') + '</div>',
    '<div style="display:flex;gap:8px;overflow-x:auto">' + ['var(--i1)','var(--i2)','var(--i3)','var(--i4)'].map(function(c){return '<div style="width:100px;height:70px;border-radius:10px;background:'+c+';flex-shrink:0"></div>';}).join('') + '</div>'
  ]};
  DATA.pullquote = {variants:[
    '<div style="border-left:3px solid var(--i2);padding-left:16px;font-size:16px;font-weight:700;font-style:italic;margin:14px 0">"failure is an option here. If things are not failing, you are not innovating enough."</div>',
    '<div style="text-align:center;padding:16px 0"><div class="grad-text" style="font-size:18px;font-weight:800">"failure is an option here."</div></div>'
  ]};
  DATA.related = {variants:[
    '<div class="cardgrid">' + ['Master Plan Part Deux','Master Plan Part 3'].map(function(t){return '<div class="glass gcard"><div style="font-size:9.5px;color:var(--sub);text-transform:uppercase">Related</div><h4 style="font-size:13px;margin:6px 0 0;font-weight:800">'+t+'</h4></div>';}).join('') + '</div>',
    '<div class="glass" style="padding:6px">' + ['Master Plan Part Deux','Master Plan Part 3'].map(function(t){return '<div class="grow"><span style="font-size:12.5px;font-weight:700">'+t+'</span><span style="color:var(--sub)">→</span></div>';}).join('') + '</div>'
  ]};

  // ---- 数字滚动 / 标签云 / 订阅 / 单平台分享 / 收藏 ----
  DATA.countup = {variants:[
    '<div class="grad-text" id="countupDemo" style="font-size:34px;font-weight:800;font-variant-numeric:tabular-nums">0</div><p style="font-size:11px;color:var(--sub)">点击"⇄"重新播放0→14滚动动画</p>',
    '<div class="grad-text" style="font-size:34px;font-weight:800">14</div><p style="font-size:11px;color:var(--sub)">静态直接显示，不做滚动动画</p>'
  ]};
  DATA.tagcloud = {variants:[
    '<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center"><span class="gtag" style="font-size:15px">工程</span><span class="gtag">航天</span><span class="gtag" style="font-size:18px">第一性原理</span><span class="gtag">能源</span><span class="gtag" style="font-size:13px">AI</span></div>',
    '<div style="display:flex;gap:10px;flex-wrap:wrap"><span class="grad-text" style="font-weight:800;font-size:16px">工程</span><span class="grad-text" style="font-weight:800;font-size:22px">第一性原理</span><span class="grad-text" style="font-weight:800;font-size:13px">AI</span></div>'
  ]};
  DATA.newsletter = {variants:[
    '<div class="glass gcard" style="display:flex;gap:8px"><input placeholder="you@email.com" style="flex:1;border:1px solid var(--line);border-radius:8px;padding:8px 12px;font-size:12px;background:transparent;color:var(--ink)"/><span class="gbtn">订阅</span></div>',
    '<div style="text-align:center"><span class="gbtn">订阅更新 →</span></div>'
  ]};
  DATA.socialshare = {variants:[
    '<div style="display:flex;gap:10px"><span class="glass gring" style="display:flex;align-items:center;justify-content:center">𝕏</span><span class="glass gring" style="display:flex;align-items:center;justify-content:center;color:#07C160">微</span></div>',
    '<div style="display:flex;gap:10px"><span class="gbtn" style="background:#000">分享到 X</span><span class="gbtn" style="background:#07C160">分享到微信</span></div>'
  ]};
  DATA.bookmark = {variants:[
    '<span class="glass gring" style="display:inline-flex;align-items:center;justify-content:center;cursor:pointer">☆</span>',
    '<span class="gbtn">＋ 收藏</span>'
  ]};

  // ---- util2: 404 / loading / search / toast / breadcrumb / pagination / sort / updated / language ----
  DATA.notfound = {variants:[
    '<div style="text-align:center"><div class="grad-text" style="font-size:32px;font-weight:900">404</div><p style="font-size:12px;color:var(--sub);margin-top:6px">页面不存在</p></div>',
    '<div style="text-align:center"><div style="font-size:14px;font-weight:700">页面走丢了</div><span class="gbtn" style="margin-top:10px;display:inline-block">回首页</span></div>'
  ]};
  DATA.loading = {variants:[
    '<div class="skel" style="height:14px;width:80%;margin-bottom:8px"></div><div class="skel" style="height:14px;width:60%"></div>',
    '<div class="pv1-track"><div class="pv1-fill" style="width:40%"></div></div>'
  ]};
  DATA.search = {variants:[
    '<div class="glass" style="padding:9px 14px;border-radius:10px;font-size:12px;color:var(--sub)">🔍 搜索文章、原则……</div>',
    '<div class="glass" style="padding:9px 14px;border-radius:10px;font-size:12px;color:var(--sub);display:flex;justify-content:space-between"><span>🔍 搜索</span><span class="mono" style="font-size:10px">⌘K</span></div>'
  ]};
  DATA.toast = {variants:[
    '<div class="glass gcard" style="display:inline-flex;gap:8px;align-items:center"><span>✓</span><span style="font-size:12px">已复制链接</span></div>',
    '<div style="background:var(--ink);color:#fff;padding:9px 16px;border-radius:10px;font-size:12px;display:inline-block">已收藏这篇文章</div>'
  ]};
  DATA.breadcrumb = {variants:[
    '<div style="font-size:11.5px;color:var(--sub)">首页 / Essays / Master Plan</div>',
    '<div style="font-size:11.5px;color:var(--sub)">首页 <span class="grad-text" style="font-weight:700">›</span> Essays <span class="grad-text" style="font-weight:700">›</span> Master Plan</div>'
  ]};
  DATA.pagination = {variants:[
    '<div style="display:flex;gap:6px"><span class="glass gring" style="display:flex;align-items:center;justify-content:center;font-size:12px">1</span><span class="gring" style="display:flex;align-items:center;justify-content:center;font-size:12px;background:linear-gradient(90deg,var(--i1),var(--i3));color:#fff">2</span><span class="glass gring" style="display:flex;align-items:center;justify-content:center;font-size:12px">3</span></div>',
    '<span class="gbtn">加载更多 ↓</span>'
  ]};
  DATA.sort = {variants:[
    '<select class="glass" style="border:none;padding:8px 12px;border-radius:8px;font-size:12px;color:var(--ink)"><option>最新优先</option><option>最热优先</option></select>',
    '<div style="display:flex;gap:6px"><span class="gtag on">最新</span><span class="gtag">最热</span></div>'
  ]};
  DATA.updated = {variants:[
    '<div class="mono" style="font-size:10.5px;color:var(--sub)">最后更新 2026.07.07</div>',
    '<div style="font-size:10.5px;color:var(--sub)">7天前更新过</div>'
  ]};
  DATA.language = {variants:[
    '<div class="th3"><span class="on">简体</span><span>繁體</span></div>',
    '<span class="gtag on">简 / 繁</span>'
  ]};

  var LONGTAIL_KEYS = ['collectiontabs','collectioncover','articletable','articlemeta','articlebody','articletoc','bilingual','articlenav','share','qrcode','readprogress','monthlylist','monthlytimeline','principlefilter','principleexpand','bookdetail','watching','syncstatus','heatmap','badges','explorecards','dispatch','deviceframe','datafilter','gallery','pullquote','related','countup','tagcloud','newsletter','socialshare','bookmark','notfound','loading','search','toast','breadcrumb','pagination','sort','updated','language'];
  var CORE_KEYS = ['nav','hero','stat','card','quote','footer','intro','timeline','companies','contact','progress','bookshelf','principle','theme','backtop','empty'];
  var ALL_KEYS = CORE_KEYS.concat(LONGTAIL_KEYS);
  var LABELS = {
    nav:'导航栏',hero:'Hero区',stat:'数据统计',card:'文章卡片',quote:'引用块',footer:'页脚',intro:'关于我',
    timeline:'时间线',companies:'公司列表',contact:'联系方式',progress:'进度条',bookshelf:'书架',principle:'原则卡片',
    theme:'深浅色切换',backtop:'返回顶部',empty:'空状态',collectiontabs:'合集切换标签',collectioncover:'合集封面卡片',
    articletable:'文章列表表格版',articlemeta:'文章详情标题元信息',articlebody:'文章详情正文排版',articletoc:'文章详情侧边TOC',
    bilingual:'双语切换',articlenav:'上一篇下一篇导航',share:'分享按钮',qrcode:'二维码展示',readprogress:'阅读进度条',
    monthlylist:'月报列表',monthlytimeline:'月报对比时间轴',principlefilter:'原则分类筛选',principleexpand:'原则详情展开收起',
    bookdetail:'单本书详情卡',watching:'追剧进度',syncstatus:'任务同步状态',heatmap:'执行记录热力图',badges:'成就标签',
    explorecards:'浏览导览卡片',dispatch:'Dispatch速览面板',deviceframe:'设备框架母题',datafilter:'数据筛选器',
    gallery:'内嵌图片画廊',pullquote:'正文引用块',related:'相关文章模块',countup:'数字滚动动画',tagcloud:'标签云',
    newsletter:'订阅表单',socialshare:'单平台分享图标',bookmark:'收藏按钮',notfound:'404页',loading:'加载状态',
    search:'搜索面板',toast:'Toast通知',breadcrumb:'面包屑导航',pagination:'分页控件',sort:'排序控件',
    updated:'更新时间戳',language:'语言切换'
  };
  var STORE_KEY = 'labSelections_v1';

  var state = {};
  ALL_KEYS.forEach(function(k){ state[k] = 0; });
  try {
    var saved = JSON.parse(localStorage.getItem(STORE_KEY) || '{}');
    ALL_KEYS.forEach(function(k){ if(typeof saved[k] === 'number' && DATA[k] && saved[k] < DATA[k].variants.length) state[k] = saved[k]; });
  } catch(e){}

  function render(key){
    var d = DATA[key];
    document.getElementById('slot-'+key).innerHTML = d.variants[state[key]];
    var lbl = document.getElementById('lbl-'+key);
    if(lbl) lbl.textContent = (state[key]+1)+'/'+d.variants.length;
    if(key==='footer') tickClock();
    if(key==='countup') playCountup();
  }
  function playCountup(){
    var cu = document.getElementById('countupDemo');
    if(!cu) return;
    var n=0; var iv=setInterval(function(){ n++; cu.textContent=n; if(n>=14) clearInterval(iv); }, 90);
  }
  window.cycle = function(key){
    state[key] = (state[key]+1) % DATA[key].variants.length;
    render(key);
    try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); } catch(e){}
  };
  function tickClock(){
    var el = document.getElementById('footclock');
    if(!el) return;
    el.textContent = 'local time ' + new Date().toLocaleTimeString('zh-CN',{hour12:false});
  }

  window.exportSelections = function(){
    var lines = ALL_KEYS.map(function(k){
      return (LABELS[k]||k) + '：变体 ' + (state[k]+1) + ' / ' + DATA[k].variants.length;
    });
    var text = lines.join('\n');
    var box = document.getElementById('exportBox');
    box.value = text;
    box.style.display = 'block';
    box.focus();
    box.select();
    try {
      navigator.clipboard.writeText(text);
      document.getElementById('exportHint').textContent = '已复制到剪贴板，也可以直接从下面文本框复制';
    } catch(e){
      document.getElementById('exportHint').textContent = '自动复制失败，请手动从下面文本框复制';
    }
  };

  ALL_KEYS.forEach(render);
  setInterval(tickClock, 1000);
})();
