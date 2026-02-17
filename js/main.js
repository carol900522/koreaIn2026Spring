
const hotels = {
    "incheon_hotel": {
        name: "K-ROOM Incheon",
        tag: "精品設計",
        address: "仁川廣域市中區雲西洞 2850-5",
        link: "https://www.google.com/maps/search/K-ROOM+Incheon",
        images: [
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800",
            "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800"
        ]
    },
    "myeongdong_hotel": {
        name: "L'Escape Myeongdong",
        tag: "歐風極奢",
        address: "首爾特別市中區明洞路 10",
        link: "https://www.google.com/maps/search/L'Escape+Hotel",
        images: [
            "https://images.unsplash.com/photo-1590490359683-658d3d23f972?q=80&w=800",
            "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=800"
        ]
    },
    "busan_hotel": {
        name: "Park Hyatt Busan",
        tag: "一線海景",
        address: "釜山廣域市海雲台區 Marine City",
        link: "https://www.google.com/maps/search/Park+Hyatt+Busan",
        images: [
            "https://images.unsplash.com/photo-1596386461350-326ccb383e9f?q=80&w=800",
            "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=800"
        ]
    }
};

const itineraryData = {
    title: "首爾與釜山的春日詩篇",
    dates: "APR 14 — APR 21, 2026",
    days: [
        {
            day: 1, date: "4 / 14", title: "啟程 ➔ 仁川迷蹤", color: "#0047A0", // 國旗藍
            tags: ["國際航線", "機場飯店"],
            hotelId: "incheon_hotel",
            images: ["https://images.unsplash.com/photo-1544016768-982d1554f0b9?q=80&w=800"],
            meals: {
                breakfast: { text: "Premium Lounge 輕食", highlight: false },
                lunch: { text: "機上精緻主餐", highlight: false },
                dinner: { text: "橋村炸雞 (仁川限定店)", highlight: true }
            }
        },
        {
            day: 2, date: "4 / 15", title: "宮廷 ➔ 漫步明洞", color: "#CD2E3A", // 國旗紅
            tags: ["韓服體驗", "米其林"],
            hotelId: "incheon_hotel",
            images: ["https://images.unsplash.com/photo-1547841022-b558accc7ef8?q=80&w=800"],
            meals: {
                breakfast: { text: "Isaac Toast 經典組合", highlight: false },
                lunch: { text: "土俗村參雞湯 (皇室認證)", highlight: true },
                dinner: { text: "明洞韓式燒肉盛宴", highlight: true }
            }
        },
        {
            day: 3, date: "4 / 16", title: "聖水洞藝術 ➔ 漢江晚霞", color: "#000000", // 國旗黑
            tags: ["咖啡廳", "野餐"],
            hotelId: "myeongdong_hotel",
            images: ["https://images.unsplash.com/photo-1510681954157-19416462700d?q=80&w=800"],
            meals: {
                breakfast: { text: "London Bagel Museum", highlight: true },
                lunch: { text: "聖水洞創意韓料", highlight: false },
                dinner: { text: "漢江炸雞啤酒浪漫野餐", highlight: true }
            }
        },
        {
            day: 4, date: "4 / 17", title: "KTX 飆速 ➔ 釜山海雲台", color: "#0047A0",
            tags: ["海景飯店", "釜山站"],
            hotelId: "busan_hotel",
            images: ["https://images.unsplash.com/photo-1599394142718-4a57262c5545?q=80&w=800"],
            meals: {
                breakfast: { text: "KTX 特等席便當", highlight: false },
                lunch: { text: "本錢豬肉湯飯 (老字號)", highlight: true },
                dinner: { text: "海雲台海產痛風餐", highlight: true }
            }
        },
        {
            day: 5, date: "4 / 18", title: "壁畫村落 ➔ 影島感性", color: "#CD2E3A",
            tags: ["藝術村", "影島"],
            hotelId: "busan_hotel",
            images: ["https://images.unsplash.com/photo-152069904968-acd2fccb8cc8?q=80&w=800"],
            meals: {
                breakfast: { text: "飯店自助早餐", highlight: false },
                lunch: { text: "甘川洞韓式家常菜", highlight: false },
                dinner: { text: "影島海邊烤貝類", highlight: true }
            }
        },
        {
            day: 6, date: "4 / 19", title: "海濱列車 ➔ 龍宮古寺", color: "#000000",
            tags: ["網美列車", "文化遺產"],
            hotelId: "busan_hotel",
            images: ["https://images.unsplash.com/photo-1563214532-601e389df0f4?q=80&w=800"],
            meals: {
                breakfast: { text: "海雲台鱈魚湯 (解酒必備)", highlight: true },
                lunch: { text: "機張螃蟹大餐", highlight: true },
                dinner: { text: "廣安里景觀餐廳", highlight: false }
            }
        },
        {
            day: 7, date: "4 / 20", title: "百貨狂歡 ➔ 廣安里夜色", color: "#0047A0",
            tags: ["購物", "大橋夜景"],
            hotelId: "busan_hotel",
            images: ["https://images.unsplash.com/photo-1571401660336-cc0811957647?q=80&w=800"],
            meals: {
                breakfast: { text: "輕食咖啡", highlight: false },
                lunch: { text: "新世界百貨美食街", highlight: false },
                dinner: { text: "韓式冷麵與烤肉卷", highlight: true }
            }
        },
        {
            day: 8, date: "4 / 21", title: "最後採買 ➔ 溫暖家園", color: "#475569",
            tags: ["伴手禮", "賦歸"],
            hotelId: "busan_hotel",
            images: ["https://images.unsplash.com/photo-1506012733851-462978396471?q=80&w=800"],
            meals: {
                breakfast: { text: "飯店最後巡禮", highlight: false },
                lunch: { text: "機場韓式石鍋拌飯", highlight: false },
                dinner: { text: "機上美味套餐", highlight: false }
            }
        }
    ]
};

