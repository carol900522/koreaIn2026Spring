
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
        {
            day: 1, date: "4/14 (日)", title: "🛬 啟程 ", city: "首爾", accommodation: accoData[0],
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
        {
            day: 2, date: "4/15 (一)", title: "文創聖水洞 | 青春弘大", city: "首爾", accommodation: accoData[0],
            activities: [
                {
                    time: "09:30", location: "明洞換錢所 - MONEY PLANET ", category: "Naver Map", mapUrl: "https://naver.me/FJiJ7NTO",
                    desc: "記得領取Creatrip優惠劵。",
                    images: getPic("day2/moneychange", 1)
                },
            ]
        },
        { day: 3, date: "4/16 (二)", title: "首爾 -> 釜山 KTX", city: "釜山", accommodation: accoData[1], activities: [] },
        { day: 4, date: "4/17 (三)", title: "釜山：海雲台與膠囊火車", city: "釜山", accommodation: accoData[1], activities: [] },
        { day: 5, date: "4/18 (四)", title: "釜山 -> 慶州當日往返", city: "慶州", accommodation: accoData[1], activities: [] },
        { day: 6, date: "4/19 (五)", title: "釜山 -> 大邱", city: "大邱", accommodation: accoData[2], activities: [] },
        { day: 7, date: "4/20 (六)", title: "大邱 -> 首爾最後採買", city: "首爾", accommodation: accoData[2], activities: [] },
        { day: 8, date: "4/21 (日)", title: "首爾 -> 歸途", city: "首爾", accommodation: accoData[2], activities: [] }
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
