const LOGO="assets/logo.webp";
const E={};
`bench|Barbell Bench Press|2|shoulder|c|0|press|Shoulder blades down and back;Elbows about 45°;Lower 3 sec to lower chest|Bend the bar in half and squeeze the chest as you press.|Flared elbows;Bouncing off chest|Chest, delts and triceps under heavy load.
dbpress|Dumbbell Bench Press|1|shoulder|c|0|press|Wrists over elbows;Lower to a deep stretch;Press up and slightly in|Hug a barrel: drive the biceps toward each other.|Wide elbows;Short range|Big chest stretch, each arm works alone.
pushup|Push-Up|0||c|0|press|Straight line, ribs down;Elbows about 45°;Chest to the floor|Spread the floor apart with your hands.|Sagging hips;Half reps|Chest and triceps with no equipment.
incpush|Incline Push-Up|0||c|0|press|Hands on a bench or counter;Body in one line;Lower with control|Push the surface away and keep the trunk tight.|Sagging hips;Rushing|Scalable press for chest and arms.
dbinc|Incline Dumbbell Press|1|shoulder|c|0|press|Bench at 30°;Blades pinned to the pad;Deep stretch on the upper chest|Press up and in and feel the upper chest.|Bench too steep;Bouncing|Upper chest, which flat pressing misses.
ohp|Seated Dumbbell Shoulder Press|1|shoulder|c|0|press|Ribs down, back supported;Forearms vertical;Press slightly forward|Elbows to the ceiling, shoulders away from ears.|Leaning back;Shrugging|Delt size and overhead strength.
pushpress|Dumbbell Push Press|1|shoulder|p|0|power|Small dip through the legs;Drive the legs, then press;Catch with soft knees|Explode from the floor through the hands.|Pressing before the legs drive;Arching|Leg-to-arm power transfer.
lat|Lateral Raise|1||i|0|shoulder|Slight forward lean;Lead with the elbows;Stop at shoulder height|Pour a jug out from the pinky side.|Swinging;Shrugging|Side delts at low recovery cost.
pushdown|Cable Triceps Pushdown|2||i|0|press|Elbows pinned;Full lockout;Slow return|Squeeze the back of the arm at lockout.|Elbows drifting;Body swing|Direct triceps volume.
dbext|Overhead Triceps Extension|1||i|0|press|Elbows forward;Deep stretch behind the head;Extend fully|Stretch the long head, then drive straight up.|Flared elbows;Arching|Trains the long head of the triceps.
pulldown|Lat Pulldown|2||c|0|pull|Chest up, slight lean;Elbows to ribs;Full stretch at the top|Drive elbows to hips, not hands to chest.|Yanking;Short stretch|Lat width and pulling strength.
pullup|Pull-Up or Chin-Up|0||c|0|pull|Dead hang start;Elbows to hips;Lower for 3 sec|Pull the elbows down and squeeze the lats.|Kipping;Half reps|Best bodyweight back builder. Use bands or slow negatives to scale.
csrow|Chest-Supported Row|2||c|0|pull|Chest on the pad;Elbows back at 45°;Pause 1 sec|Drive elbows back and pinch the blades.|Shrugging;Lifting the chest|Back work without lower-back fatigue.
dbrow|One-Arm Dumbbell Row|1||c|0|pull|Flat back, hand on bench;Elbow to hip;Full stretch|Row toward your back pocket.|Twisting;Short range|Lats and mid-back, easy to load.
invrow|Inverted Row|0||c|0|pull|Body straight;Chest to bar or table edge;Squeeze the blades|Pull elbows back and pinch.|Sagging;Half reps|Bodyweight horizontal pull.
facepull|Cable Face Pull|2||i|0|shoulder|Rope at forehead height;Elbows high and wide;Rotate hands out|Squeeze rear delts and pull the hands apart.|Too heavy;Low elbows|Rear delts and rotator cuff.
rdelt|Rear Delt Fly|1||i|0|shoulder|Hinge with a flat back;Arms out, soft elbows;Stop at shoulder height|Sweep wide and squeeze.|Swinging;Shrugging|Rear delts and shoulder balance.
ytraise|Prone Y Raise|0||i|0|shoulder|Lie face down;Arms in a Y, thumbs up;Lift with the mid-back|Reach long and lift with the lower traps.|Arching the back;Shrugging|Lower traps and scapular control.
curl|Dumbbell Curl|1||i|0|pull|Elbows at your sides;Palm up as you curl;Lower 3 sec|Squeeze hard at the top.|Swinging;Half reps|Biceps volume.
squat|Barbell Back Squat|2|knee,back|c|1|squat|Brace, bar on the upper back;Knees track over toes;Parallel or deeper|Push the floor apart with your feet.|Knees caving;Rounding the back|Top strength lift for quads and glutes.
legpress|Leg Press|2|knee|c|1|squat|Feet shoulder-width;Knees near 90°;Back flat on the pad|Push through the whole foot.|Hips lifting;Short depth|Heavy quad work with low back cost.
goblet|Goblet Squat|1|knee|c|1|squat|Weight at your chest;Elbows inside knees;Full depth, upright|Sit between your legs.|Heels lifting;Collapsing forward|Teaches depth and positioning.
sitstand|Chair Sit-to-Stand|0||c|1|squat|Feet under knees;Lean forward, stand tall;Sit down slowly|Push the floor away and own the lowering.|Using hands;Dropping down|The movement that keeps you independent.
fastrise|Fast Sit-to-Stand|0||p|1|power|Stand up as fast as you can;Lower over 3 sec;Stay steady|Explode up and lower slowly.|Rushing down;Rocking|Leg power for balance recovery.
bridge|Hip Thrust or Glute Bridge|0||c|1|hinge|Shoulders on a bench;Ribs down, chin tucked;Pause at the top|Drive hips up and squeeze the glutes.|Over-arching;Feet too far away|Glute strength that is kind to knees and back.
rdl|Romanian Deadlift|1|back|c|1|hinge|Soft knees, hips back;Weights close to the legs;Stop at max hamstring stretch|Push hips back and feel the hamstrings load like stretched bands.|Rounding;Squatting it|Best hamstring and glute builder.
sldl|Single-Leg RDL|1|back|i|1|hinge|Flat back;Back leg reaches;Hips stay square|Load the standing hamstring and stay balanced.|Rotating hips;Rounding|Hamstring strength and balance.
bss|Bulgarian Split Squat|1|knee|c|1|single|Back foot on a bench;Drop straight down;Drive through the front heel|Push through the front leg, hips level.|Front foot too close;Wobbling|Single-leg quad and glute strength.
lunge|Reverse Lunge|0|knee|c|1|single|Step back with control;Front shin vertical;Drive through the heel|Push the front foot into the floor.|Short steps;Knee caving|Single-leg work with little equipment.
stepup|Step-Up|0|knee|c|1|single|Whole foot on the box;Drive up with the front leg;Lower slowly|Don't push off the back foot.|Pushing off the floor;Leaning|Everyday single-leg strength.
latlunge|Lateral Lunge|0|knee|c|1|single|Step wide and sit back;Toes forward, chest up;Push back to center|Push the floor away to return.|Knee caving;Short step|Side-to-side strength for changing direction.
legcurl|Leg Curl|2||i|1|hinge|Hips pinned;Curl fully and pause;Lower 3 sec|Squeeze the hamstrings, heels to glutes.|Lifting the hips;Swinging|Hamstring isolation.
nordic|Nordic Hamstring Curl|0||e|1|hinge|Kneel with ankles anchored;Body straight from knees to head;Lower as slowly as you can|Resist the fall with your hamstrings.|Bending at the hips;Dropping fast|Eccentric hamstring strength.
calf|Standing Calf Raise|0||i|1|single|Full stretch and pause;Rise high;Lower slowly|Press through the big toe.|Bouncing;Short range|Calf and Achilles resilience.
jumpsquat|Squat Jump|0|knee|p|1|power|Quick dip, then jump;Land softly, knees over toes;Reset each rep|Jump as high as possible every rep.|Stiff landings;Grinding reps|Explosive leg power.
broad|Broad Jump|0|knee|p|1|power|Swing arms, load the hips;Jump far;Stick the landing|Explode forward and stick it.|Stiff-legged landings;Rushing|Horizontal power for sprinting.
deadbug|Dead Bug|0||t|0|core|Low back flat;Move slowly;Exhale as you extend|Press the back into the floor.|Arching;Speed|Trunk control.
sideplank|Side Plank|0||h|0|core|Elbow under shoulder;Hips stacked in a straight line;Breathe|Push the floor away and lift the hips.|Sagging;Rolling forward|Lateral trunk strength.
pallof|Pallof Press|1||t|0|core|Stand tall, band at chest;Press out and resist twisting;Hold 2 sec|Resist the rotation.|Twisting;Leaning|Anti-rotation core strength.
chop|Dumbbell Woodchop|1||p|0|power|Rotate through the hips;Arms guide the weight;Land balanced|Rotate through your hips explosively.|Arm-only swing;Stiff hips|Rotational power.
rotthrow|Medicine-Ball Rotational Throw|2||p|0|power|Load the back hip;Rotate and release;Follow through|Snap your hips through.|Arm-only throw;Rushing|Rotational power with a load.
rotjump|Rotational Jump|0||p|0|power|Quarter turn each jump;Land softly;Reset|Rotate fast and land balanced.|Stiff knees;Off-balance landings|Rotational power with no equipment.
copen|Copenhagen Plank|0||h|0|core|Top leg on a bench;Hips lifted;Long line|Squeeze the inner thigh.|Sagging;Rolling|Adductor and groin durability.
farmer|Farmer Carry|1||h|0|grip|Tall posture, ribs down;Steady steps;Grip hard|Crush the handles.|Leaning;Shrugging|Grip, trunk and posture under load.
deadhang|Dead Hang|0||h|0|grip|Shoulders active;Hang relaxed;Breathe|Squeeze the bar and stay long.|Shrugging;Letting go early|Grip and shoulder health.
neck|Neck Isometric Holds|0||h|0|neck|Hand against forehead, side and back;Push without moving;Build slowly|Push gently into your hand in all four directions.|Jerking;Holding your breath|A strong neck absorbs impact.
er|External Rotation|1||i|0|shoulder|Elbow at your side;Rotate out slowly;Lower with control|Rotate from the shoulder, not the wrist.|Elbow drifting;Too heavy|Rotator cuff health.
scappush|Scapular Push-Up|0||i|0|shoulder|Straight arms;Push the floor away;Let the blades come together|Protract without bending the elbows.|Bending the arms;Sagging|Serratus and scapular control.
slbal|Single-Leg Balance Reach|0||t|1|bal|Stand tall on one leg;Reach forward slowly;Hold something nearby|Reach and return with control.|Holding your breath;Rushing|Balance helps prevent falls.`.split('\n').forEach(l=>{const a=l.split('|');E[a[0]]={n:a[1],e:+a[2],av:a[3]?a[3].split(','):[],t:a[4],l:+a[5],g:a[6],cues:a[7].split(';'),in:a[8],mi:a[9].split(';'),w:a[10]}});
const SL={hpress:['bench','dbpress','pushup'],inc:['dbinc','incpush'],vpress:['ohp'],tri:['pushdown','dbext'],vpull:['pulldown','pullup'],row:['csrow','dbrow','invrow'],rear:['facepull','rdelt','ytraise'],squat:['squat','legpress','goblet','bridge'],hinge:['rdl','bridge'],press:['legpress','bss','lunge'],single:['bss','lunge','stepup'],curl:['legcurl','sldl'],rot:['rotthrow','chop','rotjump'],olsq:['legpress','goblet','sitstand'],olpress:['dbpress','incpush']};
const RX={c:{s:[3,3,4],r:[6,10],t:'3-1-1-0',q:'2–3'},i:{s:[2,3,3],r:[10,15],t:'3-0-1-0',q:'2–3'},p:{s:[3,3,4],r:[3,5],t:'Fast up, 3 sec down',q:'3–4, keep reps crisp'},e:{s:[2,3,3],r:[3,6],t:'5 sec lowering',q:'2–3'},t:{s:[2,3,3],r:[8,12],t:'Slow, 2 sec pauses',q:'2–3'},h:{s:[2,3,3],r:[20,40],t:'Steady hold',q:'2–3'}};
const M={
hyp:{n:'Hypertrophy',h:265,b:'Muscle size with high volume and classic splits.',maxd:7,d:'Growth comes from hard sets near failure with a full stretch, so 2–3 RIR and full range give the most stimulus per set.',note:'Aim for 10–20 hard sets per muscle per week. On 7 days, the last day is light core and shoulder work so you still recover. Add a rep or a little weight whenever you reach the top of the range.',
 sp:{1:['Full Body'],2:['Upper','Lower'],3:['Push','Pull','Legs'],4:['Upper','Lower','Upper','Lower'],5:['Push','Pull','Legs','Upper','Lower'],6:['Push','Pull','Legs','Push','Pull','Legs'],7:['Push','Pull','Legs','Push','Pull','Legs','Core + Recovery']},
 days:{Push:['hpress','inc','vpress','lat','tri'],Pull:['vpull','row','rear','curl?','rear'],Legs:['squat','hinge','press','curl','calf'],Upper:['hpress','row','vpress','vpull','lat','curl?','tri'],Lower:['squat','hinge','press','curl','calf'],'Full Body':['squat','hpress','row','hinge','vpress','lat'],'Core + Recovery':['deadbug','sideplank','pallof','ytraise','deadhang']}},
cricket:{n:'Cricket',h:150,b:'Lower-body strength, rotation and shoulder health.',maxd:5,vol:.9,d:'Cricket rewards a strong, stable base and fast trunk rotation.',note:'Bowlers: keep heavy lower-body days at least 48 hours away from a bowling session, and skip the last hard set when your legs feel heavy.',
 lens:{single:'Single-leg strength carries into the delivery stride and fielding turns.',hinge:'Hamstrings and glutes protect you in run-ups and between the wickets.',core:'A stiff trunk passes leg force to the arm in bowling and batting.',shoulder:'Shoulder health handles repeated bowling and throwing load.',power:'Rotational power becomes bat speed and throwing velocity.'},
 seq:['Lower Strength','Upper + Shoulders','Rotation + Power','Full Body','Shoulders + Core'],days:{'Shoulders + Core':['er','rear','pallof','deadbug','sideplank'],'Lower Strength':['squat','hinge','single','latlunge','sideplank'],'Upper + Shoulders':['hpress','row','vpull','er','pallof'],'Rotation + Power':['rot','broad','sldl','deadbug','er'],'Full Body':['squat','hpress','row','hinge','deadbug']}},
football:{n:'Football',h:95,b:'Strength for speed, hamstrings and durability.',maxd:5,d:'Strength helps you accelerate, decelerate and stay on the ball.',note:'Strength supports speed but does not replace it. Keep sprints and match-speed running in your pitch sessions, and keep the gym 24+ hours from them.',
 lens:{hinge:'Hamstring strength is your best protection against sprint injuries.',single:'Football is played on one leg: cutting, kicking and landing.',power:'Jumps and bounds train force quickly, which is what sprinting needs.',core:'Groin and trunk strength reduce hip load in kicking.'},
 seq:['Lower Strength','Upper + Trunk','Power + Hamstrings','Full Body','Core + Groin'],days:{'Core + Groin':['copen','sideplank','deadbug','pallof','calf'],'Lower Strength':['squat','hinge','single','nordic','copen','calf'],'Upper + Trunk':['hpress','row','vpull','pushpress','deadbug','sideplank'],'Power + Hamstrings':['jumpsquat','broad','rdl','nordic','copen','calf'],'Full Body':['squat','hpress','row','hinge','sideplank']}},
mma:{n:'MMA',h:8,b:'Low volume: strength, power, grip and neck.',maxd:4,vol:.75,cap:[4,5,6],d:'Gym should build strength and power without costing you sparring recovery.',note:'Gym is capped at 4 short sessions, and the 4th is a light core and grip day. Skip the gym or drop a set on days before hard sparring, and never train to failure.',
 lens:{grip:'Grip decides the clinch, control and submission battles.',power:'Powerful hips and shoulders carry into strikes and takedowns.',core:'A braced trunk transfers power and protects you when hit.',neck:'A strong neck absorbs strikes and resists chokes and takedowns.'},
 seq:['Full Body A','Full Body B','Power + Neck','Core + Grip'],days:{'Core + Grip':['deadbug','sideplank','farmer','deadhang','neck'],'Full Body A':['squat','hpress','vpull','pallof','neck'],'Full Body B':['rdl','row','pushpress','farmer','deadhang'],'Power + Neck':['jumpsquat','pushpress','single','pallof','neck','deadhang']}},
swim:{n:'Swimming',h:195,b:'Pull strength, scapular control and shoulder protection.',maxd:4,vol:.9,d:'The gym supports the pool. It protects shoulders and builds pull strength, and it does not replace swim volume.',note:'Gym is support only, 2–4 sessions. Stop any movement that pinches the shoulder, and keep heavy pressing light.',
 lens:{shoulder:'Scapular control and rotator cuff strength lower shoulder-overuse risk.',pull:'Pulling strength drives the catch and pull phase.',core:'Anti-extension and anti-rotation control keeps a long, streamlined body.'},
 seq:['Pull + Shoulder Control','Legs + Trunk','Balance + Push','Shoulder Prehab + Core'],days:{'Shoulder Prehab + Core':['er','rear','scappush','ytraise','deadbug'],'Pull + Shoulder Control':['vpull','row','er','scappush','rear','deadbug'],'Legs + Trunk':['squat','hinge','single','sideplank','deadbug'],'Balance + Push':['hpress','row','er','rear','pallof']}},
older:{n:'Older Adults',h:35,b:'Strength, power, balance and independence.',maxd:4,vol:.85,d:'Strength, power and balance keep you independent, able to get up, carry and catch yourself.',note:'Move smoothly, stand up fast and lower slowly. Keep something steady within reach for balance work. Ask your doctor first if you have a heart or joint condition.',
 rx:{c:{r:[8,12],q:'3–4'},i:{q:'3–4'}},lens:{squat:'Standing from a chair and climbing stairs are this movement.',power:'Muscle speed declines faster than strength, and it decides whether you can catch a fall.',bal:'Balance training reduces fall risk.',grip:'Carrying groceries needs grip and trunk strength.'},
 seq:['Strength A','Power + Balance','Strength B','Balance + Grip'],days:{'Balance + Grip':['slbal','sitstand','farmer','bridge','calf'],'Strength A':['sitstand','row','incpush','bridge','farmer'],'Power + Balance':['fastrise','stepup','slbal','row','calf'],'Strength B':['olsq','olpress','row','stepup','farmer']}},
tri:{n:'Triathlon',h:320,b:'Single-leg strength, posterior chain and trunk.',maxd:4,vol:.8,d:'Single-leg strength and a stiff trunk carry across swim, bike and run, but soreness costs training time, so stop well short of failure.',note:'Keep sets easy to recover from: stop 3 reps short, and skip the lower day before a key run or bike session.',
 rx:{c:{t:'2-0-1-0',q:'3'}},lens:{single:'Single-leg strength carries into every stride and pedal stroke.',hinge:'The posterior chain powers the run and the bike.',core:'Trunk stability keeps form in the last kilometre.'},
 seq:['Single-Leg Strength','Upper + Trunk','Posterior Chain','Core + Prehab'],days:{'Core + Prehab':['sideplank','deadbug','pallof','er','calf'],'Single-Leg Strength':['single','sldl','calf','sideplank','deadbug'],'Upper + Trunk':['vpull','row','hpress','pallof','er'],'Posterior Chain':['hinge','curl','calf','pallof','sideplank']}}};
