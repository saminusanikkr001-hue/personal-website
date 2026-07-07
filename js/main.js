(function(){
  var COLLECTIONS = [
    {key:'qxj', name:'清醒纪', desc:'认知与元认知', count:19},
    {key:'qxqs', name:'且行且思', desc:'成长与自我记录', count:36},
    {key:'nxwn', name:'那些温暖我的人和事', desc:'温情记录', count:4},
    {key:'ds', name:'书籍读后感分享，电影观后感分享', desc:'读书与观影', count:15}
  ];

  // 已存正文的文章（逐步补充）；其余先只有标题，点开显示"内容整理中"
  var ARTICLES_WITH_BODY = {
    '什么决定你的自我驱动力': {collection:'qxj', date:'2026-05-14'},
    '所谓命运，不过是价值观的自动化结算': {collection:'qxj', date:'2026-05-12'},
    '这些根，在你那里': {collection:'nxwn', date:'2026-05-10'}
  };

  var ARTICLE_TITLES = {
    qxj: ['寻找贵人只是手段，成为自己的贵人才是终局','七年即一生：让肉体活在当下，让思维活在未来','安全感，是你人生最隐蔽也最沉重的枷锁','为什么我说"付费"，是你在这个时代能捡到的最大便宜？','警惕注意力的流失：我与大脑之间的一次夺权','我是怎样看待资本','警惕落后：为什么"差不多"，是你人生最致命的幻觉？','把人生玩成无限游戏：从单维内卷，到多维竞争','开启元认知：觉今是而昨非，才是最顶级的浪漫','反人性的刻意练习：如何用元认知，夺回人生的"上帝视角"','送你一把万能钥匙：所有问题的终极解法，是不和死锁纠缠','放弃"坚持"：顶级玩家从不谈毅力','最可怕的错过，是在低维世界里完成了"逻辑自洽"','这个世界是有生命的：一场名为"自证预言"的漫长回音','彻底戒掉抱怨：世界上有问题，就一定有答案','看见别人的好，是你对自己世界的顶级"筛选机制"','正确本身一文不值，除非你推下筹码','所谓命运，不过是价值观的自动化结算','什么决定你的自我驱动力'],
    qxqs: ['高考之后的假期，我想做这些','学历和能力，哪个更重要？','重视圈层','净化圈层：未来我会删掉微信一半联系人（上）','净化圈层：未来我会删掉微信一半联系人（下）','伴随一生的技能：事业有成的基本功','从壹到贰的晋升之路（社交篇)','从壹到贰的晋升之路（自我认知篇）','从壹到贰的晋升之路（大学认知篇）','自我认知（kyo哥讲课实录及启发）','自由（kyo哥讲课实录及启发）','相遇的意义在于生命的重合','从来没有真正的感同身受','第一次独立就医是什么体验？','第一次独自远行','我们正在失去"离别"的能力，以及它背后的深情','那场不被理解的送别，等来了一次"跑偏"的迎接','人生的第18年，我开始思考目标感','原来最好的关系，是善意的相互吸引','为什么我要做这个公众号？|写给不甘沉默的灵魂','在罗斯福广场，我找到了高级自洽的答案','我们应该如何使用AI？','高考结束后，我用人生月报系统对抗离别','2025的最后一篇文章，写给18岁的自己','我们最需要的，其实是平静','真正的富养，是把自己重养一遍','18岁，我在广州IFC看到了另一个世界','读完《幸福的勇气》：所谓爱，其实是一场"不死不休"的冒险','翻完小学6年的日记：如果不写下来，谁还记得这些"笨拙"的证据？','敢于All in的人，才有资格说青春比小说精彩','如果回到高考后，我不信我会变成今天的样子','19岁，我在姥姥家的卧室里，重新以此定义"年味"','当黑天鹅掠过身体：在强制"关机"的边缘，我确认了人生剧本','一道概率题带来的交锋：在别人给定的框架外思考','再度元宵，别样体悟','《智人之上》：当机器开始拥有"自我"，人类的退路在哪里？'],
    nxwn: ['我的"神仙"语文老师，和那句迟到的"谢谢"','我的"神仙"班主任，把全班都"宠"哭了','都不必回头，我们就在彼此的副驾','这些根，在你那里'],
    ds: ['阅读分享第一期：吴三桂——无处收留','《穿普拉达的女王》观后感','《活法》读后感','《埃隆马斯克传》读后感','《了凡四训》读后感','《斯坦福大学人生设计课》读后感','《成为1%》读后感','《千年悖论》读后感','《洪武》读后感','《饥饿的盛世》读后感','《把时间当作朋友》读后感','《新生——七年就是一辈子》读后感','《个体崛起》读后感','《大学突围》读后感','《少年派的奇幻漂流》观后感']
  };

  var YUEBAO_MONTHS = ['2025-08','2025-09','2025-10','2025-11','2025-12','2026-01','2026-02','2026-03','2026-04','2026-05','2026-06'];

  var PRINCIPLE_CATS = [
    {name:'认知工具', count:31}, {name:'AI与工作', count:22}, {name:'人际关系', count:30},
    {name:'自我原则', count:36}, {name:'商业价值', count:16}
  ];

  window.showView = function(name){
    document.querySelectorAll('.view').forEach(function(v){v.classList.toggle('active', v.dataset.view===name);});
    document.querySelectorAll('.navlink').forEach(function(a){a.classList.toggle('on', a.dataset.view===name);});
    document.getElementById('mainNav').classList.remove('open');
    window.scrollTo({top:0,behavior:'smooth'});
  };
  window.toggleMenu = function(){
    document.getElementById('mainNav').classList.toggle('open');
  };

  // 用索引代替把标题直接塞进onclick属性——标题里含引号会把内联onclick的HTML写乱，点击完全没反应
  var ALL_ROWS = [];
  COLLECTIONS.forEach(function(c){
    (ARTICLE_TITLES[c.key]||[]).forEach(function(t){
      ALL_ROWS.push({title:t, coll:c.name, key:c.key});
    });
  });

  window.openArticleByIndex = function(idx){
    var row = ALL_ROWS[idx];
    if(!row) return;
    var meta = ARTICLES_WITH_BODY[row.title];
    var body = meta ? '<p>正文已收录，完整内容见站点原文归档。</p>' : '<p style="color:var(--sub)">内容整理中，稍后补上正文。</p>';
    document.getElementById('article-slot').innerHTML =
      '<button class="back" onclick="showView(\'jinglun\')">← 返回</button>'+
      '<div class="art-meta">'+(meta ? meta.date : '') + ' · '+row.coll+'</div>'+
      '<h1 class="art-title">'+row.title+'</h1>'+
      '<div class="art-body">'+body+'</div>';
    showView('article');
  };

  // 首页：最近几篇（取自清醒纪最新3篇）
  var recentTitles = ['所谓命运，不过是价值观的自动化结算','什么决定你的自我驱动力','这个世界是有生命的：一场名为"自证预言"的漫长回音'];
  document.getElementById('home-articles').innerHTML = recentTitles.map(function(t,i){
    var idx = ALL_ROWS.findIndex(function(r){ return r.title === t; });
    return '<div class="glass card" onclick="openArticleByIndex('+idx+')"><div class="idx">0'+(i+1)+'</div><h3>'+t+'</h3></div>';
  }).join('');

  // 静论页：合集卡片
  document.getElementById('collection-list').innerHTML = COLLECTIONS.map(function(c,i){
    var tops=['linear-gradient(135deg,var(--i1),var(--i3))','linear-gradient(135deg,var(--i2),var(--i4))','linear-gradient(135deg,var(--i3),var(--i1))','linear-gradient(135deg,var(--i4),var(--i2))'];
    return '<div class="glass collcard"><div class="top" style="background:'+tops[i%4]+'"></div><div class="body"><h3>'+c.name+'</h3><p>'+c.desc+' · '+c.count+'篇</p></div></div>';
  }).join('');

  // 静论页：按合集分组展示，日期只显示已确认的，未知的留空
  document.getElementById('article-by-collection').innerHTML = COLLECTIONS.map(function(c){
    var rowsHtml = ALL_ROWS.map(function(r,idx){
      if(r.key !== c.key) return '';
      var meta = ARTICLES_WITH_BODY[r.title];
      var dateStr = meta ? meta.date : '';
      return '<div class="arow" onclick="openArticleByIndex('+idx+')"><span class="t">'+r.title+'</span><span class="d">'+dateStr+'</span></div>';
    }).join('');
    return '<div class="coll-group"><div class="coll-group-head"><h3>'+c.name+'</h3><span>'+c.count+'篇</span></div><div class="glass" style="padding:4px">'+rowsHtml+'</div></div>';
  }).join('');

  // 月报页
  document.getElementById('yuebao-list').innerHTML = '<div class="glass" style="padding:6px">' + YUEBAO_MONTHS.map(function(m){
    return '<div class="grow"><span style="font-weight:700;font-size:13px">'+m+' 月报</span><span class="mono" style="font-size:11px;color:var(--sub)">个人版</span></div>';
  }).join('') + '</div>';

  // 原则库页
  document.getElementById('principle-list').innerHTML = PRINCIPLE_CATS.map(function(c){
    return '<div class="glass tag-card"><div class="n">'+c.count+'</div><div class="l">'+c.name+'</div></div>';
  }).join('');

  function tickClock(){
    var el = document.getElementById('localtime');
    if(!el) return;
    el.textContent = 'local time ' + new Date().toLocaleTimeString('zh-CN',{hour12:false}) + ' · GMT+8';
  }
  tickClock(); setInterval(tickClock, 1000);

  window.setTheme = function(mode){
    document.documentElement.setAttribute('data-theme', mode);
    document.querySelectorAll('#themeToggle span').forEach(function(s){
      s.classList.toggle('on', s.dataset.theme===mode);
    });
    try{ localStorage.setItem('siteTheme', mode); }catch(e){}
  };
  (function initTheme(){
    var saved = 'light';
    try{ saved = localStorage.getItem('siteTheme') || 'light'; }catch(e){}
    setTheme(saved);
  })();

  var backtopBtn = document.getElementById('backtop');
  window.scrollToTop = function(){ window.scrollTo({top:0,behavior:'smooth'}); };
  window.addEventListener('scroll', function(){
    if(!backtopBtn) return;
    backtopBtn.classList.toggle('show', window.scrollY > 400);
  });

  var statNums = document.querySelectorAll('.stat .n[data-target]');
  if(statNums.length && 'IntersectionObserver' in window){
    var animated = false;
    var obs = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting && !animated){
          animated = true;
          statNums.forEach(function(el){
            var target = parseInt(el.dataset.target, 10);
            var n = 0;
            var iv = setInterval(function(){
              n++; el.textContent = n;
              if(n >= target) clearInterval(iv);
            }, 30);
          });
          obs.disconnect();
        }
      });
    }, {threshold:.4});
    obs.observe(statNums[0].closest('.stats'));
  }
})();
