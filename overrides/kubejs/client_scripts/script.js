//priority: 0
REIEvents.removeCategories(event => { 
    event.remove("minecraft:plugins/tag"); 
    event.remove("ae2:inscriber"); 
    event.remove("mekanism:combiner");
})

REIEvents.hide('item', event => {
    event.hide([
        Item.of("ae2:facade"),
        Item.of("mekanism:creative_fluid_tank"),
        Item.of("mekanism:quantum_entangloporter"),
        Item.of("mekanism:creative_chemical_tank"),
        Item.of("mekanism:module_gravitational_modulating_unit"),
        Item.of("ae2:inscriber"),
        Item.of("ae2things:advanced_inscriber"),
        ///chipped:.*_\d+/,
        /.*sand_cast/,
        /xaero.*/,
        /ae2.*press/,
        /mekanism:.*qio.*/,
        /mekanism:.*combin.*/,
        /ars_n.*flight/
    ])
})

if(!global.chipped_map) 
    global.chipped_map = {};

function replaceAll(string, find, replace) {
    return string.replace(new RegExp(find, 'g'), replace)
}

function getNameOfID(id) {
    let output = "";
    id = replaceAll(id, ":", " ");
    id = replaceAll(id, "_", " ")

    let parts = id.split(" ");
    for (let i = 0; i < parts.length; i++) {
        output += parts[i].substring(0, 1).toUpperCase() + parts[i].substring(1);
        if (i < parts.length - 1) {
            output += " ";
        } else {
            output += "s";
        }
    }
    return output;
}

function groupModTags(modName, event, exclude) {
    const modIngredient = Ingredient.of(`@${modName}`)

    modIngredient.stacks.toList().stream()
        .flatMap(stack => stack.tags)
        .distinct() // Exclude duplicate tag entries
        .filter(tag => tag.toString().indexOf(modName) !== -1)
        .forEach(tag => {
            const path = new String(tag.toString().split(`${modName}:`)[1].split(']')[0])
            // Human-readable title case, e.g white_wool -> White Wool
            const name = path.replace(/^(\w)/, c => c.toUpperCase())
                            .replace(/_(\w)/g, (_, c) => " " + c.toUpperCase()).toString()

            if (!exclude) 
                event.groupItemsByTag(`kubejs:rei_groups/${modName}/${path}`, name, `${modName}:${path}`)
            else {
                let items = Ingredient.of(`#${modName}:${path}`).itemIds
                    .filter(item => Item.of(item).getMod() == `${modName}`)
                event.groupItems(`kubejs:rei_groups/${modName}/${path}`, name, items)
            }
        })      
}
 
