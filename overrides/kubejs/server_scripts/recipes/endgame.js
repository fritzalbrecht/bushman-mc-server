
ServerEvents.recipes(event => {
	// global.mechanicalCrafting(event, "blahaj:blue_shark", [
	// 	'   B   ',
	// 	'BBBBB B',
	// 	'BHBBBBB',
	// 	' PWBW  ',
	// 	], {
	// 	B: "minecraft:light_blue_wool",
	// 	W: "minecraft:white_wool", 
	// 	H: "kubejs:heart_of_the_shork",
	// 	P: "minecraft:pink_dye"
	// })

	// event.shaped("16x kubejs:heart_of_the_shork", [
	// 	'ABC',
	// 	'DEF',
	// 	'GHI'
	//   ], {
	// 	A: Item.of('kubejs:package_landscaping'),
	// 	B: Item.of('kubejs:package_construction'),
	// 	C: Item.of('kubejs:package_logistics'),
	// 	D: Item.of('kubejs:package_industrial'),
	// 	E: Item.of("heart_of_the_sea"),
	// 	F: Item.of('kubejs:package_energistics'),
	// 	G: Item.of('kubejs:package_lunch'),
	// 	H: Item.of('kubejs:package_drink_cooler'),
	// 	I: Item.of('kubejs:package_arcana'),
	// })

	event.recipes.createMechanicalCrafting("kubejs:modular_frame", [
		' OOO ',
		'OXWXO',
		'OW WO',
		'OXWXO',
		' OOO '
	  ], {
		O: "createaddition:iron_rod",
		X: "#forge:storage_blocks/steel", 
		W: "createaddition:iron_wire",
	})
		
	event.recipes.create.filling("kubejs:enchanted_modular_frame", ["kubejs:modular_frame", Fluid.of("create_enchantment_industry:hyper_experience", 1000)])
	
	let inter = 'kubejs:package_unfilled'
	event.shapeless(inter, [Item.of("mekanism:cardboard_box"), Item.of("sophisticatedstorage:packing_tape")])

	event.recipes.createSequencedAssembly(
		[ Item.of('kubejs:package_construction').withChance(100.0) ],
		inter,
		[
			event.recipes.createDeploying(inter, [inter, Item.of("bricks")]),
			event.recipes.createDeploying(inter, [inter, Item.of("chipped:packed_mud_bricks")]),
			event.recipes.createDeploying(inter, [inter, Item.of("stripped_oak_log")]),
			event.recipes.createDeploying(inter, [inter, Item.of("create:ornate_iron_window")]),
			event.recipes.createDeploying(inter, [inter, Item.of("chipped:striped_yellow_concrete")]),
			event.recipes.createDeploying(inter, [inter, Item.of("create:copper_shingles")]),
			event.recipes.createDeploying(inter, [inter, Item.of("create:metal_girder")]),
			//event.recipes.createPressing(inter, inter)
		])
		.transitionalItem(inter)
		.loops(5000)



	event.recipes.createSequencedAssembly(
		[ Item.of('kubejs:package_landscaping').withChance(100.0) ],
		inter,
		[
			event.recipes.createDeploying(inter, [inter, Item.of("moss_block")]),
			event.recipes.createDeploying(inter, [inter, Item.of("grass_block")]),
			event.recipes.createDeploying(inter, [inter, Item.of("flowering_azalea_leaves")]),
			event.recipes.createDeploying(inter, [inter, Item.of("rooted_dirt")]),
			event.recipes.createDeploying(inter, [inter, Item.of("rose_bush")]),
			event.recipes.createDeploying(inter, [inter, Item.of("water_bucket")]),
			event.recipes.createDeploying(inter, [inter, Item.of("createaddition:biomass_pellet")]),
			//event.recipes.createPressing(inter, inter)
		])
		.transitionalItem(inter)
		.loops(5000)



	event.recipes.createSequencedAssembly(
		[ Item.of('kubejs:package_logistics').withChance(100.0) ],
		inter,
		[
			event.recipes.createDeploying(inter, [inter, Item.of("thermal:upgrade_augment_3")]),
			event.recipes.createDeploying(inter, [inter, Item.of("systeams:pneumatic_boiler")]),
			event.recipes.createDeploying(inter, [inter, Item.of("mekanism:ultimate_injecting_factory")]),
			event.recipes.createDeploying(inter, [inter, Item.of("mekanism:supercharged_coil")]),
			event.recipes.createDeploying(inter, [inter, Item.of("create:mechanical_arm")]),
			event.recipes.createDeploying(inter, [inter, Item.of("createaddition:tesla_coil")]),
			event.recipes.createDeploying(inter, [inter, Item.of("mekanism:antiprotonic_nucleosynthesizer")]),
			//event.recipes.createPressing(inter, inter)
		])
		.transitionalItem(inter)
		.loops(100)	



	event.recipes.createSequencedAssembly(
		[ Item.of('kubejs:package_arcana').withChance(100.0) ],
		inter,
		[
			event.recipes.createDeploying(inter, [inter, Item.of("apotheosis:infused_breath")]),
			event.recipes.createDeploying(inter, [inter, Item.of("balancedflight:flight_anchor")]),
			event.recipes.createDeploying(inter, [inter, Item.of("kubejs:enchanted_modular_frame")]),
			event.recipes.createDeploying(inter, [inter, Item.of("enchantinginfuser:enchanting_infuser")]),
			event.recipes.createDeploying(inter, [inter, Item.of("apotheosis:sigil_of_socketing")]),
			event.recipes.createDeploying(inter, [inter, Item.of("apotheosis:mythic_material")]),
		
			//event.recipes.createPressing(inter, inter)
		])
		.transitionalItem(inter)
		.loops(50)



	event.recipes.createSequencedAssembly(
		[ Item.of('kubejs:package_energistics').withChance(100.0) ],
		inter,
		[
			event.recipes.createDeploying(inter, [inter, Item.of("ae2things:disk_drive_256k")]), 
			event.recipes.createDeploying(inter, [inter, Item.of("ae2:spatial_anchor")]),
			event.recipes.createDeploying(inter, [inter, Item.of("ae2:singularity")]),
			event.recipes.createDeploying(inter, [inter, Item.of("ae2:drive")]),
			event.recipes.createDeploying(inter, [inter, Item.of("ae2:quantum_link")]),
			event.recipes.createDeploying(inter, [inter, Item.of("ae2:not_so_mysterious_cube")]),
			//event.recipes.createPressing(inter, inter)
		])
		.transitionalItem(inter)
		.loops(100)

			

	event.recipes.createSequencedAssembly(
		[ Item.of('kubejs:package_lunch').withChance(100.0) ],
		inter,
		[
			event.recipes.createDeploying(inter, [inter, Item.of("farmersdelight:noodle_soup")]),
			event.recipes.createDeploying(inter, [inter, Item.of("farmersdelight:honey_glazed_ham")]),
			event.recipes.createDeploying(inter, [inter, Item.of("delightful:deluxe_cheeseburger")]),
			event.recipes.createDeploying(inter, [inter, Item.of("farmersdelight:chocolate_pie")]),
			event.recipes.createDeploying(inter, [inter, Item.of("delightful:salmonberry_ice_cream")]),
			event.recipes.createDeploying(inter, [inter, Item.of("nethersdelight:stuffed_hoglin")]),
			event.recipes.createDeploying(inter, [inter, Item.of("enchanted_golden_apple")]),
			//event.recipes.createPressing(inter, inter)
		])
		.transitionalItem(inter)
		.loops(500)


	event.recipes.createSequencedAssembly(
		[ Item.of('kubejs:package_industrial').withChance(100.0) ],
		inter,
		[
			event.recipes.createDeploying(inter, [inter, Item.of("pneumaticcraft:compressed_iron_block")]),
			event.recipes.createDeploying(inter, [inter, Item.of("mekanismgenerators:fusion_reactor_frame")]),
			event.recipes.createDeploying(inter, [inter, Item.of("thermal:netherite_gear")]),
			event.recipes.createDeploying(inter, [inter, Item.of("thermal:cured_rubber_block")]),
			event.recipes.createDeploying(inter, [inter, Item.of("fluxnetworks:flux_block")]),
			event.recipes.createDeploying(inter, [inter, Item.of("create:railway_casing")]),
			event.recipes.createDeploying(inter, [inter, Item.of("railways:track_monorail")])
			//event.recipes.createPressing(inter, inter)
		])
		.transitionalItem(inter)
		.loops(100)

	event.recipes.createSequencedAssembly(
		[ Item.of('kubejs:package_drink_cooler').withChance(100.0) ],
		inter,
		[
			event.recipes.createDeploying(inter, [inter, Item.of("create:builders_tea")]),
			event.recipes.createDeploying(inter, [inter, Item.of("thermal:syrup_bottle")]),
			event.recipes.createDeploying(inter, [inter, Item.of("farmersdelight:milk_bottle")]),
			event.recipes.createDeploying(inter, [inter, Item.of("farmersdelight:chocolate_pie")]),
			event.recipes.createDeploying(inter, [inter, Item.of("delightful:berry_matcha_latte")]),
			event.recipes.createDeploying(inter, [inter, Item.of("create_enchantment_industry:hyper_experience_bottle")]),
			event.recipes.createDeploying(inter, [inter, Item.of("blue_ice")])
			//event.recipes.createPressing(inter, inter)
		])
		.transitionalItem(inter)
		.loops(500)
		
})