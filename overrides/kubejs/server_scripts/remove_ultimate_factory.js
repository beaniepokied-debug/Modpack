ServerEvents.recipes(event => {
    // Remove Ultimate Factory diamond recipe
    event.remove({
        mod: 'create_ultimate_factory',
        output: 'minecraft:diamond'
    })

    // Remove Ultimate Factory netherite scrap recipe
    event.remove({
        type: 'create:crushing',
        input: 'minecraft:nether_bricks'
    })

    // Recreate it without Netherite Scrap
    event.recipes.create.crushing([
        'minecraft:nether_brick',
        Item.of('minecraft:nether_brick').withChance(0.25)
    ], 'minecraft:nether_bricks')
})
