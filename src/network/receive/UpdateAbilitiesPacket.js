module.exports = {
    name: "update_abilities",

    receive(Player, packet)
    {
        if(Player.getCheatManager().isFly()){
            console.log(Player.getAbilities().abilities[0])
            packet.params.abilities=Player.getAbilities().abilities[0];
        }else {
            Player.setAbilities(packet.params);
        }
    }
}