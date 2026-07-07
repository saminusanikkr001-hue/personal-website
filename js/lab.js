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
    ]}
  };

  var state = {nav:0, hero:0, stat:0, card:0, quote:0, footer:0};

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

  ['nav','hero','stat','card','quote','footer'].forEach(render);
  setInterval(tickClock, 1000);
})();
