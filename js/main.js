(function(){
  var COLLECTIONS = [
    {key:'qxj', name:'清醒纪', desc:'认知与元认知', count:19},
    {key:'qxqs', name:'且行且思', desc:'成长与自我记录', count:36},
    {key:'nxwn', name:'那些温暖我的人和事', desc:'温情记录', count:4},
    {key:'ds', name:'书籍读后感分享，电影观后感分享', desc:'读书与观影', count:15}
  ];

  // 已存正文的文章（逐步补充）；其余先只有标题，点开显示"内容整理中"
  var ARTICLES_WITH_BODY = {
    '什么决定你的自我驱动力': {collection:'qxj', date:'2026-05-14', body:[
      '我们总喜欢给"半途而废"找一个体面的借口——我是个完美主义者，我只是还没准备好。',
      '但如果你在极度劳累和饥饿的荒野里，你会因为餐具不够精美而拒绝进食吗？',
      '当然不会。',
      '你只会凭着最原始的本能，把一切能补充能量的东西塞进嘴里。',
      '所谓的完美主义，在真正的"刚需"面前，根本不堪一击。',
      '什么决定了我们的自我驱动力？',
      '不仅在于你是否找到了那种"此时此刻不去做，就会极其难受"的生理性饥饿，更在于——对于那些真正有意义、值得去做的事情，你是否有能力主动出击，强行让它成为你的刚需。',
      '##01 完美主义的坟墓，是"非做不可"的决绝',
      '真正的刚需，从来不在乎第一步是否粗糙，而在于你是否已经决定了迈出那一步。',
      '最近为了降低日常决策的摩擦力，我用agent搭建了一套属于自己的任务系统，从零开始，一点点打磨，从最初的思想雏形，到现在的可操作界面，数不清更替了多少个版本。',
      '刚开始对AI的流程设计一窍不通，指令有时粗糙得像在自言自语，但我没有等。',
      '因为对我而言，让那个想法烂在脑子里，比做得不够好要难受得多。',
      '这种"非做不可"的决绝，同样写在我待人的方式里。',
      '面对每位阶段性陪伴的挚友，我总是不自觉地拿出我最好的东西，哪怕知道彼此之间终有一天会分别。从前我只是把这解释为分开后无愧于心，现在找到了更准确的解释——这不过是我做事原则的一种延续：',
      '要么不做，要做就做到最好。',
      '不去精打细算这段关系能走多远，我只知道，在那个当下，如果我没有把能力范围内最好的给对方，我的内心会留下无法弥补的遗憾。',
      '##02 真正的驱动力，是把"值得做"强行变成"必须做"',
      '为什么有些事我们总是一拖再拖？',
      '我买回来的《富爸爸穷爸爸》在宿舍落灰许久，从小喜欢的瘦金体字帖写了两天就搁置，面对某些毫无头绪的学科也总觉得学不下去。',
      '举出这些反例，并不是为了给半途而废找理由，而是为了刺透一个残酷的真相：',
      '如果你不知道一件事对你到底有什么真实的用处，它永远只是一种"有了会更好"的伪需求，随时都会被大脑抛弃。',
      '真正有意义的事情，绝不能只停留在"顺其自然"的阶段，你必须想尽办法把它融入你的生活，强行把它变成刚需。',
      '就拿学英语来说，为什么应试教育学了十几年都没学好？因为你只在每周几节课上被迫面对它，它根本不在你的真实生活里。',
      '有人说AI翻译那么发达，为什么还要学英语？我很喜欢的一位博主直接反问：你用美国人做的工具，怎么能不了解英语？',
      '以前我也是这样，直到我开始看美剧，阅读英文原著——当我把英语彻底融入生活，它不再是痛苦的坚持，而是我触碰世界的刚需。',
      '##03 等待的双重折叠：行动与积累',
      '很多人喜欢把"等到我XXX，再……"当作拖延的借口。但在我看来，等待被折叠成了截然不同的两面。',
      '一种等待，是不可饶恕的错失。',
      '19岁的我，为了去长春诉说很深的思念，选择了立刻出发；清明假期，为了回家多陪陪姥姥姥爷，我宁愿从沈阳中转飞回呼伦贝尔。',
      '我极其清醒地知道，有些爱和勇气是有保质期的，我怕极了"子欲养而亲不待"。趁着还能走很长的路，趁着那股不顾一切的心气还在，立刻去做。',
      '我在月度报告里写过："少年心气，是不可再生之物。"',
      '因为我今天在19岁做到了，我20岁的时候，那份锐利和果决才会依然鲜活。',
      '但另一种等待，是必须承受的积累。',
      '能力的提升、资本的积累、知识的沉淀——这些绝非一朝一夕能完成。它是悬在头顶的星辰，指导着我每天脚踏实地地靠近。这才是值得等待的"刚需"。',
      '优秀是一种习惯。',
      '这话肯定是对的，因为所有真正的刚需，最终都会变成习惯——你不需要再问自己为什么要做，只是如果不做，就会难受。'
    ]},
    '所谓命运，不过是价值观的自动化结算': {collection:'qxj', date:'2026-05-12', body:[
      '提到"命运"，我们第一反应往往是某种宏大又无力的东西——天注定，改不了。',
      '但有一个极其冷酷的事实：哪有什么宿命，所谓命运，不过是你每一次选择时种下的因果。',
      '而决定你如何选择的，是价值观。',
      '李笑来对价值观给过一个我觉得很精确的定义：什么是更好的，什么是最好的。',
      '不是信念，不是原则，是一套排序系统。',
      '当这套排序足够清晰，选择就不再是选择——它是排序系统在具体情境下的自然输出。',
      '我们常常惊叹于某些人做决定又快又准，几乎不消耗算力。但那不是什么直觉天赋，而是他们早就把90%的算力花在日常打磨价值观上，等真正的时刻到来，查表就够了。',
      '甚至，有些选项从一开始就不配出现在你的试卷上。',
      '##一、选择题做对了，才谈得上解答题',
      '我们常把成功理解为把一件事做得更漂亮——比的是解答题。但解答题做得再好，方向错了也是白费。',
      '用一个比喻：解答题做得好，只能保证你在一辆不知开往何处的列车上，把座位擦得更干净。而选择题做得好，决定了你到底要不要上这辆车。',
      '大学招新时，我文笔不差，所有人都觉得我该去学院文编部。了解后发现，那里写的基本是活动通知、会议记录，不考验叙事，也不是我擅长和喜欢的东西。于是我没填，导员来游说，我也拒绝了。',
      '代价是：名单出来，室友们都有了各自的归属，只有我不在。会有那么一点孤独感。但那种因极度清醒而换来的松弛，很快就压过了那点孤独。这简直太爽了。',
      '在我的操作系统里，注意力与时间主权有绝对的优先级。基于这个排序，很多看似需要权衡的选择会瞬间变得清晰——不是我想得透彻，是排序早就完成了，遇到具体情况只是执行。',
      '##二、题目本身成立吗',
      '社会最狡猾的地方在于，它经常给你塞一张印着ABCD四个选项的卷子，逼着你在里面选一个"看起来没那么糟"的。大多数人会立刻调用全部算力，开始权衡利弊。',
      '但有一种更根本的问题没有被问出来：这个前提成立吗？我一定要在这里面选吗？',
      '前段时间读塔勒布的《黑天鹅》，里面有一道硬币题——',
      '假设硬币是公平的，把它抛出99次，每次都是正面，下一次得到反面的概率是多少？',
      '我把这道题发给一个朋友，她没有直接回答0.5，而是停了一下，给出了一个更深入的、质疑题目前提本身的回答——她的答案比书里的解释还要准确。因为书里在回答那道题，她在质疑那道题成不成立。',
      '这就是元认知在做的事：不是在选项里找最优，而是先跳出来问，这个框架本身对吗？',
      '下棋时，如果只盯着自己的棋，每一步都在算怎么吃对方的子，你得到的是局部最优——但那一步，可能恰好是对方希望你走的。你以为在博弈，其实在配合。要看清全局，得先抬起头，同时看两个人的棋盘。',
      '曾有一天下午，学院同时安排了座谈会和读书会，时间完全重合，大多数人在纠结二选一。我请假，去图书馆写了篇文章。不选择也是一种选择；在给定选项里选，同样也是。',
      '##三、价值观的磨砺，在每一个微小的取舍里',
      '价值观不是靠想大问题打磨出来的，是从每一个微小的选择里长出来的。',
      '差不多，其实就是差很多。每次"算了，无所谓"，都在把下一次拒绝的门槛往上推。我在小事上如果没有自己的底线，麻烦会越来越多——不是别人变得更过分，是我自己在反复降低被打扰的成本。',
      '高中时我有很长一段时间不敢在公开场合发言。百日誓师时，我主动举手，拿了话筒。站起来那一刻是什么感觉，我没法准确描述，但我知道：坐着的人是不会知道的。',
      '你只有体验过一件事，才知道它好不好。只有知道它好，才会去追求它。有些东西不是多想就能有动力，是必须先走进去那一步，世界才会开门。没有得到过，你不知道好的是什么样子，也就不会有动力去追。',
      '关于真诚，总有人说别对所有人都那么真诚，容易吃亏。我不这么看。',
      '我选择真诚，是因为这个创造价值的过程本身就能给我带来内在的愉悦。至于对方能不能接得住，那是对方的课题，与我无关。把真诚当成一种筛选机制，配不上的自然会被过滤掉。只要我不觉得这是损失，就没有人能伤害到我。',
      '你的价值观好不好，不需要向任何人证明。当你的生活开始呈现出秩序感，当你不再因别人的眼神而犹疑，当你感受到那种持续增长且不费力的松弛感——世界已经在替你结算了。',
      '命运是结果，选择是路径，价值观是地图。',
      '地图画清楚了，路走起来不一定更轻松，但不会走丢。'
    ]},
    '这些根，在你那里': {collection:'nxwn', date:'2026-05-10', body:[
      '不知道是不是这代人的通病——',
      '写过朋友，写过老师，写过那些在某段时光里照亮过我的人，下笔的时候总有很多可以说。但轮到写家人，忽然不知道从哪里开口。',
      '不是没感情，是不知道用什么姿态。',
      '跟同辈人在一起，我们是平等的，可以以"我看见你了"的方式去记录，去分析，去说某个细节里藏着什么。但对父母，这种姿态总觉得别扭。要么太肉麻，要么太疏远，说感谢像是还债，写分析像是审判，左右都不是。',
      '我想了很久，找到一种对我来说最自然的方式——',
      '不写她这个人，写我长成了什么样，然后告诉她，那些根在哪里。',
      '有一批家庭录像，拍的是我刚会说话那阵子。爸爸拿着摄像机，镜头对着我，然后是妈妈的声音："背个唐诗。"我就在那背，背到某一句卡住了，妈妈说开头的一个字，我又接上了。',
      '这样的视频有很多。',
      '三四岁，我开始背弟子规、千字文，几乎倒着背也不成问题。再大一点，背古诗，妈妈跟我比赛，故意慢一点，让我先背完，她再接上。练字帖，宋词一册，唐诗一册，写完一首，背一首。诗词大会、成语大会，我们一块看。妈妈给我买了好多好多书。',
      '我不知道自己是从什么时候开始喜欢文字的，但那个口子，是她打开的。',
      '刚上幼儿园的时候，我还不会写字。妈妈买了一本日记本，让我说，她替我写——宝宝口述，妈妈代笔。每天在幼儿园发生了什么，回来就跟她讲，她帮我记下来。做得好，贴一朵小红花；做得不好，点一个哭脸。那个日记本现在还保存着。',
      '后来会写字了，就自己写。每次出去旅游，回来必写游记，查大量资料，把导游讲的历史文化记得很详细。去过的博物馆——国博、省博、陶瓷博物馆，拍一堆照片，一字一字地记下来。那些游记现在都还在，去过的每一个地方都有。',
      '我现在的记录习惯，大概就是从那一朵朵小红花开始的。',
      '大连、杭州、北京、厦门、哈尔滨……这些城市，我在很小的时候就去过了。爸不喜欢旅游，所以都是妈妈一个人带着我，负责订酒店、跟团、找景点，领着那时候还很小的我走很多很多的路。八年，年年出发。',
      '疫情之后就没再出去了。现在放假，我不太想去景点，只想回家。大概是因为妈妈带我把想看的风景，在我还小的时候就看过了。',
      '妹妹从小就开始补课。我几乎没有。',
      '不是父母不管，是妈妈有她自己的一套。考试考完了，要写：错在哪里，为什么错，怎么改正。每个假期，妈妈陪着我，安排任务，带着我过。周围的人都去补英语，我没有——妈妈是小学英语老师，我的英语启蒙是她亲自教的。',
      '我后来能自己管好自己，是因为她在最开始，帮我养成了怎么学习的样子。',
      '这样列出来，我才意识到，我现在很多东西的根都在这里。',
      '喜欢读书，来自她给我买的那些书。喜欢记录，来自那本口述代笔的日记，和那一朵朵小红花。见过世面，来自八年的旅行。会自己学习，来自每个假期的陪伴。',
      '说感谢，总觉得太轻。但如果感谢是一种证明，也许最好的证明就是：我把那些东西都长在身上了，还在继续用。',
      '妈妈，母亲节快乐。妈妈，我爱你。'
    ]}
  };

  var ARTICLE_TITLES = {
    qxj: ['寻找贵人只是手段，成为自己的贵人才是终局','七年即一生：让肉体活在当下，让思维活在未来','安全感，是你人生最隐蔽也最沉重的枷锁','为什么我说"付费"，是你在这个时代能捡到的最大便宜？','警惕注意力的流失：我与大脑之间的一次夺权','我是怎样看待资本','警惕落后：为什么"差不多"，是你人生最致命的幻觉？','把人生玩成无限游戏：从单维内卷，到多维竞争','开启元认知：觉今是而昨非，才是最顶级的浪漫','反人性的刻意练习：如何用元认知，夺回人生的"上帝视角"','送你一把万能钥匙：所有问题的终极解法，是不和死锁纠缠','放弃"坚持"：顶级玩家从不谈毅力','最可怕的错过，是在低维世界里完成了"逻辑自洽"','这个世界是有生命的：一场名为"自证预言"的漫长回音','彻底戒掉抱怨：世界上有问题，就一定有答案','看见别人的好，是你对自己世界的顶级"筛选机制"','正确本身一文不值，除非你推下筹码','所谓命运，不过是价值观的自动化结算','什么决定你的自我驱动力'],
    qxqs: ['高考之后的假期，我想做这些','学历和能力，哪个更重要？','重视圈层','净化圈层：未来我会删掉微信一半联系人（上）','净化圈层：未来我会删掉微信一半联系人（下）','伴随一生的技能：事业有成的基本功','从壹到贰的晋升之路（社交篇)','从壹到贰的晋升之路（自我认知篇）','从壹到贰的晋升之路（大学认知篇）','自我认知（kyo哥讲课实录及启发）','自由（kyo哥讲课实录及启发）','相遇的意义在于生命的重合','从来没有真正的感同身受','第一次独立就医是什么体验？','第一次独自远行','我们正在失去"离别"的能力，以及它背后的深情','那场不被理解的送别，等来了一次"跑偏"的迎接','人生的第18年，我开始思考目标感','原来最好的关系，是善意的相互吸引','为什么我要做这个公众号？|写给不甘沉默的灵魂','在罗斯福广场，我找到了高级自洽的答案','我们应该如何使用AI？','高考结束后，我用人生月报系统对抗离别','2025的最后一篇文章，写给18岁的自己','我们最需要的，其实是平静','真正的富养，是把自己重养一遍','18岁，我在广州IFC看到了另一个世界','读完《幸福的勇气》：所谓爱，其实是一场"不死不休"的冒险','翻完小学6年的日记：如果不写下来，谁还记得这些"笨拙"的证据？','敢于All in的人，才有资格说青春比小说精彩','如果回到高考后，我不信我会变成今天的样子','19岁，我在姥姥家的卧室里，重新以此定义"年味"','当黑天鹅掠过身体：在强制"关机"的边缘，我确认了人生剧本','一道概率题带来的交锋：在别人给定的框架外思考','再度元宵，别样体悟','《智人之上》：当机器开始拥有"自我"，人类的退路在哪里？'],
    nxwn: ['我的"神仙"语文老师，和那句迟到的"谢谢"','我的"神仙"班主任，把全班都"宠"哭了','都不必回头，我们就在彼此的副驾','这些根，在你那里'],
    ds: ['阅读分享第一期：吴三桂——无处收留','《穿普拉达的女王》观后感','《活法》读后感','《埃隆马斯克传》读后感','《了凡四训》读后感','《斯坦福大学人生设计课》读后感','《成为1%》读后感','《千年悖论》读后感','《洪武》读后感','《饥饿的盛世》读后感','《把时间当作朋友》读后感','《新生——七年就是一辈子》读后感','《个体崛起》读后感','《大学突围》读后感','《少年派的奇幻漂流》观后感']
  };

  var YUEBAO_MONTHS = [
    {m:'2025-08', theme:'备齐', s:'暑假冲刺小组答辩，读完12本书约236万字，为开学做好准备'},
    {m:'2025-09', theme:'新生', s:'到大连报道入学，军训季，第一次经历的事情很多'},
    {m:'2025-10', theme:'自愈', s:'国庆回家团聚，一个人慢慢走出低谷'},
    {m:'2025-11', theme:'独行', s:'一个人探索大连，逃离校园找到自己的自习节奏'},
    {m:'2025-12', theme:'铺开', s:'和室友们从无到有，把宿舍生活搭建起来'},
    {m:'2026-01', theme:'登机牌', s:'一个人走完整个寒假，把真实行程做成了登机牌形式的记录'},
    {m:'2026-02', theme:'黑天鹅·眉批', s:'意料之外的事分量比计划里的更重，开始学编程'},
    {m:'2026-03', theme:'搭', s:'连续用专栏概念写了14篇公众号文章，读完《智人之上》，开始用AI Agent'},
    {m:'2026-04', theme:'赴', s:'19岁的第一个月，很多"想到就做"的事情落了地'},
    {m:'2026-05', theme:'赠', s:'五一独自去长春待了十二小时，母亲节做了一份网页送给妈妈'},
    {m:'2026-06', theme:'少年游', s:'毕业季，月报/投资/消费三套系统相隔十天独立建立，原则库从82条长到135条'}
  ];

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
    var body = meta ? meta.body.map(function(p){
      if(p.indexOf('##')===0) return '<h3 class="art-subhead">'+p.slice(2)+'</h3>';
      return '<p>'+p+'</p>';
    }).join('') : '<p style="color:var(--sub)">内容整理中，稍后补上正文。</p>';
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
  document.getElementById('yuebao-list').innerHTML = YUEBAO_MONTHS.map(function(m){
    return '<div class="glass" style="padding:16px 20px;margin-bottom:12px"><div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:6px"><h3 style="font-size:14.5px;margin:0;font-weight:800">'+m.m+' · 「'+m.theme+'」</h3></div><p style="font-size:12.5px;color:var(--sub);margin:0;line-height:1.6">'+m.s+'</p></div>';
  }).join('');

  // 原则库页
  document.getElementById('principle-list').innerHTML = PRINCIPLE_CATS.map(function(c){
    return '<div class="glass tag-card"><div class="n">'+c.count+'</div><div class="l">'+c.name+'</div></div>';
  }).join('');

  // 现状页：来自任务系统导出快照（2026-07-07）
  var STATUS_LABELS = [
    {l:'老友记', v:'S02E01'},
    {l:'在读', v:'《纳瓦尔宝典》第5篇'},
    {l:'静论写作', v:'尚未设置合集进度'}
  ];
  var STATUS_BARS = [
    {l:'数学分析', done:0, total:9},
    {l:'金融大数据', done:0, total:5},
    {l:'金融科技导论 · 练习', done:2, total:6},
    {l:'英语四级', done:0, total:71}
  ];
  var statSyncEl = document.getElementById('status-sync-time');
  if(statSyncEl) statSyncEl.textContent = '数据同步于 2026-07-07（手动，非实时）';
  document.getElementById('status-labels').innerHTML = STATUS_LABELS.map(function(s){
    return '<div class="grow"><span style="font-weight:700;font-size:13px">'+s.l+'</span><span style="font-size:12.5px;color:var(--sub)">'+s.v+'</span></div>';
  }).join('');
  document.getElementById('status-bars').innerHTML = STATUS_BARS.map(function(s){
    var pct = s.total ? Math.round(s.done/s.total*100) : 0;
    return '<div class="pv1-row"><div class="pv1-top"><span>'+s.l+'</span><span class="grad-text" style="font-weight:800">'+s.done+'/'+s.total+'</span></div><div class="pv1-track"><div class="pv1-fill" style="width:'+pct+'%"></div></div></div>';
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
