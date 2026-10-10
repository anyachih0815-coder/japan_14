// --- 【第 14 課完整單字庫 (依教材)】 ---
const vocabulary = [
    { kana: "つけます", kanji: "点けます", zh: "開 (空調、電燈等)", cat: "第14課 動詞(II)" },
    { kana: "けします", kanji: "消します", zh: "關 (空調、電燈等)", cat: "第14課 動詞(I)" },
    { kana: "あけます", kanji: "開けます", zh: "開 (門、窗等)", cat: "第14課 動詞(II)" },
    { kana: "しめます", kanji: "閉めます", zh: "關 (門、窗等)", cat: "第14課 動詞(II)" },
    { kana: "いそぎます", kanji: "急ぎます", zh: "趕快、趕緊", cat: "第14課 動詞(I)" },
    { kana: "まちます", kanji: "待ちます", zh: "等候、等待", cat: "第14課 動詞(I)" },
    { kana: "もちます", kanji: "持ちます", zh: "拿、持有", cat: "第14課 動詞(I)" },
    { kana: "とります", kanji: "取ります", zh: "拿取", cat: "第14課 動詞(I)" },
    { kana: "てつだいます", kanji: "手伝います", zh: "幫忙", cat: "第14課 動詞(I)" },
    { kana: "よびます", kanji: "呼びます", zh: "叫、呼喚", cat: "第14課 動詞(I)" },
    { kana: "はなします", kanji: "話します", zh: "說、講話", cat: "第14課 動詞(I)" },
    { kana: "つかいます", kanji: "使います", zh: "使用", cat: "第14課 動詞(I)" },
    { kana: "とめます", kanji: "止めます", zh: "停下、停車", cat: "第14課 動詞(II)" },
    { kana: "みせます", kanji: "見せます", zh: "出示、給人看", cat: "第14課 動詞(II)" },
    { kana: "おしえます", kanji: "教えます", zh: "告訴 (地址)、教導", cat: "第14課 動詞(II)" },
    { kana: "すわります", kanji: "座ります", zh: "坐下", cat: "第14課 動詞(I)" },
    { kana: "たちます", kanji: "立ちます", zh: "站立", cat: "第14課 動詞(I)" },
    { kana: "はいります", kanji: "入ります", zh: "進入 (咖啡館)", cat: "第14課 動詞(I)" },
    { kana: "でます", kanji: "出ます", zh: "離開、出來", cat: "第14課 動詞(II)" },
    { kana: "ふります", kanji: "降ります", zh: "下 (雨)", cat: "第14課 動詞(I)" },
    { kana: "コピーします", kanji: "", zh: "影印", cat: "第14課 動詞(III)" },
    { kana: "でんき", kanji: "電気", zh: "電燈、電氣", cat: "第14課 名詞" },
    { kana: "エアコン", kanji: "", zh: "空調", cat: "第14課 名詞" },
    { kana: "パスポート", kanji: "", zh: "護照", cat: "第14課 名詞" },
    { kana: "なまえ", kanji: "名前", zh: "姓名", cat: "第14課 名詞" },
    { kana: "じゅうしょ", kanji: "住所", zh: "地址", cat: "第14課 名詞" },
    { kana: "ちず", kanji: "地図", zh: "地圖", cat: "第14課 名詞" },
    { kana: "しお", kanji: "塩", zh: "鹽", cat: "第14課 名詞" },
    { kana: "さとう", kanji: "砂糖", zh: "砂糖", cat: "第14課 名詞" },
    { kana: "もんだい", kanji: "問題", zh: "問題", cat: "第14課 名詞" },
    { kana: "こたえ", kanji: "答え", zh: "回答、解答", cat: "第14課 名詞" },
    { kana: "よみかた", kanji: "読み方", zh: "讀法、唸法", cat: "第14課 名詞" },
    { kana: "まっすぐ", kanji: "", zh: "一直、直直地", cat: "第14課 副詞" },
    { kana: "ゆっくり", kanji: "", zh: "慢慢地、好好地", cat: "第14課 副詞" },
    { kana: "すぐ", kanji: "", zh: "馬上", cat: "第14課 副詞" },
    { kana: "また", kanji: "", zh: "再、又", cat: "第14課 副詞" },
    { kana: "あとで", kanji: "", zh: "等一下、稍後", cat: "第14課 副詞" },
    { kana: "もう すこし", kanji: "もう少し", zh: "再稍微～", cat: "第14課 副詞" },
    { kana: "おつり", kanji: "お釣り", zh: "零錢、找的錢", cat: "第14課 名詞" }
];

