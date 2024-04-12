// priority: 0

StartupEvents.registry('block', event => {
	event.create('amethyst_bronze_block')
		.material('metal')
		.hardness(5.0)
		.displayName('Block of Amethyst Bronze')
		.tagBlock("forge:storage_blocks")
		.tagBlock("forge:storage_blocks/amethyst_bronze")
		.requiresTool(false)
})

StartupEvents.registry('item', event => {
	//event.create('empty_package').displayName('Empty Package')
	event.create('amethyst_bronze_ingot')
		.displayName('Amethyst Bronze Ingot')
		.tag("forge:ingots")
		.tag("forge:ingots/amethyst_bronze")
	
	// event.create('heart_of_the_shork').displayName('Heart of the Shork')

	event.create('package_unfilled').displayName('Empty Package')
	event.create('package_landscaping').displayName('Packaged Landscaping Materials')
	event.create('package_construction').displayName('Packaged Construction Materials')
	event.create('package_logistics').displayName('Packaged Logistics Materials')
	event.create('package_industrial').displayName('Packaged Industrial Materials')
	event.create('package_energistics').displayName('Packaged Energistics Materials')
	event.create('package_lunch').displayName('Packaged Lunch')
	event.create('package_drink_cooler').displayName('Packaged Drink Cooler')
	event.create('package_arcana').displayName('Packaged Arcana')

	event.create('modular_frame').displayName('Modular Frame')
	event.create('enchanted_modular_frame').displayName('Enchanted Modular Frame').glow(true)
})

WorldgenEvents.remove(event => {
	event.removeFeatureById("surface_structures", [
		"dungeons_arise:thornborn_towers",
		"dungeons_arise:bandit_towers"
	])

	event.removeOres(ores => {
		ores.blocks = [ "thermal:apatite_ore", "thermal:deepslate_apatite_ore" ] 
	})
 
	event.printFeatures('')
})
 
// const $TEAM_EVENTS = Java.loadClass('dev.ftb.mods.ftbteams.event.TeamEvent');

// ArchEvents.registry(event => {
//     event.register('ftb.teams.created', $TEAM_EVENTS, 'CREATED');
// });