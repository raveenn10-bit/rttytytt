"use client";
import { useEffect, useMemo, useRef, useState } from "react";

const products = [
  {
    "name": "Samsung Galaxy A27 (8GB RAM|256GB)",
    "category": "Samsung Phones",
    "price": 0,
    "image": "https://smartmobile.lk/image/cache/catalog/Samsung-Galaxy-A27-200x200.jpg",
    "tag": "Enquire",
    "source": "https://smartmobile.lk/samsung-mobile-phone-price-list-sri-lanka/samsung-galaxy-a27-8gb-ram-256gb"
  },
  {
    "name": "Samsung Galaxy A27 (6GB RAM|128GB)",
    "category": "Samsung Phones",
    "price": 0,
    "image": "https://smartmobile.lk/image/cache/catalog/Samsung-Galaxy-A27-200x200.jpg",
    "tag": "Enquire",
    "source": "https://smartmobile.lk/samsung-mobile-phone-price-list-sri-lanka/samsung-galaxy-a27-6gb-ram-128gb"
  },
  {
    "name": "Samsung Galaxy S25 FE (8GB RAM|128GB)",
    "category": "Samsung Phones",
    "price": 0,
    "image": "https://smartmobile.lk/image/cache/catalog/Samsung%20Galaxy%20S25%20FE-200x200.jpg",
    "tag": "Enquire",
    "source": "https://smartmobile.lk/samsung-mobile-phone-price-list-sri-lanka/samsung-galaxy-s25-fe-8gb-ram-128gb"
  },
  {
    "name": "Samsung Galaxy A17 4G (8GB RAM|256GB)",
    "category": "Samsung Phones",
    "price": 0,
    "image": "https://smartmobile.lk/image/cache/catalog/Samsung%20Galaxy%20A17%204G-200x200.jpg",
    "tag": "Enquire",
    "source": "https://smartmobile.lk/samsung-mobile-phone-price-list-sri-lanka/samsung-galaxy-a17-4g-8gb-ram-256gb-"
  },
  {
    "name": "Samsung Galaxy A57 (12GB RAM|256GB)",
    "category": "Samsung Phones",
    "price": 0,
    "image": "https://smartmobile.lk/image/cache/catalog/Samsung%20Galaxy%20A57-200x200.jpg",
    "tag": "Enquire",
    "source": "https://smartmobile.lk/samsung-mobile-phone-price-list-sri-lanka/samsung-galaxy-a57-12gb-ram-256gb-"
  },
  {
    "name": "Samsung Galaxy A57 (8GB RAM|256GB)",
    "category": "Samsung Phones",
    "price": 0,
    "image": "https://smartmobile.lk/image/cache/catalog/Samsung%20Galaxy%20A57-200x200.jpg",
    "tag": "Enquire",
    "source": "https://smartmobile.lk/samsung-mobile-phone-price-list-sri-lanka/samsung-galaxy-a57-8gb-ram-256gb-"
  },
  {
    "name": "Xiaomi Redmi Note 17 Pro Max 5G (8GB RAM|256GB)",
    "category": "Xiaomi Phones",
    "price": 0,
    "image": "https://smartmobile.lk/image/cache/catalog/Xiaomi-Redmi-Note-17-Pro-Max-200x200.jpg",
    "tag": "Enquire",
    "source": "https://smartmobile.lk/huawei-price-list-in-sri-lanka/xiaomi-redmi-note-17-pro-max-5g-8gb-ram-256gb-"
  },
  {
    "name": "Xiaomi Redmi Note 17 Pro 5G (8GB RAM|256GB)",
    "category": "Xiaomi Phones",
    "price": 0,
    "image": "https://smartmobile.lk/image/cache/catalog/Xiaomi-Redmi-Note-17-Pro-200x200.jpg",
    "tag": "Enquire",
    "source": "https://smartmobile.lk/huawei-price-list-in-sri-lanka/xiaomi-redmi-note-17-pro-5g-8gb-ram-256gb-"
  },
  {
    "name": "Xiaomi Redmi Note 17 4G (6GB RAM|256GB)",
    "category": "Xiaomi Phones",
    "price": 0,
    "image": "https://smartmobile.lk/image/cache/catalog/Xiaomi-Redmi-Note-17-4G-200x200.jpg",
    "tag": "Enquire",
    "source": "https://smartmobile.lk/huawei-price-list-in-sri-lanka/xiaomi-redmi-note-17-4g-6gb-ram-256gb-"
  },
  {
    "name": "Apple iPhone 18 Pro Max 2TB",
    "category": "Apple Phones",
    "price": 0,
    "image": "https://smartmobile.lk/image/cache/catalog/Apple-iPhone-18-Pro-Max-200x200.jpg",
    "tag": "Enquire",
    "source": "https://smartmobile.lk/apple-iphone-price-list-in-sri-lanka/apple-iphone-18-pro-max-2tb"
  },
  {
    "name": "Apple iPhone 18 Pro Max 1TB",
    "category": "Apple Phones",
    "price": 0,
    "image": "https://smartmobile.lk/image/cache/catalog/Apple-iPhone-18-Pro-Max-200x200.jpg",
    "tag": "Enquire",
    "source": "https://smartmobile.lk/apple-iphone-price-list-in-sri-lanka/apple-iphone-18-pro-max-1tb"
  },
  {
    "name": "Apple iPhone 18 Pro Max 512GB",
    "category": "Apple Phones",
    "price": 0,
    "image": "https://smartmobile.lk/image/cache/catalog/Apple-iPhone-18-Pro-Max-200x200.jpg",
    "tag": "Enquire",
    "source": "https://smartmobile.lk/apple-iphone-price-list-in-sri-lanka/apple-iphone-18-pro-max-512gb"
  },
  {
    "name": "Apple iPhone 18 Pro Max 256GB",
    "category": "Apple Phones",
    "price": 0,
    "image": "https://smartmobile.lk/image/cache/catalog/Apple-iPhone-18-Pro-Max-200x200.jpg",
    "tag": "Enquire",
    "source": "https://smartmobile.lk/apple-iphone-price-list-in-sri-lanka/apple-iphone-18-pro-max-256gb"
  },
  {
    "name": "Apple iPhone 18 Pro 2TB",
    "category": "Apple Phones",
    "price": 0,
    "image": "https://smartmobile.lk/image/cache/catalog/Apple-iPhone-18-Pro-200x200.jpg",
    "tag": "Enquire",
    "source": "https://smartmobile.lk/apple-iphone-price-list-in-sri-lanka/apple-iphone-18-pro-2tb"
  },
  {
    "name": "Apple iPhone 18 Pro 1TB",
    "category": "Apple Phones",
    "price": 0,
    "image": "https://smartmobile.lk/image/cache/catalog/Apple-iPhone-18-Pro-200x200.jpg",
    "tag": "Enquire",
    "source": "https://smartmobile.lk/apple-iphone-price-list-in-sri-lanka/apple-iphone-18-pro-1tb"
  },
  {
    "name": "Oppo Reno15 (12GB RAM|512GB)",
    "category": "Oppo Phones",
    "price": 0,
    "image": "https://smartmobile.lk/image/cache/catalog/Oppo-Reno15-200x200.jpg",
    "tag": "Enquire",
    "source": "https://smartmobile.lk/oppo-price-list-in-sri-lanka/oppo-reno15-12gb-ram-512gb-"
  },
  {
    "name": "Oppo Reno15 F (12GB RAM|512GB)",
    "category": "Oppo Phones",
    "price": 0,
    "image": "https://smartmobile.lk/image/cache/catalog/Oppo-Reno15-F-200x200.jpg",
    "tag": "Enquire",
    "source": "https://smartmobile.lk/oppo-price-list-in-sri-lanka/oppo-reno15-f-12gb-ram-512gb-"
  },
  {
    "name": "Oppo A6 (8GB RAM|256GB)",
    "category": "Oppo Phones",
    "price": 0,
    "image": "https://smartmobile.lk/image/cache/catalog/Oppo-A6-200x200.jpg",
    "tag": "Enquire",
    "source": "https://smartmobile.lk/oppo-price-list-in-sri-lanka/oppo-a6-8gb-ram-256gb-"
  },
  {
    "name": "JBL Party Box 710",
    "category": "Bluetooth Speakers",
    "price": 0,
    "image": "https://smartmobile.lk/image/cache/catalog/JBL%20Party%20Box%20710-200x200.jpg",
    "tag": "Enquire",
    "source": "https://smartmobile.lk/jbl-party-box-710"
  },
  {
    "name": "JBL Party Box 320",
    "category": "Bluetooth Speakers",
    "price": 0,
    "image": "https://smartmobile.lk/image/cache/catalog/JBL%20Party%20Box%20320-200x200.jpg",
    "tag": "Enquire",
    "source": "https://smartmobile.lk/jbl-party-box-320"
  },
  {
    "name": "JBL Party Box On The Go - Dual Mic",
    "category": "Bluetooth Speakers",
    "price": 0,
    "image": "https://smartmobile.lk/image/cache/catalog/JBL%20Party%20Box%20On%20The%20Go-200x200.jpg",
    "tag": "Enquire",
    "source": "https://smartmobile.lk/jbl-party-box-on-the-go"
  },
  {
    "name": "JBL Party Box 310",
    "category": "Bluetooth Speakers",
    "price": 0,
    "image": "https://smartmobile.lk/image/cache/catalog/JBL%20Party%20Box%20310-200x200.jpg",
    "tag": "Enquire",
    "source": "https://smartmobile.lk/jbl-party-box-310"
  },
  {
    "name": "HMD Fusion (8GB RAM|256GB)",
    "category": "HMD Phones",
    "price": 0,
    "image": "https://smartmobile.lk/image/cache/catalog/HMD%20Fusion-200x200.jpg",
    "tag": "Enquire",
    "source": "https://smartmobile.lk/hmd-fusion-8gb-ram-256gb-"
  },
  {
    "name": "Apple iPhone 17 Pro Max 256GB",
    "category": "Apple Phones",
    "price": 0,
    "image": "https://smartmobile.lk/image/cache/catalog/Apple%20iPhone%2017%20Pro%20Max-200x200.jpg",
    "tag": "Enquire",
    "source": "https://smartmobile.lk/apple-iphone-17-pro-max-256gb"
  },
  {
    "name": "Google Pixel 10a (8GB RAM|128GB)",
    "category": "Google Phones",
    "price": 0,
    "image": "https://smartmobile.lk/image/cache/catalog/Google%20Pixel%2010a-200x200.jpg",
    "tag": "Enquire",
    "source": "https://smartmobile.lk/google-pixel-10a-8gb-ram-128gb"
  },
  {
    "name": "Honor 600 (12GB RAM|256GB)",
    "category": "Honor Phones",
    "price": 0,
    "image": "https://smartmobile.lk/image/cache/catalog/Honor%20600-200x200.jpg",
    "tag": "Enquire",
    "source": "https://smartmobile.lk/honor-600-12gb-ram-256gb"
  },
  {
    "name": "Infinix Hot 70 (4GB RAM|128GB)",
    "category": "Infinix Phones",
    "price": 0,
    "image": "https://smartmobile.lk/image/cache/catalog/Infinix%20Hot%2070-200x200.jpg",
    "tag": "Enquire",
    "source": "https://smartmobile.lk/infinix-hot-70-4gb-ram-128gb"
  },
  {
    "name": "Infinix Note 60 Pro (8GB RAM|256GB)",
    "category": "Infinix Phones",
    "price": 0,
    "image": "https://smartmobile.lk/image/cache/catalog/Infinix%20Note%2060%20Pro-200x200.jpg",
    "tag": "Enquire",
    "source": "https://smartmobile.lk/infinix-note-60-pro-8gb-ram-256gb"
  },
  {
    "name": "Xiaomi Redmi Pad Pro (8GB RAM|256GB)",
    "category": "Tablets",
    "price": 0,
    "image": "https://smartmobile.lk/image/cache/catalog/Xiaomi-Redmi-Pad-Pro-228x228.jpg",
    "tag": "Enquire",
    "source": "https://smartmobile.lk/tablet-price-list-in-sri-lanka/xiaomi-redmi-pad-pro-8gb-ram-256gb-"
  },
  {
    "name": "Xiaomi Redmi Pad Pro (6GB RAM|128GB)",
    "category": "Tablets",
    "price": 0,
    "image": "https://smartmobile.lk/image/cache/catalog/Xiaomi-Redmi-Pad-Pro-228x228.jpg",
    "tag": "Enquire",
    "source": "https://smartmobile.lk/tablet-price-list-in-sri-lanka/xiaomi-redmi-pad-pro-6gb-ram-128gb-"
  },
  {
    "name": "Xiaomi Redmi Pad 2 (8GB RAM|256GB)",
    "category": "Tablets",
    "price": 0,
    "image": "https://smartmobile.lk/image/cache/catalog/Xiaomi-Redmi-Pad-2-228x228.jpg",
    "tag": "Enquire",
    "source": "https://smartmobile.lk/tablet-price-list-in-sri-lanka/xiaomi-redmi-pad-2-8gb-ram-256gb-"
  },
  {
    "name": "Xiaomi Redmi Pad 2 (4GB RAM|128GB)",
    "category": "Tablets",
    "price": 0,
    "image": "https://smartmobile.lk/image/cache/catalog/Xiaomi-Redmi-Pad-2-228x228.jpg",
    "tag": "Enquire",
    "source": "https://smartmobile.lk/tablet-price-list-in-sri-lanka/xiaomi-redmi-pad-2-4gb-ram-128gb-"
  },
  {
    "name": "Samsung Galaxy Tab S10 FE+ 5G (8GB RAM|128GB)",
    "category": "Tablets",
    "price": 0,
    "image": "https://smartmobile.lk/image/cache/catalog/Samsung-Galaxy-Tab-S10-FE-plus-228x228.jpg",
    "tag": "Enquire",
    "source": "https://smartmobile.lk/tablet-price-list-in-sri-lanka/samsung-galaxy-tab-s10-fe-5g-8gb-ram-128gb"
  },
  {
    "name": "Samsung Galaxy Tab S10 FE 5G (12GB RAM|256GB)",
    "category": "Tablets",
    "price": 0,
    "image": "https://smartmobile.lk/image/cache/catalog/Samsung-Galaxy-Tab-S10-FE-228x228.jpg",
    "tag": "Enquire",
    "source": "https://smartmobile.lk/tablet-price-list-in-sri-lanka/samsung-galaxy-tab-s10-fe-5g-12gb-ram-256gb"
  },
  {
    "name": "Samsung Galaxy Tab S10 FE wifi (8GB RAM|128GB)",
    "category": "Tablets",
    "price": 0,
    "image": "https://smartmobile.lk/image/cache/catalog/Samsung-Galaxy-Tab-S10-FE-228x228.jpg",
    "tag": "Enquire",
    "source": "https://smartmobile.lk/tablet-price-list-in-sri-lanka/samsung-galaxy-tab-s10-fe-wifi-8gb-ram-128gb"
  },
  {
    "name": "Samsung Galaxy Tab S10 Lite 5G (8GB RAM|256GB)",
    "category": "Tablets",
    "price": 0,
    "image": "https://smartmobile.lk/image/cache/catalog/Samsung-Galaxy-Tab-S10-Lite-228x228.jpg",
    "tag": "Enquire",
    "source": "https://smartmobile.lk/tablet-price-list-in-sri-lanka/samsung-galaxy-tab-s10-lite-5g-8gb-ram-256gb"
  },
  {
    "name": "Samsung Galaxy Tab S10 Lite wifi (8GB RAM|256GB)",
    "category": "Tablets",
    "price": 0,
    "image": "https://smartmobile.lk/image/cache/catalog/Samsung-Galaxy-Tab-S10-Lite-228x228.jpg",
    "tag": "Enquire",
    "source": "https://smartmobile.lk/tablet-price-list-in-sri-lanka/samsung-galaxy-tab-s10-lite-wifi-8gb-ram-256gb"
  },
  {
    "name": "Samsung Galaxy Tab S10 Lite 5G (6GB RAM|128GB)",
    "category": "Tablets",
    "price": 0,
    "image": "https://smartmobile.lk/image/cache/catalog/Samsung-Galaxy-Tab-S10-Lite-228x228.jpg",
    "tag": "Enquire",
    "source": "https://smartmobile.lk/tablet-price-list-in-sri-lanka/samsung-galaxy-tab-s10-lite-6gb-ram-128gb-5g"
  },
  {
    "name": "Samsung Galaxy Tab S10 Lite wifi (6GB RAM|128GB)",
    "category": "Tablets",
    "price": 0,
    "image": "https://smartmobile.lk/image/cache/catalog/Samsung-Galaxy-Tab-S10-Lite-228x228.jpg",
    "tag": "Enquire",
    "source": "https://smartmobile.lk/tablet-price-list-in-sri-lanka/samsung-galaxy-tab-s10-lite-6gb-ram-128gb-wifi"
  },
  {
    "name": "Samsung Galaxy Tab A11+ (6GB RAM|128GB)",
    "category": "Tablets",
    "price": 0,
    "image": "https://smartmobile.lk/image/cache/catalog/Samsung-Galaxy-Tab-A11-plus-228x228.jpg",
    "tag": "Enquire",
    "source": "https://smartmobile.lk/tablet-price-list-in-sri-lanka/samsung-galaxy-tab-a11-plus-6gb-ram-128gb"
  },
  {
    "name": "Samsung Galaxy Tab A11 (8GB RAM|128GB)",
    "category": "Tablets",
    "price": 0,
    "image": "https://smartmobile.lk/image/cache/catalog/Samsung-Galaxy-Tab-A11-228x228.jpg",
    "tag": "Enquire",
    "source": "https://smartmobile.lk/tablet-price-list-in-sri-lanka/samsung-galaxy-tab-a11-8gb-ram-128gb"
  },
  {
    "name": "Samsung Galaxy Tab A11 (4GB RAM|64GB)",
    "category": "Tablets",
    "price": 0,
    "image": "https://smartmobile.lk/image/cache/catalog/Samsung-Galaxy-Tab-A11-228x228.jpg",
    "tag": "Enquire",
    "source": "https://smartmobile.lk/tablet-price-list-in-sri-lanka/samsung-galaxy-tab-a11-4gb-ram-64gb"
  },
  {
    "name": "Greentel A9 Pro Tab (4GB RAM|64GB)",
    "category": "Tablets",
    "price": 0,
    "image": "https://smartmobile.lk/image/cache/catalog/Greentel%20A9%20Pro%20Tab-228x228.jpg",
    "tag": "Enquire",
    "source": "https://smartmobile.lk/tablet-price-list-in-sri-lanka/greentel-a9-pro-tab-4gb-ram-64gb-"
  },
  {
    "name": "Greentel Tab A10 Pro (4GB RAM|128GB)",
    "category": "Tablets",
    "price": 0,
    "image": "https://smartmobile.lk/image/cache/catalog/Greentel%20A10%20Pro-228x228.jpg",
    "tag": "Enquire",
    "source": "https://smartmobile.lk/tablet-price-list-in-sri-lanka/greentel-tab-a10-pro-4gb-ram-128gb-"
  },
  {
    "name": "Blackview ZENO 10 (12GB RAM|128GB)",
    "category": "Tablets",
    "price": 0,
    "image": "https://smartmobile.lk/image/cache/catalog/Blackview%20ZENO%2010-228x228.jpg",
    "tag": "Enquire",
    "source": "https://smartmobile.lk/tablet-price-list-in-sri-lanka/blackview-zeno-10-12gb-ram-128gb-"
  },
  {
    "name": "Blackview MEGA 2 (12GB RAM|256GB)",
    "category": "Tablets",
    "price": 0,
    "image": "https://smartmobile.lk/image/cache/catalog/Blackview%20MEGA%202-228x228.jpg",
    "tag": "Enquire",
    "source": "https://smartmobile.lk/tablet-price-list-in-sri-lanka/blackview-mega-2-12gb-ram-256gb-"
  },
  {
    "name": "Blackview Tab 60 Pro (4GB RAM|128GB)",
    "category": "Tablets",
    "price": 0,
    "image": "https://smartmobile.lk/image/cache/catalog/Blackview%20Tab%2060%20Pro-228x228.jpg",
    "tag": "Enquire",
    "source": "https://smartmobile.lk/tablet-price-list-in-sri-lanka/blackview-tab-60-pro-4gb-ram-128gb-"
  },
  {
    "name": "Blackview Tab 20 WiFi (4GB RAM|64GB)",
    "category": "Tablets",
    "price": 0,
    "image": "https://smartmobile.lk/image/cache/catalog/Blackview%20Tab%2020%20WiFi-228x228.jpg",
    "tag": "Enquire",
    "source": "https://smartmobile.lk/tablet-price-list-in-sri-lanka/blackview-tab-20-wifi-4gb-ram-64gb-"
  },
  {
    "name": "JBL Party Box 1000",
    "category": "Bluetooth Speakers",
    "price": 0,
    "image": "https://smartmobile.lk/image/cache/catalog/JBL%20Party%20Box%201000-228x228.jpg",
    "tag": "Enquire",
    "source": "https://smartmobile.lk/accessories-price-list-in-sri-lanka/bluetooth-speaker-prices-in-sri-lanka/jbl-party-box-1000"
  },
  {
    "name": "JBL Party Box 120",
    "category": "Bluetooth Speakers",
    "price": 0,
    "image": "https://smartmobile.lk/image/cache/catalog/JBL%20Party%20Box%20120-228x228.jpg",
    "tag": "Enquire",
    "source": "https://smartmobile.lk/accessories-price-list-in-sri-lanka/bluetooth-speaker-prices-in-sri-lanka/jbl-party-box-120"
  }
];
const categories = ["All", ...Array.from(new Set(products.map(p=>p.category)))];
const catalogueDepartments = [
  {no:"01",name:"Mobile Phones",kicker:"LATEST SMARTPHONES",image:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=85",description:"Flagship, foldable and value smartphones from the world’s leading brands.",brands:"Apple · Samsung · Xiaomi · Redmi · POCO · vivo · OPPO · OnePlus · HONOR · Huawei · realme · Infinix · TECNO",groups:[
    {title:"Apple iPhone",items:["iPhone 11–17 series","Pro & Pro Max","Plus models","iPhone Air","iPhone SE","Original Apple accessories"]},
    {title:"Samsung Galaxy",items:["S series","Z Fold","Z Flip","A series","M series","F series","Galaxy Tab"]},
    {title:"Xiaomi, Redmi & POCO",items:["Xiaomi flagships","Redmi Note","Redmi Number","Redmi A / C / K","POCO F / X / M"]},
    {title:"vivo & iQOO",items:["X series","V series","Y series","S series","iQOO series"]},
    {title:"More brands",items:["OPPO","OnePlus","HONOR","Huawei","realme","Infinix","TECNO"]}
  ]},
  {no:"02",name:"Laptops & Computers",kicker:"WORK. CREATE. PLAY.",image:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1200&q=85",description:"Ultrabooks, business laptops, gaming machines, desktops and creator workstations.",brands:"Apple · ASUS · HP · Dell · Lenovo · Acer · MSI · Huawei · HONOR · Xiaomi",groups:[
    {title:"Apple",items:["MacBook Air","MacBook Pro","iMac","Mac mini","Mac Studio"]},
    {title:"ASUS",items:["VivoBook","ZenBook","ExpertBook","TUF Gaming","ROG"]},
    {title:"HP",items:["Pavilion","ProBook","EliteBook","Envy","Spectre","Victus","Omen"]},
    {title:"Dell",items:["Inspiron","Latitude","XPS","Precision","Vostro","Alienware"]},
    {title:"Lenovo",items:["ThinkPad","IdeaPad","Yoga","Legion","LOQ"]},
    {title:"Acer & others",items:["Aspire","Swift","TravelMate","Nitro","Predator","Huawei MateBook","HONOR MagicBook","RedmiBook","Xiaomi Book"]}
  ]},
  {no:"03",name:"Tablets & Smartwatches",kicker:"TECH THAT MOVES",image:"https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=1200&q=85",description:"Portable screens and wearables for productivity, fitness and everyday life.",brands:"Apple · Samsung · Xiaomi · Lenovo · Huawei · Amazfit",groups:[
    {title:"Tablets",items:["Apple iPad","Samsung Galaxy Tab","Xiaomi Pad","Lenovo Tab","Huawei tablets"]},
    {title:"Smartwatches",items:["Apple Watch","Samsung Watch","Huawei Watch","Amazfit","Fitness wearables"]}
  ]},
  {no:"04",name:"Printers & Scanners",kicker:"PRINT & PRODUCTIVITY",image:"https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=1200&q=85",description:"Home, office, photo, receipt and large-format printing with genuine supplies.",brands:"Epson · Canon · HP · Brother · Pantum · Ricoh · Xerox · Kyocera · Fujifilm",groups:[
    {title:"Epson range",items:["EcoTank L / M","WorkForce","Expression","Photo printers","A3 & large-format","Receipt & dot matrix","Scanners","Projectors"]},
    {title:"Other brands",items:["Canon","HP","Brother","Pantum","Lenovo","Fujifilm","Kyocera","Ricoh","Xerox","Konica Minolta","Toshiba","G&G"]},
    {title:"Printer supplies",items:["Original ink bottles","Ink & toner cartridges","Drum units","Print heads","Maintenance boxes","Waste ink pads","Cables","CISS","Sublimation ink & paper","Thermal rolls"]}
  ]},
  {no:"05",name:"CCTV & Security",kicker:"SMARTER PROTECTION",image:"https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=85",description:"Complete surveillance, access control and smart security solutions.",brands:"Hikvision · Dahua · Uniview · Tiandy · EZVIZ · IMOU · Reolink · Xiaomi · Tapo",groups:[
    {title:"Cameras",items:["HD analog","IP","Wi-Fi","PTZ","4G SIM","Solar","Color night vision","Thermal","Dome","Bullet","Turret","Doorbell"]},
    {title:"Systems & accessories",items:["NVR / DVR","CCTV hard disks","PoE & network switches","Video door phones","Access control","Face recognition","Fingerprint attendance","Alarm systems","Monitors","Cables","Power & backup"]}
  ]},
  {no:"06",name:"DJI Drones & Accessories",kicker:"FLY. FILM. CREATE.",image:"https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=1200&q=85",description:"Consumer, enterprise and agricultural drones plus DJI imaging and audio.",brands:"DJI Mavic · Mini · Air · Neo · Flip · Matrice · Agras · Osmo · Ronin · Mic · Power",groups:[
    {title:"Consumer drones",items:["Mavic","Mini","Air","Neo","Flip"]},
    {title:"Enterprise",items:["Matrice","Matrice 4","Mavic 3 Enterprise","Matrice 350 RTK","Agras","DJI Dock","Zenmuse payloads"]},
    {title:"Handheld imaging",items:["Osmo Pocket","Osmo Action","Osmo 360","Osmo Mobile","Osmo Nano"]},
    {title:"Pro stabilization",items:["Ronin","RS","RSC","DJI Focus","Camera transmission"]},
    {title:"DJI audio",items:["DJI Mic","Mic Mini","Mic 2","Transmitters","Receivers","Lavalier mics"]},
    {title:"Parts & power",items:["Flight batteries","Charging hubs","Propellers","Controllers","ND filters","Lenses","Bags","Landing pads","Cases","Replacement parts","DJI Power"]}
  ]},
  {no:"07",name:"Insta360 & Action Cameras",kicker:"EVERY ANGLE. EVERY MOVE.",image:"https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=1200&q=85",description:"Immersive 360°, wearable and action-camera systems for creators.",brands:"Insta360 · GoPro · DJI Action",groups:[
    {title:"Insta360 cameras",items:["X series","Ace series","GO series","ONE RS","Link webcams","Flow gimbals"]},
    {title:"Creator accessories",items:["GPS preview remotes","Motorcycle accessories","Invisible selfie sticks","Mounts","Cases","Lens guards","Batteries","Charging hubs","Mics","Dive cases","Memory cards"]}
  ]},
  {no:"08",name:"Digital Cameras & Photography",kicker:"CAPTURE WITH INTENT",image:"https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=85",description:"Cameras, lenses and creator essentials for photography and video.",brands:"Canon · Sony · Nikon · Fujifilm · GoPro · DJI · Insta360",groups:[
    {title:"Imaging",items:["Mirrorless cameras","DSLR cameras","Compact cameras","Action cameras","Webcams","Lenses"]},
    {title:"Studio & field",items:["Tripods","Gimbals","Lighting","Microphones","Camera bags","Batteries","Chargers","Memory cards"]}
  ]},
  {no:"09",name:"Computer Accessories",kicker:"BUILD & UPGRADE",image:"https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=1200&q=85",description:"Components, peripherals and workspace upgrades for every setup.",brands:"Intel · AMD · NVIDIA · ASUS · Gigabyte · MSI · Kingston · Samsung · Crucial",groups:[
    {title:"Components",items:["SSD & HDD","RAM","Graphics cards","Motherboards","Processors","Laptop batteries","Cooling fans"]},
    {title:"Peripherals",items:["Monitors","Keyboards","Mice","Laptop chargers","Bags","Stands","USB hubs","Docking stations","HDD enclosures","HDMI / USB / network cables"]}
  ]},
  {no:"10",name:"Mobile Accessories",kicker:"POWER & PROTECT",image:"https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?auto=format&fit=crop&w=1200&q=85",description:"Reliable charging, protection and connectivity for everyday devices.",brands:"Baseus · UGREEN · Anker · Hoco · Joyroom · Vention · Orico",groups:[
    {title:"Charging & power",items:["Chargers","Fast-charge cables","Power banks","Wireless chargers","Car chargers"]},
    {title:"Everyday accessories",items:["Phone cases","Screen protectors","Adapters","Hubs","Docks","Holders","Memory cards"]}
  ]},
  {no:"11",name:"Networking Equipment",kicker:"FAST. STABLE. CONNECTED.",image:"https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=85",description:"Home, office and enterprise networking for strong, reliable connections.",brands:"TP-Link · Ruijie · Huawei · ZTE · Tenda · Mercusys · Ubiquiti",groups:[
    {title:"Wi-Fi & routing",items:["Wi-Fi routers","4G / 5G routers","Mesh Wi-Fi","Access points","Range extenders"]},
    {title:"Network infrastructure",items:["Managed switches","PoE switches","Network switches","Cables","Connectors","Adapters"]}
  ]},
  {no:"12",name:"Smart Home, Power & Business",kicker:"SMARTER SPACES",image:"https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=85",description:"Smart living, backup power, office and POS tools in one complete department.",brands:"JBL · Edifier · Soundcore · Xiaomi · Aqara · Roborock · Dreame",groups:[
    {title:"Smart home & cleaning",items:["Smart locks","Sensors","Bulbs","Switches","Robot cleaners","Vacuum cleaners"]},
    {title:"Power products",items:["UPS","Power banks","Power stations","Solar generators","Batteries","Inverters"]},
    {title:"Audio & gaming",items:["Headphones","Earbuds","Bluetooth speakers","PlayStation","Xbox","Gaming PCs","Controllers"]},
    {title:"Office & POS",items:["Projectors","Scanners","Webcams","Shredders","Barcode scanners","Receipt printers","Cash drawers","Fingerprint machines"]}
  ]}
];
const wa = "94777543984";

