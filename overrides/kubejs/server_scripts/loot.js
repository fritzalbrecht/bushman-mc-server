LootJS.modifiers(event => {
	event
        .addEntityLootModifier("minecraft:iron_golem")
		.removeLoot(ItemFilter.ALWAYS_TRUE)
		.pool((p) => {
			p.addLoot("minecraft:iron_ingot");
			p.applyLootingBonus(1);
		});

	event.addLootTableModifier("sebastrnlib:grant_book_on_first_join")
        .removeLoot(ItemFilter.ALWAYS_TRUE)

    event.addLootTableModifier(/.*/)
        .removeLoot(ItemFilter.custom(item => {  
            let namespace = item.id.substring(0,item.id.indexOf(':'));
			return namespace == "pneumaticcraft"
		}));

	event.addLootTableModifier("minecraft:chests/end_city_treasure")
		.addWeightedLoot([3, 10], [
            Item.of("minecraft:diamond").withChance(50)
        ]);

	event.addLootTableModifier([
		"minecraft:chests/simple_dungeon",
		"minecraft:chests/pillager_outpost",
		"minecraft:chests/shipwreck_treasure",
		"minecraft:chests/desert_pyramid",
		"minecraft:chests/buried_treasure",
		"minecraft:chests/abandoned_mineshaft",
		/.*village_.*/
	])
	.pool((p) => {
        p.addLoot("minecraft:book")
		p.enchantWithLevels([15, 30])
    })
	
	event.addLootTableModifier([
		"minecraft:chests/end_city_treasure"
	]).pool((p) => {
        p.addLoot("minecraft:book").enchantWithLevels([30, 60])
    })
});