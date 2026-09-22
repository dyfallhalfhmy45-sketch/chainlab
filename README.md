# Chainlab · مختبر التفاعلات المتسلسلة

A bilingual Arabic/English Rube Goldberg playground powered by Matter.js 0.20.0. Runs entirely in your browser, without a backend, API key, or build step.

## Play
Open `dist/index.html`, or serve `dist` using `python -m http.server 8000 --directory dist` and visit http://localhost:8000.

- **Challenges:** 100 deterministic variations across five downhill-track chapters. Fill the missing ramp and guide the golden ball into the mint receiver. These are generated geometry variations, not 100 handcrafted mechanisms.
- **Sandbox:** combine ramps, balls, dominoes, freely rotating toothed gears, spring platforms, pulleys, launchers and walls.
- Select a tool and tap/click the board. Select Move to drag existing user parts. Rotate using the slider. Reset before editing after simulation starts.
- Run/pause, single-step, and 0.5× / 1× / 2× speed controls.
- Three progressively revealing hints per challenge; the third exposes a place-solution button. Hint usage and completions are saved in this browser and survive reset. Browser storage can be cleared by the user.
- Export/import machines as versioned JSON. GitHub import accepts a public `https://github.com/owner/repo/blob/branch/file.json` URL. Branch names containing slashes are not supported; download and import JSON instead. GitHub rate limits and network availability apply. No GitHub writes or authentication are performed.
- Download the complete source from GitHub & files.

## Physics and visual model
Matter.js calculates 2D rigid-body collisions, gravity, rotational inertia and elastic constraints at a fixed 120 Hz timestep. Shading and extruded edges provide a 3D aesthetic; this is **2D physics, not a 3D engine**. Gears are passive pivoted compound bodies with colliding teeth. Springs combine an elastic platform constraint with a collision impulse. Launchers supply energy on contact. The pulley uses a simplified two-weight rope-length coupling, not a precision engineering model. The challenges teach inclined-plane motion; the other tools are available for free experimentation.

The complete set of 100 reference solutions was simulated with the actual Matter.js engine to verify that each reaches its receiver. Browser visual testing was not available in the static preview environment. This is an educational game, not an engineering simulator.

## Publish on GitHub Pages
1. Create your own GitHub repository.
2. Upload **the contents of `dist`** at the repository root, including `index.html`, `app.js`, `style.css`, `matter.min.js`, `MATTER-LICENSE.txt` and `chainlab-source.zip` if you want the in-app source download.
3. Add this README and LICENSE.
4. In repository Settings → Pages, select deployment from the `main` branch and `/ (root)` folder.
5. Use the Pages URL GitHub displays after deployment.

No paid APIs or build tools are required. Matter.js is included locally. Optional Google Fonts require internet access, with system-font fallbacks. Progress is device-local; there is no cloud synchronization.

## بالعربية
تطبيق لبناء آلات التفاعل المتسلسل، بواجهة عربية وإنجليزية وفيزياء ثنائية الأبعاد ومظهر مجسّم.

### التشغيل
افتح `dist/index.html`، أو شغّل خادمًا محليًا بالأمر أعلاه. اختر قطعة واضغط على اللوحة لإضافتها، واسحبها للتحريك ثم عدّل زاويتها. اضغط تشغيل، وأعد المحاكاة قبل التعديل.

### المميزات
- 100 مرحلة مولدة بتغييرات هندسية ضمن خمسة فصول تعليمية للمسارات المائلة، وليست 100 آلة مصممة يدويًا.
- بناء حر: منحدرات، كرات، دومينو، تروس، نوابض، بكرات، قاذفات وحواجز.
- ثلاثة تلميحات لكل مرحلة، وآخرها يتيح وضع الحل.
- حفظ التقدم والتلميحات على جهازك.
- تصدير واستيراد JSON، واستيراد ملفات عامة من GitHub دون مفاتيح.
- لا يوجد خادم خلفي أو اشتراك أو مؤثرات صوتية.

### الرفع إلى GitHub
أنشئ مستودعًا، ثم ارفع محتويات مجلد `dist` إلى جذره، وأضف README وLICENSE. فعّل Pages من الإعدادات باستخدام فرع main ومجلد الجذر. سيظهر رابط الموقع في صفحة Pages.

التروس تدور بالتصادم، والقاذفات تضيف طاقة، ونموذج البكرة مبسّط. المظهر مجسّم لكن المحاكاة ثنائية الأبعاد. اختُبرت حلول المراحل المئة بمحرك الفيزياء؛ لم يتوفر فحص بصري آلي للمتصفح.

## License
Application code: MIT. Matter.js: MIT, see `dist/MATTER-LICENSE.txt`.