// --- 【第 14 課精選文型與會話例句】 ---
const sentences = [
    { jp: "ちょっと 待って ください。", zh: "請稍微等一下。" },
    { jp: "荷物を 持ちましょうか。", zh: "我來幫你拿行李吧？" },
    { jp: "ミラーさんは 今 電話を かけて います。", zh: "米勒先生現在正在打電話。" },
    { jp: "ボールペンで 名前を 書いて ください。", zh: "請用原子筆寫姓名。" },
    { jp: "すみませんが、この 漢字の 読み方を 教えて ください。", zh: "不好意思，請告訴我這個漢字的唸法。" },
    { jp: "暑いですね。窓を 開けましょうか。", zh: "好熱呢。要我打開窗戶嗎？" },
    { jp: "駅まで 迎えに 行きましょうか。", zh: "要我去車站接你嗎？" },
    { jp: "雨が 降って いますか。……いいえ、降って いません。", zh: "正在下雨嗎？……不，沒有下。" },
    { jp: "みどり町まで お願いします。", zh: "請載我到綠町。" },
    { jp: "あの 信号を 右へ 曲がって ください。", zh: "請在那個紅綠燈右轉。" },
    { jp: "ええ、まっすぐ 行って ください。", zh: "好的，請一直直走。" },
    { jp: "あの 花屋の 前で 止めて ください。", zh: "請在前面的花店前停車。" },
    { jp: "これで お願いします。", zh: "我用這個付錢。" }
];

// --- 【第 14 課動詞 て形 變化庫】 ---
const verbs = [
    { masu: "かきます", kanji: "書きます", dict: "かく", te: "かいて", group: "I 類動詞", zh: "寫" },
    { masu: "いきます", kanji: "行きます", dict: "いく", te: "いって", group: "I 類動詞 (特例)", zh: "去" },
    { masu: "いそぎます", kanji: "急ぎます", dict: "いそぐ", te: "いそいで", group: "I 類動詞", zh: "趕快" },
    { masu: "のみます", kanji: "飲みます", dict: "のむ", te: "のんで", group: "I 類動詞", zh: "喝" },
    { masu: "よびます", kanji: "呼びます", dict: "よぶ", te: "よんで", group: "I 類動詞", zh: "叫" },
    { masu: "かえります", kanji: "帰ります", dict: "かえる", te: "かえって", group: "I 類動詞", zh: "回家" },
    { masu: "かいます", kanji: "買います", dict: "かう", te: "かって", group: "I 類動詞", zh: "買" },
    { masu: "まちます", kanji: "待ちます", dict: "まつ", te: "まって", group: "I 類動詞", zh: "等" },
    { masu: "かします", kanji: "貸します", dict: "かす", te: "かして", group: "I 類動詞", zh: "借出" },
    { masu: "たべます", kanji: "食べます", dict: "たべる", te: "たべて", group: "II 類動詞", zh: "吃" },
    { masu: "ねます", kanji: "寝ます", dict: "ねる", te: "ねて", group: "II 類動詞", zh: "睡覺" },
    { masu: "おきます", kanji: "起きます", dict: "おきる", te: "おきて", group: "II 類動詞", zh: "起床" },
    { masu: "みます", kanji: "見ます", dict: "みる", te: "みて", group: "II 類動詞", zh: "看" },
    { masu: "あけます", kanji: "開けます", dict: "あける", te: "あけて", group: "II 類動詞", zh: "開門" },
    { masu: "とめます", kanji: "止めます", dict: "とめる", te: "とめて", group: "II 類動詞", zh: "停車" },
    { masu: "きます", kanji: "来ます", dict: "くる", te: "きて", group: "III 類動詞", zh: "來" },
    { masu: "します", kanji: "", dict: "する", te: "して", group: "III 類動詞", zh: "做" },
    { masu: "さんぽします", kanji: "散歩します", dict: "さんぽする", te: "さんぽして", group: "III 類動詞", zh: "散步" }
];

