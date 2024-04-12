global.mechanicalCrafting = (event, output, pattern, keys) => {
    event.remove({ output: output })
	event.recipes.createMechanicalCrafting(output, pattern, keys)
}

global.mechanicalExtruderStoneVariant = (event, output, catalyst) => {
    if (catalyst == undefined) catalyst = output;

    event.custom({
        type: 'create_mechanical_extruder:extruding',
        requiredBonks: 1,
        ingredients: ["minecraft:water", "minecraft:lava"],
        catalyst: {item: catalyst},
        result: output
    })

    //event.recipes.createMechanicalExtruderExtruding(output, [Fluid.water(1000), Fluid.lava(1000)]).withCatalyst(catalyst)
}


global.manualItemApplication = (event, input, item, output) => {
    event.recipes.createDeploying(output, [input, item])
    event.custom({
        type: 'create:item_application',
        ingredients: [
            input,
            item
        ],
        results: [
            output
        ]
    })
}