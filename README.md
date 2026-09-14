# Advanced Fishing Bedrock Edition

The definitive port of Advanced Fishing (featured in RLCraft) to Minecraft Bedrock Edition.

## Credits
- Original Java Mod: NightKosh (Advanced Fishing) / Shivaxi (RLCraft)
- Bedrock Adaptation: Renderphoenix & devsuki

---

## Overview
Advanced Fishing overhauls the fishing system in Minecraft Bedrock Edition. It introduces 49 unique raw fish types, 6 cooked fish varieties, biome and dimension specific fishing mechanics, Nether lava fishing with the Blazing Fishing Pole, custom chumming zones, realistic fishing line physics, and complete furnace, smoker, and campfire cooking support.

---

## Key Features

### 1. Blazing Fishing Pole
- Engineered specifically for fishing in lava lakes and the Nether.
- Custom fire-proof hook entity with damage negation.
- Dynamic 1x1 micro-pixel connecting line simulating real catenary droop under gravity.
- Smooth parabolic comeback arc animation when reeling in.
- Safe catch delivery directly to player inventory or feet, ensuring caught items never burn in lava.

### 2. Biome and Dimension Exclusive Catching
Fish are distributed across 11 distinct environments based on dimension, block surroundings, and cave depth:
- The End Dimension: Ender Shad, Pearl Sardine, Chorus Koi.
- Nether and Lava Oceans: Nether Sturgeon, Magma Jellyfish, Obsidian Bream, Withered Crucian, Quartz Chub, Fungi Catfish, Flarefin Koi, Blaze Pike.
- Deep Cave Abyss (Y < -30): Diamond Koi, Emerald Salmon, Amethyst Catfish, Crystal Mullet, Charged Bullhead, Cave Trout.
- Mid Cave Depth (Y < 15): Iron Bass, Copper Minnow, Coal Crucian, Specular Snapper, Cave Trout.
- Jungle Waters: Piranha, Sparkling Eel, Mandarinfish, Catfish.
- Swamp and Mangrove: Swamp Plaice, Mud Tuna, Ruffe, Green Jellyfish.
- Desert and Savanna: Sandy Bass, Golden Koi, Sunfish.
- Snowy and Frozen Waters: Snowy Walleye, Frost Minnow, Glacier Anchovy.
- Deep Ocean: Abyssal Lurker, Sponge Eater, Angler Fish, Blue Jellyfish, Squid, Angelfish.
- Mushroom Fields: Red Shroomfin, Brown Shroomfin.
- Freshwater Lakes and Rivers: Pike, Catfish, Explosive Crucian, Magikarp.

### 3. Chum Bucket
- Craftable utility bucket that creates a 5-block radius chum zone lasting 5 minutes.
- Dramatically increases fish gathering rate and accelerates bite intervals.

### 4. Fish Resource Conversion
Fish can be crafted into their corresponding materials:
- Diamond Koi into Diamond
- Emerald Salmon into Emerald
- Obsidian Bream into Obsidian
- Quartz Chub into Nether Quartz
- Iron Bass into Iron
- Copper Minnow into Copper
- Coal Crucian into Coal
- Blaze Pike into Blaze Rod
- Pearl Sardine into Ender Pearl
- Explosive Crucian into Gunpowder
- Magma Jellyfish into Magma Cream
- Sponge Eater into Sponge
- And many more.

### 5. Brewing and Cooking
- Mandarinfish brewed with Awkward Potion creates a Bottle o' Enchanting.
- Smoker, Furnace, and Campfire support for all cookable fish species.

### 6. Special Consumption Effects
- Mandarinfish: Grants 5 Experience points.
- Cave Trout: Grants Resistance.
- Magma Jellyfish, Blaze Pike, Flarefin Koi: Sets player on fire briefly.
- Spookyfin: Inflicts Blindness.
- Withered Crucian: Inflicts Wither.
- Blue/Green Jellyfish, Cursed Koi: Inflicts Poison.

---

## Crafting Recipes

### Blazing Fishing Pole (Crafting Table)
- Row 1: Empty, Empty, Blaze Rod
- Row 2: Empty, Blaze Rod, String
- Row 3: Blaze Rod, Empty, Magma Cream

### Chum Bucket (Crafting Table)
- Row 1: Empty, Any Fish, Empty
- Row 2: Any Fish, Bucket, Any Fish
- Row 3: Empty, Any Fish, Empty

---

## Installation

1. Download the latest `AdvancedFishing.mcaddon` file from the Releases tab.
2. Open the file to automatically import both the Behavior Pack and Resource Pack into Minecraft Bedrock Edition.
3. Apply both packs to your world.
4. Enable the **Beta APIs** experimental toggle in your world settings to activate custom scripting.
