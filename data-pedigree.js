// ================================================================
// data-pedigree.js — 血統ツリー用データ（実在サラブレッド系譜）
//
// METAHORSEの血統名(data-bloodlines.js の window.BLOODLINES キー)は、
// 実在するサラブレッドの系統名と一致している。本ファイルはその実系譜を
// 三大始祖（Darley Arabian / Godolphin Arabian / Byerley Turk）を根とした
// 木構造で表現する。
//
// 【出典・信頼度について】
// 各ノードの親子関係はpedigreequery.com / Wikipedia / BloodHorse等での
// 裏取りに基づく（2026-07 調査）。世代数が多い区間は主要な分岐点のみに
// 圧縮している（例：DarleyArabian→Phalarisの間は実際には複数世代あるが、
// 本ツリーでは可読性のため直結させている）。
// "Zeddaan" は当初中間系統が未確証でDarley Arabian直下に暫定配置していたが、
// JBIS-Search/HorseTelex/pedigreequery/Aga Khan Studsで裏取りの上、
// 実際の父はGrey Sovereign（1948）と確認できたためGrey Sovereign直下（Fortinoの
// 兄弟枝）に修正済み（2026-07-11）。
// "Partholon" は当初Sadler's Wells産駒として誤登録していたが、JBIS/SporthorseData
// で裏取りの上、実際はMilesian産駒（Herod系＝Byerley Turk系）と確認できたため
// Byerley Turk枝下に修正済み（2026-07-12）。
// なお "Round Table" はChatGPT系資料で「Godolphin Arabian系」とされることがあるが、
// 実際のサイアーラインはPrincequillo→Prince Rose→St. Simon→Eclipse→Darley Arabian
// （tbheritage/Wikipedia で確認済み）。Godolphin系（Matchem系）ではないので注意。
//
// 【ノード種別 kind】
//   "founder"   : 三大始祖
//   "connector" : 実在するが、METAHORSEの血統名（BLOODLINESのキー）には
//                 該当しない中継ノード（系譜上の経由点）。ツリー上は小さく
//                 表示し、タップしても血統モーダルは開かない。
//   "blood"     : BLOODLINESのキーと一致するMETAHORSEの血統名。タップで
//                 モーダルを開く。
//
// 【成長型について】
// 新しい血統がdata-bloodlines.jsに追加された場合、実系譜が判明次第、
// 該当する枝の children 配列にノードを追加するだけで良い（座標は
// index.html内setupTree()の樹形図（dendrogram）レイアウトが自動計算する）。
// ================================================================
window.BLOODLINE_TREE = [
  {
    name: "Darley Arabian", kind: "founder", children: [
      {
        name: "Phalaris", kind: "connector", children: [
          {
            name: "Nearco", kind: "connector", children: [
              {
                name: "Nasrullah", kind: "connector", children: [
                  { name: "Never Bend", kind: "blood", children: [
                    { name: "Mill Reef", kind: "blood", children: [] }
                  ]},
                  { name: "Grey Sovereign", kind: "connector", children: [
                    { name: "Fortino", kind: "connector", children: [
                      { name: "Caro", kind: "blood", children: [] }
                    ]},
                    { name: "Zeddaan", kind: "blood", children: [] }
                  ]},
                  { name: "Red God", kind: "connector", children: [
                    { name: "Blushing Groom", kind: "blood", children: [] }
                  ]},
                  { name: "Bold Ruler", kind: "connector", children: [
                    { name: "Boldnesian", kind: "connector", children: [
                      { name: "Bold Reasoning", kind: "connector", children: [
                        { name: "Seattle Slew", kind: "blood", children: [] }
                      ]}
                    ]}
                  ]}
                ]
              },
              {
                name: "Nearctic", kind: "connector", children: [
                  { name: "Northern Dancer", kind: "blood", children: [
                    { name: "Nijinsky", kind: "blood", children: [] },
                    { name: "Nureyev", kind: "blood", children: [] },
                    { name: "Danzig", kind: "blood", children: [] },
                    { name: "Northern Taste", kind: "blood", children: [] },
                    { name: "Lyphard", kind: "blood", children: [] },
                    { name: "Sadler's Wells", kind: "blood", children: [] },
                    { name: "Vice Regent", kind: "connector", children: [
                      { name: "Deputy Minister", kind: "connector", children: [
                        { name: "French Deputy", kind: "blood", children: [] }
                      ]}
                    ]}
                  ]}
                ]
              },
              {
                name: "Royal Charger", kind: "connector", children: [
                  { name: "Turn-to", kind: "connector", children: [
                    { name: "Hail to Reason", kind: "connector", children: [
                      { name: "Halo", kind: "blood", children: [
                        { name: "Sunday Silence", kind: "connector", children: [
                          { name: "Stay Gold", kind: "blood", children: [] }
                        ]}
                      ]},
                      { name: "Roberto", kind: "blood", children: [] }
                    ]}
                  ]}
                ]
              }
            ]
          },
          {
            name: "Sickle", kind: "connector", children: [
              { name: "Unbreakable", kind: "connector", children: [
                { name: "Polynesian", kind: "connector", children: [
                  { name: "Native Dancer", kind: "blood", children: [
                    { name: "Raise a Native", kind: "connector", children: [
                      { name: "Mr.Prospector", kind: "blood", children: [
                        { name: "Forty Niner", kind: "blood", children: [] }
                      ]}
                    ]}
                  ]}
                ]}
              ]}
            ]
          }
        ]
      },
      {
        name: "Princequillo系（St. Simon〜Prince Rose系統）", kind: "connector", children: [
          { name: "Round Table", kind: "blood", children: [] }
        ]
      }
    ]
  },
  {
    name: "Godolphin Arabian", kind: "founder",
    note: "現存する主要種牡馬系統としてはほぼ途絶。現行のMETAHORSE血統に該当なし。",
    children: []
  },
  {
    name: "Byerley Turk", kind: "founder", children: [
      { name: "Herod", kind: "connector", children: [
        { name: "Woodpecker", kind: "connector", children: [
          { name: "Castrel系", kind: "connector", children: [
            { name: "The Tetrarch", kind: "blood", children: [] }
          ]}
        ]},
        { name: "Tourbillon系（Djebel〜My Babu〜Milesian）", kind: "connector", children: [
          { name: "Partholon", kind: "blood", children: [] }
        ]}
      ]}
    ]
  }
];

