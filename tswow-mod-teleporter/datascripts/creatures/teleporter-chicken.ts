/*
World Teleporter: A TSwow Mod by NateB-n8b

Files Needed
datascripts/creature/teleporter-chicken.ts
livescripts/teleporter/teleporter-chicken.ts
Register the livescript in livescripts/livescripts.ts

Use
1. Update the {entry: #####} in the datascript file, for the NPC ID you want to use. 
2. Update the "TELEPORTER_NPC_ID = #####" in the livescript file
3. Run "build data" and "build livescripts"
*/

import { std } from "wow/wotlk";
std.SQL.creature_template.query({entry: 8376}).npcflag.set(1) 

