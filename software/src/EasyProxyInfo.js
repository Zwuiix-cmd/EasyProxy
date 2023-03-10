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

let DEFAULT_PORT = 19132;
let DEFAULT_SERVER_ID = 0;
let initialEasyInstance;
module.exports = {
    Discord: "https://discord.gg/easyproxy",
    Website: "https://easyproxy.com/",
    Authors: "Zwuiix, UnChatSauvage, Nya Enzo.",

    sleep(ms)
    {
        return new Promise(resolve => setTimeout(resolve, ms));
    },

    getDefaultPort()
    {
        return DEFAULT_PORT;
    },

    setDefaultPort(str)
    {
        DEFAULT_PORT=str;
    },

    getServerID()
    {
        return DEFAULT_SERVER_ID;
    },

    setInitialEasyInstance(instance)
    {
        initialEasyInstance=instance;
    },

    getInitialEasyInstance()
    {
        return initialEasyInstance;
    },

    setNextServerID(str)
    {
        DEFAULT_SERVER_ID=str;
    }
}