// 三大始祖そのものをタップした際の簡易紹介文
window.FOUNDER_INFO = {
  "Darley Arabian": "18世紀初頭に英国へ渡ったアラビア馬。子孫Eclipseの系統が現代サラブレッドの9割以上を占める、最大の始祖。",
  "Godolphin Arabian": "18世紀の三大始祖の一頭。子孫Matchemの系統は栄えたが、現代の主要種牡馬にはほぼ残っていない。",
  "Byerley Turk": "三大始祖の中で最も古い一頭。子孫Herodの系統は近年希少になりつつあるが、The Tetrarchなど名馬を輩出した。"
};

// 「実在の代表名馬」モーダル用の簡易紹介文。
// 確証のある事実のみを記載し、詳細戦績等が未確認のものは系統情報に留める。
window.PEDIGREE_BIOS = {
  "Halo": "1969年生、Hail to Reason産駒。自身も活躍したが、後に「Sunday Silence」の父として一時代を築いた大種牡馬。",
  "Stay Gold": "1994年生、Sunday Silence産駒（Halo系）。息の長い現役生活と数々の名勝負で日本競馬史に残るファンの人気馬。",
  "Roberto": "1969年生、Halo同様Hail to Reasonの産駒。1972年英ダービー馬で、後に日本のTBサイアーラインにも影響を残した。",
  "Mr.Prospector": "1970年生、Raise a Native（Native Dancer系）の産駒。スピード種牡馬の代名詞として世界の血統図を塗り替えた。",
  "Mr. Prospector": "1970年生、Raise a Native（Native Dancer系）の産駒。スピード種牡馬の代名詞として世界の血統図を塗り替えた。",
  "Forty Niner": "1985年生、Mr.Prospector産駒。自身も一流の競走馬で、父の系統を広げたスピード血統の担い手。",
  "Native Dancer": "1950年生。現役ほぼ無敗（大一番で二着のみ）の「グレイゴースト」。子孫は現代競走馬の大半に及ぶ。",
  "Partholon": "1960年愛国生、Milesian産駒（Herod系＝Byerley Turk系）。日本へ渡り、メジロアサマや無敗三冠馬シンボリルドルフを出した名種牡馬。",
  "Never Bend": "1960年生、Nasrullah産駒。米2歳王者。欧州で成功したNasrullah系の橋渡し役となった。",
  "Mill Reef": "1968年生、Never Bend産駒。1971年英ダービー・凱旋門賞馬。欧州にNasrullah系を根付かせた名種牡馬。",
  "Zeddaan": "1965年生、Grey Sovereign産駒（Nasrullah系）。父同様の芦毛でフランスを中心に走り、種牡馬入りした一頭。",
  "The Tetrarch": "1911年生。無敗の2歳チャンピオン「Spotted Wonder（斑の奇跡）」。現存が稀なByerley Turk系の代表格。",
  "Seattle Slew": "1974年生、Bold Reasoning産駒（Nasrullah系）。1977年、無敗のまま米3冠を制した伝説の一頭。",
  "Caro": "1967年生、Fortino産駒（Nasrullah系）。フランスの一流マイラーで、後に優れた種牡馬としても評価された。",
  "Nureyev": "1977年生、Northern Dancer産駒。ヨーロッパで爆発的なスピードを伝えた影響力の大きい種牡馬。",
  "Northern Dancer": "1961年生。1964年ケンタッキーダービー・プリークネス制覇。20世紀最大の影響力を持つ大種牡馬。",
  "Blushing Groom": "1974年生、Red God産駒（Nasrullah系）。フランスの一流マイラーで、スタミナ豊富な産駒を多数輩出。",
  "Sadler's Wells": "1981年生、Northern Dancer産駒。欧州リーディングサイアーの座を長年守った屈指の名種牡馬。",
  "Round Table": "1954年生、Princequillo産駒。米リーディングサイアーとなった、タフさで知られる名馬。",
  "French Deputy": "1992年生、Deputy Minister産駒（Northern Dancer系Vice Regent支流）。スプリント〜マイル路線の名種牡馬。",
  "Northern Taste": "1971年生、Northern Dancer産駒。日本に渡り一時代を築いた輸入種牡馬。",
  "Danzig": "1977年生、Northern Dancer産駒。現役無敗のまま種牡馬入りし、世界的な名種牡馬ラインを築いた。",
  "Lyphard": "1969年生、Northern Dancer産駒。欧州・米国で成功したオールラウンドな種牡馬。",
  "Nijinsky": "1967年生、Northern Dancer産駒。1970年、20世紀では稀な英3冠馬（Triple Crown）に輝いた。"
};