const LV=[['Amateur','New, or returning to lifting'],['Intermediate','1–3 years of steady training'],['Pro','3+ years and trains hard']];
const EQ=['Bodyweight','Dumbbells','Full gym'];
function load(){try{return JSON.parse(localStorage.getItem('lim1'))||{}}catch(e){return{}}}
let S=load(),D={mod:'hyp',lvl:1,days:4,eq:2,inj:[]},day=0,open=null,st=0,view='plan',wo=0;
function save(){try{localStorage.setItem('lim1',JSON.stringify(S))}catch(e){}}
function hue(k){document.documentElement.style.setProperty('--h',M[k].h)}
function pick(s,p){for(const id of(SL[s]||[s.replace('?','')])){const q=E[id];if(q.e<=p.eq&&!q.av.some(a=>p.inj.includes(a)))return id}return null}
function build(p){
 const m=M[p.mod],cap=(m.cap||[5,6,7])[p.lvl],names=m.sp?m.sp[p.days]:m.seq.slice(0,p.days);
 return names.map(name=>{
  const used=new Set(),exs=[];
  for(const s of m.days[name]){
   if(exs.length>=cap)break;
   if(s.endsWith('?')&&p.lvl==0)continue;
   const id=pick(s,p);if(!id||used.has(id))continue;used.add(id);
   const q=E[id],b=Object.assign({},RX[q.t],(m.rx&&m.rx[q.t])||{});
   exs.push({id,sets:Math.max(2,Math.round(b.s[p.lvl]*(m.vol||1))),r:b.r,t:b.t,q:b.q});
  }
  return{name,exs};
 });
}
function sug(id,ex){
 const q=E[id],L=(S.logs&&S.logs[id])||[],u=q.t=='h'?' sec':' reps';
 if(!L.length)return'First time: pick a load you can do for '+ex.r[0]+'–'+ex.r[1]+u+' while stopping 2–3 short of failure.';
 const last=L[L.length-1],w=Math.max(...last.s.map(s=>s[0])),top=last.s.filter(s=>s[0]==w);
 const inc=q.t=='c'?(q.l?5:2.5):1,best=Math.max(...top.map(s=>s[1]));
 if(top.length>=ex.sets&&top.every(s=>s[1]>=ex.r[1]))return w?'Add weight: go to '+(w+inc)+' kg (you hit '+ex.r[1]+u+' on every set at '+w+' kg).':'Progress: add a small load or move to a harder variation.';
 return'Keep '+(w?w+' kg':'the same load')+' and beat '+best+u+' on your first set. Hit '+ex.r[1]+u+' on every set to earn a progression.';
}
const AR={
sq:{S:[150,106,180,153,100,150,170],E:[129,137,150,185,97,150,170]},
si:{S:[150,106,180,153,100,150,170],E:[126,141,150,180,100,150,170],p:'<path d="M99 146V112M99 146H134M104 146v24M130 146v24"/>'},
hi:{S:[150,106,180,153,102,150,170],E:[128,108,115,163,135,150,170]},
bn:{S:[150,146,-90,128,126,185,169],E:[150,146,-90,104,100,185,169],p:'<path d="M62 156H212M80 156v14M194 156v14"/>'},
pu:{S:[167,141,-115,125,168,225,168],E:[161,159,-98,125,168,225,168]},
pk:{S:[167,143,-115,120,166,225,168],E:[167,138,-115,120,166,225,168]},
op:{S:[150,106,180,160,50,150,170],E:[150,106,180,152,14,150,170]},
ra:{S:[150,106,180,153,104,150,170],E:[150,106,180,196,62,150,170]},
cu:{S:[150,106,180,153,104,150,170],E:[150,106,180,170,64,150,170]},
td:{S:[150,106,180,172,84,150,170],E:[150,106,180,154,104,150,170],cb:[176,6]},
ox:{S:[150,106,180,138,58,150,170],E:[150,106,180,152,16,150,170]},
pl:{S:[150,110,180,150,20,150,150],E:[150,80,180,150,20,150,120],es:-1,p:'<path d="M96 20H204"/>'},
dh:{S:[150,110,180,150,20,150,150],E:[150,106,180,150,20,150,146],es:-1,p:'<path d="M96 20H204"/>'},
pd:{S:[170,140,175,180,28,205,170],E:[170,140,175,190,74,205,170],cb:[200,6],p:'<path d="M140 147H192M150 147v23"/>'},
ro:{S:[135,108,110,176,134,145,170],E:[135,108,110,160,102,145,170]},
fp:{S:[150,106,180,196,60,150,170],E:[150,106,180,164,50,150,170],es:-1,cb:[250,58]},
ln:{S:[150,106,180,153,100,150,170,150,170],E:[150,130,180,153,124,178,170,105,166]},
su:{S:[130,104,180,133,98,130,170,175,138],E:[175,80,180,178,74,175,140,150,150],p:'<rect x="160" y="140" width="44" height="30" rx="3" fill="var(--mu)" stroke="none" opacity=".3"/>'},
bs:{S:[152,108,180,155,102,182,170,96,148],E:[150,132,180,153,126,182,170,96,148],p:'<path d="M66 152H108M72 152v18M102 152v18"/>'},
br:{S:[145,150,-123,132,150,185,169],E:[150,124,-90,132,150,185,169],p:'<path d="M58 128H110M66 128v42"/>'},
lg:{S:[112,140,-135,130,120,150,118],E:[112,140,-135,130,120,165,92],p:'<path d="M104 149L66 111"/>'},
lc:{S:[170,146,-90,110,148,232,146],E:[170,146,-90,110,148,218,112],ks:1,p:'<path d="M120 154H250M136 154v16M236 154v16"/>'},
no:{S:[150,124,180,160,100,118,166],E:[179,146,115,240,150,120,166]},
ca:{S:[150,106,180,153,104,150,170],E:[150,100,180,153,98,150,164]},
ju:{S:[129,137,150,150,120,150,170],E:[150,70,180,172,14,150,136]},
bj:{S:[129,137,150,112,128,150,170],E:[188,96,140,232,58,222,142]},
db:{S:[150,150,-90,104,104,182,118],E:[150,150,-90,58,150,214,150],p:'<path d="M40 158H260"/>'},
pa:{S:[150,106,180,162,72,150,170],E:[150,106,180,194,66,150,170],cb:[262,68]},
ch:{S:[150,106,180,172,20,150,170],E:[146,112,160,148,128,150,170]},
rt:{S:[150,108,180,130,98,150,170],E:[150,106,180,205,70,150,170]},
fa:{S:[150,106,180,152,104,138,170,162,170],E:[150,106,180,152,104,162,170,138,170]},
nk:{S:[150,106,180,172,44,150,170],E:[150,106,180,175,46,150,170]},
sb:{S:[150,106,180,153,102,150,170,140,150],E:[146,110,118,190,150,150,170,84,108]}};
const XM={bench:['bn','b'],dbpress:['bn','d'],dbinc:['bn','d'],pushup:['pu'],incpush:['pu'],ohp:['op','d'],pushpress:['op','d'],lat:['ra','d'],ytraise:['ra'],er:['ra'],pushdown:['td','c'],dbext:['ox','d'],pulldown:['pd','c'],pullup:['pl'],deadhang:['dh'],csrow:['ro','d'],dbrow:['ro','d'],invrow:['ro'],rdelt:['ro','d'],facepull:['fp','c'],curl:['cu','d'],squat:['sq','B'],goblet:['sq','d'],jumpsquat:['ju'],rotjump:['ju'],sitstand:['si'],fastrise:['si'],rdl:['hi','b'],bridge:['br'],legpress:['lg'],legcurl:['lc'],nordic:['no'],calf:['ca','d'],lunge:['ln'],latlunge:['ln'],stepup:['su','d'],bss:['bs','d'],broad:['bj'],deadbug:['db'],sideplank:['pk'],copen:['pk'],scappush:['pk'],pallof:['pa','c'],chop:['ch','d'],rotthrow:['rt','m'],farmer:['fa','d'],neck:['nk'],sldl:['sb','d'],slbal:['sb']};
function ik(r,t,a,b,s){const dx=t[0]-r[0],dy=t[1]-r[1],d=Math.hypot(dx,dy)||1,L=Math.min(d,a+b-.01),A=(a*a-b*b+L*L)/(2*L),h=Math.sqrt(Math.max(0,a*a-A*A)),ux=dx/d,uy=dy/d;return[r[0]+ux*A-uy*h*s,r[1]+uy*A+ux*h*s,r[0]+ux*L,r[1]+uy*L]}
const pad=P=>P.length>7?P:P.concat([P[5],P[6]]);
const lerp=(a,b,k)=>a.map((v,i)=>v+(b[i]-v)*k);
function fig(P,A,hd){
 const R=Math.PI/180,[hx,hy,T,wx,wy,fx,fy,gx,gy]=P,H=[hx,hy],sn=Math.sin(T*R),cs=Math.cos(T*R),s=[hx+46*sn,hy+46*cs],
 a=ik(s,[wx,wy],24,22,A.es||1),l=ik(H,[fx,fy],32,32,A.ks||-1),m=ik(H,[gx,gy],32,32,A.ks||-1),
 L=(...p)=>'<path d="M'+p.map(q=>q[0].toFixed(1)+' '+q[1].toFixed(1)).join('L')+'"/>',
 toe=e=>[e[2]+11,e[3]>=160?170:e[3]],w=[a[2],a[3]],C=(p,r,f)=>'<circle cx="'+p[0].toFixed(1)+'" cy="'+p[1].toFixed(1)+'" r="'+r+'" stroke="var(--tx)" stroke-width="4" fill="'+(f?'var(--tx)':'none')+'"/>';
 return'<path d="M16 171H284" stroke="var(--bd)" stroke-width="3"/><g stroke="var(--mu)" stroke-width="5" fill="none" stroke-linecap="round">'+(A.p||'')+'</g>'
 +'<g fill="none" stroke="var(--acc)" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"><g opacity=".4">'+L(H,m,[m[2],m[3]],toe(m))+'</g>'
 +L(H,s)+'<circle cx="'+(s[0]+13*sn).toFixed(1)+'" cy="'+(s[1]+13*cs).toFixed(1)+'" r="8"/>'+L(H,l,[l[2],l[3]],toe(l))+L(s,a,w)+'</g>'
 +(hd=='b'?C(w,10):hd=='B'?C(s,10):hd=='d'?C(w,5,1):hd=='m'?C(w,8,1):hd=='c'&&A.cb?'<path d="M'+w[0]+' '+w[1]+'L'+A.cb.join(' ')+'" stroke="var(--tx)" stroke-width="2" fill="none"/>':'');
}
const X=id=>{const x=XM[id];return x&&[AR[x[0]],x[1]||'']};
function demo(id,n){
 const x=X(id);if(!x)return'';const[A,h]=x,st=k=>'<svg viewBox="0 0 300 190" aria-hidden="true">'+fig(pad(k?A.E:A.S),A,h)+'</svg>';
 return'<div class="demo"><svg class="an" data-x="'+id+'" viewBox="0 0 300 190" role="img" aria-label="Animated demonstration of '+n+'"></svg><div class="stills"><figure>'+st(0)+'<figcaption>Start position</figcaption></figure><figure>'+st(1)+'<figcaption>Finish position</figcaption></figure></div></div>';
}
const RM=window.matchMedia&&matchMedia('(prefers-reduced-motion:reduce)').matches;
function tick(t){
 document.querySelectorAll('.an').forEach(el=>{const[A,h]=X(el.dataset.x),p=(t%3200)/3200,k=RM?0:p<.4?p/.4:p<.5?1:p<.9?1-(p-.5)/.4:0;el.innerHTML=fig(lerp(pad(A.S),pad(A.E),.5-.5*Math.cos(Math.PI*k)),A,h)});
 requestAnimationFrame(tick);
}
requestAnimationFrame(tick);
const $=s=>document.getElementById(s);
function seg(list,cur,fn){return'<div class="seg g">'+list.map(([l,v])=>'<button class="'+(cur==v?'on':'')+'" onclick="'+fn+'('+JSON.stringify(v).replace(/"/g,"'")+')">'+l+'</button>').join('')+'</div>'}
const STEPS=[['Choose your module','What do you want to get better at?'],['Your level','This sets how many exercises and sets you get.'],['Days per week','How many days can you train?'],['Your equipment','We only pick exercises you can actually do.'],['Any injuries?','Optional. We swap out movements that could aggravate them.']];
function onboard(){
 const m=M[D.mod];hue(D.mod);
 let h=(st==0?'<h1 class="word"><img src="'+LOGO+'" alt=""><span>Limitless</span></h1><p class="sub">Strength training built around what you actually want to be better at. Set up in under a minute.</p>':'<div class="top"><span class="word"><img src="'+LOGO+'" alt=""><span>Limitless</span></span></div>')
 +tabs()+'<div class="prog">'+STEPS.map((x,i)=>'<i class="'+(i<=st?'on':'')+'"></i>').join('')+'</div><p class="mu" style="margin:0">Step '+(st+1)+' of '+STEPS.length+'</p>'
 +'<h2 style="font-size:28px">'+STEPS[st][0]+'</h2><p class="mu" style="margin:0 0 16px">'+STEPS[st][1]+'</p>';
 if(st==0)h+='<div class="mods">'+Object.keys(M).map(k=>'<button class="mod g'+(D.mod==k?' on':'')+'" style="--mh:'+M[k].h+'" onclick="set(\'mod\',\''+k+'\')"><b>'+M[k].n+'</b><span>'+M[k].b+'</span></button>').join('')+'</div>';
 if(st==1)h+=seg(LV.map((l,i)=>[l[0],i]),D.lvl,'setn\'lvl\'').replace(/setn'lvl'\(/g,"setn('lvl',")+'<p class="hint">'+LV[D.lvl][1]+'</p>';
 if(st==2)h+=seg([1,2,3,4,5,6,7].filter(n=>n<=m.maxd).map(n=>[n,n]),D.days,'setn\'days\'').replace(/setn'days'\(/g,"setn('days',")+(m.maxd<7?'<p class="hint">'+m.n+' is capped at '+m.maxd+' gym days so training stays recoverable. The extra day is a light one.</p>':'');
 if(st==3)h+=seg(EQ.map((l,i)=>[l,i]),D.eq,'setn\'eq\'').replace(/setn'eq'\(/g,"setn('eq',");
 if(st==4)h+='<div class="chips"><button class="chip g'+(D.inj.length?'':' on')+'" onclick="inj(\'none\')">None</button>'+[['shoulder','Shoulder'],['knee','Knee'],['back','Lower back']].map(a=>'<button class="chip g'+(D.inj.includes(a[0])?' on':'')+'" onclick="inj(\''+a[0]+'\')">'+a[1]+'</button>').join('')+'</div><p class="hint">'+(D.inj.length?'Protecting: '+D.inj.join(', ')+'.':'No injuries. Full exercise list unlocked.')+'</p>';
 h+='<div class="nav">'+(st>0?'<button class="back g" onclick="step(-1)">Back</button>':'')+(st<STEPS.length-1?'<button class="go" onclick="step(1)">Next</button>':'<button class="go" onclick="start()">Build my plan</button>')+'</div>';
 $('app').innerHTML=h;
}
function step(n){st=Math.max(0,Math.min(STEPS.length-1,st+n));window.scrollTo(0,0);onboard();pg(n*28,0)}
function set(k,v){D[k]=v;D.days=Math.min(D.days,M[D.mod].maxd);T(onboard)}
function setn(k,v){D[k]=v;T(onboard)}
function inj(v){D.inj=v=='none'?[]:D.inj.includes(v)?D.inj.filter(a=>a!=v):D.inj.concat(v);T(onboard)}
function start(){S.p=Object.assign({},D);S.plan=build(S.p);S.logs=S.logs||{};save();day=0;open=null;st=0;draw();pg(0,12)}
function T(f){const rm=window.matchMedia&&matchMedia('(prefers-reduced-motion:reduce)').matches;if(document.startViewTransition&&!rm)document.startViewTransition(f);else f()}
function pg(dx,dy){const a=$('app');a.style.setProperty('--dx',dx+'px');a.style.setProperty('--dy',dy+'px');a.classList.remove('pg');void a.offsetWidth;a.classList.add('pg')}
function render(){T(draw)}
function draw(){
 if(view=='log'||view=='me'){hue(S.p?S.p.mod:D.mod);$('app').innerHTML=hdr()+tabs()+(view=='log'?logView():meView());return}
 if(!S.p){onboard();return}
 const p=S.p,m=M[p.mod],d=S.plan[day];hue(p.mod);
 let h=hdr()+tabs()
 +'<h2>'+m.n+' plan</h2><p class="mu">'+LV[p.lvl][0]+' · '+S.plan.length+(S.plan.length==1?' day':' days')+' a week · '+EQ[p.eq]+(p.inj.length?' · protecting: '+p.inj.join(', '):'')+'</p>'
 +'<div class="note g"><b>How to run it.</b> '+m.note+' Most sets end with 2–3 reps left in the tank (RIR).</div>'
 +'<div class="tabs">'+S.plan.map((x,i)=>'<button class="tab g'+(i==day?' on':'')+'" onclick="go('+i+')">Day '+(i+1)+'<small>'+x.name+'</small></button>').join('')+'</div>';
 d.exs.forEach((ex,i)=>{
  const q=E[ex.id],k=day+'-'+i,o=open==k,u=q.t=='h'?' sec':'';
  h+='<div class="ex g"><button aria-expanded="'+o+'" onclick="tog(\''+k+'\')"><strong>'+q.n+'</strong><span>'+ex.sets+' × '+ex.r[0]+'–'+ex.r[1]+u+' · RIR '+ex.q+' · Tempo '+ex.t+'</span></button>'+(o?card(ex,q,m):'')+'</div>';
 });
 $('app').innerHTML=h;
}
function card(ex,q,m){
 const L=S.logs[ex.id]||[],last=L[L.length-1],u=q.t=='h'?'sec':'reps';
 let h='<div class="card">'+demo(ex.id,q.n)+'<h4>Form cues</h4><ul>'+q.cues.map(c=>'<li>'+c+'</li>').join('')+'</ul>'
 +'<h4>Recruit more muscle</h4><div>'+q.in+' Control the way down and keep the target muscle in charge of the move.</div>'
 +'<h4>RIR</h4><div>Finish each set '+ex.q+' rep'+(ex.q=='3'?'s':'s')+' before failure. Stopping early keeps reps clean and recovery fast.</div>'
 +'<h4>Common mistakes</h4><ul>'+q.mi.map(c=>'<li>'+c+'</li>').join('')+'</ul>'
 +'<div class="why"><b>Why it matters for '+m.n.toLowerCase()+'.</b> '+q.w+' '+((m.lens&&m.lens[q.g])||m.d)+'</div>'
 +'<div class="sug">'+sug(ex.id,ex)+'</div>';
 if(last)h+='<p class="mu">Last time ('+last.d+'): '+last.s.map(s=>s[0]+' kg × '+s[1]).join(', ')+'</p>';
 for(let i=0;i<ex.sets;i++){
  const pv=last&&last.s[i]?last.s[i][0]:'';
  h+='<div class="set"><span class="mu">Set '+(i+1)+'</span><input id="w'+i+'" type="number" inputmode="decimal" placeholder="kg" value="'+pv+'" aria-label="Set '+(i+1)+' weight in kg"><input id="r'+i+'" type="number" inputmode="numeric" placeholder="'+u+'" aria-label="Set '+(i+1)+' '+u+'"></div>';
 }
 return h+'<button class="sm" onclick="log(\''+ex.id+'\','+ex.sets+')">Save sets</button></div>';
}

function hdr(){return'<div class="top"><span class="word"><img src="'+LOGO+'" alt=""><span>Limitless</span></span>'+(S.p?'<button class="link" onclick="redo()">Change setup</button>':'')+'</div>'}
function tabs(){return'<div class="seg g" style="margin:14px 0 4px">'+[['plan',S.p?'Plan':'Setup'],['log','Workout log'],['me','Profile']].map(x=>'<button class="'+(view==x[0]?'on':'')+'" onclick="vw(\''+x[0]+'\')">'+x[1]+'</button>').join('')+'</div>'}
function vw(v){view=v;open=null;draw();pg(0,10)}
function wk(n){wo=Math.min(0,wo+n);render()}
function dk(d){return d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate()}
function monday(o){const t=new Date();t.setHours(0,0,0,0);t.setDate(t.getDate()-((t.getDay()+6)%7)+o*7);return t}
function weekDays(o){const m=monday(o);return[0,1,2,3,4,5,6].map(i=>{const d=new Date(m);d.setDate(m.getDate()+i);return d})}
function cnt(o){const a=S.att||{};return weekDays(o).filter(d=>a[dk(d)]).length}
function tdy(k){S.att=S.att||{};if(S.att[k])delete S.att[k];else S.att[k]=1;save();render()}
function esc(t){return String(t).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]))}
function mondayOf(d){const t=new Date(d);t.setHours(0,0,0,0);t.setDate(t.getDate()-((t.getDay()+6)%7));return t}
const LVS=[['Rookie',0],['Regular',100],['Athlete',250],['Elite',500],['Limitless',1000]];
function calc(){
 const a=S.att||{},G=S.plan?S.plan.length:3,wc={};
 Object.keys(a).forEach(k=>{const p=k.split('-').map(Number),w=dk(mondayOf(new Date(p[0],p[1]-1,p[2])));wc[w]=(wc[w]||0)+1});
 const total=Object.keys(a).length,gw=Object.values(wc).filter(c=>c>=G).length,best=Math.max(0,...Object.values(wc));
 let w=monday(0),streak=0;if(!wc[dk(w)])w.setDate(w.getDate()-7);
 while(wc[dk(w)]){streak++;w.setDate(w.getDate()-7)}
 return{total,gw,best,streak,G,score:total*10+gw*20+streak*5}
}
function setName(v){S.name=v.slice(0,24);save();const n=S.name.trim();$('av').textContent=(n[0]||'?').toUpperCase();$('hi').textContent=n||'Set your name'}
function meView(){
 const c=calc(),n=(S.name||'').trim(),li=LVS.reduce((i,l,j)=>c.score>=l[1]?j:i,0),cur=LVS[li],nx=LVS[li+1],pct=nx?(c.score-cur[1])/(nx[1]-cur[1])*100:100;
 return'<h2>Profile</h2><div class="g" style="padding:16px;display:flex;gap:14px;align-items:center;margin-top:12px"><div class="av" id="av">'+esc((n[0]||'?').toUpperCase())+'</div><div style="min-width:0;flex:1"><div id="hi" style="font:600 20px Sora,sans-serif;overflow-wrap:anywhere">'+esc(n||'Set your name')+'</div><div class="mu">'+cur[0]+' level</div></div></div>'
 +'<label class="lab" for="nameIn">Your name</label><input id="nameIn" maxlength="24" placeholder="Type your name" value="'+esc(S.name||'')+'" oninput="setName(this.value)" autocomplete="name">'
 +'<div class="g" style="padding:20px;text-align:center;margin-top:20px"><div class="mu">Limitless score</div><div class="word" style="font-size:64px;line-height:1.15">'+c.score+'</div><div class="bar" style="margin-top:8px"><i style="width:'+pct+'%"></i></div><p class="hint" style="margin-bottom:0">'+(nx?(nx[1]-c.score)+' points to '+nx[0]:'Top level reached.')+'</p></div>'
 +'<span class="lab">Your stats</span><div class="g" style="padding:4px 16px">'
 +[['Workouts logged',c.total],['Weeks you hit your goal',c.gw],['Current week streak',c.streak],['Best week',c.best+' sessions']].map(x=>'<div class="row"><span>'+x[0]+'</span><b>'+x[1]+'</b></div>').join('')+'</div>'
 +'<p class="mu">How it is scored: 10 points per workout, +20 for each week you hit your goal ('+c.G+' sessions'+(S.plan?', from your plan':'')+'), and +5 for every week in your current streak. Log your days in the Workout log tab.</p>';
}
function logView(){
 const a=S.att||{},now=new Date();now.setHours(0,0,0,0);
 const ds=weekDays(wo),n=cnt(wo),pl=S.plan?S.plan.length:0,fm=d=>d.toLocaleDateString(undefined,{day:'numeric',month:'short'});
 const lab=wo==0?'This week':wo==-1?'Last week':fm(ds[0])+' – '+fm(ds[6]),of=pl?' / '+pl:'';
 return'<h2>Workout log</h2><p class="mu">Tap the days you trained. Tap again to undo.</p>'
 +'<div class="top" style="margin-top:14px"><button class="link" onclick="wk(-1)">‹ Prev</button><b>'+lab+'</b><button class="link" onclick="wk(1)"'+(wo>=0?' disabled':'')+'>Next ›</button></div>'
 +'<div class="wk">'+ds.map(d=>{const k=dk(d),on=a[k],fu=d>now;return'<button class="day g'+(on?' on':'')+(d.getTime()==now.getTime()?' today':'')+'"'+(fu?' disabled':'')+' aria-pressed="'+!!on+'" onclick="tdy(\''+k+'\')"><small>'+d.toLocaleDateString(undefined,{weekday:'short'})+'</small><b>'+d.getDate()+'</b><small>'+(on?'✓':'·')+'</small></button>'}).join('')+'</div>'
 +'<div class="g" style="padding:14px 16px"><b>'+(pl?n+' of '+pl+' planned sessions':n+(n==1?' session':' sessions'))+'</b>'
 +(pl?'<div class="bar" style="margin-top:8px"><i style="width:'+Math.min(100,n/pl*100)+'%"></i></div><p class="hint" style="margin-bottom:0">'+(n>=pl?'Weekly goal hit. Nice work.':(pl-n)+' more to reach this week\'s plan.')+'</p>':'<p class="hint" style="margin-bottom:0">Set up a plan to get a weekly goal.</p>')+'</div>'
 +'<span class="lab">Last 4 weeks</span><div class="g" style="padding:4px 16px">'+[0,1,2,3].map(i=>'<div class="row"><span>'+(i==0?'This week':i==1?'Last week':i+' weeks ago')+'</span><b>'+cnt(-i)+of+'</b></div>').join('')+'</div>'
 +'<p class="mu">Total workouts logged: '+Object.keys(a).length+'</p>';
}
function tog(k){open=open==k?null:k;render()}
function go(i){day=i;open=null;draw();pg(0,8)}
function redo(){S.p=null;st=0;view='plan';save();draw();pg(0,12)}
function log(id,n){
 const s=[];
 for(let i=0;i<n;i++){const w=parseFloat($('w'+i).value)||0,r=parseInt($('r'+i).value);if(r>0)s.push([w,r])}
 if(!s.length){alert('Enter reps for at least one set.');return}
 (S.logs[id]=S.logs[id]||[]).push({d:new Date().toLocaleDateString(),s});
 save();render();
}
draw();
(function(){const i=document.getElementById('intro'),a=document.getElementById('app');
 const rm=matchMedia('(prefers-reduced-motion:reduce)').matches,t=rm?900:3200;
 a.style.opacity=0;let done=0;
 function go(){if(done)return;done=1;i.classList.add('out');a.style.opacity='';a.classList.add('enter');setTimeout(()=>{i.remove();a.classList.remove('enter')},900)}
 setTimeout(go,t);i.addEventListener('click',go);})();
