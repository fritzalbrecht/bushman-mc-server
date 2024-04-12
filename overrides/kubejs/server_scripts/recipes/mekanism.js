ServerEvents.recipes(event => {
    global.mechanicalCrafting(event, "mekanism:steel_casing", [
		' SDS ',
		'SCECS',
		'DFMFD',
		'SCECS',
		' SDS '
	  ], {
		S: "#forge:storage_blocks/steel",
		D: "thermal:obsidian_glass", 
		F: Item.of("pneumaticcraft:module_expansion_card"),
		C: Item.of("thermal:machine_frame"),
		E: "mekanism:ultimate_control_circuit",
		M: Item.of("ae2:singularity")
	})

	event.remove({ output: Item.of("mekanism:module_gravitational_modulating_unit") })
	event.remove({ output: Item.of("mekanism:quantum_entangloporter") })

	event.remove({ output: Item.of("mekanism:qio_dashboard") })
	event.remove({ output: Item.of("mekanism:qio_drive_array") })
	event.remove({ output: Item.of("mekanism:qio_drive_hyper_dense") })
	event.remove({ output: Item.of("mekanism:qio_drive_base") })
	event.remove({ output: Item.of("mekanism:qio_drive_supermassive") })
	event.remove({ output: Item.of("mekanism:qio_drive_time_dilating") })
	event.remove({ output: Item.of("mekanism:qio_exporter") })
	event.remove({ output: Item.of("mekanism:qio_importer") })
	event.remove({ output: Item.of("mekanism:qio_redstone_adapter") })
	event.remove({ output: Item.of("mekanism:portable_qio_dashboard") })

	event.remove({ output: Item.of("mekanism:combiner") })
	event.remove({ output: Item.of("mekanismgenerators:gas_burning_generator") })

	event.remove({ output: Item.of("mekanismgenerators:wind_generator") })
	event.shaped(Item.of("mekanismgenerators:wind_generator"), [
		'OUO',
		'ICI',
		'IUI'
	  ], {
		I: Item.of("mekanism:ingot_osmium"),
		C: Item.of("pneumaticcraft:module_expansion_card"),
		U: Item.of("mekanism:ultimate_control_circuit"),
		O: Item.of("create:encased_fan")
	})
	
	global.mechanicalCrafting(event, Item.of("mekanism:digital_miner"), [
		' OCO ',
		'OZZZO',
		'LZXZL',
		'OZZZO',
		' GED '
	  ], {
		C: Item.of("sophisticatedstorage:netherite_chest"),
		X: "kubejs:package_logistics",
		Z: "mekanism:steel_casing",
		O: "mekanism:teleportation_core",
		L: "mekanism:logistical_sorter",
		G: "minecraft:deepslate_gold_ore",
		E: "minecraft:deepslate_emerald_ore",
		D: "minecraft:deepslate_diamond_ore"
	})


	global.mechanicalCrafting(event, Item.of("balancedflight:ascended_flight_ring"), [
		'  GGGGG  ',
		' GGGGGGG ',
		'GGGPOPGGG',
		'GGPABCPGG',
		'GGODYEOGG',
		'GGPFLHPGG',
		'GGGPOPGGG',
		' GGGGGGG ',
		'  GGGGG  ',
	  ], {
		G: Item.of("gold_block"),
		Y: Item.of("mekanism:hdpe_elytra"),
		P: Item.of("mekanism:pellet_antimatter"),
		O: Item.of("nether_star"),

		A: Item.of('kubejs:package_landscaping'),
		B: Item.of('kubejs:package_construction'),
		C: Item.of('kubejs:package_logistics'),
		D: Item.of('kubejs:package_industrial'),
		F: Item.of('kubejs:package_energistics'),
		L: Item.of('kubejs:package_lunch'),
		H: Item.of('kubejs:package_drink_cooler'),
		E: Item.of('kubejs:package_arcana'),
	})
})