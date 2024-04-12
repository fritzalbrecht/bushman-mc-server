ServerEvents.recipes(event => {

    event.shapeless(
      Item.of("kubejs:amethyst_bronze_ingot", 9),
      [ "kubejs:amethyst_bronze_block" ]
    )

    event.shaped(
      Item.of("kubejs:amethyst_bronze_block"),
      [ 
        'OOO',
        'OOO',
        'OOO'
      ],
      { O: "kubejs:amethyst_bronze_ingot"}
    )
  
    event.recipes.create.mixing('mekanism:ingot_bronze', [Item.of("copper_ingot", 3), 'mekanism:ingot_tin']).heated()
    event.recipes.create.mixing('kubejs:amethyst_bronze_ingot', ['amethyst_block', 'mekanism:ingot_bronze']).heated()

    // extra Create Extruder Stone types
    global.mechanicalExtruderStoneVariant(event, 'minecraft:stone')
    global.mechanicalExtruderStoneVariant(event, 'minecraft:granite')
    global.mechanicalExtruderStoneVariant(event, 'minecraft:andesite') 
    global.mechanicalExtruderStoneVariant(event, 'minecraft:deepslate') 
    global.mechanicalExtruderStoneVariant(event, 'minecraft:calcite') 

    var chippedTables = [
        "chipped:alchemy_bench",
        "chipped:botanist_workbench",
        "chipped:carpenters_table",
        "chipped:glassblower",
        "chipped:loom_table",
        "chipped:mason_table",
        "chipped:tinkering_table",
    ];
    
    // chippedTables.forEach((table) => {
    //   event.forEachRecipe({ type: table }, (recipe) => {
    //     const tags = JSON.parse(recipe.json.toString()).tags;
    //     tags.forEach((tag) => {
    //       if (tag.substring(8) == "packed_muc" || tag.includes("copper"))
    //             return;

    //       Ingredient.of(`#${tag}`).getStacks().forEach(item => {
    //         event.recipes.create.cutting(item.id, tag.substring(8));
    //       });
    //     });
    //   });
    // });

    event.recipes.createMechanicalCrafting(Item.of("minecraft:end_portal_frame", 12), [
      'OOOOO',
      'OIIIO',
      'OIDIO',
      'EEEEE',
      'EEEEE',
      ], {
      D: "minecraft:dragon_egg",
      E: "minecraft:end_stone",
      I: Item.of("apotheosis:infused_breath"),
      O: Item.of("thermal:enderium_ingot")
    })
})