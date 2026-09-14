/**
 * Advanced Fishing Bedrock Add-on Script
 * Ported from NightKosh's Advanced Fishing Java Mod
 * Author: devsuki
 */

import { world, system, ItemStack } from "@minecraft/server";

// ==========================================
// FISH & LOOT POOLS
// ==========================================

const NETHER_LAVA_FISH = [
    { id: "advanced_fishing:nether_sturgeon", name: "Nether Sturgeon", weight: 20 },
    { id: "advanced_fishing:magma_jellyfish", name: "Magma Jellyfish", weight: 20 },
    { id: "advanced_fishing:obsidian_bream", name: "Obsidian Bream", weight: 18 },
    { id: "advanced_fishing:withered_crucian", name: "Withered Crucian", weight: 15 },
    { id: "advanced_fishing:quartz_chub", name: "Quartz Chub", weight: 15 },
    { id: "advanced_fishing:fungi_catfish", name: "Fungi Catfish", weight: 12 },
    { id: "advanced_fishing:flarefin_koi", name: "Flarefin Koi", weight: 8 },
    { id: "advanced_fishing:blaze_pike", name: "Blaze Pike", weight: 8 },
    { id: "minecraft:blaze_rod", name: "Blaze Rod", weight: 6 },
    { id: "minecraft:magma_cream", name: "Magma Cream", weight: 6 },
    { id: "minecraft:netherite_scrap", name: "Netherite Scrap", weight: 1 }
];

const END_DIMENSION_FISH = [
    { id: "advanced_fishing:ender_shad", name: "Ender Shad", weight: 35 },
    { id: "advanced_fishing:pearl_sardine", name: "Pearl Sardine", weight: 30 },
    { id: "advanced_fishing:chorus_koi", name: "Chorus Koi", weight: 20 },
    { id: "minecraft:ender_pearl", name: "Ender Pearl", weight: 10 },
    { id: "minecraft:chorus_fruit", name: "Chorus Fruit", weight: 5 }
];

const DEEP_CAVE_FISH = [
    { id: "advanced_fishing:diamond_koi", name: "Diamond Koi", weight: 6 },
    { id: "advanced_fishing:emerald_salmon", name: "Emerald Salmon", weight: 8 },
    { id: "advanced_fishing:amethyst_catfish", name: "Amethyst Catfish", weight: 10 },
    { id: "advanced_fishing:crystal_mullet", name: "Crystal Mullet", weight: 16 },
    { id: "advanced_fishing:charged_bullhead", name: "Charged Bullhead", weight: 15 },
    { id: "advanced_fishing:cave_trout", name: "Cave Trout", weight: 15 },
    { id: "advanced_fishing:specular_snapper", name: "Specular Snapper", weight: 15 },
    { id: "advanced_fishing:iron_bass", name: "Iron Bass", weight: 15 }
];

const MID_CAVE_FISH = [
    { id: "advanced_fishing:iron_bass", name: "Iron Bass", weight: 25 },
    { id: "advanced_fishing:copper_minnow", name: "Copper Minnow", weight: 25 },
    { id: "advanced_fishing:coal_crucian", name: "Coal Crucian", weight: 25 },
    { id: "advanced_fishing:specular_snapper", name: "Specular Snapper", weight: 15 },
    { id: "advanced_fishing:cave_trout", name: "Cave Trout", weight: 10 }
];

const JUNGLE_FISH = [
    { id: "advanced_fishing:piranha", name: "Piranha", weight: 35 },
    { id: "advanced_fishing:sparkling_eel", name: "Sparkling Eel", weight: 25 },
    { id: "advanced_fishing:mandarinfish", name: "Mandarinfish", weight: 20 },
    { id: "advanced_fishing:catfish", name: "Catfish", weight: 20 }
];

const SWAMP_FISH = [
    { id: "advanced_fishing:swamp_plaice", name: "Swamp Plaice", weight: 35 },
    { id: "advanced_fishing:mud_tuna", name: "Mud Tuna", weight: 30 },
    { id: "advanced_fishing:ruffe", name: "Ruffe", weight: 25 },
    { id: "advanced_fishing:green_jellyfish", name: "Green Jellyfish", weight: 10 }
];

const SANDY_FISH = [
    { id: "advanced_fishing:sandy_bass", name: "Sandy Bass", weight: 45 },
    { id: "advanced_fishing:golden_koi", name: "Golden Koi", weight: 35 },
    { id: "advanced_fishing:sunfish", name: "Sunfish", weight: 20 }
];