let vocabMode = 'jp-zh';
let currentVocabIdx = 0;
let currentSentenceIdx = 0;
let currentVerbIdx = 0;

let hwMissedQuestions = [];
let hwCurrentItem = null;

function speakText(text) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'ja-JP';
        utterance.rate = 0.85;
        window.speechSynthesis.speak(utterance);
    }
}

function switchTab(e, tabId) {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    e.target.classList.add('active');
    document.getElementById(`${tabId}-section`).classList.add('active');
}

function normalizeText(text) {
    if (!text) return "";
    return text.toString().trim().toLowerCase()
        .replace(/[\s\(\)\[\]（）「」\.\…\。\、\！\？\!\?ー\-]/g, '')
        .replace(/[Ａ-Ｚａ-ｚ０-９]/g, s => String.fromCharCode(s.charCodeAt(0) - 0xFEE0));
}

/* --- 1. 單字卡區塊 --- */
function setVocabMode(mode) {
    vocabMode = mode;
    renderVocabQuestion();
}

function renderVocabQuestion() {
    const item = vocabulary[currentVocabIdx];
    document.getElementById("vocab-category").innerText = item.cat;
    document.getElementById("vocab-answer-container").style.display = "none";

    if (vocabMode === 'jp-zh') {
        document.getElementById("vocab-prompt-label").innerText = "請猜出中文意思是：";
        document.getElementById("vocab-question-text").innerText = item.kana;
        document.getElementById("vocab-answer-text").innerText = item.zh;
        document.getElementById("vocab-extra-text").innerText = (item.kanji && item.kanji.trim() !== '') ? `漢字：${item.kanji}` : '';
    } else {
        document.getElementById("vocab-prompt-label").innerText = "請猜出日文唸法是：";
        document.getElementById("vocab-question-text").innerText = item.zh;
        document.getElementById("vocab-answer-text").innerText = item.kana;
        document.getElementById("vocab-extra-text").innerText = (item.kanji && item.kanji.trim() !== '') ? `漢字：${item.kanji}` : '';
    }
}

function nextVocabQuestion() {
    currentVocabIdx = (currentVocabIdx + 1) % vocabulary.length;
    renderVocabQuestion();
}

function prevVocabQuestion() {
    currentVocabIdx = (currentVocabIdx - 1 + vocabulary.length) % vocabulary.length;
    renderVocabQuestion();
}

function toggleVocabAnswer() {
    const box = document.getElementById("vocab-answer-container");
    box.style.display = (box.style.display === "none" || box.style.display === "") ? "block" : "none";
}

function speakVocab() {
    speakText(vocabulary[currentVocabIdx].kana);
}

/* --- 2. 課文例句測驗 --- */
function renderSentenceQuestion() {
    const item = sentences[currentSentenceIdx];
    document.getElementById("sentence-question-text").innerText = item.zh;
    document.getElementById("sentence-answer-text").innerText = item.jp;
    document.getElementById("sentence-answer-container").style.display = "none";
}

function nextSentenceQuestion() {
    currentSentenceIdx = (currentSentenceIdx + 1) % sentences.length;
    renderSentenceQuestion();
}

function prevSentenceQuestion() {
    currentSentenceIdx = (currentSentenceIdx - 1 + sentences.length) % sentences.length;
    renderSentenceQuestion();
}

function toggleSentenceAnswer() {
    const box = document.getElementById("sentence-answer-container");
    box.style.display = (box.style.display === "none" || box.style.display === "") ? "block" : "none";
}

function speakSentence() {
    speakText(sentences[currentSentenceIdx].jp);
}

/* --- 3. 手寫測驗 --- */
function updateHwBadge() {
    document.getElementById("hw-review-badge").innerText = `待複習錯題：${hwMissedQuestions.length}`;
}

function nextHandwritingQuestion() {
    document.getElementById("hw-user-input").value = "";
    document.getElementById("hw-feedback-container").className = "feedback-box hidden";

    if (hwMissedQuestions.length > 0 && Math.random() < 0.6) {
        hwCurrentItem = hwMissedQuestions[0];
    } else {
        hwCurrentItem = vocabulary[Math.floor(Math.random() * vocabulary.length)];
    }

    document.getElementById("hw-category").innerText = hwCurrentItem.cat;
    document.getElementById("hw-question").innerText = hwCurrentItem.zh;
    updateHwBadge();
}

