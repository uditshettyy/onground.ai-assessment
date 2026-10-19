export const leads = [
  { id:1, name:"Mukunda", phone:"+91 99887 76655", value:"₹1,00,000", icp:87, intent:91, status:"Open",
    signals:[
      {t:"Financing Related",d:"Asked specifically about EMI options on the OnGro GROD."},
      {t:"Quotation Discussed",d:"Compared pricing with a competitor before reaching out."},
      {t:"Warranty Related",d:"Raised the 10-year warranty, needs clarity on return policy."}
    ] 
  },
  { id:2, name:"Prakash A.", phone:"+91 90000 11111", value:"₹40,000", icp:72, intent:80, status:"Open", signals:[] },
  { id:3, name:"Kavitha R.", phone:"+91 90000 22222", value:"₹60,000", icp:65, intent:70, status:"Open", signals:[] },
  { id:4, name:"Dhruv N.", phone:"+91 90000 33333", value:"₹90,000", icp:80, intent:75, status:"Open", signals:[] },
];

export const kpis = [
  { label:"Calls made", value:"78", sub:"this week" },
  { label:"Calls connected", value:"54", sub:"this week" },
  { label:"Converted", value:"54%", sub:"conversion rate" },
  { label:"Closed", value:"2", sub:"this week" },
];

export const calls7d = [
  {d:"Mon",v:22},{d:"Tue",v:30},{d:"Wed",v:18},{d:"Thu",v:25},{d:"Fri",v:20},{d:"Sat",v:12},{d:"Sun",v:8},
];

export const trend7d = [
  {d:"Mon",v:60},{d:"Tue",v:75},{d:"Wed",v:45},{d:"Thu",v:70},{d:"Fri",v:65},{d:"Sat",v:40},{d:"Sun",v:30},
];

export const tasks = [
  { id:1, title:"Prakash A. · Lead 3021 · ₹40,000", tag:"30 min" },
  { id:2, title:"Mukunda · Lead 3022 · ₹1,00,000", tag:"1 hr" },
  { id:3, title:"Kavitha R. · Lead 3023 · ₹60,000", tag:"2 hrs" },
];
export const missedCalls = [
  { id:1, name:"Prakash A.", time:"20 mins ago", value:"₹6,000" },
  { id:2, name:"Kavitha R.", time:"2 hrs ago", value:"₹4,000" },
  { id:3, name:"Dhruv N.", time:"Yesterday", value:"₹1,200" },
  { id:4, name:"Ritu S.", time:"Yesterday", value:"₹900" },
  { id:5, name:"Unknown", time:"Yesterday", value:"—" },
];

export const recentCalls = [
  { id:1, name:"Mukunda R.", time:"10:15 AM", len:"4m 32s", type:"Incoming" },
  { id:2, name:"Kavitha R.", time:"9:50 AM", len:"2m 10s", type:"Outgoing" },
  { id:3, name:"Unknown", time:"Yesterday", len:"0m 12s", type:"Missed" },
  { id:4, name:"Ritu S.", time:"Yesterday", len:"3m 05s", type:"Incoming" },
  { id:5, name:"Prakash A.", time:"Yesterday", len:"1m 40s", type:"Outgoing" },
];