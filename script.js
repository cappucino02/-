var data = [
    // 示例数据
    {
        chinese: "休克",
        japanese: "ショック",
        explanation_chinese: "机体遭受强烈致病因子侵袭下，有效循环血量急剧减少，组织血液灌流量严重不足，引起细胞缺血缺氧，以致各重要生命器官的功能，代谢障碍或结构损害的全身性危重病理过程。",
        explanation_japanese: "急激な末梢血液循環の不全状態。血圧および体温の低下、意識障害等を来し、重症の場合、脳・心臓・腎臓などの機能障害をひき起こして死に至る。",
        corresponding_expression_chinese: "在肺炎治疗过程中出现休克状态，发现血液浓缩并出现低白蛋白血症。",
        corresponding_expression_japanese: "肺炎治療の経過中にショック状態となり，急激に進行する血液濃縮所見と低アルブミン血症を認めた",
        application_scenario_chinese: "医疗领域，医学诊断。常见因失血、烧伤、感染、 过敏或心源性休克而表现表情淡漠，皮肤湿冷，烦躁不安，血压下降的症状的病人",
        application_scenario_japanese: "医療分野では医療診断です。出血、火傷、感染症、アレルギー、心因性などが原因です。ショックで表情が薄くなったり、肌が冷たくなったり、イライラしたり、血圧が下がったりといった症状を訴える人もいます。",
        source: "日本内科学会雑誌，Volume 109 , Issue 4 . 2020. PP 792-797",
        corresponding_expression_source: "日本内科学会雑誌，Volume 109 , Issue 4 . 2020. PP 792-797"
   
    },
    {
        "chinese": "坐药，栓剂",
        "japanese": "座薬ざやく",
        "explanation_chinese": "药物与适宜基质制成的具有一定形状的供人体腔道内给药的固体制剂",
        "explanation_japanese": "医薬品を基剤に均等に混和して一定の形状に成型して、肛門または膣に適用する半固形の外用剤で、体温により溶けるか、軟化するか、又は分泌液で徐々に溶けるもしくは分散されるものと定義されている",
        "corresponding_expression_chinese": "请在晚上临睡前，把栓剂放进肛门里",
        "corresponding_expression_japanese": "夜寝る前に、座薬を入れてください",
        "application_scenario_chinese": "生物制药",
        "application_scenario_japanese": "バイオ製薬です。",
        "source": "医疗术语语句集",
        "corresponding_expression_source": NaN
    },
    {
        "chinese": "注射",
        "japanese": "注射[ちゅうしゃ]",
        "explanation_chinese": "用针头将药物直接注入体内的方法。",
        "explanation_japanese": "注射針を用いて直接体内に薬剤を注入する投与法。",
        "corresponding_expression_chinese": "将注射针插入静脉。",
        "corresponding_expression_japanese": "注射針を静脈りゅうのなかに刺します。",
        "application_scenario_chinese": "护理操作",
        "application_scenario_japanese": "ケア作業の一種です。",
        "source": "医疗术语 语句集",
        "corresponding_expression_source": " 新見正則|著   下肢静脈りゅうを防ぐ・治す "
    },
    {
        "chinese": "孕吐",
        "japanese": "悪阻「つわり」",
        "explanation_chinese": "是指女性怀孕早期,出现的消化道症状,表现为剧烈的恶心、呕吐,不喜欢吃饭,甚至闻到食物之后,就会有呕吐的情况",
        "explanation_japanese": "悪阻とは中国医学の用語で、妊娠初期にみられる消化器系を中心とした症状",
        "corresponding_expression_chinese": "关于妊娠孕吐的味觉异常的研究",
        "corresponding_expression_japanese": "妊娠悪阻における味覚異常に関する研究",
        "application_scenario_chinese": "医学诊断、症状说明",
        "application_scenario_japanese": "医学診断、症状説明",
        "source": "医疗术语语句集",
        "corresponding_expression_source": "现代日汉双解词典》外教社"
    },
    {
        "chinese": "引流",
        "japanese": "ドレイン",
        "explanation_chinese": "依靠吸引力或重力从一个体腔或伤口抽取液体的行为、过程和办法 ",
        "explanation_japanese": "吸引力や重力に依存して体や傷から液体を抽出することです",
        "corresponding_expression_chinese": "针对积存于体腔内、关节内、器官或组织的液体(包括血液、脓液、炎性渗液、胆汁、分泌液等)引离原处和排出体外，以防止在体腔或手术野内蓄积，继发压迫症状、感染或组织损害",
        "corresponding_expression_japanese": "体腔内、関節内、器官または組織に蓄積された液体(血液、膿、炎症性浸出液、胆汁、分泌液などを含みます)は、体腔内または手術野に蓄積され、圧迫症状、感染、または組織の損傷が続くことを防ぐために、元の場所から体外に排出されます。",
        "application_scenario_chinese": "护理操作",
        "application_scenario_japanese": "ケア作業の一種です。",
        "source": "中国全科医学",
        "corresponding_expression_source": "中国全科医学"
    },
    {
        "chinese": "阴囊水肿",
        "japanese": "陰嚢水腫",
        "explanation_chinese": "阴囊水肿，在胚胎时期，腹股沟处有一“腹股鞘状突”，可以帮助睾丸降入阴囊或子宫圆韧带的固定。有些婴儿出生后，此鞘状突关闭不完全，导致腹腔内的腹腔液进入阴囊内，形成阴囊水肿。",
        "explanation_japanese": "陰嚢水腫(いんのうむくみ)とは、胚の時期に股間にある「腹股鞘状突起」のことで、睾丸が陰嚢や子宮の円靭帯を固定するのに役立ちます。赤ちゃんの中には、この鞘状突起が不完全に閉まり、腹腔内の腹腔液が陰嚢内に入って陰嚢水腫になる人がいます。",
        "corresponding_expression_chinese": "阴囊肿大是最常见的主诉。无痛性的原因有睾丸肿瘤、阴囊水肿、精索静脉曲张、腹股沟疝等。",
        "corresponding_expression_japanese": "陰嚢腫大は最も多い訴えである．無痛性の場合，原因として精巣腫瘍，陰嚢水腫，精索静脈瘤，鼠径ヘルニアなどがある．",
        "application_scenario_chinese": "医学诊断、症状说明",
        "application_scenario_japanese": "医療診断です。症状を説明する時に使われることが多いです。",
        "source": "腎・泌尿器疾患",
        "corresponding_expression_source": "学習研究社2003東間紘，宝塚市立病院看護部|監修"
    },
    {
        "chinese": "意识障碍",
        "japanese": "意識障害",
        "explanation_chinese": "意识是指个体对外界环境、自身状况以及它们相互联系的确认。意识活动包括觉醒和意识内容两方面。当上行网状激活系统和大脑皮质的广泛损害可导致不同程度觉醒水平的障碍，而意识内容变化则主要由大脑皮质病变造成。",
        "explanation_japanese": "意识是指个体对外界环境、自身状况以及它们相互联系的确认。意识活动包括觉醒和意识内容两方面。当上行网状激活系统和大脑皮质的广泛损害可导致不同程度觉醒水平的障碍，而意识内容变化则主要由大脑皮质病变造成。",
        "corresponding_expression_chinese": "另外，偶尔大量服药等情况下也会有意识障碍。",
        "corresponding_expression_japanese": "また，まれに大量に薬を飲んでいる場合なども意識障害が存在します。",
        "application_scenario_chinese": "医用术语",
        "application_scenario_japanese": "医療用語です",
        "source": "ケアを受ける人の心を理解するために",
        "corresponding_expression_source": "中央法規出版2005渡辺俊之|著"
    },
    {
        "chinese": "意识不清",
        "japanese": "意識不明",
        "explanation_chinese": "是指患者的意识状态轻度抑制，出现抽象思维和信息处理缓慢，是较轻但又较广泛的脑功能障碍。意识不清可出现于脑膜炎恢复期、较重的头部外伤以及其他脑病等；",
        "explanation_japanese": "意識状態が軽度に抑制され、抽象的な思考や情報処理が遅くなるという、軽いながらも幅広い脳機能の障害です。意識がはっきりしないのは髄膜炎の回復期、より重い頭部の外傷と他の脳の病気などで現れることができます;",
        "corresponding_expression_chinese": "不知是幸运还是不幸，昌弘已经陷入了昏迷状态。",
        "corresponding_expression_japanese": "幸か不幸か、昌弘はすでに意識不明の状態だった。",
        "application_scenario_chinese": "医用术语",
        "application_scenario_japanese": "医療用語です",
        "source": "週刊朝日",
        "corresponding_expression_source": "朝日新聞社2001年7月13日号（第106巻第31号、通巻4449号）"
    },
    {
        "chinese": "异常细胞",
        "japanese": "異常細胞",
        "explanation_chinese": "异常细胞是指细胞形态、大小出现异常的细胞，通常包括退变细胞、炎性细胞、肿瘤细胞三类。",
        "explanation_japanese": "異常細胞とは、細胞の形や大きさに異常が生じた細胞のことで、通常は退変細胞、炎症性細胞、腫瘍細胞の3種類があります。",
        "corresponding_expression_chinese": "正确地说，是指不被认可为癌细胞的异常细胞出现的状态。如果程度较轻，会随着岁月的流逝而消失。",
        "corresponding_expression_japanese": "正しくは、異形成上皮といって、がん細胞とは認められない異常細胞が出現してしまう状態です。その程度が軽い場合は、年月と共に消えてしまいます。",
        "application_scenario_chinese": "医用术语",
        "application_scenario_japanese": "医療用語です",
        "source": "がん治療最前線",
        "corresponding_expression_source": "岩波書店1991"
    },
    {
        "chinese": "遗尿症",
        "japanese": "遺尿症",
        "explanation_chinese": "遗尿症多指不能自主控制排尿的行为",
        "explanation_japanese": "遺尿症とは、排尿を自分でコントロールできないことを指します。",
        "corresponding_expression_chinese": "有一种“残疾人”比其他残疾人(例如遗尿症者或厌食症者几乎不会感到羞耻)更容易感到羞耻，",
        "corresponding_expression_japanese": "ある種の「障害者」は、他の障害者より（例えば遺尿症者や拒食症者はほとんど恥を感じない）、恥を感じやすく、",
        "application_scenario_chinese": "医学诊断、症状说明",
        "application_scenario_japanese": "医療診断です。症状を説明する時に使われることが多いです。",
        "source": "狂人の二つの体制",
        "corresponding_expression_source": "河出書房新社2004"
    },
    {
        "chinese": "遗传因子",
        "japanese": "遺伝子",
        "explanation_chinese": "遗传因子，即基因。具体地说，就是生物体表现出来的性质和形状，比如大小、高矮、颜色等。“性状”是人们感觉到的表面现象，它们的重复出现具有某种内在的原因。",
        "explanation_japanese": "遺伝子、つまり遺伝子です。具体的には、大きさ、高さ、色など、生物体が表現している性質や形です。「形質」は人が感じる表面的な現象であり、それが繰り返されることには何らかの内的な原因があります。",
        "corresponding_expression_chinese": "而且，染色体是遗传信息的载体，基因排列在染色体上。",
        "corresponding_expression_japanese": "そして、染色体こそが、遺伝情報を担っているもので、遺伝子はその上に並んでいるというわけである。",
        "application_scenario_chinese": "医用术语",
        "application_scenario_japanese": "医療用語です",
        "source": "遺伝子情報は人類に何を問うか",
        "corresponding_expression_source": "ウェッジ1999柳川弘志|著"
    },
    {
        "chinese": "胰岛素",
        "japanese": "インスリン",
        "explanation_chinese": "胰岛素是由胰脏内的胰岛β细胞受内源性或外源性物质如葡萄糖、乳糖、核糖、精氨酸、胰高血糖素等的刺激而分泌的一种蛋白质激素。胰岛素是机体内唯一降低血糖的激素，同时促进糖原、脂肪、蛋白质合成。外源性胰岛素主要用来治疗糖尿病。",
        "explanation_japanese": "インスリンは、膵臓にある膵島β細胞が、ブドウ糖、乳糖、リボース、アルギニン、グルカゴンなどの内因性または外因性物質から刺激されて分泌されるタンパク質ホルモンです。インスリンは体内で唯一血糖値を下げるホルモンであり、グリコーゲン、脂質、タンパク質の合成を促進します。外因性インスリンは主に糖尿病の治療に使われます。",
        "corresponding_expression_chinese": "对胰岛素和血糖值有很多疑问。",
        "corresponding_expression_japanese": "インスリンや血糖値についての疑問は多くもっているようだった。",
        "application_scenario_chinese": "蛋白质激素",
        "application_scenario_japanese": "タンパク質ホルモンです",
        "source": "糖尿病とともに生きる人へのナーシング・アプローチ",
        "corresponding_expression_source": "メディカ出版2004佐藤昭枝|監修;米田昭子|編"
    },
    {
        "chinese": "医疗工作者",
        "japanese": "医療従事者",
        "explanation_chinese": "医疗工作者是从事医疗护理工作的专业人员和医疗护理工作的服务提供者的总称。医疗工作者指的是在医疗单位工作人员，从事医疗事务工作。主要包含：医疗防疫人员，药剂人员，护理人员和其他技术人员",
        "explanation_japanese": "医療従事者とは、介護医療に従事するプロフェッショナルと、介護医療のサービス提供者の総称です。医療従事者とは、医療現場で働く人のことで、医療事務に従事しています。主に含まれます:医療防疫スタッフ、薬剤スタッフ、看護スタッフとその他の技術スタッフ。",
        "corresponding_expression_chinese": "也就是说，无论是转基因生物还是非转基因生物，都是麦当劳化现象的一部分。",
        "corresponding_expression_japanese": "患者と医療従事者との間の真の信頼関係を築いていくことが可能となる",
        "application_scenario_chinese": "医用术语",
        "application_scenario_japanese": "医療用語です",
        "source": "さらに身近で信頼される司法をめざして",
        "corresponding_expression_source": "現代人文社;大学図書(発売)2002"
    },
    {
        "chinese": "一氧化碳中毒",
        "japanese": "一酸化炭素中毒",
        "explanation_chinese": "一氧化碳中毒是含碳物质燃烧不完全时的产物经呼吸道吸入引起中毒，俗称煤气中毒。中毒机理是一氧化碳与血红蛋白的亲合力比氧与血红蛋白的亲合力高200～300倍，所以一氧化碳极易与血红蛋白结合，形成碳氧血红蛋白，使血红蛋白丧失携氧的能力和作用，造成组织窒息。对全身的组织细胞均有毒性作用，尤其对大脑皮质的影响最为严重。",
        "explanation_japanese": "一酸化炭素中毒は、炭素を含む物質が不完全燃焼した際に発生する産物を気道を通じて吸い込む中毒で、俗にガス中毒と呼ばれます。中毒机構は、ヘモグロビンと一酸化炭素のヘモグロビンの親和性よりも200 ~ 300倍高いので、一酸化炭素は非常にヘモグロビンと結合しやすく、炭素酸素ヘモグロビンを形成し、ヘモグロビンが酸素を運ぶ能力と作用を喪失し、組織の窒息をもたらします。全身の組織細胞に毒性がありますが、特に大脳皮質に強い影響を与えます。",
        "corresponding_expression_chinese": "另外，在烧伤死亡中，实际死因是一氧化碳中毒，或者因一氧化碳中毒昏迷而烧伤死亡的人也相当多。",
        "corresponding_expression_japanese": "なお，火傷死の中には，実際には一酸化炭素中毒が死因であったもの，あるいは一酸化炭素中毒で失神状態にあって火傷死に至ったものもかなり多く含まれているものと考えられる。",
        "application_scenario_chinese": "医学诊断、症状说明",
        "application_scenario_japanese": "医療診断です。症状を説明する時に使われることが多いです。",
        "source": "消防白書",
        "corresponding_expression_source": "大蔵省印刷局1976消防庁"
    },
    {
        "chinese": "一卵双生儿",
        "japanese": "一卵性双生児",
        "explanation_chinese": "一卵双生主要是一个精子和一个卵子，结合以后形成一个受精卵，这个受精卵又一分为二，形成二个胚胎，所以也可能是一个胎盘，也可能是二个胎盘。主要特点就是性别是完全相同的，并且外貌也非常相近，几乎是一模一样，这就是一卵双生的主要特点。",
        "explanation_japanese": "一卵性双生児は、主に精子と卵子が一つ合体して一つの受精卵ができ、その受精卵が二つに割れて二つの胚ができるので、胎盤が一つの場合もあり、胎盤が二つの場合もあります。主な特徴は性別が全く同じであること、そして外見も非常に似ていて、ほとんど同じであること、これは一卵性双生児の主な特徴です。",
        "corresponding_expression_chinese": "但是，即使是基因完全相同的同卵双胞胎，也有可能会患上这种疾病。",
        "corresponding_expression_japanese": "ただ、全く同じ遺伝子をもっている一卵性双生児でも、２人ともナルコレプシーが発症する",
        "application_scenario_chinese": "医学诊断",
        "application_scenario_japanese": "医療診断です。",
        "source": "きょうの健康（ＮＨＫテレビ放送テキスト）",
        "corresponding_expression_source": "日本放送出版協会2002年6月号（通巻171号）"
    },
    {
        "chinese": "压迫性骨折",
        "japanese": "圧迫骨折",
        "explanation_chinese": "压迫性骨折就是压缩性骨折，主要是指腰椎或者胸椎由于纵向的暴力及患者本身骨质疏松的原因导致的一种椎体变形性的骨折。",
        "explanation_japanese": "圧迫骨折は圧縮骨折で、主に腰椎または胸椎の縦方向の暴力と患者自身の骨粗鬆症の原因による椎体変形性の骨折です。",
        "corresponding_expression_chinese": "骨、关节功能、脊椎的压迫性骨折等导致身体前倾，容易失去平衡",
        "corresponding_expression_japanese": "骨・関節機能・脊椎の圧迫骨折などで前かがみになり，バランスを崩しやすい",
        "application_scenario_chinese": "医学诊断、症状说明",
        "application_scenario_japanese": "医療診断です。症状を説明する時に使われることが多いです。",
        "source": "高齢者のケア",
        "corresponding_expression_source": "学習研究社2001中田まゆみ，岡島重孝|編"
    },
    {
        "chinese": "压疮",
        "japanese": "褥瘡[じょくそう]",
        "explanation_chinese": "局部组织长期受压，发生持续 缺血 、缺氧、 营养不良 而致组织溃烂坏死。",
        "explanation_japanese": "局部の組織は長期的に圧力を受けて、発生し続けて血が足りなくて、酸素が足りなくて、栄養不良になります腐って壊死します組織",
        "corresponding_expression_chinese": "压力因素，营养状况，皮肤抵抗力降低",
        "corresponding_expression_japanese": "ストレス要因、栄養状態、皮膚の抵抗力の低下などです",
        "application_scenario_chinese": "医学诊断、症状说明",
        "application_scenario_japanese": "医療診断です。症状を説明する時に使われることが多いです。",
        "source": "物理医学康复名词",
        "corresponding_expression_source": "物理医学与康复名词"
    },
    {
        "chinese": "血压",
        "japanese": "血圧けつあつ",
        "explanation_chinese": "血液对血管壁的压力",
        "explanation_japanese": "血管の壁に及ぼす血液の圧力。",
        "corresponding_expression_chinese": "平时血压大约多少?",
        "corresponding_expression_japanese": "ふだん血圧はどれくらいですか。",
        "application_scenario_chinese": NaN,
        "application_scenario_japanese": NaN,
        "source": "医疗术语语句集",
        "corresponding_expression_source": "医疗术语语句集"
    },
    {
        "chinese": "血糖值",
        "japanese": "血糖值[けっとうち]",
        "explanation_chinese": "血液中的葡萄糖浓度",
        "explanation_japanese": "血中のブドウ糖濃度のことです。",
        "corresponding_expression_chinese": NaN,
        "corresponding_expression_japanese": "血糖値を測ってください",
        "application_scenario_chinese": NaN,
        "application_scenario_japanese": NaN,
        "source": "医疗术语语句集",
        "corresponding_expression_source": "医疗术语语句集"
    },

    {
        "chinese": "心电图",
        "japanese": "心電図しんでんず",
        "explanation_chinese": "以图表的形式记录心脏的电活动，帮助诊断和治疗心脏病。 ",
        "explanation_japanese": "心臓の電気的な活動の様子をグラフの形に記録することで、心疾患の診断と治療に役立てるものである。",
        "corresponding_expression_chinese": "他因心电图异常需要进一步检查。",
        "corresponding_expression_japanese": "彼は心電図異常により更なる検査が必要だった。",
        "application_scenario_chinese": "医疗领域",
        "application_scenario_japanese": "医療分野",
        "source": "医疗术语语句集",
        "corresponding_expression_source": "医疗术语语句集"
    },
    {
        "chinese": "泻药",
        "japanese": "下剤[げざい]",
        "explanation_chinese": "促进排便的药剂",
        "explanation_japanese": "排便を促すために用いる薬剤。",
        "corresponding_expression_chinese": "能给我开泻药吗",
        "corresponding_expression_japanese": "下剤をいただけませんか",
        "application_scenario_chinese": "生物制药",
        "application_scenario_japanese": "バイオ製薬です。",
        "source": "医疗术语语句集",
        "corresponding_expression_source": "医疗术语语句集"
    },
    {
        "chinese": "消毒",
        "japanese": "しょうどく",
        "explanation_chinese": "杀死病原微生物、但不一定能杀死细菌芽孢的方法。",
        "explanation_japanese": "消毒とは、病原性微生物を殺す方法を指しますが、必ずしも細菌の胞子を殺す必要はありません。",
        "corresponding_expression_chinese": "消毒杀死潜在的有害细菌来清洁伤口",
        "corresponding_expression_japanese": "潜在的に有害なバクテリアを殺すことによって傷口をきれいにするために消毒します",
        "application_scenario_chinese": "日常护理",
        "application_scenario_japanese": "日常的な看護するに使われることが多いです。",
        "source": "国家卫健委，WS/T466—2014",
        "corresponding_expression_source": NaN
    },
    {
        "chinese": "洗胃",
        "japanese": "胃洗浄（いせんじょう）",
        "explanation_chinese": "当误食或意外摄入对人体有害的物质时，可使用水或生理盐水等清洗液、胃管（在进行洗胃前，先插上气管插管并充气罩囊，因为病人昏迷时可能会发生吸入性肺炎）、活性炭等吸附剂、解毒剂和润滑剂，以方便插管。 在洗胃前，医生会给病人注射胃药，目的是清除残留在胃中未被吸收的物质。",
        "explanation_japanese": "人体に有害な物質を誤食・誤飲したとき、水や生理的食塩水などの洗浄液と胃チューブ（患者が意識を失っている時は誤嚥性肺炎を起こす可能性があるため、気管内チューブを挿管し、カフを膨らませてから胃洗浄を行う）、活性炭などの吸着剤や解毒剤、チューブの挿管を容易にする潤滑剤を用いて、胃に残る未吸収物質を除去する目的で行われる。",
        "corresponding_expression_chinese": "现在，他们应该尽快入院，接受洗胃、静脉输液、透析等治疗。",
        "corresponding_expression_japanese": "今は、できるだけ早く入院させ、\t胃洗浄\t、点滴、人工透析などの手当てをする。",
        "application_scenario_chinese": "护理操作",
        "application_scenario_japanese": "ケア作業の一種です。",
        "source": "守安　洋子(著)ナースのためのくすりの事典",
        "corresponding_expression_source": "小林路子|著  なにがなんでも！きのこが好き "
    },
    {
        "chinese": "胃下垂",
        "japanese": "胃下垂",
        "explanation_chinese": "胃下垂是由于膈肌悬力不足，支撑内脏器官韧带松弛，或腹内压降低，腹肌松弛，导致站立时胃大弯抵达盆腔，胃小弯弧线最低点降到髂嵴联线以下。常伴有十二指肠球部位置的改变。正常人的胃在腹腔的左上方，直立时的最低点不应超过脐下2横指，其位置相对固定，对于维持胃的正常功能有一定作用。",
        "explanation_japanese": "胃下垂は横隔膜懸垂力が不足しているため、内臓器官の靭帯がたるんで、あるいは腹の内圧が低くなって、腹筋がたるんで、立っている時胃大屈が骨盤内に到着して、胃小屈弧の最低点が腸岐連線の下に落ちます。しばしば十二指腸球部の位置の変化を伴います。正常な人の胃は腹腔の左上にあり、直立時の最低点はへそ下の指2本を超えないように、その位置は相対的に固定され、胃の正常な機能を維持するために一定の役割を果たしています。",
        "corresponding_expression_chinese": "反复溃疡的情况下，周围也容易产生癌症，由此引起幽门狭窄，导致胃下垂。",
        "corresponding_expression_japanese": "潰瘍を繰り返す場合でも、周囲に癌が出来やすくなり、それが原因で幽門狭窄を起こし、胃下垂になります。",
        "application_scenario_chinese": "医学诊断、症状说明",
        "application_scenario_japanese": "医療診断です。症状を説明する時に使われることが多いです。",
        "source": "新養生訓",
        "corresponding_expression_source": "マルモ出版2001山内信|編"
    },
    {
        "chinese": "胃息肉",
        "japanese": "胃ポリープ",
        "explanation_chinese": "胃息肉是指胃黏膜表面长出的突起状乳头状组织，较小时常无明显症状，一般都是在胃肠钡餐造影、胃镜检查或其他原因手术时偶然发现。“息肉”这一名称通常只表示肉眼所观察到的隆起物。",
        "explanation_japanese": "胃のポリープとは胃の粘膜の表面にできた突起状の乳頭状組織のことで、小さいときは特に症状はなく、胃腸ybcoの造影や胃カメラ検査、その他の原因による手術などで偶然発見されます。「ポリープ」という名前は通常、肉眼で見た隆起だけを表します。",
        "corresponding_expression_chinese": "幽门螺杆菌的感染，慢性胃炎，萎缩性胃炎，胃息肉，胃肿瘤等都是引起胃病的原因。",
        "corresponding_expression_japanese": "胃の多くの病気の原因となるヘリコバクター・ピロリ菌の感染，慢性胃炎，萎縮性胃炎，胃ポリープ，胃腫瘍などで変化します。",
        "application_scenario_chinese": "医学诊断、症状说明",
        "application_scenario_japanese": "医療診断です。症状を説明する時に使われることが多いです。",
        "source": "Yahoo!ブログ",
        "corresponding_expression_source": "Yahoo! 2008"
    },
    {
        "chinese": "胃酸过多",
        "japanese": "胃酸過多症",
        "explanation_chinese": "胃酸过多，又称作胃酸过高，是胃肠疾病的常见症状之一。适度的胃酸可以帮助消化，但如果胃酸过多就会伤及胃、十二指肠黏膜，造成胃溃疡或十二指肠溃疡等疾病。",
        "explanation_japanese": "胃酸過多は胃腸疾患の症状の一つです。適度な胃酸は消化を助けますが、胃酸が多すぎると胃や十二指腸の粘膜を傷つけ、胃潰瘍や十二指腸潰瘍などの病気の原因になります。",
        "corresponding_expression_chinese": "因为胃溃疡，过去曾3次被送进医院。据说是胃酸过多。",
        "corresponding_expression_japanese": "胃潰瘍で過去３回、病院に担ぎ込まれているという。胃酸過多なのだそうだ。",
        "application_scenario_chinese": "医学诊断、症状说明",
        "application_scenario_japanese": "医療診断です。症状を説明する時に使われることが多いです。",
        "source": "副作用なき第2の抗生物質を求めて",
        "corresponding_expression_source": "ソフトバンクパブリッシング2005"
    },
    {
        "chinese": "胃溃疡",
        "japanese": "胃潰瘍",
        "explanation_chinese": "胃溃疡是一种常见的消化系疾病，最常指胃内壁出现溃疡。它的发病原因主要为长期的幽门螺杆菌感染和非甾体类抗炎药物（例如NSAIDs）的过度使用引起胃黏膜发生破损。疾病典型表现为胃部疼痛、食欲下降、体重减轻等症状，严重者可能出现胃穿孔或者胃出血。",
        "explanation_japanese": "胃潰瘍は、胃の内側に潰瘍ができる胃腸の病気です。主に、ヘリコバクター菌の長期感染やNSAIDsなどの非ステロイド系抗炎症薬の過剰使用による胃の粘膜破損が原因で発症します。典型的には胃の痛みや食欲の低下、体重減少などの症状が現れ、場合によっては胃に穴が開いたり、出血したりすることもあります。",
        "corresponding_expression_chinese": "九月中旬，接到了“建议做胃镜精密检查”的通知。因为曾经被诊断出胃溃疡，所以也没有特别在意。",
        "corresponding_expression_japanese": "九月中旬に「胃カメラによる精密検査のすすめ」の連絡を受ける。かつて胃潰瘍の診断を受けたこともあってことさら気にもしていなかった。",
        "application_scenario_chinese": "医学诊断、症状说明",
        "application_scenario_japanese": "医療診断です。症状を説明する時に使われることが多いです。",
        "source": "癌は、神様からのプレゼントだった",
        "corresponding_expression_source": "新風舎2004川一|著"
    },
    {
        "chinese": "威尔逊氏病",
        "japanese": "ウィルソン病",
        "explanation_chinese": "威尔逊氏病(Wilson s disease，WD)，是一种常染色体隐形遗传的铜代谢缺陷病",
        "explanation_japanese": "ウィルソン病(Wilson s disease, WD)は、常染色体に隠れて遺伝する銅代謝不全症です。",
        "corresponding_expression_chinese": "威尔逊氏症(先天性铜代谢异常)",
        "corresponding_expression_japanese": "ウィルソン病（先天性銅代謝異常症）",
        "application_scenario_chinese": "医学诊断、症状说明",
        "application_scenario_japanese": "医療診断です。症状を説明する時に使われることが多いです。",
        "source": "名医発見",
        "corresponding_expression_source": "ホーム社;集英社(発売)2000中野次郎|著"
    },
    {
        "chinese": "透析",
        "japanese": "透析[とうせき]",
        "explanation_chinese": "通过小分子经过半透膜扩散到水（或缓冲液）的原理，将小分子与生物大分子分开的一种分离纯化技术。 透析疗法是使体液内的成分（溶质或水分）通过半透膜排出体外的治疗方法",
        "explanation_japanese": "小分子が半透膜を通って水(または緩衝液)に拡散することで、生体高分子と小分子を分離する分離純化技術です。透析療法は、体液内の成分(溶質や水分)を半透膜を通して体外に排出する治療法です。",
        "corresponding_expression_chinese": "对肾衰竭患者的非内分泌性肾脏功能进行替代",
        "corresponding_expression_japanese": "腎不全患者の非分泌性腎機能を代替します",
        "application_scenario_chinese": "肾脏替代治疗",
        "application_scenario_japanese": "腎臓代替治療です",
        "source": "居家血液透析临床实践指南（T/NBPIA 0102023）",
        "corresponding_expression_source": "居家血液透析临床实践指南（T/NBPIA 0102023）"
    },
    {
        "chinese": "特应性皮炎",
        "japanese": "アトピー性皮膚炎",
        "explanation_chinese": "特应性皮炎(AD)又名特应性湿疹，曾称为“异位性皮炎”、“遗传过敏性皮炎”，是一种慢性、复发性、炎症性皮肤病，临床上以皮肤干燥、剧烈瘙痒和湿疹样皮疹为特点，常自婴幼儿期开始发病。病因目前尚未明确。常反复发作，夜间瘙痒严重，可影响睡眠，严重者影响日常生活、工作和学习。",
        "explanation_japanese": "アトピー性皮膚炎(AD)は、アトピー性湿疹とも呼ばれ、かつては「アトピー性皮膚炎」「アトピー性皮膚炎」とも呼ばれ、乾燥や激しいかゆみ、湿疹様発疹などが特徴の慢性・再発・炎症性の皮膚病で、乳幼児期から発症することが多いものです。原因は明らかにされていません。夜間にかゆみがひどくなり、睡眠に支障をきたすこともあります。ひどい場合は日常生活や仕事、学習に支障をきたすこともあります。",
        "corresponding_expression_chinese": "例如中老年人、有高度近视的人、做过白内障手术的人、患有严重的特应性皮肤炎的人等。",
        "corresponding_expression_japanese": "中高年者、強度の近視がある人、白内障の手術を受けたことのある人、重症のアトピー性皮膚炎のある人などです。",
        "application_scenario_chinese": "医学诊断、症状说明",
        "application_scenario_japanese": "医療診断です。症状を説明する時に使われることが多いです。",
        "source": "目に効く｢ルテイン｣",
        "corresponding_expression_source": "コスモトゥーワン2001久郷晴彦|著"
    },
    {
        "chinese": "酸中毒",
        "japanese": "アシドーシス",
        "explanation_chinese": "体内血液和组织中酸性物质的堆积，其本质是血液中氢离子浓度上升、PH值下降",
        "explanation_japanese": "体内の血液や組織に酸性物質が蓄積される正体は、血液中の水素イオン濃度の上昇とPHの低下です",
        "corresponding_expression_chinese": "糖尿病酮症酸中毒引起心脏停止，抢救过来的症瘕1型糖尿病一例",
        "corresponding_expression_japanese": "糖尿病性ケトアシドーシスから心停止をきたし, 救命し得た劇症1 型糖尿病の1 例",
        "application_scenario_chinese": "医学诊断、症状说明",
        "application_scenario_japanese": "医学診断、症状説明",
        "source": "医疗术语语句集",
        "corresponding_expression_source": "医疗术语语句集"
    },
    {
        "chinese": "输液泵",
        "japanese": "輸液ポンプ",
        "explanation_chinese": "输液泵是一种能够准确控制输液滴数或输液流速，保证药物能够速度均匀，药量准确并且安全地进入病人体内发挥作用的一种仪器。",
        "explanation_japanese": "輸液ポンプは輸液滴数または輸液流速を正確に制御し、薬物の速度が均一で、薬量が正確で安全に患者の体内に入って作用するこ",
        "corresponding_expression_chinese": "检查病人，查看生产日期，注意输液速度等",
        "corresponding_expression_japanese": "患者を検査し、生産日を調べ、輸液速度などに注意する",
        "application_scenario_chinese": "一种医疗仪器，常用于需要严格控制输液量和药量的情况，如在应用升压药物，抗心律失常药药物，婴幼儿静脉输液或静脉麻醉时",
        "application_scenario_japanese": "昇圧薬、抗不整脈薬、乳幼児静脈点滴または静脈麻酔を使用する場合など、点滴量と薬量を厳格に制御する必要がある場合によく使用される医療機器",
        "source": "医疗卫生装备",
        "corresponding_expression_source": "医疗卫生装备"
    },
    {
        "chinese": "输血",
        "japanese": "輸血ゆけつ",
        "explanation_chinese": "一种弥补自身或其他血液成分不足的治疗方法。",
        "explanation_japanese": "血液成分の不足を自他の血液から補う治療法のこと。",
        "corresponding_expression_chinese": "给患者输血。",
        "corresponding_expression_japanese": "患者に輸血をする",
        "application_scenario_chinese": NaN,
        "application_scenario_japanese": NaN,
        "source": "医疗术语语句集",
        "corresponding_expression_source": "医疗术语语句集"
    },
    {
        "chinese": "嗜睡",
        "japanese": "眠気",
        "explanation_chinese": "持续或频繁的睡眠欲望和倾向，使人难以保持清醒和专注",
        "explanation_japanese": "絶え間ない、または頻繁な睡眠欲求と傾向により、目を覚まして集中し続けることが困難になる",
        "corresponding_expression_chinese": "精力不集中，精神疲倦，不自主地入睡、精神不清醒",
        "corresponding_expression_japanese": "集中力の欠如と起きていることができない",
        "application_scenario_chinese": "医学诊断、症状说明",
        "application_scenario_japanese": "医療診断です。症状を説明する時に使われることが多いです。",
        "source": "中华医学杂志, 2023, 103(15) : 1103-1118",
        "corresponding_expression_source": NaN
    },
    {
        "chinese": "食物中毒",
        "japanese": "食中毒しょくちゅうどく",
        "explanation_chinese": "这是一个通用术语，指由于人们经口摄入含有害或有毒微生物、化学品或其他毒素的食物或饮料而引起的腹泻、呕吐和发烧（中毒）等疾病。",
        "explanation_japanese": "有害・有毒な微生物や化学物質等毒素を含む飲食物を人が口から摂取した結果として起こる下痢や嘔吐や発熱などの疾病（中毒）の総称である。",
        "corresponding_expression_chinese": "引起食物中毒",
        "corresponding_expression_japanese": "食中毒を起こした。",
        "application_scenario_chinese": NaN,
        "application_scenario_japanese": NaN,
        "source": "医疗术语语句集",
        "corresponding_expression_source": "医疗术语语句集"
    },
    {
        "chinese": "生命体征",
        "japanese": "バイタルサイン",
        "explanation_chinese": "表示人处于活着状态的征兆",
        "explanation_japanese": "人間が生きている状態であるということを示す兆候",
        "corresponding_expression_chinese": "患者没有生命体征了",
        "corresponding_expression_japanese": "患者はバイタルサインがなくなった",
        "application_scenario_chinese": NaN,
        "application_scenario_japanese": NaN,
        "source": "南山堂医学大词典第17版",
        "corresponding_expression_source": "医疗术语语句集"
    },
    {
        "chinese": "肾萎缩",
        "japanese": "萎縮腎",
        "explanation_chinese": "肾萎缩是指各种原因导致肾单位丧失或肾脏血供不足，导致肾脏体积缩小、生理功能降低的一种病理解剖现象，常见于多种急慢性肾脏病的终末期、肾动脉狭窄、肾脏发育不良等疾病。",
        "explanation_japanese": "萎縮腎とは、さまざまな原因によって腎臓の単位が失われたり、血液の供給が不足したりすることで、腎臓の体積が縮小し、生理機能が低下する病理解剖現象です。多くの急性慢性腎臓病の末期、腎動脈狭窄、腎臓発育不良などの病気によく見られます。",
        "corresponding_expression_chinese": "萎缩肾的骨盆倾斜，殿肌和下肢屈肌的张弛的左右差非常大。萎缩肾的腓肠肌较硬，有腓肠肌痉挛的倾向。",
        "corresponding_expression_japanese": "萎縮腎は骨盤が傾斜し、殿筋と下肢屈筋の張弛の左右差が非常に大きい。萎縮腎は腓腹筋が硬く、腓腹筋痙攣の傾向がある。",
        "application_scenario_chinese": "医学诊断、症状说明",
        "application_scenario_japanese": "医療診断です。症状を説明する時に使われることが多いです。",
        "source": "全脊椎の作用と性質",
        "corresponding_expression_source": "たにぐち書店2003黒川瀞雄|著"
    },
    {
        "chinese": "纱布",
        "japanese": "ガーゼー",
        "explanation_chinese": "用优质棉线织成的布眼稀疏的软布。经脱脂、消毒后作绷带等用于医疗",
        "explanation_japanese": "上質の木綿糸で織った目の薄い柔らかい布です。脱脂,消毒して包帯などにして医療に用います",
        "corresponding_expression_chinese": "敷纱布",
        "corresponding_expression_japanese": "ガーゼを当てる。",
        "application_scenario_chinese": "护理操作",
        "application_scenario_japanese": "ケア作業の一種です。",
        "source": "医疗术语语句集",
        "corresponding_expression_source": NaN
    },
    {
        "chinese": "杀菌",
        "japanese": "殺菌さっきん",
        "explanation_chinese": "指的是杀死致病或有害微生物的操作。",
        "explanation_japanese": "病原性や有害性を有する糸状菌、細菌、ウイルスなどの微生物を死滅させる操作のことである。",
        "corresponding_expression_chinese": "这种药杀菌力强",
        "corresponding_expression_japanese": "この薬は殺菌力が強い",
        "application_scenario_chinese": NaN,
        "application_scenario_japanese": NaN,
        "source": "医疗术语语句集",
        "corresponding_expression_source": "医疗术语语句集"
    },
    {
        "chinese": "溶血",
        "japanese": "溶血[ようけつ]",
        "explanation_chinese": "红细胞破裂，血红蛋白逸出称红细胞溶解",
        "explanation_japanese": "赤血球が破れヘモグロビンが出て赤血球が溶けます",
        "corresponding_expression_chinese": "人血浆的等渗溶液为0.9%NaCl溶液，红细胞在低于0.45%NaCl溶液中，因水渗入，红细胞膨胀而破裂，血红蛋白逸出。",
        "corresponding_expression_japanese": "ヒトの血漿の等滲み溶液は0.9%NaCl溶液で、赤血球は0.45%以下のNaCl溶液の中で、水が浸透して、赤血球が膨らんで破裂して、ヘモグロビンが外に出ます。",
        "application_scenario_chinese": "医学诊断、症状说明",
        "application_scenario_japanese": "医療診断です。症状を説明する時に使われることが多いです。",
        "source": "中华血液学杂志, 2023, 44(1) : 12-18.",
        "corresponding_expression_source": "中华血液学杂志, 2023, 44(1) : 12-18."
    },
    {
        "chinese": "青霉素",
        "japanese": "ペニシリン",
        "explanation_chinese": "由青霉菌中提炼出的抗生素。",
        "explanation_japanese": "青かびの一種が出す抗菌性物質。",
        "corresponding_expression_chinese": "首先必须先进行青霉素皮试。",
        "corresponding_expression_japanese": "まずペニシリン皮試験をしなければなりません。 ",
        "application_scenario_chinese": "生物制药。临床常用抗生素。适用于敏感细菌所致各种感染。",
        "application_scenario_japanese": "バイオ製薬です。臨床では抗生物質が使われます敏感な細菌によるさまざまな感染症に適しています。",
        "source": "平,友恒，大和,谷三郎，藤井,繁弘 ，1950，《ペニシリンその他抗生物質》，抗菌物質のPaper chromatography〔第1報〕",
        "corresponding_expression_source": "日本医学会医学用语辞典 英和版第三版"
    },
    {
        "chinese": "普通病房",
        "japanese": "一般病棟",
        "explanation_chinese": "普通病房通常指的是用于收治一般疾病患者的病房，这些病房可能包括发热病房、感染病房以及其他非特殊传染病的病房。",
        "explanation_japanese": "一般病棟とは一般疾患の患者を収容する病棟のことで、発熱病棟や感染症病棟、その他の感染症以外の病棟も含まれます。",
        "corresponding_expression_chinese": "医院的住院基本费区分普通病房、疗养病房、结核病房、精神病房等病床",
        "corresponding_expression_japanese": "病院の入院基本料は一般病棟、療養病棟、結核病棟、精神病棟等の病床区分",
        "application_scenario_chinese": "医用术语",
        "application_scenario_japanese": "医療用語です",
        "source": "看護経済学",
        "corresponding_expression_source": "法研2002尾形裕也，田村やよひ|編著"
    },
    {
        "chinese": "内窥镜",
        "japanese": "内視鏡[ないしきょう]",
        "explanation_chinese": "是一种医疗设备，主要用于观察人体内部。",
        "explanation_japanese": "主に人体内部を観察することを目的とした医療機器である。",
        "corresponding_expression_chinese": "是否携带内窥镜照片？",
        "corresponding_expression_japanese": "内視鏡フィルムをもっていますか",
        "application_scenario_chinese": "仪器名称",
        "application_scenario_japanese": "機器名です。",
        "source": "医疗术语语句集",
        "corresponding_expression_source": "医疗术语 语句集"
    },
    {
        "chinese": "门诊",
        "japanese": "外来「がいらい」",
        "explanation_chinese": "通常接诊病情表症较轻的病人",
        "explanation_japanese": "通常は症状の軽い患者を診察します",
        "corresponding_expression_chinese": "先去门诊检查",
        "corresponding_expression_japanese": "まず外来診察を受けます",
        "application_scenario_chinese": "操作",
        "application_scenario_japanese": "ケア作業の一種です。",
        "source": "医疗术语语句集",
        "corresponding_expression_source": "医疗术语语句集"
    },
    {
        "chinese": "麻醉",
        "japanese": "麻酔[ますい]",
        "explanation_chinese": "通过药物或其他手段人为地消除疼痛和其他感觉。",
        "explanation_japanese": "薬物などによって人為的に疼痛をはじめとする感覚をなくすことである。",
        "corresponding_expression_chinese": "是否有过因麻醉引起的不良反应？",
        "corresponding_expression_japanese": "麻酔をして何かトラブルがありましたか",
        "application_scenario_chinese": "护理操作",
        "application_scenario_japanese": "ケア作業の一種です。",
        "source": "医疗术语语句集",
        "corresponding_expression_source": "医疗术语 语句集"
    },
    {
        "chinese": "冷敷",
        "japanese": "コールドパック",
        "explanation_chinese": "即用冰袋或冷湿毛巾敷于头额、颈后或病变部位皮肤上。敷于病变部位，主要目的是促使局部血管收缩，控制小血管的出血和减轻张力较大肿块的疼痛，达到消肿止痛之功效。高热病人，敷于头额、颈后可降低体温、改善不适感",
        "explanation_japanese": "氷袋や冷湿式タオルを頭、首の後ろ、病変部の皮膚に当てる。病変部位に塗布し、主な目的は局部血管の収縮を促し、小血管の出血を制御し、張力の大きい腫れ物の痛みを軽減し、腫れを解消し、痛みを止める効果を達成することである。高熱患者は、頭額、首に当てると体温を下げ、不快感を改善することができる。",
        "corresponding_expression_chinese": "冷敷可用小毛巾在冷水或冰水中浸湿，拧成半干，敷于局部，每隔1-3分钟更换一次，持续15-20分钟。也可用冰袋裹上毛巾敷于局部，但要注意避免冻伤。",
        "corresponding_expression_japanese": "冷湿布は小さなタオルで冷たい水や氷水に浸し、半乾燥にして局部に当て、1 ~ 3分おきに交換し、15 ~ 20分間継続する。氷嚢にタオルを巻いて局部に当てることもできますが、凍傷には注意してください",
        "application_scenario_chinese": "医学治疗方式，有消肿止痛的功效",
        "application_scenario_japanese": "医学的治療法には、腫れや痛みを抑える効果がある",
        "source": "基础护理学(第2版)",
        "corresponding_expression_source": "基础护理学(第2版)"
    },
    {
        "chinese": "酒精依赖症",
        "japanese": "アルコール依存症",
        "explanation_chinese": "如果过度饮酒已经造成了躯体或者精神的损害，并带来不良的社会后果，如果饮酒的时间和量达到了一定的程度，使饮酒者无法控制自己的饮酒行为，并且出现躯体化和戒断的症状，这一情况被称为酒精依赖。",
        "explanation_japanese": "アルコール依存症とは、過度の飲酒が肉体的、精神的なダメージを与え、社会的に悪い結果をもたらした場合や、飲酒の時間や量が一定程度に達した場合、飲酒を控えることができず、肉体的、禁断症状が現れる場合をいいます。",
        "corresponding_expression_chinese": "高木等人还注意到，高龄酒精依赖症患者中有很多人曾切除过胃(23%)。",
        "corresponding_expression_japanese": "また高木らは高齢アルコール依存症者に胃切除既往者が多い（２３％）ことに注目している。",
        "application_scenario_chinese": "医学诊断、症状说明",
        "application_scenario_japanese": "医療診断です。症状を説明する時に使われることが多いです。",
        "source": "嗜癖精神医学の展開",
        "corresponding_expression_source": "新興医学出版社2005"
    },
    {
        "chinese": "酒精性肝炎",
        "japanese": "アルコール性肝炎",
        "explanation_chinese": "酒精性肝炎系指长期过量饮酒所致的一种肝脏疾病，其主要临床特征是恶心、呕吐、黄疸、肝脏肿大和压痛，可并发肝衰竭和上消化道出血等。",
        "explanation_japanese": "アルコール性肝炎は、長期的な過剰飲酒による肝臓疾患の原因であり、その主な臨床的特徴は吐き気、嘔吐、黄疸、肝臓腫大と圧痛、肝不全と上部消化管出血などを併発することができます。",
        "corresponding_expression_chinese": "尿毒症这种疾病会有像尿液一样的口臭，酒精性肝炎患者会有酒精味。",
        "corresponding_expression_japanese": "尿毒症という病気では、尿のような口臭があり、アルコール性肝炎の患者ではアルコール臭がしたりする。",
        "application_scenario_chinese": "医学诊断、症状说明",
        "application_scenario_japanese": "医療診断です。症状を説明する時に使われることが多いです。",
        "source": "名医があかす｢病気のたどり方｣事典",
        "corresponding_expression_source": "講談社2005"
    },
    {
        "chinese": "碱中毒",
        "japanese": "アルカローシス",
        "explanation_chinese": "指体内酸丢失过多或者从体外摄入碱过多的临床情况，主要生化表现为血HCO3-过高（>27mmol/L），PaCO2下降。pH值多>7.45",
        "explanation_japanese": "体内で過剰に酸が失われたり体外から過剰にアルカリが摂取されたりする臨床状況を指します",
        "corresponding_expression_chinese": "由于呼吸二氧化碳的排泄增加，分为呼吸性烷烃和代谢性烷烃。",
        "corresponding_expression_japanese": "呼吸による二酸化炭素の排泄増加による呼吸性アルカローシスと,代謝性アルカローシスとに分けられる",
        "application_scenario_chinese": "医学诊断、症状说明",
        "application_scenario_japanese": "医療診断です。症状を説明する時に使われることが多いです。",
        "source": "医疗术语语句集",
        "corresponding_expression_source": "医疗术语语句集"
    },
    {
        "chinese": "急性肝炎",
        "japanese": "劇症肝炎げきしょうかんえん",
        "explanation_chinese": "急性肝炎中，肝细胞坏死等急剧而广泛地发生。死亡率很高。",
        "explanation_japanese": "急性肝炎のうち肝細胞の壊死（えし）などが急激かつ広範におこったもの。死亡率が高い。",
        "corresponding_expression_chinese": "肝功能明显下降，无法代谢氨水(急性肝炎等)",
        "corresponding_expression_japanese": "肝機能の著しい低下によりアンモニア代謝ができなくなっている（劇症肝炎など）",
        "application_scenario_chinese": "医学诊断、症状说明",
        "application_scenario_japanese": "医療診断です。症状を説明する時に使われることが多いです。",
        "source": "臨床検査ガイド",
        "corresponding_expression_source": "文光堂出版社2001"
    },
    {
        "chinese": "稽留热",
        "japanese": "稽留熱[けいりゅうねつ].",
        "explanation_chinese": "是临床上常见的一种热型。体温上升后即恒定地维持在39℃-40℃的高水平，达数天或数周是临床上常见的一种热型。体温上升后即恒定地维持在39℃-40℃的高水平，达数天或数周",
        "explanation_japanese": "臨床上よく見られる熱型である。体温上昇後、すなわち39℃〜40℃の高いレベルを数日または数週間にわたって一定に維持する臨床上よく見られる熱型である。体温上昇後、すなわち39℃〜40℃の高いレベルを数日または数週間にわたって一定に維持する",
        "corresponding_expression_chinese": "入院前七天持续发热，体温在39至40摄氏度。",
        "corresponding_expression_japanese": "入院前の７日前に発熱し、体温が３９-４０℃",
        "application_scenario_chinese": "医学诊断、症状说明",
        "application_scenario_japanese": "医療診断です。症状を説明する時に使われることが多いです。",
        "source": "医疗术语语句集",
        "corresponding_expression_source": "医疗术语语句集"
    },
    {
        "chinese": "基因重组",
        "japanese": "遺伝子組換え",
        "explanation_chinese": "基因重组指在生物体进行有性生殖的过程中，控制不同性状的基因重新组合。其发生在二倍体生物的每一个世代中。",
        "explanation_japanese": "遺伝子組み換えとは、生物体が有性生殖をする過程で、異なる形質を制御する遺伝子が組み替えられることを指します。それは二倍体生物の全ての世代で起こります。",
        "corresponding_expression_chinese": "也就是说，无论是转基因生物还是非转基因生物，都是麦当劳化现象的一部分。",
        "corresponding_expression_japanese": "つまり、遺伝子組換え生物も非遺伝子組換え生物も、マクドナルド化という現象の一部だとも言えます。",
        "application_scenario_chinese": "医用术语",
        "application_scenario_japanese": "医療用語です",
        "source": "遺伝子組換え作物",
        "corresponding_expression_source": "明石書店2001大塚善樹|著"
    },
    {
        "chinese": "基因工程",
        "japanese": "遺伝子工学",
        "explanation_chinese": "基因工程又称基因拼接技术和DNA重组技术，是以分子遗传学为理论基础，以分子生物学和微生物学的现代方法为手段，将不同来源的基因按预先设计的蓝图，在体外构建杂种DNA分子，然后导入活细胞，以改变生物原有的遗传特性、获得新品种、生产新产品的遗传技术。基因工程技术为基因的结构和功能的研究提供了有力的手段。",
        "explanation_japanese": "遺伝子工学は、分子遺伝学を理論の基礎とし、分子生物学や微生物学の現代的な手法を用いて、異なる遺伝子由来の雑種のDNA分子をあらかじめ設計された通りに体外で構築し、生きた細胞に導入するものです。生物の持つ遺伝的特性を変え、新しい品種を獲得し、新しい製品を生み出す遺伝技術です。遺伝子工学の技術は遺伝子の構造と機能を研究する有力な手段を提供します。",
        "corresponding_expression_chinese": "带来了许多成为近代遗传学或遗传工程学基础的研究成果。",
        "corresponding_expression_japanese": "近代遺伝学あるいは遺伝子工学の基礎となる多くの研究成果をもたらした。",
        "application_scenario_chinese": "生物学术语",
        "application_scenario_japanese": "生物学用語です",
        "source": "ヒト動物微生物植物ゲノムDNA時代",
        "corresponding_expression_source": "東京教育情報センター2003渡邊格|他著"
    },
    {
        "chinese": "黄疸",
        "japanese": "おうだん",
        "explanation_chinese": "黄疸是指由于胆红素代谢障碍引起血清内胆红素浓度升高，导致巩膜、皮肤、黏膜及其他组织出现黄染的现象。",
        "explanation_japanese": "黄疸とはビリルビン代謝障害による血清内ビリルビン濃度の上昇により、強膜、皮膚、粘膜及びその他の組織に黄色く染まる現象を指す。",
        "corresponding_expression_chinese": "巩膜、皮肤、黏膜、体液的黄染",
        "corresponding_expression_japanese": "強膜、皮膚、粘膜、体液の黄染",
        "application_scenario_chinese": "医学诊断、症状说明，对应科室为外科和内科，没有特定的高危群体",
        "application_scenario_japanese": "医学診断、症状説明、対応科は外科と内科で、特定のハイリスク群はない",
        "source": "中医药学名词",
        "corresponding_expression_source": "中医药学名词"
    },
    {
        "chinese": "患病",
        "japanese": "罹患「りかん」",
        "explanation_chinese": "患病",
        "explanation_japanese": "病気にかかることです",
        "corresponding_expression_chinese": "事实上，由于生活习惯的改变，患胃癌的人数正在减少。这要看患病率才能知道。",
        "corresponding_expression_japanese": "生活習慣の変化で胃がんになる人自体が減っているのが事実だ。これは罹患率があってこそわかる。 ",
        "application_scenario_chinese": "医学诊断",
        "application_scenario_japanese": "医療診断です。",
        "source": "中央公論新社 ",
        "corresponding_expression_source": "中央公論新社 2002平成14年4月号（第117巻第4号、1415号）"
    },
    {
        "chinese": "鼾声",
        "japanese": "いびき",
        "explanation_chinese": "鼾声俗称“打呼噜”即入睡后发出的呼吸粗鸣声。正常人是属生理现象。病理性的鼾声多见于昏迷病人，属痰阻心窍的闭证，也可见于温病的热盛伤阴或肺气不利等。又指哺乳动物（多是四足动物）发出的深沉的鼻息声。",
        "explanation_japanese": "いびきは「いびき」と呼ばれ、寝た後に荒い呼吸音を立てます。正常な人は生理現象です。病理性のいびきは多く昏睡の病人に見えて、痰が魔が差すことの閉証に属して、同じく温病の熱盛傷陰あるいは肺気不利などで見ることができます。また哺乳類(多くは四足動物)が発する深い寝息のことを指します。",
        "corresponding_expression_chinese": "要想治疗打鼾，一开始最好去耳鼻科看一下。",
        "corresponding_expression_japanese": "いびきの治療をしてもらうには、最初に耳鼻科で診てもらうようにすると良いでしょう。",
        "application_scenario_chinese": "医学诊断、症状说明",
        "application_scenario_japanese": "医療診断です。症状を説明する時に使われることが多いです。",
        "source": "危ない！子どものいびき",
        "corresponding_expression_source": "芳賀書店2001坂田英明，小山悟|共著"
    },
    {
        "chinese": "咳嗽",
        "japanese": "咳せき",
        "explanation_chinese": "是医学领域的一种症状，是气管、喉部和呼吸肌的反射性收缩运动，通常反复进行，以迫使空气从肺部和呼吸道排出。",
        "explanation_japanese": "医療分野における症状の一種であり、肺や気道から空気を強制的に排出させるため、通常繰り返して起こる、気管・喉頭・呼吸筋の反射的な収縮運動である。",
        "corresponding_expression_chinese": "咳嗽",
        "corresponding_expression_japanese": "咳をする",
        "application_scenario_chinese": NaN,
        "application_scenario_japanese": NaN,
        "source": "医疗术语语句集",
        "corresponding_expression_source": "医疗术语语句集"
    },
    {
        "chinese": "过敏性鼻炎",
        "japanese": "アレルギー性鼻炎",
        "explanation_chinese": "过敏性鼻炎，亦称变应性鼻炎，是一种由基因和环境因素共同导致的多因素性疾病。",
        "explanation_japanese": "アレルギー性鼻炎はアレルギー性鼻炎とも呼ばれ、遺伝子と環境要因が絡み合う多因子性疾患です。",
        "corresponding_expression_chinese": "过敏性鼻炎是哮喘发作的危险因素之一。",
        "corresponding_expression_japanese": "喘息発作の危険因子として、アレルギー性鼻炎は良く知られています。",
        "application_scenario_chinese": "医学诊断、症状说明",
        "application_scenario_japanese": "医療診断です。症状を説明する時に使われることが多いです。",
        "source": "Yahoo!ブログ/健康と医学/病気、症状",
        "corresponding_expression_source": "Yahoo!2008"
    },
    {
        "chinese": "过敏",
        "japanese": "アレルギー",
        "explanation_chinese": "以引起组织细胞损伤或生理功能紊乱为主要结局的异常的免疫应答。",
        "explanation_japanese": "免疫系の異常な反応によって引き起こされる身体の反応を指す。",
        "corresponding_expression_chinese": "（你）对什么过敏？",
        "corresponding_expression_japanese": "どんなアレルギーがありますか。",
        "application_scenario_chinese": "医疗领域，医学诊断。因过敏原引起的发作性皮肤瘙痒，出现出血性风团，甚至休克等症状的病人",
        "application_scenario_japanese": "医療分野では医療診断です。アレルゲンによる発作性皮膚痒、出血性風団、ショックなどの症状を呈する方もいらっしゃいます。",
        "source": "石川 昌，2011，第35回日本トキシコロジー学会学術年会，23-23",
        "corresponding_expression_source": "日本医学会医学用语辞典 英和版第三版"
    },
    {
        "chinese": "灌肠法",
        "japanese": "浣腸法",
        "explanation_chinese": "将一定量的液体由肛门经直肠灌入结肠，以帮助病人清洁肠道、排便、排气或由肠道供给药物或营养，达到确定诊断和治疗目的的方法。",
        "explanation_japanese": "一定量の液体を肛門から直腸を経て結腸に流し込み、患者の腸を清潔にしたり、排便したり、排出したり、薬や栄養を腸から供給したりして、診断や治療の目的を確定する方法です。",
        "corresponding_expression_chinese": "解除便秘、肠胀气",
        "corresponding_expression_japanese": "便秘・腸内ガスが解消されます。",
        "application_scenario_chinese": "护理操作",
        "application_scenario_japanese": "ケア作業の一種です。",
        "source": "医疗术语语句集",
        "corresponding_expression_source": "医疗术语语句集"
    },
    {
        "chinese": "挂号",
        "japanese": "受付「うけつけ」",
        "explanation_chinese": "领取号码按次序看病。",
        "explanation_japanese": "受け取り番号は順番に診察します。",
        "corresponding_expression_chinese": "到医院先去挂号",
        "corresponding_expression_japanese": "病院へ行ってまず受付します",
        "application_scenario_chinese": "护理操作",
        "application_scenario_japanese": "ケア作業の一種です。",
        "source": "医疗术语语句集",
        "corresponding_expression_source": "医疗术语语句集"
    },
    {
        "chinese": "汞合金",
        "japanese": "アマルガム",
        "explanation_chinese": "汞合金是一种特殊类型的合金，可由汞与一种或多种金属形成。",
        "explanation_japanese": "アマルガムは、水銀と1つ以上の金属から形成される特殊な合金です。",
        "corresponding_expression_chinese": "你也试试用汞合金填充物怎么样?",
        "corresponding_expression_japanese": "きみもどうかね、アマルガムの詰め物にしては？",
        "application_scenario_chinese": "医疗材料",
        "application_scenario_japanese": "医療用材料です",
        "source": "歯とスパイ",
        "corresponding_expression_source": "河出書房新社1997"
    },
    {
        "chinese": "高血压",
        "japanese": "高血圧",
        "explanation_chinese": "以体循环动脉血压增高为主要特征，可伴有心、脑、肾等器官的功能或器质性损害的临床综合征。",
        "explanation_japanese": "これは、全身動脈の血圧上昇を特徴とする臨床症候群であり、心臓、脳、腎臓および他の臓器への機能的または器質的損傷を伴うことがある。",
        "corresponding_expression_chinese": "收缩压≥140毫米汞柱，舒张压≥90毫米汞柱",
        "corresponding_expression_japanese": "収縮期血圧≥140mmHg、拡張期血圧≥90mmHg。",
        "application_scenario_chinese": "医疗领域、医学诊断，对应诊断科室为心内科或普通内科",
        "application_scenario_japanese": "医療分野では医療診断です。診療科は心療内科または一般内科です。",
        "source": "中国心血管杂志, 2019, 24(1): 24-56",
        "corresponding_expression_source": NaN
    },
    {
        "chinese": "干扰素",
        "japanese": "インターフェロン",
        "explanation_chinese": "干扰素，是一类糖蛋白，它具有高度的种属特异性，故动物的干扰素对人无效，干扰素具有抗病毒、抑制细胞增殖、调节免疫及抗肿瘤作用。",
        "explanation_japanese": "インターフェロンは、糖タンパク質の一群で、それは高度な種特異性を持っているので、働物のインターフェロンは人間には効果がありません。インターフェロンは抗ウイルス、細胞増殖を抑制し、免疫と抗腫瘍作用を調節します。",
        "corresponding_expression_chinese": "因此，有效抑制因使用干扰素而引起的身体症状，是精神神经症的首要任务",
        "corresponding_expression_japanese": "したがって，インターフェロン投与で起こってくる身体症状を，きちんと抑えることが，精神神経症状のまず第一の重要",
        "application_scenario_chinese": "免疫兴奋剂",
        "application_scenario_japanese": "免疫刺激剤です",
        "source": "ウイルス肝炎患者のためのインターフェロン療法と副作用がわかる本",
        "corresponding_expression_source": "日本メディカルセンター1994日野邦彦|著"
    },
    {
        "chinese": "腹泻",
        "japanese": "下痢です",
        "explanation_chinese": "指排便次数增多，大便稀薄或呈水状，有的带脓血，常兼有腹痛",
        "explanation_japanese": "排便回数が増え、大便が薄いか水のようになり、膿血を持っているものもあり、腹痛を兼ねていることが多いことを指す。",
        "corresponding_expression_chinese": "多由于肠道感染，消化功能障碍而引起，是否吃了什么不干净的食物？",
        "corresponding_expression_japanese": "腸管感染、消化機能障害によることが多いが、何か不潔な食べ物を食べているのだろうか",
        "application_scenario_chinese": "医学诊断，症状说明，对应科室为消化内科",
        "application_scenario_japanese": "医学診断、症状説明、対応科は消化内科",
        "source": "中国传染病杂志",
        "corresponding_expression_source": "中国传染病杂志"
    },
    {
        "chinese": "副作用",
        "japanese": "副作用ふくさよう",
        "explanation_chinese": "指应用治疗量的药物后所出现的治疗目的以外的药理作用。",
        "explanation_japanese": "医薬品の使用に伴って生じた治療目的に沿わない作用全般〔治療目的の作用は「主作用」と呼ぶ。薬効とも呼ぶ〕を指す。",
        "corresponding_expression_chinese": "这药有副作用吗？",
        "corresponding_expression_japanese": "薬の副作用はありませんか",
        "application_scenario_chinese": "医学诊断、药物说明",
        "application_scenario_japanese": "医療診断です。効能書きに多く見られます。",
        "source": "医疗术语 语句集",
        "corresponding_expression_source": "医疗术语 语句集"
    },
    {
        "chinese": "发绀",
        "japanese": "チアノーゼ",
        "explanation_chinese": "指血液中去氧血红蛋白增多使皮肤和粘膜呈青紫色改变的一种表现",
        "explanation_japanese": "血液中のデオキシヘモグロビンが増えて皮膚や粘膜が青紫色に変化する現象のことです。",
        "corresponding_expression_chinese": "发绀是伴有心脏病的患者中比较常见的症状之一",
        "corresponding_expression_japanese": "チアノーゼは,心疾患を伴う患者では比較的多くみられる症状の一つである",
        "application_scenario_chinese": "医学诊断、症状说明",
        "application_scenario_japanese": "医学診断、症状説明",
        "source": "医疗术语语句集",
        "corresponding_expression_source": "医疗术语语句集"
    },
    {
        "chinese": "耳鸣",
        "japanese": "耳鳴り",
        "explanation_chinese": "患者在缺乏外部声源的情况下，耳内或颅内产生不成形的异常声幻觉。",
        "explanation_japanese": "実際には音がしていないのにも拘らず、何かが聞こえるように感じる現象",
        "corresponding_expression_chinese": "经常耳鸣",
        "corresponding_expression_japanese": "いつも耳鳴りがします。",
        "application_scenario_chinese": "医学诊断、症状说明",
        "application_scenario_japanese": "医療診断です。症状を説明する時に使われることが多いです。",
        "source": "医疗术语语句集",
        "corresponding_expression_source": "医疗术语 语句集"
    },
    {
        "chinese": "恶液质",
        "japanese": "悪液質 ",
        "explanation_chinese": "表现为极度消瘦，皮包骨头，形如骷髅，贫血，无力，完全卧床，生活不能自理，极度痛苦，全身衰竭等综合征。多由癌症和其他严重慢性病引起。可看作是由于全身许多脏器发生障碍所致的一种中毒状态。此症的发生多指机体处于严重的机能失调状态。",
        "explanation_japanese": "極度にやせて、皮は骨を包んで、形は髑髏のようで、貧血、力がなくて、完全に寝たきりで、生活は自立できなくて、極度に苦痛で、全身不全などの症候群です。ガンや重篤な慢性疾患によって引き起こされることが多いです。全身の多くの臓器に障害が生じた中毒状態と考えられます。この病気の発生は、机体が深刻な機能不全状態にあることを指します。",
        "corresponding_expression_chinese": "癌细胞的特点是速度比正常细胞快，即使从周围的正常细胞中夺取营养成分(恶液质)也毫不在乎，这就是癌细胞的本质。",
        "corresponding_expression_japanese": "正常の細胞より早いのが特徴で，回りの正常な細胞から栄養分を奪い取る（ 悪液質）ということも平気で行ってしまうのが，がん細胞の正体である。",
        "application_scenario_chinese": "医学诊断、症状说明",
        "application_scenario_japanese": "医療診断です。症状を説明する時に使われることが多いです。",
        "source": "薬と病気",
        "corresponding_expression_source": "ヘルス・システム研究所2004荒川博仁|著;ヘルス・システム研究所|編"
    },
    {
        "chinese": "恶性肿瘤",
        "japanese": "悪性腫瘍",
        "explanation_chinese": "癌症，亦称恶性肿瘤，由细胞恶性增生引发，具侵袭性和转移性",
        "explanation_japanese": "癌は悪性腫瘍とも呼ばれ細胞が悪性増殖して発生し侵襲性転移性を持ちます",
        "corresponding_expression_chinese": "皮肤恶性肿瘤诊疗指南",
        "corresponding_expression_japanese": "皮膚悪性腫瘍診療ガイドライン",
        "application_scenario_chinese": "医学诊断",
        "application_scenario_japanese": "医療診断です。",
        "source": "医疗术语语句集",
        "corresponding_expression_source": "医疗术语语句集"
    },
    {
        "chinese": "恶心",
        "japanese": "吐き気「吐き気」",
        "explanation_chinese": "用来描述胃部不适、想要呕吐的感觉",
        "explanation_japanese": "胃の不快感や吐き気を訴えます",
        "corresponding_expression_chinese": "晕船觉得恶心",
        "corresponding_expression_japanese": "船に酔って～を催す",
        "application_scenario_chinese": "症状说明",
        "application_scenario_japanese": "医学診断、症状説明",
        "source": "医疗术语语句集",
        "corresponding_expression_source": NaN
    },
    {
        "chinese": "恶化",
        "japanese": "悪化「あっか」「あっか」",
        "explanation_chinese": "向坏的方面变，使更坏。情况向坏的方面变化",
        "explanation_japanese": "悪い方に変わって、さらに悪くします。状況は悪い方に変化します",
        "corresponding_expression_chinese": "病情一直在恶化",
        "corresponding_expression_japanese": "病状は悪化しています",
        "application_scenario_chinese": "医学诊断、症状说明",
        "application_scenario_japanese": "医学診断、症状説明",
        "source": "医疗术语语句集",
        "corresponding_expression_source": "医疗术语语句集"
    },
    {
        "chinese": "多尿",
        "japanese": "利尿",
        "explanation_chinese": "每天24小时排尿多于2500ml",
        "explanation_japanese": "2500ml以上を24時間排尿",
        "corresponding_expression_chinese": "暂时性生理性多尿和持续性多尿，不可抑制的排尿量增加",
        "corresponding_expression_japanese": "もっと排尿する",
        "application_scenario_chinese": "医疗领域、医学诊断，对应科室为肾内科、内分泌科、泌尿外科、神经内科、精神心理科",
        "application_scenario_japanese": "医療分野では医療診断です。診療科は腎臓内科、内分泌科、泌尿器科、神経内科、精神心理科。",
        "source": "《内分泌与代谢性疾病症状鉴别诊断学》",
        "corresponding_expression_source": NaN
    },
    {
        "chinese": "淀粉酶",
        "japanese": "アミラーゼ",
        "explanation_chinese": "淀粉酶是水解淀粉和糖原的酶类总称，通常通过淀粉酶催化水解织物上的淀粉浆料，由于淀粉酶的高效性及专一性，酶退浆的退浆率高，退浆快，污染少，产品比酸法、碱法更柔软，且不损伤纤维。",
        "explanation_japanese": "アミラーゼ加水分解でんぷんとグリコーゲンの酵素類の総称で、通常を通じてアミラーゼ触媒加水分解織物上のでんぷん漿料、アミラーゼの高効率と1つの性のため、酵素パルプのパルプ率が高くて、パルプが速くて、汚染が少なくて、製品は酸法、アルカリ法より柔らかくて、しかも繊維を損傷しません。",
        "corresponding_expression_chinese": "发酵时所需的糖，首先利用小麦粉中存在的糖分。其次，面粉中的淀粉酶和添加的糖化酶，从面粉中的淀粉中生成麦芽糖。",
        "corresponding_expression_japanese": "発酵する時に必要とする糖は、小麦粉中に存在する糖分をまず利用する。次に小麦粉中のアミラーゼや添加した糖化酵素によって、小麦粉中のでん粉より生成されるマルトース",
        "application_scenario_chinese": "化学物质",
        "application_scenario_japanese": "化学物質です",
        "source": "パン化学ノート",
        "corresponding_expression_source": "パンニュース社2004中江恒|著"
    },
    {
        "chinese": "低烧",
        "japanese": "微熱びねつ",
        "explanation_chinese": "高于平常的体温但不至于发烧。。。",
        "explanation_japanese": "平熱を超えているが発熱までには値しないもの",
        "corresponding_expression_chinese": "有点低烧",
        "corresponding_expression_japanese": "微熱があります。",
        "application_scenario_chinese": NaN,
        "application_scenario_japanese": NaN,
        "source": "医疗术语语句集",
        "corresponding_expression_source": "医疗术语语句集"
    },
    {
        "chinese": "盗汗",
        "japanese": "寝汗( ねあせ)",
        "explanation_chinese": "盗汗是睡眠中不自主的异常出汗现象，通常在深夜及黎明前明显，而睡醒后就会停止出汗",
        "explanation_japanese": "寝汗は睡眠中の自主的ではない異常な発汗現象であり、通常は深夜や夜明け前に顕著であるが、目が覚めると発汗を停止する",
        "corresponding_expression_chinese": "（你）有盗汗症状吗",
        "corresponding_expression_japanese": "寝汗の症状はありますか。",
        "application_scenario_chinese": "医疗领域，医学诊断。常见于肾阴虚，结核病等患者症状",
        "application_scenario_japanese": "医療分野では医療診断です。腎陰虚、結核などによく見られる症状です。",
        "source": "中华中医药杂志，2021",
        "corresponding_expression_source": "日本医学会医学用语辞典"
    },
    {
        "chinese": "抽筋",
        "japanese": "痙攣けいれん",
        "explanation_chinese": "是一种肌肉自发的强直性收缩。",
        "explanation_japanese": "不随意に筋肉が激しく収縮することによって起こる発作",
        "corresponding_expression_chinese": "这里抽筋了",
        "corresponding_expression_japanese": "ここがけいれんします",
        "application_scenario_chinese": "医学诊断",
        "application_scenario_japanese": "医療診断です。",
        "source": "医疗术语语句集",
        "corresponding_expression_source": "医疗术语 语句集"
    },
    {
        "chinese": "充血",
        "japanese": "充血じゅうけつ",
        "explanation_chinese": "是由于疾病、受伤、手术等其他各种因素，毛细血管等末梢血管扩张，动脉性血液流入增加的状态。",
        "explanation_japanese": "病気やケガ、手術など、その他様々な要因によって、毛細血管などの末梢の血管が拡張して、そこに動脈性の血液の流入が増加した状態を示す。広義には静脈性の血液が増加した状態を示すうっ血も定義に含まれる。",
        "corresponding_expression_chinese": "眼睛充血",
        "corresponding_expression_japanese": "目が充血しています",
        "application_scenario_chinese": NaN,
        "application_scenario_japanese": NaN,
        "source": "医疗术语语句集",
        "corresponding_expression_source": "医疗术语语句集"
    },
    {
        "chinese": "肠胀气",
        "japanese": "腸膨張ガス",
        "explanation_chinese": "由于多种原因引起的，胃肠道不通畅或梗阻引起胃肠道的气体不能随胃肠蠕动排出体外，气体集聚于胃肠道就会有胀气感，常伴有恶心、嗳气、打嗝、腹胀、腹痛、肛门排气增多等症状",
        "explanation_japanese": "多種の原因によるもので、胃腸管の不調や閉塞による胃腸管のガスは胃腸蠕動に従って体外に排出できず、ガスが胃腸管に集まると膨張感があり、吐き気、げっぷ、げっぷ、腹部膨満、腹痛、肛門排気の増加などの症状を伴うことが多い2",
        "corresponding_expression_chinese": "可能是由消化不良、慢性结肠炎，或者心理因素等原因引起，对于经常肠胀气的患者，建议尽早就医，完善相关检查",
        "corresponding_expression_japanese": "消化不良、慢性大腸炎、あるいは心理的要因などの原因による可能性があり、腸が膨れることが多い患者には、できるだけ早く診察を受け、関連検査を改善することを提案する",
        "application_scenario_chinese": "医学诊断，症状说明，对应科室为消化内科",
        "application_scenario_japanese": "医学診断、症状説明、対応科は消化内科",
        "source": "基础护理学(第2版)",
        "corresponding_expression_source": "基础护理学（第2版）"
    },
    {
        "chinese": "肠梗阻",
        "japanese": "腸閉塞",
        "explanation_chinese": "肠梗阻是指由于多种原因导致肠道内的内容物无法正常转运和通过肠道的疾病，它是外科的常见病症。主要的发病原因有术后肠粘连，结直肠肿瘤，肠套叠，疝气，肠扭转等。梗阻不仅会引起肠管的解剖和功能上的改变，也可能导致全身的生理紊乱，严重时可危及生命。",
        "explanation_japanese": "腸閉塞は、さまざまな原因で腸内の輸送がうまくいかなくなったり、腸を通過したりする病気で、外科的によく見られる病気です。主な発症原因は、術後腸癒着、結腸腫瘍、腸管ヘルニア、腸捻転などです。閉塞は腸管の解剖学的な機能変化だけでなく、全身の生理的な乱れを引き起こし、ひどい場合は命にかかわることもあります。",
        "corresponding_expression_chinese": "肠管内压上升(食道狭窄，幽门狭窄，肠梗阻):肿瘤，肠管粘连，轴扭转",
        "corresponding_expression_japanese": "腸管内圧上昇（食道狭窄，幽門狭窄，腸閉塞）：腫瘍，腸管癒着，軸捻転",
        "application_scenario_chinese": "医学诊断、症状说明",
        "application_scenario_japanese": "医療診断です。症状を説明する時に使われることが多いです。",
        "source": "救急医学",
        "corresponding_expression_source": "新興医学出版社2002瀧健治，西村謙一，十時忠秀|編著"
    },
    {
        "chinese": "残尿感",
        "japanese": "残尿感ざんにょうかん",
        "explanation_chinese": "在人体排尿之后仍然感觉膀胱内部有尿液存在",
        "explanation_japanese": "排尿後に、尿がでること。",
        "corresponding_expression_chinese": "有余尿感",
        "corresponding_expression_japanese": "残尿感があります",
        "application_scenario_chinese": "医学诊断、症状说明",
        "application_scenario_japanese": "医療診断です。症状を説明する時に使われることが多いです。",
        "source": "医疗术语 语句集",
        "corresponding_expression_source": "医疗术语 语句集"
    },
    {
        "chinese": "病毒性肝炎",
        "japanese": "ウイルス性肝炎",
        "explanation_chinese": "病毒性肝炎是由多种肝炎病毒引起的以肝脏病变为主的一种传染病。临床上以食欲减退、恶心、上腹部不适、肝区痛、乏力为主要表现。部分病人可有黄疸发热和肝大伴有肝功能损害。有些病人可慢性化，甚至发展成肝硬化，少数可发展为肝癌。",
        "explanation_japanese": "ウイルス性肝炎は、復数の肝炎ウイルスによって引き起こされる肝臓の病変を主とする感染症です。臨床では食欲減退、吐き気、上腹部の不快感、肝臓の痛み、力が抜けて主な表現です。一部の患者は黄疸発熱と肝機能障害を伴うことがあります。患者によっては慢性化して肝硬変になることもありますし、まれに肝臓がんになることもあります。",
        "corresponding_expression_chinese": "积极治疗病毒性肝炎和肝癌。",
        "corresponding_expression_japanese": "ウイルス性肝炎の治療、肝癌の治療に積極的に取り組んでいる",
        "application_scenario_chinese": "医学诊断、症状说明",
        "application_scenario_japanese": "医療診断です。症状を説明する時に使われることが多いです。",
        "source": "医者がすすめる専門病院",
        "corresponding_expression_source": "ライフ企画2002医療研究グループ|編"
    },
    {
        "chinese": "病毒性肺炎",
        "japanese": "ウイルス性肺炎",
        "explanation_chinese": "病毒性肺炎是由上呼吸道病毒感染、向下蔓延所致的肺部炎症。本病一年四季均可发生，但大多见于冬春季节，可暴发或散发流行。临床主要表现为发热、头痛、全身酸痛、干咳及肺浸润等。病毒性肺炎的发生与病毒的毒力、感染途径以及宿主的年龄、免疫功能状态等有关。一般小儿发病率高于成人",
        "explanation_japanese": "ウイルス性肺炎は、上気道のウイルスが感染して下に広がることで起こる肺の炎症です。この病気は一年中発生することができて、しかし大部分は冬と春の季節に見られて、暴発することができてあるいは発散して流行します。発熱、頭痛、全身の凝り、空咳、肺浸潤などが主な症状です。ウイルス性肺炎の発生には、ウイルスの毒性、感染経路や宿主の年齢、免疫機能の状態などが関係しています。一般的に小児は成人より発症率が高くなります",
        "corresponding_expression_chinese": "小儿肺炎以病毒性肺炎的频率最多(约85%)",
        "corresponding_expression_japanese": "小児の肺炎は，頻度的にはウイルス性肺炎が最も多い（約８５％）",
        "application_scenario_chinese": "医学诊断、症状说明",
        "application_scenario_japanese": "医療診断です。症状を説明する時に使われることが多いです。",
        "source": "今日の診断指針",
        "corresponding_expression_source": "医学書院2002"
    },
    {
        "chinese": "病毒",
        "japanese": "ウイルス",
        "explanation_chinese": "病毒是一种个体微小，结构简单，只含一种核酸（DNA或RNA），必须在活细胞内寄生并以复制方式增殖的非细胞型生物。",
        "explanation_japanese": "ウイルスは、一種類の核酸(DNAやRNA)しか持たない単純な個体で、生きた細胞に寄生して複製増殖しなければならない非細胞型の生物です。",
        "corresponding_expression_chinese": "病毒筛选，基因检测",
        "corresponding_expression_japanese": "ウイルス，スクリーニング遺伝子検査",
        "application_scenario_chinese": "医用术语",
        "application_scenario_japanese": "医療用語です",
        "source": "専門医が語るエイズの知識",
        "corresponding_expression_source": "オーム社\t2000吉原なみ子，霜山龍志|共著"
    },
    {
        "chinese": "便秘",
        "japanese": "便秘べんぴ",
        "explanation_chinese": "对人类（或其他动物）粪便难以排出情况的统称。",
        "explanation_japanese": "ヒト（または他の動物）において便の排泄が困難になっている状態の総称である。",
        "corresponding_expression_chinese": "经常便秘吗",
        "corresponding_expression_japanese": "便秘しやすいですか",
        "application_scenario_chinese": NaN,
        "application_scenario_japanese": NaN,
        "source": "医疗术语语句集",
        "corresponding_expression_source": "医疗术语语句集"
    },
    {
        "chinese": "鼻饲法",
        "japanese": "鼻飼育法",
        "explanation_chinese": "在特殊情况下人工把胃管经鼻腔置入食道中，先把食物用磨碎机打糊，用大注射器连接胃管接头下面的大注食口，连接牢固后，手动加压推杆活塞往患者胃中打水和食物，帮助不能自主吞咽的患者提供水和食物，维持体内代谢、体重和营养。",
        "explanation_japanese": "特殊な状況下で人工的に胃管を鼻腔を通って食道の中に入れて、先に食べ物をすりつぶす机で糊を打って、大きい注射器で胃管の継手の下の大きい注食口を連結して、連結がしっかりしてから、手働加圧のレバーのピストンは患者の胃の中に水と食べ物を打って、自分で飲み込むことができない患者を助けて水と食べ物を提供して、体内代謝、体重と栄養を維持します。",
        "corresponding_expression_chinese": "根据病人情况无法正常饮食",
        "corresponding_expression_japanese": "患者の状態によってはまともに食事ができません",
        "application_scenario_chinese": "护理操作",
        "application_scenario_japanese": "ケア作業の一種です。",
        "source": "中国实用护理杂志",
        "corresponding_expression_source": "中国实用护理杂志"
    },
    {
        "chinese": "白蛋白",
        "japanese": "アルブミン",
        "explanation_chinese": "人体血浆中最主要的蛋白质，维持机体营养与渗透压。",
        "explanation_japanese": "人体の血漿の中で最も主要な蛋白質で、体の栄養と浸透圧を維持します。",
        "corresponding_expression_chinese": "肝硬化中的白蛋白代谢",
        "corresponding_expression_japanese": "肝硬変におけるアルブミン代謝",
        "application_scenario_chinese": "医疗领域，症状说明，生物化学与分子生物学",
        "application_scenario_japanese": "医学診断、症状説明，生化学と分子生物学です",
        "source": "医疗术语语句集",
        "corresponding_expression_source": "医疗术语语句集"
    },
    {
        "chinese": "暗示疗法",
        "japanese": "暗示療法",
        "explanation_chinese": "暗示疗法是指通过非批评性的暗示使患者产生认知、情感和行为改变的心理治疗技术。其基本假设：有些身心失常患者的人格结构并非存在问题，而是因生活适应遇到困难，若诱导其改变自我观念，即可解除其心理困扰。治疗可采用不同类型的暗示，如自我暗示与他人暗示、直接暗示与间接暗示、言语暗示与非言语暗示等。暗示的内容包括给予情绪上的支持和举例，鼓励患者尝试克服自己的困难",
        "explanation_japanese": "暗示療法とは、非批判的な暗示によって患者の認知や感情、行動を変化させる心理療法のことです。精神障害者の中には、人格構造に問題があるのではなく、生活の適応に困難がある人がいて、それを誘導すれば心理的な悩みは解消される、という仮説が基本です。自己暗示と他人暗示、直接暗示と間接暗示、言語暗示と非言語暗示など、様々な種類の暗示が用いられます。暗示の内容には感情的な支援や患者に困難を克服しようとするよう促す実例が含まれています",
        "corresponding_expression_chinese": "暗示疗法(催眠疗法)是一种历史悠久的心理疗法。",
        "corresponding_expression_japanese": "他の治療法の基礎となった暗示療法（催眠療法）暗示療法は古い歴史をもつ心理療法です。",
        "application_scenario_chinese": "心理学术语",
        "application_scenario_japanese": "心理学の用語です",
        "source": "薬物療法から森田療法までQ&A",
        "corresponding_expression_source": "保健同人社1995樋口正元|著"
    },
    {
        "chinese": "氨水",
        "japanese": "アンモニア水",
        "explanation_chinese": "氨水又称阿摩尼亚水，指氨的水溶液，主要成分为NH3·H2O，无色透明且具有刺激性气味。氨水易挥发，具有部分碱的通性，由氨气通入水中制得。工业氨水是含氨25%～28%的水溶液，氨水中仅有一小部分氨分子与水反应形成铵离子和氢氧根离子，即一水合氨，是仅存在于氨水中的弱碱。",
        "explanation_japanese": "アンモニア水はアンモニア水とも呼ばれ、主成分はNH3・H2Oで、無色透明で刺激臭があります。アンモニア水は揮発しやすくて、一部のアルカリの通性を持って、アンモニア気が水中に入って制得します。工業アンモニア水はアンモニアの25% ~ 28%の水溶液を含んで、アンモニア水の中でアンモニア分子の一部だけが水と反応してアンモニウムイオンと水酸化物イオンを形成して、すなわち一水合アンモニアは、アンモニア水の中にのみ存在する弱アルカリです。",
        "corresponding_expression_chinese": "如果使用刚购买的新试剂，氨水的添加量大约为25ml。",
        "corresponding_expression_japanese": "購入したばかりの新しい試薬を用いた場合，アンモニア水 の添加量はおおよそ２５ｍＬ程度である。",
        "application_scenario_chinese": "化学物质",
        "application_scenario_japanese": "化学物質です",
        "source": "ケイ酸・リン酸・硝酸塩の定量分析",
        "corresponding_expression_source": "技報堂出版2002奥修|著"
    },
    {
        "chinese": "氨基酸",
        "japanese": "アミノ酸",
        "explanation_chinese": "氨基酸，是一类含有碱性氨基和酸性羧基的两性有机化合物，是生物功能大分子蛋白质的基本组成单位",
        "explanation_japanese": "アミノ酸は、塩基アミノ基と酸性カルボキシル基を含む両性有機化合物で、生体機能高分子タンパク質の基本的な構成単位です",
        "corresponding_expression_chinese": "由于氨基酸残基外露，埋在脂质2分子膜疏水部，两端有亲水性氨基酸残基外露，与水相接触。",
        "corresponding_expression_japanese": "アミノ酸残基が表面に出ているために脂質２分子膜疎水部に埋まっており，両端は親水性アミノ酸残基が表に出ており水相に接触している",
        "application_scenario_chinese": "化学物质",
        "application_scenario_japanese": "化学物質です",
        "source": "超分子化学への展開",
        "corresponding_expression_source": "岩波書店2000有賀克彦，国武豊喜|著"
    },
    {
        "chinese": "安乐死",
        "japanese": "安楽死",
        "explanation_chinese": "安乐死指对无法救治的病人停止治疗或使用药物，让病人无痛苦地死去。“安乐死”一词源于希腊文，意思是“幸福”地死亡。它包括两层含义，一是安乐的无痛苦死亡；二是无痛致死术。",
        "explanation_japanese": "安楽死とは、病気の治療を中止したり、薬を使ったりして、苦痛なく死なせることです。「安楽死」はギリシャ語で「幸せに」死ぬという意味です。それは2つの意味を含んで、1つは安楽な無苦痛死です;二つ目は無痛致死術です。",
        "corresponding_expression_chinese": "与高龄老人的“尊严死”相关的医疗，并没有在老人保险中得到照顾。也有涉及“安乐死”和“协助自杀”的问题。",
        "corresponding_expression_japanese": "高齢老人の「尊厳死」に関わる医療は、老人保険では配慮されていない。「安楽死」や「自殺幇助」に関わる問題もある。",
        "application_scenario_chinese": "医用术语",
        "application_scenario_japanese": "医療用語です",
        "source": "わたしの患者さんは恵比寿様",
        "corresponding_expression_source": "日本文学館2005伊保庄健|著"
    },
    {
        "chinese": "阿司匹林",
        "japanese": "アスピリン",
        "explanation_chinese": "阿司匹林（Aspirin），又名乙酰水杨酸，是一种有机化合物，化学式为C9H8O4，为白色结晶性粉末，溶于乙醇、乙醚，微溶于水，主要用作解热镇痛、非甾体抗炎药，抗血小板聚集药，经近百年的临床应用，证明对缓解轻度或中度疼痛，如牙痛、头痛、神经痛、肌肉酸痛及痛经效果较好，亦用于感冒、流感等发热疾病的退热，治疗风湿痛等，能阻止血栓形成，临床上用于预防短暂脑缺血发作、心肌梗死、人工心脏瓣膜和静脉瘘或其他手术后血栓的形成。",
        "explanation_japanese": "アスピリン(Aspirin)またはアセチルサリチル酸は有機化合物で、化学式C9H8O4の白色結晶性粉末です。エタノールやジエチルエーテルに可溶で、水には微溶です。歯痛、頭痛、神経痛、筋肉痛、生理痛などに効果がありますが、風邪やインフルエンザなどの発熱疾患の解熱、リウマチなどの痛みの治療で血栓ができないようにしたり、一時的な脳虚血発作や心筋梗塞、人工心臓弁・静脈瘻(ろう)、手術後の血栓の予防にも使われています。",
        "corresponding_expression_chinese": "解热镇痛消炎药咖啡因和茶碱可以提高阿司匹林、苯丁胺松和其他解热镇痛消炎药(NSAIDs)的效果",
        "corresponding_expression_japanese": "解熱鎮痛消炎剤カフェインやテオフィリンは、アスピリン、フェニルブタゾン、その他の解熱鎮痛消炎剤（ＮＳＡＩＤｓ）の効果を高め",
        "application_scenario_chinese": "药品名称",
        "application_scenario_japanese": "薬品名です",
        "source": "カフェインの科学",
        "corresponding_expression_source": "学会出版センター2004"
    },
    {
        "chinese": "阿米巴痢疾",
        "japanese": "アメーバ赤痢",
        "explanation_chinese": "阿米巴肠病是由于溶组织阿米巴（痢疾阿米巴）寄生于结肠内，引起阿米巴痢疾或阿米巴结肠炎。痢疾阿米巴也是根足虫纲中最重要的致病种类，在一定条件下，并可扩延至肝、肺、脑、泌尿生殖系和其他部位，形成溃疡和脓肿。",
        "explanation_japanese": "アメーバ腸疾患は、溶存組織アメーバ(赤痢アメーバ)が結腸に寄生して、アメーバ赤痢やアメーバ結腸炎を引き起こします。赤痢アメーバは根足虫綱の中でも最も重要な病原種で、ある条件下では、肝臓、肺、脳、生殖器系、その他の部位にまで拡大し、潰瘍や膿瘍を形成します。",
        "corresponding_expression_chinese": "由于这种病毒的感染，生物对微生物感染的防御机制降低，有时会引起阿米巴痢疾(赤癖阿米巴引起的痢疾)和神经系统卡里尼肺炎。",
        "corresponding_expression_japanese": "（赤癖アメーバによる赤痢）やニューモシスティス・カリーニ肺炎を発病することがあり",
        "application_scenario_chinese": "医学诊断、症状说明",
        "application_scenario_japanese": "医療診断です。症状を説明する時に使われることが多いです。",
        "source": "微生物vs.人類",
        "corresponding_expression_source": "講談社2005"
    },
    {
        "chinese": "阿尔茨海默病",
        "japanese": "アルツハイマー病",
        "explanation_chinese": "AD，是一种中枢神经系统的退行性病变，主要发生在老年或老年前期。疾病的主要特征包括进行性的认知功能障碍和行为损害。阿尔茨海默氏病是痴呆症最常见的形式",
        "explanation_japanese": "ADは中枢神経系の退行性疾患で主に高齢期や前期高齢期に発症します主な特徴として、進行性の認知機能障害と行動障害があります。アルツハイマー病は認知症の最も一般的な形態です",
        "corresponding_expression_chinese": "我祖父患有老年痴呆症。",
        "corresponding_expression_japanese": "祖父はアルツハイマー病でした",
        "application_scenario_chinese": "医学诊断",
        "application_scenario_japanese": "医療診断です。",
        "source": "医疗术语语句集",
        "corresponding_expression_source": "医疗术语语句集"
    },
    {
        "chinese": "X透视",
        "japanese": "レントゲン",
        "explanation_chinese": "应用X线检查人体内各部分的结构是否正常的方法。",
        "explanation_japanese": "体内の各部の構造が正常になっているかどうかをX線で調べる方法です。",
        "corresponding_expression_chinese": "肺癌胸部x光片与组织类型的关系",
        "corresponding_expression_japanese": "肺癌の胸部レントゲン像と組織型との関連",
        "application_scenario_chinese": "护理操作",
        "application_scenario_japanese": "ケア作業の一種です。",
        "source": "医疗术语语句集",
        "corresponding_expression_source": "医疗术语语句集"
    },
    {
        chinese: "牙科低速手机/牙科慢速手机/慢手机",
        japanese: "低速歯科用スケーラー",
        explanation_chinese: "在牙科治疗领域中，为了去除牙面和牙周桶等产生的牙结石和菌斑等而使用的缩放剂的刀片，用砂轮手动研磨时使用的辅助工具。",
        explanation_japanese: "歯科治療分野で歯面や歯周ボケット等に発生する歯石やプラーク等を除去するために使用されるスケーラーの刃を砥石によって手動で研磨するに際して使用される補助具です。",
        corresponding_expression_chinese: "把慢手机拿给我",
        corresponding_expression_japanese: "低速歯科用スケーラー、お願い。",
        application_scenario_chinese: "仪器名称",
        application_scenario_japanese: "機器名です。手術中に使われることが多いです。",
        source:"日本医学会医学用语辞典 英和版第三版",
        corresponding_expression_source: ""
    }
];

