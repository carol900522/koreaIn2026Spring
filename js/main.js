
// --- 顏色定義矩陣 ---
const dayColors = {
    1: "#FF70A6", // 熱情粉紅 (抵達首爾)
    2: "#FFB7C5", // 經典櫻花粉 (汝矣島花海)
    3: "#FFD166", // 向日葵黃 (景福宮陽光)
    4: "#A2D2FF", // 蘇打汽水藍 (聖水洞文青)
    5: "#4361EE", // 電光寶石藍 (KTX往釜山/廣安里)
    6: "#4CC9F0", // 清透天空藍 (海雲台膠囊列車)
    7: "#FB5607", // 夕陽亮橘 (甘川洞文化村)
    8: "#FF9770"  // 奶油珊瑚色 (溫馨返程)
};

// --- Accommodation DATA ---
/**
 * 產生圖片路徑陣列
 * @param {string} folder - 資料夾名稱 (例如: "kroom")
 * @param {number} count - 圖片張數
 * @param {string} ext - 副檔名 (預設為 "avif")
 * @returns {string[]} - 傳回完整路徑陣列
 */
function getPic(folder, count, ext = "avif") {
    return Array.from({ length: count }, (_, i) => `images/${folder}/${i + 1}.${ext}`);
}

const accoData = [
    { name: "K-ROOM", mapUrl: "https://naver.me/GhwXE3yw", images: getPic("accommodation/kroom", 14) },
    { name: "Oshiria Switchenmatie 25樓", mapUrl: "https://naver.me/G9UqrsGB", images: getPic("accommodation/gijang", 14) },
    { name: "Twin Serenity 301", mapUrl: "https://naver.me/GowJzXMq", images: getPic("accommodation/301", 22) }
];