export default function Home({ shopOnly = false }: { shopOnly?: boolean }) {
  const root = useRef<HTMLElement>(null);
  const [menu, setMenu] = useState(false), [category, setCategory] = useState("All"), [search, setSearch] = useState("");
  const [cartOpen, setCartOpen] = useState(false);
  const [cnyUnit, setCnyUnit] = useState(100);
  const [cnyRate, setCnyRate] = useState(50.63);
  const [wholesaleQty, setWholesaleQty] = useState(50);
  const [shippingCost, setShippingCost] = useState(25000);
  const [importFees, setImportFees] = useState(18);
  const [wholesaleMargin, setWholesaleMargin] = useState(15);
  const [cart, setCart] = useState<Record<string, number>>({});
  const filtered = useMemo(() => products.filter(p => (category === "All" || p.category === category) && p.name.toLowerCase().includes(search.toLowerCase())), [category, search]);
  const chat = (message: string) => `https://wa.me/${wa}?text=${encodeURIComponent(message)}`;
  const choose = (c:string) => { if(!shopOnly){window.location.href="/shop?category="+encodeURIComponent(c);return;} setCategory(c); document.getElementById("shop")?.scrollIntoView({behavior:"smooth"}); };
  useEffect(()=>{if(shopOnly){const selected=new URLSearchParams(window.location.search).get("category");if(selected&&categories.includes(selected))setCategory(selected);}},[shopOnly]);
  const add = (name:string) => { setCart(v=>({...v,[name]:(v[name]||0)+1})); setCartOpen(true); };
  const cartItems = products.filter(p=>cart[p.name]).map(p=>({...p,qty:cart[p.name]}));
  const cartCount = Object.values(cart).reduce((a,b)=>a+b,0);
  const total = cartItems.reduce((a,p)=>a+p.price*p.qty,0);
  const safeQty = Math.max(1, wholesaleQty || 1);
  const goodsValueLkr = Math.max(0,cnyUnit) * safeQty * Math.max(0,cnyRate);
  const feesValueLkr = goodsValueLkr * (Math.max(0,importFees) / 100);
  const landedTotalLkr = goodsValueLkr + Math.max(0,shippingCost) + feesValueLkr;
  const landedUnitLkr = landedTotalLkr / safeQty;
  const wholesaleUnitLkr = landedUnitLkr * (1 + Math.max(0,wholesaleMargin) / 100);
  const wholesaleOrderLkr = wholesaleUnitLkr * safeQty;
  const money = (value:number) => new Intl.NumberFormat("en-LK",{maximumFractionDigits:0}).format(Number.isFinite(value)?value:0);
  const checkout = chat(`Hi TONDEL, I would like a wholesale quotation for:\n${cartItems.map(p=>`• ${p.name} x ${p.qty}`).join("\n")}\n\nPlease share MOQ and bulk pricing for these items\nPlease confirm availability and final price.`);
  useEffect(()=>{
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let cleanup=()=>{}; let cancelled=false;
    Promise.all([import("gsap"),import("gsap/ScrollTrigger")]).then(([g,s])=>{
      if(cancelled)return; const gsap=g.gsap, ScrollTrigger=s.ScrollTrigger; gsap.registerPlugin(ScrollTrigger);
      const ctx=gsap.context(()=>{
        gsap.from(".hero-copy > *",{y:42,opacity:0,duration:.9,stagger:.1,ease:"power3.out"});
        gsap.from(".hero-visual",{x:70,opacity:0,scale:.94,duration:1.2,ease:"expo.out"});
        gsap.to(".orb",{y:-28,x:18,rotation:12,duration:3.2,repeat:-1,yoyo:true,ease:"sine.inOut"});
        gsap.to(".motion-progress",{scaleX:1,ease:"none",scrollTrigger:{trigger:"main",start:"top top",end:"bottom bottom",scrub:.2}});
        gsap.utils.toArray<HTMLElement>(".product").forEach((el,i)=>gsap.from(el,{y:55,opacity:0,duration:.65,delay:(i%3)*.06,ease:"power3.out",scrollTrigger:{trigger:el,start:"top 94%",toggleActions:"play reverse play reverse"}}));
        gsap.utils.toArray<HTMLElement>(".catalog-group, .benefits > div, footer .footer-main > div").forEach(el=>gsap.from(el,{y:45,opacity:0,duration:.8,ease:"power3.out",scrollTrigger:{trigger:el,start:"top 95%",toggleActions:"play reverse play reverse"}}));
        gsap.utils.toArray<HTMLElement>(".story-step").forEach((step,i)=>ScrollTrigger.create({trigger:step,start:"top center",end:"bottom center",onEnter:()=>gsap.to(".story-device",{y:-i*18,rotation:i%2?3:-2,scale:1+i*.035,duration:.7,ease:"power3.out"}),onEnterBack:()=>gsap.to(".story-device",{y:-i*18,rotation:i%2?3:-2,scale:1+i*.035,duration:.7,ease:"power3.out"})}));
        gsap.to(".story-glow",{rotation:360,duration:16,repeat:-1,ease:"none"});
      },root);
      cleanup=()=>ctx.revert();
    });
    return ()=>{cancelled=true;cleanup();};
  },[]);
  useEffect(()=>{
    if(shopOnly || window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;
    const timer=window.setInterval(()=>{
      if(document.hidden)return;
      root.current?.querySelectorAll<HTMLElement>(".catalog-group .product-grid").forEach(row=>{
        if(row.matches(":hover") || row.contains(document.activeElement))return;
        const bounds=row.getBoundingClientRect();
        if(bounds.bottom<0 || bounds.top>window.innerHeight)return;
        const limit=row.scrollWidth-row.clientWidth;
        if(limit<=1)return;
        row.scrollTo({left:row.scrollLeft>=limit-4?0:Math.min(limit,row.scrollLeft+row.clientWidth*.7),behavior:"smooth"});
      });
    },4500);
    return ()=>window.clearInterval(timer);
  },[shopOnly,category,search]);
  return <main ref={root} className={shopOnly ? "shop-page" : "home-page"}>
    <div className="motion-progress"/>
    <div className="topbar"><div><span>▣ Islandwide Delivery</span><i/> <span>◇ 1 Month Warranty*</span><i/> <span>◉ WhatsApp Support</span></div><div><a href="/delivery">Track Order</a><i/><a href="/contact">Help</a><i/><span>LKR</span></div></div>
    <header className="premium-header">
      <a className="brand" href="/"><img src="/tondel-logo.png" alt="TONDEL"/></a>
      <label className="header-search" aria-label="Search products"><input placeholder="Search products, brands, or categories..." value={search} onChange={e=>setSearch(e.target.value)}/><span>⌕</span></label>
      <div className="header-actions"><a className="account-link" href="/contact">♙ <span>Account</span></a><a className="account-link" href="/shop">♡ <span>Wishlist</span></a><button className="cart-trigger" onClick={()=>setCartOpen(true)}>▤ <span>Quote List</span> <b>{cartCount}</b></button><button className="menu" onClick={()=>setMenu(!menu)} aria-label="Toggle menu">{menu ? "×" : "☰"}</button></div>
    </header>
    <div className="premium-nav"><button className="all-categories" onClick={()=>setMenu(!menu)}>☰ <span>All Categories</span></button><nav className={menu ? "open" : ""}>{[["Home","/"],["Deals 🔥","/#shop"],["New Arrivals","/shop"],["Best Sellers","/shop"],["Accessories","/shop"],["About","/about"],["Delivery","/delivery"]].map(x=><a key={x[0]} href={x[1]} onClick={()=>setMenu(false)}>{x[0]}</a>)}</nav><a className="nav-contact" href={chat("Hi TONDEL, I would like to know about your products.")} target="_blank">◉ Contact Us</a></div>
    <section className="hero premium-hero" id="top">
      <div className="hero-copy"><p className="hero-pill">WHOLESALE TECH SUPPLY</p><h1 className="kinetic-title"><span>Source Smarter.</span><br/><em>Scale Faster.</em></h1><p className="lead">China-sourced electronics for Sri Lankan retailers, resellers and projects—with bulk pricing and direct WhatsApp quotations.</p><div className="hero-specs"><span><b>箱</b>Bulk Pricing</span><span><b>¥</b>China Sourcing</span><span><b>✓</b>Wide Range</span><span><b>▣</b>Islandwide</span></div><div className="hero-buy"><div><small>MOQ-based business quotes</small><strong>Wholesale First</strong></div><a className="primary" href="#china-calculator">Calculate Cost <span>→</span></a></div></div>
      <div className="hero-visual device-stage"><div className="hero-halo"/><div className="device-glow"/><div className="device-float device-phone"><img src="/hero-ip.png" width="390" height="564" alt="Blue smartphone" fetchPriority="high"/></div><div className="device-float device-headphones"><img src="/hero-head.png" width="459" height="587" alt="Blue over-ear headphones" fetchPriority="high"/></div><div className="device-float device-watch"><img src="/hero-wtch.png" width="276" height="339" alt="Blue smartwatch" fetchPriority="high"/></div><div className="device-caption"><span/> YOUR NEXT UPGRADE</div></div>
      <aside className="hero-assurance"><div><b>▣</b><span>Islandwide<br/>Delivery</span></div><div><b>◇</b><span>1 Month<br/>Warranty*</span></div><div><b>◉</b><span>After-Sales<br/>Support</span></div></aside>
    </section>
    <section className="category-strip premium-categories" id="categories" aria-label="Shop by category"><div className="category-heading"><span>EXPLORE THE COLLECTION</span><a href="/shop">Shop all products →</a></div><div className="category-rail">{[...categories.slice(1),"All"].map(c=><button key={c} className={category===c&&shopOnly?"category-active":""} onClick={()=>choose(c)} aria-label={c==="All"?"Browse all products":"Browse "+c}><span className="cat-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{c==="All"?<><rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="3" width="7" height="7" rx="2"/><rect x="3" y="14" width="7" height="7" rx="2"/><rect x="14" y="14" width="7" height="7" rx="2"/></>:c==="Bluetooth Speakers"?<><rect x="6" y="2" width="12" height="20" rx="3"/><circle cx="12" cy="15" r="3"/><circle cx="12" cy="7" r="1"/></>:c==="Tablets"?<><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M17 11v2"/></>:<><rect x="6" y="2" width="12" height="20" rx="3"/><path d="M10 5h4M11 19h2"/></>}</svg></span><span className="category-copy"><strong>{c==="All"?"All Products":c==="Bluetooth Speakers"?"Speakers":c.replace(" Phones","")}</strong><small>{c==="All"?"Explore everything":c==="Tablets"?"Work & play":c==="Bluetooth Speakers"?"Wireless audio":"Smartphones"}</small></span><svg className="category-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><path d="M5 12h14m-5-5 5 5-5 5"/></svg></button>)}</div></section>
    <section className={"department-showcase "+(shopOnly?"department-full":"")} id="catalogue"><div className="department-header"><div><p className="eyebrow">COMPLETE PRODUCT CATALOGUE</p><h2>{shopOnly?"Explore every department":"Wholesale technology for every business."}</h2><p>{shopOnly?"Browse the complete TONDEL product range by department, brand and product family.":"Bulk-ready ranges for retailers, resellers, installers, offices and project supply."}</p></div>{!shopOnly&&<a href="/shop#catalogue">View complete catalogue <span>→</span></a>}</div><div className="department-grid">{catalogueDepartments.slice(0,shopOnly?catalogueDepartments.length:6).map(d=><article className="department-card" key={d.no}><div className="department-image"><img src={d.image} alt={d.name} loading="lazy" onError={e=>{e.currentTarget.onerror=null;e.currentTarget.src="/tondel-logo.png";}}/><span>{d.no}</span><div className="department-shade"/></div><div className="department-content"><small>{d.kicker}</small><h3>{d.name}</h3><p>{d.description}</p><div className="department-brands">{d.brands}</div>{shopOnly&&<div className="department-groups">{d.groups.map(g=><div key={g.title}><strong>{g.title}</strong><span>{g.items.join(" · ")}</span></div>)}</div>}<a href={chat("Hi TONDEL, I’m interested in "+d.name+". Please share availability and prices.")} target="_blank" rel="noopener noreferrer">Ask about this department <span>↗</span></a></div></article>)}</div></section>
    <section className="import-calculator" id="china-calculator"><div className="calculator-intro"><p className="eyebrow">CHINA → SRI LANKA WHOLESALE CALCULATOR</p><h2>Know your landed cost before you quote.</h2><p>Convert the supplier’s RMB price into an estimated Sri Lankan landed cost, then apply your wholesale margin. Every value stays editable for the actual shipment.</p><div className="wholesale-points"><span><b>01</b> Enter China unit price</span><span><b>02</b> Add MOQ and import costs</span><span><b>03</b> Generate wholesale price</span></div><small className="rate-note">Default customs reference: ¥1 = Rs. 50.63, effective 02–08 Nov 2026. Update the rate before confirming a quotation.</small></div><div className="calculator-panel"><div className="calculator-fields"><label><span>Supplier unit price</span><div><b>¥</b><input type="number" min="0" step="1" value={cnyUnit} onChange={e=>setCnyUnit(Number(e.target.value))}/><small>CNY</small></div></label><label><span>Order quantity / MOQ</span><div><b>×</b><input type="number" min="1" step="1" value={wholesaleQty} onChange={e=>setWholesaleQty(Number(e.target.value))}/><small>units</small></div></label><label><span>CNY → LKR rate</span><div><b>Rs.</b><input type="number" min="0" step="0.01" value={cnyRate} onChange={e=>setCnyRate(Number(e.target.value))}/><small>per CNY</small></div></label><label><span>Shipping & logistics</span><div><b>Rs.</b><input type="number" min="0" step="1000" value={shippingCost} onChange={e=>setShippingCost(Number(e.target.value))}/><small>total</small></div></label><label><span>Duty & other fees</span><div><b>%</b><input type="number" min="0" step="1" value={importFees} onChange={e=>setImportFees(Number(e.target.value))}/><small>estimate</small></div></label><label><span>Wholesale margin</span><div><b>%</b><input type="number" min="0" step="1" value={wholesaleMargin} onChange={e=>setWholesaleMargin(Number(e.target.value))}/><small>margin</small></div></label></div><div className="calculator-result"><div className="result-label"><span>RECOMMENDED WHOLESALE PRICE</span><small>per unit</small></div><strong>Rs. {money(wholesaleUnitLkr)}</strong><div className="result-breakdown"><span><small>Goods value</small><b>Rs. {money(goodsValueLkr)}</b></span><span><small>Estimated fees</small><b>Rs. {money(feesValueLkr)}</b></span><span><small>Landed unit cost</small><b>Rs. {money(landedUnitLkr)}</b></span><span><small>MOQ quote total</small><b>Rs. {money(wholesaleOrderLkr)}</b></span></div><a href={chat(`Hi TONDEL, I need a China import wholesale quotation. Supplier price: ¥${cnyUnit} per unit. Quantity: ${safeQty}. Estimated landed unit cost: Rs. ${money(landedUnitLkr)}. Target wholesale price: Rs. ${money(wholesaleUnitLkr)}. Please confirm sourcing, shipping, duty and final bulk price.`)} target="_blank" rel="noopener noreferrer">Send calculation for a bulk quote <span>↗</span></a><p>Estimate only. Final bank rate, freight, customs classification and taxes may change the landed cost.</p></div></div></section>
    <section className="story" aria-label="TONDEL shopping experience">
      <div className="story-copy">
        <article className="story-step"><small>01 · DISCOVER</small><h2>Find tech that fits your life.</h2><p>Explore a curated range of smartphones, audio, wearables and everyday essentials.</p></article>
        <article className="story-step"><small>02 · CHOOSE</small><h2>Clear choices. Friendly guidance.</h2><p>Compare what you love, add it to your bag and ask us anything directly.</p></article>
        <article className="story-step"><small>03 · ORDER</small><h2>Checkout in one conversation.</h2><p>Your full cart opens in WhatsApp, ready for stock confirmation and islandwide delivery.</p></article>
      </div>
      <div className="story-stage"><div className="story-glow"/><div className="story-device"><img src="/tondel-logo.png" alt="TONDEL"/><span>SMART SHOPPING</span><div><b>Fast</b><small>WhatsApp checkout</small></div></div></div>
    </section>
    <section className="shop" id="shop">
      <div className="section-title"><div><p className="eyebrow">CURATED FOR YOU</p><h2>{shopOnly ? "Explore all products" : "Find your next upgrade"}</h2></div><label>⌕<input placeholder="Search products" value={search} onChange={e=>setSearch(e.target.value)}/></label></div>
      <div className={shopOnly ? "filters" : "filters home-filter"}>{categories.map(c=><button className={category===c?"active":""} onClick={()=>setCategory(c)} key={c}>{c}</button>)}</div>
      {(shopOnly || category !== "All" || search ? ["Results"] : ["Featured Deals"]).map(group => { const matches = group === "Results" || group === "Featured Deals" ? filtered : filtered.filter(p=>p.category===group); const groupItems = shopOnly ? matches : matches.slice(0,4); return <section className="catalog-group" key={group}><div className="group-heading"><h2>{group === "Results" ? "Products" : group}</h2><div className="row-controls"><a href="/shop">View all →</a>{!shopOnly&&<><button aria-label="Previous products" onClick={e=>e.currentTarget.closest(".catalog-group")?.querySelector(".product-grid")?.scrollBy({left:-350,behavior:"smooth"})}>←</button><button aria-label="Next products" onClick={e=>e.currentTarget.closest(".catalog-group")?.querySelector(".product-grid")?.scrollBy({left:350,behavior:"smooth"})}>→</button></>}</div></div><div className="product-grid" tabIndex={0} aria-label={group+" products"}>{groupItems.map(p=><article className="product" key={p.name}><div className="product-image"><span>{p.tag}</span><img src={p.image} alt={p.name} loading="lazy" onError={e=>{e.currentTarget.onerror=null;e.currentTarget.src="/tondel-logo.png";}}/></div><div className="product-info"><small>{p.category}</small><h3>{p.name}</h3><p className="price">Price on request</p><button className="add-cart" onClick={()=>add(p.name)}>Add to quote <b>＋</b></button><a className="quick-order" href={chat(`Hi TONDEL, I need a wholesale quote for ${p.name}. Please confirm MOQ, bulk price and availability.`)} target="_blank">Wholesale enquiry ↗</a></div></article>)}</div></section>; })}
      {!filtered.length&&<div className="empty">No matching products. Message us and we’ll help you find it.</div>}
    </section>
    {!shopOnly&&<section className="promo-tiles"><article className="promo-tile gaming"><div><small>LEVEL UP</small><h3>Gaming<br/>Essentials</h3><p>Controllers, audio & more</p><a href="/shop">Shop Gaming →</a></div></article><article className="promo-tile audio"><div><small>GO WIRELESS</small><h3>Audio<br/>Freedom</h3><p>Sound that moves with you</p><a href="/shop">Explore Audio →</a></div></article><article className="promo-tile smart"><div><small>LIVE SMARTER</small><h3>Smart<br/>Devices</h3><p>Everyday tech, upgraded</p><a href="/shop">Shop Now →</a></div></article></section>}
    <section className="promo"><div><p className="eyebrow">NEED HELP CHOOSING?</p><h2>Tell us what you need.<br/>We’ll find the right tech.</h2><p>Send your budget and requirements through WhatsApp for a quick, friendly recommendation.</p><a className="primary light" href={chat("Hi TONDEL, I need help choosing a product. My budget is: ")} target="_blank">Get a recommendation →</a></div><div className="promo-art"><div className="ring"/><img src="/tondel-logo.png" alt="TONDEL logo"/></div></section>
    <section className="about" id="about"><div><p className="eyebrow">ABOUT TONDEL</p><h2>Technology made simple.</h2></div><div><p>TONDEL is your trusted destination for electronics, smart gadgets and accessories. We make shopping easy with direct WhatsApp assistance and islandwide delivery across Sri Lanka.</p><div className="mini-grid"><div><b>✓</b><span><strong>Easy ordering</strong>Personal support on WhatsApp</span></div><div><b>✓</b><span><strong>Islandwide reach</strong>Delivery across Sri Lanka</span></div></div></div></section>
    <section className="benefits" id="support"><div><span>⌁</span><h3>Islandwide Delivery</h3><p>Convenient delivery to locations across Sri Lanka.</p></div><div><span>◇</span><h3>1-Month Warranty</h3><p>Warranty support for eligible products. Confirm coverage before purchase.</p></div><div><span>◌</span><h3>WhatsApp Support</h3><p>Product advice and ordering help from a real person.</p></div></section>
    <section className="payment-section"><div><p className="eyebrow">PAYMENT ASSISTANCE</p><h2>A simple way to complete your order.</h2><p>Ask us about Visa, Mastercard and bank transfer options. Availability and payment instructions are confirmed with your order.</p></div><div className="payment-options"><span className="visa-word">VISA</span><span className="master-word"><i/>Mastercard</span><span className="bank-word">▤ Bank transfer</span><a href="https://wa.me/94777543984?text=Hi%20TONDEL%2C%20please%20confirm%20the%20payment%20options%20for%20my%20order." target="_blank" rel="noopener noreferrer">Confirm payment options ↗</a><small>Online card checkout is not currently enabled.</small></div></section><footer className="animated-footer retail-footer"><div className="footer-intro"><div><span className="footer-kicker">SMART CHOICES. SMARTER LIVING.</span><h2>Stock smarter. Grow faster.</h2></div><a className="footer-chat" href={chat("Hi TONDEL, can you help me choose my next upgrade?")} target="_blank" rel="noopener noreferrer">Let’s talk on WhatsApp <span>↗</span></a></div><div className="footer-main"><div className="footer-brand-block"><a href="/" aria-label="TONDEL home"><img className="footer-logo" src="/tondel-logo.png" alt="TONDEL"/></a><p>China-sourced electronics and business technology with wholesale quotations, flexible MOQs and islandwide supply.</p><span className="footer-location">Sri Lanka · Islandwide delivery</span></div><div><h4>Explore</h4><a href="/shop">Shop all products</a><a href="/shop?category=Samsung%20Phones">Smartphones</a><a href="/shop?category=Tablets">Tablets</a><a href="/shop?category=Bluetooth%20Speakers">Speakers & audio</a></div><div><h4>Here to help</h4><a href="/about">About TONDEL</a><a href="/delivery">Delivery information</a><a href="/delivery">Warranty support</a><a href="/contact">Contact us</a></div><div className="footer-contact-block"><h4>Talk to TONDEL</h4><a className="footer-phone" href="tel:+94777543984">077 754 3984</a><p>Need a price or product recommendation? Send us a message.</p><a href={chat("Hi TONDEL!")} target="_blank" rel="noopener noreferrer">Chat on WhatsApp ↗</a><small>1-month warranty: confirm product eligibility before ordering.</small></div></div><div className="footer-payment-row"><div><h3>Payment options</h3><p>Confirm available methods and instructions with your order.</p><small>Online card checkout is not currently enabled.</small></div><div className="footer-payment-badges"><img src="/payments/visa.png" width="100" height="40" alt="Visa" loading="lazy"/><img src="/payments/mastercard.png" width="100" height="40" alt="Mastercard" loading="lazy"/><img src="/payments/bank.png" width="100" height="40" alt="Bank transfer" loading="lazy"/></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} TONDEL. All rights reserved.</span><span>Smart tech. Personal service.</span><a href="#top">Back to top ↑</a></div></footer>
    {cartOpen&&<><button className="cart-backdrop" onClick={()=>setCartOpen(false)} aria-label="Close cart"/><aside className="cart-drawer"><div className="cart-head"><div><small>YOUR QUOTE LIST</small><h2>{cartCount} {cartCount===1?"item":"items"}</h2></div><button onClick={()=>setCartOpen(false)}>×</button></div><div className="cart-list">{!cartItems.length?<div className="cart-empty"><b>Your quote list is empty</b><p>Add the products you need, then request one bulk quotation.</p><button onClick={()=>setCartOpen(false)}>Continue browsing</button></div>:cartItems.map(p=><div className="cart-row" key={p.name}><img src={p.image} alt=""/><div><strong>{p.name}</strong><small>Price on request</small><div className="qty"><button onClick={()=>setCart(v=>({...v,[p.name]:Math.max(0,p.qty-1)}))}>−</button><span>{p.qty}</span><button onClick={()=>setCart(v=>({...v,[p.name]:p.qty+1}))}>＋</button></div></div><b>Quote pending</b></div>)}</div>{cartItems.length>0&&<div className="cart-checkout"><div><span>Estimated total</span><b>Confirm on WhatsApp</b></div><p>Final price and stock will be confirmed on WhatsApp.</p><a href={checkout} target="_blank">Request wholesale quote →</a><button onClick={()=>setCart({})}>Clear quote list</button></div>}</aside></>}
  </main>;
}
