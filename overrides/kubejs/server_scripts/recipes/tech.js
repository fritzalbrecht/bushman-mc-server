ServerEvents.recipes(event => {
	// global.mechanicalCrafting(event, "biggerreactors:reactor_terminal", [
	// 	' SSS ',
	// 	'SCDCS',
	// 	'SDEDS',
	// 	'SCDCS',
	// 	' SSS '
	//   ], {
	// 	S: "biggerreactors:reactor_casing",
	// 	C: "#forge:storage_blocks/uranium", 
	// 	D: "kubejs:enchanted_modular_frame",
	// 	E: "mekanism:advanced_control_circuit"
	// }) 

	event.remove({ output: "ae2:drive" })
	event.shaped("ae2:drive", [
		'IAI',
		'SCS',
		'IAI'
	  ], {
		I: 'minecraft:iron_ingot',
		S: 'ae2:fluix_glass_cable',
		A: 'ae2:engineering_processor',
		C: 'kubejs:modular_frame'
	  })

	event.remove({ output: "thermal:machine_frame" })
	event.shaped("thermal:machine_frame", [
		'IAI',
		'ACA',
		'IAI'
	  ], {
		I: 'kubejs:amethyst_bronze_ingot',
		A: 'create_crystal_clear:train_glass_casing',
		C: 'thermal:tin_gear'
	  })
}) 