const SNOWY_FISH = [
    { id: "advanced_fishing:snowy_walleye", name: "Snowy Walleye", weight: 45 },
    { id: "advanced_fishing:frost_minnow", name: "Frost Minnow", weight: 35 },
    { id: "advanced_fishing:glacier_anchovy", name: "Glacier Anchovy", weight: 20 }
];

const OCEAN_FISH = [
    { id: "advanced_fishing:angelfish", name: "Angelfish", weight: 25 },
    { id: "advanced_fishing:squid", name: "Squid", weight: 20 },
    { id: "advanced_fishing:blue_jellyfish", name: "Blue Jellyfish", weight: 20 },
    { id: "advanced_fishing:abyssal_lurker", name: "Abyssal Lurker", weight: 15 },
    { id: "advanced_fishing:angler_fish", name: "Angler Fish", weight: 12 },
    { id: "advanced_fishing:sponge_eater", name: "Sponge Eater", weight: 8 }
];

const MUSHROOM_FISH = [
    { id: "advanced_fishing:red_shroomfin", name: "Red Shroomfin", weight: 50 },
    { id: "advanced_fishing:brown_shroomfin", name: "Brown Shroomfin", weight: 50 }
];

const CURSED_FISH = [
    { id: "advanced_fishing:bone_fish", name: "Bone Fish", weight: 35 },
    { id: "advanced_fishing:spookyfin", name: "Spookyfin", weight: 30 },
    { id: "advanced_fishing:cursed_koi", name: "Cursed Koi", weight: 20 },
    { id: "advanced_fishing:green_jellyfish", name: "Green Jellyfish", weight: 15 }
];

const GENERAL_WATER_FISH = [
    { id: "advanced_fishing:pike", name: "Pike", weight: 25 },
    { id: "advanced_fishing:catfish", name: "Catfish", weight: 22 },
    { id: "advanced_fishing:ruffe", name: "Ruffe", weight: 20 },
    { id: "advanced_fishing:explosive_crucian", name: "Explosive Crucian", weight: 12 },
    { id: "advanced_fishing:blue_jellyfish", name: "Blue Jellyfish", weight: 10 },
    { id: "advanced_fishing:magikarp", name: "Magikarp", weight: 2 }
];

function pickRandomLoot(pool) {
    const totalWeight = pool.reduce((acc, item) => acc + item.weight, 0);
    let rand = Math.random() * totalWeight;
    for (const item of pool) {
        if (rand < item.weight) {
            return item;
        }
        rand -= item.weight;
    }
    return pool[0];
}

/**
 * Intelligent environmental & biome sampler
 */
function getBiomedCatchPool(dimension, pos, isLava) {
    if (dimension.id === "minecraft:the_end") {
        return END_DIMENSION_FISH;
    }
    if (isLava || dimension.id === "minecraft:nether") {
        return NETHER_LAVA_FISH;
    }
    if (pos.y < -30) {
        return DEEP_CAVE_FISH;
    }
    if (pos.y < 15) {
        return MID_CAVE_FISH;
    }

    // Environmental block scanner around fishing spot
    const bx = Math.floor(pos.x);
    const by = Math.floor(pos.y);
    const bz = Math.floor(pos.z);

    let sandScore = 0;
    let snowScore = 0;
    let swampScore = 0;
    let jungleScore = 0;
    let shroomScore = 0;
    let oceanDepth = 0;

    for (let dx = -3; dx <= 3; dx += 2) {
        for (let dz = -3; dz <= 3; dz += 2) {
            const blk = dimension.getBlock({ x: bx + dx, y: by, z: bz + dz });
            if (blk) {
                const id = blk.typeId;
                if (id.includes("sand") || id.includes("terracotta") || id.includes("badlands")) sandScore++;
                if (id.includes("snow") || id.includes("ice")) snowScore++;
                if (id.includes("mud") || id.includes("mangrove") || id.includes("lily")) swampScore++;
                if (id.includes("jungle") || id.includes("bamboo") || id.includes("vine")) jungleScore++;
                if (id.includes("mycelium") || id.includes("mushroom")) shroomScore++;
            }
        }
    }

    // Check water depth underneath for ocean fish
    for (let dy = 1; dy <= 8; dy++) {
        const blk = dimension.getBlock({ x: bx, y: by - dy, z: bz });
        if (blk && blk.typeId.includes("water")) oceanDepth++;
    }

    if (shroomScore >= 2) return MUSHROOM_FISH;
    if (jungleScore >= 2) return JUNGLE_FISH;
    if (swampScore >= 2) return SWAMP_FISH;
    if (snowScore >= 2) return SNOWY_FISH;
    if (sandScore >= 2) return SANDY_FISH;
    if (oceanDepth >= 5) return OCEAN_FISH;

    return GENERAL_WATER_FISH;
}