const tripData = {
    totalDays: 8,
    startDate: "2026-04-14",
    plans: [
        { day: 1, date: "4/14 (二)", title: "🛬 啟程 ", city: "首爾", accommodation: accoData[0],
            activities: [
                {
                    time: "15:00", location: "⮕ 桃園機場第一航廈", category: "交通", 
                    desc: "UGO 機場接送服務，舒適專車直達首爾市區，免去轉車煩惱，輕鬆展開旅程。",
                    images: []
                },
                {
                    time: "18:10", location: "TR872 TPE 桃園 ⮕ 21:45 ICN 仁川 ", category: "交通",
                    desc: "搭乘Scoot酷航直飛首爾，全程約2小時35分，享受經濟實惠的空中旅程，準備迎接韓國的精彩冒險。❌無提供飛機餐。",
                    images: []
                },
                {
                    time: "21:45", location: "⮕ 仁川機場第一航廈", category: "交通",
                    desc: "申辦SES免簽證入境，12號出口兌換釜山PASS實體卡。",
                    images: getPic("day1", 2)
                },
                {
                    time: "22:30", location: "⮕ 金浦機場 ⮕ 新亭洞 ", category: "交通",
                    desc: "搭乘AREX機場快線，約45分鐘抵達金浦機場，轉車準備前往住宿地點。",
                    images: []
                }
            ]
        },
        { day: 2, date: "4/15 (三)", title: "時尚聖水洞 | 青春弘大", city: "首爾", accommodation: accoData[0],
            activities: [
                {
                    time: "09:30", location: "MONEY PLANET ", category: "Naver Map", mapUrl: "https://naver.me/FJiJ7NTO",
                    desc: "記得領取Creatrip優惠劵。",
                    images: getPic("day2/moneychange", 1)
                },
                {
                    time: "11:00", location: "聖水洞", category: "逛街", mapUrl: "",
                    desc: "聖水洞2號出口 ⮕ AMORE Seongsu、onion咖啡廳。",
                    images: getPic("day2/seongsu", 8)
                },
                {
                    time: "16:30", location: "弘大", category: "逛街", mapUrl: "",
                    desc: "有許多文創小物，以及首爾著名的亂打秀也在這！",
                    images: getPic("day2/hongda", 4)
                },
            ]
        },
        { day: 3, date: "4/16 (四)", title: "🚇KTX 首爾 ⮕ 釜山", city: "釜山", accommodation: accoData[1], 
            activities: [
                    {
                        time: "08:30", location: "首爾站", category: "交通", mapUrl: "",
                        desc: "",
                        images: []
                    },
                    {
                        time: "11:25", location: "KTX-青龍 08:58 首爾 ⮕ 11:16 釜山", category: "交通", mapUrl: "",
                        desc: "搭乘KTX高速列車，約2小時40分鐘抵達釜山，享受舒適快捷的旅程。",
                        images: []
                    },
                    {
                        time: "11:40", location: "SPAO南浦店", category: "Naver Map", mapUrl: "https://naver.me/5Is9BeBF",
                        desc: "免費寄放行李，最晚至21:00。",
                        images: getPic("day3/spao", 1)
                    },
                    {
                        time: "12:00", location: "樂天百貨", category: "景點", mapUrl: "",
                        desc: "南浦樂天（樂天百貨光復店與樂天超市）是釜山自由行的指標性購物點，位於地鐵南浦站旁，特色在於結合高空海景展望台、室內音樂噴泉、一站式伴手禮採買以及即時退稅便利性。其交通便利、環境寬敞，是下雨天或最後補貨的最佳購物選擇。 ",
                        images: getPic("day3/lotte", 3)
                    },
                    {
                        time: "14:00", location: "影島大橋", category: "景點", mapUrl: "",
                        desc: "每週六 14:00-14:15 開橋。",
                        images: getPic("day3/yeongdo", 5)
                    },
                    {
                        time: "14:30", location: "南浦地下購物中心", category: "逛街", mapUrl: "",
                        desc: "便宜服飾，但要注意品質。",
                        images: getPic("day3/nampoUnderShop", 3)
                    },
                    {
                        time: "15:30", location: "札嘎其市場", category: "逛街", mapUrl: "",
                        desc: "釜山南浦洞商圈和影島大橋附近的「札嘎其市場」（부산 자갈치시장））可是韓國最大最有名的釜山海鮮市場代表。札嘎其市場必吃有各種新鮮海鮮，像生章魚、鮑魚、帝王蟹、油蟹、鮮蝦等。想吃海鮮的人，可以先在一樓買海鮮，再到二樓餐廳代客料理。只要來到釜山玩，想大啖海鮮，札嘎其海鮮市場，絕對是首選，而且大部份攤位價格透明，現點現秤現報價，部份攤位還會些簡單中文。",
                        images: getPic("day3/Jagalchi", 5)
                    },
                    {
                        time: "16:30", location: "BIFF廣場", category: "逛街", mapUrl: "",
                        desc: "自8.15光復後，在釜山南浦洞開始出現一、兩間電影院，至1960年代後成為有20多間電影院林立的南浦洞電影院街。1996年舉辦釜山國際電影節，電影院街也重新整修，並被改名為BIFF廣場。過去BIFF廣場為釜山國際電影節前夜祭的主舞臺，曾舉辦蓋手印、座談會等多項活動。隨著電影殿堂於海雲臺區竣工，釜山國際電影節的開幕式等活動皆改至海雲臺區舉行。如今BIFF廣場留下許多電影節草創期的痕跡，還有許多知名的電影人的手印留在街道上，逛起來別有一番樂趣。街上還販售各種小吃，成為釜山具代表性的美食街，還能購物與觀光，讓年輕人們趨之若騖。",
                        images: getPic("day3/biff", 3)
                    },
                    {
                        time: "17:30", location: "光復路文化時尚街", category: "逛街", mapUrl: "",
                        desc: "",
                        images: getPic("day3/fashionStreet", 6)
                    },
                    {
                        time: "20:30", location: "取回行李",  category: "Naver Map", mapUrl: "https://naver.me/5Is9BeBF",
                        desc: "",
                        images: getPic("day3/spao", 1)
                    }


            ] },
        { day: 4, date: "4/17 (五)", title: "🌊浪漫海雲台", city: "釜山", accommodation: accoData[1], 
            activities: [
                {
                    time: "10:30", location: "Skyline Luge", category: "釜山PASS", mapUrl: "",
                    desc: "Skyline Luge 是國內最早的斜坡滑車，安全又容易操作。<br>"+
                          "共有四條總長 2.4公里的專用軌道。<br>"+
                          "可以盡情享受東釜山美麗的景緻，同時也可以享受滑降的高空滑索。<br> 🎫門票<br>"+
                          "斜坡滑車二回券 : 成人 30,000韓元、兒童 12,000韓元<br>"+
                          "高空滑索一回券 : 40,000韓元<br>",
                    images: getPic("day4/skyline", 6)
                },
                {
                    time: "12:00", location: "海岸列車🚉 松亭 ⮕ 尾浦", category: "釜山PASS", mapUrl: "",
                    desc: "藍天和大海呼吸的地方！將 4.8公里長的東海南部線舊鐵路設施經過環保再開發，沿着海岸絕美景色行駛的海雲台海岸列車可以從海雲台尾浦到迎月隧道、海月觀景台、青沙浦站、踏石觀景台、九德浦及松亭站，約 30多分鐘的車程裡可以欣賞到東釜山壯麗的海岸線。<br>"+
                          "<br>🎫門票<br>海岸列車 (自由票) 16,000韓元",
                    images: getPic("day4/train", 6)
                },
                {
                    time: "13:30", location: "釜山 x The Sky", category: "釜山PASS", mapUrl: "",
                    desc: "<b>Busan X the Sky</b> 位於韓國第二高(411.6公尺)的「海雲台LCT地標塔」內，也是國內最高、最大規模的觀景台。<br>"+
                          "還可以同時欣賞到被譽為大韓八景之一的海雲台壯麗海景與釜山華麗城市景觀<br>"+
                          "除了世界著名的釜山地標 (廣安大橋、海雲台) 外，還能欣賞到釜山的白天與夜晚。觀景台內設有華麗的媒體動畫、為旅客提供卓越服務的休息室，以及簡約的咖啡廳等。<br>"+
                          "在Busan X the Sky體驗一下從腳下展開的無邊無盡的世界吧。<br>"+
                          "<br>🎫門票<br>成人 27,000韓元 / 兒童 (小學生)、年長者 (65歲以上) 24,000韓元 / 36個月以下嬰幼兒 免費 (須檢附證明)",
                    images: getPic("day4/xthesky", 4)
                },
                {
                    time: "14:30", location: "Club D Oasis", category: "釜山PASS", mapUrl: "",
                    desc: "🎫門票<br>大人/兒童 均一價 33,000韓元<br><br>"+
                          "Spa券：戶外Spa（清水堂）＋汗蒸房 4小時免費使用 <b>不含水上樂園</b><br>"+
                          "🩱使用戶外Spa（清水堂）時，需自備泳衣<br>"+
                          "💵現場加付15,000韓元，可升級為5小時通用券（含水上樂園＋Spa券）<br>"+
                          "⭐清水堂（5樓）、Sand Cafe、Sand Kitchen（6樓）全餐飲項目可享10%優惠<br>"+
                          "⭐僅限向員工出示Visit Busan Pass時使用，使用自助機點餐（Kiosk）無法享受折扣",
                    images: getPic("day4/clubD", 8)
                },
                {
                    time: "20:00", location: "大榮跆拳道(20:00-21:20)", category: "釜山PASS", mapUrl: "",
                    desc: "韓國的代表性武術就是跆拳道。自從2000年悉尼奧運會開始被列為奧運會正式比賽項目以來，已經在200多個國家設立了跆拳道協會，成了深受全世界人們喜愛的武術。如今跆拳道不再是單純的武術，而是變成了韓國的代表性文化，所有人都可以輕鬆愉快地體驗跆拳道。<br>"+
                          "<br>🎫門票<br>跆拳道一日體驗課程 每人 50,000韓元",
                    images: getPic("day4/taekwondo", 2)
                } 
            ] },
        { day: 5, date: "4/18 (六)", title: "🚡松島 | 🌉廣安島無人機表演", city: "釜山", accommodation: accoData[1], 
            activities: [ 
                {
                    time: "09:00", location: "🚡松島海上纜車站🔁Sky Park站", category: "釜山PASS", mapUrl: "",
                    desc: "<b>松島海上纜車，超乎想象的快樂！</b><br><br>松島海上纜車總長 1.62公里、最高點達 86公尺，橫穿松島海水浴場東側的松林公園及西側的岩南公園。不僅能感受橫跨大海的刺激，還能將松島海水浴場、釜山 影島, 南港大橋、松島海岸步道，以及波濤洶涌的奇岩絕壁都盡收眼底。<br>"+
                          "<br>🎫門票<br>水晶遊輪【來回】成人 : 22,000韓元、兒童 : 16,000韓元",
                    images: getPic("day5/Songdo", 3)
                },
                {
                    time: "10:00", location: "手翻書體驗", category: "釜山PASS", mapUrl: "",
                    desc: "(有可能不會去，依當時狀況安排！)<br>⭐每製作一本手翻書，會需要兩張 VISIT BUSAN PASS。<br>- (2人) 手翻書一本 + 額外印製費用 5,000韓元<br>- (3人) 手翻書兩本 + 額外印製費用 10,000韓元<br>- (4人) 手翻書三本 + 額外印製費用 10,000韓元<br>"+
                          "<br>🎫費用<br>製作一本手翻書時，一人 15,000韓元；製作兩本手翻書時，一人 10,000韓元。",
                    images: getPic("day5/flipbook", 4)
                },
                {
                    time: "11:00", location: "ARTE美術館", category: "釜山PASS", mapUrl: "",
                    desc: "Arte Museum 釜山不只是是全世界規模最大的 Arte Museum，同時也是韓國知名創意設計公司 d'strict 繼韓國三座城市、美國拉斯維加斯、中國成都與香港、阿拉伯聯合大公國杜拜之後，在全球建造的第八座沉浸式多媒體藝術展覽館。講述 <b>超越時空的永恆自然</b> 的 Arte Museum 至今已與全球超過 700萬觀眾分享令人驚嘆的藝術體驗，更即將在擁有山與大海、過去與未來以及歷史的喜怒哀樂的夢想城市 - 釜山與更多的觀眾見面！這次將會以與釜山形象相似的 <b>循環 (CIRCLE)</b> 爲主軸，向各位展示以自然和人生循環為主題的 19件作品。<br>"+
                          "<br>🎫費用<br>平日 成人 22,000韓元 / 青少年 18,000韓元 / 兒童 15,000韓元<br>週末、國定假日 成人 25,000韓元 / 青少年 21,000韓元 / 兒童 18,000韓元",
                    images: getPic("day5/arte", 4)
                },
                {
                    time: "14:30", location: "", category: "鑽石灣遊艇", mapUrl: "",
                    desc: "。",
                    images: getPic("day5/", 6)
                },
                {
                    time: "16:00", location: "SPA LAND", category: "釜山PASS", mapUrl: "",
                    desc: "。",
                    images: getPic("day5/", 6)
                },
                {
                    time: "19:30", location: "廣安大橋無人機表演", category: "景點", mapUrl: "",
                    desc: "每週六晚上8點，在釜山的廣安大橋上會有精彩的無人機燈光秀表演，為夜晚增添絢麗色彩。這場表演結合了音樂和燈光，吸引了許多遊客前來觀賞，是釜山夜生活的一大亮點。",
                    images: getPic("day5/bridgeShow", 4)
                }
            ] },
        { day: 6, date: "4/19 (日)", title: "釜山 -> 大邱", city: "大邱", accommodation: accoData[2], activities: [] },
        { day: 7, date: "4/20 (一)", title: "大邱 -> 首爾最後採買", city: "首爾", accommodation: accoData[2], activities: [] },
        { day: 8, date: "4/21 (二)", title: "首爾 -> 歸途", city: "首爾", accommodation: accoData[2], activities: [] }
    ]
};

