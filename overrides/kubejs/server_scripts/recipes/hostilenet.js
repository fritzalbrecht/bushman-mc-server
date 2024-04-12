
ServerEvents.recipes(event => {

	event.remove({ output: Item.of("hostilenetworks:empty_prediction") })
    event.recipes.create.mixing(
        Item.of("hostilenetworks:empty_prediction", 16), 
        [
            Item.of("thermal:invar_coin"), 
            Item.of("thermal:constantan_coin"), 
            Item.of("thermal:obsidian_glass")
        ])
        .superheated()
 
    event.replaceInput(
        { output: Item.of("hostilenetworks:loot_fabricator") },
        'minecraft:obsidian',
        Item.of("mekanism:steel_casing")
    ) 
}) 