// Active Chum Zones: array of { dimensionId, x, y, z, expireTick }
const activeChumZones = [];
// Map: playerId -> bobber fishing session state
const activeBobbers = new Map();

/**
 * Checks if the bobber is currently making contact with a liquid block (water or lava).
 * Strictly requires the entity location to be at or inside the liquid surface,
 * avoiding premature detection while flying in mid-air.
 */
function checkLiquidContact(dimension, loc) {
    const bx = Math.floor(loc.x);
    const by = Math.floor(loc.y);
    const bz = Math.floor(loc.z);

    const blkAt = dimension.getBlock({ x: bx, y: by, z: bz });
    const blkUnder = dimension.getBlock({ x: bx, y: Math.floor(loc.y - 0.25), z: bz });

    for (const blk of [blkAt, blkUnder]) {
        if (blk) {
            const id = blk.typeId;
            if (id.includes("lava")) {
                return { inLiquid: true, isLava: true, surfaceY: blk.y + 0.88 };
            }
            if (id.includes("water")) {
                return { inLiquid: true, isLava: false, surfaceY: blk.y + 0.88 };
            }
        }
    }

    return { inLiquid: false, isLava: false, surfaceY: null };
}

// ==========================================
// ITEM USE LISTENER
// ==========================================

world.afterEvents.itemUse.subscribe((event) => {
    const player = event.source;
    const item = event.itemStack;

    if (!player || !item) return;

    // 1. CHUM BUCKET
    if (item.typeId === "advanced_fishing:chum_bucket") {
        handleChumBucketUse(player, item);
        return;
    }

    // 2. BLAZING FISHING POLE
    if (item.typeId === "advanced_fishing:blazing_fishing_pole") {
        handleBlazingPoleUse(player, item);
        return;
    }
});

function handleChumBucketUse(player, item) {
    const headLoc = player.getHeadLocation();
    const viewDir = player.getViewDirection();
    const targetPos = {
        x: headLoc.x + viewDir.x * 5,
        y: headLoc.y + viewDir.y * 5,
        z: headLoc.z + viewDir.z * 5
    };

    activeChumZones.push({
        dimensionId: player.dimension.id,
        x: targetPos.x,
        y: targetPos.y,
        z: targetPos.z,
        expireTick: system.currentTick + 6000
    });

    try {
        player.dimension.playSound("entity.fishing_bobber.splash", targetPos, { volume: 1.0, pitch: 0.8 });
        for (let i = 0; i < 10; i++) {
            player.dimension.spawnParticle("minecraft:water_splash_particle", {
                x: targetPos.x + (Math.random() - 0.5) * 2,
                y: targetPos.y,
                z: targetPos.z + (Math.random() - 0.5) * 2
            });
        }
    } catch (e) {}

    player.onScreenDisplay.setActionBar("§a[Chum Bucket] Chum dispersed! Fish gather rapidly!§r");

    const equippable = player.getComponent("minecraft:equippable");
    if (equippable) {
        const dur = item.getComponent("minecraft:durability");
        if (dur && dur.damage + 1 >= dur.maxDurability) {
            equippable.setEquipment("Mainhand", new ItemStack("minecraft:bucket", 1));
            player.dimension.playSound("random.break", player.location);
        } else if (dur) {
            dur.damage += 1;
            equippable.setEquipment("Mainhand", item);
        }
    }
}

function handleBlazingPoleUse(player, item) {
    const existing = activeBobbers.get(player.id);

    // If ALREADY has an active bobber -> REEL IN
    if (existing && existing.bobber && existing.bobber.isValid()) {
        if (existing.state !== "reeling") {
            startReelIn(player, existing, item);
        }
        return;
    }

    if (existing) {
        activeBobbers.delete(player.id);
    }

    // CAST BOBBER
    castBobber(player);
}

