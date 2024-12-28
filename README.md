# World Teleporter: A TSwow Mod by NateB-n8b
Features the ability to teleport to all major cities, zones, dungeons, and raids for Classic, TBC, and Wotlk. 
The major cities take into account the players faction and they can only see those cities. 
If the player is flagged as a GM (.gm on) they will get access to GM Island. 
I also added the spawn cords for the Time Lost Proto Drake. 

## Files Needed
* datascripts/creature/teleporter-chicken.ts
* livescripts/teleporter/teleporter-chicken.ts
* Register the livescript in livescripts/livescripts.ts

## Notes: 
Any friendly or neutral NPC (Training Dummy in major cities...) can have the teleporter attached to it. Just need to set the npcflag to 1.
This is currently set to work with the Mechanical Chicken Pet from an Engineer. To update to another NPC:
* Update the {entry: #####} in the datascript file, for the NPC ID you want to use. 
* Update the "TELEPORTER_NPC_ID = #####" in the livescript file
* Run "build data" and "build livescripts"

## For More Info on TSwow
Refer to the Wiki: https://tswow.github.io/tswow-wiki/
