/**
 *
 *  ███████╗ █████╗ ███████╗██╗   ██╗██████╗ ██████╗  ██████╗ ██╗  ██╗██╗   ██╗
 *  ██╔════╝██╔══██╗██╔════╝╚██╗ ██╔╝██╔══██╗██╔══██╗██╔═══██╗╚██╗██╔╝╚██╗ ██╔╝
 *  █████╗  ███████║███████╗ ╚████╔╝ ██████╔╝██████╔╝██║   ██║ ╚███╔╝  ╚████╔╝
 *  ██╔══╝  ██╔══██║╚════██║  ╚██╔╝  ██╔═══╝ ██╔══██╗██║   ██║ ██╔██╗   ╚██╔╝
 *  ███████╗██║  ██║███████║   ██║   ██║     ██║  ██║╚██████╔╝██╔╝ ██╗   ██║
 *  ╚══════╝╚═╝  ╚═╝╚══════╝   ╚═╝   ╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝   ╚═╝
 *
 *  Release by EasyProxy's Project!
 *  Github: https://https://github.com/Zwuiix-cmd/EasyProxy
 *
 */

class HungerManager
{
    player;

    food;
    saturation;

    /** @param Player {Player} */
    constructor(Player)
    {
        this.player = Player;
        this.food = this.player.food;
        this.saturation = this.player.saturation;
    }

    /** @returns {number} */
    getFood()
    {
        return this.food;
    }

    /** @returns {number} */
    getSaturation()
    {
        return this.saturation;
    }
    setFood(number)
    {
        this.food = number;
    }

    setSaturation(number)
    {
        this.saturation = number;
    }
}

module.exports = {HungerManager};