// 搜索函数
function search() {
    var input = document.getElementById('search-input').value.trim();  // 获取并清理输入框的值
    var languageSelect = document.getElementById('language-select').value;  // 获取选择的语言
    var resultsDiv = document.getElementById('results');  // 获取结果展示区域的元素
    
    resultsDiv.innerHTML = '';  // 清空之前的搜索结果

    if (input === '') {
        return;  // 如果输入为空，直接返回，不执行后续搜索操作
    }

    // 创建一个正则表达式，'i'标志表示不区分大小写
    var regex = new RegExp(input, 'i');

    // 过滤数据，只保留匹配正则表达式的项
    var filteredData = data.filter(function(item) {
        // 根据语言选择，匹配中文或日文内容
        return languageSelect === 'chinese' ? 
               regex.test(item.chinese) || regex.test(item.corresponding_expression_chinese) : 
               regex.test(item.japanese) || regex.test(item.corresponding_expression_japanese);
    });

    // 遍历过滤后的数据，为每个项创建搜索结果元素
    filteredData.forEach(function(item) {
        var resultItemDiv = document.createElement('div');
        resultItemDiv.className = 'result-item';  // 设置结果项的类名
        
        // 创建并设置词条标题元素
        var termTitle = document.createElement('h3');
        termTitle.className = 'term-title';

        // 添加关键词小喇叭图标
        var chineseSpeakerIcon = document.createElement('img');
        chineseSpeakerIcon.src = 'img/speaker.png';
        chineseSpeakerIcon.className = 'speaker-icon';
        chineseSpeakerIcon.onclick = function() {
            speak(item.chinese, 'zh-CN');
        };
        var chineseSpan = document.createElement('span');
        chineseSpan.textContent = item.chinese;
        termTitle.appendChild(chineseSpeakerIcon);
        termTitle.appendChild(chineseSpan);

        var japaneseSpeakerIcon = document.createElement('img');
        japaneseSpeakerIcon.src = 'img/speaker.png';
        japaneseSpeakerIcon.className = 'speaker-icon';
        japaneseSpeakerIcon.onclick = function() {
            speak(item.japanese, 'ja-JP');
        };
        var japaneseSpan = document.createElement('span');
        japaneseSpan.textContent = item.japanese;
        termTitle.appendChild(document.createElement('br'));
        termTitle.appendChild(japaneseSpeakerIcon);
        termTitle.appendChild(japaneseSpan);

        resultItemDiv.appendChild(termTitle);

        // 创建解释、相应表达和应用场景的展示部分
        resultItemDiv.appendChild(createSection('解释', item.explanation_chinese, item.explanation_japanese, languageSelect, item.source));
        resultItemDiv.appendChild(createSection('应用场景', item.application_scenario_chinese, item.application_scenario_japanese, languageSelect));
        resultItemDiv.appendChild(createSectionWithSpeaker('相应表达', item.corresponding_expression_chinese, item.corresponding_expression_japanese, languageSelect, item.corresponding_expression_source));

        resultsDiv.appendChild(resultItemDiv);  // 将结果项添加到结果展示区域
    });
}

