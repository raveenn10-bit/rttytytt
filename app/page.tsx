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
const wa = "94777543984";

export default function Home({ shopOnly = false }: { shopOnly?: boolean }) {
  const root = useRef<HTMLElement>(null);
  const [menu, setMenu] = useState(false), [category, setCategory] = useState("All"), [search, setSearch] = useState("");
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState<Record<string, number>>({});
  const filtered = useMemo(() => products.filter(p => (category === "All" || p.category === category) && p.name.toLowerCase().includes(search.toLowerCase())), [category, search]);
  const chat = (message: string) => `https://wa.me/${wa}?text=${encodeURIComponent(message)}`;
  const choose = (c:string) => { setCategory(c); document.getElementById("shop")?.scrollIntoView({behavior:"smooth"}); };
  const add = (name:string) => { setCart(v=>({...v,[name]:(v[name]||0)+1})); setCartOpen(true); };
  const cartItems = products.filter(p=>cart[p.name]).map(p=>({...p,qty:cart[p.name]}));
  const cartCount = Object.values(cart).reduce((a,b)=>a+b,0);
  const total = cartItems.reduce((a,p)=>a+p.price*p.qty,0);
  const checkout = chat(`Hi TONDEL, I would like to order:\n${cartItems.map(p=>`• ${p.name} x ${p.qty}`).join("\n")}\n\nPlease quote these items\nPlease confirm availability and final price.`);
  useEffect(()=>{
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let cleanup=()=>{};
    Promise.all([import("gsap"),import("gsap/ScrollTrigger")]).then(([g,s])=>{
      const gsap=g.gsap, ScrollTrigger=s.ScrollTrigger; gsap.registerPlugin(ScrollTrigger);
      const ctx=gsap.context(()=>{
        gsap.from(".hero-copy > *",{y:42,opacity:0,duration:.9,stagger:.1,ease:"power3.out"});
        gsap.from(".hero-visual",{x:70,opacity:0,scale:.94,duration:1.2,ease:"expo.out"});
        gsap.to(".orb",{y:-28,x:18,rotation:12,duration:3.2,repeat:-1,yoyo:true,ease:"sine.inOut"});
        gsap.to(".motion-progress",{scaleX:1,ease:"none",scrollTrigger:{trigger:"main",start:"top top",end:"bottom bottom",scrub:.2}});
        gsap.utils.toArray<HTMLElement>(".product").forEach((el,i)=>gsap.from(el,{y:55,opacity:0,duration:.65,delay:(i%3)*.06,ease:"power3.out",scrollTrigger:{trigger:el,start:"top 88%"}}));
        gsap.utils.toArray<HTMLElement>(".reveal").forEach(el=>gsap.from(el,{y:45,opacity:0,duration:.8,ease:"power3.out",scrollTrigger:{trigger:el,start:"top 85%"}}));
        gsap.utils.toArray<HTMLElement>(".story-step").forEach((step,i)=>ScrollTrigger.create({trigger:step,start:"top center",end:"bottom center",onEnter:()=>gsap.to(".story-device",{y:-i*18,rotation:i%2?3:-2,scale:1+i*.035,duration:.7,ease:"power3.out"}),onEnterBack:()=>gsap.to(".story-device",{y:-i*18,rotation:i%2?3:-2,scale:1+i*.035,duration:.7,ease:"power3.out"})}));
        gsap.to(".story-glow",{rotation:360,duration:16,repeat:-1,ease:"none"});
      },root);
      cleanup=()=>ctx.revert();
    });
    return ()=>cleanup();
  },[]);
  return <main ref={root} className={shopOnly ? "shop-page" : "home-page"}>
    <div className="motion-progress"/>
    <div className="topbar">Islandwide delivery across Sri Lanka <span>•</span> Easy WhatsApp ordering</div>
    <header>
      <a className="brand" href="#top"><img src="/tondel-logo.png" alt="TONDEL"/></a>
      <nav className={menu ? "open" : ""}>{[["Home","/"],["Shop","/shop"],["About","/about"],["Delivery & Warranty","/delivery"],["Contact","/contact"]].map(x=><a key={x[0]} href={x[1]} onClick={()=>setMenu(false)}>{x[0]}</a>)}</nav>
      <div className="header-actions"><button className="cart-trigger" onClick={()=>setCartOpen(true)}>Bag <b>{cartCount}</b></button><a className="whatsapp-small" href={chat("Hi TONDEL, I would like to know about your products.")} target="_blank">WhatsApp</a><button className="menu" onClick={()=>setMenu(!menu)} aria-label="Toggle menu">{menu ? "×" : "☰"}</button></div>
    </header>
    <section className="hero" id="top">
      <div className="hero-copy"><p className="eyebrow">SMART CHOICES. SMARTER LIVING.</p><h1>Tech you’ll love.<br/><em>Service you’ll trust.</em></h1><p className="lead">Discover smartphones, smart gadgets and everyday accessories—carefully selected for modern life in Sri Lanka.</p><div className="hero-buttons"><a className="primary" href="#shop">Explore products <span>→</span></a><a className="secondary" href={chat("Hi TONDEL, can you help me choose a product?")} target="_blank">Chat with us</a></div><div className="hero-trust"><div><b>Islandwide</b><span>Delivery</span></div><div><b>1 Month</b><span>Warranty*</span></div><div><b>Fast</b><span>WhatsApp support</span></div></div></div>
      <div className="hero-visual"><div className="orb"/><img src="https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=1000&q=90" alt="Premium smartphone"/><div className="float-card"><b>✦</b><div><strong>Fresh arrivals</strong><small>Ask for today’s stock</small></div></div></div>
    </section>
    <section className="category-strip" id="categories"><p>Shop by category</p><div>{categories.slice(1).map((c,i)=><button key={c} onClick={()=>choose(c)}><span>{"▯"}</span>{c}<b>→</b></button>)}</div></section>
    <section className="story" aria-label="TONDEL shopping experience">
      <div className="story-copy">
        <article className="story-step"><small>01 · DISCOVER</small><h2>Find tech that fits your life.</h2><p>Explore a curated range of smartphones, audio, wearables and everyday essentials.</p></article>
        <article className="story-step"><small>02 · CHOOSE</small><h2>Clear choices. Friendly guidance.</h2><p>Compare what you love, add it to your bag and ask us anything directly.</p></article>
        <article className="story-step"><small>03 · ORDER</small><h2>Checkout in one conversation.</h2><p>Your full cart opens in WhatsApp, ready for stock confirmation and islandwide delivery.</p></article>
      </div>
      <div className="story-stage"><div className="story-glow"/><div className="story-device"><img src="/tondel-logo.png" alt="TONDEL"/><span>SMART SHOPPING</span><div><b>Fast</b><small>WhatsApp checkout</small></div></div></div>
    </section>
    <section className="shop" id="shop">
      <div className="section-title"><div><p className="eyebrow">CURATED FOR YOU</p><h2>Explore 50 products</h2></div><label>⌕<input placeholder="Search products" value={search} onChange={e=>setSearch(e.target.value)}/></label></div>
      <div className="filters">{categories.map(c=><button className={category===c?"active":""} onClick={()=>setCategory(c)} key={c}>{c}</button>)}</div>
      {(shopOnly || category !== "All" || search ? ["Results"] : categories.slice(1)).map(group => { const groupItems = group === "Results" ? filtered : filtered.filter(p=>p.category===group); return <section className="catalog-group" key={group}><div className="group-heading"><h2>{group === "Results" ? "Products" : group}</h2><span>{groupItems.length} products</span></div><div className="product-grid">{groupItems.map(p=><article className="product" key={p.name}><div className="product-image"><span>{p.tag}</span><img src={p.image} alt={p.name} loading="lazy" onError={e=>{e.currentTarget.onerror=null;e.currentTarget.src="/tondel-logo.png";}}/></div><div className="product-info"><small>{p.category}</small><h3>{p.name}</h3><p className="price">Price on request</p><button className="add-cart" onClick={()=>add(p.name)}>Add to cart <b>＋</b></button><a className="quick-order" href={chat(`Hi TONDEL, I'm interested in ${p.name}. Please confirm price and availability.`)} target="_blank">Quick WhatsApp order ↗</a></div></article>)}</div></section>; })}
      {!filtered.length&&<div className="empty">No matching products. Message us and we’ll help you find it.</div>}
    </section>
    <section className="promo"><div><p className="eyebrow">NEED HELP CHOOSING?</p><h2>Tell us what you need.<br/>We’ll find the right tech.</h2><p>Send your budget and requirements through WhatsApp for a quick, friendly recommendation.</p><a className="primary light" href={chat("Hi TONDEL, I need help choosing a product. My budget is: ")} target="_blank">Get a recommendation →</a></div><div className="promo-art"><div className="ring"/><img src="/tondel-logo.png" alt="TONDEL logo"/></div></section>
    <section className="about" id="about"><div><p className="eyebrow">ABOUT TONDEL</p><h2>Technology made simple.</h2></div><div><p>TONDEL is your trusted destination for electronics, smart gadgets and accessories. We make shopping easy with direct WhatsApp assistance and islandwide delivery across Sri Lanka.</p><div className="mini-grid"><div><b>✓</b><span><strong>Easy ordering</strong>Personal support on WhatsApp</span></div><div><b>✓</b><span><strong>Islandwide reach</strong>Delivery across Sri Lanka</span></div></div></div></section>
    <section className="benefits" id="support"><div><span>⌁</span><h3>Islandwide Delivery</h3><p>Convenient delivery to locations across Sri Lanka.</p></div><div><span>◇</span><h3>1-Month Warranty</h3><p>Warranty support for eligible products. Confirm coverage before purchase.</p></div><div><span>◌</span><h3>WhatsApp Support</h3><p>Product advice and ordering help from a real person.</p></div></section>
    <footer><div className="footer-main"><div><img className="footer-logo" src="/tondel-logo.png" alt="TONDEL"/><p>Smartphones, electronics, gadgets and accessories—delivered islandwide.</p></div><div><h4>Quick links</h4><a href="#shop">Shop products</a><a href="#about">About TONDEL</a><a href="#support">Delivery & Warranty</a></div><div><h4>Contact</h4><a href="tel:+94777543984">077 754 3984</a><a href={chat("Hi TONDEL!")} target="_blank">Chat on WhatsApp</a><small>Address & email: to be updated</small></div></div><div className="footer-bottom"><span>© 2026 TONDEL. All rights reserved.</span><span>Smart Choices. Smarter Living.</span></div></footer>
    <a className="floating-wa" href={chat("Hi TONDEL, I would like to place an order.")} target="_blank">◔<span>Order on WhatsApp</span></a>
    {cartOpen&&<><button className="cart-backdrop" onClick={()=>setCartOpen(false)} aria-label="Close cart"/><aside className="cart-drawer"><div className="cart-head"><div><small>YOUR SHOPPING BAG</small><h2>{cartCount} {cartCount===1?"item":"items"}</h2></div><button onClick={()=>setCartOpen(false)}>×</button></div><div className="cart-list">{!cartItems.length?<div className="cart-empty"><b>Your bag is empty</b><p>Add something you love from our collection.</p><button onClick={()=>setCartOpen(false)}>Continue shopping</button></div>:cartItems.map(p=><div className="cart-row" key={p.name}><img src={p.image} alt=""/><div><strong>{p.name}</strong><small>Price on request</small><div className="qty"><button onClick={()=>setCart(v=>({...v,[p.name]:Math.max(0,p.qty-1)}))}>−</button><span>{p.qty}</span><button onClick={()=>setCart(v=>({...v,[p.name]:p.qty+1}))}>＋</button></div></div><b>Quote pending</b></div>)}</div>{cartItems.length>0&&<div className="cart-checkout"><div><span>Estimated total</span><b>Confirm on WhatsApp</b></div><p>Final price and stock will be confirmed on WhatsApp.</p><a href={checkout} target="_blank">Checkout on WhatsApp →</a><button onClick={()=>setCart({})}>Clear bag</button></div>}</aside></>}
  </main>;
}
