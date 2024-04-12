ServerEvents.recipes(event => {
	global.mechanicalCrafting(event, "enchantinginfuser:enchanting_infuser", [
		' SSS ',
		'SCDCS',
		'SDEDS',
		'SCDCS',
		' SSS '
	  ], {
		S: "minecraft:amethyst_shard",
		C: "apotheosis:echoing_sculkshelf", 
		D: "minecraft:wither_skeleton_skull",
		E: "apotheosis:ender_library"
	}) 
})