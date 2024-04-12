// const $ResourceLocation = Java.loadClass('net.minecraft.resources.ResourceLocation')
// const $BooleanProperty = Java.loadClass('dev.ftb.mods.ftbteams.property.BooleanProperty')

// ArchEvents.handle('ftb.teams.created', e => {
//     let event = e.args[0];
//     let team = event.team;
//     let property = $BooleanProperty(new $ResourceLocation("ftbchunks", "allow_fake_players"), true)
//     team.setProperty(property, true)
// });

MoreJSEvents.villagerTrades((event) => {
	event.forEachTrades((listings, level, profession) => {
    if (profession.toString() == "beekeeper" && level == 3.0)
      listings.clear()
    });
});

MoreJSEvents.updateVillagerOffers((event) => {
    // Remove all offers that are tools, armor, or enchantments.
    event.getOffers().removeIf((trade) => {
      let isNotAllowedTrade = trade
        .getOutput()
        .getId()
        .match(
          /.*ritual_flight/g
        );

        return !!isNotAllowedTrade;
    });
  });