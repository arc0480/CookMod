/*
  チョコレートキャノン (ChocolateCannon)
  ---------------------------------------------------------
  超高レートでチョコレートを発射するタレットです。2種類のチョコレート弾を撃ち分けます。
  - "Chocolete": 高威力・広範囲スプラッシュダメージ＋Inspiration付与
  - "CrackedChocolete": ホーミング性能＋HeartBreak付与＆着弾時に3つのフラグ弾を放つ
  液体とアイテムを必要とし、長射程と高火力が特徴です。

  【主な特徴】
    - サイズ: 3
    - 耐久: 856
    - 射程: 1712
    - リロード: 2.80
    - チャージタイム: 60
    - アイテム容量: 200
    - 液体容量: 1256
    - 建造コスト: 鉛/30、プラスタニウム/40、チタン/100、銅/80、シリコン/150
*/

// 基本情報
name: チョコレートキャノン                // タレット名
description: "チョコレートを超高レートで発射するタレット(激ウマギャグ)" // 説明文
type: itemTurret                         // アイテムタレット
category: turret                         // カテゴリ: タレット
size: 3                                  // サイズ（3x3 タイル）
health: 856                              // 耐久値
targetable: true                         // 攻撃対象になるか
squareSprites: false                     // スプライト形状

// 消費・ストレージ関連
hasPower: false                          // 電力不要
hasLiquid: true                          // 液体消費有り
liquidCapacity: 1256                     // 液体容量
hasItem: true                            // アイテム消費有り
itemCapacity: 200                        // アイテム容量

// 性能
reload: 2.8037                           // リロード間隔
chargeTime: 60                           // チャージタイム
range: 1712                              // 射程
recoil: 2.14                             // 反動
inaccuracy: 21.4                         // 射撃ぶれ
xRand: 2                                 // 横方向ランダム値

// 弾種定義
ammoTypes: {
  // 通常チョコレート弾
  Chocolete: {
    type: basicBulletType                // 弾タイプ
    width: 10                            // 幅
    drawsize: 100                        // 描画サイズ
    hitSize: 10                          // 衝突サイズ
    bulletSprite:                        // スプライト（未指定）
    frontColor: 653200                   // 前面色
    backColor: 653200                    // 背面色

    ammoMultiPlier: 2                    // 弾コスト倍率
    reloadMultiPlier: 1.2                // リロード倍率

    lifetime: 701.4                      // 弾の寿命
    speed: 3                             // 速度
    weaveMag: 2                          // 蛇行幅
    weaveScale: 5                        // 蛇行周期
    bulletShrink: 0                      // 収縮率

    damage: 214                          // 基本ダメージ
    splashDamage: 31.4                   // 範囲ダメージ
    splashDamageRadius: 50               // 範囲
    status: Inspiration                  // ステータス異常付与
    statusDuration: 180                  // ステータス持続
    hitEffect: none                      // ヒットエフェクト
    absorbable: true                     // 吸収可
    pierce: true                         // 貫通可
    pierceArmor: false                   // 装甲貫通不可
  }

  // 割れたチョコレート弾（ホーミング＆フラグ弾）
  CrackedChocolete: {
    type: basicBulletType                // 弾タイプ
    width: 10
    drawsize: 100
    hitSize: 10
    bulletSprite: laser                  // スプライト
    frontColor: 653200
    backColor: 653200

    ammoMultiPlier: 2
    reloadMultiPlier: 2.14

    lifetime: 428
    speed: 5
    weaveMag: 1.07
    weaveScale: 2.14

    homingPower: 0.0214                  // ホーミング強度
    homingDelay: 20                      // ホーミング開始遅延
    homingRange: 180                     // ホーミング範囲

    damage: 170
    status: HeartBreak                   // ステータス異常：ハートブレイク
    statusDuration: 360
    hitEffect: none
    absorbable: true
    pierce: false
    pierceArmor: false

    fragOnHit: true                      // ヒット時分裂
    fragOnAbsorbable: true               // 吸収時分裂
    fragAngle: 1                         // フラグ弾発射角
    fragSpread: 0                        // 拡散
    fragRandumSpread: 0                  // ランダム拡散
    fragBullets: 3                       // フラグ弾数

    fragBullet: {                        // フラグ弾設定
      type: basicBulletType
      width: 20
      drawsize: 30
      hitSize: 3
      bulletSprite: laser
      frontColor: 65B2FF
      color: 65B2FF
      backColor: 65B2FF

      lifetime: 25
      // fragVelocityMax, fragVelocityMin は未設定
      length: 214

      damage: 100
      status: HeartBreak
      statusDuration: 480
      hitEffect: none
      absorbable: false
      pierce: true
      pierceCap: 3
      pierceArmor: true 
    }
  }
}

// 研究ツリー・アンロック情報
research: {
  parent: EffectTurret                   // 親ツリー
  requirements: [
    copper/30                            // 銅30
    lead/40                              // 鉛40
    titanium/25                          // チタン25
  ]
}

// 建造コスト
requirements: [
  lead/30                                // 鉛30
  plastanium/40                          // プラスタニウム40
  titanium/100                           // チタン100
  copper/80                              // 銅80
  silicon/150                            // シリコン150
]

BuildVisibility: shown                   // ビルド表示
buildTime: 128.4                         // 建造時間