REIEvents.groupEntries(e => {
    const useNbt = [
        'potion', 
        'enchanted_book', 
        'splash_potion', 
        'tipped_arrow', 
        'lingering_potion'
    ] 

    useNbt.forEach(id => {
        const item = Item.of(id)
        const { namespace, path } = Utils.id(item.id)
        e.groupSameItem(`kubejs:rei_groups/${namespace}/${path}`, item.getDisplayName(), item)
    })

    const stoneTypes = [
        'Granite',
        'Diorite',
        'Andesite',
        'Deepslate',
        'Dripstone',
        'Calcite',
        'Tuff',
        'Limestone',
        'Scoria',
        'Scorchia',
        'Veridium',
        'Ochrum',
        'Asurine',
        'Crimsite'
    ]
    stoneTypes.forEach(type => {
        e.groupItemsByTag('kubejs:rei_groups/stone_type_' + type.toLowerCase(), type, 'create:stone_types/' + type.toLowerCase())
    })

    e.groupItems('kubejs:rei_groups/wall_lamps', 'Wall Lamps', /wall_lamp/)
    e.groupItems('kubejs:rei_groups/plastic_brick', 'Plastic Bricks', /plastic_brick/)
    e.groupItems('kubejs:rei_groups/potion_charm', 'Potion Charms', /potion_charm/)
    e.groupItems('kubejs:rei_groups/spawn_eggs', 'Spawn Eggs', /spawn_egg/)
    e.groupItems('kubejs:rei_groups/boats', 'Boats', /boat/)
    e.groupItems('kubejs:rei_groups/carpets', 'Carpets', /carpet/)
    e.groupItemsByTag('kubejs:rei_groups/bed', 'Bed', 'minecraft:beds')
    e.groupItems('kubejs:rei_groups/shulker_box', 'Shulker Box', /shulker_box/)
    e.groupItems('kubejs:rei_groups/terracotta', 'Terracotta', /terracotta/)
    e.groupItems('kubejs:rei_groups/coral', 'Coral', /coral/)
    e.groupItems('kubejs:rei_groups/concrete_powder', 'Concrete Powder', /concrete_power/)
    e.groupItems('kubejs:rei_groups/pressure_plates', 'Pressure Plates', /pressure_plate/)
    e.groupItems('kubejs:rei_groups/packed_mud', 'Packed Mud', /packed_mud/)
    e.groupItems('kubejs:rei_groups/conductor_caps', 'Conductor Caps', /conductor_cap/)
    e.groupItems('kubejs:rei_groups/color_detector_rail', 'Detector Rails', /color_detector_rail/)
    e.groupItems('kubejs:rei_groups/copper_shingle', 'Copper Shingles', /copper_shingle/)
    e.groupItems('kubejs:rei_groups/copper_tile', 'Copper Tile', /copper_tile/)
    e.groupItemsByTag('kubejs:rei_groups/banner', 'Banners', 'minecraft:banners')
    // e.groupItemsByTag('kubejs:rei_groups/vh_posts', 'Posts', 'valhelsia_structures:posts')
    // e.groupItemsByTag('kubejs:rei_groups/vh_cut_posts', 'Cut Posts', 'valhelsia_structures:cut_posts')
    // e.groupItemsByTag('kubejs:rei_groups/vh_sleepingbags', 'Sleeping Bags', 'valhelsia_structures:sleeping_bags')
    // e.groupItemsByTag('kubejs:rei_groups/vh_jars', 'Jars', 'valhelsia_structures:jars')
    // e.groupItemsByTag('kubejs:rei_groups/vh_bigjars', 'Big Jars', 'valhelsia_structures:big_jars')
    // e.groupItemsByTag('kubejs:rei_groups/handcrafted_boards', 'Handcrafted Boards', 'handcrafted:boards')
    // e.groupItemsByTag('kubejs:rei_groups/handcrafted_sheets', 'Handcrafted Sheets', 'handcrafted:sheets')
    // e.groupItemsByTag('kubejs:rei_groups/handcrafted_cushions', 'Handcrafted Cushions', 'handcrafted:cushions')
    // e.groupItemsByTag('kubejs:rei_groups/handcrafted_fancy_beds', 'Handcrafted Fancy Beds', 'handcrafted:fancy_beds')
    // e.groupItemsByTag('kubejs:rei_groups/handcrafted_side_tables', 'Handcrafted Side Tables', 'handcrafted:side_tables')
    // e.groupItemsByTag('kubejs:rei_groups/handcrafted_wooden_benches', 'Handcrafted Wooden Benches', 'handcrafted:wooden_benches')
    // e.groupItemsByTag('kubejs:rei_groups/handcrafted_dining_benches', 'Handcrafted Dining Benches', 'handcrafted:dining_benches')
    // e.groupItemsByTag('kubejs:rei_groups/handcrafted_cupboards', 'Handcrafted Cupboards', 'handcrafted:cupboards')
    // e.groupItemsByTag('kubejs:rei_groups/handcrafted_desks', 'Handcrafted Desks', 'handcrafted:desks')
    // e.groupItemsByTag('kubejs:rei_groups/handcrafted_counters', 'Handcrafted Counters', 'handcrafted:counters')
    // e.groupItemsByTag('kubejs:rei_groups/handcrafted_drawers', 'Handcrafted Drawers', 'handcrafted:drawers')
    // e.groupItemsByTag('kubejs:rei_groups/handcrafted_shelves', 'Handcrafted Shelves', 'handcrafted:shelves')
    // e.groupItemsByTag('kubejs:rei_groups/handcrafted_trims', 'Handcrafted Trims', 'handcrafted:trims')
    // e.groupItemsByTag('kubejs:rei_groups/handcrafted_nightstands', 'Handcrafted Nightstands', 'handcrafted:nightstands')
    // e.groupItemsByTag('kubejs:rei_groups/handcrafted_beds', 'Handcrafted Beds', 'handcrafted:beds')
    // e.groupItemsByTag('kubejs:rei_groups/handcrafted_chairs', 'Handcrafted Chairs', 'handcrafted:chairs')
    // e.groupItemsByTag('kubejs:rei_groups/handcrafted_tables', 'Handcrafted Tables', 'handcrafted:tables')
    // e.groupItemsByTag('kubejs:rei_groups/handcrafted_couches', 'Handcrafted Couches', 'handcrafted:couches')
    e.groupItemsByTag('kubejs:rei_groups/comforts_hammocks', 'Hammocks', 'comforts:hammocks')
    e.groupItemsByTag('kubejs:rei_groups/comforts_sleeping_bags', 'Hammocks', 'comforts:sleeping_bags')

    e.groupItems('kubejs:rei_groups/sophisticatedbackpacks', 'Backpacks', /sophisticatedbackpacks:backpack/)
    
    e.groupItems('kubejs:rei_groups/limited_4', 'Limited Barrel 4', /sophisticatedstorage:limited_.*_4/)
    e.groupItems('kubejs:rei_groups/limited_3', 'Limited Barrel 3', /sophisticatedstorage:limited_.*_3/)
    e.groupItems('kubejs:rei_groups/limited_2', 'Limited Barrel 2', /sophisticatedstorage:limited_.*_2/)
    e.groupItems('kubejs:rei_groups/limited_1', 'Limited Barrel 1', /sophisticatedstorage:limited_.*_1/)
    e.groupItems('kubejs:rei_groups/sophisticated_netherite_chests', 'Netherite Chests', /sophisticatedstorage:netherite_.*/)
    e.groupItems('kubejs:rei_groups/sophisticated_diamond_chests', 'Diamond Chests', /sophisticatedstorage:diamond_.*/)
    e.groupItems('kubejs:rei_groups/sophisticated_gold_chests', 'Gold Chests', /sophisticatedstorage:gold_.*/)
    e.groupItems('kubejs:rei_groups/sophisticated_iron_chests', 'Iron Chests', /sophisticatedstorage:iron_.*/)
    e.groupItems('kubejs:rei_groups/sophisticated_chests', 'Chests', /sophisticatedstorage:(barrel|chest)/)

    e.groupItems('kubejs:rei_groups/productive_bees_chips', 'Chips', /productivebees:stone_chip/)
    //e.groupItems('kubejs:rei_groups/valhelsia_furniture', 'Valhelsia Furniture', /valhelsia_furniture:.*/)

    groupModTags('chipped', e, false)
})