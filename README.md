# PitchLab · Football Tactics Studio
web⬇️
https://chainlab-physics.netlify.app

**A bilingual Arabic / English tactical sandbox: arrange generic players, place the ball anywhere, and explore passes in 2D or 3D.**

[العربية](#العربية)

## The idea

A sports analyst can reconstruct a position without photographs or scanned player models, name the generic figures, move the ball independently, and compare possible kicks. PitchLab combines a tactics board with an illustrative ball simulation and a replay timeline.

## Included features

- Instant switching between a top-down 2D board and an orbitable 3D perspective.
- Generic geometric player figures, editable names, shirt numbers, coordinates and facing.
- Two teams with 4–3–3, 4–4–2 and 3–5–2 presets; up to 16 figures per team.
- Mouse / touch dragging for players and the ball; selected-player arrow-key movement (Shift for larger steps).
- Place the ball at a player's feet, move them together, or drag the ball to detach it. Set ball placement height up to 3 m.
- Aim anywhere on the pitch; tune speed, loft and side spin. Pass, cross and shot presets.
- Gravity, quadratic air drag, ground friction, bounce and collision with stationary players. A nearby player animates a kick.
- Predicted trajectory, pause / resume, 0.25×–2× playback and a scrub timeline.
- Tactical arrows, player influence zones and a geometric passing-lane check.
- Goal / out-of-play notifications, speed, distance, height and peak-height measurements.
- Undo, browser save / load, JSON import / export and PNG pitch snapshots.
- Arabic RTL and English LTR interfaces. No API keys, external fonts, tracking, account or backend.

## Run

Unzip the project and open **`dist/index.html`** in a modern browser. All assets are local. For more consistent browser storage behavior, serve the folder:

```bash
python3 -m http.server 8080 --directory dist
```

Open `http://localhost:8080`. Node.js is needed only to run the optional tests, not to use the app. No `npm install` is required.

## First play

1. Select or drag a player. Edit their name and number in the inspector.
2. Click **Place ball at player’s feet**, or drag the ball to any position.
3. Tap empty turf to aim, or use **Target** if the target overlaps a player.
4. Choose a preset and adjust speed, loft and spin.
5. Click **Kick & simulate**. Pause, change speed or scrub the timeline.
6. Switch to **2D Board** or **3D Studio** at any time. In 3D use Orbit, View angle and Zoom.
7. Use **Arrow** to draw a tactical line. Export your play to share its editable setup.

The target sets the **direction**, not a guaranteed landing point. Speed, loft, spin, friction and collisions determine the outcome. A kick begins from the ball's current position; use **Reset ball** to return to the start of the most recent simulation. Replay contains ball motion; players stay stationary during the kick.

**Save / Load** stores one play in this browser. Exported JSON stores the current players, ball, target, arrows and kick settings, not the replay history. Moving or editing the scene clears the previous replay. PNG snapshots contain the pitch, not the surrounding controls.

## Publish on GitHub

1. Create a GitHub repository and upload the extracted project contents, preserving `dist/`, `tests/`, `package.json` and `.github/workflows/pages.yml`.
2. Use `main` as your default branch, or change the branch in the workflow.
3. Under repository **Settings → Pages**, choose **GitHub Actions** as the build source.
4. Push to `main`, or run **Deploy PitchLab to GitHub Pages** from Actions. The deployment job displays your published URL.

Official guide: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

The included workflow runs checks and publishes the static `dist/` folder. The relative asset URLs support a repository subpath. There are no tokens or secrets to configure in the app. The source package does not create a repository automatically.

## Project structure

```text
.github/workflows/pages.yml   GitHub Pages deployment
 dist/index.html             Bilingual interface
 dist/style.css              Responsive layout and themes
 dist/app.js                 XYZ projection, controls, rendering, replay, persistence
 dist/physics.js             Independent fixed-step ball simulation
 tests/physics.test.cjs      Physics behavior checks
 package.json               Test command; no dependencies
 LICENSE                    MIT license for the source
```

## Physics and rendering

The world uses metres and seconds on a 105 × 68 m pitch. Physics integrates at 120 Hz; replay samples at 30 Hz. Gravity is 9.81 m/s². The drag coefficient, spin acceleration, friction, restitution and player collision radius are hand-tuned illustrative parameters. Their values are in `dist/physics.js`.

3D uses actual XYZ coordinates and perspective projection, drawn with the Canvas 2D API. It is a lightweight software renderer, not a WebGL engine or photorealistic model. Figures and the ball are enlarged visually for readability; the ball's collision radius is 0.22 m. Camera changes do not change the physical world.

Player influence zones are **fixed 7 m circles**, not speed-aware interception predictions. A lane is contested when an opponent lies within **2 m of the direct segment** from ball to target; it ignores flight height and timing. Goals use a ball crossing check at the goal line. Goal frames and nets are visual only, without collision response. There are no automatic player runs, offside adjudication, goalkeeper AI, video tracking, multiplayer, match data or predictive analytics.

Generic figures and neutral colors are included; there are no licensed player assets, club logos or real player likenesses. Names are free text supplied by the user. The MIT license covers this source, not third-party names, trademarks, data or assets a user later adds.

## Validation

```bash
npm test
```

Tests verify ground deceleration, loft / bounce, mirrored spin, player collisions and vertical flight. JavaScript syntax checks are included. A separate development smoke check exercised naming, possession, simulation, replay scrubbing, save / load, language switching, formation changes, coordinate inversion and import validation. Pitch renderings were inspected. Full browser/device interaction QA remains recommended before production use.

## Powerful next steps

Future extensions, not included in this version: animated player-route sequencing, synchronized video annotations, calibrated kick models, multi-step set-piece libraries, analyst collaboration and real match-event imports.

---

## العربية

### الفكرة

**PitchLab** مساحة للمحلل الرياضي لإنشاء لقطة تكتيكية بمجسمات عامة، وتسميتها وتحريكها، ثم وضع الكرة في أي مكان وتجربة التمريرات والتسديدات. يمكنك التبديل فوراً بين العرض الثنائي والثلاثي الأبعاد.

### المميزات المتاحة

- فريقان وتشكيلات جاهزة، مع تعديل أسماء اللاعبين وأرقامهم ومواقعهم واتجاههم.
- تحريك بالماوس أو اللمس، ووضع الكرة عند قدم اللاعب أو فصلها وسحبها بحرية.
- التحكم بسرعة الركلة وزاوية الرفع والدوران الجانبي وارتفاع وضع الكرة.
- محاكاة الجاذبية والارتداد والاحتكاك واصطدام الكرة باللاعبين الثابتين.
- مسار متوقع وإعادة بطيئة وشريط زمني وأدوات رسم الأسهم.
- مناطق تأثير توضيحية وفحص هندسي لمسار التمريرة.
- حفظ وتحميل داخل المتصفح واستيراد وتصدير JSON وتنزيل صورة للملعب.
- واجهة عربية من اليمين لليسار وإنجليزية من اليسار لليمين، بلا خادم أو مفاتيح API.

### التشغيل

فك الضغط وافتح **`dist/index.html`**. أو شغّل الأمر التالي من مجلد المشروع:

```bash
python3 -m http.server 8080 --directory dist
```

ثم افتح `http://localhost:8080`. لا تحتاج إلى تثبيت مكتبات.

### الاستخدام

1. اختر لاعباً وعدّل اسمه ورقمه، ثم اسحبه إلى المكان المطلوب.
2. اضغط «وضع الكرة عند قدم اللاعب»، أو اسحب الكرة لأي مكان.
3. اضغط على مساحة فارغة لتحديد اتجاه الركلة، أو استخدم أداة «تصويب».
4. اضبط السرعة والرفع والدوران ثم اضغط «ركل ومحاكاة».
5. أوقف المحاكاة أو غيّر السرعة أو حرّك شريط الإعادة.
6. بدّل بين العرضين واستخدم الدوران والتقريب لتغيير زاوية المشاهدة.

الهدف يحدد الاتجاه فقط ولا يضمن نقطة سقوط الكرة. اللاعبون ثابتون أثناء المحاكاة. زر إعادة الكرة يعيدها لبداية المحاكاة الأخيرة. التصدير يحفظ الحالة الحالية وإعدادات الركلة، ولا يحفظ سجل الإعادة. الحفظ داخل المتصفح يتسع لخطة واحدة، لذلك استخدم التصدير للاحتفاظ بعدة خطط.

### ملفات GitHub

ارفع محتويات المشروع إلى مستودع GitHub مع الاحتفاظ ببنية المجلدات، بما فيها `.github/workflows/pages.yml`. من **Settings → Pages** اختر **GitHub Actions**. عند رفع تحديث إلى فرع `main` سيشغّل سير العمل الاختبارات وينشر مجلد `dist`. ستجد رابط الموقع في نتيجة النشر.

### حدود النسخة

الفيزياء تقريبية للتوضيح وليست توقعاً علمياً لنتيجة المباراة. مناطق التأثير دوائر ثابتة نصف قطرها ٧ أمتار. فحص مسار التمريرة يعتمد على قرب الخصوم من الخط المباشر ولا يحسب ارتفاع الكرة أو توقيت وصول اللاعب. المرمى والشبكة للعرض دون تصادم فيزيائي. المجسمات عامة، ولا تتضمن الأداة صور لاعبين أو شعارات أندية. لا تتضمن هذه النسخة تحليل فيديو أو ذكاء اصطناعياً أو تحركات لاعبين آلية.

الكود تحت رخصة MIT. راجع الرخص والحقوق المناسبة لأي أسماء أو بيانات أو أصول تضيفها لاحقاً.