function castBobber(player) {
    const head = player.getHeadLocation();
    const view = player.getViewDirection();
    const spawnLoc = {
        x: head.x + view.x * 0.9,
        y: head.y + view.y * 0.9,
        z: head.z + view.z * 0.9
    };

    try {
        const bobber = player.dimension.spawnEntity("advanced_fishing:blazing_bobber", spawnLoc);
        
        // Realistic high-speed long-distance fishing cast (1.75 force + 0.38 vertical arc)
        const castForce = 1.75;
        const vertBoost = 0.38;
        bobber.applyImpulse({
            x: view.x * castForce,
            y: view.y * castForce + vertBoost,
            z: view.z * castForce
        });

        player.dimension.playSound("entity.fishing_bobber.throw", player.location, { volume: 1.0, pitch: 1.0 });
        player.onScreenDisplay.setActionBar("§6[Blazing Rod] Cast!§r");

        activeBobbers.set(player.id, {
            bobber: bobber,
            player: player,
            state: "flying",
            flyTicks: 0,
            timer: 0,
            biteExpireTick: 0,
            isLava: false,
            lockedSurfaceY: null,
            dimId: player.dimension.id,
            caughtLoot: null,
            reelStart: null,
            reelStep: 0,
            reelTotalSteps: 10,
            lastPos: { x: spawnLoc.x, y: spawnLoc.y, z: spawnLoc.z }
        });
    } catch (e) {
        player.sendMessage("§cError casting bobber: " + e + "§r");
    }
}

/**
 * Initiates the reel-in sequence with a smooth physical arc comeback animation
 */
function startReelIn(player, data, rodItem) {
    const bobber = data.bobber;
    const bPos = bobber.location;
    const pPos = player.location;

    player.dimension.playSound("entity.fishing_bobber.retrieve", player.location, { volume: 1.0, pitch: 1.1 });

    let chosenLoot = null;
    if (data.state === "biting") {
        const pool = getBiomedCatchPool(player.dimension, bPos, data.isLava);
        chosenLoot = pickRandomLoot(pool);
    }

    const dist = Math.sqrt((bPos.x - pPos.x) ** 2 + (bPos.y - pPos.y) ** 2 + (bPos.z - pPos.z) ** 2);

    data.state = "reeling";
    data.caughtLoot = chosenLoot;
    data.reelStart = { x: bPos.x, y: bPos.y, z: bPos.z };
    data.reelStep = 0;
    // Duration: 7 to 14 ticks based on distance
    data.reelTotalSteps = Math.min(14, Math.max(7, Math.floor(dist / 2.2)));
    data.rodItem = rodItem;

    if (data.isLava && chosenLoot) {
        player.dimension.playSound("bucket.fill_lava", bPos, { volume: 0.9, pitch: 1.3 });
    }
}

function finishReelIn(player, data) {
    const bobber = data.bobber;
    const pPos = player.location;
    const chosenLoot = data.caughtLoot;

    if (chosenLoot) {
        // Safe delivery directly to inventory (or player feet if full)
        // This guarantees catches NEVER incinerate in lava!
        const inv = player.getComponent("minecraft:inventory");
        let addedToInv = false;
        if (inv && inv.container) {
            const leftover = inv.container.addItem(new ItemStack(chosenLoot.id, 1));
            addedToInv = !leftover;
        }

        if (!addedToInv) {
            player.dimension.spawnItem(new ItemStack(chosenLoot.id, 1), {
                x: pPos.x,
                y: pPos.y + 0.5,
                z: pPos.z
            });
        }

        player.dimension.playSound("random.orb", player.location, { volume: 1.0, pitch: 1.4 });
        player.dimension.playSound("random.pop", player.location, { volume: 0.8, pitch: 1.6 });
        player.addExperience(Math.floor(Math.random() * 3) + 2);

        if (data.isLava) {
            player.onScreenDisplay.setActionBar(`§6🔥 LAVA CATCH: §e${chosenLoot.name}!§r`);
        } else {
            player.onScreenDisplay.setActionBar(`§a✔ Caught: §e${chosenLoot.name}!§r`);
        }

        // Damage rod
        if (data.rodItem) {
            damageEquippedRod(player, data.rodItem);
        }
    } else {
        player.dimension.playSound("random.pop", player.location, { volume: 0.6, pitch: 1.2 });
        player.onScreenDisplay.setActionBar("§7Reeled in.§r");
    }

    try {
        bobber.remove();
    } catch (e) {}
    activeBobbers.delete(player.id);
}

