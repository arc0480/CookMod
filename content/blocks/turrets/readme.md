
# 🍫 チョコレートキャノン (ChocolateCannon)

超高レートでチョコレートを発射するタレット。
2種類の弾を撃ち分ける：

* **Chocolete**: 高威力・広範囲スプラッシュ＋`Inspiration`付与
* **CrackedChocolete**: ホーミング＋`HeartBreak`付与＆着弾時に3発のフラグ弾を放つ

---

## 🔹 基本情報

* **name** : チョコレートキャノン
* **description** : チョコレートを超高レートで発射するタレット (激ウマギャグ)
* **type** : itemTurret
* **category** : turret
* **size** : 3 (3x3)
* **health** : 856
* **targetable** : true （攻撃対象になる）
* **squareSprites** : false

---

## 🔹 消費・ストレージ

* **hasPower** : false （電力不要）
* **hasLiquid** : true （液体を消費）
* **liquidCapacity** : 1256
* **hasItem** : true （アイテムを消費）
* **itemCapacity** : 200

---

## 🔹 性能

* **reload** : 2.8037 （リロード間隔）
* **chargeTime** : 60 （チャージタイム）
* **range** : 1712 （射程）
* **recoil** : 2.14 （反動）
* **inaccuracy** : 21.4 （射撃ぶれ）
* **xRand** : 2 （横方向ランダム値）

---

## 🔹 弾種

### 🍫 Chocolete (通常チョコレート弾)

* **type** : basicBulletType
* **width** : 10
* **drawsize** : 100
* **hitSize** : 10
* **bulletSprite** : 未指定
* **frontColor / backColor** : 653200
* **ammoMultiPlier** : 2
* **reloadMultiPlier** : 1.2
* **lifetime** : 701.4
* **speed** : 3
* **weaveMag / weaveScale** : 2 / 5
* **bulletShrink** : 0
* **damage** : 214
* **splashDamage / splashDamageRadius** : 31.4 / 50
* **status** : Inspiration (180秒)
* **hitEffect** : none
* **absorbable** : true
* **pierce** : true
* **pierceArmor** : false

---

### 🍫 CrackedChocolete (割れたチョコレート弾)

* **type** : basicBulletType
* **width** : 10
* **drawsize** : 100
* **hitSize** : 10
* **bulletSprite** : laser
* **frontColor / backColor** : 653200
* **ammoMultiPlier** : 2
* **reloadMultiPlier** : 2.14
* **lifetime** : 428
* **speed** : 5
* **weaveMag / weaveScale** : 1.07 / 2.14
* **homingPower** : 0.0214
* **homingDelay** : 20
* **homingRange** : 180
* **damage** : 170
* **status** : HeartBreak (360秒)
* **hitEffect** : none
* **absorbable** : true
* **pierce** : false
* **pierceArmor** : false
* **fragOnHit** : true
* **fragOnAbsorbable** : true
* **fragAngle** : 1
* **fragSpread / fragRandumSpread** : 0 / 0
* **fragBullets** : 3

#### 🔸 fragBullet (フラグ弾)

* **type** : basicBulletType
* **width** : 20
* **drawsize** : 30
* **hitSize** : 3
* **bulletSprite** : laser
* **frontColor / backColor / color** : 65B2FF
* **lifetime** : 25
* **length** : 214
* **damage** : 100
* **status** : HeartBreak (480秒)
* **hitEffect** : none
* **absorbable** : false
* **pierce** : true (最大3回)
* **pierceArmor** : true

---

## 🔹 研究ツリー

* **parent** : EffectTurret
* **requirements** :

  * copper / 30
  * lead / 40
  * titanium / 25

---

## 🔹 建造コスト

* **requirements** :

  * lead / 30
  * plastanium / 40
  * titanium / 100
  * copper / 80
  * silicon / 150
* **BuildVisibility** : shown
* **buildTime** : 128.4

---

✅ これで「フィールド名 : 内容」の対応が一目でわかる仕様書になりました。

👉 次は「表形式に揃える」か「日本語だけでまとめる」なども可能ですが、このままがいいですか？