function checkHandwritingAnswer() {
    const userInput = document.getElementById("hw-user-input").value;
    if (!userInput) return alert("請先輸入答案！");

    const feedbackBox = document.getElementById("hw-feedback-container");
    feedbackBox.classList.remove("hidden");

    const cleanUser = normalizeText(userInput);
    const cleanKana = normalizeText(hwCurrentItem.kana);
    const cleanKanji = hwCurrentItem.kanji ? normalizeText(hwCurrentItem.kanji) : "";
    const isCorrect = (cleanUser === cleanKana || (cleanKanji && cleanUser === cleanKanji));

    if (isCorrect) {
        feedbackBox.className = "feedback-box correct";
        document.getElementById("hw-feedback-status").innerText = "🎉 比對正確！";
        document.getElementById("hw-feedback-detail").innerHTML = `標準答案：<strong>${hwCurrentItem.kana}</strong> ${hwCurrentItem.kanji ? '(' + hwCurrentItem.kanji + ')' : ''}`;
        
        const existIdx = hwMissedQuestions.findIndex(q => q.kana === hwCurrentItem.kana);
        if (existIdx !== -1) hwMissedQuestions.splice(existIdx, 1);
        speakText(hwCurrentItem.kana);
    } else {
        feedbackBox.className = "feedback-box wrong";
        document.getElementById("hw-feedback-status").innerText = "❌ 答錯了！已加入錯題佇列";
        document.getElementById("hw-feedback-detail").innerHTML = `標準答案：<strong>${hwCurrentItem.kana}</strong> ${hwCurrentItem.kanji ? '(' + hwCurrentItem.kanji + ')' : ''}`;

        const existIdx = hwMissedQuestions.findIndex(q => q.kana === hwCurrentItem.kana);
        if (existIdx === -1) hwMissedQuestions.push(hwCurrentItem);
    }
    updateHwBadge();
}

/* --- 4. 動詞 て形 變化練習 --- */
function renderVerbQuestion() {
    const item = verbs[currentVerbIdx];
    document.getElementById("verb-group").innerText = item.group;
    document.getElementById("verb-masu").innerText = `${item.masu} ${item.kanji ? '(' + item.kanji + ')' : ''}`;
    document.getElementById("verb-meaning").innerText = `中文意思：${item.zh}`;
    
    document.getElementById("verb-ans-masu").innerText = item.masu;
    document.getElementById("verb-ans-dict").innerText = item.dict;
    document.getElementById("verb-ans-te").innerText = `${item.te} (～てください / ～ています)`;
    
    document.getElementById("verb-answer-container").style.display = "none";
}

function nextVerbQuestion() {
    currentVerbIdx = (currentVerbIdx + 1) % verbs.length;
    renderVerbQuestion();
}

function prevVerbQuestion() {
    currentVerbIdx = (currentVerbIdx - 1 + verbs.length) % verbs.length;
    renderVerbQuestion();
}

function toggleVerbAnswer() {
    const box = document.getElementById("verb-answer-container");
    box.style.display = (box.style.display === "none" || box.style.display === "") ? "block" : "none";
}

function speakCurrentVerb() {
    speakText(verbs[currentVerbIdx].masu);
}

/* --- 5. 單字列表與搜尋 --- */
function renderTable(data) {
    const tbody = document.getElementById("word-table-body");
    tbody.innerHTML = "";
    data.forEach(item => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td><button class="btn-sound" onclick="speakText('${item.kana}')">🔊</button></td>
            <td><strong>${item.kana}</strong></td>
            <td>${item.kanji || '-'}</td>
            <td>${item.zh}</td>
        `;
        tbody.appendChild(tr);
    });
}

function filterWords() {
    const query = document.getElementById("search-input").value.toLowerCase();
    const filtered = vocabulary.filter(item => 
        item.kana.toLowerCase().includes(query) || 
        item.kanji.toLowerCase().includes(query) || 
        item.zh.includes(query)
    );
    renderTable(filtered);
}

window.onload = function() {
    renderVocabQuestion();
    renderSentenceQuestion();
    nextHandwritingQuestion();
    renderVerbQuestion();
    renderTable(vocabulary);
};