let lastScrollY = window.scrollY;
let ticking = false;
const header = document.getElementById('main-header');

function initPage() {
    // 1. 立即渲染數據（不用等，這只是純文字處理）
    const mainTitle = document.getElementById('main-title');
    const travelDates = document.getElementById('travel-dates');
    
    if(mainTitle) mainTitle.innerText = itineraryData.title;
    if(travelDates) travelDates.innerText = itineraryData.dates;
    
    renderNav();
    renderItinerary();
    renderHotelSummary();

    // 2. 優化 Loading 關閉時機
    // 使用 requestAnimationFrame 確保瀏覽器已經完成初步渲染
    window.requestAnimationFrame(() => {
        const loader = document.getElementById('loading-screen');
        if (loader) {
            // 稍微延遲 300ms 讓畫面渲染穩定，視覺體感最舒服
            setTimeout(() => {
                loader.style.opacity = '0';
                loader.style.visibility = 'hidden';
            }, 300);
        }
    });

    // 3. 滾動監聽 (保持原本邏輯)
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                handleScroll();
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
}


function handleScroll() {
    const currentScrollY = window.scrollY;
    const diff = currentScrollY - lastScrollY;

    // 1. 處理回到最頂端的情況
    if (currentScrollY <= 20) {
        header.classList.remove('is-hidden');
    } 
    // 2. 處理快速向下滑動 (隱藏)
    else if (diff > 25 && currentScrollY > 150) {
        if (!header.classList.contains('is-hidden')) {
            header.classList.add('is-hidden');
        }
    } 
    // 3. 處理向上滑動 (顯示)
    else if (diff < -35) {
        if (header.classList.contains('is-hidden')) {
            header.classList.remove('is-hidden');
        }
    }
    
    lastScrollY = currentScrollY;
}

function renderNav() {
    const container = document.getElementById('nav-container');
    itineraryData.days.forEach((item, index) => {
        const btn = document.createElement('button');
        btn.className = `nav-btn ${index === 0 ? '' : 'btn-inactive'} px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest`;
        if (index === 0) {
            btn.style.backgroundColor = item.color;
            btn.style.color = 'white';
            btn.classList.add('shadow-md');
        }
        btn.innerText = `Day ${item.day}`;
        btn.onclick = () => scrollToDay(`day${item.day}`, item.color, btn);
        container.appendChild(btn);
    });

    const hotelNavBtn = document.createElement('button');
    hotelNavBtn.className = `nav-btn btn-inactive px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 border border-slate-200`;
    hotelNavBtn.innerHTML = `<i class="fa-solid fa-bed text-[8px]"></i> 住宿`;
    hotelNavBtn.onclick = () => {
        scrollToSummary();
        document.querySelectorAll('.nav-btn').forEach((btn) => {
            btn.style.backgroundColor = ''; btn.style.color = '';
            btn.style.boxShadow = '';
            btn.classList.add('btn-inactive');
        });
        hotelNavBtn.classList.remove('btn-inactive');
        hotelNavBtn.style.backgroundColor = '#0047A0';
        hotelNavBtn.style.color = 'white';
    };
    container.appendChild(hotelNavBtn);
}