function damageEquippedRod(player, rodItem) {
    const equippable = player.getComponent("minecraft:equippable");
    if (!equippable) return;

    const dur = rodItem.getComponent("minecraft:durability");
    if (!dur) return;

    if (dur.damage + 1 >= dur.maxDurability) {
        equippable.setEquipment("Mainhand", undefined);
        player.dimension.playSound("random.break", player.location);
    } else {
        dur.damage += 1;
        equippable.setEquipment("Mainhand", rodItem);
    }
}

// ==========================================
// TICKER: PHYSICS, COMEBACK ANIMATION & CONNECTED LINE
// ==========================================

system.runInterval(() => {
    const currentTick = system.currentTick;

    for (const [playerId, data] of activeBobbers.entries()) {
        const player = data.player;
        const bobber = data.bobber;

        if (!player || !player.isValid() || !bobber || !bobber.isValid()) {
            if (bobber && bobber.isValid()) {
                try { bobber.remove(); } catch (e) {}
            }
            activeBobbers.delete(playerId);
            continue;
        }

        // Auto-retrieve if player switches off rod
        const equippable = player.getComponent("minecraft:equippable");
        const mainHandItem = equippable?.getEquipment("Mainhand");
        if (!mainHandItem || mainHandItem.typeId !== "advanced_fishing:blazing_fishing_pole") {
            try { bobber.remove(); } catch (e) {}
            activeBobbers.delete(playerId);
            player.onScreenDisplay.setActionBar("§7Retrieved line.§r");
            continue;
        }

        const bPos = bobber.location;
        const head = player.getHeadLocation();
        const view = player.getViewDirection();

        // Calculate Rod Wand Tip held in player's right hand (aligned with the tip guide in first-person)
        const hDist = Math.sqrt(view.x * view.x + view.z * view.z) || 1;
        const rightX = -view.z / hDist;
        const rightZ = view.x / hDist;

        const rodTip = {
            x: head.x + view.x * 0.52 + rightX * 0.35,
            y: head.y - 0.04 + view.y * 0.36,
            z: head.z + view.z * 0.52 + rightZ * 0.35
        };

        const hookTop = {
            x: bPos.x,
            y: bPos.y + 0.22,
            z: bPos.z
        };

        // Distance check
        const distSq = (rodTip.x - hookTop.x) ** 2 + (rodTip.y - hookTop.y) ** 2 + (rodTip.z - hookTop.z) ** 2;
        const dist = Math.sqrt(distSq);

        if (dist > 52) {
            player.onScreenDisplay.setActionBar("§cLine snapped! (Too far)§r");
            try { bobber.remove(); } catch (e) {}
            activeBobbers.delete(playerId);
            continue;
        }

        // Draw connecting string between rod and hook EVERY tick
        drawConnectedString(player.dimension, rodTip, hookTop, dist, data.isLava);

        // ======================================
        // STATE 1: REELING (COMEBACK ANIMATION)
        // ======================================
        if (data.state === "reeling") {
            data.reelStep++;
            const t = Math.min(1.0, data.reelStep / data.reelTotalSteps);

            const dest = {
                x: head.x + view.x * 0.45,
                y: head.y - 0.3,
                z: head.z + view.z * 0.45
            };

            // Interpolate position along parabolic arc towards player
            const curX = data.reelStart.x + (dest.x - data.reelStart.x) * t;
            const curZ = data.reelStart.z + (dest.z - data.reelStart.z) * t;
            const arcHeight = Math.sin(t * Math.PI) * Math.min(3.6, Math.max(1.0, dist * 0.22));
            const curY = data.reelStart.y + (dest.y - data.reelStart.y) * t + arcHeight;

            try {
                bobber.clearVelocity();
                bobber.teleport({ x: curX, y: curY, z: curZ });
            } catch (e) {}

            // Trail particles following the flying hook/catch
            if (data.caughtLoot) {
                if (data.isLava) {
                    player.dimension.spawnParticle("minecraft:flame_particle", { x: curX, y: curY + 0.1, z: curZ });
                    if (currentTick % 2 === 0) {
                        player.dimension.spawnParticle("minecraft:lava_particle", { x: curX, y: curY, z: curZ });
                    }
                } else {
                    player.dimension.spawnParticle("minecraft:water_splash_particle", { x: curX, y: curY + 0.1, z: curZ });
                    player.dimension.spawnParticle("minecraft:bubble_particle", { x: curX, y: curY, z: curZ });
                }
            }

            if (t >= 1.0 || dist < 1.3) {
                finishReelIn(player, data);
            }
            continue;
        }

        // ======================================
        // STATE 2: FLYING (BALLISTIC CAST)
        // ======================================
        if (data.state === "flying") {
            data.flyTicks++;

            // Allow at least 4 ticks of free flight before checking liquid contact
            if (data.flyTicks >= 4) {
                const contact = checkLiquidContact(player.dimension, bPos);
                if (contact.inLiquid) {
                    data.state = "floating";
                    data.isLava = contact.isLava;
                    data.lockedSurfaceY = contact.surfaceY;

                    const hasChum = isNearChum(data.dimId, bPos);
                    const waitTicks = hasChum ? (Math.random() * 40 + 40) : (Math.random() * 80 + 100);
                    data.timer = Math.floor(waitTicks);

                    if (data.isLava) {
                        player.dimension.playSound("random.fizz", bPos, { volume: 1.0, pitch: 0.9 });
                        player.dimension.spawnParticle("minecraft:lava_particle", bPos);
                        player.dimension.spawnParticle("minecraft:flame_particle", { x: bPos.x, y: bPos.y + 0.3, z: bPos.z });
                    } else {
                        player.dimension.playSound("entity.fishing_bobber.splash", bPos, { volume: 1.0, pitch: 1.0 });
                        player.dimension.spawnParticle("minecraft:water_splash_particle", bPos);
                    }
                }
            }
            data.lastPos = { x: bPos.x, y: bPos.y, z: bPos.z };
            continue;
        }

        // ======================================
        // STATE 3: FLOATING (SURFACE BOBBING)
        // ======================================
        if (data.state === "floating") {
            // Anchor hook to liquid surface with gentle sinusoidal bobbing
            if (data.lockedSurfaceY !== null) {
                const bobOffset = Math.sin(currentTick * 0.22) * 0.035;
                try {
                    bobber.clearVelocity();
                    bobber.teleport({
                        x: bPos.x,
                        y: data.lockedSurfaceY + bobOffset,
                        z: bPos.z
                    });
                } catch (e) {}
            }

            // Floating beacon particles
            if (data.isLava) {
                player.dimension.spawnParticle("minecraft:flame_particle", { x: bPos.x, y: bPos.y + 0.32, z: bPos.z });
                if (currentTick % 3 === 0) {
                    player.dimension.spawnParticle("minecraft:lava_particle", bPos);
                }
            } else {
                if (currentTick % 3 === 0) {
                    player.dimension.spawnParticle("minecraft:water_splash_particle", bPos);
                }
            }

            data.timer--;

            // Approach particles during last second
            if (data.timer <= 22 && data.timer > 0) {
                const pType = data.isLava ? "minecraft:flame_particle" : "minecraft:bubble_particle";
                player.dimension.spawnParticle(pType, {
                    x: bPos.x + (Math.random() - 0.5) * 0.7,
                    y: bPos.y + 0.2,
                    z: bPos.z + (Math.random() - 0.5) * 0.7
                });
            }

            if (data.timer <= 0) {
                // BITE OCCURS!
                data.state = "biting";
                data.biteExpireTick = currentTick + 75; // 3.75 seconds to react

                if (data.isLava) {
                    player.dimension.playSound("bucket.fill_lava", bPos, { volume: 1.0, pitch: 1.2 });
                    for (let i = 0; i < 8; i++) {
                        player.dimension.spawnParticle("minecraft:lava_particle", bPos);
                    }
                    player.onScreenDisplay.setActionBar("§6🎣 LAVA BITE! REEL IN NOW! 🎣§r");
                } else {
                    player.dimension.playSound("entity.fishing_bobber.splash", bPos, { volume: 1.0, pitch: 1.2 });
                    for (let i = 0; i < 8; i++) {
                        player.dimension.spawnParticle("minecraft:water_splash_particle", bPos);
                    }
                    player.onScreenDisplay.setActionBar("§e🎣 FISH BITE! REEL IN NOW! 🎣§r");
                }

                try {
                    bobber.applyImpulse({ x: 0, y: -0.16, z: 0 });
                } catch (e) {}
            }
            continue;
        }

        // ======================================
        // STATE 4: BITING (SPLASHING)
        // ======================================
        if (data.state === "biting") {
            const pType = data.isLava ? "minecraft:flame_particle" : "minecraft:water_splash_particle";
            player.dimension.spawnParticle(pType, { x: bPos.x, y: bPos.y + 0.28, z: bPos.z });

            if (currentTick >= data.biteExpireTick) {
                data.state = "floating";
                data.timer = Math.floor(Math.random() * 80 + 80);
                player.onScreenDisplay.setActionBar("§cThe fish got away...§r");
                player.dimension.playSound("random.pop", player.location, { volume: 0.6, pitch: 0.8 });
            }
        }
    }
}, 1);