const state = {
    currentDay: 1,
    lightbox: {
        images: [],
        index: 0
    }
};

function initApp() {
    renderDayNav();
    switchDay(1);
}

function renderDayNav() {
    const nav = document.getElementById('day-nav');
    tripData.plans.forEach(plan => {
        const btn = document.createElement('button');
        btn.id = `nav-btn-${plan.day}`;
        btn.className = `flex-shrink-0 px-5 py-2 rounded-2xl border transition-all duration-300 text-sm font-bold flex flex-col items-center min-w-[70px] bg-white border-slate-100 text-slate-400 hover:border-slate-300 shadow-sm`;
        btn.innerHTML = `<span>D${plan.day}</span><span class="text-[10px] opacity-60 font-normal">${plan.date.split(' ')[0]}</span>`;
        btn.onclick = () => switchDay(plan.day);
        nav.appendChild(btn);
    });
}

function switchDay(day) {
    state.currentDay = day;
    const contentArea = document.getElementById('content-area');
    const dayPlan = tripData.plans.find(p => p.day === day);
    const activeColor = dayColors[day] || "#0047a0";

    // 更新導航按鈕樣式
    tripData.plans.forEach(p => {
        const btn = document.getElementById(`nav-btn-${p.day}`);
        if (p.day === day) {
            btn.style.backgroundColor = activeColor;
            btn.style.borderColor = activeColor;
            btn.style.color = "white";
            btn.classList.add('shadow-md', 'active-day');
            btn.classList.remove('bg-white', 'text-slate-400', 'border-slate-100');
            btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        } else {
            btn.style.backgroundColor = "";
            btn.style.borderColor = "";
            btn.style.color = "";
            btn.classList.remove('shadow-md', 'active-day');
            btn.className = 'flex-shrink-0 px-5 py-2 rounded-2xl border transition-all duration-300 text-sm font-bold flex flex-col items-center min-w-[70px] bg-white border-slate-100 text-slate-400 hover:border-slate-300 shadow-sm';
        }
    });

    let html = `
        <div class="animate-slide-in">
            <div class="flex items-center gap-3 mb-6">
                <span class="w-1.5 h-6 rounded-full" style="background-color: ${activeColor}"></span>
                <h2 class="text-2xl font-black text-slate-900">${dayPlan.title}</h2>
            </div>
    `;

    // Accommodation Section - 底色同步
    if (dayPlan.accommodation) {
        const acc = dayPlan.accommodation;
        const accScrollId = `acc-scroll-${day}`;
        html += `
            <div class="rounded-3xl overflow-hidden mb-8 shadow-xl transition-colors duration-500" style="background-color: ${activeColor}">
                <div class="p-6 text-white flex justify-between items-center">
                    <div>
                        <div class="text-[10px] font-bold text-white/50 uppercase tracking-widest mb-1">今晚住這裡</div>
                        <div class="text-lg font-bold">${acc.name}</div>
                    </div>
                    <a href="${acc.mapUrl}" target="_blank" class="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/30 transition-all shadow-lg border border-white/30">
                        <i class="fas fa-location-arrow"></i>
                    </a>
                </div>
                
                ${acc.images && acc.images.length > 0 ? `
                    <div class="relative group pb-4">
                        <div id="${accScrollId}" class="flex gap-3 overflow-x-auto no-scrollbar snap-x snap-mandatory px-4">
                            ${acc.images.map((img, i) => `
                                <div class="flex-shrink-0 w-3/4 aspect-[16/9] rounded-xl overflow-hidden snap-center cursor-zoom-in relative" onclick="openLightbox('acc', ${i})">
                                    <img src="${img}" class="w-full h-full object-cover">
                                </div>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}
            </div>
        `;
    }

    if (dayPlan.activities.length === 0) {
        html += `
            <div class="py-20 text-center border-2 border-dashed border-slate-100 rounded-3xl">
                <i class="fas fa-calendar-day text-slate-100 text-5xl mb-4"></i>
                <p class="text-slate-400">目前尚無活動詳情</p>
            </div>
        `;
    } else {
        dayPlan.activities.forEach((act, idx) => {
            const scrollId = `scroll-${day}-${idx}`;
            html += `
                <div class="mb-10 relative">
                    <div class="flex gap-4 mb-4">
                        <div class="font-mono text-sm font-bold h-fit px-2 py-1 rounded" style="color: ${activeColor}; background-color: ${activeColor}15">${act.time}</div>
                        <div class="flex-grow">
                            <div class="flex items-center gap-2 mb-1">
                                <h3 class="text-lg font-extrabold text-slate-800">${act.location}</h3>
                                <a class="${act.mapUrl ? 'text-[#03C75A] hover:text-[#029b46] cursor-pointer' : 
                                    'text-slate-300 cursor-default pointer-events-none'} transition-colors text-sm" 
                                     ${act.mapUrl ? `href="${act.mapUrl}" target="_blank"` : ''}>
                                    <span class="px-2 py-0.5 rounded ${act.mapUrl ? 'bg-[#EBF9F1] text-[#03C75A]' : 'bg-slate-100 text-slate-400'} text-[10px] font-bold">
                                     ${act.category}
                                    </span>
                                </a>
                            </div>
                            <p class="text-sm text-slate-500 leading-relaxed" >${act.desc}</p>
                        </div>
                    </div>
                    
                    <div class="relative group">
                        <div id="${scrollId}" class="flex gap-3 overflow-x-auto no-scrollbar snap-x snap-mandatory px-2">
                            ${act.images.map((img, i) => `
                                <div class="flex-shrink-0 w-full sm:w-2/3 aspect-[16/10] rounded-2xl overflow-hidden snap-center cursor-zoom-in relative" onclick="openLightbox('${idx}', ${i})">
                                    <img src="${img}" class="w-full h-full object-cover" loading="lazy">
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;
        });
    }

    html += `</div>`;
    contentArea.innerHTML = html;
}

function openLightbox(actIdx, imgIdx) {
    const plan = tripData.plans.find(p => p.day === state.currentDay);
    if (actIdx === 'acc') {
        state.lightbox.images = plan.accommodation.images;
    } else {
        state.lightbox.images = plan.activities[actIdx].images;
    }
    state.lightbox.index = imgIdx;
    updateLightbox();
    const lb = document.getElementById('lightbox');
    lb.classList.remove('hidden');
    void lb.offsetWidth;
    lb.classList.remove('opacity-0');
    document.getElementById('lightbox-img').classList.remove('scale-95');
    document.body.style.overflow = 'hidden';
}

function updateLightbox() {
    const img = document.getElementById('lightbox-img');
    img.src = state.lightbox.images[state.lightbox.index];
    document.getElementById('lightbox-counter').innerText = `${state.lightbox.index + 1} / ${state.lightbox.images.length}`;
}

function nextLightboxImg() {
    state.lightbox.index = (state.lightbox.index + 1) % state.lightbox.images.length;
    updateLightbox();
}

function prevLightboxImg() {
    state.lightbox.index = (state.lightbox.index - 1 + state.lightbox.images.length) % state.lightbox.images.length;
    updateLightbox();
}

function closeLightbox() {
    const lb = document.getElementById('lightbox');
    lb.classList.add('opacity-0');
    document.getElementById('lightbox-img').classList.add('scale-95');
    setTimeout(() => lb.classList.add('hidden'), 300);
    document.body.style.overflow = 'auto';
}

window.onload = initApp;
