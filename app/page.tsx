"use client";
import { useEffect, useMemo, useRef, useState } from "react";

const products = [
  { name: "iPhone 15 Pro", category: "Smartphones", price: 329900, image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=900&q=85", tag: "Popular" },
  { name: "Samsung Galaxy S24", category: "Smartphones", price: 249900, image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=900&q=85", tag: "New" },
  { name: "Apple AirPods Pro", category: "Audio", price: 69900, image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=900&q=85", tag: "Best seller" },
  { name: "Smart Watch Series", category: "Wearables", price: 14900, image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=900&q=85", tag: "Trending" },
  { name: "Fast Charging Bundle", category: "Accessories", price: 5900, image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=900&q=85", tag: "Essential" },
  { name: "Portable Bluetooth Speaker", category: "Audio", price: 8900, image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=900&q=85", tag: "Hot deal" },
];
const categories = ["All", "Smartphones", "Audio", "Wearables", "Accessories"];
const wa = "94777543984";

export default function Home() {
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
  const checkout = chat(`Hi TONDEL, I would like to order:\n${cartItems.map(p=>`• ${p.name} x ${p.qty} — Rs. ${(p.price*p.qty).toLocaleString()}`).join("\n")}\n\nEstimated total: Rs. ${total.toLocaleString()}\nPlease confirm availability and final price.`);
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
  return <main ref={root}>
    <div className="motion-progress"/>
    <div className="topbar">Islandwide delivery across Sri Lanka <span>•</span> Easy WhatsApp ordering</div>
    <header>
      <a className="brand" href="#top"><img src="/tondel-logo.png" alt="TONDEL"/></a>
      <nav className={menu ? "open" : ""}>{[["Shop","shop"],["Categories","categories"],["About","about"],["Delivery & Warranty","support"]].map(x=><a key={x[0]} href={`#${x[1]}`} onClick={()=>setMenu(false)}>{x[0]}</a>)}</nav>
      <div className="header-actions"><button className="cart-trigger" onClick={()=>setCartOpen(true)}>Bag <b>{cartCount}</b></button><a className="whatsapp-small" href={chat("Hi TONDEL, I would like to know about your products.")} target="_blank">WhatsApp</a><button className="menu" onClick={()=>setMenu(!menu)} aria-label="Toggle menu">{menu ? "×" : "☰"}</button></div>
    </header>
    <section className="hero" id="top">
      <div className="hero-copy"><p className="eyebrow">SMART CHOICES. SMARTER LIVING.</p><h1>Tech you’ll love.<br/><em>Service you’ll trust.</em></h1><p className="lead">Discover smartphones, smart gadgets and everyday accessories—carefully selected for modern life in Sri Lanka.</p><div className="hero-buttons"><a className="primary" href="#shop">Explore products <span>→</span></a><a className="secondary" href={chat("Hi TONDEL, can you help me choose a product?")} target="_blank">Chat with us</a></div><div className="hero-trust"><div><b>Islandwide</b><span>Delivery</span></div><div><b>1 Month</b><span>Warranty*</span></div><div><b>Fast</b><span>WhatsApp support</span></div></div></div>
      <div className="hero-visual"><div className="orb"/><img src="https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=1000&q=90" alt="Premium smartphone"/><div className="float-card"><b>✦</b><div><strong>Fresh arrivals</strong><small>Ask for today’s stock</small></div></div></div>
    </section>
    <section className="category-strip" id="categories"><p>Shop by category</p><div>{categories.slice(1).map((c,i)=><button key={c} onClick={()=>choose(c)}><span>{["▯","♫","◉","⚡"][i]}</span>{c}<b>→</b></button>)}</div></section>
    <section className="story" aria-label="TONDEL shopping experience">
      <div className="story-copy">
        <article className="story-step"><small>01 · DISCOVER</small><h2>Find tech that fits your life.</h2><p>Explore a curated range of smartphones, audio, wearables and everyday essentials.</p></article>
        <article className="story-step"><small>02 · CHOOSE</small><h2>Clear choices. Friendly guidance.</h2><p>Compare what you love, add it to your bag and ask us anything directly.</p></article>
        <article className="story-step"><small>03 · ORDER</small><h2>Checkout in one conversation.</h2><p>Your full cart opens in WhatsApp, ready for stock confirmation and islandwide delivery.</p></article>
      </div>
      <div className="story-stage"><div className="story-glow"/><div className="story-device"><img src="/tondel-logo.png" alt="TONDEL"/><span>SMART SHOPPING</span><div><b>Fast</b><small>WhatsApp checkout</small></div></div></div>
    </section>
    <section className="shop" id="shop">
      <div className="section-title"><div><p className="eyebrow">CURATED FOR YOU</p><h2>Featured products</h2></div><label>⌕<input placeholder="Search products" value={search} onChange={e=>setSearch(e.target.value)}/></label></div>
      <div className="filters">{categories.map(c=><button className={category===c?"active":""} onClick={()=>setCategory(c)} key={c}>{c}</button>)}</div>
      <div className="product-grid">{filtered.map(p=><article className="product" key={p.name}><div className="product-image"><span>{p.tag}</span><img src={p.image} alt={p.name}/></div><div className="product-info"><small>{p.category}</small><h3>{p.name}</h3><p className="price">Rs. {p.price.toLocaleString()}</p><button className="add-cart" onClick={()=>add(p.name)}>Add to cart <b>＋</b></button><a className="quick-order" href={chat(`Hi TONDEL, I'm interested in ${p.name}. Please confirm price and availability.`)} target="_blank">Quick WhatsApp order ↗</a></div></article>)}</div>
      {!filtered.length&&<div className="empty">No matching products. Message us and we’ll help you find it.</div>}
    </section>
    <section className="promo"><div><p className="eyebrow">NEED HELP CHOOSING?</p><h2>Tell us what you need.<br/>We’ll find the right tech.</h2><p>Send your budget and requirements through WhatsApp for a quick, friendly recommendation.</p><a className="primary light" href={chat("Hi TONDEL, I need help choosing a product. My budget is: ")} target="_blank">Get a recommendation →</a></div><div className="promo-art"><div className="ring"/><img src="/tondel-logo.png" alt="TONDEL logo"/></div></section>
    <section className="about" id="about"><div><p className="eyebrow">ABOUT TONDEL</p><h2>Technology made simple.</h2></div><div><p>TONDEL is your trusted destination for electronics, smart gadgets and accessories. We make shopping easy with direct WhatsApp assistance and islandwide delivery across Sri Lanka.</p><div className="mini-grid"><div><b>✓</b><span><strong>Easy ordering</strong>Personal support on WhatsApp</span></div><div><b>✓</b><span><strong>Islandwide reach</strong>Delivery across Sri Lanka</span></div></div></div></section>
    <section className="benefits" id="support"><div><span>⌁</span><h3>Islandwide Delivery</h3><p>Convenient delivery to locations across Sri Lanka.</p></div><div><span>◇</span><h3>1-Month Warranty</h3><p>Warranty support for eligible products. Confirm coverage before purchase.</p></div><div><span>◌</span><h3>WhatsApp Support</h3><p>Product advice and ordering help from a real person.</p></div></section>
    <footer><div className="footer-main"><div><img className="footer-logo" src="/tondel-logo.png" alt="TONDEL"/><p>Smartphones, electronics, gadgets and accessories—delivered islandwide.</p></div><div><h4>Quick links</h4><a href="#shop">Shop products</a><a href="#about">About TONDEL</a><a href="#support">Delivery & Warranty</a></div><div><h4>Contact</h4><a href="tel:+94777543984">077 754 3984</a><a href={chat("Hi TONDEL!")} target="_blank">Chat on WhatsApp</a><small>Address & email: to be updated</small></div></div><div className="footer-bottom"><span>© 2026 TONDEL. All rights reserved.</span><span>Smart Choices. Smarter Living.</span></div></footer>
    <a className="floating-wa" href={chat("Hi TONDEL, I would like to place an order.")} target="_blank">◔<span>Order on WhatsApp</span></a>
    {cartOpen&&<><button className="cart-backdrop" onClick={()=>setCartOpen(false)} aria-label="Close cart"/><aside className="cart-drawer"><div className="cart-head"><div><small>YOUR SHOPPING BAG</small><h2>{cartCount} {cartCount===1?"item":"items"}</h2></div><button onClick={()=>setCartOpen(false)}>×</button></div><div className="cart-list">{!cartItems.length?<div className="cart-empty"><b>Your bag is empty</b><p>Add something you love from our collection.</p><button onClick={()=>setCartOpen(false)}>Continue shopping</button></div>:cartItems.map(p=><div className="cart-row" key={p.name}><img src={p.image} alt=""/><div><strong>{p.name}</strong><small>Rs. {p.price.toLocaleString()}</small><div className="qty"><button onClick={()=>setCart(v=>({...v,[p.name]:Math.max(0,p.qty-1)}))}>−</button><span>{p.qty}</span><button onClick={()=>setCart(v=>({...v,[p.name]:p.qty+1}))}>＋</button></div></div><b>Rs. {(p.price*p.qty).toLocaleString()}</b></div>)}</div>{cartItems.length>0&&<div className="cart-checkout"><div><span>Estimated total</span><b>Rs. {total.toLocaleString()}</b></div><p>Final price and stock will be confirmed on WhatsApp.</p><a href={checkout} target="_blank">Checkout on WhatsApp →</a><button onClick={()=>setCart({})}>Clear bag</button></div>}</aside></>}
  </main>;
}