/**
 * Draws an ultra-fine, continuous string / wire line between rod wand tip and hook.
 * Uses high-frequency 1x1 micro-pixels to form an unbroken, seamless connection.
 */
function drawConnectedString(dimension, start, end, dist, isLava) {
    // Ultra-frequent stepping (every ~0.022 blocks) ensures razor-thin hairline overlap without visible gaps
    const stepCount = Math.max(40, Math.min(220, Math.floor(dist / 0.022)));
    const particleId = isLava ? "advanced_fishing:fishing_line_lava" : "advanced_fishing:fishing_line";

    for (let i = 1; i <= stepCount; i++) {
        const t = i / (stepCount + 1);
        const x = start.x + (end.x - start.x) * t;
        const z = start.z + (end.z - start.z) * t;
        
        // Realistic catenary droop under gravity matching vanilla curve profile
        const sag = Math.sin(t * Math.PI) * Math.min(0.65, dist * 0.048);
        const y = start.y + (end.y - start.y) * t - sag;

        const loc = { x, y, z };
        try {
            dimension.spawnParticle(particleId, loc);
        } catch (e) {}
    }
}

function isNearChum(dimId, loc) {
    for (const z of activeChumZones) {
        if (z.dimensionId === dimId) {
            const dx = z.x - loc.x;
            const dy = z.y - loc.y;
            const dz = z.z - loc.z;
            if (dx * dx + dy * dy + dz * dz <= 5 * 5) {
                return true;
            }
        }
    }
    return false;
}

