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

let TELEPORTER_NPC_ID = 8376  //Update this entity with the ID of the NPC to attach the teleport script to.

//Builds the Main Menu
function SendMainMenu(creature: TSCreature, player: TSPlayer) {
    player.GossipClearMenu();
    player.GossipMenuAddItem(GossipOptionIcon.CHAT, "Major Cities", 0, 2); //When a player clicks on Major Cities it will take them to case 2.  
    player.GossipMenuAddItem(GossipOptionIcon.CHAT, "Eastern Kingdoms", 0, 3); //When a player clicks on Eastern Kingdoms it will take them to case 3.  
    player.GossipMenuAddItem(GossipOptionIcon.CHAT, "Kalimdor", 0, 4);
    player.GossipMenuAddItem(GossipOptionIcon.CHAT, "Outlands", 0, 5);
    player.GossipMenuAddItem(GossipOptionIcon.CHAT, "Northrend", 0, 6);
    player.GossipMenuAddItem(GossipOptionIcon.CHAT, "Classic Dungeon", 0, 7);
    player.GossipMenuAddItem(GossipOptionIcon.CHAT, "Classic Raids", 0, 8);
    player.GossipMenuAddItem(GossipOptionIcon.CHAT, "TBC Dungeon", 0, 9);
    player.GossipMenuAddItem(GossipOptionIcon.CHAT, "TBC Raids", 0, 10);
    player.GossipMenuAddItem(GossipOptionIcon.CHAT, "WotLK Dungeon", 0, 11);
    player.GossipMenuAddItem(GossipOptionIcon.CHAT, "WoTLK Raids", 0, 12);
    if (player.IsGM()) //If the player is flagged as a GM (.gm on) they will get access to GM Island. 
        player.GossipMenuAddItem(GossipOptionIcon.CHAT, "GM Island", 0, 13);
    player.GossipMenuAddItem(GossipOptionIcon.CHAT, "TLPD", 0, 14);
    player.GossipMenuAddItem(GossipOptionIcon.CHAT, "Goodbye!", 0, 0);
    player.GossipSendTextMenu(creature, 'I can teleport you around the World.')
}

