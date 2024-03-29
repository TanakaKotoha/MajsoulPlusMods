// 修改语音台词以及人物简介
requestAnimationFrame(function autoRun() {
  try {
    const arrBackup = cfg.voice.sound.groups_
    if (!arrBackup || arrBackup.length === 0) {
      throw new Error();
    }
    console.log('Hacked语音文本');
    Object.entries(cfg.voice.sound.groups_).forEach(([soundID, soundGroup]) => {
      if (soundID == 8) {
        const changeMap = {
		  "终局一位语音": {
           "words": '谢谢各位。'
          },
          "获得语音": {
            "words": '大家好，我是罗翔（大嘘）。'
          },
          "登录语音普通": {
            "words": '黑格尔说：历史给人们的唯一教训就是人类从来不吸取教训。但是我希望——我们能够吸取历史的教训。'
          },
          "登录语音满羁绊": {
            "words": '您准备好了吗？跟人类伟大的灵魂对话，用她的利斧去劈开你那冰冷、傲慢、自恋与自怜的内心。'
          },
          "大厅交互语音1": {
            "words": '这种人渣（指发牌姬）留在世界上干嘛？拖出去！我家的狗好几天没吃肉了。对吧？我家养了八条中华田园犬，专门用于来吃这种人渣的！'
          },
          "大厅交互语音2": {
            "words": '前几天二阶堂美树咨询我一个法律问题，我吓了一跳，就跟这有关。她说“九条，我问您一个法律问题——我想开个妓院行不行？”我吓一跳，我说你什么人嘛……'
          },
          "大厅交互语音3": {
            "words": '我和一姬有仇，我天天晚上做梦都想着怎么把她给干掉。每天做梦一个杀人计划，做了365天梦都不重样的，365种死法对吧……'
          },
          "大厅交互语音4": {
            "words": '我20天没吃饭了，我快饿死了，看到一只熊猫能不能吃？当然可以吃——烧着吃烤着吃都可以。如果没衣服穿快冻死了，把熊猫皮剥下来穿在身上。这个叫什么？紧急避险。'
          },
          "大厅交互语音5": {
            "words": '我把卡维的果照——这样吧，我们说一个难一点的——我把卡维的大头照和色情图片中的图库拼在一起——理解我的意思没有——然后发在网上，上面写了她的名字、电话号码，然后还写：“一夜100000铜币，量大从优。”结果她的电话被打爆，气坏了，跳楼了。该案如何处理？'
          },
          "大厅交互语音6": {
            "words": '大江大海河水，如果自由奔放，可不可怕？非常的可怕，会泛滥成灾的呀！所以为什么有河道、为什么有堤坝——就是希望把这些水引到它应该去的地方。而我们的道德规则就是对人的自由进行合理的引导，从这个意义上而言，道德规则、法律不是限制的自由，而是让人更好地去行使自由。'
          },
          "大厅交互语音7": {
			"words": '我们对于重要的人身法益是不能放弃的——因为一旦放弃整个自由秩序就会崩溃。即便按自由主义者穆勒的观点来认为，自愿卖身为奴也是不能被允许的——因为自由不允许以放弃自由作为代价。'
          },
          "大厅交互语音8": {
            "words": '法律要倡导良善的价值观——法律要倾听民众的声音，但要超越民众的偏见。'
          },
          "送礼物语音普通": {
            "words": '那这种感觉也许是对的，但也许也不是对的。'
          },
          "送礼物语音喜好": {
            "words": '我们很容易对千里之外的他人投放爱心，却无法和我们身边的人保持良好的关系。'
          },
          "好感度升级语音1": {
            "words": '如果我们只凭借我们满腔热情、无视法律规则去追寻正义，那它是不是有可能会导致更坏的结果。往往是那些善良的愿望，会把人们带入人间地狱。'
          },
          "好感度升级语音2": {
            "words": '培根说过——一次犯罪不过是污染了水流，而一次不公正的司法却是污染了水源。问渠那得清如许，为有源头活水来。'
          },
          "好感度升级语音3": {
            "words": '我们一生的成长，其实都是不断约束我们内心的幽暗，每天朝着光明和良善多跑一步。'
          },
          "好感度升级语音4": {
            "words": '不要轻易地对人开启道德判断——好坏在法律中是很难说的。即便是坏人，我们惩罚他也是为了尊重他，我们也要按照程序来惩罚他——因为按照程序来惩罚，这个正义才能走得远，才能走得久，才能走得稳定。'
          },
          "好感度升级语音5": {
            "words": '人为妇人所生，多有忧患。出来如花，又被割下，飞去如影，不能存留。每个人这一生一定会遭遇苦难——那在苦难的时候，你是否依然有继续活下去的勇气？'
          },
          "契约语音": {
            "words": '这个世界不缺聪明的人，这个世界缺的是有智慧的人。就像无问西东所说的：我们不需要完美的人，我们需要的是否能够从心底发出的勇敢、正直、真心和勇气。这个世界上有许许多人都很聪明，但是聪明人不一定有智慧。一个智慧的人一定是一个谦卑的人，承认自己的无知，乃是开启智慧的大门。'
          },
          "特殊语音 - 连续打出多张相同牌": {
            "words": '法律的生命是经验而不是逻辑。'
          },
          "特殊语音 - 打出宝牌": {
            "words": '我怎么就做不到呢（指留宝牌）？除非我吃撑了！'
          },
          "特殊语音 - 余牌少于10": {
            "words": '在每一个人生的重要关口，我们只需要尽力而为，不留遗憾。'
          },
          "特殊语音 - 役满听牌": {
            "words": '大家觉得合不合适？合适的不得了。'
          },
          "特殊语音 - 倍满/三倍满听牌": {
            "words": '所以当出现介入因素（指听牌），我们应该如何来判断呢？'
          }
        };
        soundGroup.forEach(soundObject => {
          soundObject.level_limit = 0;
          if (changeMap.hasOwnProperty(soundObject.name_chs)) {
            for (let [key, val] of Object.entries(changeMap[soundObject.name_chs])) {
              ['_chs', '_en', '_jp'].forEach(suffix => soundObject[key + suffix] = val)
            }
          }
        });
      }
    });
    console.log('Hacked简介文本');
    cfg.item_definition.character.rows_.forEach(chr => {
      const helper = (key, val) => {
        ['', '_chs', '_en', '_jp'].forEach(suffix => chr[key + suffix] = val)
      };
      switch (chr.id) {
        case 200008:
          helper('desc_cv', '罗翔');
          helper('desc', '刑法学家，魂天法考刑法主讲。\n和千织一样出身东京，其父与千织的父亲是故交，由于千织父母常年外出，自幼和千织在一起，负责照顾千织，同时也是千织的亲姐姐一样的存在。\n虽然喜欢研究各种好看的服饰，但也只是闲暇时分的打发时间而已，一天的时间仍然是大多都是花在读书上。不读书的时候也会就时事在网上发表自己的观点，也由于观点经常一针见血而被某些网友攻击谩骂。\n主要代表作：《主客观相统一》、《王座之间的出与入》、《一姬的365种死法》和《拔北正义》等。');
          helper('desc_hobby', '服饰、读书、刑法学研究');
          break;
      }
    });
  } catch (error) {
    raf = requestAnimationFrame(autoRun);
  }
});
