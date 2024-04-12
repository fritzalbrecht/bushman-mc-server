ServerEvents.recipes(event => {
    global.mechanicalCrafting(event, "productivebees:upgrade_base", [
		'  O  ',
		' OWO ',
		'OWWWO',
		'OWEWO',
		'OWWWO',
		' OWO ',
		'  O  '
	  ], {
		O: Item.of("compressedcreativity:brass_coated_upgrade_matrix"),
        W: Item.of("white_wool"),
        E: Item.of("productivebees:honey_treat")
	}) 
  
    event.forEachRecipe({output: /productivebees:expansion_box.*/}, r => {
        let wood = r.originalRecipeResult.getDescriptionId().substr(35);
        event.custom({
            type: "mekanism:nucleosynthesizing",
            duration: 1000,
            gasInput: {
                amount: 1000,
                gas: "mekanism:antimatter"
            },
            itemInput: {
                ingredient: {
                  item: "productivebees:advanced_" + wood + "_beehive"
                }
              },
              output: r.originalRecipeResult
        }).id(r.getOrCreateId()) 
    })

    event.forEachRecipe({output: /productivebees:advanced_.*_beehive/}, r => {
        let wood = r.originalRecipeResult.getDescriptionId().match(/block.productivebees.advanced_(.*)_beehive/)[1]
        event.shaped(r.originalRecipeResult, [
            'OOO',
            'IBI',
            'CXS'
          ], {
            O: Item.of(wood + "_planks"),
            C: "#forge:campfires",
            S: Item.of("shears"),
            B: Item.of("beehive"),
            I: Item.of("honeycomb_block"),
            X: Item.of("create:brass_block")
        }).id(r.getOrCreateId()) 
    }) 
})