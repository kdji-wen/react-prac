import { useState, useEffect } from "react";
import logoFile from './transparentinnovateGC.png';

import ajunaImg from '../public/Ajuna-Headshot.jpeg';
import gemmaImg from '../public/Gemma-Sala.jpg';
import emilyImg from '../public/Emily-Kolbe.jpg';
import jeanneImg from '../public/Jeanne-Pinder.png';
import joeImg from '../public/Joe-Bagnoli.jpeg';
import robertImg from '../public/Robert_Gehorsam.jpg';
import betterverImg from '../public/betterver.jpg';

const C = {
  red: "#C0392B",
  dark: "#1A1A1A",
  gray: "#6B6B6B",
  lightGray: "#F5F5F3",
  white: "#FFFFFF",
  border: "#E8E6E1",
};

const G = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html, body, #root { width: 100%; min-height: 100vh; overflow-x: hidden; }
  body { background: ${C.white}; }
  button { cursor: pointer; font-family: Arial, sans-serif; }
  button:focus-visible { outline: 2px solid ${C.red}; outline-offset: 2px; }
  @media (max-width: 768px) {
    .dnav { display: none !important; }
    .hmb  { display: flex !important; }
  }
  @media (min-width: 769px) {
    .hmb { display: none !important; }
  }
`;

/* ── Logo ── */


function Logo({ size = 40 }) {
  const h = Math.round(size * 2); 
  const w = Math.round(size * 5);

  return (
    <img 
      src={logoFile} 
      alt="InnovateGC logo" 
      width={w} 
      height={h}
      style={{ objectFit: 'contain' }}
    />
  );
}

/* ── Nav ── */
function Nav({ page, setPage }) {
  const [open, setOpen] = useState(false);
  const links = [
    ["home","Challenge"],["qa","Q & A"],["rules","Rules"],
    ["register","Register"],["schedule","Schedule"],
    ["people","Speakers & Judges"],["past","Past Events"],
  ];
  return (
    <nav style={{ position:"sticky", top:0, zIndex:200, width:"100%", background:C.white, borderBottom:`2px solid ${C.dark}` }}>
      <div style={{ width:"100%", maxWidth:1400, margin:"0 auto", padding:"0 20px", height:90, display:"flex", alignItems:"center", justifyContent:"space-between" }}>
        <button onClick={()=>setPage("home")} style={{ background:"none", border:"none", padding:0, lineHeight:0 }}>
          <Logo size={60} />
        </button>
        {/* desktop links */}
        <div className="dnav" style={{ display:"flex", gap:2, flexWrap:"nowrap", alignItems:"center" }}>
          {links.map(([id,lbl])=>(
            <button key={id} onClick={()=>setPage(id)} style={{
              background: page===id ? C.dark : "transparent",
              color: page===id ? C.white : C.dark,
              border:"none", padding:"10px 18px", borderRadius:6,
              fontSize:18, fontWeight: page===id ? 700 : 400,
              whiteSpace:"nowrap", transition:"background .15s,color .15s",
            }}>{lbl}</button>
          ))}
        </div>
        {/* hamburger */}
        <button className="hmb" onClick={()=>setOpen(o=>!o)}
          style={{ background:"none", border:`1.5px solid ${C.dark}`, padding:"6px 10px", borderRadius:4, fontSize:18, lineHeight:1, display:"none", alignItems:"center" }}>
          {open ? "✕" : "☰"}
        </button>
      </div>
      {open && (
        <div style={{ background:C.white, borderTop:`1px solid ${C.border}`, padding:"8px 20px 16px" }}>
          {links.map(([id,lbl])=>(
            <button key={id} onClick={()=>{ setPage(id); setOpen(false); }} style={{
              display:"block", width:"100%", textAlign:"left", background:"none", border:"none",
              padding:"11px 0", fontSize:15, color: page===id ? C.red : C.dark,
              fontWeight: page===id ? 700 : 400, borderBottom:`1px solid ${C.border}`,
            }}>{lbl}</button>
          ))}
        </div>
      )}
    </nav>
  );
}

/* ── SDG Badge ── */
function SDGBadge({ num, label, color }) {
  return (
    <div style={{ 
      background: color, 
      color: "#fff", 
      borderRadius: 6, 
      padding: "10px 18px",       
      display: "inline-flex", 
      alignItems: "center", 
      gap: 10,
      fontFamily: "Arial, sans-serif" 
    }}>
      {/* This controls the size of the number */}
      <span style={{ fontSize: 20, fontWeight: 900 }}>{num}</span>
      
      {/* This controls the size of the text label */}
      <span style={{ fontSize: 14, fontWeight: 500, opacity: .95 }}>{label}</span>
    </div>
  );
}

/* ══════════════════════════════════════════
   HOME
══════════════════════════════════════════ */
function HomePage({ setPage }) {
  const sdgs = [
    {num:1,label:"No Poverty",color:"#E5243B"},{num:2,label:"Zero Hunger",color:"#DDA63A"},
    {num:3,label:"Good Health",color:"#4C9F38"},{num:4,label:"Quality Education",color:"#C5192D"},
    {num:5,label:"Gender Equality",color:"#FF3A21"},{num:6,label:"Clean Water",color:"#26BDE2"},
    {num:7,label:"Clean Energy",color:"#FCC30B"},{num:8,label:"Decent Work",color:"#A21942"},
    {num:9,label:"Innovation",color:"#FD6925"},{num:10,label:"Reduced Inequalities",color:"#DD1367"},
    {num:11,label:"Sustainable Cities",color:"#FD9D24"},{num:12,label:"Responsible Consumption",color:"#BF8B2E"},
    {num:13,label:"Climate Action",color:"#3F7E44"},{num:14,label:"Life Below Water",color:"#0A97D9"},
    {num:15,label:"Life on Land",color:"#56C02B"},{num:16,label:"Peace & Justice",color:"#00689D"},
    {num:17,label:"Partnerships",color:"#19486A"},
  ];
  const steps = [
    {n:"01",t:"Form Your Team",d:"Assemble 3–5 people who want to change the world. Diverse skills welcome — no experience required."},
    {n:"02",t:"Pick a UNSDG",d:"Choose two of the UN's 17 Sustainable Development Goals as the foundation of your idea."},
    {n:"03",t:"Build Your Idea",d:"Over five days, develop a viable concept — product, service, or initiative — guided by mentors."},
    {n:"04",t:"Pitch It",d:"Present to a panel of judges on the final day: 10 minutes to pitch, 5 minutes Q&A."},
  ];

  return (
    <div style={{ width:"100%", fontFamily:"Arial,sans-serif" }}>

      {/* ── Hero ── */}
<section style={{ 
  width: "100%", 
  background: C.dark, 
  color: C.white, 
  position: "relative", 
  overflow: "hidden",
  margin: 0,
  padding: 0
}}>
  
  {/* Decorative background circle */}
  <div style={{ position: "absolute", right: "-80px", top: "-60px", width: 320, height: 320,
    background: C.red, opacity: .07, borderRadius: "50%", pointerEvents: "none" }} />
    
  {/* Main content wrapper with forced layout blocks */}
  <div style={{ 
    maxWidth: 1280, 
    margin: "0 auto", 
    padding: "160px 24px",
    display: "flex", 
    flexDirection: "column", 
    alignItems: "center", 
    justifyContent: "center",
    textAlign: "center",
    boxSizing: "border-box"
  }}>
    <div style={{ 
      background: C.red, 
      color: C.white,
      fontSize: 11, 
      fontWeight: 700, 
      letterSpacing: "0.12em", 
      textTransform: "uppercase",
      padding: "6px 16px", 
      borderRadius: 3, 
      marginBottom: 28,
      width: "fit-content" 
    }}>
      Wilson Center · Grinnell College
    </div>
    
    <h1 style={{ 
      fontSize: "clamp(48px, 7vw, 80px)", 
      fontWeight: 900, 
      lineHeight: 1.1,
      letterSpacing: "-2px", 
      color: C.white, 
      margin: "0 0 20px" 
    }}>
      Innovate<span style={{ color: C.red }}>GC</span>
    </h1>
    
    <h2 style={{ 
      fontSize: "clamp(20px, 2.5vw, 28px)", 
      fontWeight: 300, 
      margin: "0 0 36px",
      color: "rgba(255,255,255,.72)", 
      letterSpacing: ".02em" 
    }}>
      5-Day Pitch Competition · April 7–11, 2026
    </h2>
    
    <p style={{ 
      fontSize: 19, 
      lineHeight: 1.8, 
      color: "rgba(255,255,255,.8)",
      maxWidth: 680, 
      margin: "0 auto 48px" 
    }}>
      Form a team. Pick a cause. Build something that matters. InnovateGC challenges Grinnell
      students to create real solutions around the UN's Sustainable Development Goals — in just five days.
    </p>
    
    <div style={{ 
      display: "flex", 
      gap: 16, 
      flexWrap: "wrap", 
      justifyContent: "center",
      width: "100%" 
    }}>
      <button onClick={() => setPage("register")} style={{
        background: C.red, color: C.white, border: "none",
        padding: "18px 40px", fontSize: 16, fontWeight: 700, borderRadius: 4,
        letterSpacing: ".04em", textTransform: "uppercase" 
      }}>
        Register Your Team
      </button>
      <button onClick={() => setPage("qa")} style={{
        background: "transparent", color: C.white,
        border: "1.5px solid rgba(255,255,255,.35)",
        padding: "18px 40px", fontSize: 16, borderRadius: 4
      }}>
        Learn More
      </button>
    </div>
  </div>
      </section>

      {/* ── Stats bar ── */}
      <section style={{ width:"100%", background:C.red }}>
        <div style={{ maxWidth:960, margin:"0 auto", padding:"22px 24px",
          display:"flex", justifyContent:"space-around", flexWrap:"wrap", gap:8 }}>
          {[["5","Days of Competition"],["3–5","People Per Team"],["2","SDGs Per Concept"],["17","Goals to Choose From"]].map(([n,l],i)=>(
            <div key={i} style={{ textAlign:"center", padding:"6px 20px" }}>
              <div style={{ fontSize:49, fontWeight:900, color:C.white, letterSpacing:"-1px", lineHeight:1 }}>{n}</div>
              <div style={{ fontSize:13, color:"rgba(255,255,255,.82)", textTransform:"uppercase", letterSpacing:".08em", marginTop:4 }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── How it works ── */}
      <section style={{ width:"100%", background:C.white }}>
        <div style={{ maxWidth:960, margin:"0 auto", padding:"72px 24px" }}>
          <div style={{ display:"flex", alignItems:"center", gap:14, marginBottom:44 }}>
            <div style={{ width:40, height:3, background:C.red, flexShrink:0 }} />
            <span style={{ fontSize:23, fontWeight:700, letterSpacing:".12em", textTransform:"uppercase", color:C.red }}>How It Works</span>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))", gap:0 }}>
            {steps.map((s,i)=>(
              <div key={i} style={{
                padding:"28px 30px",
                borderLeft: i===0 ? `5px solid ${C.red}` : `1px solid ${C.border}`,
                borderTop: `3px solid ${i===0 ? C.red : "transparent"}`,
              }}>
                <div style={{ fontSize:55, fontWeight:900, color:C.border, lineHeight:1, marginBottom:14, letterSpacing:"-2px" }}>{s.n}</div>
                <div style={{ fontSize:12, fontWeight:700, color:C.dark, marginBottom:8 }}>{s.t}</div>
                <div style={{ fontSize:19, lineHeight:1.75, color:C.gray }}>{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SDGs ── */}
      <section style={{ width:"100%", background:C.lightGray }}>
        <div style={{ maxWidth:960, margin:"0 auto", padding:"100px 50px" }}>
          <div style={{ display:"flex", alignItems:"center", gap:14, marginBottom:12 }}>
            <div style={{ width:80, height:6, background:C.red, flexShrink:0 }} />
            <span style={{ fontSize:25, fontWeight:700, letterSpacing:".12em", textTransform:"uppercase", color:C.red }}>The 17 SDGs</span>
          </div>
          <p style={{ fontSize:20, color:C.gray, marginBottom:32, maxWidth:600, lineHeight:1.7 }}>
            Every team builds around two of the United Nations' Sustainable Development Goals — the world's blueprint for a better future.
          </p>
          <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
            {sdgs.map(s=><SDGBadge key={s.num} {...s} />)}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ width:"100%", background:C.dark }}>
        <div style={{ maxWidth:680, margin:"0 auto", padding:"200px 24px", textAlign:"center" }}>
          <h2 style={{ fontSize:"clamp(60px,6vw,40px)", fontWeight:900, color:C.white,
            margin:"0 0 32px", letterSpacing:"-1px" }}>
            Ready to build something that matters?
          </h2>
          <p style={{ fontSize:22, color:"rgba(255,255,255,.65)", marginBottom:36, lineHeight:1.75 }}>
            Registration opens before April 7, 2026. Sign up for updates or check in at the kick-off event.
          </p>
          <button onClick={()=>setPage("register")} style={{
            background:C.red, color:C.white, border:"none",
            padding:"24px 60px", fontSize:20, fontWeight:700,
            borderRadius:4, letterSpacing:".04em", textTransform:"uppercase" }}>
            Interest Form / Sign-In
          </button>
        </div>
      </section>
    </div>
  );
}

/* ══════════════════════════════════════════
   Q & A
══════════════════════════════════════════ */
function QAPage() {
  const items = [
    {q:"What is InnovateGC?",a:"InnovateGC is a 5-day pitch competition hosted by the Wilson Center at Grinnell College. Students form teams of 3–5 people and develop a business idea or initiative centered around two of the UN's 17 Sustainable Development Goals."},
    {q:"Who can participate?",a:"All currently enrolled Grinnell College students are eligible to participate, regardless of major, year, or prior business/entrepreneurship experience."},
    {q:"How large can a team be?",a:"Teams must consist of 3 to 5 members. Solo entries and teams of 1–2 or 6+ will not be eligible to compete."},
    {q:"Do I need a business background?",a:"Not at all! InnovateGC is open to everyone. Mentors and coaches will be available throughout the week to help teams develop their ideas regardless of background."},
    {q:"How are the Sustainable Development Goals used?",a:"Each team must choose exactly two of the UN's 17 Sustainable Development Goals as the thematic foundation of their idea. Your pitch should demonstrate how your concept addresses both goals."},
    {q:"What does the schedule look like?",a:"The competition runs April 7–11, 2026. The first day is the kick-off where teams form. The following days involve workshops, mentoring, and team work time. The final day (April 11) is Pitch Day."},
    {q:"How does the final pitch work?",a:"On the last day, each team receives 10 minutes to present their pitch to the panel of judges, followed by 5 minutes of Q&A from the judges. All team members are encouraged to participate."},
    {q:"What are teams judged on?",a:"Judging criteria include problem clarity, alignment with the chosen SDGs, feasibility of the solution, creativity, team presentation, and overall impact potential."},
    {q:"Are there prizes?",a:"Yes! Details about prizes and awards will be announced closer to the event. Sign up for updates via the interest form or check the schedule page."},
    {q:"Where does the competition take place?",a:"Events are held at the Wilson Center and other campus locations at Grinnell College. Specific room assignments will be posted on the schedule page."},
    {q:"Is there a registration fee?",a:"No — participation in InnovateGC is free for all Grinnell students."},
    {q:"How do I find teammates?",a:"At the kick-off event on April 7, there will be a structured team-formation session. You're also welcome to come with a pre-formed team of 3–5 people."},
    {q:"Can I be on more than one team?",a:"No. Each student may only be a member of one competing team."},
    {q:"What support is available during the competition?",a:"Mentors, coaches, and speakers from Grinnell and the broader professional community will be available for office hours and workshops throughout the week."},
    {q:"Who do I contact with more questions?",a:"Reach out to the Wilson Center at Grinnell College. You can also use the interest/sign-in form to receive updates."},
  ];
  const [open, setOpen] = useState(null);
  return (
    <div style={{ width:"100%", fontFamily:"Arial,sans-serif" }}>
      <div style={{ maxWidth:1000, margin:"0 auto", padding:"64px 24px" }}>
        <div style={{ display:"flex", alignItems:"center", gap:20, marginBottom:8 }}> 
          <div style={{ width:7, height:80, background:C.red, borderRadius:2, flexShrink:0 }} />
          <h1 style={{ fontSize:75, fontWeight:900, letterSpacing:"-1px", color:C.dark }}>Q & A</h1>
        </div>
        <p style={{ fontSize:20, color:C.gray, marginBottom:30, paddingLeft:19 }}>Everything you need to know about InnovateGC.</p>
        {items.map((item,i)=>(
          <div key={i} style={{ borderTop:`1px solid ${C.border}`, ...(i===items.length-1?{borderBottom:`1px solid ${C.border}`}:{}) }}>
            <button onClick={()=>setOpen(open===i?null:i)} style={{
              width:"100%", textAlign:"left", background:"none", border:"none",
              padding:"20px 0", display:"flex", justifyContent:"space-between", alignItems:"center", gap:16 }}>
              <span style={{ fontSize:22, fontWeight:700, color:C.dark, lineHeight:1.4 }}>{item.q}</span>
              <span style={{ fontSize:16, color: open===i ? C.red : C.gray, flexShrink:0, lineHeight:1,
                transform: open===i ? "rotate(45deg)" : "none", transition:"transform .2s,color .2s" }}>+</span>
            </button>
            {open===i && (
              <div style={{ paddingBottom:20, paddingRight:32 }}>
                <p style={{ fontSize:20, lineHeight:1.8, color:C.gray, margin:0 }}>{item.a}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════
   RULES
══════════════════════════════════════════ */
function RulesPage() {
  const sections = [
    {t:"Eligibility",r:["All participants must be currently enrolled Grinnell College students.","Teams must consist of between 3 and 5 members.","Each student may only be a member of one competing team.","Faculty, staff, and non-Grinnell individuals may serve as mentors or coaches but may not compete."]},
    {t:"Team Formation",r:["Teams may be pre-formed before the kick-off event or formed during the team formation session on April 7.","All team members must be registered before the end of the kick-off event.","Teams may not add or remove members after the kick-off event without organizer approval."]},
    {t:"Idea & SDG Requirements",r:["Each team must base their concept around exactly two of the UN's 17 Sustainable Development Goals.","The pitch must clearly articulate how the concept addresses both selected goals.","Ideas must be original and developed during the competition period (April 7–11, 2026).","Pre-existing businesses, class projects, or previously pitched ideas are not eligible."]},
    {t:"Conduct",r:["All participants must adhere to Grinnell College's student code of conduct throughout the event.","Respectful behavior toward fellow participants, mentors, judges, and organizers is required at all times.","Any form of plagiarism, misrepresentation, or academic dishonesty will result in immediate disqualification."]},
    {t:"Pitch Day",r:["Each team has exactly 10 minutes to present their pitch on April 11.","A 5-minute Q&A session with the judges follows each presentation.","All team members must be present for the pitch.","Presentation materials must be submitted to organizers by 8:00 AM on April 11.","Teams that do not present will be disqualified."]},
    {t:"Judging & Awards",r:["Judging decisions are final.","Teams will be evaluated on problem clarity, SDG alignment, feasibility, creativity, presentation quality, and impact potential.","Awards and prizes will be announced at the closing ceremony on April 11.","Ties in judging scores are possible; tied teams may share placement and prizes."]},
  ];
  return (
    <div style={{ width:"100%", fontFamily:"Arial,sans-serif" }}>
      <div style={{ maxWidth:1000, margin:"0 auto", padding:"64px 24px" }}>
        <div style={{ display:"flex", alignItems:"center", gap:14, marginBottom:8 }}>
          <div style={{ width:5, height:75, background:C.red, borderRadius:2, flexShrink:0 }} />
          <h1 style={{ fontSize:75, fontWeight:900, letterSpacing:"-1px", color:C.dark }}>Competition Rules</h1>
        </div>
        <p style={{ fontSize:18, color:C.gray, marginBottom:48, paddingLeft:19 }}>Please read all rules carefully before registering your team.</p>
        <div style={{ display:"flex", flexDirection:"column", gap:40 }}>
          {sections.map((sec,i)=>(
            <div key={i}>
              <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:16 }}>
                <div style={{ width:48, height:48, background:C.red, color:C.white, borderRadius:3,
                  display:"flex", alignItems:"center", justifyContent:"center", fontSize:20, fontWeight:900, flexShrink:0 }}>
                  {String(i+1).padStart(2,"0")}
                </div>
                <h2 style={{ fontSize:36, fontWeight:700, color:C.dark }}>{sec.t}</h2>
              </div>
              <ul style={{ margin:0, padding:0, listStyle:"none", paddingLeft:16 }}>
                {sec.r.map((r,j)=>(
                  <li key={j} style={{ display:"flex", gap:10, alignItems:"flex-start", marginBottom:8 }}>
                    <span style={{ color:C.red, fontWeight:900, flexShrink:0, marginTop:2 }}>—</span>
                    <span style={{ fontSize:17, lineHeight:1.75, color:C.gray }}>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ marginTop:52, padding:"22px 26px", background:C.lightGray,
          borderLeft:`4px solid ${C.red}`, borderRadius:"0 6px 6px 0" }}>
          <p style={{ fontSize:14, color:C.gray, lineHeight:1.7 }}>
            <strong style={{ color:C.dark }}>Questions about the rules?</strong> Reach out to the Wilson Center or consult the Q&A page. Organizers reserve the right to amend rules with notice to all registered participants.
          </p>
        </div>
      </div>
    </div>
  );
}

/* ═════════════════════════════════════════
   REGISTER
══════════════════════════════════════════ */
function RegisterPage() {
  return (
    <div style={{ width:"100%", fontFamily:"Arial,sans-serif" }}>
      <div style={{ maxWidth:960, margin:"0 auto", padding:"120px 24px", textAlign:"center" }}>
        {/* 1. Top emoji replaced with an img tag. Fill in your image path or URL in the src="" attribute */}
        <img src="/betterver.jpg" style={{ width:96, height:96, borderRadius:"50%", objectFit:"cover", display:"block", margin:"0 auto 36px" }} />
        
        <h1 style={{ fontSize:"clamp(36px, 5vw, 52px)", fontWeight:900, letterSpacing:"-2px", color:C.dark, marginBottom:18 }}>Registration</h1>
        <p style={{ fontSize:18, lineHeight:1.8, color:C.gray, maxWidth:640, margin:"0 auto 56px" }}>
          Registration for InnovateGC 2026 will open during the week of the competition (April 7–11, 2026).
          In the meantime, sign up below to receive updates or check in at the kick-off event on April 7.
        </p>
        <div style={{ background:C.lightGray, borderRadius:12, padding:"56px 48px", marginBottom:48, border:`1px solid ${C.border}` }}>
          <div style={{ display:"inline-block", background:C.red, color:C.white, fontSize:12, fontWeight:700,
            letterSpacing:".12em", textTransform:"uppercase", padding:"6px 16px", borderRadius:4, marginBottom:22 }}>
            Coming Soon
          </div>
          <h2 style={{ fontSize:26, fontWeight:700, color:C.dark, marginBottom:14 }}>Interest Form / Sign-In Form</h2>
          <p style={{ fontSize:16, color:C.gray, marginBottom:32, lineHeight:1.7, maxWidth:580, margin:"0 auto 32px" }}>
            Sign up to get updates about InnovateGC 2026, or use this form to sign in at the kick-off event on April 7.
          </p>
          <button disabled style={{ background:C.dark, color:C.white, border:"none", padding:"18px 40px",
            fontSize:15, fontWeight:700, borderRadius:6, opacity:.45,
            letterSpacing:".06em", textTransform:"uppercase" }}>
            Form Not Yet Available
          </button>
        </div>
        {/* 2. Bottom four grid items updated to remove emojis entirely */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))", gap:20 }}>
          {[["Kick-Off","April 7, 2026"],["Pitch Day","April 11, 2026"],["Team Size","3–5 Students"],["Entry Fee","Free"]].map(([lbl,val],i)=>(
            <div key={i} style={{ background:C.white, border:`1px solid ${C.border}`,
              borderRadius:10, padding:"36px 18px", textAlign:"center" }}>
              <div style={{ fontSize:12, color:C.gray, textTransform:"uppercase", letterSpacing:".1em", marginBottom:6 }}>{lbl}</div>
              <div style={{ fontSize:18, fontWeight:700, color:C.dark }}>{val}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════
   SCHEDULE
══════════════════════════════════════════ */
function SchedulePage() {
  const [active, setActive] = useState(0);
  const days = [
    { day:"Day 1", date:"Tuesday, April 7", label:"Kick-Off", color:C.red,
      events:[
        {t:"4:00 PM",n:"Welcome & Opening Remarks",d:"Wilson Center staff open the competition and explain the week's schedule."},
        {t:"4:30 PM",n:"SDG Overview Presentation",d:"A walkthrough of all 17 UN Sustainable Development Goals to inspire team ideas."},
        {t:"5:00 PM",n:"Team Formation Session",d:"Participants without pre-formed teams connect and form groups of 3–5."},
        {t:"5:45 PM",n:"Registration Deadline",d:"All team members must be registered by end of kick-off."},
        {t:"6:00 PM",n:"Networking & Refreshments",d:"Meet mentors, coaches, and fellow competitors."},
      ]},
    { day:"Day 2", date:"Wednesday, April 8", label:"Ideation", color:"#E67E22",
      events:[
        {t:"12:00 PM",n:"Ideation Workshop",d:"Structured design-thinking session to refine your concept and SDG alignment."},
        {t:"2:00 PM",n:"Mentor Office Hours — Round 1",d:"One-on-one time with mentors to get early feedback on your idea."},
        {t:"5:00 PM",n:"Team Work Time",d:"Open workspace in the Wilson Center for team collaboration."},
      ]},
    { day:"Day 3", date:"Thursday, April 9", label:"Build", color:"#27AE60",
      events:[
        {t:"11:00 AM",n:"Keynote Speaker Session",d:"Hear from an entrepreneur or leader working on sustainable impact."},
        {t:"1:00 PM",n:"Business Model Canvas Workshop",d:"Learn how to structure your idea into a compelling business model."},
        {t:"3:00 PM",n:"Mentor Office Hours — Round 2",d:"Second round of mentor check-ins for deeper feedback."},
        {t:"5:00 PM",n:"Team Work Time",d:"Continue building your pitch and presentation materials."},
      ]},
    { day:"Day 4", date:"Friday, April 10", label:"Refine", color:"#2980B9",
      events:[
        {t:"10:00 AM",n:"Pitch Practice Workshop",d:"Tips on storytelling, slide design, and public speaking for pitch competitions."},
        {t:"12:00 PM",n:"Mock Pitches",d:"Optional dry-run presentations to get feedback before the final day."},
        {t:"2:00 PM",n:"Final Mentor Check-In",d:"Last opportunity to refine your concept with mentor guidance."},
        {t:"8:00 PM",n:"Slide Submission Deadline",d:"All presentation materials must be submitted to organizers by this time."},
      ]},
    { day:"Day 5", date:"Saturday, April 11", label:"Pitch Day", color:C.red,
      events:[
        {t:"8:00 AM",n:"Check-In & Setup",d:"Teams arrive, confirm registration, and prepare their presentation space."},
        {t:"9:00 AM",n:"Pitches Begin",d:"Each team: 10 minutes to pitch, 5 minutes Q&A with judges. Order by draw."},
        {t:"12:00 PM",n:"Judges' Deliberation",d:"Judges review scores while teams enjoy lunch."},
        {t:"1:30 PM",n:"Awards Ceremony & Closing",d:"Winners announced, prizes awarded, and closing remarks from Wilson Center leadership."},
      ]},
];
  const d = days[active];
  return (
    <div style={{ width:"100%", fontFamily:"Arial,sans-serif" }}>
      <div style={{ maxWidth:1200, margin:"0 auto", padding:"120px 24px" }}>
        <div style={{ display:"flex", alignItems:"center", gap:20, marginBottom:12 }}>
          <div style={{ width:8, height:58, background:C.red, borderRadius:3, flexShrink:0 }} />
          <h1 style={{ fontSize:54, fontWeight:900, letterSpacing:"-2px", color:C.dark }}>Schedule</h1>
        </div>
        <p style={{ fontSize:20, color:C.gray, marginBottom:56, paddingLeft:28 }}>April 7–11, 2026 · Grinnell College</p>
        <div style={{ display:"flex", gap:16, marginBottom:56, flexWrap:"wrap" }}>
          {days.map((day,i)=>(
            <button key={i} onClick={()=>setActive(i)} style={{
              padding:"18px 32px", borderRadius:8,
              border:`2px solid ${active===i ? day.color : C.border}`,
              background: active===i ? day.color : C.white,
              color: active===i ? C.white : C.dark,
              fontWeight:800, fontSize:18, lineHeight:1.4,
              transition:"all .15s", cursor:"pointer"
            }}>
              {day.day}<br/><span style={{ fontSize:14, fontWeight:400, opacity: active===i ? .9 : .7 }}>{day.label}</span>
            </button>
          ))}
        </div>
        <div style={{ display:"flex", alignItems:"center", gap:20, marginBottom:40, flexWrap:"wrap" }}>
          <div style={{ background:d.color, color:C.white, padding:"10px 22px", borderRadius:6,
            fontSize:15, fontWeight:700, letterSpacing:".12em", textTransform:"uppercase" }}>{d.label}</div>
          <span style={{ fontSize:24, fontWeight:700, color:C.dark }}>{d.date}</span>
        </div>
        {d.events.map((e,i)=>(
          <div key={i} style={{ display:"grid", gridTemplateColumns:"160px 1fr", gap:40,
            padding:"36px 0", borderTop:`2px solid ${C.border}`, alignItems:"start" }}>
            <div style={{ fontSize:18, fontWeight:800, color:d.color, paddingTop:4, lineHeight:1.4 }}>{e.t}</div>
            <div>
              <div style={{ fontSize:22, fontWeight:700, color:C.dark, marginBottom:8 }}>{e.n}</div>
              <div style={{ fontSize:18, lineHeight:1.7, color:C.gray }}>{e.d}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════
   PEOPLE
══════════════════════════════════════════ */
function PeoplePage() {
  const [tab, setTab] = useState("speakers");
  const speakers = [
    {name:"Ajuna Kyaruzi",year:"Grinnell '17",role:"Keynote Speaker",img:"/Ajuna-Headshot.jpeg",color:C.red,
      desc:"Ajuna Kyaruzi leads the SRE & Platform Advocacy team at Datadog, where she focuses on reliability engineering and large-scale systems. A former engineer at Google, she is also a strong advocate for mentorship and expanding access to technology careers."},
  ];
  const mentors = [
    {name:"Gemma Sala",year:null,role:"Mentor & Coach",img:"/Gemma-Sala.jpg",color:"#27AE60",
      desc:"Gemma Sala is an Associate Professor of Political Science at Grinnell College with expertise in European politics, peace studies, and global engagement. She brings an academic perspective on international affairs, conflict resolution, and cross-cultural understanding."},
    {name:"Emily Kolbe",year:"Grinnell '07",role:"Mentor & Coach",img:"/Emily-Kolbe.jpg",color:"#E67E22",
      desc:"Emily Kolbe is a shareholder at Ahlers & Cooney, P.C. specializing in public finance and education law. Her background includes litigation, bond counsel work, and judicial clerkship experience, giving her deep expertise in legal and regulatory compliance."},
    {name:"Jeanne Pinder",year:"Grinnell '75",role:"Mentor & Coach",img:"/Jeanne-Pinder.png",color:"#C0392B",
      desc:"Jeanne Pinder is the founder and CEO of ClearHealthCosts, a journalism organization focused on healthcare price transparency. After nearly 25 years at The New York Times, she launched a venture that has influenced healthcare policy and consumer protection efforts across multiple states."},
  ];
  const judges = [
    {name:"Joe Bagnoli",year:null,role:"Judge",img:"/Joe-Bagnoli.jpeg",color:"#1A5276",
      desc:"Joe Bagnoli serves as Vice President for Enrollment and Dean of Admission and Financial Aid at Grinnell College. He is known for his commitment to ethical admissions practices, educational access, and diversity initiatives."},
    {name:"Robert Gehorsam",year:"Grinnell '76",role:"Judge",img:"/Robert_Gehorsam.jpg",color:"#117A65",
      desc:"Robert Gehorsam is an entrepreneur, advisor, and climate-sector leader with experience spanning startups, nonprofits, and government consulting. His work focuses on innovation, sustainability, venture development, and the intersection of technology and social impact."},
    {name:"Ajuna Kyaruzi",year:"Grinnell '17",role:"Judge",img:"/Ajuna-Headshot.jpeg",color:"#7D3C98",
      desc:"Ajuna Kyaruzi leads the SRE & Platform Advocacy team at Datadog, where she focuses on reliability engineering and large-scale systems. A former engineer at Google, she is also a strong advocate for mentorship and expanding access to technology careers."},
  ];
  const groups = { speakers:{label:"2026 Speakers",data:speakers}, mentors:{label:"Mentors & Coaches",data:mentors}, judges:{label:"Judges",data:judges} };
  return (
    <div style={{ width:"100%", fontFamily:"Arial,sans-serif" }}>
      <div style={{ maxWidth:1200, margin:"0 auto", padding:"120px 24px" }}>
        <div style={{ display:"flex", alignItems:"center", gap:20, marginBottom:12 }}>
          <div style={{ width:8, height:58, background:C.red, borderRadius:3, flexShrink:0 }} />
          <h1 style={{ fontSize:54, fontWeight:900, letterSpacing:"-2px", color:C.dark }}>Speakers, Mentors & Judges</h1>
        </div>
        <p style={{ fontSize:20, color:C.gray, marginBottom:56, paddingLeft:28 }}>Meet the people guiding and evaluating InnovateGC 2026.</p>
        <div style={{ display:"flex", gap:0, borderBottom:`3px solid ${C.border}`, marginBottom:56, overflowX:"auto" }}>
          {Object.entries(groups).map(([key,g])=>(
            <button key={key} onClick={()=>setTab(key)} style={{
              background:"none", border:"none", padding:"18px 32px",
              fontSize:18, fontWeight:800, whiteSpace:"nowrap",
              color: tab===key ? C.red : C.gray,
              borderBottom: tab===key ? `3px solid ${C.red}` : "3px solid transparent",
              marginBottom:-3, transition:"color .15s", cursor:"pointer"
            }}>{g.label}</button>
          ))}
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(340px,1fr))", gap:28 }}>
          {groups[tab].data.map((p,i)=>(
            <div key={i} style={{ background:C.white, border:`2px solid ${C.border}`, borderRadius:12, padding:"36px 32px" }}>
              <div style={{ display:"flex", alignItems:"center", gap:20, marginBottom:20 }}>
                <img src={p.img || undefined} alt={p.img ? p.name : ""} style={{ width:72, height:72, borderRadius:"50%", background:p.color, objectFit:"cover", objectPosition:"center", flexShrink:0 }} />
                <div>
                  <div style={{ fontSize:22, fontWeight:700, color:C.dark }}>{p.name}</div>
                  {p.year && <div style={{ fontSize:14, color:C.gray, marginTop:3 }}>{p.year}</div>}
                  <div style={{ display:"inline-block", marginTop:6, background:C.lightGray, color:C.gray,
                    fontSize:12, fontWeight:700, letterSpacing:".1em", textTransform:"uppercase",
                    padding:"4px 12px", borderRadius:4 }}>{p.role}</div>
                </div>
              </div>
              <p style={{ fontSize:18, lineHeight:1.7, color:C.gray, margin:0 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════
   PAST EVENTS (WITH UPDATED 2025 & 2024 DATA)
══════════════════════════════════════════ */
function PastPage() {
  const [activeYear, setActiveYear] = useState("2025");

  const historicalData = {
    "2025": {
      title: "Celebrating the teams who made InnovateGC 2025 a success.",
      meta: [["Date", "Feb. 21 – Mar. 1, 2025"], ["Location", "Grinnell College"], ["Results", "2 Teams Tied for 1st"], ["SDGs Covered", "SDG 3 & SDG 10"]],
      credits: [
        { section: "UN SDGs Featured", items: ["#3 Good Health and Well-Being", "#10 Reduced Inequality"] },
        { section: "Keynote Speaker", items: ["Barb Baker"] },
        { section: "Mentors & Coaches", items: ["Prof. Monty Roper", "Prof. Liz Queathem", "Prof. Jeff Blanchard", "Michael Lawrence", "Andrea Brennen ’04"] },
        { section: "Judges", items: ["Chris Bair ’96", "Rachel Bly ’93", "Sophia Ford ’25"] },
        { section: "Student Organizers", items: ["Nifemi Ogunmesa ’25", "Arabelle Rohs ’28", "Isis Ovelar ’27"] }
      ],
      winners: [
        { place: "1st Place (Tie)", team: "STARSync", placeColor: "#D4AF37", sdgs: ["SDG 3", "SDG 10"], idea: "The STARSync app would be a support and motivation structure for students who struggle with time management and study habits. (Note: Judge Sophia is pictured to the side.)", members: ["Carolyn Rivero", "Agnes Saracouli", "Mariela Lopez-Gonzalez", "Istar Abdullahi"] },
        { place: "1st Place (Tie)", team: "Paso Adelante", placeColor: "#D4AF37", sdgs: ["SDG 3", "SDG 10"], idea: "Envisioned to partner with local church volunteers to break down various barriers that could enable lawful permanent residents living in the U.S. to realize their dreams of becoming U.S. citizens. (Note: Judge Sophia is pictured to the side.)", members: ["Stephany Ronquillo-Contreras", "Kayla Nguyen", "Italy Perez"] },
        { place: "2nd Place", team: "The Kiddie", placeColor: "#C0C0C0", sdgs: ["SDG 3", "SDG 10"], idea: "Presented as a regional subscription delivery service for many essential baby products that also gives back to the community by donating to parents in need. (Note: Judge Chris is pictured to the side.)", members: ["Parikshit Roychowdhury", "Avaash Bhattarai", "Candice Lu", "Rabbani Batra"] },
        { place: "3rd Place", team: "MedLink", placeColor: "#CD7F32", sdgs: ["SDG 3", "SDG 10"], idea: "A prototype translation service built to assist anyone whose first language is not English – from international students to immigrant families – to find bilingual practitioners in the US and provide translation services for medical documents. (Note: Judge Rachel is pictured to the side.)", members: ["Eti-Abasi-Laurel Edet", "Ibrahim Topchubashov", "Alexei Jeffryes"] }
      ]
    },
    "2024": {
      title: "Celebrating the teams who made InnovateGC 2024 a success.",
      meta: [["Date", "Feb. 23 – Mar. 2, 2024"], ["Location", "Grinnell College"], ["Teams Competing", "9 Teams"], ["SDGs Covered", "SDG 5 & SDG 11"]],
      credits: [
        { section: "UN SDGs Featured", items: ["#5 Gender Equality", "#11 Sustainable Cities"] },
        { section: "Speaker Panel", items: ["Tolu Alabi ’13", "Marc Gottschalk ’83", "Lihbin Shiao"] },
        { section: "Mentors & Coaches", items: ["Tolu Alabi ’13", "Marc Gottschalk ’83", "Kevin Allen", "Jeffrey Blanchard", "Michael Lawrence"] },
        { section: "Judges", items: ["Ajuna Kyaruzi ’17", "Amy Blanchard", "Bill Menner"] },
        { section: "Student Organizers", items: ["Nifemi Ogunmesa ’25", "Dayana Garcia ’26"] }
      ],
      winners: [
        { place: "1st Place", team: "IX Proposal", placeColor: "#D4AF37", sdgs: ["SDG 5", "SDG 11"], idea: "Congratulations to the first place team! (Note: Pictured with Jeff Blanchard on the left, Director of the Wilson Center, and judge Amy Blanchard on the right.)", members: ["Kaycie Brookens", "Jinny Eo", "Candice Lu", "Lily Piede"] },
        { place: "2nd Place", team: "Community Threads", placeColor: "#C0C0C0", sdgs: ["SDG 5", "SDG 11"], idea: "Congratulations to the second place team! (Note: Pictured with Jeff Blanchard on the left, Director of the Wilson Center, and judge Bill Menner on the right.)", members: ["Julia Aguilar-Pan", "Ganga Prakash", "Ekta Shaikh"] },
        { place: "3rd Place", team: "CapitalShe", placeColor: "#CD7F32", sdgs: ["SDG 5", "SDG 11"], idea: "Congratulations to the third place team! (Note: Pictured with Jeff Blanchard on the left, Director of the Wilson Center, and judge Ajuna Kyaruzi on the right.)", members: ["Kripa Bansal", "Nandika Jhunjhunwala", "Anu Oli", "Dev Sethia"] }
      ]
    }
  };

  const current = historicalData[activeYear];

  return (
    <div style={{ width:"100%", fontFamily:"Arial,sans-serif" }}>
      <div style={{ maxWidth:1200, margin:"0 auto", padding:"120px 24px" }}>
        {/* Header Title */}
        <div style={{ display:"flex", alignItems:"center", gap:20, marginBottom:12 }}>
          <div style={{ width:8, height:58, background:C.red, borderRadius:3, flexShrink:0 }} />
          <h1 style={{ fontSize:54, fontWeight:900, letterSpacing:"-2px", color:C.dark }}>Winners & Past Events</h1>
        </div>
        <p style={{ fontSize:20, color:C.gray, marginBottom:56, paddingLeft:28 }}>{current.title}</p>

        {/* History Tabs Configuration */}
        <div style={{ display:"flex", gap:16, marginBottom:56, borderBottom:`3px solid ${C.border}` }}>
          {Object.keys(historicalData).map((year) => (
            <button key={year} onClick={() => setActiveYear(year)} style={{
              background:"none", border:"none", padding:"18px 32px", fontSize:20, fontWeight:800,
              color: activeYear === year ? C.red : C.gray, cursor:"pointer", transition:"all .15s",
              borderBottom: activeYear === year ? `3px solid ${C.red}` : "3px solid transparent", marginBottom:-3
            }}>{year} Competition</button>
          ))}
        </div>

        {/* Big Statistics Grid Box Layout */}
        <div style={{ background:C.dark, color:C.white, borderRadius:12, padding:"40px 48px", marginBottom:56,
          display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))", gap:32 }}>
          {current.meta.map(([lbl,val],i)=>(
            <div key={i}>
              <div style={{ fontSize:13, opacity:.6, textTransform:"uppercase", letterSpacing:".12em", marginBottom:8 }}>{lbl}</div>
              <div style={{ fontSize:20, fontWeight:700 }}>{val}</div>
            </div>
          ))}
        </div>

        {/* Support Networks and Credits Card Deck */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))", gap:24, marginBottom:64 }}>
          {current.credits.map((g,i)=>(
            <div key={i} style={{ background:C.lightGray, borderRadius:12, padding:"28px 24px" }}>
              <div style={{ fontSize:13, fontWeight:700, textTransform:"uppercase", letterSpacing:".12em", color:C.red, marginBottom:14 }}>{g.section}</div>
              {g.items.map((item,j)=>(
                <div key={j} style={{ fontSize:16, color:C.dark, padding:"6px 0",
                  borderBottom: j < g.items.length - 1 ? `2px solid ${C.border}` : "none" }}>{item}</div>
              ))}
            </div>
          ))}
        </div>

        {/* Placement Section Divider */}
        <div style={{ display:"flex", alignItems:"center", gap:20, marginBottom:32 }}>
          <div style={{ width:56, height:4, background:C.red }} />
          <span style={{ fontSize:15, fontWeight:700, letterSpacing:".15em", textTransform:"uppercase", color:C.red }}>{activeYear} Results</span>
        </div>
        
        {/* Placed Teams Mapping Array */}
        <div style={{ display:"flex", flexDirection:"column", gap:24 }}>
          {current.winners.map((w,i)=>(
            <div key={i} style={{ background:C.white, border:`2px solid ${C.border}`,
              borderLeft:`6px solid ${w.placeColor}`, borderRadius:12, padding:"32px 36px" }}>
              <div style={{ display:"flex", alignItems:"center", gap:18, marginBottom:16, flexWrap:"wrap" }}>
                <div style={{ background:w.placeColor, color:C.white, fontSize:13, fontWeight:700,
                  letterSpacing:".12em", textTransform:"uppercase", padding:"5px 16px", borderRadius:4 }}>{w.place}</div>
                <div style={{ fontSize:28, fontWeight:900, color:C.dark, letterSpacing:"-1px" }}>{w.team}</div>
              </div>
              <div style={{ display:"flex", gap:10, flexWrap:"wrap", marginBottom:16 }}>
                {w.sdgs.map((s,j)=>(
                  <span key={j} style={{ background:C.lightGray, color:C.gray, fontSize:13,
                    padding:"4px 12px", borderRadius:4, fontWeight:600 }}>{s}</span>
                ))}
              </div>
              <p style={{ fontSize:18, color:C.gray, lineHeight:1.7, margin:"0 0 18px" }}>{w.idea}</p>
              <div style={{ display:"flex", flexWrap:"wrap", gap:10 }}>
                {w.members.map((m,j)=>(
                  <span key={j} style={{ fontSize:15, color:C.dark, fontWeight:600,
                    background:C.lightGray, padding:"6px 16px", borderRadius:20 }}>{m}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════
   FOOTER
══════════════════════════════════════════ */
function Footer({ setPage }) {
  return (
    <footer style={{ width:"100%", background:C.dark, color:"rgba(255,255,255,.6)", fontFamily:"Arial,sans-serif", padding:"160px 24px 60px", borderTop:`4px solid ${C.red}` }}>
      <div style={{ maxWidth:960, margin:"0 auto" }}>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))", gap:48, marginBottom:64 }}>
          <div>
            <Logo size={42} />
            <p style={{ fontSize:15, lineHeight:1.8, marginTop:18, maxWidth:300 }}>
              A 5-day pitch competition at Grinnell College's Wilson Center, building solutions for a sustainable future.
            </p>
          </div>
          <div>
            <div style={{ fontSize:13, fontWeight:700, textTransform:"uppercase", letterSpacing:".12em", color:C.red, marginBottom:18 }}>Navigation</div>
            {[["home","Challenge"],["qa","Q & A"],["rules","Rules"],["register","Register"],["schedule","Schedule"],["people","Speakers & Judges"],["past","Past Events"]].map(([id,lbl])=>(
              <button key={id} onClick={()=>setPage(id)} style={{ display:"block", background:"none", border:"none", color:"rgba(255,255,255,.6)", fontSize:15, padding:"6px 0", fontFamily:"Arial,sans-serif", textAlign:"left", cursor:"pointer" }}>{lbl}</button>
            ))}
          </div>
          <div>
            <div style={{ fontSize:13, fontWeight:700, textTransform:"uppercase", letterSpacing:".12em", color:C.red, marginBottom:18 }}>Contact</div>
            <p style={{ fontSize:15, lineHeight:1.8, color:"rgba(255,255,255,.75)" }}>Wilson Center<br/>Grinnell College<br/>Grinnell, Iowa 50112</p>
          </div>
        </div>
        <div style={{ borderTop:"1px solid rgba(255,255,255,.1)", paddingTop:24, display:"flex", justifyContent:"space-between", flexWrap:"wrap", gap:16 }}>
          <span style={{ fontSize:13, color:"rgba(255,255,255,.45)" }}>© 2026 InnovateGC · Grinnell College Wilson Center</span>
          <span style={{ fontSize:13, fontWeight:500, color:"rgba(255,255,255,.45)" }}>April 7–11, 2026</span>
        </div>
      </div>
    </footer>
  );
}

/* ══════════════════════════════════════════
   APP ROOT
══════════════════════════════════════════ */
export default function App() {
  const [page, setPage] = useState("home");
  useEffect(() => { window.scrollTo(0,0); }, [page]);
  const pages = { home:<HomePage setPage={setPage}/>, qa:<QAPage/>, rules:<RulesPage/>,
    register:<RegisterPage/>, schedule:<SchedulePage/>, people:<PeoplePage/>, past:<PastPage/> };
  return (
    <>
      <style>{G}</style>
      <div style={{ display:"flex", flexDirection:"column", minHeight:"100vh", width:"100%", background:C.white }}>
        <Nav page={page} setPage={setPage} />
        <main style={{ flex:1, width:"100%" }}>{pages[page]}</main>
        <Footer setPage={setPage} />
      </div>
    </>
  );
}