function createSection(title, chineseContent, japaneseContent, languageSelect, source) {
    var sectionDiv = document.createElement('div');
    sectionDiv.className = 'result-section';

    var titleSpan = document.createElement('span');
    titleSpan.className = 'result-section-title';
    titleSpan.textContent = title + ': ';
    sectionDiv.appendChild(titleSpan);

    var contentDiv = document.createElement('div');
    contentDiv.className = 'result-section-content';
    sectionDiv.appendChild(contentDiv);

    var primaryContent = document.createElement('p');
    var secondaryContent = document.createElement('p');

    // 根据用户选择的语言显示顺序
    if (languageSelect === 'chinese') {
        primaryContent.textContent = chineseContent;
        secondaryContent.textContent = japaneseContent;
    } else {
        primaryContent.textContent = japaneseContent;
        secondaryContent.textContent = chineseContent;
    }

    contentDiv.appendChild(primaryContent);
    contentDiv.appendChild(secondaryContent);

    // 如果存在出处信息，添加悬停文本
    if (source) {
        var sourceTooltip = createTooltip(source);
        secondaryContent.appendChild(sourceTooltip);
    }

    return sectionDiv;
}

function createSectionWithSpeaker(title, chineseContent, japaneseContent, languageSelect, source) {
    var sectionDiv = document.createElement('div');
    sectionDiv.className = 'result-section';

    var titleSpan = document.createElement('span');
    titleSpan.className = 'result-section-title';
    titleSpan.textContent = title + ': ';
    sectionDiv.appendChild(titleSpan);

    var contentDiv = document.createElement('div');
    contentDiv.className = 'result-section-content';
    sectionDiv.appendChild(contentDiv);

    var primaryContent = document.createElement('div');
    var secondaryContent = document.createElement('div');

    // 根据用户选择的语言显示顺序
    if (languageSelect === 'chinese') {
        primaryContent.innerHTML = '<img src="img/speaker.png" class="speaker-icon" onclick="speak(\'' + chineseContent + '\', \'zh-CN\')">' + chineseContent;
        secondaryContent.innerHTML = '<img src="img/speaker.png" class="speaker-icon" onclick="speak(\'' + japaneseContent + '\', \'ja-JP\')">' + japaneseContent;
    } else {
        primaryContent.innerHTML = '<img src="img/speaker.png" class="speaker-icon" onclick="speak(\'' + japaneseContent + '\', \'ja-JP\')">' + japaneseContent;
        secondaryContent.innerHTML = '<img src="img/speaker.png" class="speaker-icon" onclick="speak(\'' + chineseContent + '\', \'zh-CN\')">' + chineseContent;
    }

    contentDiv.appendChild(primaryContent);
    contentDiv.appendChild(secondaryContent);

    // 如果存在出处信息，添加悬停文本
    if (source) {
        var sourceTooltip = createTooltip(source);
        secondaryContent.appendChild(sourceTooltip);
    }

    return sectionDiv;
}

