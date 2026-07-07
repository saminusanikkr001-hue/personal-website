(function(){
  var ESSAYS=[
    {t:'The Secret Tesla Motors Master Plan',d:'2006.08.02',body:[
      '"As you know, the initial product of Tesla Motors is a high performance electric sports car called the Tesla Roadster." 四步走计划的起点。',
      '第一步：造一辆没人能忽视的高性能跑车。第二步：用赚到的钱造一辆产量更大、价格更低的车。第三步：再用那笔钱造一辆真正大众买得起的车。别忘了，同时提供太阳能发电。'
    ]},
    {t:'Master Plan, Part Deux',d:'2016.07.20',body:[
      '"Part of the reason I wrote the first master plan was to defend against the inevitable attacks Tesla would face accusing us of just caring about making cars for rich people..."',
      '续篇给出新的四步：储能系统、更多车型、自动驾驶、共享车队。'
    ]},
    {t:'Master Plan Part 3',d:'2023.03.01',body:[
      '"There is a clear path to a sustainable-energy Earth." 2023年投资者日，视角从公司计划拉高到整个地球能源路径。'
    ]}
  ];
  var TIMELINE=[
    {yr:'1995',t:'创立 Zip2'},{yr:'1999',t:'创立 X.com'},{yr:'2002',t:'创立 SpaceX'},{yr:'2004',t:'投资特斯拉'},
    {yr:'2008',t:'Falcon 1 首次入轨'},{yr:'2015',t:'Falcon 9 首次回收'},{yr:'2016',t:'创立 Neuralink'},{yr:'2017',t:'Model 3 交付'},
    {yr:'2018',t:'Boring Company 独立'},{yr:'2019',t:'Starlink 首发'},{yr:'2021',t:'Optimus 公布'},{yr:'2022',t:'收购 X'},
    {yr:'2023',t:'创立 xAI'},{yr:'2024',t:'Neuralink 人体植入'}
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
      '<button class="back" onclick="showView(\'home\')">← 返回</button>'+
      '<div class="art-meta">'+e.d+' · TESLA BLOG</div>'+
      '<h1 class="art-title">'+e.t+'</h1>'+
      '<div class="art-body">'+e.body.map(function(p){return '<p>'+p+'</p>';}).join('')+'</div>';
    showView('article');
  };

  document.getElementById('hero-cards').innerHTML = ESSAYS.map(function(e,i){
    return '<div class="glass card" onclick="openEssay('+i+')"><div class="date">'+e.d+'</div><h3>'+e.t+'</h3><p>'+e.body[0].slice(0,40)+'……</p></div>';
  }).join('');
  document.getElementById('timeline-list').innerHTML = TIMELINE.map(function(n){
    return '<div class="glass listrow"><h3>'+n.t+'</h3><span class="date">'+n.yr+'</span></div>';
  }).join('');
  document.getElementById('quotes-list').innerHTML = QUOTES.map(function(q){
    return '<div class="glass quote" style="margin-bottom:16px"><p>'+q.s+'</p><div class="src">— Elon Musk · <b>'+q.src+'</b></div></div>';
  }).join('');
  document.getElementById('companies-list').innerHTML = COMPANIES.map(function(c){
    return '<div class="glass comp"><h3>'+c.n+'</h3><p>'+c.s+'</p><div class="since">'+c.since+'</div></div>';
  }).join('');
})();