function renderItinerary() {
    const main = document.getElementById('itinerary-main');
    itineraryData.days.forEach((item, index) => {
        const daySection = document.createElement('div');
        daySection.id = `day${item.day}`;
        daySection.className = "day-card";
        const hotelData = hotels[item.hotelId];

        daySection.innerHTML = `
            <div class="flex flex-col gap-1 mb-5 px-1">
                <div class="flex items-center gap-3">
                    <span class="text-[11px] font-mont font-black tracking-widest px-2 py-0.5 rounded bg-slate-100 text-slate-400">APR ${item.date.split(' / ')[1]}</span>
                    <div class="flex gap-1">
                        ${item.tags.map(tag => `<span class="text-[9px] font-bold text-white px-2 py-0.5 rounded-full" style="background: ${item.color}">${tag}</span>`).join('')}
                    </div>
                </div>
                <h2 class="font-black text-2xl text-slate-900 tracking-tight mt-1">Day ${item.day}. ${item.title}</h2>
            </div>

            <div class="premium-card p-3">
                <div class="image-container mb-4">
                    <img src="${item.images[0]}" class="h-60 w-full object-cover" loading="lazy">
                    <div class="image-overlay"></div>
                </div>
                
                <div class="px-5 pb-5">
                    <div class="space-y-1">
                        ${renderMealRow("早餐", item.meals.breakfast, item.color)}
                        ${renderMealRow("午餐", item.meals.lunch, item.color)}
                        ${renderMealRow("晚餐", item.meals.dinner, item.color)}
                    </div>
                    
                    <div class="hotel-tag" onclick='openHotelModal("${item.hotelId}")'>
                        <i class="fa-solid fa-hotel text-[14px]" style="color: ${item.color}"></i>
                        <span class="text-[15px] font-bold text-slate-700">${hotelData ? hotelData.name : '尚未預訂'}</span>
                        <i class="fa-solid fa-chevron-right text-[10px] text-slate-300 ml-auto"></i>
                    </div>
                </div>
            </div>
        `;
        main.appendChild(daySection);
    });
}

function renderHotelSummary() {
    const container = document.getElementById('hotel-cards-container');
    const hotelKeys = ["incheon_hotel", "myeongdong_hotel", "busan_hotel"];

    hotelKeys.forEach(key => {
        const hotel = hotels[key];
        const card = document.createElement('div');
        card.className = "hotel-summary-card cursor-pointer active:scale-95 transition-transform";
        card.onclick = () => openHotelModal(key);
        card.innerHTML = `
            <img src="${hotel.images[0]}" class="w-full h-32 object-cover rounded-2xl mb-4">
            <div class="flex items-center gap-2 mb-1">
                <span class="text-[8px] font-black text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded tracking-widest uppercase">${hotel.tag}</span>
            </div>
            <h4 class="font-black text-slate-900 text-sm mb-2">${hotel.name}</h4>
            <p class="text-[10px] text-slate-400 font-medium leading-relaxed line-clamp-2">
                <i class="fa-solid fa-location-dot mr-1"></i>${hotel.address}
            </p>
        `;
        container.appendChild(card);
    });
}

function renderMealRow(label, mealObj, dayColor) {
    if (!mealObj) return '';
    const isHighlight = mealObj.highlight;
    const icon = isHighlight ? 'fa-star' : 'fa-circle-check';
    return `
        <div class="meal-row">
            <i class="fa-solid ${icon} text-[10px] mr-3 opacity-40" style="color: ${dayColor}"></i>
            <span class="meal-label shrink-0" style="color: ${isHighlight ? dayColor : '#64748b'}">${label}</span>
            <span class="meal-text ${isHighlight ? 'font-black text-slate-900' : ''}">${mealObj.text}</span>
        </div>
    `;
}

function openHotelModal(hotelId) {
    const hotel = hotels[hotelId];
    if (!hotel) return;
    document.getElementById('hotel-name').innerText = hotel.name;
    document.getElementById('hotel-address-text').innerText = hotel.address;
    document.getElementById('hotel-link').href = hotel.link;
    const imgContainer = document.getElementById('hotel-images');
    imgContainer.innerHTML = hotel.images.map(img => `<img src="${img}" class="w-full shrink-0 snap-center object-cover">`).join('');
    imgContainer.scrollLeft = 0;
    const modal = document.getElementById('hotel-modal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
}

function closeHotelModal() {
    const modal = document.getElementById('hotel-modal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
}

function scrollToDay(dayId, color, clickedBtn) {
    const element = document.getElementById(dayId);
    const headerHeight = 110;
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - headerHeight;

    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });

    document.querySelectorAll('.nav-btn').forEach((btn) => {
        btn.style.backgroundColor = ''; btn.style.color = '';
        btn.style.boxShadow = '';
        btn.classList.add('btn-inactive');
    });
    clickedBtn.classList.remove('btn-inactive');
    clickedBtn.style.backgroundColor = color;
    clickedBtn.style.color = 'white';
    clickedBtn.style.boxShadow = `0 8px 15px -4px ${color}44`;
}

function scrollToSummary() {
    const element = document.getElementById('hotel-summary-section');
    const headerHeight = 120;
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - headerHeight;
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
}

window.addEventListener('load', initPage);