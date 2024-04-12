ServerEvents.recipes(event => {
    global.manualItemApplication(event, Item.of("budding_amethyst"), Ingredient.of("create:sand_paper"), Item.of("ae2:flawless_budding_quartz"))

	event.remove({ output: Item.of("ae2:engineering_processor_press")});
    event.remove({ output: Item.of("ae2:logic_processor_press")});
    event.remove({ output: Item.of("ae2:silicon_press")});
    event.remove({ output: Item.of("ae2:calculation_processor_press")});

    event.remove({ output: Item.of("ae2:inscriber")});
    event.remove({ output: Item.of("ae2things:advanced_inscriber")});
	event.shaped(Item.of("8x ae2:sky_stone_block"), [
	 	'SSS',
	 	'SCS',
	 	'SSS'
	   ], {
	 	S: Item.of("stone"),
	 	C: Item.of("ae2:fluix_crystal")
	})

	var ae2Processor = (inputItem, printed, output) => {
		let silicon = Item.of("ae2:printed_silicon");
		event.recipes.createSequencedAssembly(
			[ Item.of(printed).withChance(100.0) ],
			silicon,
			[
				event.recipes.createDeploying(silicon, [silicon, inputItem]),
				event.recipes.createPressing(silicon, silicon),
				event.recipes.createPressing(silicon, silicon)
			])
			.transitionalItem(silicon)
			.loops(1)
 
		event.recipes.createSequencedAssembly(
			[ Item.of(output).withChance(100.0) ],
			printed,
			[
				event.recipes.createFilling(printed, [ printed,Fluid.of("pneumaticcraft:plastic", 100) ]),
				event.recipes.createDeploying(printed, [printed, Item.of("redstone")]),
				event.recipes.createPressing(printed, printed),
				event.recipes.createPressing(printed, printed)
			])
			.transitionalItem(printed)
			.loops(1)
	}

	ae2Processor(Item.of("ae2:certus_quartz_crystal"), 'ae2:printed_calculation_processor', 'ae2:calculation_processor')
	ae2Processor(Item.of("thermal:enderium_ingot"), 'ae2:printed_engineering_processor', 'ae2:engineering_processor')
	ae2Processor(Item.of("thermal:lumium_ingot"), Item.of("ae2:printed_logic_processor"), Item.of("ae2:logic_processor"))
	
	event.recipes.create.cutting(Item.of("ae2:printed_silicon"), Item.of("ae2:silicon"));
	
	var ae2Core = (input, core) => {
		event.remove({ output: core });
		event.custom({
			type: 'pneumaticcraft:pressure_chamber',
			inputs: [
				Item.of("ae2:logic_processor"),
				Item.of("ae2:fluix_pearl"),
				input
			],
			pressure: 4.0,
			results: [
				core
			]
		})
	}

	ae2Core(Item.of("ae2:certus_quartz_crystal"), Item.of("3x ae2:annihilation_core"))
	ae2Core(Item.of("quartz"), Item.of("3x ae2:formation_core"))

	

    // var item = Item.of("ae2:calculation_processor_press");
    // event.remove({ output: item })
	// event.shaped(item, [
	// 	' I ',
	// 	'ICI',
	// 	' I '
	//   ], {
	// 	I: Item.of("create:iron_sheet"),
	// 	C: Item.of("ae2:certus_quartz_crystal")
	// })

    // item = Item.of("ae2:engineering_processor_press");
    // event.remove({ output: item })
	// event.shaped(item, [
	// 	' I ',
	// 	'ICI',
	// 	' I '
	//   ], {
	// 	I: Item.of("create:iron_sheet"),
	// 	C: Item.of("diamond")
	// })
 
    // item = Item.of("ae2:logic_processor_press");
    // event.remove({ output: item })
	// event.shaped(item, [
	// 	' I ',
	// 	'ICI',
	// 	' I '
	//   ], {
	// 	I: Item.of("create:iron_sheet"),        
	// 	C: Item.of("gold_ingot")
	// })

    // item = Item.of("ae2:silicon_press");
    // event.remove({ output: item })
	// event.shaped(item, [
	// 	' I ',
	// 	'ICI',
	// 	' I '
	//   ], {
	// 	I: Item.of("create:iron_sheet"),        
	// 	C: Item.of("ae2:silicon")
	// })

    event.remove({ output: "ae2:quantum_link" })
	event.shaped("2x ae2:quantum_link", [
		'MOM',
		'OXO',
		'MOM'
	  ], {
		M: Item.of("kubejs:enchanted_modular_frame"),        
		O: Item.of("ae2:fluix_pearl"),
		X: Item.of("mekanism:pellet_antimatter")
	})
})