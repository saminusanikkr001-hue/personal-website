(function(){
  var ESSAYS=[
    {t:'The Secret Tesla Motors Master Plan',c:'Tesla',s:'四步走计划起点：造跑车→更便宜的车→大众买得起的车→太阳能',y:'2006',body:[
      '"As you know, the initial product of Tesla Motors is a high performance electric sports car called the Tesla Roadster."',
      '第一步：造一辆没人能忽视的高性能跑车。第二步：用赚到的钱造一辆产量更大、价格更低的车。第三步：再用那笔钱造一辆真正大众买得起的车。别忘了，同时提供太阳能发电。',
      '这篇文章后来被反复引用，是因为它在公司刚成立、只有一款几十万美元跑车的时候，就把"这不是终点，是起点"说得明明白白。'
    ]},
    {t:'Master Plan, Part Deux',c:'Tesla',s:'十年后续篇：储能+更多车型+自动驾驶+共享车队',y:'2016',body:[
      '"Part of the reason I wrote the first master plan was to defend against the inevitable attacks Tesla would face accusing us of just caring about making cars for rich people..."',
      '续篇给出新的四步：整合太阳能发电与储能系统、扩展电动车产品线覆盖几乎所有细分市场、通过车队数据把自动驾驶做到比人类安全十倍、让闲置的车能自己去拉活挣钱。'
    ]},
    {t:'Master Plan Part 3',c:'Tesla',s:'2023投资者日：可持续能源地球的清晰路径',y:'2023',body:[
      '"There is a clear path to a sustainable-energy Earth." 在2023年投资者日上，马斯克用这句话开场，把视角从"一家公司的计划"拉高到"整个地球能源系统的路径"。'
    ]}
  ];
  var TIMELINE=[
    {yr:'1995',t:'创立 Zip2',s:'早期互联网内容发布公司'},{yr:'1999',t:'创立 X.com',s:'后合并更名为PayPal'},
    {yr:'2002',t:'创立 SpaceX',s:'PayPal被收购后投入航天'},{yr:'2004',t:'投资特斯拉',s:'出任董事长'},
    {yr:'2008',t:'Falcon 1 首次入轨',s:'首枚私人液体燃料火箭'},{yr:'2015',t:'Falcon 9 首次回收',s:'一级火箭陆上回收'},
    {yr:'2016',t:'创立 Neuralink',s:'脑机接口公司'},{yr:'2017',t:'Model 3 开始交付',s:'大众市场电动车'},
    {yr:'2018',t:'Boring Company 独立',s:'隧道基础设施'},{yr:'2019',t:'Starlink 首发',s:'卫星互联网星座'},
    {yr:'2021',t:'Optimus 首次公布',s:'人形机器人计划'},{yr:'2022',t:'收购 Twitter/X',s:'440亿美元私有化'},
    {yr:'2023',t:'创立 xAI',s:'人工智能研究'},{yr:'2024',t:'Neuralink 人体植入',s:'首例Telepathy设备'}
  ];
  var QUOTES=[
    {s:'"我们平时的思维方式是靠类比。第一性原理是把事情拆解到最基本的事实，再从那里往上推。"',src:'2013年访谈'},
    {s:'"这里允许失败。如果没有失败发生，说明你创新得不够。"',src:'2015年TED访谈'},
    {s:'"当一件事足够重要，即便胜算不在你这边，你也应该去做。"',src:'广泛引用'},
    {s:'"你必须每周投入80到100小时，才能在四个月做到别人一年的量。"',src:'广泛引用'},
    {s:'"人生太短，不要记长期的仇。"',src:'广泛引用'},
    {s:'"我宁愿做一个乐观但错了的人，也不愿做一个悲观但对了的人。"',src:'广泛引用'},
    {s:'"品牌只是一种认知，而认知会随时间与现实趋于一致。"',src:'广泛引用'}
  ];
  var COMPANIES=[
    {n:'Tesla',s:'电动汽车与清洁能源',since:'2004起任董事长'},{n:'SpaceX',s:'可重复使用火箭与太空探索',since:'2002创立'},
    {n:'Neuralink',s:'脑机接口技术',since:'2016创立'},{n:'Boring Co.',s:'隧道与地下交通',since:'2018独立'},
    {n:'X (Twitter)',s:'社交媒体平台',since:'2022收购'},{n:'xAI',s:'人工智能研究',since:'2023创立'}
  ];

  window.showView = function(name){
    document.querySelectorAll('.view').forEach(function(v){v.classList.toggle('active', v.dataset.view===name);});
    document.querySelectorAll('.navlink').forEach(function(a){a.classList.toggle('on', a.dataset.view===name);});
    window.scrollTo({top:0,behavior:'smooth'});
  };
  window.openEssay = function(i){
    var e = ESSAYS[i];
    document.getElementById('article-slot').innerHTML =
      '<button class="back" onclick="showView(\'home\')">← Back</button>'+
      '<div class="art-meta">'+e.y+' · '+e.c+' BLOG</div>'+
      '<h1 class="art-title">'+e.t+'</h1>'+
      '<div class="art-body">'+e.body.map(function(p){return '<p>'+p+'</p>';}).join('')+'</div>';
    showView('article');
  };

  document.getElementById('essay-rows').innerHTML = ESSAYS.map(function(e,i){
    return '<div class="trow" onclick="openEssay('+i+')"><h3>'+e.t+'</h3><span>'+e.c+'</span><span>'+e.s+'</span><span class="yr">'+e.y+'</span></div>';
  }).join('');
  document.getElementById('timeline-rows').innerHTML = TIMELINE.map(function(n){
    return '<div class="trow"><h3>'+n.t+'</h3><span></span><span>'+n.s+'</span><span class="yr">'+n.yr+'</span></div>';
  }).join('');
  document.getElementById('quotes-list').innerHTML = QUOTES.map(function(q){
    return '<div class="quote"><p>'+q.s+'</p><div class="src">— Elon Musk · <b>'+q.src+'</b></div></div>';
  }).join('');
  document.getElementById('companies-list').innerHTML = COMPANIES.map(function(c){
    return '<div class="dev"><div class="dev-bar"><span></span><span></span><span></span></div><div class="dev-body"><h3>'+c.n+'</h3><p>'+c.s+'</p><div class="since">'+c.since+'</div></div></div>';
  }).join('');

  function tick(){
    var d = new Date();
    document.getElementById('clock').textContent = d.toLocaleTimeString('zh-CN',{hour12:false});
    document.getElementById('localtime').textContent = 'local time ' + d.toLocaleTimeString('zh-CN',{hour12:false}) + ' · GMT+8';
  }
  tick(); setInterval(tick, 1000);

  requestAnimationFrame(function(){
    setTimeout(function(){document.getElementById('g1').classList.add('in');}, 80);
    setTimeout(function(){document.getElementById('g2').classList.add('in');}, 220);
  });
})();
