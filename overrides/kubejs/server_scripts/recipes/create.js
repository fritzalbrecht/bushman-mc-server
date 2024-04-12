ServerEvents.recipes(event => { 

  global.mechanicalCrafting(event, "create:mechanical_drill", [
		'D',
		'I',
		'C',
	  ], {
      D: "thermal:drill_head",
      I: "#forge:storage_blocks/steel",
      C: "create:railway_casing"
	})

  event.shaped(
    Item.of("egg", 32),
    [ 
      'XO'
    ],
    { O: Item.of("hostilenetworks:overworld_prediction"), X: Item.of("feather") }
  )

  // extra splashing yields
  event.remove({id: 'create:splashing/thermal/crushed_raw_nickel'})
  event.recipes.create.splashing([
      Item.of("thermal:nickel_nugget", 9), 
      Item.of("thermal:niter_dust").withChance(0.2)
    ], Item.of("create:crushed_raw_nickel"))

  event.remove({id: 'create:splashing/thermal/crushed_raw_lead'})
  event.recipes.create.splashing([
      Item.of("mekanism:nugget_lead", 9), 
      Item.of("thermal:sulfur").withChance(0.2)
    ], Item.of("create:crushed_raw_lead"))

  event.remove({id: 'create:splashing/thermal/crushed_raw_silver'})
  event.recipes.create.splashing([
      Item.of("thermal:silver_nugget", 9), 
      Item.of("thermal:apatite_dust").withChance(0.2)
    ], Item.of("create:crushed_raw_silver"))


  event.remove({id: 'create:milling/calcite'})
  event.remove({id: 'create:crushing/calcite'})

  event.remove({id: 'create:crushing/veridium'})
  event.remove({id: 'create:crushing/veridium_recycling'})
    event.recipes.createCrushing([
        Item.of("raw_copper").withChance(0.03),
        Item.of("mekanism:raw_lead").withChance(0.03),
        Item.of("mekanism:raw_uranium").withChance(0.03),
        Item.of("create:experience_nugget").withChance(0.1)
      ], Item.of("create:veridium"))

      
    event.remove({id: 'create:crushing/ochrum'})
    event.remove({id: 'create:crushing/ochrum_recycling'})
    event.recipes.createCrushing([
        Item.of("minecraft:raw_gold").withChance(0.03),
        Item.of("thermal:raw_silver").withChance(0.03),
        Item.of("mekanism:dust_fluorite").withChance(0.03),
        Item.of("lapis_lazuli").withChance(0.01),
        Item.of("create:experience_nugget").withChance(0.1)
      ], Item.of("create:ochrum"))

    event.remove({id: 'create:crushing/crimsite'})
    event.remove({id: 'create:crushing/crimsite_recycling'})
    event.recipes.createCrushing([
        Item.of("raw_iron").withChance(0.03),
        Item.of("thermal:raw_nickel").withChance(0.03),
        Item.of("mekanism:raw_tin").withChance(0.03),
        Item.of("create:experience_nugget").withChance(0.1)
      ], Item.of("create:crimsite"))

      event.remove({id: 'create:crushing/asurine'})
      event.remove({id: 'create:crushing/asurine_recycling'})
      event.recipes.createCrushing([
          Item.of("create:raw_zinc").withChance(0.03),
          Item.of("mekanism:raw_osmium").withChance(0.03),
          Item.of("create:experience_nugget").withChance(0.1)
        ], Item.of("create:asurine"))
})