---
title: Formatting Samples 
date: 2024-03-23T09:57:19-07:00
draft: true
random_yaml: test
tags:
    - one
    - two
    - three
---

# Test

*Tests* with **some** [sample](http://google.com/) ***formatting***.

## here is a headings:

### code sample
```
import re

def hello():
    print('hey')
````
### Hebrew sample:

#### block
<div class="hebrew">
נֹצֵ֥ר חֶ֙סֶד֙ לָאֲלָפִ֔ים נֹשֵׂ֥א עָוֺ֛ן וָפֶ֖שַׁע וְחַטָּאָ֑ה וְנַקֵּה֙ לֹ֣א יְנַקֶּ֔ה פֹּקֵ֣ד׀ עֲוֺ֣ן אָב֗וֹת עַל־בָּנִים֙ וְעַל־בְּנֵ֣י
בָנִ֔ים עַל־שִׁלֵּשִׁ֖ים וְעַל־רִבֵּעִֽים׃ וַיְמַהֵ֖ר מֹשֶׁ֑ה וַיִּקֹּ֥ד אַ֖רְצָה וַיִּשְׁתָּֽחוּ׃ וַיֹּ֡אמֶר אִם־נָא֩ מָצָ֨אתִי חֵ֤ן
בְּעֵינֶ֙יךָ֙ אֲדֹנָ֔י יֵֽלֶךְ־נָ֥א אֲדֹנָ֖י בְּקִרְבֵּ֑נוּ כִּ֤י עַם־קְשֵׁה־עֹ֙רֶף֙ ה֔וּא וְסָלַחְתָּ֛ לַעֲוֺנֵ֥נוּ וּלְחַטָּאתֵ֖נוּ וּנְחַלְתָּֽנוּ

לׅׄוּלֵׅ֗ׄאׅׄ הֶ֭אֱמַנְתִּי לִרְא֥וֹת בְּֽטוּב־יְהוָ֗ה בְּאֶ֣רֶץ חַיִּֽים׃
קַוֵּ֗ה אֶל־יְה֫וָ֥ה חֲ֭זַק וְיַאֲמֵ֣ץ לִבֶּ֑ךָ וְ֝קַוֵּ֗ה אֶל־יְהוָֽה׃

</div>

#### inline

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ne, dum huic
obsequor, vobis molestus sim. Hoc ne statuam quidem dicturam pater aiebat, si
loqui posset. Inde igitur, inquit, ordiendum est. Ergo hoc quidem apparet, nos
This is a <span class="hebrew"> חַטָּאתֵ֖נוּ  לׅׄוּלֵׅ֗ׄאׅׄ</span> word in Hebrew. ad agendum esse
natos. Aliter enim explicari, quod quaeritur, non potest. Esse
enim quam vellet iniquus iustus poterat inpune. 


### Greek

#### block

<div class="greek">
ἐν αὐτῷ ζωὴ ἦν, καὶ ἡ ζωὴ ἦν τὸ φῶς τῶν ἀνθρώπων· Ἐν ἀρχῇ ἦν ὁ λόγος, καὶ ὁ
λόγος ἦν πρὸς τὸν θεόν, καὶ θεὸς ἦν ὁ λόγος. 2 οὗτος ἦν ἐν ἀρχῇ πρὸς τὸν θεόν.
3 πάντα διʼ αὐτοῦ ἐγένετο, καὶ χωρὶς αὐτοῦ ἐγένετο οὐδὲ ἕν.a ὃ γέγονενb 4 ἐν1
αὐτῷ ζωὴ ἦν2, καὶ ἡ ζωὴ ἦν τὸ φῶς τῶν ἀνθρώπων· 5 καὶ τὸ φῶς ἐν τῇ σκοτίᾳ
φαίνει, καὶ ἡ σκοτία αὐτὸ οὐ κατέλαβεν. </div>

#### inline

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ne, dum huic
obsequor, vobis molestus sim. Hoc ne statuam quidem dicturam pater aiebat, si
loqui posset. Inde igitur, inquit, ordiendum est. Ergo hoc quidem apparet, nos
Here is <span class="greek">αὐτῷ</span>, a greek word. Lorem ipsum dolor sit
amet, consectetur adipiscing elit. Sed ne, dum huic obsequor, vobis molestus
sim. Hoc ne statuam quidem dicturam pater aiebat, si loqui posset. Inde igitur,
inquit, ordiendum est. Ergo hoc quidem apparet, nos

### a table

| Column 1 | Column 2 | Column 3 |
| -------- | -------- | -------- |
| Cell 1A  | Cell 2A  | Cell 3A  |
| Cell 1B  | Cell 2B  | Cell 3B  |

<table>
<tr>
  <th class="attr">Aspect</th>
  <th class="attr">Attr</th>
  <th class="hebrew_column">Qal</th>
  <th class="hebrew_column">Niphal</th>
  <th class="hebrew_column">Piel</th>
  <th class="hebrew_column">Pual</th>
  <th class="hebrew_column">Hiphil</th>
  <th class="hebrew_column">Hophal</th>
  <th class="hebrew_column">Hitpael</th>
</tr>
<tr>
  <!-- Aspect/Tense -->
  <th rowspan="9">Qātal/<wbr>Perfect</th>
  <!-- Attribute -->
  <th>3MS</th>
  <!-- Qal -->
  <td class="hebrew">כָּתַב</td>
  <!-- Nifal -->
  <td class="hebrew">נִכְתַּב</td>
  <!-- Piel -->
  <td class="hebrew">כִּתֵּב</td>
  <!-- Pual -->
  <td class="hebrew">כֻּתַּב</td>
  <!-- Hiphil -->
  <td class="hebrew">הִכְתִּיב</td>
  <!-- Hophal -->
  <td class="hebrew">הָכְתַּב</td>
  <!-- Hithpael -->
  <td class="hebrew">הִתְכַּתֵּב</td>
</tr>
<tr>
  <!-- Attribute -->
  <th>3FS</th>
  <!-- Qal -->
  <td class="hebrew">כָּֽתְבָה</td>
  <!-- Nifal -->
  <td class="hebrew">נִכְתְּבָה</td>
  <!-- Piel -->
  <td class="hebrew">כִּתְּבָה</td>
  <!-- Pual -->
  <td class="hebrew">כֻּתְּבָה</td>
  <!-- Hiphil -->
  <td class="hebrew">הִכְתִּ֫יבָה</td>
  <!-- Hophal -->
  <td class="hebrew">הָכְתְּבָה</td>
  <!-- Hithpael -->
  <td class="hebrew">הִתְכַּתְּבָה</td>
</tr>
<tr>
  <!-- Attribute -->
  <th>2MS</th>
  <!-- Qal -->
  <td class="hebrew">כָּתַ֫בְתָּ</td>
  <!-- Nifal -->
  <td class="hebrew">נִכְתַּ֫בְתָּ</td>
  <!-- Piel -->
  <td class="hebrew">כִּתַּ֫בְתָּ</td>
  <!-- Pual -->
  <td class="hebrew">כֻּתַּ֫בְתָּ</td>
  <!-- Hiphil -->
  <td class="hebrew">הִכְתַּ֫בְתָּ</td>
  <!-- Hophal -->
  <td class="hebrew">הָכְתַּ֫בְתָּ</td>
  <!-- Hithpael -->
  <td class="hebrew">הִתְכַּתַּ֫בְתָּ</td>
</tr>
<tr>
  <!-- Attribute -->
  <th>2FS</th>
  <!-- Qal -->
  <td class="hebrew">כָּתַבְתְּ</td>
  <!-- Nifal -->
  <td class="hebrew">נִכְתַּבְתְּ</td>
  <!-- Piel -->
  <td class="hebrew">כִּתַּבְתְּ</td>
  <!-- Pual -->
  <td class="hebrew">כֻּתַּבְתְּ</td>
  <!-- Hiphil -->
  <td class="hebrew">הִכְתַּבְתְּ</td>
  <!-- Hophal -->
  <td class="hebrew">הָכְתַּבְתְּ</td>
  <!-- Hithpael -->
  <td class="hebrew">הִתְכַּתַּבְתְּ</td>
</tr>
<tr>
  <!-- Attribute -->
  <th>1CS</th>
  <!-- Qal -->
  <td class="hebrew">כָּתַ֫בְתִּי</td>
  <!-- Nifal -->
  <td class="hebrew">נִכְתַּ֫בְתִּי</td>
  <!-- Piel -->
  <td class="hebrew">כִּתַּ֫בְתִּי</td>
  <!-- Pual -->
  <td class="hebrew">כֻּתַּ֫בְתִּי</td>
  <!-- Hiphil -->
  <td class="hebrew">הִכְתַּ֫בְתִּי</td>
  <!-- Hophal -->
  <td class="hebrew">הָכְתַּ֫בְתִּי</td>
  <!-- Hithpael -->
  <td class="hebrew">הִתְכַּתַּ֫בְתִּי</td>
</tr>
<tr>
  <!-- Attribute -->
  <th>3CP</th>
  <!-- Qal -->
  <td class="hebrew">כָּֽתְבוּ</td>
  <!-- Nifal -->
  <td class="hebrew">נִכְתְּבוּ</td>
  <!-- Piel -->
  <td class="hebrew">כִּתְּבוּ</td>
  <!-- Pual -->
  <td class="hebrew">כֻּתְּבוּ</td>
  <!-- Hiphil -->
  <td class="hebrew">הִכְתִּ֫יבוּ</td>
  <!-- Hophal -->
  <td class="hebrew">הָכְתְּבוּ</td>
  <!-- Hithpael -->
  <td class="hebrew">הִתְכַּתְּבוּ</td>
</tr>
<tr>
  <!-- Attribute -->
  <th>2MP</th>
  <!-- Qal -->
  <td class="hebrew">כְּתַבְתֶּם</td>
  <!-- Nifal -->
  <td class="hebrew">נִכְתַּבְתֶּם</td>
  <!-- Piel -->
  <td class="hebrew">כִּתַּבְתֶּם</td>
  <!-- Pual -->
  <td class="hebrew">כֻּתַּבְתֶּם</td>
  <!-- Hiphil -->
  <td class="hebrew">הִכְתַּבְתֶּם</td>
  <!-- Hophal -->
  <td class="hebrew">הָכְתַּבְתֶּם</td>
  <!-- Hithpael -->
  <td class="hebrew">הִתְכַּתַּבְתֶּם</td>
</tr>
<tr>
  <!-- Attribute -->
  <th>2FP</th>
  <!-- Qal -->
  <td class="hebrew">כְּתַבְתֶּן</td>
  <!-- Nifal -->
  <td class="hebrew">נִכְתַּבְתֶּן</td>
  <!-- Piel -->
  <td class="hebrew">כִּתַּבְתֶּן</td>
  <!-- Pual -->
  <td class="hebrew">כֻּתַּבְתֶּן</td>
  <!-- Hiphil -->
  <td class="hebrew">הִכְתַּבְתֶּן</td>
  <!-- Hophal -->
  <td class="hebrew">הָכְתַּבְתֶּן</td>
  <!-- Hithpael -->
  <td class="hebrew">הִתְכַּתַּבְתֶּן</td>
</tr>
<tr>
  <!-- Attribute -->
  <th>1CP</th>
  <!-- Qal -->
  <td class="hebrew">כָּתַ֫בְנוּ</td>
  <!-- Nifal -->
  <td class="hebrew">נִכְתַּ֫בְנוּ</td>
  <!-- Piel -->
  <td class="hebrew">כִּתַּ֫בְנוּ</td>
  <!-- Pual -->
  <td class="hebrew">כֻּתַּ֫בְנוּ</td>
  <!-- Hiphil -->
  <td class="hebrew">הִכְתַּ֫בְנוּ</td>
  <!-- Hophal -->
  <td class="hebrew">הָכְתַּ֫בְנוּ</td>
  <!-- Hithpael -->
  <td class="hebrew">הִתְכַּתַּ֫בְנוּ</td>
</tr>
<tr>
  <!-- Aspect/Tense -->
  <th rowspan="10">Yiqtōl/<wbr>Imperfect</th>
  <!-- Attribute -->
  <th>3MS</th>
  <!-- Qal -->
  <td class="hebrew">יִכְתֹּב</td>
  <!-- Nifal -->
  <td class="hebrew">יִכָּתֵב</td>
  <!-- Piel -->
  <td class="hebrew">יְכַתֵּב</td>
  <!-- Pual -->
  <td class="hebrew">יְכֻתַּב</td>
  <!-- Hiphil -->
  <td class="hebrew">יַכְתִּיב</td>
  <!-- Hophal -->
  <td class="hebrew">יָכְתַּב</td>
  <!-- Hithpael -->
  <td class="hebrew">יִתְכַּתֵּב</td>
</tr>
<tr>
  <!-- Attribute -->
  <th>3FS</th>
  <!-- Qal -->
  <td class="hebrew">תִּכְתֹּב</td>
  <!-- Nifal -->
  <td class="hebrew">תִּכָּתֵב</td>
  <!-- Piel -->
  <td class="hebrew">תְּכַתֵּב</td>
  <!-- Pual -->
  <td class="hebrew">תְּכֻתַּב</td>
  <!-- Hiphil -->
  <td class="hebrew">תַּכְתִּיב</td>
  <!-- Hophal -->
  <td class="hebrew">תָּכְתַּב</td>
  <!-- Hithpael -->
  <td class="hebrew">תִּתְכַּתֵּב</td>
</tr>
<tr>
  <!-- Attribute -->
  <th>2MS</th>
  <!-- Qal -->
  <td class="hebrew">תִּכְתֹּב</td>
  <!-- Nifal -->
  <td class="hebrew">תִּכָּתֵב</td>
  <!-- Piel -->
  <td class="hebrew">תְּכַתֵּב</td>
  <!-- Pual -->
  <td class="hebrew">תְּכֻתַּב</td>
  <!-- Hiphil -->
  <td class="hebrew">תַּכְתִּיב</td>
  <!-- Hophal -->
  <td class="hebrew">תָּכְתַּב</td>
  <!-- Hithpael -->
  <td class="hebrew">תִּתְכַּתֵּב</td>
</tr>
<tr>
  <!-- Attribute -->
  <th>2FS</th>
  <!-- Qal -->
  <td class="hebrew">תִּכְתְּבִי</td>
  <!-- Nifal -->
  <td class="hebrew">תִּכָּֽתְבִי</td>
  <!-- Piel -->
  <td class="hebrew">תְּכַתְּבִי</td>
  <!-- Pual -->
  <td class="hebrew">תְּכֻתְּבִי</td>
  <!-- Hiphil -->
  <td class="hebrew">תַּכְתִּ֫יבִי</td>
  <!-- Hophal -->
  <td class="hebrew">תָּכְתְּבִי</td>
  <!-- Hithpael -->
  <td class="hebrew">תִּתְכַּתְּבִי</td>
</tr>
<tr>
  <!-- Attribute -->
  <th>1CS</th>
  <!-- Qal -->
  <td class="hebrew">אֶכְתֹּב</td>
  <!-- Nifal -->
  <td class="hebrew">אֶכָּתֵב</td>
  <!-- Piel -->
  <td class="hebrew">אֲכַתֵּב</td>
  <!-- Pual -->
  <td class="hebrew">אֲכֻתַּב</td>
  <!-- Hiphil -->
  <td class="hebrew">אַכְתִּיב</td>
  <!-- Hophal -->
  <td class="hebrew">אָכְתַּב</td>
  <!-- Hithpael -->
  <td class="hebrew">אֶתְכַּתֵּב</td>
</tr>
<tr>
  <!-- Attribute -->
  <th>3MP</th>
  <!-- Qal -->
  <td class="hebrew">יִכְתְּבוּ</td>
  <!-- Nifal -->
  <td class="hebrew">יִכָּֽתְבוּ</td>
  <!-- Piel -->
  <td class="hebrew">יְכַתְּבוּ</td>
  <!-- Pual -->
  <td class="hebrew">יְכֻתְּבוּ</td>
  <!-- Hiphil -->
  <td class="hebrew">יַכְתִּ֫יבוּ</td>
  <!-- Hophal -->
  <td class="hebrew">יָכְתְּבוּ</td>
  <!-- Hithpael -->
  <td class="hebrew">יִתְכַּתְּבוּ</td>
</tr>
<tr>
  <!-- Attribute -->
  <th>3FP</th>
  <!-- Qal -->
  <td class="hebrew">תִּכְתֹּ֫בְנָה</td>
  <!-- Nifal -->
  <td class="hebrew">תִּכָּתַ֫בְנָה</td>
  <!-- Piel -->
  <td class="hebrew">תְּכַתֵּ֫בְנָה</td>
  <!-- Pual -->
  <td class="hebrew">תְּכֻתַּ֫בְנָה</td>
  <!-- Hiphil -->
  <td class="hebrew">תַּכְתֵּ֫בְנָה</td>
  <!-- Hophal -->
  <td class="hebrew">תָּכְתַּ֫בְנָה</td>
  <!-- Hithpael -->
  <td class="hebrew">תִּתְכַּתַּ֫בְנָה</td>
</tr>
<tr>
  <!-- Attribute -->
  <th>2MP</th>
  <!-- Qal -->
  <td class="hebrew">תִּכְתְּבוּ</td>
  <!-- Nifal -->
  <td class="hebrew">תִּכָּֽתְבוּ</td>
  <!-- Piel -->
  <td class="hebrew">תְּכַתְּבוּ</td>
  <!-- Pual -->
  <td class="hebrew">תְּכֻתְּבוּ</td>
  <!-- Hiphil -->
  <td class="hebrew">תַּכְתִּ֫יבוּ</td>
  <!-- Hophal -->
  <td class="hebrew">תָּכְתְּבוּ</td>
  <!-- Hithpael -->
  <td class="hebrew">תִּתְכַּתְּבוּ</td>
</tr>
<tr>
  <!-- Attribute -->
  <th>2FP</th>
  <!-- Qal -->
  <td class="hebrew">תִּכְתֹּ֫בְנָה</td>
  <!-- Nifal -->
  <td class="hebrew">תִּכָּתַ֫בְנָה</td>
  <!-- Piel -->
  <td class="hebrew">תְּכַתֵּ֫בְנָה</td>
  <!-- Pual -->
  <td class="hebrew">תְּכֻתַּ֫בְנָה</td>
  <!-- Hiphil -->
  <td class="hebrew">תַּכְתֵּ֫בְנָה</td>
  <!-- Hophal -->
  <td class="hebrew">תָּכְתַּ֫בְנָה</td>
  <!-- Hithpael -->
  <td class="hebrew">תִּתְכַּתַּ֫בְנָה</td>
</tr>
<tr>
  <!-- Attribute -->
  <th>1CP</th>
  <!-- Qal -->
  <td class="hebrew">נִכְתֹּב</td>
  <!-- Nifal -->
  <td class="hebrew">נִכָּתֵב</td>
  <!-- Piel -->
  <td class="hebrew">נְכַתֵּב</td>
  <!-- Pual -->
  <td class="hebrew">נְכֻתַּב</td>
  <!-- Hiphil -->
  <td class="hebrew">נַכְתִּיב</td>
  <!-- Hophal -->
  <td class="hebrew">נָכְתַּב</td>
  <!-- Hithpael -->
  <td class="hebrew">נִתְכַּתֵּב</td>
</tr>

<tr>
  <!-- Aspect/Tense -->
  <th rowspan="1">Cohortative</th>
  <!-- Attribute -->
  <th>1CS</th>
  <!-- Qal -->
  <td class="hebrew">אֶכְתְּבָה</td>
  <!-- Nifal -->
  <td class="hebrew">אִכָּֽתְבָה</td>
  <!-- Piel -->
  <td class="hebrew">אֲכַתְּבָה</td>
  <!-- Pual -->
  <td class="hebrew">—</td>
  <!-- Hiphil -->
  <td class="hebrew">אַכְתִּ֫יבָה</td>
  <!-- Hophal -->
  <td class="hebrew">—</td>
  <!-- Hithpael -->
  <td class="hebrew">אֶתְכַתְּבָה</td>
</tr>
<tr>
  <!-- Aspect/Tense -->
  <th rowspan="1">Jussive</th>
  <!-- Attribute -->
  <th>3MS</th>
  <!-- Qal -->
  <td class="hebrew">יִכְתֹּב</td>
  <!-- Nifal -->
  <td class="hebrew">יִכָּתֵב</td>
  <!-- Piel -->
  <td class="hebrew">יְכַתֵּב</td>
  <!-- Pual -->
  <td class="hebrew">יְכֻתַּב</td>
  <!-- Hiphil -->
  <td class="hebrew">יַכְתֵּב</td>
  <!-- Hophal -->
  <td class="hebrew">יָכְתַּב</td>
  <!-- Hithpael -->
  <td class="hebrew">יִתְכַּתֵּב</td>
</tr>

<tr>
  <!-- Aspect/Tense -->
  <th rowspan="4">Imperative</th>
  <!-- Attribute -->
  <th>2MS</th>
  <!-- Qal -->
  <td class="hebrew">כְּתֹב</td>
  <!-- Nifal -->
  <td class="hebrew">הִכָּתֵב</td>
  <!-- Piel -->
  <td class="hebrew">כַּתֵּב</td>
  <!-- Pual -->
  <td class="hebrew">—</td>
  <!-- Hiphil -->
  <td class="hebrew">הַכְתֵּב</td>
  <!-- Hophal -->
  <td class="hebrew">—</td>
  <!-- Hithpael -->
  <td class="hebrew">הִתְכַּתֵּב</td>
</tr>
<tr>
  <!-- Attribute -->
  <th>2FS</th>
  <!-- Qal -->
  <td class="hebrew">כִּתְבִי</td>
  <!-- Nifal -->
  <td class="hebrew">הִכָּֽתְבִי</td>
  <!-- Piel -->
  <td class="hebrew">כַּתְּבִי</td>
  <!-- Pual -->
  <td class="hebrew">—</td>
  <!-- Hiphil -->
  <td class="hebrew">הַכְתִּ֫יבִי</td>
  <!-- Hophal -->
  <td class="hebrew">—</td>
  <!-- Hithpael -->
  <td class="hebrew">הִתְכַּתְּבִי</td>
</tr>
<tr>
  <!-- Attribute -->
  <th>2MP</th>
  <!-- Qal -->
  <td class="hebrew">כִּתְבוּ</td>
  <!-- Nifal -->
  <td class="hebrew">הִכָּֽתְבוּ</td>
  <!-- Piel -->
  <td class="hebrew">כַּתְּבוּ</td>
  <!-- Pual -->
  <td class="hebrew">—</td>
  <!-- Hiphil -->
  <td class="hebrew">הַכְתִּ֫יבוּ</td>
  <!-- Hophal -->
  <td class="hebrew">—</td>
  <!-- Hithpael -->
  <td class="hebrew">הִתְכַּתְּבוּ</td>
</tr>
<tr>
  <!-- Attribute -->
  <th>2FP</th>
  <!-- Qal -->
  <td class="hebrew">כְּתֹ֫בְנָה</td>
  <!-- Nifal -->
  <td class="hebrew">הִכָּתַ֫בְנָה</td>
  <!-- Piel -->
  <td class="hebrew">כַּתֵּ֫בְנָה</td>
  <!-- Pual -->
  <td class="hebrew">—</td>
  <!-- Hiphil -->
  <td class="hebrew">הַכְתֵּ֫בְנָה</td>
  <!-- Hophal -->
  <td class="hebrew">—</td>
  <!-- Hithpael -->
  <td class="hebrew">הִתְכַּתַּ֫בְנָה</td>
</tr>

<tr>
  <!-- Aspect/Tense -->
  <th rowspan="2">Infinitive</th>
  <!-- Attribute -->
  <th>Construct</th>
  <!-- Qal -->
  <td class="hebrew">כְּתֹב</td>
  <!-- Nifal -->
  <td class="hebrew">הִכָּתֵב</td>
  <!-- Piel -->
  <td class="hebrew">כַּתֵּב</td>
  <!-- Pual -->
  <td class="hebrew">כֻּתַּב</td>
  <!-- Hiphil -->
  <td class="hebrew">הַכְתִּיב</td>
  <!-- Hophal -->
  <td class="hebrew">הָכְתַּב</td>
  <!-- Hithpael -->
  <td class="hebrew">הִתְכַּתֵּב</td>
</tr>
<tr>
  <!-- Attribute -->
  <th>Absolute</th>
  <!-- Qal -->
  <td class="hebrew">כָּתוֹב</td>
  <!-- Nifal -->
  <td class="hebrew">נִכְתֹּב</td>
  <!-- Piel -->
  <td class="hebrew">כַּתֵּב</td>
  <!-- Pual -->
  <td class="hebrew">כֻּתֹּב</td>
  <!-- Hiphil -->
  <td class="hebrew">הַכְתֵּב</td>
  <!-- Hophal -->
  <td class="hebrew">הָכְתֵּב</td>
  <!-- Hithpael -->
  <td class="hebrew">הִתְכַּתֵּב</td>
</tr>

<tr>
  <!-- Aspect/Tense -->
  <th rowspan="2">Participle</th>
  <!-- Attribute -->
  <th>MS Active</th>
  <!-- Qal -->
  <td class="hebrew">כֹּתֵב</td>
  <!-- Nifal -->
  <td class="hebrew">—</td>
  <!-- Piel -->
  <td class="hebrew">מְכַתֵּב</td>
  <!-- Pual -->
  <td class="hebrew">—</td>
  <!-- Hiphil -->
  <td class="hebrew">מַכְתִּיב</td>
  <!-- Hophal -->
  <td class="hebrew">—</td>
  <!-- Hithpael -->
  <td class="hebrew">מִתְכַּתֵּב</td>
</tr>
<tr>
  <!-- Attribute -->
  <th>MS Passive</th>
  <!-- Qal -->
  <td class="hebrew">כָּתוּב</td>
  <!-- Nifal -->
  <td class="hebrew">נִכְתָּב</td>
  <!-- Piel -->
  <td class="hebrew">—</td>
  <!-- Pual -->
  <td class="hebrew">מְכֻתָּב</td>
  <!-- Hiphil -->
  <td class="hebrew">—</td>
  <!-- Hophal -->
  <td class="hebrew">מָכְתָּב</td>
  <!-- Hithpael -->
  <td class="hebrew">—</td>
</tr>

</table>