// ==========================================
// EATING SPECIAL FISH EFFECTS
// ==========================================

world.afterEvents.itemCompleteUse.subscribe((event) => {
    const player = event.source;
    const item = event.itemStack;

    if (!player || !item) return;

    const id = item.typeId;

    if (id === "advanced_fishing:mandarinfish") {
        player.addExperience(5);
        player.dimension.playSound("random.orb", player.location, { volume: 0.8, pitch: 1.2 });
        player.onScreenDisplay.setActionBar("§b+5 Experience gained!§r");
    } else if (id === "advanced_fishing:cave_trout") {
        player.addEffect("resistance", 200, { amplifier: 1, showParticles: true });
        player.onScreenDisplay.setActionBar("§7You feel hardened against attacks!§r");
    } else if (id === "advanced_fishing:magma_jellyfish" || id === "advanced_fishing:blaze_pike" || id === "advanced_fishing:flarefin_koi") {
        player.setOnFire(5, true);
        player.onScreenDisplay.setActionBar("§cThe scorching heat sets you ablaze!§r");
    } else if (id === "advanced_fishing:spookyfin") {
        player.addEffect("blindness", 300, { amplifier: 1 });
        player.onScreenDisplay.setActionBar("§8Your vision darkens completely...§r");
    } else if (id === "advanced_fishing:withered_crucian") {
        player.addEffect("wither", 200, { amplifier: 1 });
        player.onScreenDisplay.setActionBar("§8A withering decay consumes you...§r");
    } else if (id === "advanced_fishing:blue_jellyfish" || id === "advanced_fishing:green_jellyfish" || id === "advanced_fishing:cursed_koi") {
        player.addEffect("poison", 200, { amplifier: 1 });
        player.onScreenDisplay.setActionBar("§2Venom courses through your body!§r");
    }
});

// Clean up expired chum zones
system.runInterval(() => {
    const currentTick = system.currentTick;
    for (let i = activeChumZones.length - 1; i >= 0; i--) {
        const zone = activeChumZones[i];
        if (currentTick >= zone.expireTick) {
            activeChumZones.splice(i, 1);
        }
    }
}, 40);

console.warn("§6[Advanced Fishing] V2.0 Blazing Rod casting, reeling comeback & visible string active!§r");