// 创建悬停文本的函数
function createTooltip(text) {
    var tooltipSpan = document.createElement('span');
    tooltipSpan.className = 'tooltip';
    tooltipSpan.textContent = ' [来源]';

    var tooltipText = document.createElement('span');
    tooltipText.className = 'tooltiptext';
    tooltipText.textContent = text;

    tooltipSpan.appendChild(tooltipText);

    return tooltipSpan;
}

function showSuggestions(inputText) {
    if (inputText.length === 0) {
        document.getElementById('suggestions-box').innerHTML = '';
        return;
    }

    var languageSelect = document.getElementById('language-select').value;  // 获取选择的语言
    var suggestions = data.filter(item => item.chinese.startsWith(inputText) || item.japanese.startsWith(inputText));
    var suggestionsHTML = suggestions.map(item => {
        if (languageSelect === 'chinese') {
            return `<p onclick="selectSuggestion('${item.chinese}')">${item.chinese} - ${item.japanese}</p>`;
        } else {
            return `<p onclick="selectSuggestion('${item.japanese}')">${item.japanese} - ${item.chinese}</p>`;
        }
    }).join('');
    document.getElementById('suggestions-box').innerHTML = suggestionsHTML;
}

function selectSuggestion(value) {
    document.getElementById('search-input').value = value;
    search();  // 触发搜索函数
    document.getElementById('suggestions-box').innerHTML = '';  // 清空建议列表
}

function speak(text, lang) {
    var msg = new SpeechSynthesisUtterance(text);
    msg.lang = lang;
    window.speechSynthesis.speak(msg);
}

// 当页面加载完成后，绑定搜索按钮的点击事件到搜索函数
document.addEventListener('DOMContentLoaded', function() {
    var searchButton = document.getElementById('search-button');
    if (searchButton) {
        searchButton.addEventListener('click', search);
    }
});