//Attaches the script to the NPC ID and builds the cases (menu pages) for on Gossip. 
export function RegisterTeleporterChicken(events: TSEvents) {
    events.Creature.OnGossipHello(TELEPORTER_NPC_ID, (creature, player, cancel) => {
        cancel.set(true)
        SendMainMenu(creature, player);
    });

    events.Creature.OnGossipSelect(TELEPORTER_NPC_ID, (creature, player, _, selection, cancel) => {
        cancel.set(true);
        switch (selection) {
            case 0: //Goodbye!
                player.GossipComplete(); 
                break;
            case 1: //Go Back...
                SendMainMenu(creature, player); 
                break;
            case 2: //Major Cites Menu
                player.GossipClearMenu();
                player.GossipSendMenu(1, creature);
                if (player.IsHorde()) { //Horde Faction 
                    player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Orgrimmar", 0, 15); //When a player clicks on Orgrimmar it will take them to case 15, which teleports them to Orgrimmar.  
                    player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Thunder Bluff", 0, 16); //When a player clicks on Thunder Bluff it will take them to case 16, which teleports them to TB. 
                    player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Undercity", 0, 17);
                    player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Silvermoon City", 0, 18);
                }
                else { //Alliance Faction
                    player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Stormwind", 0, 15);
                    player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Ironforge", 0, 16);
                    player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Darnassus", 0, 17);
                    player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Exodar", 0, 18);
                }
                //Both Factions
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Shattrath", 0, 19);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Dalaran", 0, 20);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Booty Bay", 0, 21);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Gurubashi Arena", 0, 22);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Go Back...", 0, 1);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Goodbye!", 0, 0);
                player.GossipSendTextMenu(creature, 'I can teleport you to Major Cities.')
                break;
            case 3: //Eastern Kingdoms Menu
                player.GossipClearMenu();
                player.GossipSendMenu(1, creature);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Alterac Mountains", 0, 23);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Arathi Highlands", 0, 24);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Badlands", 0, 25);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Blasted Lands", 0, 41);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Burning Steppes", 0, 26);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Deadwind Pass", 0, 185);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Dun Morogh", 0, 27);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Duskwood", 0, 28);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Eastern Plaguelands", 0, 29);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Elwynn Forest", 0, 30);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Eversong Woods", 0, 31);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Ghostlands", 0, 32);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Hillsbrad Foothills", 0, 33);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Isle of Quel'Danas", 0, 34);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Loch Modan", 0, 35);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Redridge Mountains", 0, 36);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Searing Gorge", 0, 37);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Silverpine Forest", 0, 38);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Stranglethorn Vale", 0, 39);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Swamp of Sorrows", 0, 40);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "The Hinterlands", 0, 42);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Tirisfal Glades", 0, 43);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Western Plaguelands", 0, 44);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Westfall", 0, 45);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Wetlands", 0, 46);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Go Back...", 0, 1);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Goodbye!", 0, 0);
                player.GossipSendTextMenu(creature, 'I can teleport you to Eastern Kingdoms.')
                break;
            case 4: //Kalimdor Menu
                player.GossipClearMenu();
                player.GossipSendMenu(1, creature);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Ashenvale Forest", 0, 47);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Azshara", 0, 48);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Azuremyst Isle", 0, 49);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Bloodmyst Isle", 0, 50);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Darkshore", 0, 51);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Desolace", 0, 52);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Durotar", 0, 53);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Dustwallow Marsh", 0, 54);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Felwood", 0, 55);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Feralas", 0, 56);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Moonglade", 0, 57);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Mulgore", 0, 58);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Silithus", 0, 59);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Stonetalon Mountains", 0, 60);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Tanaris", 0, 61);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Teldrassil", 0, 62);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "The Barrens", 0, 63);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Thousand Needles", 0, 64);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Un'Goro Crater", 0, 65);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Winterspring", 0, 66);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Go Back...", 0, 1);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Goodbye!", 0, 0);
                player.GossipSendTextMenu(creature, 'I can teleport you to Kalimdor.')
                break;
            case 5: //Outlands Menu
                player.GossipClearMenu();
                player.GossipSendMenu(1, creature);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Blade's Edge Mountains", 0, 67);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Hellfire Peninsula", 0, 68);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Nagrand", 0, 69);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Netherstorm", 0, 70);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Shadowmoon Valley", 0, 71);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Terokkar Forest", 0, 72);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Zangarmarsh", 0, 73);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Go Back...", 0, 1);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Goodbye!", 0, 0);
                player.GossipSendTextMenu(creature, 'I can teleport you to Outlands.')
                break;
            case 6: //Northrend Menu
                player.GossipClearMenu();
                player.GossipSendMenu(1, creature);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Borean Tundra", 0, 74);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Crystalsong Forest", 0, 75);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Dragonblight", 0, 76);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Grizzly Hills", 0, 77);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Howling Fjord", 0, 78);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Icecrown", 0, 79);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Sholazar Basin", 0, 80);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Storm Peaks", 0, 81);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Wintergrasp", 0, 82);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Zul'Drak", 0, 83);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Go Back...", 0, 1);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Goodbye!", 0, 0);
                player.GossipSendTextMenu(creature, 'I can teleport you to Northrend.')
                break;
            case 7: //Classic Dungeon Menu
                player.GossipClearMenu();
                player.GossipSendMenu(1, creature);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Blackfathom Deeps 22-32", 0, 84);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Blackrock Depths 52-60", 0, 85);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Blackrock Spire 55-60", 0, 86);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Dire Maul: East 54-58", 0, 87);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Dire Maul: North 58-60", 0, 88);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Dire Maul: West 58-60", 0, 89);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Gnomeregan 26-36", 0, 90);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Maraudon: Orange 45-49", 0, 91);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Maraudon: Princess 46-50", 0, 92);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Maraudon: Purple 42-46", 0, 93);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Ragefire Chasm 15-25", 0, 94);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Razorfen Downs 34-39", 0, 95);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Razorfen Kraul 25-30", 0, 96);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Scarlet Monastery 26-45", 0, 97);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Scholomance 55-60", 0, 98);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Shadowfang Keep 22-30", 0, 99);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Stratholme: Dead 48-58", 0, 100);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Stratholme: Live 48-58", 0, 101);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Sunken Temple 50-60", 0, 102);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "The Deadmines 15-25", 0, 103);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "The Stockade 22-32", 0, 104);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Uldaman 36-42", 0, 105);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Wailing Caverns 17-27", 0, 106);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Zul'Farrak 44-49", 0, 107);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Go Back...", 0, 1);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Goodbye!", 0, 0);
                player.GossipSendTextMenu(creature, 'I can teleport you to Classic Dungeon.')
                break;
            case 8: //Classic Raids Menu
                player.GossipClearMenu();
                player.GossipSendMenu(1, creature);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Blackwing Lair", 0, 108);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Molten Core", 0, 109);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Ruins of Ahn'Qiraj AQ20", 0, 110);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Temple of Ahn'Qiraj AQ40", 0, 111);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Zul'Gurub", 0, 112);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Go Back...", 0, 1);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Goodbye!", 0, 0);
                player.GossipSendTextMenu(creature, 'I can teleport you to Classic Raids.')
                break;
            case 9: //TBC Dungeon Menu
                player.GossipClearMenu();
                player.GossipSendMenu(1, creature);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Auchindoun: Auchenai Crypts 64-68", 0, 113);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Auchindoun: Mana-Tombs 63-67", 0, 114);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Auchindoun: Sethekk Halls 67-70", 0, 115);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Auchindoun: Shadow Labyrinth 69-70", 0, 116);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Caverns of Time: Black Morass 67-70", 0, 117);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Caverns of Time: Old Hillsbrad Foothills 66-70", 0, 118);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Caverns of Time: The Culling of Stratholme 80", 0, 119);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Coilfang Reservoir: The Slave Pens 62-66", 0, 120);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Coilfang Reservoir: The Streamvault 70", 0, 121);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Coilfang Reservoir: The Underbog 62-66", 0, 122);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Hellfire Citadel: Blood Furnace 60-63", 0, 123);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Hellfire Citadel: Hellfire Ramparts 59-62", 0, 124);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Hellfire Citadel: The Shattered Halls 68-70", 0, 125);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Magisters' Terrace 70", 0, 126);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Tempest Keep: The Arcatraz 70", 0, 127);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Tempest Keep: The Botanica 70", 0, 128);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Tempest Keep: The Mechanar 70", 0, 129);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Go Back...", 0, 1);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Goodbye!", 0, 0);
                player.GossipSendTextMenu(creature, 'I can teleport you to TBC Dungeon.')
                break;
            case 10: //TBC Raids Menu
                player.GossipClearMenu();
                player.GossipSendMenu(1, creature);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Black Temple", 0, 130);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Gruul's Lair", 0, 131);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Hyjal Summit", 0, 132);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Karazhan", 0, 133);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Magtheridon's Lair", 0, 134);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Serpentshrine Cavern", 0, 135);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Sunwell Plateau", 0, 136);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Tempest Keep", 0, 137);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Zul'Aman", 0, 138);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Go Back...", 0, 1);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Goodbye!", 0, 0);
                player.GossipSendTextMenu(creature, 'I can teleport you to TBC Raids.')
                break;
            case 11: //WotLK Dungeon Menu
                player.GossipClearMenu();
                player.GossipSendMenu(1, creature);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Ahn'Kahet 73-76", 0, 139);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Azjol-Nerub 72-75", 0, 140);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Drak'Tharon Keep 74-76", 0, 141);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Gundrak 76-78", 0, 142);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Halls of Lightning 78-80", 0, 143);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Halls of Stone 77-79", 0, 144);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Icecrown Citadel: Forge of Souls 80", 0, 145);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Icecrown Citadel: Halls of Reflection 80", 0, 146);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Icecrown Citadel: Pit of Saron 80", 0, 147);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "The Culling of Stratholme 78-80", 0, 148);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "The Nexus 69-72", 0, 149);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "The Oculus 77-80", 0, 150);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "The Violet Hold 75-77", 0, 151);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Trial of the Champion 80", 0, 152);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Utgarde Keep 69-72", 0, 153);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Utgarde Pinnacle 79-80", 0, 154);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Go Back...", 0, 1);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Goodbye!", 0, 0);
                player.GossipSendTextMenu(creature, 'I can teleport you to WotLK Dungeon.')
                break;
            case 12: //WoTLK Raids Menu
                player.GossipClearMenu();
                player.GossipSendMenu(1, creature);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Icecrown Citadel", 0, 155);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Naxxramas", 0, 156);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Onyxia's Lair", 0, 157);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "The Eye of Eternity", 0, 158);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "The Obsidian Sanctum", 0, 159);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Trial of the Crusader", 0, 160);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Ulduar", 0, 161);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Vault of Archavon", 0, 162);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Go Back...", 0, 1);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Goodbye!", 0, 0);
                player.GossipSendTextMenu(creature, 'I can teleport you to WoTLK Raids')
                break;
            case 13: //GM Island Menu
                player.GossipClearMenu();
                player.GossipSendMenu(1, creature);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "GM Island", 0, 163);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Go Back...", 0, 1);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Goodbye!", 0, 0);
                player.GossipSendTextMenu(creature, 'I can teleport you to GM Island.')
                break;
            case 14: //Time Lost Proto Drake Menu
                player.GossipClearMenu();
                player.GossipSendMenu(1, creature);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "TLPD Spawn 01", 0, 164);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "TLPD Spawn 02", 0, 165);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "TLPD Spawn 03", 0, 166);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "TLPD Spawn 04", 0, 167);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "TLPD Spawn 05", 0, 168);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "TLPD Spawn 06", 0, 169);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "TLPD Spawn 07", 0, 170);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "TLPD Spawn 08", 0, 171);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "TLPD Spawn 09", 0, 172);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "TLPD Spawn 10", 0, 173);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "TLPD Spawn 11", 0, 174);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "TLPD Spawn 12", 0, 175);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "TLPD Spawn 13", 0, 176);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "TLPD Spawn 14", 0, 177);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "TLPD Spawn 15", 0, 178);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "TLPD Spawn 16", 0, 179);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "TLPD Spawn 17", 0, 180);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "TLPD Spawn 18", 0, 181);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "TLPD Spawn 19", 0, 182);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "TLPD Spawn 20", 0, 183);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "TLPD Spawn 21", 0, 184);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Go Back...", 0, 1);
                player.GossipMenuAddItem(GossipOptionIcon.TAXI, "Goodbye!", 0, 0);
                player.GossipSendTextMenu(creature, 'Trying to find the Time Lost Proto Drake? I can help.')
                break;
            //Case 15 to 185 will teleport the player to the listed coords. 
            case 15:
                if (player.IsHorde()) {
                    player.Teleport(1, 1537.119, -4409.922, 11.544, 0.135); //Orgrimmar
                }
                else {
                    player.Teleport(0, -8837.034, 631.272, 94.218, 2.02); //Stormwind
                }
                break;
            case 16:
                if (player.IsHorde()) {
                    player.Teleport(1, -1265.198, 74.753, 127.768, 4.903); //Thunder Bluff
                }
                else {
                    player.Teleport(0, -4918.206, -957.964, 501.500, 5.373); //Ironforge
                }
                break;
            case 17:
                if (player.IsHorde()) {
                    player.Teleport(0, 1628.627, 240.284, -43.287, 3.139); //Undercity
                }
                else {
                    player.Teleport(1, 9876.293, 2492.847, 1315.875, 2.934); //Darnassus
                }
                break;
            case 18:
                if (player.IsHorde()) {
                    player.Teleport(530, 9728.094, -7444.110, 13.574, 3.523); //Silvermoon City
                }
                else {
                    player.Teleport(530, -3873.277, -11637.184, -137.693, 2.202); //Exodar
                }
                break;
            case 19:
                player.Teleport(530, -1880.723, 5379.316, -12.427, 1.21); //Shattrath
                break;
            case 20:
                player.Teleport(571, 5804.526, 625.283, 647.745, 1.574); //Dalaran
                break;
            case 21:
                player.Teleport(0, -14281.9, 552.564, 8.90422, 4.304); //Booty Bay
                break;
            case 22:
                player.Teleport(0, -13181.8, 339.356, 42.9805, 1.18013); //Gurubashi Arena
                break;
            case 23:
                player.Teleport(0, 275.049, -652.044, 130.296, 0.502032); //Alterac Mountains
                break;
            case 24:
                player.Teleport(0, -1581.45, -2704.06, 35.4168, 0.490373); //Arathi Highlands
                break;
            case 25:
                player.Teleport(0, -6782.56, -3128.14, 240.48, 5.65912); //Badlands
                break;
            case 26:
                player.Teleport(0, -7979.78, -2105.72, 127.919, 5.10148); //Burning Steppes
                break;
            case 27:
                player.Teleport(0, -5603.76, -482.704, 396.98, 5.23499); //Dun Morogh
                break;
            case 28:
                player.Teleport(0, -10531.7, -1281.91, 38.8647, 1.56959); //Duskwood
                break;
            case 29:
                player.Teleport(0, 2280.64, -5275.05, 82.0166, 4.7479); //Eastern Plaguelands
                break;
            case 30:
                player.Teleport(0, -9449.06, 64.8392, 56.3581, 3.07047); //Elwynn Forest
                break;
            case 31:
                player.Teleport(530, 9024.37, -6682.55, 16.8973, 3.14131); //Eversong Woods
                break;
            case 32:
                player.Teleport(530, 7595.73, -6819.6, 84.3718, 2.56561); //Ghostlands
                break;
            case 33:
                player.Teleport(0, -385.805, -787.954, 54.6655, 1.03926); //Hillsbrad Foothills
                break;
            case 34:
                player.Teleport(530, 12806.5, -6911.11, 41.1156, 2.22935); //Isle of Quel'Danas
                break;
            case 35:
                player.Teleport(0, -5405.85, -2894.15, 341.972, 5.48238); //Loch Modan
                break;
            case 36:
                player.Teleport(0, -9447.8, -2270.85, 71.8224, 0.283853); //Redridge Mountains
                break;
            case 37:
                player.Teleport(0, -6686.33, -1198.55, 240.027, 0.916887); //Searing Gorge
                break;
            case 38:
                player.Teleport(0, 505.126, 1504.63, 124.808, 1.77987); //Silverpine Forest
                break;
            case 39:
                player.Teleport(0, -11921.7, -59.544, 39.7262, 3.73574); //Stranglethorn Vale
                break;
            case 40:
                player.Teleport(0, -10368.6, -2731.3, 21.6537, 5.29238); //Swamp of Sorrows
                break;
            case 41:
                player.Teleport(0, -11184.7, -3019.31, 7.29238, 3.20542); //The Blasted Lands
                break;
            case 42:
                player.Teleport(0, 112.406, -3929.74, 136.358, 0.981903); //The Hinterlands
                break;
            case 43:
                player.Teleport(0, 2274.95, 323.918, 34.1137, 4.24367); //Tirisfal Glades
                break;
            case 44:
                player.Teleport(0, 1743.69, -1723.86, 59.6648, 5.23722); //Western Plaguelands
                break;
            case 45:
                player.Teleport(0, -10684.9, 1033.63, 32.5389, 6.07384); //Westfall
                break;
            case 46:
                player.Teleport(0, -3517.75, -913.401, 8.86625, 2.60705); //Wetlands
                break;
            case 47:
                player.Teleport(1, 1919.77, -2169.68, 94.6729, 6.14177); //Ashenvale Forest
                break;
            case 48:
                player.Teleport(1, 3117.12, -4387.97, 91.9059, 5.49897); //Azshara
                break;
            case 49:
                player.Teleport(530, -4192.62, -12576.7, 36.7598, 1.62813); //Azuremyst Isle
                break;
            case 50:
                player.Teleport(530, -2095.7, -11841.1, 51.1557, 6.19288); //Bloodmyst Isle
                break;
            case 51:
                player.Teleport(1, 6463.25, 683.986, 8.92792, 4.33534); //Darkshore
                break;
            case 52:
                player.Teleport(1, -656.056, 1510.12, 88.3746, 3.29553); //Desolace
                break;
            case 53:
                player.Teleport(1, 228.978, -4741.87, 10.1027, 0.416883); //Durotar
                break;
            case 54:
                player.Teleport(1, -3350.12, -3064.85, 33.0364, 5.12666); //Dustwallow Marsh
                break;
            case 55:
                player.Teleport(1, 3898.8, -1283.33, 220.519, 6.24307); //Felwood
                break;
            case 56:
                player.Teleport(1, -4808.31, 1040.51, 103.769, 2.90655); //Feralas
                break;
            case 57:
                player.Teleport(1, 7580.665, -2185.987, 475.257, 6.073); //Moonglade
                break;
            case 58:
                player.Teleport(1, -2473.87, -501.225, -9.42465, 0.6525); //Mulgore
                break;
            case 59:
                player.Teleport(1, -6815.25, 730.015, 40.9483, 2.39066); //Silithus
                break;
            case 60:
                player.Teleport(1, 1574.89, 1031.57, 137.442, 3.8013); //Stonetalon Mountains
                break;
            case 61:
                player.Teleport(1, -6940.91, -3725.7, 48.9381, 3.11174); //Tanaris
                break;
            case 62:
                player.Teleport(1, 9889.03, 915.869, 1307.43, 1.9336); //Teldrassil
                break;
            case 63:
                player.Teleport(1, -575.772, -2652.45, 95.6384, 0.006469); //The Barrens
                break;
            case 64:
                player.Teleport(1, -5375.53, -2509.2, -40.432, 2.41885); //Thousand Needles
                break;
            case 65:
                player.Teleport(1, -6291.55, -1158.62, -258.138, 0.457099); //Un'Goro Crater
                break;
            case 66:
                player.Teleport(1, 6658.57, -4553.48, 718.019, 5.18088); //Winterspring
                break;
            case 67:
                player.Teleport(530, 2029.75, 6232.07, 133.495, 1.30395); //Blade's Edge Mountains
                break;
            case 68:
                player.Teleport(530, -207.335, 2035.92, 96.464, 1.59676); //Hellfire Peninsula
                break;
            case 69:
                player.Teleport(530, -1610.85, 7733.62, -17.2773, 1.33522); //Nagrand
                break;
            case 70:
                player.Teleport(530, 3271.2, 3811.61, 143.153, 3.44101); //Netherstorm
                break;
            case 71:
                player.Teleport(530, -3681.01, 2350.76, 76.587, 4.25995); //Shadowmoon Valley
                break;
            case 72:
                player.Teleport(530, -2266.23, 4244.73, 1.47728, 3.68426); //Terokkar Forest
                break;
            case 73:
                player.Teleport(530, -220.297, 5378.58, 23.3223, 1.61718); //Zangarmarsh
                break;
            case 74:
                player.Teleport(571, 2954.24, 5379.13, 60.4538, 2.55544); //Borean Tundra
                break;
            case 75:
                player.Teleport(571, 5264.167, 154.079, 190.726, 6.193); //Crystalsong Forest
                break;
            case 76:
                player.Teleport(571, 2678.17, 891.826, 4.37494, 0.101121); //Dragonblight
                break;
            case 77:
                player.Teleport(571, 4017.35, -3403.85, 290.000, 5.35431); //Grizzly Hills
                break;
            case 78:
                player.Teleport(571, 682.848, -3978.3, 230.161, 1.54207); //Howling Fjord
                break;
            case 79:
                player.Teleport(571, 8339.546, 800.395, 542.114, 6.088); //Icecrown
                break;
            case 80:
                player.Teleport(571, 5614.67, 5818.86, -69.722, 3.60807); //Sholazar Basin
                break;
            case 81:
                player.Teleport(571, 6120.46, -1013.89, 408.39, 5.12322); //Storm Peaks
                break;
            case 82:
                player.Teleport(571, 4522.23, 2828.01, 389.975, 0.215009); //Wintergrasp
                break;
            case 83:
                player.Teleport(571, 5560.23, -3211.66, 371.709, 5.55055); //Zul'Drak
                break;
            case 84:
                player.Teleport(1, 4249.99, 740.102, -25.671, 1.34062); //Blackfathom Deeps 22-32
                break;
            case 85:
                player.Teleport(0, -7179.34, -921.212, 165.821, 5.09599); //Blackrock Depths 52-60
                break;
            case 86:
                player.Teleport(0, -7527.05, -1226.77, 285.732, 5.29626); //Blackrock Spire 55-60
                break;
            case 87:
                player.Teleport(1, -3771.535, 934.824, 161.026, 6.224); //Dire Maul: East 54-58
                break;
            case 88:
                player.Teleport(1, -3520.714, 1107.021, 161.026, 4.790); //Dire Maul: North 58-60
                break;
            case 89:
                player.Teleport(1, -3796.675, 1248.539, 160.256, 3.110); //Dire Maul: West 58-60
                break;
            case 90:
                player.Teleport(0, -5163.54, 925.423, 257.181, 1.57423); //Gnomeregan 26-36
                break;
            case 91:
                player.Teleport(1, -1461.464, 2616.518, 76.763, 3.116); //Maraudon: Orange 45-49
                break;
            case 92:
                player.Teleport(1, -1368.815, 2906.484, 73.571, 2.414); //Maraudon: Princess 46-50
                break;
            case 93:
                player.Teleport(1, -1187.245, 2881.876, 85.884, 4.997); //Maraudon: Purple 42-46
                break;
            case 94:
                player.Teleport(1, 1811.78, -4410.5, -18.4704, 5.20165); //Ragefire Chasm 15-25
                break;
            case 95:
                player.Teleport(1, -4657.3, -2519.35, 81.0529, 4.54808); //Razorfen Downs 34-39
                break;
            case 96:
                player.Teleport(1, -4470.28, -1677.77, 81.3925, 1.16302); //Razorfen Kraul 25-30
                break;
            case 97:
                player.Teleport(0, 2873.15, -764.523, 160.332, 5.10447); //Scarlet Monastery 26-45
                break;
            case 98:
                player.Teleport(0, 1273.203, -2575.032, 92.665, 1.944); //Scholomance 55-60
                break;
            case 99:
                player.Teleport(0, -234.675, 1561.63, 76.8921, 1.24031); //Shadowfang Keep 22-30
                break;
            case 100:
                player.Teleport(0, 3174.493, -4039.148, 105.487, 6.259); //Stratholme: Dead 48-58
                break;
            case 101:
                player.Teleport(0, 3352.92, -3379.03, 144.782, 6.25978); //Stratholme: Live 48-58
                break;
            case 102:
                player.Teleport(0, -10177.9, -3994.9, -111.239, 6.01885); //Sunken Temple 50-60
                break;
            case 103:
                player.Teleport(0, -11209.6, 1666.54, 24.6974, 1.42053); //The Deadmines 15-25
                break;
            case 104:
                player.Teleport(0, -8765.076, 846.200, 87.529, 0.704); //The Stockade 22-32
                break;
            case 105:
                player.Teleport(0, -6071.37, -2955.16, 209.782, 0.015708); //Uldaman 36-42
                break;
            case 106:
                player.Teleport(1, -731.607, -2218.39, 17.0281, 2.78486); //Wailing Caverns 17-27
                break;
            case 107:
                player.Teleport(1, -6815.082, -2889.510, 8.890, 6.143); //Zul'Farrak 44-49
                break;
            case 108:
                player.Teleport(229, 152.451, -474.881, 116.84, 0.001073); //Blackwing Lair
                break;
            case 109:
                player.Teleport(230, 1126.64, -459.94, -102.535, 3.46095); //Molten Core
                break;
            case 110:
                player.Teleport(1, -8409.82, 1499.06, 27.7179, 2.51868); //Ruins of Ahn'Qiraj AQ20
                break;
            case 111:
                player.Teleport(1, -8240.09, 1991.32, 129.072, 0.941603); //Temple of Ahn'Qiraj AQ40
                break;
            case 112:
                player.Teleport(0, -11916.7, -1215.72, 92.289, 4.72454); //Zul'Gurub
                break;
            case 113:
                player.Teleport(530, -3361.650, 5127.261, -101.395, 1.582); //Auchindoun: Auchenai Crypts 64-68
                break;
            case 114:
                player.Teleport(530, -3184.729, 4942.353, -101.396, 6.267); //Auchindoun: Mana-Tombs 63-67
                break;
            case 115:
                player.Teleport(530, -3362.274, 4764.360, -101.395, 4.729); //Auchindoun: Sethekk Halls 67-70
                break;
            case 116:
                player.Teleport(530, -3535.893, 4943.548, -101.395, 3.149); //Auchindoun: Shadow Labyrinth 69-70
                break;
            case 117:
                player.Teleport(1, -8763.657, -4191.641, -209.500, 1.919); //Caverns of Time: Black Morass 67-70
                break;
            case 118:
                player.Teleport(1, -8356.959, -4058.450, -208.146, 0.110); //Caverns of Time: Old Hillsbrad Foothills 66-70
                break;
            case 119:
                player.Teleport(1, -8754.807, -4446.179, -199.290, 4.536); //Caverns of Time: The Culling of Stratholme 80
                break;
            case 120:
                player.Teleport(530, 721.760, 7010.242, -73.219, 0.243); //Coilfang Reservoir: The Slave Pens 62-66
                break;
            case 121:
                player.Teleport(530, 817.317, 6931.775, -80.306, 1.515); //Coilfang Reservoir: The Streamvault 70
                break;
            case 122:
                player.Teleport(530, 781.797, 6759.358, -72.538, 4.713); //Coilfang Reservoir: The Underbog 62-66
                break;
            case 123:
                player.Teleport(530, -297.051, 3154.035, 31.601, 2.174); //Hellfire Citadel: Blood Furnace 60-63
                break;
            case 124:
                player.Teleport(530, -361.583, 3070.810, -15.100, 1.835); //Hellfire Citadel: Hellfire Ramparts 59-62
                break;
            case 125:
                player.Teleport(530, -308.077, 3063.864, -2.553, 1.687); //Hellfire Citadel: The Shattered Halls 68-70
                break;
            case 126:
                player.Teleport(530, 12884.6, -7317.69, 65.5023, 4.799); //Magisters' Terrace 70
                break;
            case 127:
                player.Teleport(530, 3309.040, 1340.748, 505.560, 5.086); //Tempest Keep: The Arcatraz 70
                break;
            case 128:
                player.Teleport(530, 3407.081, 1488.400, 182.836, 5.628); //Tempest Keep: The Botanica 70
                break;
            case 129:
                player.Teleport(530, 2870.433, 1553.026, 252.159, 3.835); //Tempest Keep: The Mechanar 70
                break;
            case 130:
                player.Teleport(530, -3649.92, 317.469, 35.2827, 2.94285); //Black Temple
                break;
            case 131:
                player.Teleport(530, 3530.06, 5104.08, 3.50861, 5.51117); //Gruul's Lair
                break;
            case 132:
                player.Teleport(1, -8177.89, -4181.23, -167.552, 0.913338); //Hyjal Summit
                break;
            case 133:
                player.Teleport(0, -11118.9, -2010.33, 47.0819, 0.649895); //Karazhan
                break;
            case 134:
                player.Teleport(530, -336.411, 3130.46, -102.928, 5.20322); //Magtheridon's Lair
                break;
            case 135:
                player.Teleport(530, 797.855, 6865.77, -65.4165, 0.005938); //Serpentshrine Cavern
                break;
            case 136:
                player.Teleport(530, 12574.1, -6774.81, 15.0904, 3.13788); //Sunwell Plateau
                break;
            case 137:
                player.Teleport(530, 3088.49, 1381.57, 184.863, 4.61973); //Tempest Keep
                break;
            case 138:
                player.Teleport(530, 6851.78, -7972.57, 179.242, 4.64691); //Zul'Aman
                break;
            case 139:
                player.Teleport(571, 3643.938, 2038.028, 1.787, 4.288); //Ahn'Kahet 73-76
                break;
            case 140:
                player.Teleport(571, 3679.019, 2164.673, 35.750, 2.383); //Azjol-Nerub 72-75
                break;
            case 141:
                player.Teleport(571, 4765.59, -2038.24, 229.363, 0.887627); //Drak'Tharon Keep 74-76
                break;
            case 142:
                player.Teleport(571, 6952.226, -4419.518, 450.077, 0.723); //Gundrak 76-78
                break;
            case 143:
                player.Teleport(571, 9136.52, -1311.81, 1066.29, 5.19113); //Halls of Lightning 78-80
                break;
            case 144:
                player.Teleport(571, 8922.12, -1009.16, 1039.56, 1.57044); //Halls of Stone 77-79
                break;
            case 145:
                player.Teleport(571, 5665.591, 2009.842, 798.042, 5.403); //Icecrown Citadel: Forge of Souls 80
                break;
            case 146:
                player.Teleport(571, 5631.168, 1994.876, 798.058, 4.563); //Icecrown Citadel: Halls of Reflection 80
                break;
            case 147:
                player.Teleport(571, 5600.581, 2017.732, 798.041, 3.820); //Icecrown Citadel: Pit of Saron 80
                break;
            case 148:
                player.Teleport(1, -8756.39, -4440.68, -199.489, 4.66289); //The Culling of Stratholme 78-80
                break;
            case 149:
                player.Teleport(571, 3891.781, 6985.168, 69.488, 0.005); //The Nexus 69-72
                break;
            case 150:
                player.Teleport(571, 3880.731, 6984.545, 106.320, 3.125); //The Oculus 77-80
                break;
            case 151:
                player.Teleport(571, 5693.08, 502.588, 652.672, 4.0229); //The Violet Hold 75-77
                break;
            case 152:
                player.Teleport(571, 8590.95, 791.792, 558.235, 3.13127); //Trial of the Champion 80
                break;
            case 153:
                player.Teleport(571, 1203.41, -4868.59, 41.2486, 0.283237); //Utgarde Keep 69-72
                break;
            case 154:
                player.Teleport(571, 1267.24, -4857.3, 215.764, 3.22768); //Utgarde Pinnacle 79-80
                break;
            case 155:
                player.Teleport(571, 5855.22, 2102.03, 635.991, 3.57899); //Icecrown Citadel
                break;
            case 156:
                player.Teleport(571, 3668.72, -1262.46, 243.622, 4.785); //Naxxramas
                break;
            case 157:
                player.Teleport(1, -4708.27, -3727.64, 54.5589, 3.72786); //Onyxia's Lair
                break;
            case 158:
                player.Teleport(571, 3784.17, 7028.84, 161.258, 5.79993); //The Eye of Eternity
                break;
            case 159:
                player.Teleport(571, 3472.43, 264.923, -120.146, 3.27923); //The Obsidian Sanctum
                break;
            case 160:
                player.Teleport(571, 8515.61, 714.153, 558.248, 1.57753); //Trial of the Crusader
                break;
            case 161:
                player.Teleport(571, 9222.88, -1113.59, 1216.12, 6.27549); //Ulduar
                break;
            case 162:
                player.Teleport(571, 5453.72, 2840.79, 421.28, 0.01); //Vault of Archavon
                break;
            case 163:
                player.Teleport(1, 16222.333, 16245.148, 11.487, 1.489); //GM Island
                break;
            case 164:
                player.Teleport(571, 6445.33, -800.117, 526.502, 4.3134); //TLPD Spawn 01
                break;
            case 165:
                player.Teleport(571, 6552.59, -844.691, 620.081, 4.227); //TLPD Spawn 02
                break;
            case 166:
                player.Teleport(571, 6654.52, -755.374, 737.229, 3.42982); //TLPD Spawn 03
                break;
            case 167:
                player.Teleport(571, 6877.59, -778.318, 731.215, 3.17849); //TLPD Spawn 04
                break;
            case 168:
                player.Teleport(571, 6820.435, -1806.107, 942.668, 1.304); //TLPD Spawn 05
                break;
            case 169:
                player.Teleport(571, 6916.00, -1802.03, 888.007, 1.11367); //TLPD Spawn 06
                break;
            case 170:
                player.Teleport(571, 6995.21, -2036.01, 864.586, 5.88056); //TLPD Spawn 07
                break;
            case 171:
                player.Teleport(571, 7057.15, -702.69, 730.971, 1.37522); //TLPD Spawn 08
                break;
            case 172:
                player.Teleport(571, 7060.99, -413.62, 779.643, 4.60036); //TLPD Spawn 09
                break;
            case 173:
                player.Teleport(571, 7078.59, -72.8263, 827.036, 5.12851); //TLPD Spawn 10
                break;
            case 174:
                player.Teleport(571, 7150.92, -1505.03, 929.686, 0.646354); //TLPD Spawn 11
                break;
            case 175:
                player.Teleport(571, 7378.74, -115.327, 784.155, 2.76839); //TLPD Spawn 12
                break;
            case 176:
                player.Teleport(571, 7400.46, -1217.21, 903.28, 5.16397); //TLPD Spawn 13
                break;
            case 177:
                player.Teleport(571, 7441.74, -1186.13, 904.435, 4.47675); //TLPD Spawn 14
                break;
            case 178:
                player.Teleport(571, 7462.23, -855.712, 913.567, 4.92442); //TLPD Spawn 15
                break;
            case 179:
                player.Teleport(571, 7536.32, -104.848, 838.645, 2.8705); //TLPD Spawn 16
                break;
            case 180:
                player.Teleport(571, 7939.88, -3033.68, 1124.32, 5.09516); //TLPD Spawn 17
                break;
            case 181:
                player.Teleport(571, 8139.71, -2463.51, 1195.28, 4.95377); //TLPD Spawn 18
                break;
            case 182:
                player.Teleport(571, 8155.4, -3035.6, 1315.86, 2.68005); //TLPD Spawn 19
                break;
            case 183:
                player.Teleport(571, 8719.87, -993.737, 941.403, 3.0823); //TLPD Spawn 20
                break;
            case 184:
                player.Teleport(571, 8748.57, -1262.64, 1002.15, 2.95662); //TLPD Spawn 21
                break;
            case 185:
                player.Teleport(0, -10449.165039, -1858.226562, 105.047386, 4.868386); //Deadwind Pass
                break;
        }
    })
}